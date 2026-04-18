import { join } from "path";
import { watch } from "fs";
import {
  loadWikiPages,
  buildGraphData,
  searchPages,
  computeBacklinks,
  computeTagIndex,
  computeLint,
  loadTimeline,
  buildMeta,
  resolveRelatedList,
  computePendingIngest,
} from "./lib";
import { sync } from "./sync";
import { startIngest, jobStream, getCurrentJob, abortCurrent } from "./ingest";
import type { WikiPage } from "./lib";

const STATIC_DIR = join(import.meta.dir, "ui");
const ASSETS_DIR = join(import.meta.dir, "raw", "assets");
const WIKI_DIR = join(import.meta.dir, "wiki");

let pages = await loadWikiPages();
let backlinks = computeBacklinks(pages);
console.log(`Loaded ${pages.size} wiki pages`);

async function reloadPages(reason: string) {
  const t0 = performance.now();
  pages = await loadWikiPages();
  backlinks = computeBacklinks(pages);
  const ms = Math.round(performance.now() - t0);
  console.log(`Reloaded ${pages.size} pages in ${ms}ms (${reason})`);
}

// Watch wiki/ for .md changes and hot-reload. Debounced because editors
// often fire multiple events per save (write, rename, chmod).
let reloadTimer: ReturnType<typeof setTimeout> | null = null;
let pendingTrigger = "";
try {
  watch(WIKI_DIR, { recursive: true }, (_event, filename) => {
    if (!filename || !filename.endsWith(".md")) return;
    pendingTrigger = filename;
    if (reloadTimer) clearTimeout(reloadTimer);
    reloadTimer = setTimeout(() => {
      reloadTimer = null;
      reloadPages(`changed ${pendingTrigger}`).catch((e) =>
        console.error("Reload failed:", e)
      );
    }, 150);
  });
  console.log(`Watching ${WIKI_DIR} for changes`);
} catch (e) {
  console.warn("fs.watch unavailable — falling back to manual /api/reload:", e);
}

function pageSummaryList() {
  return [...pages.values()].map(({ slug, title, type, domain, tags, category, links, updated, mtime, wordCount, readingTime }) => ({
    slug,
    title,
    type,
    domain,
    tags,
    category,
    linkCount: links.length,
    updated,
    mtime,
    wordCount,
    readingTime,
  }));
}

function pageDetail(page: WikiPage) {
  return {
    slug: page.slug,
    title: page.title,
    type: page.type,
    domain: page.domain,
    tags: page.tags,
    sources: page.sources,
    related: resolveRelatedList(page.related, pages),
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

const server = Bun.serve({
  port: 3000,
  // Long-lived streaming responses (notably /api/ingest) can go many minutes
  // without a byte between tool calls. Disable Bun's default 10s idle timeout.
  idleTimeout: 0,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // --- API (data endpoints, used for both /api/* and /data/*.json) ---

    if (path === "/api/pages" || path === "/data/pages.json") {
      return Response.json(pageSummaryList());
    }

    if (path.startsWith("/api/pages/") || (path.startsWith("/data/pages/") && path.endsWith(".json"))) {
      const slug = path.startsWith("/api/")
        ? path.slice("/api/pages/".length)
        : path.slice("/data/pages/".length, -".json".length);
      const page = pages.get(slug);
      if (!page) return Response.json({ error: "Not found" }, { status: 404 });
      return Response.json(pageDetail(page));
    }

    if (path === "/api/search") {
      const q = url.searchParams.get("q") || "";
      if (!q) return Response.json([]);
      return Response.json(searchPages(pages, q));
    }

    if (path === "/api/graph" || path === "/data/graph.json") {
      return Response.json(buildGraphData(pages));
    }

    if (path === "/data/search.json") {
      const searchIndex = [...pages.values()].map(({ slug, title, type, domain, tags, category, content }) => ({
        slug,
        title,
        type,
        domain,
        tags,
        category,
        content,
      }));
      return Response.json(searchIndex);
    }

    if (path === "/api/tags" || path === "/data/tags.json") {
      return Response.json(computeTagIndex(pages));
    }

    if (path === "/api/lint" || path === "/data/lint.json") {
      return Response.json(computeLint(pages, backlinks));
    }

    if (path === "/api/timeline" || path === "/data/timeline.json") {
      return Response.json(await loadTimeline());
    }

    if (path === "/api/meta" || path === "/data/meta.json") {
      return Response.json(buildMeta(pages));
    }

    if (path === "/api/sync") {
      try {
        const result = await sync();
        await reloadPages("sync");
        const pending = await computePendingIngest(pages);
        return Response.json({ ok: true, count: pages.size, pending: pending.length, ...result });
      } catch (e: any) {
        return Response.json({ ok: false, error: e.message }, { status: 500 });
      }
    }

    if (path === "/api/pending-ingest" || path === "/data/pending-ingest.json") {
      return Response.json(await computePendingIngest(pages));
    }

    if (path === "/api/ingest" && req.method === "POST") {
      try {
        const body = await req.json().catch(() => ({}));
        let files: string[] = Array.isArray(body?.files) ? body.files.map(String) : [];
        if (files.length === 0) {
          // Default: ingest everything currently pending
          const pending = await computePendingIngest(pages);
          files = pending.map((p) => `raw/${p.path}`);
        } else {
          files = files.map((f) => (f.startsWith("raw/") ? f : `raw/${f}`));
        }
        const job = startIngest(files);
        const stream = jobStream(job);
        return new Response(stream, {
          headers: {
            "Content-Type": "application/x-ndjson",
            "Cache-Control": "no-cache",
            "X-Ingest-Job-Id": job.id,
          },
        });
      } catch (e: any) {
        return Response.json({ ok: false, error: e.message }, { status: 409 });
      }
    }

    if (path === "/api/ingest/status") {
      const job = getCurrentJob();
      if (!job) return Response.json({ running: false });
      return Response.json({
        running: job.status === "running",
        status: job.status,
        id: job.id,
        startedAt: job.startedAt,
        files: job.files,
        exitCode: job.exitCode,
      });
    }

    if (path === "/api/ingest/abort" && req.method === "POST") {
      const ok = abortCurrent();
      return Response.json({ ok });
    }

    if (path === "/api/reload") {
      await reloadPages("manual /api/reload");
      return Response.json({ ok: true, count: pages.size });
    }

    // --- Static assets (raw images) ---
    if (path.startsWith("/assets/")) {
      const name = decodeURIComponent(path.slice("/assets/".length));
      // Prevent path traversal
      if (name.includes("..") || name.includes("/")) {
        return new Response("Forbidden", { status: 403 });
      }
      const file = Bun.file(join(ASSETS_DIR, name));
      if (await file.exists()) return new Response(file);
      return new Response("Not found", { status: 404 });
    }

    // --- Static files (with TSX/TS transpilation) ---
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
