import { readdir, readFile, stat } from "fs/promises";
import { join, relative, basename } from "path";
import matter from "gray-matter";
import { marked } from "marked";

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

async function loadAssetSet(): Promise<Set<string>> {
  const assetSet = new Set<string>();
  try {
    const assets = await readdir(join(import.meta.dir, "raw", "assets"));
    assets.forEach((a) => assetSet.add(a));
  } catch {}
  return assetSet;
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

export async function loadWikiPages(): Promise<Map<string, WikiPage>> {
  const pages = new Map<string, WikiPage>();
  const assetSet = await loadAssetSet();
  const seenPaths = new Set<string>();

  async function walkDir(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        seenPaths.add(fullPath);
        const relPath = relative(WIKI_DIR, fullPath);
        const page = await parsePage(fullPath, relPath);
        if (page) pages.set(page.slug, page);
      }
    }
  }

  await walkDir(WIKI_DIR);

  // Evict cache entries whose files were removed
  for (const path of [...parseCache.keys()]) {
    if (!seenPaths.has(path)) parseCache.delete(path);
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
  pages: Map<string, WikiPage>
): { name: string; slug: string | null; title: string; type: string; resolved: boolean }[] {
  // Defensively coerce frontmatter into a string[]. gray-matter can return a
  // scalar when the YAML is `related: Foo` instead of `related: [Foo]`.
  let list: string[];
  if (Array.isArray(names)) list = names.map(String);
  else if (names == null || names === "") list = [];
  else if (typeof names === "string") list = names.split(",").map((s) => s.trim()).filter(Boolean);
  else list = [String(names)];

  const fileAliases = buildFileAliases(pages);
  return list.map((name) => {
    const page = resolveLink(name, pages, fileAliases);
    if (page) {
      return { name, slug: page.slug, title: page.title, type: page.type, resolved: true };
    }
    return { name, slug: null, title: name, type: "unknown", resolved: false };
  });
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
// into wiki/sources yet. A raw file is considered ingested if any wiki page of
// type=source references it by basename in its `sources:` frontmatter.

const RAW_DIR = join(import.meta.dir, "raw");
const INGEST_SKIP_DIRS = new Set(["assets"]);

export interface PendingSource {
  path: string; // relative to raw/
  basename: string;
  size: number;
  mtime: number;
}

export async function computePendingIngest(
  pages: Map<string, WikiPage>
): Promise<PendingSource[]> {
  const referenced = new Set<string>();
  for (const page of pages.values()) {
    // A raw file is "ingested" once any wiki page cites it in sources[],
    // regardless of page type — topic/entity pages often draw from multiple raws.
    for (const s of page.sources) {
      const name = String(s).trim();
      if (!name) continue;
      referenced.add(name);
      const base = name.split("/").pop()!;
      referenced.add(base);
    }
  }

  const pending: PendingSource[] = [];
  async function walk(dir: string, prefix: string) {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      if (entry.isDirectory()) {
        if (INGEST_SKIP_DIRS.has(entry.name)) continue;
        await walk(join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.name.endsWith(".md")) {
        if (referenced.has(entry.name) || referenced.has(`${prefix}/${entry.name}`)) continue;
        try {
          const st = await stat(join(dir, entry.name));
          pending.push({
            path: prefix ? `${prefix}/${entry.name}` : entry.name,
            basename: entry.name,
            size: st.size,
            mtime: st.mtimeMs,
          });
        } catch {}
      }
    }
  }
  await walk(RAW_DIR, "");

  // Newest first — most recently added raw files surface at the top
  pending.sort((a, b) => b.mtime - a.mtime);
  return pending;
}

// --- Search ---

export function searchPages(pages: Map<string, WikiPage>, query: string) {
  const q = query.toLowerCase();
  const results: {
    slug: string;
    title: string;
    type: string;
    domain: string;
    category: string;
    snippet: string;
    score: number;
  }[] = [];

  for (const [slug, page] of pages) {
    let score = 0;
    const titleLower = page.title.toLowerCase();
    const contentLower = page.content.toLowerCase();

    if (titleLower.includes(q)) score += 10;
    if (titleLower === q) score += 20;
    if (page.tags.some((t) => t.toLowerCase().includes(q))) score += 5;

    const idx = contentLower.indexOf(q);
    if (idx !== -1) {
      score += 3;
      const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      const matches = page.content.match(regex);
      if (matches) score += Math.min(matches.length, 5);
    }

    if (score > 0) {
      let snippet = "";
      if (idx !== -1) {
        const start = Math.max(0, idx - 60);
        const end = Math.min(page.content.length, idx + q.length + 60);
        snippet = (start > 0 ? "..." : "") + page.content.slice(start, end).replace(/\n/g, " ") + (end < page.content.length ? "..." : "");
      } else {
        snippet = page.content.slice(0, 120).replace(/\n/g, " ") + "...";
      }

      results.push({ slug, title: page.title, type: page.type, domain: page.domain, category: page.category, snippet, score });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
