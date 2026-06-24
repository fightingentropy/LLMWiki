# Brain Wiki

A personal knowledge wiki built from an Obsidian vault. Raw notes are pulled in,
an LLM turns them into cross-linked wiki pages, and a Bun server renders them as a
browsable site (search, graph, tags, timeline, backlinks, lint).

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- An authenticated [`claude` CLI](https://docs.claude.com/en/docs/claude-code) on
  `PATH` (used for ingest; auth comes from `~/.claude/`)
- `CLAUDE.md` present in the repo root — it's the wiki schema the ingest step
  follows. **Load-bearing, not just docs.** If missing: `git checkout HEAD -- CLAUDE.md`.

## Quick start

```bash
bun install
bun run dev          # http://localhost:3000  (loopback only)
```

The server binds to `127.0.0.1` and rejects cross-origin requests to its mutating
routes — it is intended for **local use only** (ingest spawns the `claude` CLI with
your credentials and write access).

## Scripts

| Script | What it does |
|--------|--------------|
| `bun run dev` | Server with auto-restart on code changes |
| `bun run start` | Server (no watch) |
| `bun run sync` | Pull the Obsidian vault into `raw/` (see below) |
| `bun run build` | Build the static site into `dist/` (for Cloudflare Pages) |
| `bun run check` | Content gate — fails on broken wikilinks |
| `bun test` | Unit tests for the `lib.ts` derivation functions |

## The pipeline

```
Obsidian vault  ──①sync──▶  raw/  ──②ingest──▶  wiki/  ──③serve──▶  browser
(source of truth)         (mirror)            (LLM pages)   (Bun + fs.watch)
```

1. **Sync** (`sync.ts`, `GET /api/sync`): one-way `rsync` pull from the vault into
   `raw/`. Set the vault location with `BRAIN_PATH` (defaults to the iCloud Obsidian
   path). Missing/empty source folders are skipped rather than mirrored, and anything
   `--delete` would remove is first copied to `raw/.sync-backups/<timestamp>/`.
2. **Ingest** (`ingest.ts`, `POST /api/ingest`): runs the `claude` CLI over pending
   `raw/` files to create/update pages under `wiki/`, following `CLAUDE.md`. The
   current `wiki/` is snapshotted first (recover with `git checkout <sha> -- wiki/`,
   the SHA is logged and returned in `X-Ingest-Snapshot`).
3. **Serve** (`server.ts` + `lib.ts`): renders `wiki/` and hot-reloads on changes.
   Derived data (graph/lint/tags/search) is computed once per reload and cached.

## Configuration

| Env var | Default | Purpose |
|---------|---------|---------|
| `BRAIN_PATH` | iCloud Obsidian `brain/` path | Obsidian vault to sync from |

## Deploy

`bun run build` emits a static `dist/`. CI (`.github/workflows/deploy.yml`) runs
`bun test` and `bun run check.ts` before building and deploying to Cloudflare Pages
on push to `main`.
