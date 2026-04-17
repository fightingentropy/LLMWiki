import { mkdir, writeFile, copyFile, readdir } from "fs/promises";
import { join } from "path";
import {
  loadWikiPages,
  buildGraphData,
  computeBacklinks,
  computeTagIndex,
  computeLint,
  loadTimeline,
  buildMeta,
  resolveRelatedList,
} from "./lib";

const DIST_DIR = join(import.meta.dir, "dist");
const UI_DIR = join(import.meta.dir, "ui");
const ASSETS_SRC = join(import.meta.dir, "raw", "assets");

async function build() {
  console.log("Building static site...");

  const pages = await loadWikiPages();
  const backlinks = computeBacklinks(pages);
  console.log(`Loaded ${pages.size} wiki pages`);

  // Create output dirs
  await mkdir(join(DIST_DIR, "data", "pages"), { recursive: true });
  await mkdir(join(DIST_DIR, "assets"), { recursive: true });

  // 1. Bundle the React app with Bun (d3 is bundled now — no CDN)
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

  const jsOutput = buildResult.outputs.find((o) => o.path.endsWith(".js"));
  const cssOutput = buildResult.outputs.find((o) => o.path.endsWith(".css"));
  const jsFilename = jsOutput ? jsOutput.path.split("/").pop() : "app.js";
  const cssFilename = cssOutput ? cssOutput.path.split("/").pop() : null;

  // 2. Generate index.html — Inter font + SVG favicon inline, no CDN
  const cssTag = cssFilename ? `<link rel="stylesheet" href="/${cssFilename}">` : "";
  const favicon =
    "data:image/svg+xml," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0d0d0d"/><text x="16" y="22" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="500" fill="#fafafa" text-anchor="middle">B</text></svg>`
    );
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brain Wiki</title>
<link rel="icon" type="image/svg+xml" href="${favicon}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap">
<meta name="theme-color" content="#0d0d0d">
${cssTag}
</head>
<body>
<div id="root"></div>
<script type="module" src="/${jsFilename}"></script>
</body>
</html>`;
  await writeFile(join(DIST_DIR, "index.html"), indexHtml);

  // 3. Summary list
  const pagesList = [...pages.values()].map(({ slug, title, type, domain, tags, category, links, updated, mtime, wordCount, readingTime }) => ({
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
  await writeFile(join(DIST_DIR, "data", "pages.json"), JSON.stringify(pagesList));

  // 4. Individual page files (with resolved related, backlinks, headings)
  for (const [slug, page] of pages) {
    const pageData = {
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
      backlinks: backlinks.get(slug) || [],
    };
    await writeFile(join(DIST_DIR, "data", "pages", `${slug}.json`), JSON.stringify(pageData));
  }

  // 5. Graph
  await writeFile(join(DIST_DIR, "data", "graph.json"), JSON.stringify(buildGraphData(pages)));

  // 6. Search index (kept content for snippets — it's a personal wiki, fine)
  const searchIndex = [...pages.values()].map(({ slug, title, type, domain, tags, category, content }) => ({
    slug,
    title,
    type,
    domain,
    tags,
    category,
    content,
  }));
  await writeFile(join(DIST_DIR, "data", "search.json"), JSON.stringify(searchIndex));

  // 7. Tags
  await writeFile(join(DIST_DIR, "data", "tags.json"), JSON.stringify(computeTagIndex(pages)));

  // 8. Lint
  await writeFile(join(DIST_DIR, "data", "lint.json"), JSON.stringify(computeLint(pages, backlinks)));

  // 9. Timeline (parsed from wiki/log.md)
  await writeFile(join(DIST_DIR, "data", "timeline.json"), JSON.stringify(await loadTimeline()));

  // 10. Meta (build timestamp, domains, counts)
  await writeFile(join(DIST_DIR, "data", "meta.json"), JSON.stringify(buildMeta(pages)));

  // 11. Copy raw/assets/* into dist/assets (images referenced by ![[...]] wikilinks)
  let assetCount = 0;
  try {
    const files = await readdir(ASSETS_SRC);
    for (const f of files) {
      if (f.startsWith(".")) continue;
      await copyFile(join(ASSETS_SRC, f), join(DIST_DIR, "assets", f));
      assetCount++;
    }
  } catch {
    // no assets dir — fine
  }

  // 12. _headers for caching
  const headers = `# Cache static assets aggressively (filenames have content hashes)
/app.*.js
  Cache-Control: public, max-age=31536000, immutable

/app.*.css
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=604800

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

  // 13. _redirects for SPA routing
  const redirects = `# SPA fallback — serve index.html for client-side routes
/page/*    /index.html  200
/graph     /index.html  200
/tags      /index.html  200
/tags/*    /index.html  200
/timeline  /index.html  200
/lint      /index.html  200
/random    /index.html  200
`;
  await writeFile(join(DIST_DIR, "_redirects"), redirects);

  console.log(`\nBuilt ${pages.size} pages to dist/`);
  console.log(`  dist/index.html`);
  console.log(`  dist/${jsFilename}`);
  if (cssFilename) console.log(`  dist/${cssFilename}`);
  console.log(`  dist/data/pages.json (${pages.size} entries)`);
  console.log(`  dist/data/pages/*.json (${pages.size} files)`);
  console.log(`  dist/data/graph.json`);
  console.log(`  dist/data/search.json`);
  console.log(`  dist/data/tags.json`);
  console.log(`  dist/data/lint.json`);
  console.log(`  dist/data/timeline.json`);
  console.log(`  dist/data/meta.json`);
  console.log(`  dist/assets/ (${assetCount} files)`);
  console.log(`  dist/_headers`);
  console.log(`  dist/_redirects`);
}

await build();
