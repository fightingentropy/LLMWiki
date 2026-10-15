# Brain Wiki - Schema

This is a personal knowledge wiki maintained by an LLM. The human curates sources and asks questions. The LLM writes and maintains all wiki pages.

## Directory Structure

```text
raw/                   # Immutable source documents. LLM reads, never modifies.
  misc/                # Personal notes, bookmarks, takes, observations
  markets/             # Trading, macro, crypto, finance
  electrics/           # Electrical safety, building regs, study notes
  clippings/           # Web clips and dated research notes
  snapshots/           # Immutable dated revisions captured from the vault
  assets/              # Images referenced by sources
wiki/                  # LLM-generated pages. LLM owns this entirely.
  INDEX.md             # Content catalog - every wiki page listed with summary
  log.md               # Chronological record of operations (parsed by the UI timeline)
  overview.md          # High-level summary of the wiki, its themes and gaps
  sources/             # One summary page per ingested raw source
  entities/            # Pages about specific people, tools, accounts, resources
  topics/              # Pages about broader subjects
  analyses/            # Synthesised answers to queries (comparisons, frameworks)
AGENTS.md              # This file - schema and conventions
```

## Page Types

### Entity Pages (`wiki/entities/`)

Pages about specific people, tools, accounts, or resources. Examples: a trader you follow, a supplement, a podcast, a software tool.

### Topic Pages (`wiki/topics/`)

Pages about broader subjects. Examples: trading psychology, ADHD, electrical safety, body optimization, crypto market structure.

### Source Summaries (`wiki/sources/`)

One page per ingested raw source. Contains: key takeaways, notable quotes, links to entity/topic pages it touches. Named after the source file.

### Comparisons & Analyses (`wiki/analyses/`)

Pages generated from queries - comparisons, syntheses, timelines, frameworks. Good answers get filed here so they compound.

### Overview (`wiki/overview.md`)

A single page summarizing the entire wiki: what domains it covers, what the key themes are, what's well-developed and what has gaps. Updated periodically.

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
summary: Optional concise reader summary
reviewed: YYYY-MM-DD     # Only after a scoped evidence check
review_status: reviewed | verified | partial | unverified | archive
review_notes: What was checked and what remains uncertain
review_due: YYYY-MM-DD   # Optional explicit review deadline
source_gaps: []          # Historical source names that cannot currently be found
---
```

## Cross-Linking

Use Obsidian-style wikilinks: `[[Page Name]]`. Every page should link to related pages. When creating or updating a page, check if new cross-links are needed to other existing pages. Orphan pages with no inbound links are a lint issue.

## Workflows

### Ingest

Capture revisions as new files under `raw/snapshots/`; never overwrite or delete an existing raw source. Cite a raw-relative file path to pin a version. Capture, synthesis and evidence review are separate events.

When the human adds a new source to `raw/`:

1. Read the source file completely.
2. Discuss key takeaways with the human if they want.
3. Create or extend the source page in `wiki/sources/` as a resource bank: every link with a description, organised by theme.
4. Create or update entity pages for any people, tools, or resources mentioned.
5. Create or update topic pages for concepts and themes.
6. Update cross-links across all touched pages.
7. Update `wiki/INDEX.md` with new/changed pages.
8. Append an entry to `log.md`.

A single source may touch 5-15 wiki pages. Be thorough. Fold new material into the thematic sections of existing pages; never append a dated section.

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
- Broken `related` references and missing raw source paths
- Explicit historical source gaps
- Unreviewed health/electrical claims and pages marked partial or unverified
- Overdue evidence reviews (`review_due`, or 90 days for health/electrics and 365 days elsewhere after `reviewed`); source archives are exempt from age alone
- Duplicate titles (where wikilinks may resolve ambiguously)

These can be resolved automatically; the LLM should additionally watch for issues the UI can't detect:

- Contradictions between pages
- Stale claims superseded by newer sources
- Concepts mentioned but lacking their own page
- Duplicate content across pages
- Data gaps worth investigating (suggest sources to find)

## Writing Style

The wiki is a knowledge resource and a resource bank. A reader should be able to learn the subject from a page and open every saved link knowing what it is. Pages carry knowledge; `log.md` carries process.

- Factual and concise. No filler. Short sentences, plain English.
- Organise every page by theme. Never by ingest date or batch: no "August 2026 additions" sections, no dated change registers. A date appears only when the date is the fact (publication, event, correction).
- No process narration on pages: nothing about captures, snapshots, retention dates, archive numbers, entry counts, what was or was not changed externally, or how a page was produced. Record that in `log.md`.
- Every link gets a description: `- [Title](URL) — what it is and why it is worth opening.` Attribute X posts with the handle in italics at the end: `_(@handle)_`. Nothing else after the description.
- Source pages for bookmark categories and link collections cover every entry of the latest raw capture, grouped by theme. Source pages for note archives keep every quote, take and table from the note, grouped by theme, and list every link in the note.
- Caveats are one short clause, stated once where they change what the reader should do. Not per line. Health and electrical pages keep safety caveats once per section.
- Never invent what a link contains. Describe from the annotation, the title, the surrounding note, or the URL itself; otherwise write "Saved without a note."
- Preserve the owner's voice when quoting from sources; these are personal notes, not academic papers. Quote verbatim where the source is a quote, joke or take.
- Flag contradictions explicitly rather than silently resolving them. Keep corrections, labelled "Correction:" with the date of the correction.
- Use bullet points for lists of facts; use prose for synthesis and analysis.
- When a claim comes from a specific source, cite it: `(from [[Source Name]])`.
- Every page has a one-sentence `summary:` in frontmatter saying what the page gives the reader. Keep `review_status`, `reviewed`, `review_due` and `source_gaps` honest; do not add review statuses that were not earned, and do not pad `review_notes` with boilerplate.
- Say "Erlin's notes" or "the note", not "the human".

## Domains

The wiki currently spans these domains (expect this list to grow):

- **personal** - thoughts, psychology, self-improvement, identity
- **health** - body optimization, supplements, medical notes, ADHD
- **markets** - trading, macro, crypto, market structure, specific traders
- **electrics** - electrical safety, building regs, Part P, study notes
- **culture** - observations on society, dating, aesthetics, politics
- **dev** - tools, setup, bookmarks, technical resources
- **psychology** - behavioral patterns, motivation, detachment, compounding decisions

## Local Dev

- `wiki`: run `bun server.ts`.
- The local dev server defaults to port 3000; use `PORT=3001 bun server.ts` when another project occupies it.
