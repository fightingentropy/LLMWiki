---
title: Wiki Log
type: log
updated: 2026-04-18
---

# Wiki Log

Chronological record of wiki operations. Each entry starts with `## [date] operation | details` for easy parsing.

---

## [2026-04-12] bootstrap | Initial wiki creation

**Operation:** Full bootstrap from existing Obsidian vault.

**What happened:**
- Moved all existing files into `raw/` as immutable sources (22 misc files, 5 markets files, 3 electrics files, 1 clipping)
- Created `CLAUDE.md` schema defining wiki conventions and workflows
- Ingested all raw sources into wiki pages

**Pages created:**
- 19 source summaries in `wiki/sources/`
- 19 entity pages in `wiki/entities/`
- 54 topic pages in `wiki/topics/`
- 1 unified index at `wiki/index.md`

**Domains covered:** personal, health, psychology, markets, electrics, culture, dev

**Raw sources ingested:**
- `raw/misc/` — Body, Medical, Psychology, Thoughts, Culture, Politics, Bizz & Finance, Design, Dev, Setup, Quotes, Stories, Funny, Jokes, Go Do, Top Pods, X takes, X-Bookmarks, Women, Pick up limes, Youtube
- `raw/markets/` — Articles, Brief, Handbook, Tools, Trading
- `raw/electrics/` — Resources, Inspection and Testing summary, PAT Testing summary
- `raw/clippings/` — Trump's 2nd Term article

**Notes:**
- Some raw files (Quotes, Go Do, Funny, Jokes, Stories, X-Bookmarks, Youtube, Women, Pick up limes) were not given dedicated source pages as their content was distributed into relevant topic and entity pages
- The markets domain produced the most granular topic breakdown (30+ pages) due to the structured nature of the source material
- Electrics domain preserved all technical data (formulas, regs, procedures) verbatim

---

## [2026-04-18] ingest | raw/misc/Youtube.md bookmark list

Ingested the Youtube bookmark file (14 links with short human commentary). Created source page [[Youtube]] preserving every link and comment, organized by theme (happiness/epic-shit, delusion, pragmatism, intimacy, inflation, beauty-toxicity). Created entity page [[Charles_Bukowski]]. Added "Do Epic Shit" and "Usefulness Over Truth" sections to [[Philosophy_and_Meaning]]; "Delusion as Tool" and "Motivation as Reframe" to [[Self_Improvement]]; "Delusion & Soul in the Game" to [[Trading_Psychology]]; "True Intimacy" to [[Dating_and_Relationships]]; "Beauty & Toxicity" to [[Design_and_Aesthetics]]. Extended [[Nassim_Taleb]] with the "soul in the game" framing. Added Youtube.md to the sources: frontmatter on all touched pages. Updated [[INDEX]] under Sources and Entities.
