import { readdir, readFile } from "fs/promises";
import { join, relative, basename } from "path";
import matter from "gray-matter";
import { marked } from "marked";

const WIKI_DIR = join(import.meta.dir, "wiki");

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
}

// --- Helpers ---

export function extractWikilinks(content: string): string[] {
  const matches = content.match(/\[\[([^\]]+)\]\]/g) || [];
  return [...new Set(matches.map((m) => m.slice(2, -2)))];
}

export function slugify(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function wikilinksToHtml(content: string, pages: Map<string, WikiPage>): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, name) => {
    const slug = slugify(name);
    const page = pages.get(slug);
    if (page) {
      return `<a href="/page/${page.slug}" class="wikilink" data-slug="${page.slug}">${name}</a>`;
    }
    return `<span class="wikilink broken">${name}</span>`;
  });
}

export function markdownToHtml(md: string): string {
  // Handle image wikilinks before marked processes them
  const preprocessed = md.replace(/!\[\[([^\]]+)\]\]/g, '<span class="image-ref">📷 $1</span>');
  return marked.parse(preprocessed, { async: false }) as string;
}

// --- Load Wiki ---

export async function loadWikiPages(): Promise<Map<string, WikiPage>> {
  const pages = new Map<string, WikiPage>();

  async function walkDir(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walkDir(fullPath);
      } else if (entry.name.endsWith(".md")) {
        try {
          let raw = await readFile(fullPath, "utf-8");
          // Sanitize frontmatter: strip [[ ]] from YAML values to avoid parse errors
          const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
          if (fmMatch) {
            const cleanedFm = fmMatch[1].replace(/\[\[/g, "").replace(/\]\]/g, "");
            raw = `---\n${cleanedFm}\n---` + raw.slice(fmMatch[0].length);
          }
          const { data, content } = matter(raw);
          const relPath = relative(WIKI_DIR, fullPath);
          const category = relPath.includes("/") ? relPath.split("/")[0] : "root";
          const slug = slugify(data.title || basename(entry.name, ".md"));

          pages.set(slug, {
            slug,
            title: data.title || basename(entry.name, ".md"),
            type: data.type || "unknown",
            domain: Array.isArray(data.domain) ? data.domain.join(", ") : data.domain || "unknown",
            tags: data.tags || [],
            sources: data.sources || [],
            related: data.related || [],
            created: data.created || "",
            updated: data.updated || "",
            content,
            html: "",
            links: extractWikilinks(content),
            category,
            path: relPath,
          });
        } catch (e) {
          console.error(`Error parsing ${fullPath}:`, e);
        }
      }
    }
  }

  await walkDir(WIKI_DIR);

  // Second pass: convert wikilinks to HTML links, then render markdown
  for (const [slug, page] of pages) {
    const withLinks = wikilinksToHtml(page.content, pages);
    page.html = markdownToHtml(withLinks);
  }

  return pages;
}

// --- Graph Data ---

export function buildGraphData(pages: Map<string, WikiPage>) {
  const nodes: { id: string; label: string; type: string; domain: string; category: string; linkCount: number }[] = [];
  const edges: { source: string; target: string }[] = [];
  const edgeSet = new Set<string>();

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
      const targetSlug = slugify(link);
      if (pages.has(targetSlug)) {
        const key = [slug, targetSlug].sort().join("--");
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edges.push({ source: slug, target: targetSlug });
        }
      }
    }
  }

  return { nodes, edges };
}

// --- Backlinks ---

export function computeBacklinks(pages: Map<string, WikiPage>): Map<string, { slug: string; title: string }[]> {
  const backlinks = new Map<string, { slug: string; title: string }[]>();

  for (const [slug, page] of pages) {
    for (const link of page.links) {
      const targetSlug = slugify(link);
      if (pages.has(targetSlug) && targetSlug !== slug) {
        if (!backlinks.has(targetSlug)) backlinks.set(targetSlug, []);
        const list = backlinks.get(targetSlug)!;
        if (!list.some(b => b.slug === slug)) {
          list.push({ slug, title: page.title });
        }
      }
    }
  }

  return backlinks;
}

// --- Search ---

export function searchPages(pages: Map<string, WikiPage>, query: string) {
  const q = query.toLowerCase();
  const results: { slug: string; title: string; type: string; domain: string; category: string; snippet: string; score: number }[] = [];

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
