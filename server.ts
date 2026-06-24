import { join } from "path";
import { watch } from "fs";
import { stat } from "fs/promises";
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
  buildFileAliases,
} from "./lib";
import { sync } from "./sync";
import { startIngest, jobStream, getCurrentJob, abortCurrent } from "./ingest";
import type { WikiPage } from "./lib";

const STATIC_DIR = join(import.meta.dir, "ui");
const ASSETS_DIR = join(import.meta.dir, "raw", "assets");
const WIKI_DIR = join(import.meta.dir, "wiki");

let pages = await loadWikiPages();
let backlinks = computeBacklinks(pages);

// Derived data is identical for every request between reloads, so compute it
// once per reload and serve from this cache instead of rebuilding the graph,
// lint, tags, meta, search index and file-alias map on every single request.
interface DerivedData {
  summaryList: ReturnType<typeof pageSummaryList>;
  graph: ReturnType<typeof buildGraphData>;
  tags: ReturnType<typeof computeTagIndex>;
  lint: ReturnType<typeof computeLint>;
  meta: ReturnType<typeof buildMeta>;
  timeline: Awaited<ReturnType<typeof loadTimeline>>;
  searchIndex: { slug: string; title: string; type: string; domain: string; tags: string[]; category: string; content: string }[];
  fileAliases: Map<string, string>;
}
let derived: DerivedData;

// Transpiled-bundle cache for the dev server's on-the-fly TSX handler, keyed by
// entrypoint mtime so we don't re-bundle React + d3 on every page load.
const tsxCache = new Map<string, { mtime: number; code: string }>();

async function computeDerived(): Promise<void> {
  derived = {
    summaryList: pageSummaryList(),
    graph: buildGraphData(pages),
    tags: computeTagIndex(pages),
    lint: computeLint(pages, backlinks),
    meta: buildMeta(pages),
    timeline: await loadTimeline(),
    searchIndex: [...pages.values()].map(({ slug, title, type, domain, tags, category, content }) => ({
      slug,
      title,
      type,
      domain,
      tags,
      category,
      content,
    })),
    fileAliases: buildFileAliases(pages),
  };
}

await computeDerived();
console.log(`Loaded ${pages.size} wiki pages`);

async function reloadPages(reason: string) {
  const t0 = performance.now();
  pages = await loadWikiPages();
  backlinks = computeBacklinks(pages);
  await computeDerived();
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
    // While an ingest is writing its 5–15 pages, suppress reloads: each write
    // would otherwise fire a full reload (storms) and could read a half-written
    // file. The ingest triggers exactly one reload when it exits (see /api/ingest).
    if (getCurrentJob()?.status === "running") return;
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
    related: resolveRelatedList(page.related, pages, derived.fileAliases),
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

// Mutating endpoints (/api/ingest, /api/sync, /api/reload) spawn the `claude`
// CLI with the host's credentials and write into the repo. Keep them strictly
// local: bind to the loopback interface and reject cross-origin (CSRF) and
// DNS-rebind requests as defense-in-depth. This server is for local use only.
const PORT = 3000;
const ALLOWED_HOSTS = new Set([
  `localhost:${PORT}`,
  `127.0.0.1:${PORT}`,
  `[::1]:${PORT}`,
]);

function guardMutation(req: Request): Response | null {
  // Cross-origin browsers send an Origin header on these requests; a same-origin
  // GET sends none and curl/CLI clients send none — both are allowed.
  const origin = req.headers.get("origin");
  if (origin) {
    let host: string | null = null;
    try {
      host = new URL(origin).host;
    } catch {}
    if (!host || !ALLOWED_HOSTS.has(host)) {
      return Response.json({ error: "Forbidden: cross-origin request blocked" }, { status: 403 });
    }
  }
  // Defend against DNS rebinding: the Host header must be a known loopback host.
  const hostHeader = req.headers.get("host");
  if (hostHeader && !ALLOWED_HOSTS.has(hostHeader)) {
    return Response.json({ error: "Forbidden: unexpected Host header" }, { status: 403 });
  }
  return null;
}

const server = Bun.serve({
  port: PORT,
  hostname: "127.0.0.1",
  // Long-lived streaming responses (notably /api/ingest) can go many minutes
  // without a byte between tool calls. Disable Bun's default 10s idle timeout.
  idleTimeout: 0,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // --- API (data endpoints, used for both /api/* and /data/*.json) ---

    if (path === "/api/pages" || path === "/data/pages.json") {
      return Response.json(derived.summaryList);
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
      return Response.json(derived.graph);
    }

    if (path === "/data/search.json") {
      return Response.json(derived.searchIndex);
    }

    if (path === "/api/tags" || path === "/data/tags.json") {
      return Response.json(derived.tags);
    }

    if (path === "/api/lint" || path === "/data/lint.json") {
      return Response.json(derived.lint);
    }

    if (path === "/api/timeline" || path === "/data/timeline.json") {
      return Response.json(derived.timeline);
    }

    if (path === "/api/meta" || path === "/data/meta.json") {
      return Response.json(derived.meta);
    }

    if (path === "/api/sync") {
      const blocked = guardMutation(req);
      if (blocked) return blocked;
      try {
        const result = await sync();
        await reloadPages("sync");
        const pending = await computePendingIngest(pages);
        // ok is false on any per-folder failure/skip so a partial sync doesn't read as success.
        return Response.json({ ok: result.errors.length === 0, count: pages.size, pending: pending.length, ...result });
      } catch (e: any) {
        return Response.json({ ok: false, error: e.message }, { status: 500 });
      }
    }

    if (path === "/api/pending-ingest" || path === "/data/pending-ingest.json") {
      return Response.json(await computePendingIngest(pages));
    }

    if (path === "/api/ingest" && req.method === "POST") {
      const blocked = guardMutation(req);
      if (blocked) return blocked;
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
        const job = await startIngest(files, () => {
          // One clean reload when the job exits (the watcher is suppressed during ingest).
          reloadPages("ingest complete").catch((e) =>
            console.error("Post-ingest reload failed:", e)
          );
        });
        const stream = jobStream(job);
        return new Response(stream, {
          headers: {
            "Content-Type": "application/x-ndjson",
            "Cache-Control": "no-cache",
            "X-Ingest-Job-Id": job.id,
            ...(job.snapshot ? { "X-Ingest-Snapshot": job.snapshot } : {}),
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
        snapshot: job.snapshot,
      });
    }

    if (path === "/api/ingest/abort" && req.method === "POST") {
      const blocked = guardMutation(req);
      if (blocked) return blocked;
      const ok = abortCurrent();
      return Response.json({ ok });
    }

    if (path === "/api/reload") {
      const blocked = guardMutation(req);
      if (blocked) return blocked;
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
          // Serve the cached bundle if the entrypoint is unchanged, so we don't
          // re-run Bun.build (a full React + d3 bundle) on every page load. NB:
          // keyed on the entrypoint only — if the UI grows imported sub-modules,
          // touch the entrypoint (or restart) to pick up their changes.
          const { mtimeMs } = await stat(filePath);
          const cached = tsxCache.get(filePath);
          if (cached && cached.mtime === mtimeMs) {
            return new Response(cached.code, {
              headers: { "Content-Type": "application/javascript" },
            });
          }
          const result = await Bun.build({
            entrypoints: [filePath],
            target: "browser",
            minify: false,
          });
          if (result.success && result.outputs.length > 0) {
            const code = await result.outputs[0].text();
            tsxCache.set(filePath, { mtime: mtimeMs, code });
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
