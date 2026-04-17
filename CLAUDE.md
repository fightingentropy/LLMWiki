# Brain Wiki — Schema

This is a personal knowledge wiki maintained by an LLM. The human curates sources and asks questions. The LLM writes and maintains all wiki pages.

## Directory Structure

```
raw/                   # Immutable source documents. LLM reads, never modifies.
  misc/                # Personal notes, bookmarks, takes, observations
  markets/             # Trading, macro, crypto, finance
  electrics/           # Electrical safety, building regs, study notes
  clippings/           # Web clips (articles, transcripts, videos)
  assets/              # Images referenced by sources
wiki/                  # LLM-generated pages. LLM owns this entirely.
  INDEX.md             # Content catalog — every wiki page listed with summary
  log.md               # Chronological record of operations (parsed by the UI timeline)
  overview.md          # High-level summary of the wiki, its themes and gaps
  sources/             # One summary page per ingested raw source
  entities/            # Pages about specific people, tools, accounts, resources
  topics/              # Pages about broader subjects
  analyses/            # Synthesised answers to queries (comparisons, frameworks)
CLAUDE.md              # This file — schema and conventions
```

## Page Types

### Entity Pages (`wiki/entities/`)
Pages about specific people, tools, accounts, or resources. Examples: a trader you follow, a supplement, a podcast, a software tool.

### Topic Pages (`wiki/topics/`)
Pages about broader subjects. Examples: trading psychology, ADHD, electrical safety, body optimization, crypto market structure.

### Source Summaries (`wiki/sources/`)
One page per ingested raw source. Contains: key takeaways, notable quotes, links to entity/topic pages it touches. Named after the source file.

### Comparisons & Analyses (`wiki/analyses/`)
Pages generated from queries — comparisons, syntheses, timelines, frameworks. Good answers get filed here so they compound.

### Overview (`wiki/overview.md`)
A single page summarizing the entire wiki — what domains it covers, what the key themes are, what's well-developed and what has gaps. Updated periodically.

## Frontmatter Convention

Every wiki page starts with YAML frontmatter:

```yaml
---
title: Page Title
type: entity | topic | source | analysis | overview
domain: personal | markets | electrics | culture | dev | health | psychology
sources: [list of raw source files this page draws from]
related: [list of wiki pages this page links to]
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [relevant tags]
---
```

## Cross-Linking

Use Obsidian-style wikilinks: `[[Page Name]]`. Every page should link to related pages. When creating or updating a page, check if new cross-links are needed to other existing pages. Orphan pages (no inbound links) are a lint issue.

## Workflows

### Ingest

When the human adds a new source to `raw/`:

1. Read the source file completely.
2. Discuss key takeaways with the human if they want.
3. Create a source summary page in `wiki/sources/`.
4. Create or update entity pages for any people, tools, or resources mentioned.
5. Create or update topic pages for concepts and themes.
6. Update cross-links across all touched pages.
7. Update `wiki/INDEX.md` with new/changed pages.
8. Append an entry to `log.md`.

A single source may touch 5–15 wiki pages. Be thorough.

### Query

When the human asks a question:

1. Read `wiki/INDEX.md` to find relevant pages.
2. Read those pages.
3. Synthesize an answer with `[[wikilinks]]` as citations.
4. If the answer is substantial or reusable, file it as a new page in `wiki/analyses/`.
5. Update `wiki/INDEX.md` and `log.md`.

### Lint

Periodic health check. The UI's `/lint` view automatically surfaces:

- Orphan pages (no inbound wikilinks)
- Broken wikilinks (pointing at non-existent pages)
- Pages with missing `type`, `domain`, or `tags` in frontmatter
- Stale pages (`updated` more than 90 days old)
- Duplicate titles (where wikilinks may resolve ambiguously)

These can be resolved automatically; the LLM should additionally watch for issues the UI can't detect:

- Contradictions between pages
- Stale claims superseded by newer sources
- Concepts mentioned but lacking their own page
- Duplicate content across pages
- Data gaps worth investigating (suggest sources to find)

## Writing Style

- Factual and concise. No filler.
- Preserve the human's voice when quoting from sources — these are personal notes, not academic papers.
- Flag contradictions explicitly rather than silently resolving them.
- Use bullet points for lists of facts; use prose for synthesis and analysis.
- When a claim comes from a specific source, cite it: `(from [[Source Name]])`.

## Domains

The wiki currently spans these domains (expect this list to grow):

- **personal** — thoughts, psychology, self-improvement, identity
- **health** — body optimization, supplements, medical notes, ADHD
- **markets** — trading, macro, crypto, market structure, specific traders
- **electrics** — electrical safety, building regs, Part P, study notes
- **culture** — observations on society, dating, aesthetics, politics
- **dev** — tools, setup, bookmarks, technical resources
- **psychology** — behavioral patterns, motivation, detachment, compounding decisions
