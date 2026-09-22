// One-command local refresh: pull the Obsidian vault into raw/, then report how
// many raw files are pending ingest. Deliberately does NOT auto-ingest — ingest
// spawns the `claude` CLI with your credentials, so it stays a manual step.
//
//   bun run refresh
//
// Intended for interactive use or an opt-in launchd schedule (see
// scripts/com.brainwiki.sync.plist). Exits non-zero if sync reported errors.
import { sync } from "../sync.ts";
import { computePendingIngest } from "../lib.ts";

const { synced, errors } = await sync();

if (synced.length) {
  console.log("Captured new source versions:");
  synced.forEach((s) => console.log(`  ✓ ${s}`));
} else {
  console.log("No new source revisions.");
}

if (errors.length) {
  console.log("\nErrors / skipped:");
  errors.forEach((e) => console.log(`  ✗ ${e}`));
}

// Report pending ingest — but never start one.
const pending = await computePendingIngest();
console.log(`\n${pending.length} file(s) pending ingest.`);
if (pending.length) {
  console.log("Run an ingest from the wiki UI (or POST /api/ingest) to process them.");
}

if (errors.length) process.exitCode = 1;
