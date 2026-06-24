// Content gate for CI: load the wiki and fail the build on broken wikilinks.
// Duplicate-title slug collisions are reported as a warning (not fatal) so they
// surface without blocking deploys. Run with: bun run check.ts
import { loadWikiPages, computeBacklinks, computeLint } from "./lib";

const pages = await loadWikiPages();
const backlinks = computeBacklinks(pages);
const issues = computeLint(pages, backlinks);

const broken = issues.filter((i) => i.kind === "broken-link");
const dupes = issues.filter((i) => i.kind === "duplicate-title");

console.log(`Checked ${pages.size} pages — ${broken.length} broken wikilink(s), ${dupes.length} duplicate-title slug(s).`);

if (dupes.length > 0) {
  console.warn("\nWarning — duplicate titles (wikilinks may resolve to the wrong page):");
  for (const d of dupes) console.warn(`  ${d.slug}  (shares title with: ${d.detail})`);
}

if (broken.length > 0) {
  console.error("\nBroken wikilinks:");
  for (const b of broken) console.error(`  ${b.slug} -> [[${b.detail}]]`);
  console.error(`\n${broken.length} broken wikilink(s) — failing.`);
  process.exit(1);
}

console.log("OK — no broken wikilinks.");
