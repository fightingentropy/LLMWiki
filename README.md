# Brain Wiki

A personal knowledge wiki built from an Obsidian vault. Raw notes are pulled in,
an LLM turns them into cross-linked wiki pages, and a Bun server renders them as a
browsable site (search, graph, tags, timeline, backlinks, lint).

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- An authenticated [`claude` CLI](https://docs.claude.com/en/docs/claude-code) on
  `PATH` (used for ingest; auth comes from `~/.claude/`)
- `AGENTS.md` present in the repo root — it is the load-bearing wiki schema the
  staged ingest step follows.

## Quick start

```bash
bun install
bun run dev          # http://localhost:3000  (loopback only)
```

The server binds to `127.0.0.1`. Mutating routes are POST-only and require a
per-process HttpOnly session, a separate CSRF token, and same-origin Fetch
Metadata. It is intended for **local use only**.

## Scripts

| Script | What it does |
|--------|--------------|
| `bun run dev` | Server with auto-restart on code changes |
| `bun run start` | Server (no watch) |
| `bun run sync` | Pull the Obsidian vault into `raw/` (see below) |
| `bun run refresh` | Sync, then print the pending-ingest count (no auto-ingest) |
| `bun run build` | Build the static site into `dist/` (for Cloudflare Pages) |
| `bun run check` | Content gate — fails on broken wikilinks |
| `bun test` | Unit tests for the `lib.ts` derivation functions |

## The pipeline

```
Obsidian vault  ──①sync──▶  raw/  ──②ingest──▶  wiki/  ──③serve──▶  browser
(source of truth)         (mirror)            (LLM pages)   (Bun + fs.watch)
```

1. **Sync** (`sync.ts`, `POST /api/sync`): one-way `rsync` pull from the vault into
   `raw/`, including the curated `bookmarks/` collection. Set the vault location
   with `BRAIN_PATH` (defaults to the active iCloud Markdown Brain path).
   Missing/empty source folders are skipped rather than mirrored, and anything
   `--delete` would remove is first copied to `raw/.sync-backups/<timestamp>/`.
2. **Ingest** (`ingest.ts`, `POST /api/ingest`): canonicalizes and limits selected
   Markdown sources, copies only those sources plus `wiki/` into a private staging
   workspace, and runs `claude` there with an empty home, an environment allowlist,
   fail-closed OS sandbox settings, path-scoped `dontAsk` permissions, and no shell,
   web, MCP, user-setting, or session-persistence tools. A diff is generated and the full staged tree is validated before
   changed pages are atomically published. Prompt-injection text in a source is
   explicitly treated as untrusted data. The published `wiki/` is also snapshotted
   first (recover with `git checkout <sha> -- wiki/`).
3. **Serve** (`server.ts` + `lib.ts`): renders `wiki/` and hot-reloads on changes.
   Derived data (graph/lint/tags/search) is computed once per reload and cached.

## Automation (optional)

For a hands-off pull, `bun run refresh` syncs the vault and then prints how many
`raw/` files are pending ingest — it **never** auto-ingests (ingest spawns the
`claude` CLI with your credentials, so it stays a manual click).

To run that on a schedule, a macOS `launchd` template lives at
`scripts/com.brainwiki.sync.plist`. It is **opt-in** — nothing runs until you
copy it into `~/Library/LaunchAgents/`, fill in the absolute paths it documents,
and `launchctl load` it:

```bash
cp scripts/com.brainwiki.sync.plist ~/Library/LaunchAgents/com.brainwiki.sync.plist
# edit the copy: set __BUN_BIN__, __REPO_DIR__, __BRAIN_PATH__
launchctl load ~/Library/LaunchAgents/com.brainwiki.sync.plist   # unload to disable
```

It runs daily at 09:00 by default (editable in the plist) and logs to
`raw/.refresh.{out,err}.log`.

## Configuration

| Env var | Default | Purpose |
|---------|---------|---------|
| `BRAIN_PATH` | iCloud Markdown `Brain/` path | Markdown vault to sync from |

## Deploy

`bun run build` emits a static `dist/`. CI (`.github/workflows/deploy.yml`) pins Bun,
uses the frozen lockfile, and runs tests, content checks, and the production build
on pull requests and pushes. Only validated pushes to `main` deploy to Cloudflare
Pages.
