---
title: Developer Resources
type: topic
domain: dev
sources:
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - misc/Dev.md
  - misc/Setup.md
  - misc/X-Bookmarks.md
  - bookmarks/Developer Tools.md
  - bookmarks/AI & Agents.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/AI & Agents.md
  - clippings/bookmark-updates-2026-09-22/Design & Frontend.md
  - clippings/bookmark-updates-2026-09-22/Business & Startups.md
related:
  - Evergreen Lessons from X - September 2026
  - X-Bookmarks
  - Setup
  - Omarchy
  - OpenShip
  - AI Agents
  - Digital Security
  - Design & Aesthetics
  - Tools & Software
  - Helium Browser
  - Omarchy iCloud Photos
  - 3D Printing and Digital Fabrication
  - Compositor
  - Quicker
  - Bookmarks - Developer Tools
  - Bookmarks - AI & Agents
  - Dev Resources
  - Developer Tool Evaluation Map
  - Bookmarks - Design & Frontend
  - Bookmarks - Business & Startups
  - Grok Bot
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - development
  - tools
  - learning
  - infrastructure
  - agents
  - self-hosting
  - macos
summary: "Erlin's developer tool bank, each link described, plus the agent-stack, local-model, self-hosting and macOS workflow ideas saved from the X feed."
---

# Developer Resources

This page gathers what Erlin has saved for building software: the working setup, the coding-agent and local-model ideas from the X feed, lean self-hosting patterns, macOS and desktop utilities, browser and graphics leads, and a bank of web tools from the Dev note. Numbers that a post reports about itself stay self-reported. Agent-specific workflows live in [[AI Agents]]; permissions and connected-account risks live in [[Digital Security]]; the full annotated link lists are [[Bookmarks - Developer Tools]] and [[Bookmarks - AI & Agents]], and the Dev note itself is summarised in [[Dev Resources]].

## Working setup

The [[Setup]] note is the short list of what is actually installed and used.

- mole, Codex / Claude Code, bun, Obsidian — the core tools.
- Zero Brew — an alternative to Homebrew.
- Helium — the browser; see [[Helium Browser]].
- Handy — voice transcription.
- [OpenClaw on Mac Mini: The Complete Setup Guide](https://robertheubanks.substack.com/p/openclaw-on-mac-mini-the-complete?utm_campaign=post-expanded-share&utm_medium=web&triedRedirect=true) — Substack walkthrough for running OpenClaw on a Mac Mini (from [[Setup]]).
- [OpenShip](https://openship.io/) — open-source application deployment and operations platform for infrastructure you control; see [[OpenShip]]. The Setup note treats it as a product to evaluate, not a verified production dependency. Before adopting it, test restore from backup, rollback under failure, secrets and access controls, monitoring and alert delivery, and outbound-email reputation and deliverability from a clean server (from [[Setup]]).

## Coding agents and local models

Use Codex and Claude Code together rather than picking one. The meta from @KingBootoshi (from [[X-Bookmarks]]):

> CODEX FOR BACKEND (5.4 X-HIGH REASONING)
>
> CLAUDE CODE FOR FRONTEND (/frontend-design skill)
>
> ENSURE CODEX DOES TDD FEEDBACK LOOPS (its great at this)
>
> HAVE CLAUDE CODE GENERATE DESIGN VARIATIONS
>
> this is the meta i'm coding with rn

- [Codex for backend, Claude Code for frontend](https://x.com/KingBootoshi/status/2031962873505988744) — the post above. Codex does TDD feedback loops well for backend; Claude Code with the `/frontend-design` skill generates design variations. _(@KingBootoshi)_

Local models on Apple Silicon are viable (from [[X-Bookmarks]]). Both posts below report their own numbers.

- [Qwopus 27B on a $600 Mac Mini](https://x.com/TheCraigHewitt/status/2039303217620627604) — A Qwen3.5 27B distill trained on Claude 4.6 Opus reasoning traces. The post claims it "beats Claude Sonnet 4.5 on SWE-bench", "keeps 96.91% HumanEval", "cuts CoT (chain of thought) bloat by 24%" and "runs in 4-bit quantization", so a near-Opus-level model could run on "that $600, 16GB Mac Mini you bought last month"; 300K+ downloads on Hugging Face at the time. The author's argument: "local agent loops get a lot cheaper, faster, and more usable" and "frontier models aren't going to keep subsidizing cheap tokens on subscriptions forever". _(@TheCraigHewitt)_
- [TurboQuant + MLX on an M5 Max](https://x.com/jtdavies/status/2039498133634191778) — A 20-page PDF loaded as 150 dpi images (42k tokens) takes 1.33 GB of KV cache at bf16 but 229 MB with TurboQuant at 2.5-bit. Building the cache is an 18.2-second one-off; reloading the saved quantised cache takes 23 ms, so a pre-processed document answers its first token in under half a second. The cost: time to first token 250 ms against about 130 ms for the bf16 cache, and generation down to 29 tok/sec from 80 tok/sec with an 8-bit quantised model. Images and graphs in the document can be queried, not just text. "Remember, this is the worst this is ever going to be." _(@jtdavies)_
- [Codex app-server](https://developers.openai.com/codex/app-server/) — OpenAI's documentation for the Codex app-server (from the Dev note).
- [Native iPhone client on Codex app-server](https://x.com/SIGKITTEN/status/2025073817467416983) — proof of concept embedding Codex locally in a native iPhone application. _(@SIGKITTEN)_
- [OpenAI WebSocket mode](https://developers.openai.com/api/docs/guides/websocket-mode) — OpenAI API guide to WebSocket mode (from the Dev note).
- [Code Mode for MCP](https://blog.cloudflare.com/code-mode-mcp/) — Cloudflare blog post on "code mode" for MCP servers (from the Dev note).
- [Codex Remote Control setup](https://x.com/iScienceLuvr/status/2096752682455503117) — the author pairs a remote machine with the mobile app using remote-control commands. Confirm command names, authentication, network exposure and current official support before using it on a sensitive host. _(@iScienceLuvr)_
- [OpenGrok model-routing patch for Grok Bot](https://github.com/OnlyTerp/opengrok) — unofficial Python patch that routes [[Grok Bot]] through subscription, API or local models with a model picker and diagnostics ([announcement](https://x.com/OnlyTerp/status/2093077239873069058)). Unrelated to Oracle's source browser of the same name; it depends on Grok Bot internals, so inspect the installer, credential handling and account terms before running it on a real profile. _(@OnlyTerp)_

## The autonomous-agent stack

agent-browser, openclaw, Paperclip, Molty and OpenFang recur in the X feed as an autonomous-agent stack; one post calls Paperclip, OpenFang and Obsidian "the super-stack" (from [[X-Bookmarks]]).

- [agent-browser is now fully native Rust](https://x.com/ctatedev/status/2032635370089693456) — "The results: 1.6x faster cold start. 18x less memory. 99x smaller install." Now 140+ commands across navigation, interaction, state management, network control, debugging and multi-engine support. _(@ctatedev)_
- [agent-browser Chrome auto-connect](https://x.com/ctatedev/status/2032905426631598324) — the exact command and environment flag for attaching an agent to an already-running Chrome session: `agent-browser --auto-connect open <url>`. _(@ctatedev)_
- [openclaw personality prompt](https://x.com/steipete/status/2020704611640705485) — "Your @openclaw is too boring? Paste this, right from Molty." A rewrite prompt for the agent's own instruction file: have strong opinions, delete every rule that sounds corporate, never open with "Great question", be brief, allow humour, call out dumb moves, and end with "Be the assistant you'd actually want to talk to at 2am. Not a corporate drone. Not a sycophant. Just... good." _(@steipete)_
- [openclaw MCP Chrome session](https://x.com/steipete/status/2032650405453181358) — the new feature "has full access to your browser and all logged in websites (in contrast to the existing automation). So there's an extra alert to enable." _(@steipete)_
- [Paperclip](https://x.com/dotta/status/2029239759428780116) — "the orchestration layer for zero-human companies", open-sourced by @dotta: org charts, goal alignment, task ownership, budgets and agent templates. `npx paperclipai onboard`. _(@dotta)_
- [The super-stack](https://x.com/stackinbits/status/2029382281396109386) — "Paperclip + OpenFang + Obsidian... The super-stack. Now just add a new MBP and you can have your own army of agents executing the mundane." _(@stackinbits)_
- [OpenFang](https://www.openfang.sh/) — the OpenFang site; the Dev note saves it without a comment.
- [Open-source alternatives to SaaS](https://x.com/xoaanya/status/2029254060243841237) — "One of the largest open-source directories on the internet": 180K+ GitHub stars, alternatives to "almost every SaaS you pay for (Slack, Notion, Shopify, etc.)", covering analytics, project management, AI tools and databases. Relevant for keeping [[Setup]] minimal. _(@xoaanya)_

Related but not a tool: the EU Inc. proposal, relevant if an EU entity structure is ever considered (from [[X-Bookmarks]]).

- [EU Inc. proposal](https://x.com/initjean/status/2034240190235996393) — as @initjean summarised it, quoting the [EU Commission](https://x.com/EU_Commission/status/2034231737161588800): "max. 48 hrs and €100 to incorporate; registration through common EU portal, automatic tax registration; fully digital process, no notaries; EU employee stock option plans, taxed only when sold; simplified insolvency procedures". _(@initjean)_

## Lean infrastructure and email migration

Two Pieter Levels threads form the baseline for small-team hosting (from [[X-Bookmarks]] and [[Bookmarks - Developer Tools]]).

- [Cloudflare Email Service migration checklist](https://x.com/levelsio/status/2053482525780008997) — inventory every outbound-email path, route sends through one provider adapter, import the previous provider's [suppression list](https://x.com/levelsio/status/2053489575423557653), canary a low-stakes transactional message, and leave authentication-critical mail until delivery is proven. The original beta prompt is a starting sequence, not current documentation: recheck Cloudflare's [REST API](https://developers.cloudflare.com/email-service/api/send-emails/rest-api/), [pricing](https://developers.cloudflare.com/email-service/platform/pricing/), [delivery-event subscriptions](https://developers.cloudflare.com/email-service/platform/event-subscriptions/) and [Activity-log changelog](https://developers.cloudflare.com/changelog/product/email-service/) before a migration; the event subscriptions and activity logs now exist, which makes parts of the original beta warning stale. _(@levelsio)_
- [Lean self-hosted web stack](https://x.com/levelsio/status/2052734824541016107) — Ubuntu and Nginx, unattended upgrades, cron, SQLite, vanilla web code, Cloudflare Tunnel and R2, Tailscale, OpenFreeMap, Stripe, and a low-cost Hetzner VPS form a coherent small-team baseline. The quoted "about $5/month" for "about 5M unique visitors" is the author's unverified self-report, not a capacity or cost benchmark. _(@levelsio)_
- [VPS firewalling with Cloudflare and Tailscale](https://x.com/levelsio/status/2019058602707681593) — server-hardening pattern that limits HTTPS to Cloudflare and SSH to a private Tailscale subnet. _(@levelsio)_
- [Cloudflare as an automation and deployment substrate](https://x.com/MitchellKeller_/status/2095576450791346626) — a capability map linking Workers, databases, email, scraping, traffic, deployments, automations and schedules; check current limits, bindings and costs per project rather than assuming every workload is free. _(@MitchellKeller_)_
- [Oracle Cloud Always Free compute](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) — Ampere A1 allowances equivalent to 2 OCPUs and 12 GB RAM, 200 GB combined boot/block storage and 10 TB monthly outbound transfer ([Ian's discovery post](https://x.com/keywordian/status/2092724783125262508)). Provision in the tenancy's home region; regional capacity can be unavailable and idle instances may be reclaimed after a seven-day low-utilisation period. A useful capacity lead, but quota and paid-resource boundaries make it unsuitable as the sole copy of important data. _(@keywordian)_
- [Cloudflare's DNS-cache memory optimization](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/) — at more than 250 billion entries, small per-entry costs become fleet-scale expenses. Cloudflare replaced growable collections with boxed immutable slices and strings, consolidated lists with compact offsets, and removed redundant metadata and padding, reporting roughly 100 TB less production working-set memory, 43% higher insertion throughput and 19% lower lookup latency. The reusable lesson: match representation to actual mutability and measure allocations, locality and end-to-end behaviour together. The [repost](https://x.com/IntCyberDigest/status/2093136301516046424) claiming it solved the global memory shortage is hyperbole. _(@IntCyberDigest)_
- [Coolify 4.3 redesign](https://coolify.io/) — the [release post](https://x.com/coolifyio/status/2087495682978468125) announces a redesigned interface for the self-hosted deployment platform. Coolify and [[OpenShip]] are the self-hosted deployment references; backup, rollback, secrets, monitoring, migration and email deliverability are the adoption gates for both. _(@coolifyio)_

## Reviewing failures and using remote compute

Two workflow ideas from [[Bookmarks - Developer Tools]]; the complete selection is [[Evergreen Lessons from X - September 2026]].

- [Review production software through concrete failure cases](https://x.com/GohilHardy/status/2103760572835938540) — for each project, ask how the system detects or survives deadlock, memory growth, N+1 queries, conflicting writes, stale reads, unavailable dependencies and failed deployments. Record an owner, the observable symptom, and the recovery or rollback. _(@GohilHardy)_
- [Use a travel device as a frontend to home compute](https://x.com/ashen_one/status/2103757218621653040) — offload heavy work to a home workstation when it suits travel. Network access, SSH or desktop authentication, and recovery from connection loss are separate requirements; [Tailscale's SSH documentation](https://tailscale.com/docs/reference/ssh-over-tailscale) confirms SSH authentication stays separate from network access. The post is an anecdote and does not prove a hardware specification is necessary. _(@ashen_one)_
- [macOS Screen Sharing over Tailscale](https://x.com/stolinski/status/2095669413639024996) — enable Screen Sharing on the target Mac, then use Finder's Connect to Server with `vnc://hostname` or the Tailscale address. Access still depends on macOS permissions, Tailscale reachability, ACLs and the account allowed to control the Mac. _(@stolinski)_

## Desktop environments and macOS utilities

[[Omarchy]] has both strong adoption claims and upstream-attribution scepticism; evaluate it on non-critical hardware, and check supported hardware, firmware recovery, drivers, security updates and a tested rollback path before replacing macOS. Most tools in this section are young, small or permission-heavy: read the source, permissions and current OS compatibility before installing any of them on a primary machine.

- [Omarchy](https://github.com/basecamp/omarchy) — Basecamp's opinionated Arch Linux and Hyprland development environment. Jorge Manrubia's [original recommendation](https://x.com/jorgemanru/status/2085371786409980026) is aimed at macOS developers; the [Quattro release post](https://x.com/tobi/status/2088333047024202115) frames it as a malleable environment for agentic work; an [experimental macOS packaging demo](https://x.com/athasdev/status/2088688906657005726) runs it through Apple Containerization and Rosetta with Quickshell streamed into Athas Capsule; a [mlx-omarchy compatibility report](https://x.com/JoshuaSWarren/status/2095268521391354205) claims 94.6% functional parity with macOS MLX with three remaining Apple-dependent or upstream Vulkan gaps, a project-defined figure rather than an independent benchmark. _(@jorgemanru, @tobi, @athasdev, @JoshuaSWarren)_
- [Omarchy adoption scepticism](https://x.com/ChefExecOfficer/status/2093574043769479351) — a hostile counterpoint to DHH's rapid-growth announcement argues Omarchy is receiving credit for work done by Linux, Arch and Hyprland and alleges an inorganic YouTube promotion push. A perception and attribution critique, not verified adoption data or proof of paid promotion; judge the distribution by its code, contributors, retention and upstream dependencies. _(@ChefExecOfficer)_
- [Omarchy on Apple hardware](https://x.com/OmarchyMac/status/2098384849770037280) — Linux-on-Mac lead framed around local AI. _(@OmarchyMac)_
- [Omarchy iCloud Photos](https://github.com/jankeesvw/omarchy-icloud-photos) — open-source native client for browsing a recent portion of an iCloud photo library under Omarchy, with delete/undo, HDR video and Live Photos described in the [announcement](https://x.com/jankeesvw/status/2101977870289527284). It needs access to the photo library; see [[Omarchy iCloud Photos]]. _(@jankeesvw)_
- [Omarchy Pods](https://github.com/thisisgm/omarchy-pods) — AirPods controls after moving from macOS to Linux ([announcement](https://x.com/stevenharms/status/2089539284508561623), [repository bookmark](https://x.com/stevenharms/status/2089539319908495584)). A practical migration aid. _(@stevenharms)_
- [Touch ID on Linux through t1bridge](https://x.com/niconistal/status/2097906524559384816) — report of recovering T1 data and enabling fingerprint authentication after macOS had been removed. _(@niconistal)_
- [Talkify](https://github.com/tornikegomareli/Talkify) — free, open-source macOS menu-bar dictation built on Apple's SpeechAnalyzer and on-device models ([product site](https://usetalkify.app/), [launch post](https://x.com/tornikegomareli/status/2088524464224919700)). The author reports an 8.2 MB app and 123 ms median release-to-text latency against four alternatives; author-run, setup-specific measurements. _(@tornikegomareli)_
- [FluidVoice](https://github.com/altic-dev/FluidVoice) — open-source local dictation project.
- [Space Rabbit](https://github.com/tahul/space-rabbit) — small native Swift utility that removes the normal macOS Spaces transition by triggering a fast synthetic swipe, with a menu-bar configuration UI ([app](https://space-rabbit.app/), [original bookmark](https://x.com/valeriansaliou/status/2084925453760930033)). It relies on a workaround that may change across macOS releases. _(@valeriansaliou)_
- [UTM 5.0.5 beta with experimental DirectX 12](https://x.com/UTMapp/status/2095033715848265783) — adds D3DMetal-based DirectX 12 for Windows 11 ARM guests on macOS; the [release discussion](https://github.com/utmapp/UTM/discussions/7847) labels the driver experimental with limited game compatibility and stability. _(@UTMapp)_
- [Fastpotify](https://x.com/paolino/status/2093659889339888126) — native Rust Spotify client; the bookmarked v0.3.0 added playback, playlist, local-link and interface improvements, and the [releases page](https://github.com/crmne/fastpotify/releases) has since moved into v0.4.0 release candidates. macOS builds may need manual quarantine handling and are not necessarily notarised. _(@paolino)_
- [Torflix](https://github.com/surajssc1232/torflix) — MIT-licensed Rust TUI that uses rqbit to stream magnet or torrent content through mpv or VLC, version 0.4.1 on crates.io ([original bookmark](https://x.com/surajkhahai/status/2086417384181776734)). Young and lightly reviewed; use it only for content you are legally allowed to obtain. _(@surajkhahai)_

## Browsers and browser automation

[[Helium Browser]] has a dedicated entry separating its capabilities from unresolved privacy and compatibility questions; the local browser and security experiments below are implementation leads rather than endorsements.

- [Helium](https://helium.computer/) — Chromium-based browser. Its developer [asked users in censored networks](https://x.com/uwukko/status/2088882137877663921) to test splitting the TLS ClientHello paired with secure DNS, and a later [development update](https://x.com/uwukko/status/2095077590994149563) covers making the compact debugging warning clearer. Fragmentation may bypass simple filtering but can fail or make traffic conspicuous. _(@uwukko)_
- [Helium Browser 0.17.2](https://x.com/cyyynthia_/status/2101259480981758225) — release discussion highlighting CNAME uncloaking in the built-in uBlock Origin, keychain safeguards, GPC, optional ClientHello splitting, lazy restore, UI improvements and upcoming sync and mobile work. _(@cyyynthia_ quoting @heliumbrowser)_
- [Obscura](https://github.com/h4ckf0r0day/obscura) — Apache-2.0 Rust browser-automation project with Chrome DevTools Protocol support and Playwright/Puppeteer compatibility ([bookmarked post](https://x.com/RodmanAi/status/2094784063576113434)). Its size, startup and memory numbers are project-reported. _(@RodmanAi)_
- [Cloudflare malware-filtering DNS for a home router](https://x.com/lucataco/status/2094063782628577631) — Cloudflare documents `1.1.1.2` and `1.0.0.2` as resolvers that block domains classified as malicious. A network-level layer, not antivirus: it cannot inspect every URL, file or local exploit, and false classifications happen. _(@lucataco)_
- [Invidious as a self-hostable YouTube frontend](https://x.com/marcusyul/status/2094089513286951024) — ad-free viewing, background play, no Google login, self-hosting. Public instances can be unreliable and streams come from Google unless proxying is enabled, so "no tracking" depends on configuration. _(@marcusyul)_

## Frontend, graphics and media leads

Implementation references, not blanket endorsements. [[Compositor]] extends the graphics tools; [[Design_and_Aesthetics|Design & Aesthetics]] holds the design side.

- [X web interface using Base UI](https://x.com/colmtuite/status/2082075686580146249) — a short clip shows X's web interface built on [Base UI](https://base-ui.com/), an unstyled React component library designed for composability, styling freedom and accessible behaviour. The sighting is a point-in-time adoption signal; the documentation is the durable resource. _(@colmtuite)_
- [Progressive-blur header and footer for Expo](https://x.com/davidmokos_/status/2082582252110643643) — a feathered blur that softens the transition between scrolling content and fixed header or footer chrome; install with `npx shadcn@latest add davidmokos/beautiful-expo/progressive-blur`. _(@davidmokos_)_
- [Beautiful UI interaction gallery](https://beautiful-ui-five.vercel.app/) — compact visual reference of polished web-interface treatments ([original bookmark](https://x.com/suraj_sharma14/status/2088891006015930506)). Inspiration, not a component or accessibility library. _(@suraj_sharma14)_
- [Compositor](https://robbietilton.com/compositor) — Robbie Tilton's image editor, presented as a free, open-source, 12 MB Photoshop-like editor focused on essential compositing tools ([launch post](https://x.com/robbietilton/status/2100946395972976843)); [v1.1](https://x.com/robbietilton/status/2101714382665519192) added a text tool and layer effects. _(@robbietilton)_
- [FFmpeg skill v0.12.0](https://x.com/kebura_P/status/2096964158994755604) — agent skill update covering cropping, compositing, stabilisation, subtitle handling, track selection, environment checks, output verification and safeguards against overwriting source media. _(@kebura_P)_
- [GSAP](https://gsap.com/) — animation library (from the Dev note).

## Native agents, data products and fabrication

Untested leads for native-agent, property-data and fabrication projects.

- [Swift and Cloudflare trip-planner agent](https://x.com/fayazara/status/2098690157209907543) — native-agent architecture combining Swift with a Hono Worker, browser tooling, Durable Objects and R2. A demonstration, not documentation. _(@fayazara)_
- [UK Property Insight public API](https://x.com/ukhpinfo/status/2097235890489688397) — property-data API with possible value for housing research. _(@ukhpinfo)_
- [BestAgent Land Registry integration](https://x.com/moving_charlie/status/2096897911346848015) — the founder reports a Local Land Charges connection for property listings running in testing. _(@moving_charlie)_
- [Quicker](https://quicker.chat/) — unified inbox that [claims](https://x.com/tomaldertweets/status/2102005817507479969) to combine LinkedIn, Slack, WhatsApp, X, iMessage and other conversations with local storage, search, tags, reminders and suggested replies; account-connected product research continues in [[Quicker]]. _(@tomaldertweets)_
- [OpenTools Studio](https://www.opentools.studio/) — printer project from an [enthusiastic product post](https://x.com/rafaelcaricio/status/2102031482566955116); check the bill of materials and independent results before buying or building. Connects to [[3D Printing and Digital Fabrication]]. _(@rafaelcaricio)_
- [Image-to-CAD personalised doorstop](https://x.com/dkundel/status/2097419372960890983) — photograph a space with a measuring tape, generate a custom model, 3D-print it. The successful fit is self-reported. _(@dkundel)_
- [Spectrum Library v1.4.6](https://x.com/Jdr8245Jhon/status/2101431367410041230) — image-only bookmark pointing at a [GitHub release](https://github.com/Phoenixx1202/Spectrum-Library/releases/tag/1.4.6). A repository still to identify, not an inferred tool description. _(@Jdr8245Jhon)_

## Resources

The tool bank from the Dev note, by use. Where the note gave no label, the entry says so.

### Learning and practice

- [Piano Notes Trainer](https://kvyverse.com/piano_notes_trainer) — note-reading trainer, saved under "learn piano".
- [Build Anything Blueprint](https://www.blueprint.am/) — saved as "build anything blueprint".
- [Skills.sh](https://skills.sh/) — Saved without a note.
- [Maple.dev](https://maple.dev/) — Saved without a note.

### Maps, tracking and networks

- [3wifi Map](https://3wifi.dev/map.html) — WiFi network map.
- [Marine Traffic](https://www.marinetraffic.com/) — real-time vessel tracking; the note's link opens the [AIS world map](https://www.marinetraffic.com/en/ais/home/centerx:-12.8/centery:0.0/zoom:2).
- [Aviation Stack](https://aviationstack.com/) — flight data API.
- [Quick Map Tools](https://www.quickmaptools.com/) — map utilities, by its URL.
- [Monitor the Situation](https://monitorthesituation.org/) — Saved without a note.
- [mapcn blocks](https://www.mapcn.dev/blocks) — saved without a note; the URL points to a gallery of map component blocks.
- [fli](https://github.com/punitarani/fli) — GitHub project saved under "google flights".

### Data visualisation and analysis

- [Hashtree.cc](https://hashtree.cc/) — Saved without a note.
- [Proteo Cosmos](https://app.proteo-cosmos.com/) — interactive navigator of the human protein-protein interaction network.
- [Real-time Aave](https://world.gizatech.xyz/) — "real time visualization of transactions"; the note's link opens the [Aave view](https://world.gizatech.xyz/?play=true&protocols=aave).
- [Polymarket](https://polymarket.com/) — prediction markets, filed here for its interface.

### Web tools and utilities

- [Cobalt.tools](https://cobalt.tools/) — Saved without a note.
- [Mockdown](https://www.mockdown.design/) — design mockups.
- [Defuddle](https://defuddle.md/) — "Get the main content of any page as Markdown."
- [Paste.ente.io](https://paste.ente.io/) — pastebin.
- [Ramp.com](https://ramp.com/) — Saved without a note.
- [Poly.app](https://poly.app/) — 3D models.
- [Cotool.ai](https://www.cotool.ai/) — Saved without a note.
- [Toolfolio.io](https://toolfolio.io/) — design tools aggregator.

### Graphics, 3D and simulation

- [Envato Elements](https://elements.envato.com/) — stock assets; the note also keeps a [vertical carousel slideshow template](https://elements.envato.com/vertical-carousel-slideshow-RTDYGLW).
- [SVGL](https://svgl.app/) — SVG logos.
- [Animated Icons](https://animated-icons.vercel.app/) — animated icon set.
- [Supersplat](https://superspl.at/) — 3D splat technology.
- [Gaussian Splat Video](https://lukashoel.github.io/video_to_world/) — saved as "gaussian splatter video".
- [Morflax Studio](https://studio.morflax.com/objects/upload) — saved as "3d models".
- [Withdiode](https://www.withdiode.com/) — "Simulate Hardware"; the note also saves a [project](https://www.withdiode.com/projects/373b4668-086c-4842-b473-c640e88011b2).
- [Atmospheric Scattering](https://r3f.maximeheckel.com/atmospheric-scattering-3) — Maxime Heckel's React Three Fiber atmospheric-scattering demo.

### Search and reference

- [Epstein Search](https://epsteinsearch.info/) — saved without a note; a search site, judging by the URL.
- [WGSN](https://www.wgsn.com/) — trend forecasting.
- [Ben Kuhn's blog](https://www.benkuhn.net/) — saved without a note, beside an [X post by @zebriez](https://x.com/zebriez/status/2028537184744243450).

## Related

[[Bookmarks - Developer Tools]] · [[Bookmarks - AI & Agents]] · [[Dev Resources]] · [[Setup]] · [[X-Bookmarks]] · [[AI Agents]] · [[Digital Security]] · [[Design_and_Aesthetics|Design & Aesthetics]] · [[Tools|Tools & Software]] · [[Omarchy]] · [[OpenShip]] · [[Helium Browser]] · [[Omarchy iCloud Photos]] · [[Compositor]] · [[Quicker]] · [[Grok Bot]] · [[3D Printing and Digital Fabrication]] · [[Developer Tool Evaluation Map]] · [[Bookmarks - Design & Frontend]] · [[Bookmarks - Business & Startups]] · [[Evergreen Lessons from X - September 2026]]
