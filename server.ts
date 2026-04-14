import { join } from "path";
import { loadWikiPages, buildGraphData, searchPages, computeBacklinks } from "./lib";
import { sync } from "./sync";
import type { WikiPage } from "./lib";

const STATIC_DIR = join(import.meta.dir, "ui");

let pages = await loadWikiPages();
let backlinks = computeBacklinks(pages);
console.log(`Loaded ${pages.size} wiki pages`);

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // API routes
    if (path === "/api/pages") {
      const list = [...pages.values()].map(({ slug, title, type, domain, tags, category, links }) => ({
        slug, title, type, domain, tags, category, linkCount: links.length,
      }));
      return Response.json(list);
    }

    if (path.startsWith("/api/pages/")) {
      const slug = path.slice("/api/pages/".length);
      const page = pages.get(slug);
      if (!page) return Response.json({ error: "Not found" }, { status: 404 });
      return Response.json({
        slug: page.slug, title: page.title, type: page.type, domain: page.domain,
        tags: page.tags, sources: page.sources, related: page.related,
        created: page.created, updated: page.updated, html: page.html,
        links: page.links, category: page.category,
        backlinks: backlinks.get(page.slug) || [],
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
        pages = await loadWikiPages();
        backlinks = computeBacklinks(pages);
        return Response.json({ ok: true, count: pages.size, ...result });
      } catch (e: any) {
        return Response.json({ ok: false, error: e.message }, { status: 500 });
      }
    }

    // /data/ aliases for frontend compatibility (static build uses these paths)
    if (path === "/data/pages.json") {
      const list = [...pages.values()].map(({ slug, title, type, domain, tags, category, links }) => ({
        slug, title, type, domain, tags, category, linkCount: links.length,
      }));
      return Response.json(list);
    }

    if (path.startsWith("/data/pages/") && path.endsWith(".json")) {
      const slug = path.slice("/data/pages/".length, -".json".length);
      const page = pages.get(slug);
      if (!page) return Response.json({ error: "Not found" }, { status: 404 });
      return Response.json({
        slug: page.slug, title: page.title, type: page.type, domain: page.domain,
        tags: page.tags, sources: page.sources, related: page.related,
        created: page.created, updated: page.updated, html: page.html,
        links: page.links, category: page.category,
        backlinks: backlinks.get(page.slug) || [],
      });
    }

    if (path === "/data/graph.json") {
      return Response.json(buildGraphData(pages));
    }

    if (path === "/data/search.json") {
      const searchIndex = [...pages.values()].map(({ slug, title, type, domain, tags, category, content }) => ({
        slug, title, type, domain, tags, category, content,
      }));
      return Response.json(searchIndex);
    }

    if (path === "/api/reload") {
      pages = await loadWikiPages();
      backlinks = computeBacklinks(pages);
      return Response.json({ ok: true, count: pages.size });
    }

    // Serve static files (with TSX/TS transpilation)
    try {
      const filePath = path === "/" ? join(STATIC_DIR, "index.html") : join(STATIC_DIR, path);
      const file = Bun.file(filePath);
      if (await file.exists()) {
        if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
          const result = await Bun.build({
            entrypoints: [filePath],
            target: "browser",
            minify: false,
          });
          if (result.success && result.outputs.length > 0) {
            const code = await result.outputs[0].text();
            return new Response(code, {
              headers: { "Content-Type": "application/javascript" },
            });
          }
        }
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
