import { readdir, readFile, stat, writeFile } from "fs/promises";
import { join, relative, basename } from "path";
import { createHash } from "crypto";
import matter from "gray-matter";
import { marked } from "marked";
import Fuse from "fuse.js";

const WIKI_DIR = join(import.meta.dir, "wiki");
const ASSETS_URL_PREFIX = "/assets/";

// --- Types ---

export interface WikiPage {
  slug: string;
  title: string;
  type: string;
  domain: string;
  tags: string[];
  sources: string[];
  related: string[];
  created: string;
  updated: string;
  content: string;
  html: string;
  links: string[];
  category: string;
  path: string;
  wordCount: number;
  readingTime: number; // minutes
  headings: { level: number; text: string; id: string }[];
  mtime: number; // ms since epoch — filesystem modification time, used as fallback for updated
}

export interface LintIssue {
  kind: "orphan" | "broken-link" | "missing-type" | "missing-tags" | "missing-domain" | "stale" | "untyped-link" | "duplicate-title";
  slug: string;
  title: string;
  detail?: string;
}

// --- Helpers ---

export function extractWikilinks(content: string): string[] {
  // Strip image wikilinks (![[...]]) first so they don't count as wikilinks
  const withoutImages = content.replace(/!\[\[[^\]]+\]\]/g, "");
  const matches = withoutImages.match(/\[\[([^\]]+)\]\]/g) || [];
  // Support [[Page|alias]] syntax — keep the page, drop the alias
  return [...new Set(matches.map((m) => m.slice(2, -2).split("|")[0].trim()))];
}

export function slugify(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .replace(/[\s_]+/g, "-") // normalise whitespace AND underscores to hyphens
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

// Turn a heading text into a stable id (for TOC anchors)
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Resolve a wikilink name (e.g. "Philosophy_and_Meaning") to a page. Obsidian
// convention uses the filename as the link target, but our primary slug comes
// from the page title. When a title contains chars that slugify differently
// (e.g. "Philosophy & Meaning" → "philosophy-meaning" vs filename
// "Philosophy_and_Meaning" → "philosophy-and-meaning"), both link styles need
// to resolve. We maintain a filename alias map as a fallback.
export function resolveLink(
  name: string,
  pages: Map<string, WikiPage>,
  fileAliases?: Map<string, string>
): WikiPage | undefined {
  const slug = slugify(name);
  const direct = pages.get(slug);
  if (direct) return direct;
  const aliased = fileAliases?.get(slug);
  if (aliased) return pages.get(aliased);
  return undefined;
}

export function buildFileAliases(pages: Map<string, WikiPage>): Map<string, string> {
  const aliases = new Map<string, string>();
  for (const [slug, page] of pages) {
    const base = basename(page.path, ".md");
    const fileSlug = slugify(base);
    if (fileSlug && fileSlug !== slug && !pages.has(fileSlug)) {
      aliases.set(fileSlug, slug);
    }
  }
  return aliases;
}

export function wikilinksToHtml(
  content: string,
  pages: Map<string, WikiPage>,
  fileAliases?: Map<string, string>
): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, raw) => {
    const [name, alias] = raw.split("|").map((s: string) => s.trim());
    const display = alias || name;
    const page = resolveLink(name, pages, fileAliases);
    if (page) {
      return `<a href="/page/${page.slug}" class="wikilink" data-slug="${page.slug}">${display}</a>`;
    }
    return `<span class="wikilink broken" title="No page: ${name}">${display}</span>`;
  });
}

// Resolve image wikilinks (![[foo.png]]) to real <img> tags pointing at /assets/
export function imageWikilinksToHtml(md: string, assetSet: Set<string>): string {
  return md.replace(/!\[\[([^\]]+)\]\]/g, (_, raw) => {
    const name = raw.split("|")[0].trim();
    const filename = name.split("/").pop() || name;
    const exists = assetSet.has(filename);
    const href = `${ASSETS_URL_PREFIX}${encodeURIComponent(filename)}`;
    if (exists) {
      return `<img class="wiki-image" src="${href}" alt="${filename}" loading="lazy" />`;
    }
    return `<span class="image-ref image-missing" title="Asset not found">${filename}</span>`;
  });
}

export function markdownToHtml(md: string, assetSet: Set<string>): string {
  const withImages = imageWikilinksToHtml(md, assetSet);
  return marked.parse(withImages, { async: false }) as string;
}

// Extract headings (h1..h4) from raw markdown, for the page TOC.
// We parse the raw markdown rather than the HTML so we can keep original ordering
// cheaply. Fenced code blocks are skipped so "# foo" inside ``` isn't picked up.
export function extractHeadings(md: string): { level: number; text: string; id: string }[] {
  const headings: { level: number; text: string; id: string }[] = [];
  const seenIds = new Map<string, number>();
  let inFence = false;
  for (const line of md.split("\n")) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{1,4})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const level = m[1].length;
    // Strip markdown-ish inline syntax for display
    const text = m[2]
      .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, a, b) => b || a)
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1");
    let id = slugifyHeading(text);
    if (!id) continue;
    const count = seenIds.get(id) || 0;
    if (count > 0) id = `${id}-${count}`;
    seenIds.set(slugifyHeading(text), count + 1);
    headings.push({ level, text, id });
  }
  return headings;
}

// Inject heading ids into the rendered HTML so anchors work
export function injectHeadingIds(html: string, headings: { level: number; text: string; id: string }[]): string {
  const queue = [...headings];
  return html.replace(/<h([1-4])>([\s\S]*?)<\/h\1>/g, (match, lvl, inner) => {
    const h = queue.shift();
    if (!h) return match;
    return `<h${lvl} id="${h.id}">${inner}</h${lvl}>`;
  });
}

function wordCount(md: string): number {
  // Cheap word count: strip code fences + markdown punctuation then split on whitespace
  const cleaned = md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/[#*_>\[\]()~`|!-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return 0;
  return cleaned.split(" ").length;
}

function normalizeDate(v: any): string {
  if (!v) return "";
  if (typeof v === "string") return v.slice(0, 10);
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v).slice(0, 10);
}

// Coerce a frontmatter value into a string[]. gray-matter happily returns
// scalars or null if the YAML isn't a list.
function toStringArray(v: any): string[] {
  if (Array.isArray(v)) return v.map(String).filter((s) => s.length > 0);
  if (v == null || v === "") return [];
  if (typeof v === "string") return v.split(",").map((s) => s.trim()).filter(Boolean);
  return [String(v)];
}

// --- Load Wiki ---

// Cache of parsed + rendered pages, keyed by absolute file path. Reused
// across reloads: if a file's mtime is unchanged we skip re-reading and
// re-parsing markdown. HTML is additionally keyed by the slug set so it
// only re-renders when the set of linkable pages changes (i.e. a page
// was added/removed/renamed) — ordinary content edits only re-render the
// one file that changed.
interface ParseCacheEntry {
  mtime: number;
  slug: string;
  page: WikiPage; // page.html is the rendered HTML; invalidated when slugSig changes
  htmlSig: string; // slug set signature at time of render
}
const parseCache = new Map<string, ParseCacheEntry>();

// Cache the asset filename set at module scope. readdir on raw/assets ran on
// every loadWikiPages call; instead we stat the dir and only re-read when its
// mtime changes (i.e. an asset was added/removed). Behavior is preserved.
const ASSETS_DIR = join(import.meta.dir, "raw", "assets");
let assetSetCache: { mtime: number; set: Set<string> } | null = null;

async function loadAssetSet(): Promise<Set<string>> {
  let mtime: number;
  try {
    mtime = (await stat(ASSETS_DIR)).mtimeMs;
  } catch {
    // Missing/unreadable assets dir — preserve old behavior (empty set).
    assetSetCache = null;
    return new Set<string>();
  }
  if (assetSetCache && assetSetCache.mtime === mtime) {
    return assetSetCache.set;
  }
  const set = new Set<string>();
  try {
    const assets = await readdir(ASSETS_DIR);
    assets.forEach((a) => set.add(a));
  } catch {}
  assetSetCache = { mtime, set };
  return set;
}

function slugSetSignature(pages: Map<string, WikiPage>): string {
  // Cheap hash: sorted slugs joined. Only used to detect added/removed/renamed
  // pages so HTML (which resolves wikilinks) can be reused when the set is stable.
  return [...pages.keys()].sort().join("|");
}

async function parsePage(fullPath: string, relPath: string): Promise<WikiPage | null> {
  const st = await stat(fullPath);
  const cached = parseCache.get(fullPath);
  if (cached && cached.mtime === st.mtimeMs) {
    return cached.page;
  }

  try {
    let raw = await readFile(fullPath, "utf-8");
    // Normalize so files saved with a UTF-8 BOM, CRLF line endings, or a leading
    // blank line still match the frontmatter fence. For ordinary LF files these
    // are no-ops, so behavior is identical.
    if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
    raw = raw.replace(/\r\n/g, "\n").replace(/^\n+/, "");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
      const cleanedFm = fmMatch[1].replace(/\[\[/g, "").replace(/\]\]/g, "");
      raw = `---\n${cleanedFm}\n---` + raw.slice(fmMatch[0].length);
    }
    const { data, content } = matter(raw);
    const category = relPath.includes("/") ? relPath.split("/")[0] : "root";
    const slug = slugify(data.title || basename(relPath, ".md"));
    const headings = extractHeadings(content);
    const wc = wordCount(content);

    const page: WikiPage = {
      slug,
      title: data.title || basename(relPath, ".md"),
      type: data.type || "unknown",
      domain: Array.isArray(data.domain) ? data.domain.join(", ") : data.domain || "unknown",
      tags: toStringArray(data.tags),
      sources: toStringArray(data.sources),
      related: toStringArray(data.related),
      created: normalizeDate(data.created),
      updated: normalizeDate(data.updated),
      content,
      html: "",
      links: extractWikilinks(content),
      category,
      path: relPath,
      wordCount: wc,
      readingTime: Math.max(1, Math.round(wc / 225)),
      headings,
      mtime: st.mtimeMs,
    };

    // Evict any stale entry under a different slug (e.g. after a title rename)
    if (cached && cached.slug !== slug) {
      // previous slug may still be referenced elsewhere; its cache entry
      // is tied to this path so we just overwrite below
    }
    parseCache.set(fullPath, { mtime: st.mtimeMs, slug, page, htmlSig: "" });
    return page;
  } catch (e) {
    console.error(`Error parsing ${fullPath}:`, e);
    return null;
  }
}

// Assign a unique slug to every page, deterministically. Two files whose
// titles/filenames slugify to the same value must NOT silently overwrite each
// other (that drops a page from search, graph, backlinks and routing). Sorting
// by path keeps assignment stable across reloads: the first page keeps the bare
// slug, the rest get -2/-3 suffixes (which surface as duplicate-title lint).
export function assignUniqueSlugs(
  collected: WikiPage[]
): { pages: Map<string, WikiPage>; collisions: string[] } {
  const pages = new Map<string, WikiPage>();
  const collisions: string[] = [];
  for (const page of [...collected].sort((a, b) => a.path.localeCompare(b.path))) {
    const base = slugify(page.title || basename(page.path, ".md")) || "page";
    let slug = base;
    let n = 1;
    while (pages.has(slug)) {
      n += 1;
      slug = `${base}-${n}`;
    }
    if (n > 1) collisions.push(`"${page.title}" (${page.path}) -> ${slug}`);
    page.slug = slug;
    pages.set(slug, page);
  }
  return { pages, collisions };
}

export async function loadWikiPages(): Promise<Map<string, WikiPage>> {
  const assetSet = await loadAssetSet();
  const seenPaths = new Set<string>();
  const collected: WikiPage[] = [];

  // Collect all .md paths first, then parse in parallel. assignUniqueSlugs
  // re-sorts by path, so collection order doesn't affect determinism.
  const mdPaths: { fullPath: string; relPath: string }[] = [];
  async function walkDir(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        seenPaths.add(fullPath);
        mdPaths.push({ fullPath, relPath: relative(WIKI_DIR, fullPath) });
      }
    }
  }

  await walkDir(WIKI_DIR);

  const parsed = await Promise.all(
    mdPaths.map(({ fullPath, relPath }) => parsePage(fullPath, relPath))
  );
  for (const page of parsed) {
    if (page) collected.push(page);
  }

  // Evict cache entries whose files were removed
  for (const path of [...parseCache.keys()]) {
    if (!seenPaths.has(path)) parseCache.delete(path);
  }

  const { pages, collisions } = assignUniqueSlugs(collected);
  if (collisions.length) {
    console.warn(
      `Disambiguated ${collisions.length} slug collision(s): ${collisions.join("; ")}`
    );
  }

  const fileAliases = buildFileAliases(pages);

  // Second pass: render HTML. Reuse cached HTML when the slug set hasn't
  // changed since last render (ordinary content edits only touch one file).
  const sig = slugSetSignature(pages);
  for (const [, page] of pages) {
    const entry = parseCache.get(join(WIKI_DIR, page.path));
    if (entry && entry.page === page && entry.htmlSig === sig && page.html) {
      continue; // reuse cached page.html
    }
    const withLinks = wikilinksToHtml(page.content, pages, fileAliases);
    const html = markdownToHtml(withLinks, assetSet);
    page.html = injectHeadingIds(html, page.headings);
    if (entry) entry.htmlSig = sig;
  }

  return pages;
}

// --- Graph Data ---

export function buildGraphData(pages: Map<string, WikiPage>) {
  const nodes: { id: string; label: string; type: string; domain: string; category: string; linkCount: number }[] = [];
  const edges: { source: string; target: string }[] = [];
  const edgeSet = new Set<string>();
  const fileAliases = buildFileAliases(pages);

  for (const [slug, page] of pages) {
    nodes.push({
      id: slug,
      label: page.title,
      type: page.type,
      domain: page.domain,
      category: page.category,
      linkCount: page.links.length,
    });

    for (const link of page.links) {
      const target = resolveLink(link, pages, fileAliases);
      if (target) {
        const key = [slug, target.slug].sort().join("--");
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push({ source: slug, target: target.slug });
        }
      }
    }
  }

  return { nodes, edges };
}

// --- Backlinks ---

export function computeBacklinks(
  pages: Map<string, WikiPage>
): Map<string, { slug: string; title: string; type: string }[]> {
  const backlinks = new Map<string, { slug: string; title: string; type: string }[]>();
  const fileAliases = buildFileAliases(pages);

  for (const [slug, page] of pages) {
    for (const link of page.links) {
      const target = resolveLink(link, pages, fileAliases);
      if (target && target.slug !== slug) {
        if (!backlinks.has(target.slug)) backlinks.set(target.slug, []);
        const list = backlinks.get(target.slug)!;
        if (!list.some((b) => b.slug === slug)) {
          list.push({ slug, title: page.title, type: page.type });
        }
      }
    }
  }

  return backlinks;
}

// Resolve `related:` frontmatter entries to { slug, title, resolved } so the
// UI can show type badges and mark broken ones.
export function resolveRelatedList(
  names: any,
  pages: Map<string, WikiPage>,
  fileAliases?: Map<string, string>
): { name: string; slug: string | null; title: string; type: string; resolved: boolean }[] {
  // Defensively coerce frontmatter into a string[]. gray-matter can return a
  // scalar when the YAML is `related: Foo` instead of `related: [Foo]`.
  let list: string[];
  if (Array.isArray(names)) list = names.map(String);
  else if (names == null || names === "") list = [];
  else if (typeof names === "string") list = names.split(",").map((s) => s.trim()).filter(Boolean);
  else list = [String(names)];

  const aliases = fileAliases ?? buildFileAliases(pages);
  return list.map((name) => {
    const page = resolveLink(name, pages, aliases);
    if (page) {
      return { name, slug: page.slug, title: page.title, type: page.type, resolved: true };
    }
    return { name, slug: null, title: name, type: "unknown", resolved: false };
  });
}

// --- Shared serializers ---
// These capture the EXACT JSON shapes server.ts and build.ts hand-built for
// their HTTP/static outputs, so both call one source of truth. Pure functions.

// Summary entry for the pages list (/api/pages, dist/data/pages.json).
export function pageSummary(page: WikiPage) {
  return {
    slug: page.slug,
    title: page.title,
    type: page.type,
    domain: page.domain,
    tags: page.tags,
    category: page.category,
    linkCount: page.links.length,
    updated: page.updated,
    mtime: page.mtime,
    wordCount: page.wordCount,
    readingTime: page.readingTime,
  };
}

// Full page detail (/api/pages/:slug, dist/data/pages/:slug.json). backlinks is
// the precomputed map; fileAliases is optional (server passes it, build omits).
export function pageDetail(
  page: WikiPage,
  pages: Map<string, WikiPage>,
  backlinks: Map<string, { slug: string; title: string; type: string }[]>,
  fileAliases?: Map<string, string>
) {
  return {
    slug: page.slug,
    title: page.title,
    type: page.type,
    domain: page.domain,
    tags: page.tags,
    sources: page.sources,
    related: resolveRelatedList(page.related, pages, fileAliases),
    created: page.created,
    updated: page.updated,
    html: page.html,
    links: page.links,
    category: page.category,
    wordCount: page.wordCount,
    readingTime: page.readingTime,
    headings: page.headings,
    backlinks: backlinks.get(page.slug) || [],
  };
}

// Search-index entry (/data/search.json) — keeps content for client snippets.
export function searchIndexEntry(page: WikiPage) {
  return {
    slug: page.slug,
    title: page.title,
    type: page.type,
    domain: page.domain,
    tags: page.tags,
    category: page.category,
    content: page.content,
  };
}

// --- Tags ---

export function computeTagIndex(
  pages: Map<string, WikiPage>
): { tag: string; count: number; pages: { slug: string; title: string; type: string }[] }[] {
  const tagMap = new Map<string, { slug: string; title: string; type: string }[]>();
  for (const [slug, page] of pages) {
    for (const tag of page.tags || []) {
      const key = String(tag).toLowerCase();
      if (!tagMap.has(key)) tagMap.set(key, []);
      tagMap.get(key)!.push({ slug, title: page.title, type: page.type });
    }
  }
  return [...tagMap.entries()]
    .map(([tag, pages]) => ({
      tag,
      count: pages.length,
      pages: pages.sort((a, b) => a.title.localeCompare(b.title)),
    }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

// --- Lint ---

const STALE_DAYS = 90;

export function computeLint(
  pages: Map<string, WikiPage>,
  backlinks: Map<string, { slug: string; title: string; type: string }[]>
): LintIssue[] {
  const issues: LintIssue[] = [];
  const now = Date.now();
  const fileAliases = buildFileAliases(pages);

  // Collect titles (case-folded) to detect duplicates
  const titleMap = new Map<string, string[]>();
  for (const [slug, page] of pages) {
    const key = page.title.toLowerCase();
    if (!titleMap.has(key)) titleMap.set(key, []);
    titleMap.get(key)!.push(slug);
  }

  for (const [slug, page] of pages) {
    // Skip indices and logs from orphan checks — they're meta-pages
    const isMeta = page.type === "index" || page.type === "log" || page.type === "overview";

    // Orphan: no inbound links
    if (!isMeta && (backlinks.get(slug)?.length ?? 0) === 0) {
      issues.push({ kind: "orphan", slug, title: page.title });
    }

    // Broken wikilinks
    for (const link of page.links) {
      if (!resolveLink(link, pages, fileAliases)) {
        issues.push({ kind: "broken-link", slug, title: page.title, detail: link });
      }
    }

    if (!page.type || page.type === "unknown") {
      issues.push({ kind: "missing-type", slug, title: page.title });
    }

    if (!isMeta && (!page.tags || page.tags.length === 0)) {
      issues.push({ kind: "missing-tags", slug, title: page.title });
    }

    if (!isMeta && (!page.domain || page.domain === "unknown")) {
      issues.push({ kind: "missing-domain", slug, title: page.title });
    }

    // Stale (based on frontmatter `updated` if present, else mtime)
    const u = page.updated ? new Date(page.updated).getTime() : page.mtime;
    if (!isMeta && !Number.isNaN(u) && now - u > STALE_DAYS * 86400 * 1000) {
      const days = Math.floor((now - u) / (86400 * 1000));
      issues.push({ kind: "stale", slug, title: page.title, detail: `${days}d` });
    }
  }

  // Duplicate titles
  for (const [title, slugs] of titleMap) {
    if (slugs.length > 1) {
      for (const s of slugs) {
        const p = pages.get(s)!;
        issues.push({
          kind: "duplicate-title",
          slug: s,
          title: p.title,
          detail: slugs.filter((x) => x !== s).join(", "),
        });
      }
    }
  }

  return issues;
}

// --- Timeline (parsed from wiki/log.md) ---

export interface TimelineEntry {
  date: string;
  op: string;
  detail: string;
  body: string;
}

export function parseLog(logContent: string): TimelineEntry[] {
  // Matches: ## [YYYY-MM-DD] operation | details
  const regex = /^##\s+\[(\d{4}-\d{2}-\d{2})\]\s+([^|\n]+?)\s*\|\s*(.+?)\s*$/gm;
  const entries: TimelineEntry[] = [];
  const matches = [...logContent.matchAll(regex)];
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const start = m.index! + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : logContent.length;
    const body = logContent.slice(start, end).trim();
    entries.push({
      date: m[1],
      op: m[2].trim(),
      detail: m[3].trim(),
      body,
    });
  }
  return entries.reverse(); // newest first
}

export async function loadTimeline(): Promise<TimelineEntry[]> {
  try {
    const path = join(WIKI_DIR, "log.md");
    const raw = await readFile(path, "utf-8");
    const { content } = matter(raw);
    return parseLog(content);
  } catch {
    return [];
  }
}

// --- Meta ---

export interface WikiMeta {
  builtAt: string;
  pageCount: number;
  sourceCount: number;
  entityCount: number;
  topicCount: number;
  analysisCount: number;
  totalWords: number;
  domains: { name: string; count: number }[];
}

export function buildMeta(pages: Map<string, WikiPage>): WikiMeta {
  let totalWords = 0;
  const byType: Record<string, number> = {};
  const byDomain: Record<string, number> = {};
  for (const p of pages.values()) {
    totalWords += p.wordCount;
    byType[p.type] = (byType[p.type] || 0) + 1;
    const d = (p.domain || "unknown").split(",")[0].trim();
    byDomain[d] = (byDomain[d] || 0) + 1;
  }
  const domains = Object.entries(byDomain)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
  return {
    builtAt: new Date().toISOString(),
    pageCount: pages.size,
    sourceCount: byType.source || 0,
    entityCount: byType.entity || 0,
    topicCount: byType.topic || 0,
    analysisCount: byType.analysis || 0,
    totalWords,
    domains,
  };
}

// --- Pending Ingest ---
// Raw source files (raw/**/*.md, excluding assets) that haven't been ingested
// into the wiki yet — or that CHANGED since they were last ingested. Rather than
// inferring "ingested" from whether some page references the file in `sources:`,
// we track it explicitly in an ingest manifest written after each successful
// ingest job. A raw file is pending if it's missing from the manifest OR its
// content hash differs from the recorded one.

const RAW_DIR = join(import.meta.dir, "raw");
const INGEST_SKIP_DIRS = new Set(["assets"]);

// Machine-local transient state (content hashes + mtimes), like raw/.sync-backups/.
// Lives under raw/ and is gitignored — it's regenerated by ingest, not source.
const MANIFEST_PATH = join(RAW_DIR, ".ingest-manifest.json");

export interface ManifestEntry {
  sha256: string; // hash of raw file content
  size: number;
  mtime: number; // ms since epoch
  ingestedAt: number; // ms since epoch, when this entry was written
}

// path (relative to raw/) -> entry
export type IngestManifest = Record<string, ManifestEntry>;

export interface PendingSource {
  path: string; // relative to raw/
  basename: string;
  size: number;
  mtime: number;
}

function sha256(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

export async function readIngestManifest(): Promise<IngestManifest> {
  try {
    const raw = await readFile(MANIFEST_PATH, "utf8");
    const data = JSON.parse(raw);
    // Tolerate hand-edits / older shapes: keep only well-formed entries.
    if (!data || typeof data !== "object") return {};
    const out: IngestManifest = {};
    for (const [k, v] of Object.entries(data as Record<string, any>)) {
      if (v && typeof v.sha256 === "string") {
        out[k] = {
          sha256: v.sha256,
          size: Number(v.size) || 0,
          mtime: Number(v.mtime) || 0,
          ingestedAt: Number(v.ingestedAt) || 0,
        };
      }
    }
    return out;
  } catch {
    // Missing/unreadable/corrupt manifest — treat as empty (everything pending).
    return {};
  }
}

export async function writeIngestManifest(manifest: IngestManifest): Promise<void> {
  // Stable key order keeps diffs minimal if the file is ever inspected.
  const ordered: IngestManifest = {};
  for (const k of Object.keys(manifest).sort()) ordered[k] = manifest[k];
  await writeFile(MANIFEST_PATH, JSON.stringify(ordered, null, 2) + "\n");
}

// Collect every ingestable raw .md file (excludes assets and dotfiles), with its
// current stat + content hash. Relative paths are POSIX-style (forward slashes).
async function collectRawSources(): Promise<
  { path: string; basename: string; size: number; mtime: number; sha256: string }[]
> {
  const out: { path: string; basename: string; size: number; mtime: number; sha256: string }[] = [];
  async function walk(dir: string, prefix: string) {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        if (INGEST_SKIP_DIRS.has(entry.name)) continue;
        await walk(join(dir, entry.name), rel);
      } else if (entry.name.endsWith(".md")) {
        try {
          const full = join(dir, entry.name);
          const st = await stat(full);
          const content = await readFile(full, "utf8");
          out.push({
            path: rel,
            basename: entry.name,
            size: st.size,
            mtime: st.mtimeMs,
            sha256: sha256(content),
          });
        } catch {}
      }
    }
  }
  await walk(RAW_DIR, "");
  return out;
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

// The set of source names already cited by some page's `sources:` frontmatter —
// both the raw-relative path and the bare basename (matching the legacy
// inference). Used only for the one-time manifest bootstrap below.
function referencedSourceNames(pages: Map<string, WikiPage>): Set<string> {
  const referenced = new Set<string>();
  for (const page of pages.values()) {
    for (const s of page.sources) {
      const name = String(s).trim();
      if (!name) continue;
      referenced.add(name);
      referenced.add(name.split("/").pop()!);
    }
  }
  return referenced;
}

// A raw file is pending if it's missing from the ingest manifest or its content
// hash differs from the recorded one. `pages` is consulted only for a one-time
// migration: when no manifest exists yet (first run after this feature landed),
// seed it from the existing `sources:` frontmatter so files already ingested
// under the previous inference-based scheme don't all show up as pending.
export async function computePendingIngest(
  pages?: Map<string, WikiPage>
): Promise<PendingSource[]> {
  const sources = await collectRawSources();
  let manifest = await readIngestManifest();

  // First-run bootstrap: seed the manifest from current wiki state so switching
  // to manifest tracking doesn't flag every already-ingested file as pending.
  // Baseline is the current content hash; real changes are detected from here on.
  if (pages && pages.size > 0 && !(await fileExists(MANIFEST_PATH))) {
    const referenced = referencedSourceNames(pages);
    const now = Date.now();
    manifest = {};
    for (const src of sources) {
      if (referenced.has(src.path) || referenced.has(src.basename)) {
        manifest[src.path] = { sha256: src.sha256, size: src.size, mtime: src.mtime, ingestedAt: now };
      }
    }
    await writeIngestManifest(manifest).catch(() => {});
  }

  const pending: PendingSource[] = [];
  for (const src of sources) {
    const entry = manifest[src.path];
    // Pending if never ingested, or content changed since last ingest.
    if (!entry || entry.sha256 !== src.sha256) {
      pending.push({
        path: src.path,
        basename: src.basename,
        size: src.size,
        mtime: src.mtime,
      });
    }
  }

  // Newest first — most recently added/changed raw files surface at the top
  pending.sort((a, b) => b.mtime - a.mtime);
  return pending;
}

// Record the given raw files as ingested in the manifest (called after a
// SUCCESSFUL ingest job). Paths may be absolute, raw/-prefixed, or relative to
// raw/; they're normalized to raw-relative POSIX paths. Files that no longer
// exist or fall under assets/ are skipped. Returns the updated manifest.
export async function updateIngestManifest(files: string[]): Promise<IngestManifest> {
  const manifest = await readIngestManifest();
  const now = Date.now();
  for (const f of files) {
    const rel = normalizeRawRelPath(f);
    if (!rel || rel.startsWith("assets/")) continue;
    try {
      const full = join(RAW_DIR, rel);
      const st = await stat(full);
      const content = await readFile(full, "utf8");
      manifest[rel] = {
        sha256: sha256(content),
        size: st.size,
        mtime: st.mtimeMs,
        ingestedAt: now,
      };
    } catch {
      // File vanished between ingest and bookkeeping — skip it.
    }
  }
  await writeIngestManifest(manifest);
  return manifest;
}

// Normalize an ingest file reference to a raw/-relative POSIX path, or "" if it
// doesn't live under raw/.
function normalizeRawRelPath(f: string): string {
  let p = String(f).replace(/\\/g, "/").trim();
  if (!p) return "";
  if (p.startsWith("/")) {
    const r = relative(RAW_DIR, p).replace(/\\/g, "/");
    if (r.startsWith("..")) return "";
    return r;
  }
  if (p.startsWith("raw/")) p = p.slice("raw/".length);
  return p.replace(/^\.\//, "");
}

// --- Search ---

// What fuse.js indexes per page. Keeping content here lets fuzzy matching reach
// body text; the snippet is still derived from the raw content at query time.
interface SearchDoc {
  slug: string;
  title: string;
  type: string;
  domain: string;
  category: string;
  tags: string;
  content: string;
}

export interface SearchResult {
  slug: string;
  title: string;
  type: string;
  domain: string;
  category: string;
  snippet: string;
  score: number;
}

// Field weights mirror the old hand-tuned priorities (title >> tags > content).
const FUSE_OPTIONS: import("fuse.js").IFuseOptions<SearchDoc> = {
  includeScore: true,
  ignoreLocation: true, // a content match anywhere in the body should count
  threshold: 0.4,
  minMatchCharLength: 2,
  keys: [
    { name: "title", weight: 3 },
    { name: "tags", weight: 2 },
    { name: "category", weight: 1 },
    { name: "domain", weight: 1 },
    { name: "content", weight: 0.5 },
  ],
};

// Building the Fuse index over every page's content is the expensive part, so
// cache it and only rebuild when the page set changes (add/remove/rename). The
// signature reuses slugSetSignature — fuzzy ranking over title/tags/category is
// stable for a fixed set, and content edits don't change which pages exist.
let searchIndexCache: { sig: string; fuse: Fuse<SearchDoc>; docs: Map<string, SearchDoc> } | null = null;

function getSearchIndex(pages: Map<string, WikiPage>) {
  const sig = slugSetSignature(pages);
  if (searchIndexCache && searchIndexCache.sig === sig) return searchIndexCache;
  const docs = new Map<string, SearchDoc>();
  const list: SearchDoc[] = [];
  for (const [slug, page] of pages) {
    const doc: SearchDoc = {
      slug,
      title: page.title,
      type: page.type,
      domain: page.domain,
      category: page.category,
      tags: (page.tags || []).join(" "),
      content: page.content,
    };
    docs.set(slug, doc);
    list.push(doc);
  }
  const fuse = new Fuse(list, FUSE_OPTIONS);
  searchIndexCache = { sig, fuse, docs };
  return searchIndexCache;
}

// Build a ~120-char snippet around the first literal occurrence of the query in
// the content, falling back to the head of the content (matches prior behavior).
export function buildSnippet(content: string, query: string): string {
  const idx = content.toLowerCase().indexOf(query.toLowerCase());
  if (idx !== -1) {
    const start = Math.max(0, idx - 60);
    const end = Math.min(content.length, idx + query.length + 60);
    return (start > 0 ? "..." : "") + content.slice(start, end).replace(/\n/g, " ") + (end < content.length ? "..." : "");
  }
  return content.slice(0, 120).replace(/\n/g, " ") + "...";
}

export function searchPages(pages: Map<string, WikiPage>, query: string): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  const { fuse, docs } = getSearchIndex(pages);

  // fuse score: 0 = perfect, 1 = worst. Invert into the descending "higher is
  // better" score the client sorts on and expects (results[].score).
  return fuse.search(q).map(({ item, score }) => {
    const doc = docs.get(item.slug)!;
    return {
      slug: doc.slug,
      title: doc.title,
      type: doc.type,
      domain: doc.domain,
      category: doc.category,
      snippet: buildSnippet(doc.content, q),
      score: 1 - (score ?? 0),
    };
  });
}
