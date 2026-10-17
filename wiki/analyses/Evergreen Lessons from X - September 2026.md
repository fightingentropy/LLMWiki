---
title: Evergreen Lessons from X
type: analysis
domain: personal
summary: "Fourteen lasting lessons from seventy saved X posts, on reasoning, trading, engineering, privacy, AI data, food labels and nights out."
tags: [bookmarks, trading, dev]
related:
  - X-Bookmarks
  - Personal Knowledge Management
  - Decision-Making
  - Trading Psychology
  - Digital Security
aliases:
  - X Bookmark Review - 30 September 2026
  - Live X Bookmark Inventory - 30 September 2026
  - X Bookmark Cleanup - 30 September 2026
  - Evergreen Lessons from X - September 2026
sources:
  - snapshots/2026-09-30-x-evergreen-cleanup/receipt.md
  - snapshots/1790805107293-1d59d21b8449/bookmarks/Index.md
  - snapshots/1790804551519-8f428ba1884a/bookmarks/Design & Frontend.md
  - snapshots/1790804551519-6d896f5ea773/bookmarks/Reference & Utilities.md
  - snapshots/1790804551519-b4816fecf206/bookmarks/Personal & Life.md
  - snapshots/1790804551519-2ba369d73e43/bookmarks/AI & Agents.md
  - snapshots/1790804551519-41aaf5e11d3a/bookmarks/Index.md
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - snapshots/1790804551519-1de9816cb631/bookmarks/Markets & Crypto.md
  - snapshots/1790804551519-19d4b0c03105/bookmarks/Culture & Ideas.md
  - snapshots/2026-09-30-x-bookmark-review/inventory.md
  - snapshots/1790338863036-d5f1baaac670/bookmarks/Health & Psychology.md
created: '2026-09-30'
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: reviewed
review_notes: "Lesson facts were checked against the Federal Reserve, CFPB, MDN, Tailscale, RFC 7858, the full Nature paper, 21 CFR 73.100 and FDA; the X posts themselves could not be loaded."
---

# Evergreen Lessons from X

Of seventy posts saved on X by 30 September 2026, fifteen held something lasting. They became the fourteen lessons below; release news, forecasts, gossip, humour and weak health claims were dropped.

The verdict on all seventy posts is in the original review ([Read the original note](/source/ade4ba1b82a2f116d6e6)), and the clearing is recorded in [the cleanup receipt](/source/4888ab244c848c7249a1). Each source post is also filed under [[X-Bookmarks]]. None of the lessons proves a trading strategy or a product's speed.

## Thinking

**Persuasiveness is not evidence.** A fluent argument can support incompatible positions. Ask what observation would separate them, what would falsify the claim, and whether contrary evidence would change the conclusion. See [[Decision-Making]]. Source: [@ArtemisConsort](https://x.com/ArtemisConsort/status/2104638750022402356).

## Trading

**Name the source of your edge.** Four prompts: informational advantage, better analysis, behavioural discipline, and quantitative or execution advantage. For each trade, write down the edge you think you have and the result that would disprove it. Source: [@frankdegods](https://x.com/frankdegods/status/2103860364089708742).

**Do not trade to relieve boredom.** Judge a trade against the setup and the process, not the need for stimulation. If only your mood changed, write that down before adding risk. The post quotes [[Traders Directory|jimtalbot]]; see [[Trading Psychology]]. Source: [@lobcrunchwave](https://x.com/lobcrunchwave/status/2103836826729623943).

**Keep the hot path simple and measure bottlenecks.** Screenshots of March 2023 Discord messages attributed to Jeff favour an in-memory order book, simple feed-to-strategy handling, and Rust or C++ when measured performance needs it. Separate network delay from computation; add shared memory or concurrency only for a demonstrated need. See [[Exchange Microstructure]]. Source: [@liquidated_hl](https://x.com/liquidated_hl/status/2104510929300037683).

## Money

**Mortgage prepayment is an option with conditions.** The right to repay early lets a borrower refinance after rates fall, and gives the lender prepayment risk. Its value depends on fees, penalties and whether the borrower can qualify for a new loan. The CFPB notes that some US loans charge prepayment penalties. Keep the concept, not the post's spread figures or a buy-now rule. See [[Rates and Credit]]. Source: [@liensofnewyork](https://x.com/liensofnewyork/status/2104717103508967657).

## Software

**Review production software through failure cases.** Ask how the system detects or survives deadlocks, memory leaks, N+1 queries, concurrent updates, stale reads, dependency failures and bad releases. For each, name an owner, an observable symptom, and a recovery or rollback. Source: [@GohilHardy](https://x.com/GohilHardy/status/2103760572835938540).

**Use a travel laptop as a front end to home compute.** Run heavy jobs on a home workstation and use the portable device for the interface. Network reachability, for example through Tailscale, and SSH or remote-desktop login are separate controls. Test what happens when the connection drops. Source: [@ashen_one](https://x.com/ashen_one/status/2103757218621653040).

**Privacy has separate layers.** A VPN exit IP does not hide browser, account, timezone or locale signals. WebRTC can expose network addresses, depending on browser and app settings. DNS-over-HTTPS or DNS-over-TLS encrypts DNS lookups, not all traffic or identity. Test the actual device and browser. See [[Digital Security]]. Sources: [@cyber_razz](https://x.com/cyber_razz/status/2103807409395233170) and [@schmidt1024](https://x.com/schmidt1024/status/2103300207857353043).

## AI

**Keep provenance when training on generated data.** The 2024 [Nature paper on model collapse](https://www.nature.com/articles/s41586-024-07566-y) shows models degrade when trained recursively on generated output; keeping a share of the original human data reduced the damage without removing it. Track which data is generated, and keep evaluation on independent real data, rare cases included. Nature published an [author correction](https://doi.org/10.1038/s41586-025-08905-3) in March 2025. Source: [@thesupermannx](https://x.com/thesupermannx/status/2103805052817453255).

**Voice suits bounded admin.** Talk through email triage, priorities and calendar decisions while away from a screen. Write the decisions down, and review consequential actions before they run. See [[AI Agents]]. Source: [@_simonsmith](https://x.com/_simonsmith/status/2102836288541913351).

## Explaining

**Teach a mechanism by letting people change it.** The [plane-of-focus lab](https://sael.net/plane-of-focus/) lets a person move camera parameters and see the result. Explanations work the same way: expose the inputs and assumptions, and show clear readouts. See [[Design & Aesthetics]]. Source: [@RyanSael](https://x.com/RyanSael/status/2102591147927654847).

## Food labels

**Carmine and cochineal come from insects.** Both are red colourants made from cochineal insects. US rules (21 CFR 73.100) require their names on food ingredient lists, partly because they can cause allergic reactions. Source: [@TipOfTheBanana](https://x.com/TipOfTheBanana/status/2100362346145501450).

**Molasses defines brown sugar.** Molasses gives brown sugar its flavour and colour. Manufacturing varies, so not every brown sugar is white sugar recoloured the same way. Source: [@TipOfTheBanana](https://x.com/TipOfTheBanana/status/2103804906356224076).

## Nights out

**Plan a night out around what makes it worth it.** Choose music and company you enjoy, make the early evening count, and set a leaving time that respects the next day. Drinking water does not sober you up faster. Source: [@worldofmaart](https://x.com/worldofmaart/status/2104514885673443709).

## Other tools and sources from the seventy posts

Some dropped posts still pointed to tools or primary sources worth keeping.

- [Cloudflare cf docs](https://developers.cloudflare.com/cf/) — Cloudflare's CLI across its whole API, with typed configuration.
- [Compositor](https://github.com/robbietilton/Compositor) — Repository for Compositor, the tool covered in [[Design & Aesthetics]]; the README gives no benchmark.
- [Compositor releases](https://github.com/robbietilton/Compositor/releases) — Release list; version 1.5.3 shipped on 15 October 2026.
- [Inline](https://github.com/inline-chat/inline) — Open-source native chat app with a macOS and iOS beta; a UI and agent-integration reference.
- [Spotifast v0.11.0](https://github.com/crmne/spotifast/releases/tag/v0.11.0) — Release of the native Spotify client, published 26 September 2026.
- [Spotifast releases](https://github.com/crmne/spotifast/releases) — Release list; v0.13.3 shipped on 15 October 2026.
- [Search browser](https://officecommun.com/search) — Free experimental WebKit browser for macOS 14 or later, with Keychain passwords and Chrome Web Store extensions.
- [AirCard](https://github.com/Mak5er/AirCard) — Wallet and lock-screen theming through an AirTraffic sync exploit, outside Apple's supported pass design.
- [OpenAI dots](https://learn.chatgpt.com/docs/dots/getting-started) — Onboarding docs for dots, which takes on ongoing responsibilities and delegated work.
- [ElevenLabs models](https://elevenlabs.io/docs/overview/models) — ElevenLabs' model list, including v4 and v4 Turbo.
- [OpenMarket](https://openmarket.xyz) — Free browser charting terminal with order-book heatmaps, footprints and liquidation maps across crypto, stocks and futures.
- [Stremio tech update 85](https://blog.stremio.com/stremio-tech-update-85-stremio-desktop-and-stremio-web-update/) — Release notes adding Live TV and programme guides, which depend on an addon supplying schedules.
- [Enamel-repair paper](https://www.nature.com/articles/s41467-025-64982-y) — 2025 Nature Communications lab study repairing enamel on extracted human teeth; no patient treatment yet.
- [NIMH: ADHD](https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-what-you-need-to-know) — NIMH overview describing ADHD as a developmental disorder, against a saved hunter-gatherer framing.
- [NHS: bacterial vaginosis](https://www.nhs.uk/conditions/bacterial-vaginosis/) — A change in vaginal odour has several bacterial causes; it is no sign of infidelity.
