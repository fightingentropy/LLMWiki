import { $ } from "bun";
import { join } from "path";

const BRAIN_PATH = "/Users/erlinhoxha/Library/Mobile Documents/iCloud~md~obsidian/Documents/brain";

const RAW_DIR = join(import.meta.dir, "raw");

// Map brain folders → raw/ subdirectories
const SYNC_MAP: Record<string, string> = {
  "misc":      "misc",
  "markets":   "markets",
  "electrics": "electrics",
  "Clippings": "clippings",
  "img":       "assets",
};

export async function sync(): Promise<{ synced: string[]; errors: string[] }> {
  const synced: string[] = [];
  const errors: string[] = [];

  for (const [brainFolder, rawFolder] of Object.entries(SYNC_MAP)) {
    const src = join(BRAIN_PATH, brainFolder) + "/";
    const dest = join(RAW_DIR, rawFolder) + "/";

    try {
      // rsync: archive mode, delete removed files, only copy newer
      const result = await $`rsync -av --delete --update ${src} ${dest}`.quiet();
      const output = result.stdout.toString();
      const changed = output
        .split("\n")
        .filter((l) => l && !l.startsWith("sent") && !l.startsWith("total") && !l.endsWith("/"))
        .length;

      if (changed > 0) {
        synced.push(`${brainFolder} → raw/${rawFolder} (${changed} files)`);
      }
    } catch (e: any) {
      errors.push(`${brainFolder}: ${e.message || e}`);
    }
  }

  return { synced, errors };
}

// Run directly from CLI: bun run sync.ts
if (import.meta.main) {
  console.log(`Syncing from: ${BRAIN_PATH}`);
  console.log(`Syncing to:   ${RAW_DIR}\n`);

  const { synced, errors } = await sync();

  if (synced.length) {
    console.log("Synced:");
    synced.forEach((s) => console.log(`  ✓ ${s}`));
  } else {
    console.log("Everything already up to date.");
  }

  if (errors.length) {
    console.log("\nErrors:");
    errors.forEach((e) => console.log(`  ✗ ${e}`));
  }
}
