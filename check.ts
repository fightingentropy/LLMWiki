import { loadRawSources } from "./sources";
// Content gate for CI: load the wiki and fail the build on broken wikilinks.
// Duplicate-title slug collisions are reported as a warning (not fatal) so they
// surface without blocking deploys. Run with: bun run check.ts
import { loadWikiPages, computeBacklinks, computeLint } from "./lib";
import { checkShape } from "./shape";

const pages = await loadWikiPages();
const backlinks = computeBacklinks(pages);
const issues = computeLint(pages, backlinks, await loadRawSources());

const broken = issues.filter((i) => ["broken-link", "broken-related", "broken-source"].includes(i.kind));
const dupes = issues.filter((i) => i.kind === "duplicate-title");

console.log(`Checked ${pages.size} pages — ${broken.length} broken body/metadata reference(s), ${dupes.length} duplicate-title slug(s).`);

if (dupes.length > 0) {
  console.warn("\nWarning — duplicate titles (wikilinks may resolve to the wrong page):");
  for (const d of dupes) console.warn(`  ${d.slug}  (shares title with: ${d.detail})`);
}

if (broken.length > 0) {
  console.error("\nBroken references:");
  for (const b of broken) console.error(`  ${b.slug} -> [[${b.detail}]]`);
  console.error(`\n${broken.length} broken body/metadata reference(s) — failing.`);
  process.exit(1);
}

console.log("OK — all body links, related pages and source paths resolve.");

// Size and style limits (see AGENTS.md, Writing Style).
const shape = checkShape(pages);
const shapeErrors = shape.filter((i) => i.level === "error");
const shapeWarnings = shape.filter((i) => i.level === "warning");
if (shapeWarnings.length) console.warn(`\n${shapeWarnings.length} warning(s) — a link should be described on one page only:\n` + shapeWarnings.slice(0, 20).map((w) => `  ${w.slug}: ${w.detail}`).join("\n"));
if (shapeErrors.length) {
  console.error(`\nPages over the size or style limits:\n` + shapeErrors.map((e) => `  ${e.slug}: ${e.detail}`).join("\n"));
  console.error(`\n${shapeErrors.length} size/style error(s) — failing.`);
  process.exit(1);
}
console.log("OK — pages are within the size and style limits.");
