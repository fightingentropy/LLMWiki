import { readdir, readFile } from "fs/promises";
import { join, relative, basename, extname } from "path";
import matter from "gray-matter";
import { sync } from "./sync";

const WIKI_DIR = join(import.meta.dir, "wiki");
const STATIC_DIR = join(import.meta.dir, "ui");

// --- Types ---

interface WikiPage {
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
  links: string[]; // extracted [[wikilinks]]
  category: string; // sources, entities, topics, root
  path: string; // relative path from wiki/
}

// --- Markdown / Wikilink Processing ---

function extractWikilinks(content: string): string[] {
  const matches = content.match(/\[\[([^\]]+)\]\]/g) || [];
  return [...new Set(matches.map((m) => m.slice(2, -2)))];
}

function wikilinksToHtml(content: string, pages: Map<string, WikiPage>): string {
  return content.replace(/\[\[([^\]]+)\]\]/g, (_, name) => {
    // Find matching page
    const slug = slugify(name);
    const page = pages.get(slug);
    if (page) {
      return `<a href="/page/${page.slug}" class="wikilink" data-slug="${page.slug}">${name}</a>`;
    }
    return `<span class="wikilink broken">${name}</span>`;
  });
}

function slugify(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9\s_-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function markdownToHtml(md: string): string {
  // Simple markdown to HTML — handles headers, bold, italic, lists, links, code blocks, paragraphs
  let html = md;

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headers
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Images
  html = html.replace(/!\[\[([^\]]+)\]\]/g, '<span class="image-ref">📷 $1</span>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>");

  // Paragraphs — wrap lines that aren't already in tags
  const lines = html.split("\n");
  const result: string[] = [];
  let inPre = false;
  for (const line of lines) {
    if (line.includes("<pre>")) inPre = true;
    if (line.includes("</pre>")) inPre = false;
    if (
      !inPre &&
      line.trim() &&
      !line.startsWith("<h") &&
      !line.startsWith("<ul") &&
      !line.startsWith("<li") &&
      !line.startsWith("<blockquote") &&
      !line.startsWith("<hr") &&
      !line.startsWith("<pre")
    ) {
      result.push(`<p>${line}</p>`);
    } else {
      result.push(line);
    }
  }

  return result.join("\n");
}

// --- Load Wiki ---

async function loadWikiPages(): Promise<Map<string, WikiPage>> {
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
            html: "", // filled after all pages loaded
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

  // Second pass: convert wikilinks to HTML links
  for (const [slug, page] of pages) {
    const withLinks = wikilinksToHtml(page.content, pages);
    page.html = markdownToHtml(withLinks);
  }

  return pages;
}

// --- Graph Data ---

function buildGraphData(pages: Map<string, WikiPage>) {
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

// --- Search ---

function searchPages(pages: Map<string, WikiPage>, query: string) {
  const q = query.toLowerCase();
  const results: { slug: string; title: string; type: string; domain: string; category: string; snippet: string; score: number }[] = [];

  for (const [slug, page] of pages) {
    let score = 0;
    const titleLower = page.title.toLowerCase();
    const contentLower = page.content.toLowerCase();

    // Title match (high weight)
    if (titleLower.includes(q)) score += 10;
    if (titleLower === q) score += 20;

    // Tag match
    if (page.tags.some((t) => t.toLowerCase().includes(q))) score += 5;

    // Content match
    const idx = contentLower.indexOf(q);
    if (idx !== -1) {
      score += 3;
      // Count occurrences
      const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      const matches = page.content.match(regex);
      if (matches) score += Math.min(matches.length, 5);
    }

    if (score > 0) {
      // Extract snippet
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

// --- Server ---

let pages = await loadWikiPages();
console.log(`Loaded ${pages.size} wiki pages`);

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // API routes
    if (path === "/api/pages") {
      const list = [...pages.values()].map(({ slug, title, type, domain, tags, category, links }) => ({
        slug,
        title,
        type,
        domain,
        tags,
        category,
        linkCount: links.length,
      }));
      return Response.json(list);
    }

    if (path.startsWith("/api/pages/")) {
      const slug = path.slice("/api/pages/".length);
      const page = pages.get(slug);
      if (!page) return Response.json({ error: "Not found" }, { status: 404 });
      return Response.json({
        slug: page.slug,
        title: page.title,
        type: page.type,
        domain: page.domain,
        tags: page.tags,
        sources: page.sources,
        related: page.related,
        created: page.created,
        updated: page.updated,
        html: page.html,
        links: page.links,
        category: page.category,
      });
    }

    if (path === "/api/search") {
      const q = url.searchParams.get("q") || "";
      if (!q) return Response.json([]);
      return Response.json(searchPages(pages, q));
    }

    if (path === "/api/graph") {
      return Response.json(buildGraphData(pages));
    }

    if (path === "/api/sync") {
      try {
        const result = await sync();
        // Reload wiki pages after sync
        pages = await loadWikiPages();
        return Response.json({ ok: true, count: pages.size, ...result });
      } catch (e: any) {
        return Response.json({ ok: false, error: e.message }, { status: 500 });
      }
    }

    if (path === "/api/reload") {
      pages = await loadWikiPages();
      return Response.json({ ok: true, count: pages.size });
    }

    // Serve static files
    try {
      const filePath = path === "/" ? join(STATIC_DIR, "index.html") : join(STATIC_DIR, path);
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
    } catch {}

    // SPA fallback
    const indexFile = Bun.file(join(STATIC_DIR, "index.html"));
    if (await indexFile.exists()) {
      return new Response(indexFile);
    }

    return Response.json({ error: "Not found" }, { status: 404 });
  },
});

console.log(`Wiki UI running at http://localhost:${server.port}`);
