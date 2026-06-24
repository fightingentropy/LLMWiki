import { $ } from "bun";
import { join, dirname } from "path";
import { stat, readdir, mkdir, cp } from "fs/promises";

// The Obsidian vault to pull from. Overridable per-machine via BRAIN_PATH so the
// repo isn't pinned to one user's iCloud container.
const BRAIN_PATH =
  process.env.BRAIN_PATH ||
  "/Users/erlinhoxha/Library/Mobile Documents/iCloud~md~obsidian/Documents/brain";

const RAW_DIR = join(import.meta.dir, "raw");

// Map brain folders → raw/ subdirectories
const SYNC_MAP: Record<string, string> = {
  "misc":      "misc",
  "markets":   "markets",
  "electrics": "electrics",
  "Clippings": "clippings",
  "img":       "assets",
};

export interface SyncResult {
  synced: string[];
  errors: string[];
  deleted: number;
  backupDir: string | null;
}

// Count "real" entries, ignoring dotfiles — including iCloud `.*.icloud`
// eviction placeholders — so an evicted/unmounted folder reads as empty and is
// skipped rather than mirrored (which would delete the raw/ copy).
async function realEntryCount(dir: string): Promise<number> {
  const entries = await readdir(dir);
  return entries.filter((n) => !n.startsWith(".")).length;
}

// Files `rsync --delete` would remove from dest, via a dry-run. We back these
// up ourselves rather than using rsync's --backup-dir, which is unreliable
// across implementations (openrsync silently disables --delete when it's set).
async function deletionsFor(src: string, dest: string): Promise<string[]> {
  const dry = await $`rsync -av --delete --update --dry-run ${src} ${dest}`.quiet().nothrow();
  return dry.stdout
    .toString()
    .split("\n")
    .filter((l) => l.startsWith("deleting ") && !l.endsWith("/"))
    .map((l) => l.slice("deleting ".length).trim())
    .filter(Boolean);
}

export async function sync(): Promise<SyncResult> {
  const synced: string[] = [];
  const errors: string[] = [];
  let deleted = 0;

  // One timestamped backup root per run; created lazily, only if we actually
  // back something up.
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupRoot = join(RAW_DIR, ".sync-backups", stamp);
  let usedBackup = false;

  for (const [brainFolder, rawFolder] of Object.entries(SYNC_MAP)) {
    const srcDir = join(BRAIN_PATH, brainFolder);
    const src = srcDir + "/";
    const dest = join(RAW_DIR, rawFolder) + "/";

    // Pre-flight: never run `rsync --delete` against a missing or empty source.
    // An unmounted/evicted iCloud folder would otherwise mirror its emptiness
    // and wipe the corresponding raw/ subdir.
    try {
      const st = await stat(srcDir);
      if (!st.isDirectory()) {
        errors.push(`${brainFolder}: not a directory — skipped`);
        continue;
      }
    } catch {
      errors.push(`${brainFolder}: source folder missing — skipped (raw/${rawFolder} left untouched)`);
      continue;
    }
    if ((await realEntryCount(srcDir)) === 0) {
      errors.push(`${brainFolder}: source folder empty (evicted/unmounted?) — skipped to avoid deleting raw/${rawFolder}`);
      continue;
    }

    try {
      // Back up anything --delete would remove, before it's removed.
      const toDelete = await deletionsFor(src, dest);
      for (const rel of toDelete) {
        const to = join(backupRoot, rawFolder, rel);
        try {
          await mkdir(dirname(to), { recursive: true });
          await cp(join(dest, rel), to);
        } catch {
          // Best-effort backup; don't abort the sync if one file can't be copied.
        }
      }
      if (toDelete.length > 0) {
        deleted += toDelete.length;
        usedBackup = true;
      }

      // Real sync: archive, delete removed files, only copy newer.
      const result = await $`rsync -av --delete --update ${src} ${dest}`.quiet();
      const changed = result.stdout
        .toString()
        .split("\n")
        .filter(
          (l) =>
            l &&
            !l.startsWith("deleting ") &&
            !l.startsWith("sent") &&
            !l.startsWith("total") &&
            !l.startsWith("Transfer ") &&
            !l.endsWith("/")
        ).length;

      if (changed > 0 || toDelete.length > 0) {
        synced.push(`${brainFolder} → raw/${rawFolder} (${changed} changed${toDelete.length ? `, ${toDelete.length} deleted` : ""})`);
      }
    } catch (e: any) {
      errors.push(`${brainFolder}: ${e.message || e}`);
    }
  }

  return { synced, errors, deleted, backupDir: usedBackup ? backupRoot : null };
}

// Run directly from CLI: bun run sync.ts
if (import.meta.main) {
  console.log(`Syncing from: ${BRAIN_PATH}`);
  console.log(`Syncing to:   ${RAW_DIR}\n`);

  const { synced, errors, deleted, backupDir } = await sync();

  if (synced.length) {
    console.log("Synced:");
    synced.forEach((s) => console.log(`  ✓ ${s}`));
  } else {
    console.log("Everything already up to date.");
  }

  if (deleted > 0) {
    console.log(`\n${deleted} file(s) deleted — backed up to ${backupDir}`);
  }

  if (errors.length) {
    console.log("\nErrors / skipped:");
    errors.forEach((e) => console.log(`  ✗ ${e}`));
    process.exitCode = 1;
  }
}
