---
title: Wiki Log
type: log
updated: 2026-04-18
---

# Wiki Log

Chronological record of wiki operations. Each entry starts with `## [date] operation | details` for easy parsing.

---

## [2026-04-18] ingest | raw/misc/X-Bookmarks.md 1091 bookmarks thematic index

Ingested raw/misc/X-Bookmarks.md — a 468KB export of 1,091 X/Twitter bookmarks from @entropyholdings (export date 2026-03-19). **Approach: thematic index, NOT verbatim.** The file is too large to mirror into the wiki line-for-line, so sampled the file at multiple offsets (lines 1-150, 1500-1900, 3000-3300, 4500-4800, 6000-6300, 9000-9300, 10500-10800, 12000-12300, 13000-13274) and used grep to count recurring handles across all 1,091 entries. Created source page [[X-Bookmarks]] with: (1) intro and pointer to raw file; (2) taxonomy organizing bookmarks into 10 themes (Design & Aesthetics ~280, Dev & Infra ~230, AI/Models/Tools ~200, Crypto/Markets ~150, Creative Coding ~110, Culture & Commentary ~90, Philosophy/Thoughts ~80, Product/Business ~60, Humor/Misc ~50, Health/Body ~40) with 3-5 representative handles per theme; (3) top-20 most-recurring handles (led by @minordissent 20, @Citrini7 11, @steipete 9, @levelsio 8, @TheFlowHorse 6); (4) 20 verbatim "notable standalone insight" excerpts chosen for reusability — including @0xaporia on profit-taking as self-sabotage, @Cheshire_Cap's EV math on aggressive TP, @zhusu on selling tops being more dangerous than selling into drops, @0xmev's Discovery Bounds V2 essay, @TheFlowHorse's get-dressed advice, @tishray's place-shapes-you thesis, @Lovandfear's "sleeper cell" ADHD frame, @celestialbe1ng on provokability = hormonal signal, @DeepPsycho_HQ on escaping early-success illusion, @IterIntellectus dog-cancer-mRNA story and fiber-vs-protein takedown, @defi_monk's 2032 Hyperliquid day-in-the-life, @steipete's "personality prompt" for openclaw, @ns123abc's Palantir-concealment exposé, @ComedicBizman on NPC vs Main Character; (5) "how to use this archive" pointer back to raw file + grep patterns. Updated INDEX (X-Bookmarks under Sources). Did NOT fan out to per-handle entity updates this pass — sampling confirmed existing entities ([[Citrini Research]], [[0xaporia]], [[TheFlowHorse]], [[goodalexander]], [[cobie]], [[fejau_inc]], [[Hyperliquid]], [[CryptoCred]]) all appear but the bookmarks are mostly link/thread-style (not dense verbatim paragraphs) so the source-page-level citation is sufficient; future query-driven passes can lift specific posts into entity pages as needed.

---

## [2026-04-18] ingest | raw/misc/Women.md dating & gender dynamics

Ingested the Women file (~105KB personal archive on women, dating, attraction, gender dynamics, and "game"). Created source page [[Women]] preserving the human's voice verbatim per schema (red-pill-adjacent, Heartiste-heavy, DrDynamis-heavy, internally contradictory — contradictions flagged not sanitized), organized thematically: dominant voices, ten core theses (M/F cognitive asymmetry, motherhood as trajectory change, memoryless/present-tense frame, hypergamy/solipsism/Briffault, attraction as polarity, the nonchalance doctrine, proximity/logistics, female sexuality as narcissistic-self-regarding, birth control as distortion, breakup asymmetry, forehead-kiss), preserved frameworks (Heartiste's Sixteen Commandments, 19 Bad Boy Tricks, @WhySanaaWhy's 14-point female-voice advice, Tucker Max's love-your-work model, "before you get married" checklist, physical game playbook), a DrDynamis life-philosophy cluster, explicit contradictions list, and closing scripture + 1 Corinthians reading. Created new topic [[Gender_Dynamics]] for the structural/cognitive/polarity material that didn't fit [[Dating_and_Relationships]] (tactics) or [[Masculinity_and_Men]] (men-side). Created 2 new entity pages: [[Heartiste]] (pseudonymous game writer Roissy; the file's most-quoted external voice; authored the Sixteen Commandments — preserved verbatim with per-commandment summary) and [[DrDynamis]] (the @DrDynamis/@DrdynamisA/@dynamis_dr/@ArcadianRythms handle-cluster; Mediterranean-stoic moralist; anti-nerd/anti-soy/anti-fetish/pro-prayer/pro-lifting; documented as the "third pole" of masculinity discourse beyond sterile-optimizer and Tate-axis). Extended [[Dating_and_Relationships]] with nine new sections (nonchalance doctrine, attraction vs retention, hypergamy/solipsism/Briffault frame, breakup asymmetry, forehead-kiss & Kino, before-you-get-married checklist, Tucker Max love-your-work, Heartiste's Sixteen Commandments summary, pre-commitment scripture, cross-wiki contradictions); added Women.md to sources. Extended [[Masculinity_and_Men]] with cognitive-asymmetry cross-ref, DrDynamis third-pole section, fear-of-confrontation thesis, never-seem-too-perfect, ennui-misnamed-as-depression, respect>adoration, emotional-umbilical-cord; added Women.md to sources. Extended [[Andrew_Tate]] with the "triple bypass / bloodline" clip anecdote; added Women.md to sources. Flagged contradictions: presentism-vs-front-loading, rational-woman coded both attractive and terminal, women-do-things-for-themselves vs all-behaviour-is-strategy, physical-warmth vs oak-tree state control. Updated [[INDEX]] under Sources (Women), Entities (Heartiste, DrDynamis), Personal & Psychology topics (Gender_Dynamics).

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

---

## [2026-04-18] ingest | raw/misc/Go Do.md bucket list & Japanese concepts

Ingested the Go Do file (bucket list of activities, travel, media to watch, and `@AlpacaAurelius`'s praise-list of Japanese cultural concepts). Created source page [[Go Do]] preserving every entry under four sections (Activities, Travel, Japanese Cultural Concepts, Media). Created entity pages [[Alex_Hormozi]] and [[Chris_Williamson]] — both flagged as significant via the human's explicit intention to "watch and analyse" the Hormozi × Williamson pod on imperfect action (video `Gk8EGWoGnEQ`, same ID that recurs in [[Youtube]] for "do epic shit" / "only way is through"). Created topic page [[Japanese_Philosophy]] with short factual definitions for ikigai, wabi-sabi, kaizen, kintsugi, omotenashi, onsen, forest bathing, tea ceremony, wagyu, tatami, kimono, and raw food — cross-linked to [[Philosophy_and_Meaning]], [[Self_Improvement]], [[Design_and_Aesthetics]], [[Body_Optimization]]. Extended [[Self_Improvement]]'s existing "Imperfect Action > Perfect Planning" section with the Hormozi source and kaizen cross-link; added Go Do.md to its sources. Updated [[INDEX]] under Sources (Go Do), Entities (Alex_Hormozi, Chris_Williamson), and Personal & Psychology topics (Japanese_Philosophy).

---

## [2026-04-18] ingest | raw/misc/Pick up limes.md crude humor collection

Ingested the Pick up limes file (~1.9KB of crude one-liners, pickup/comeback lines, Greek phrases, sexual innuendo, dating banter, and dark-comedic bits). Created source page [[Pick-up-limes]] preserving every line verbatim per schema (these are personal notes, the human's voice is load-bearing), with light thematic grouping: dick-size comebacks, absurd/dark one-liners, Greek phrases, sexual innuendo, dating banter, insults/roasts, and news-adjacent bits. No topic or entity pages warranted — content stands alone as amusement archive; cross-linked to existing [[Culture]] and [[Dating_and_Relationships]]. Updated [[INDEX]] under Sources.

---

## [2026-04-18] ingest | raw/misc/Jokes.md humor collection

Ingested the Jokes file (~30KB personal humor archive: Greek wordplay, name-puns, long-form set pieces, English absurd one-liners, pickup-line compendium, dark bits). Created source page [[Jokes]] preserving every entry verbatim per schema (crude/dark content kept as-is), structured into: long-form set pieces (call-girl Johnny, ancient-Greek Σ. griphos, chemistry *SiKW HORePSe KOUKLi MoU*, the palm/hand "Έμεινε χείρα" reveal, Tibidabo reverie, SVU: Special Mowing Unit, 12 rules to be an Italian), name-pun cluster (Irish/Italian/Arab/Japanese/etc.), Greek one-liners, English observational, Roman-numeral meta. Also noted recurring lines within the file (preserved as-is). Created a new topic page [[Humor]] as a unifying landing page for the two humor archives ([[Jokes]] and [[Pick-up-limes]]) — documents recurring registers (Greek wordplay, nationality puns, crude comebacks, shaggy-dog set pieces, observational absurd, meta/format jokes), tonal notes, and gaps. Back-linked [[Pick-up-limes]] to [[Jokes]] and [[Humor]]. No entity pages created — no recurring named comedian/creator rises above one-off mentions (@thanos1625 appears twice but not entity-worthy yet). Updated [[INDEX]] under Sources (Jokes) and Culture & Politics topics (Humor).

---

## [2026-04-18] ingest | raw/misc/Funny.md humor collection

Ingested the Funny file (~36KB personal humor archive, link-heavy). Created source page [[Funny]] preserving every entry verbatim per schema: ~30 embedded X/Twitter URLs and YouTube timestamps, crypto/markets shitpost cluster (including the full r/wsb "Everything is priced in" copypasta), long-form set pieces (Lt-Gen Carton de Wiart bio appears twice, Daft Punk/Kanye hallucination, Neapolitan duelist, emotional-baggage breakup, Pizza-Hut-WWF-No-Mercy time-warp, Jocko-parody motivational routine, porn-quitting misogyny essay, edibles LA vs. Amsterdam, "negative cash flow girlfriend"), hospitality/restaurant-worker observations (first-person material), Greek one-liners, Albanian/mixed-language fragments, English observational. Noted within-file repeats (Carton de Wiart, Greek taxi driver, negative-cash-flow breakup, Heimlich, Eminem riff) and cross-archive overlaps with [[Jokes]] and [[Pick-up-limes]]. Extended [[Humor]] topic page: added [[Funny]] to source archives with distinguishing description (largest/link-heavy/crypto-twitter/hospitality), added two new registers (crypto/markets shitpost, hospitality/restaurant-worker voice, link-bookmarks) to the recurring-registers taxonomy, noted cross-archive repeats and new cross-refs to [[Andrew_Huberman]] / [[Chris_Williamson]] / [[Joe_Rogan]] / [[Andrew_Tate]]. Updated Humor.md frontmatter sources to include Funny.md. Back-linked [[Pick-up-limes]] and [[Jokes]] to [[Funny]] (frontmatter related + bottom related line). No entity pages created — all ~30 linked handles are one-shot references. Updated [[INDEX]] under Sources (Funny).

---

## [2026-04-18] ingest | raw/misc/CT.md crypto trader takes

Ingested the CT (Crypto Takes) file (~52KB of verbatim quotes, tweets, and trader commentary from crypto-twitter). Created source page [[CT]] preserving all substantial quotes with attribution, grouped thematically: Price Discovery & Market Mechanics; Exchange Infrastructure & Microstructure; Macro & M2; Crypto Philosophy; Trading Psychology & Bag-Holding; Specific Trader Takes; Contradictions. Created 14 new entity pages: [[GCRClassic]], [[CryptoCred]], [[Pentosh1]], [[goodalexander]], [[trading_axe]], [[0xaporia]], [[Satoshi_Nakamoto]], [[HsakaTrades]], [[DegenSpartan]], [[jimtalbot]], [[GiganticRebirth]], [[insiliconot]], [[Rewkang]], [[ImperatorXBT]]. Extended existing entities: [[cobie]] (supercycle, low-conviction-money, grow-fast-protect-slow, VC bid-up, crypto-world bubble, sit-on-ass realization, decentralized machines), [[fejau_inc]] (M2 overlay), [[Hyperliquid]] (bandwidth/latency commentary, HYPE-margined collateral risk). Extended topic pages: [[Trading_Psychology]] (bag-holding test, take money off table, variance/strategy hopping, first-cycle psychology, bear-market PTSD, back-half-bull-fear, never flex, PvP vs PvE, narrative post-hoc), [[Crypto Trading]] (supercycle vs inverse supercycle, dilution, low-conviction money, PvP/PvE, cascades as secondary effect), [[Trading Philosophy]] (capital allocation asymmetry, sit-on-ass, decouple process from outcome, orderflow frontruns newsflow, poker discipline), [[Liquidations]] (GCR wealth transfer framing, cascade as secondary effect, Husslin_ bottom conditions, HYPE margin risk), [[Leverage]] (HYPE collateral risk, Rewkang funding extremes in bulls), [[Exchange Microstructure]] (price discovery refinement, Hyperliquid latency, orderflow frontruns newsflow, range→expansion, sell walls, volume-on-rally bearish, CryptoCred bloat), [[Macro Trading]] (M2 overlay, crypto as silent debt default, Bessent white-hat framing, crypto decorrelation contradictions, tide-out), [[Sentiment]] (post-hoc hallucination, schelling-point narratives, normies signal, flex-culture contra-indicator), [[Traders Directory]] (featured section expanded, full directory extended with ~25 new handles). Flagged contradictions between takes (crypto ingenuity vs degradation, narrative read ex-post vs ex-ante, tools vs instinct, sit-on-ass vs sacrifice-weekends, decorrelation as forward-looking vs flow artifact) rather than resolving them. Updated [[INDEX]] under Sources (CT), Entities (14 new additions).

---

## [2026-04-18] ingest | raw/misc/Top Pods.md youtube bookmarks

Ingested the Top Pods bookmark file (6 links, skewed toward masculinity discourse). Created source page [[Top-Pods]] preserving every title and link, grouped by theme (masculinity, health, celebrity conversations, Tate). Created entity pages [[Andrew_Tate]] and [[Joe_Rogan]]. Created a new topic page [[Masculinity_and_Men]] as a landing page that consolidates the "performative male epidemic" / "war on men" / sterile-optimization / two-poles discourse previously scattered across [[Dating_and_Relationships]], [[Andrew_Huberman]], [[Tim_Ferriss]], [[Lex_Fridman]], and [[Culture]]. Extended [[Andrew_Huberman]] with the "How to reclaim your brain in 2026" bookmark and added Top Pods.md to its sources. Added a "Fall of Empire (Tate)" section to [[Political_Commentary]] and a "Reclaiming Attention" section to [[Mental_Health]]. Cross-linked [[Dating_and_Relationships]] into the new masculinity page. Updated [[INDEX]] under Sources (Top-Pods), Entities (Andrew_Tate, Joe_Rogan), and Culture & Politics topics (Masculinity_and_Men).

---

## [2026-04-18] ingest | raw/misc/Quotes.md cross-domain quotes

Ingested the Quotes file (~34KB, long-running curated quote archive spanning philosophy, action, markets, love, self, time, politics, art, craft, plus Greek and Albanian fragments). Created source page [[Quotes]] (909 lines) organised by theme rather than author, with a "Themes across the collection" synthesis at the bottom (action-precedes-feeling, time-as-scarce-resource, self-betrayal as worst sin, usefulness-over-correspondence, obsession/soul-in-the-game, delusion-as-tool, antifragility, narrative-as-interface). Created 8 new entity pages for the most-quoted/most-substantive recurring authors: [[Nietzsche]] (8 quotes — habit-as-character, self-command, interpretation-as-power, herd morality), [[Dostoevsky]] (6 quotes — self-betrayal, overthinking-as-disease, lying-to-oneself, last-words-to-Anya), [[Carl_Jung]] (addiction as search for God, inferno of passions, thinking vs judging), [[Bruce_Lee]] (self-talk as spellcasting, be-like-water, agitated-mind), [[Marcus_Aurelius]] (perception, forgetting), [[Seneca]] (imagined suffering, wealth as slave vs master), [[Naval_Ravikant]] (@naval quoted 4× — intelligence-as-outcome, taste-of-freedom, projection→attraction), [[Javier_Milei]] (printing-diplomas, other-people's-asses, zero-compromise). Extended existing entity pages [[Nassim_Taleb]] (added Quotes.md to sources; added Quotes-cited section with the academia/decline lines; filed the Nietzsche option-value antifragility synthesis) and [[Charles_Bukowski]] (added Quotes.md to sources; added Quotes-cited section with the three curated Bukowski lines). Extended three topic pages with "Notable Quotes" sections citing (from [[Quotes]]): [[Philosophy_and_Meaning]] (mortality as orienting device, perception/interpretation, meaning through obsession, antifragility option-value, cardinal-sin-impatience), [[Self_Improvement]] (action/courage/agency, habit-as-character, self-betrayal/self-talk, create-not-consume, discomfort-and-growth), [[Trading_Psychology]] (concentration, right-vs-rich, tide framing, positioning over effort, risk as conserved quantity, wealth vs money, holding on vs cashing in). Added Quotes.md to those three topic pages' sources frontmatter. Skipped creating entity pages for 1–2 mention authors (Kafka, Garcia Marquez, Sylvia Plath, G K Chesterton, Peter Thiel, Steve Jobs, David Goggins) — budget-conscious prioritization; these remain as red wikilinks to be filled on future ingest if they recur. Updated [[INDEX]] under Sources (Quotes) and Entities (8 new additions).
