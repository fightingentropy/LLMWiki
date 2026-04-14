import { mkdir, writeFile, copyFile } from "fs/promises";
import { join } from "path";
import { loadWikiPages, buildGraphData, computeBacklinks } from "./lib";

const DIST_DIR = join(import.meta.dir, "dist");
const UI_DIR = join(import.meta.dir, "ui");

async function build() {
  console.log("Building static site...");

  const pages = await loadWikiPages();
  const backlinks = computeBacklinks(pages);
  console.log(`Loaded ${pages.size} wiki pages`);

  // Create output dirs
  await mkdir(join(DIST_DIR, "data", "pages"), { recursive: true });

  // 1. Bundle the React app with Bun
  console.log("Bundling frontend...");
  const buildResult = await Bun.build({
    entrypoints: [join(UI_DIR, "App.tsx")],
    outdir: DIST_DIR,
    naming: "[dir]/app.[hash].[ext]",
    minify: true,
    target: "browser",
    external: [],
  });

  if (!buildResult.success) {
    console.error("Build failed:");
    buildResult.logs.forEach((log) => console.error(log));
    process.exit(1);
  }

  // Find the output filename (has hash)
  const jsOutput = buildResult.outputs.find((o) => o.path.endsWith(".js"));
  const cssOutput = buildResult.outputs.find((o) => o.path.endsWith(".css"));
  const jsFilename = jsOutput ? jsOutput.path.split("/").pop() : "app.js";
  const cssFilename = cssOutput ? cssOutput.path.split("/").pop() : null;

  // 2. Generate index.html with correct script/css references
  const cssTag = cssFilename ? `<link rel="stylesheet" href="/${cssFilename}">` : "";
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brain Wiki</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>
${cssTag}
</head>
<body>
<div id="root"></div>
<script type="module" src="/${jsFilename}"></script>
</body>
</html>`;
  await writeFile(join(DIST_DIR, "index.html"), indexHtml);

  // 3. Generate pages list JSON
  const pagesList = [...pages.values()].map(({ slug, title, type, domain, tags, category, links }) => ({
    slug, title, type, domain, tags, category, linkCount: links.length,
  }));
  await writeFile(join(DIST_DIR, "data", "pages.json"), JSON.stringify(pagesList));

  // 4. Generate individual page files (with backlinks)
  for (const [slug, page] of pages) {
    const pageData = {
      slug: page.slug, title: page.title, type: page.type, domain: page.domain,
      tags: page.tags, sources: page.sources, related: page.related,
      created: page.created, updated: page.updated, html: page.html,
      links: page.links, category: page.category,
      backlinks: backlinks.get(slug) || [],
    };
    await writeFile(join(DIST_DIR, "data", "pages", `${slug}.json`), JSON.stringify(pageData));
  }

  // 5. Generate graph data
  const graphData = buildGraphData(pages);
  await writeFile(join(DIST_DIR, "data", "graph.json"), JSON.stringify(graphData));

  // 6. Generate search index
  const searchIndex = [...pages.values()].map(({ slug, title, type, domain, tags, category, content }) => ({
    slug, title, type, domain, tags, category, content,
  }));
  await writeFile(join(DIST_DIR, "data", "search.json"), JSON.stringify(searchIndex));

  // 7. Generate _headers for caching
  const headers = `# Cache static assets aggressively (filenames have content hashes)
/app.*.js
  Cache-Control: public, max-age=31536000, immutable

/app.*.css
  Cache-Control: public, max-age=31536000, immutable

# Data files change on redeploy
/data/*
  Cache-Control: public, max-age=3600
  Content-Type: application/json

# HTML always revalidates
/index.html
  Cache-Control: no-cache

# SPA fallback
/*
  X-Content-Type-Options: nosniff
`;
  await writeFile(join(DIST_DIR, "_headers"), headers);

  // 8. Generate _redirects for SPA routing
  const redirects = `# SPA fallback — serve index.html for client-side routes
/page/*  /index.html  200
/graph   /index.html  200
`;
  await writeFile(join(DIST_DIR, "_redirects"), redirects);

  console.log(`\nBuilt ${pages.size} pages to dist/`);
  console.log(`  dist/index.html`);
  console.log(`  dist/${jsFilename}`);
  if (cssFilename) console.log(`  dist/${cssFilename}`);
  console.log(`  dist/data/pages.json`);
  console.log(`  dist/data/pages/*.json (${pages.size} files)`);
  console.log(`  dist/data/graph.json`);
  console.log(`  dist/data/search.json`);
  console.log(`  dist/_headers`);
  console.log(`  dist/_redirects`);
}

await build();
