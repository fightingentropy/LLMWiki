---
title: X Bookmark Review - 30 September 2026
type: analysis
domain: personal
sources:
  - snapshots/2026-09-30-x-evergreen-cleanup/receipt.md
  - snapshots/1790805107293-1d59d21b8449/bookmarks/Index.md
  - snapshots/1790804551519-41aaf5e11d3a/bookmarks/Index.md
  - snapshots/2026-09-30-x-bookmark-review/inventory.md
  - snapshots/1790338863036-d5f1baaac670/bookmarks/Health & Psychology.md
related:
  - X Bookmark Cleanup - 30 September 2026
  - Evergreen Lessons from X - September 2026
  - Live X Bookmark Inventory - 30 September 2026
  - X-Bookmarks
  - Personal Knowledge Management
  - Developer Tool Evaluation Map
  - Trading Evidence and Review Framework
  - Health Evidence
  - Bookmarks - Health & Psychology
  - Compositor
  - Omarchy
  - Hyperliquid
  - Credit
  - jimtalbot
  - Peter Thiel
  - ADHD
  - Water Filtration
  - Digital Security
  - AI Agents
created: '2026-09-30'
updated: '2026-10-15'
tags: [bookmarks, curation, developer-tools, markets, evidence, september-2026, x]
summary: "Verdicts on all 70 X bookmarks held on 30 September 2026, grouped by theme, with the primary-source checks behind each call and what was finally kept."
reviewed: '2026-10-16'
review_status: reviewed
review_notes: "All 70 entries match the live inventory by number, handle and post ID, the verdict counts add up, and the product, release, paper and health claims stated in the page's own voice were checked against official docs, release pages, repositories, Crossref and PMC records, NHS, NIMH and NIAAA, with four time-sensitive corrections added; X posts, videos and attachments could not be opened, so the posts' own performance and anecdote claims stay unverified and are labelled as attributed or unchecked on the page."
---

# X Bookmark Review - 30 September 2026

Of the 70 bookmarks on Erlin's X account (@entropyholdings) on 30 September 2026, the first pass rated **26 strong keeps, 16 research or watch leads, 13 personal or entertainment items, 4 to consolidate, 1 already archived and 10 low-value references.** Those were broad judgments about future reference value. Erlin then asked to keep only evergreen knowledge and clear the list, so the final kept set is the 14 entries distilled from 15 posts in [[Evergreen Lessons from X - September 2026]]; all 70 bookmarks were then removed from X, as recorded in [[X Bookmark Cleanup - 30 September 2026]]. The counts here stand as a historical audit, not the final kept set.

The full list of the 70 posts, with authors and publication dates, is [[Live X Bookmark Inventory - 30 September 2026]]. Every post is covered below, grouped by theme, with its verdict and the reason.

## What was worth keeping

Concrete tools, reusable methods and testable ideas that connect to current work rank first. The strongest cluster is native and developer tooling, voice-agent workflows and trading engineering. Keeping a source does not endorse all of its claims ([[Personal Knowledge Management]]), and no clinical, investment or installation decision follows from a post being in the keep bucket. Videos and uninspected images stay watch-later or unresolved material.

### Act on first

- **Infrastructure and native apps:** Cloudflare cf, Compositor, Inline, Spotifast, the Tailscale compute workflow and the experimental Search browser. Apply [[Developer Tool Evaluation Map]] to one concrete task instead of treating release claims as measured outcomes.
- **Voice and interaction:** the official ElevenLabs release, dots, walking while doing email and calendar admin, the voice/video concept, the camera-focus lab, the liquid-glass chat demo and the motion references.
- **Markets:** Jeff's HFT implementation notes, the four-edge trade-journal prompt, OpenMarket and the boredom reminder. Use [[Trading Evidence and Review Framework]] to record actual costs and outcomes.
- **Thinking:** persuasive verbal arguments still need evidence; the inner-work essay is worth considering as personal testimony, not a clinical model.

### The evergreen cut

The 15 posts that became the 14 evergreen entries are marked **Evergreen** in the lists below: the deliberate night out (12), mortgage optionality (13), verbal intelligence (15), Jeff's HFT notes (20), the model-collapse paper (26), the production failure checklist (27), the VPN and DNS privacy posts (28 and 55, merged into one entry), the four trading edges (30), the camera-focus lab (31), home compute over Tailscale (39), carmine labelling (42), brown sugar and molasses (43), trading and boredom (44), and voice admin while walking (65). Three of those (13, 42 and 43) were only watch or fun items in the first pass; the evergreen pass kept the underlying fact, not the post. Release news, product hype, forecasts, rumours, humour, entertainment queues and unverified clinical claims were left out of the final set.

## Developer tools and native apps

- **10. [Cloudflare cf and Forge](https://x.com/Cloudflare/status/2104594527797330352)** — **Keep.** High relevance to Erlin's infrastructure work. The [cf docs](https://developers.cloudflare.com/cf/) confirm the API-wide CLI and typed configuration; adopt from the current docs rather than the launch tweet. _(@Cloudflare)_
- **11. [Compositor v1.4](https://x.com/robbietilton/status/2104760418602463742)** — **Keep.** A release update to a tool already in Brain ([[Compositor]]). The [repository](https://github.com/robbietilton/Compositor) is real; the 10x performance and size figures are the author's claims, not a benchmark. _(@robbietilton)_
- **47. [Inline open-source native chat](https://x.com/morajabi/status/2103503259650707609)** — **Keep.** The [repository](https://github.com/inline-chat/inline) is verified, with a macOS/iOS beta focus. A useful source, UI and agent-integration reference for Erlin's messaging projects; security and full-replacement claims not audited. _(@morajabi)_
- **58. [Spotifast release](https://x.com/paolino/status/2103061202641264797)** — **Keep.** A good native Spotify reference with a verified upstream repository. The saved v0.10 post is already superseded by [v0.11.0](https://github.com/crmne/spotifast/releases/tag/v0.11.0). _(@paolino)_
- **59. [Search WebKit browser](https://x.com/driceroland/status/2102747612600271198)** — **Keep.** An experimental native-app reference. The launch thread reports partial extension compatibility and iCloud-password issues; the [current site](https://officecommun.com/search) lists extensions, Keychain and Web Inspector, and a 6.1 MB download rather than the launch post's 2.9 MB. Whether those issues are resolved, and the performance claims, were not tested. _(@driceroland)_
- **39. [Home Mac compute over Tailscale](https://x.com/ashen_one/status/2103757218621653040)** — **Keep. Evergreen.** A strong practical fit for working while travelling. Tailscale is already a Brain topic; this adds an offloaded-compute example, not a new setup requirement. _(@ashen_one)_
- **27. [Production-engineering failure checklist](https://x.com/GohilHardy/status/2103760572835938540)** — **Keep. Evergreen.** A review checklist: deadlocks, leaks, N+1 queries, consistency, failover and rollback. Turn the sneer into concrete failure cases for each project. _(@GohilHardy)_
- **35. [Starlink plus wired UniFi access points](https://x.com/levelsio/status/2103600616694051018)** — **Watch.** A practical network-layout anecdote if remote-site internet is ever needed. Hardware-specific: do not generalise the dish/router statement to every Starlink model. _(@levelsio)_
- **36. [Flux phone link for Omarchy](https://x.com/iamdothash/status/2103571004543193098)** — **Watch.** A concrete early-stage feature list, worth keeping if using [[Omarchy]]. Supported phone platforms, permissions and reliability were not checked. Not the image model FLUX. _(@iamdothash)_
- **33. [Flux marketing demo](https://x.com/iamdothash/status/2103901914375045526)** — **Consolidate with 36.** The same Flux phone-link project; keep the feature list and the demo together rather than as separate tools. _(@iamdothash)_
- **61. [AirCard Wallet and lock-screen theming](https://x.com/another_dayu/status/2102715010309095779)** — **Watch.** The [repository](https://github.com/Mak5er/AirCard) is real and describes an AirTraffic sync exploit: an experimental platform modification, distinct from ordinary supported Wallet-pass design. Device compatibility not tested. _(@another_dayu)_

## AI, agents and voice

See [[AI Agents]] for the wider topic.

- **7. [OpenAI dots](https://x.com/OpenAI/status/2104984504133918973)** — **Keep.** Relevant to ongoing personal operations. The [official dots onboarding](https://learn.chatgpt.com/docs/dots/getting-started) confirms ongoing responsibilities and delegated work; account access and actual latency were not tested. _(@OpenAI)_
- **18. [ElevenLabs v4 and v4 Turbo](https://x.com/ElevenLabs/status/2104572127617994917)** — **Keep.** A direct product announcement relevant to voice work. Both models are listed in the [ElevenLabs model docs](https://elevenlabs.io/docs/overview/models); compare actual latency, cost and quality on Erlin's own sample before adopting. _(@ElevenLabs)_
- **19. [Reaction to the ElevenLabs launch](https://x.com/jaimintf/status/2104612093668548776)** — **Consolidate with 18.** Enthusiasm rather than new evidence; the official launch is the useful reference. _(@jaimintf)_
- **65. [Walking while doing email and calendar admin](https://x.com/_simonsmith/status/2102836288541913351)** — **Keep. Evergreen.** One of the strongest workflow ideas: use voice to triage and organise while away from a screen. First-person experience, not proof that apps or screens will disappear. _(@_simonsmith)_
- **63. [Watching YouTube with a voice agent](https://x.com/miu21590/status/2102862042231439645)** — **Keep.** An interesting workflow and interface pattern. The post does not link its site directly; the video-sync implementation and product availability were not established. _(@miu21590)_
- **56. [Codex Web GPT bridge](https://x.com/miu21590/status/2103330591189979274)** — **Watch.** An unofficial launcher that depends on ChatGPT web behaviour, with breakage reported in the thread. The author's "Zero Risk" label is not a supported-platform guarantee, and replies are not official compatibility guarantees; do not prioritise installing it. _(@miu21590)_
- **26. [Model-collapse research](https://x.com/thesupermannx/status/2103805052817453255)** — **Keep the paper, not the wrapper. Evergreen.** The [2024 Nature paper](https://www.nature.com/articles/s41586-024-07566-y) studies recursive training on generated data; keep its scope and correction notice. It does not establish that every use of synthetic data fails or that current ChatGPT is collapsing. _(@thesupermannx)_
- **16. [AI music and mass-market taste](https://x.com/nic_carter/status/2104758444368769253)** — **Watch.** A possible product-distribution thesis; save the question if it bears on music work. The prediction that streaming is over is unsupported, and the contemptuous framing adds little. _(@nic_carter)_
- **49. [First-principles prompt IQ claim](https://x.com/can/status/2103665365968658809)** — **Low value.** An anecdotal prompt tweak with no benchmark. Absorb the useful instruction into the workflow rather than keeping the claim as evidence. _(@can)_
- **8. [Claude PDF parody](https://x.com/andersonbcdefg/status/2104815339846721845)** — **Fun.** Humour about overwritten agent explanations and unintended actions; keep for the joke or as a writing-style reminder. _(@andersonbcdefg)_

## Design and interaction

- **31. [Interactive camera-focus lab](https://x.com/RyanSael/status/2102591147927654847)** — **Keep. Evergreen.** Resolves to sael.net/plane-of-focus. A good reference for explaining a mechanism through interaction. The claimed model, cost and one-shot production story were not reproduced, and the lab's physics were not validated. _(@RyanSael)_
- **51. [Personal operating-system interaction concept](https://x.com/ctatedev/status/2103517099511451940)** — **Keep.** An interesting direction for ephemeral and persistent views and whole-computer interaction. A first-person prototype concept; reproducibility and runtime capabilities not checked. _(@ctatedev)_
- **57. [Liquid-glass Expo chat demo](https://x.com/jaimintf/status/2102827785811333410)** — **Keep.** A native-chat visual reference for hierarchy and motion. The one-shot claim and implementation quality are untested. _(@jaimintf)_
- **54. [AI motion-graphics showreel prompt](https://x.com/stephanlivera/status/2103315922098470926)** — **Keep.** Visual and prompting inspiration. The model and one-shot attribution are self-report; the video was not reviewed frame by frame. _(@stephanlivera)_

## Privacy and security

See [[Digital Security]] for the wider topic.

- **28. [VPNs do not erase every location signal](https://x.com/cyber_razz/status/2103807409395233170)** — **Keep. Evergreen.** A privacy checklist: timezone, account and browser signals can remain behind a VPN. Blanket statements that WebRTC always bypasses a VPN are too broad and need configuration-specific testing. _(@cyber_razz)_
- **55. [DNS-over-HTTPS reminder](https://x.com/schmidt1024/status/2103300207857353043)** — **Keep. Evergreen.** A starting point for resolver privacy. [Cloudflare's explanation of DNS over TLS and HTTPS](https://www.cloudflare.com/learning/dns/dns-over-tls/) supports DNS encryption; encrypting DNS does not by itself hide every site from an ISP or prevent browser and account tracking, and system-wide behaviour depends on configuration. _(@schmidt1024)_

## Markets and trading

- **20. [Jeff's crypto HFT engineering notes](https://x.com/liquidated_hl/status/2104510929300037683)** — **Keep. Evergreen.** Both screenshots were read: March 2023 Discord advice on Rust and C++, keeping the order book in memory, avoiding premature complexity and crypto network latency. The attribution and continuing applicability to a particular venue are unchecked. _(@liquidated_hl)_
- **23. [OpenMarket charting terminal](https://x.com/openmarket_xyz/status/2104254223517106349)** — **Keep.** A concrete alternative to evaluate for layouts and order flow. The creator's posts are the primary source; the website could not be read by the web retrieval tool, so free-tier permanence, market-data coverage and the TradingView price comparison are untested. _(@openmarket_xyz)_
- **14. [OpenMarket free-tier clarification](https://x.com/openmarket_xyz/status/2104622481080525138)** — **Consolidate with 23.** Adds pricing and data-licensing context to the same candidate; keep one combined note with both sources. _(@openmarket_xyz)_
- **30. [Four categories of trading edge](https://x.com/frankdegods/status/2103860364089708742)** — **Keep. Evergreen.** The graphic names informational, analytical, behavioural and quantitative/execution advantages. A useful trade-journal prompt; the four-way division is a heuristic, not an exhaustive taxonomy or proof of an edge. _(@frankdegods)_
- **44. [Good trading and boredom](https://x.com/lobcrunchwave/status/2103836826729623943)** — **Keep. Evergreen.** A concise behavioural reminder: do not invent trades for stimulation. Attributed experience (the post quotes [[jimtalbot]]), not proof of a strategy. _(@lobcrunchwave)_
- **5. [Hyperliquid OTC sale and season-three scenario](https://x.com/NMTD8/status/2105335831888072981)** — **Watch.** Separate the quoted sale report from the author's hypothetical season-three/no-unlocks prediction. Time-sensitive speculation; official confirmation not checked. See [[Hyperliquid]]. _(@NMTD8)_
- **13. [Mortgage refinancing optionality](https://x.com/liensofnewyork/status/2104717103508967657)** — **Watch. Evergreen.** A concept worth investigating. [CFPB's prepayment-penalty guidance](https://www.consumerfinance.gov/ask-cfpb/what-is-a-prepayment-penalty-en-1957/) shows why loan terms affect refinancing; the post's US prepayment assumptions, fees, refinancing eligibility and exact spread figures were not verified, and it is not a UK buying rule. _(@liensofnewyork)_
- **67. [Credit as a new crypto primitive](https://x.com/zeroxkyle/status/2102540461131063358)** — **Watch.** The quoted timeline graphic was read. A memorable thesis about credit and judgement, not evidence of adoption, valuation or trade performance. See [[Credit]]. _(@zeroxkyle)_
- **17. [Sexual smear quoting a GPU financing interview](https://x.com/not0xpeter/status/2104622416383369303)** — **Low value.** The added allegation has no demonstrated evidential value. If the subject matters, keep the original MTSlive interview about GPU-backed debt instead; the financing claims remain self-report. _(@not0xpeter)_
- **45. [Women CEOs and hack conspiracy](https://x.com/0xamericanspiri/status/2103411123424768349)** — **Low value.** Unsubstantiated allegations and pattern-matching, with no demonstrated causal link or useful diligence method. _(@0xamericanspiri)_
- **60. [1000x leverage and loss-minted PAPER promotion](https://x.com/AmirOrmu/status/2102869344438911310)** — **Low value.** Promotional claims about rewards for losses do not establish positive expected value. No protocol, audit or economic verification; weak as a practical trading resource. _(@AmirOrmu)_

## Thinking and psychology

- **15. [Verbal intelligence is not evidence](https://x.com/ArtemisConsort/status/2104638750022402356)** — **Keep. Evergreen.** A strong reusable reminder that persuasive arguments need empirical constraints and falsifiable predictions. A reasoning principle, not a psychological finding. _(@ArtemisConsort)_
- **29. [First-person inner-work and self-coercion essay](https://x.com/ftlsid/status/1953630076496728493)** — **Watch.** A substantive reflection on stuckness, internal alignment and changes in experience. Keep as personal testimony; the proposed memory-reconsolidation mechanisms and therapeutic outcomes are not established. _(@ftlsid)_
- **53. [Peter Thiel psychology clip](https://x.com/hamptonism/status/2103340252668760111)** — **Watch.** The caption is praise, not the argument. Keep on a watch-later list only if the video will be watched; it was not viewed or transcribed. See [[Peter Thiel]]. _(@hamptonism)_
- **22. [Attention and phone-use reminder](https://x.com/CuriousMindsHub/status/2103674669392183654)** — **Personal.** A generic reminder that overlaps with existing attention themes; keep if the image is personally useful. Images not reviewed; no new evidence. _(@CuriousMindsHub)_
- **52. [Paternal resemblance and investment study](https://x.com/houseofhereaftr/status/2103150600753950923)** — **Already archived.** The exact post is already in [[Bookmarks - Health & Psychology]] and its index, with the [2020 study](https://doi.org/10.1016/j.paid.2020.109879) behind it; no need to file it again. Existing evidence limits still apply. _(@houseofhereaftr)_

## Health and ADHD

None of these posts is diagnostic or treatment evidence, including the personal medication, shame and reading anecdotes. See [[Health Evidence]] and [[ADHD]].

- **69. [Night-owl timing and ADHD discussion](https://x.com/lipko/status/2102519291589669061)** — **Keep.** A useful research connection, but it overlaps with [Brandon Luu's post on ADHD and delayed body clocks](https://x.com/BrandonLuuMD/status/2102338491942347175), which is already archived. The cited 2019 night-owl trial is not itself proof of ADHD treatment; the full clinical evidence was not reviewed. _(@lipko)_
- **64. [ADHD hunter-gatherer phenotype claim](https://x.com/alexeixbt/status/2102822521510789146)** — **Low value.** Not medical fact. [NIMH's ADHD overview](https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-what-you-need-to-know) describes ADHD as a developmental disorder; the evolutionary story does not establish absence of impairment or remove treatment needs. _(@alexeixbt)_
- **2. [ADHD executive-dysfunction gallows humour](https://x.com/1thousandfaces_/status/2105124827145355591)** — **Fun.** A joke about medication and shame; keep if it resonates. Not a treatment plan or evidence that abuse improves functioning. _(@1thousandfaces_)_
- **37. [Reading without processing](https://x.com/Lammyisback/status/2103775182506631522)** — **Personal.** A relatable description of attention lapses. Not specific enough to diagnose ADHD and not a treatment recommendation. _(@Lammyisback)_
- **32. [Ten AI-medicine breakthroughs](https://x.com/afshineemrani/status/2103263150221234471)** — **Watch.** Research queue only. Each device authorisation, trial phase, clinical outcome and ageing claim needs its own primary-source check; no blanket endorsement. _(@afshineemrani)_
- **38. [Enamel-repairing gel](https://x.com/COVID19_disease/status/2103814550198059296)** — **Watch.** The real research is a [2025 Nature Communications paper](https://www.nature.com/articles/s41467-025-64982-y) describing laboratory work on extracted human teeth. Keep the paper as a lead; it does not establish replacing fillings in patients or the post's 2026-27 availability date. _(@COVID19_disease)_
- **70. [Student microplastics-filter claim](https://x.com/PilpsYT/status/2039652368443158804)** — **Watch.** Separate the technical story from the gender-culture wrapper. Removal percentage, experiment and original project not verified; a prototype claim is not a certified home-water recommendation. See [[Water Filtration]]. _(@PilpsYT)_

## Food and ingredients

- **42. [Carmine and ingredient labelling](https://x.com/TipOfTheBanana/status/2100362346145501450)** — **Watch. Evergreen.** A potentially useful label-literacy reference. Exact FDA dates, requirements, quantities and industry-history claims were not checked. _(@TipOfTheBanana)_
- **43. [Brown sugar and molasses](https://x.com/TipOfTheBanana/status/2103804906356224076)** — **Fun. Evergreen.** Cooking trivia. The percentages and nutritional comparison are unchecked; little additional value as a health claim. _(@TipOfTheBanana)_
- **40. [Fanta recipes by country](https://x.com/TipOfTheBanana/status/2099636310692835673)** — **Fun.** An interesting consumer-food comparison. Ingredients, sugar values and legal labels were not verified for current country-specific products. _(@TipOfTheBanana)_
- **41. [UK versus US Cadbury](https://x.com/TipOfTheBanana/status/2100000461009158533)** — **Fun.** A food and business curiosity. Current recipes, licensing history and the import-settlement scope not independently verified. _(@TipOfTheBanana)_

## Media and entertainment

- **66. [Stremio Live TV and EPG update](https://x.com/stremio/status/2102718346357551248)** — **Keep.** [Stremio's September 23 release notes](https://blog.stremio.com/stremio-tech-update-85-stremio-desktop-and-stremio-web-update/) confirm Live TV/EPG support and explain that guides depend on an addon supplying schedules. A useful architecture and product reference for media work. _(@stremio)_
- **34. [Renamed sideloaded Stremio IPA](https://x.com/DanielSu121/status/2103869801898844321)** — **Watch.** The announcement resolves to a Telegram channel. App identity, provenance and current build are unresolved; weaker than the official Stremio reference. _(@DanielSu121)_
- **21. [Movie archive spreadsheet](https://x.com/vilibazmiooo/status/2104323759339655446)** — **Fun.** An optional media directory; its spreadsheet link resolves. The catalogue, download availability and the promise of permanent links were not checked. _(@vilibazmiooo)_
- **46. [Interstellar remux reference](https://x.com/thecollector_26/status/2103475624010760685)** — **Fun.** Keep only if this specific film and version was wanted. File identity, access, integrity and media specs not tested. _(@thecollector_26)_
- **48. [Fear film images](https://x.com/euronationalizt/status/2103599870275649891)** — **Fun.** A film and aesthetic reference. Images not inspected; the caption supplies no reusable analysis. _(@euronationalizt)_
- **9. [New York image meme](https://x.com/insaneposes/status/2104618178974245029)** — **Fun.** The caption alone does not establish the image's full context; the attachment was not inspected. _(@insaneposes)_
- **62. [Then-versus-now house-party joke](https://x.com/socktickler/status/2102841453550395418)** — **Fun.** Nostalgia humour; image not inspected, keep only for amusement. _(@socktickler)_
- **50. [Contextless identification reply](https://x.com/david_medi48754/status/2103543472330342835)** — **Low value.** A reply giving a person's name with no useful source or task. The parent context was not reviewed; low standalone retrieval value. _(@david_medi48754)_

## Personal life

- **12. [A more deliberate night out](https://x.com/worldofmaart/status/2104514885673443709)** — **Keep. Evergreen.** Practical framing: choose music and company, plan the evening, leave while still enjoying it. Drinking water does not accelerate alcohol clearance; drop that implication. _(@worldofmaart)_
- **24. [Clothing-brand shortlist, part one](https://x.com/ZoeGutier/status/2103928802242179120)** — **Watch.** Carhartt, Muji and Lululemon are leads, not proven best buys. The broad quality, durability and no-marketing claims need product-level checking. _(@ZoeGutier)_
- **25. [Clothing-brand shortlist, part two](https://x.com/ZoeGutier/status/2103928811192541443)** — **Consolidate with 24.** Fjallraven, Everlane and Sezane extend the same shortlist; combine the two and do not accept universal durability or advertising claims. _(@ZoeGutier)_

## Culture, gossip and polemic

- **68. [Politics small-talk joke](https://x.com/CountBellamarre/status/2102483547080765642)** — **Fun.** Keep as humour if it fits; no need to turn it into a factual politics note. _(@CountBellamarre)_
- **1. [Odour as proof of cheating](https://x.com/DemonFramed/status/2105326261069295711)** — **Low value.** Reject as factual guidance: a change in vaginal odour does not establish infidelity. [NHS guidance on bacterial vaginosis](https://www.nhs.uk/conditions/bacterial-vaginosis/) describes a bacterial imbalance and odour with several possible triggers. _(@DemonFramed)_
- **3. [Cornell gender polemic](https://x.com/MarcheseMethods/status/2105240431193989582)** — **Low value.** Sweeping claims about women's motives without supporting evidence; little reusable insight beyond documenting the rhetoric. _(@MarcheseMethods)_
- **4. [Cornell family humiliation joke](https://x.com/adonispara/status/2105266419331899756)** — **Low value.** Targets a person through a contested news story; little lasting reference value. _(@adonispara)_
- **6. [Cornell accuser-identification gossip](https://x.com/GD44vh/status/2105092170998743134)** — **Low value.** Unverified identification and sexual allegations about a private person. Do not treat or reproduce them as established facts. _(@GD44vh)_

## Corrections

- The saved Spotifast post announces v0.10; the project had already moved to v0.11.0 by the time of the review.
- The Search browser's launch post gives a 2.9 MB download; the current site lists 6.1 MB.
- OpenMarket's website could not be read by the web retrieval tool, so its free-tier terms, data coverage and competitor price comparison rest on the creator's posts alone.
- The odour-to-infidelity inference (item 1) and the ADHD hunter-gatherer claim (item 64) are unsupported by the NHS and NIMH sources checked.
- The enamel gel post overstates the paper: the research is laboratory work on extracted teeth, not a patient treatment with a release date.
- Correction, 16 October 2026 (item 59, Search WebKit browser): the current [Search site](https://officecommun.com/search) lists version 1.0.5 at 6.8 MB, not 6.1 MB, free, for macOS 14 or later; Chrome Web Store extensions need macOS 15.4 or later, passwords sit in the macOS Keychain, and the page does not mention iCloud passwords.
- Correction, 16 October 2026 (item 58, Spotifast): [v0.11.0](https://github.com/crmne/spotifast/releases/tag/v0.11.0) was published on 26 September 2026, two days after the saved v0.10 post, and the project has since reached v0.13.3 on 15 October 2026 (see the [release list](https://github.com/crmne/spotifast/releases)).
- Correction, 16 October 2026 (item 11, Compositor v1.4): the [release list](https://github.com/robbietilton/Compositor/releases) now shows Compositor 1.5.3 (15 October 2026), after 1.4.10 on 11 October and 1.5 on 12 October. The repository README gives no benchmark, so the 10x performance and size figures remain the author's post alone.
- Correction, 16 October 2026 (item 23, OpenMarket): the website can now be read. [openmarket.xyz](https://openmarket.xyz) says charts, indicators and drawings are free to use in the browser, covers crypto, US stocks, CME futures, options, forex, prediction markets and economic series, and lists order-book heatmaps, footprints, cumulative volume delta and liquidation maps. It names no paid plans or prices, so free-tier permanence and the TradingView price comparison are still untested.

## Overlap with existing notes

The four consolidation calls combine the ElevenLabs reaction with its official announcement, Flux's demo with its feature list, OpenMarket's clarification with its launch, and the two clothing shortlists; each keeps both source links.

The paternal-investment bookmark is an exact archived duplicate (from [[Bookmarks - Health & Psychology]]). Tailscale is already a Brain topic, Compositor is a version update, and the night-owl discussion quotes the Brandon Luu source already in Brain. These are different kinds of overlap and should not be counted as four more exact-ID duplicates.

## Limits of the review

Post text and available quoted text were read for all 70 posts, selected screenshots and author threads were read, and selected primary sources were checked. Most videos, attachments, clinical claims and product-performance claims were not verified. The later removal of all 70 bookmarks is recorded in [[X Bookmark Cleanup - 30 September 2026]].

## Related

[[Evergreen Lessons from X - September 2026]] · [[X Bookmark Cleanup - 30 September 2026]] · [[Live X Bookmark Inventory - 30 September 2026]] · [[X-Bookmarks]] · [[Personal Knowledge Management]] · [[Developer Tool Evaluation Map]] · [[Trading Evidence and Review Framework]] · [[Health Evidence]] · [[Bookmarks - Health & Psychology]] · [[Digital Security]] · [[AI Agents]]
