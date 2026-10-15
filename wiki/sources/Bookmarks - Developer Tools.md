---
title: Bookmarks - Developer Tools
type: source
domain: dev
sources:
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - bookmarks/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
  - snapshots/1790106580663-f31d8b54f166/bookmarks/Developer Tools.md
related:
  - Evergreen Lessons from X - September 2026
  - X-Bookmarks
  - Developer Resources
  - Digital Security
  - Omarchy
  - Omarchy iCloud Photos
  - Helium Browser
  - 3D Printing and Digital Fabrication
  - AI Agents
  - Grok Bot
  - Hyperliquid
  - Developer Tool Evaluation Map
  - Tools & Software
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - bookmarks
  - september-2026
  - developer-tools
  - browsers
  - macos
  - linux
  - self-hosting
  - cloudflare
  - ai-agents
  - graphics
  - privacy
review_status: archive
summary: >-
  Every saved developer-tool link grouped by theme, with what each one is and
  what to check: infrastructure, browsers, macOS and Linux, local AI, graphics, APIs.
---

# Bookmarks - Developer Tools

Erlin's saved developer links from X and Chrome: infrastructure and self-hosting patterns, browser automation, macOS and Linux utilities, local AI and speech tools, web graphics, 3D research, app-platform references and data APIs. The strongest material is the hands-on engineering writing: Pieter Levels' self-hosting and firewalling checklists, Cloudflare's DNS-cache memory write-up, the production-failure review checklist and the Tailscale remote-access patterns. Recurring authors are Peter Steinberger (@steipete), Pieter Levels (@levelsio), How To Prompt (@HowToPrompt__), Tom Dörr (@tom_doerr) and the [[Omarchy]] and [[Helium Browser]] developers. Most entries are product or demo posts: each description says what the post claims and, where it matters, what still needs checking. Version-specific entries (Obscura, UTM, Fastpotify, FluidVoice, the FFmpeg skill, the Helium releases) describe the state at the time they were saved.

## Engineering lessons and architecture rules

- [Review production software through concrete failure cases](https://x.com/GohilHardy/status/2103760572835938540) — A reusable review checklist: ask how the system detects or survives deadlocks, memory leaks, N+1 queries, concurrent updates, stale reads, dependency failures and failed releases. For each relevant failure, name an owner, an observable symptom, and a recovery or rollback path. Synthesised in [[Evergreen Lessons from X - September 2026]]. _(@GohilHardy)_
- [Cloudflare's DNS-cache memory optimization](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/) — At more than 250 billion entries, small per-entry costs become fleet-scale expenses. Cloudflare replaced growable collections with boxed immutable slices and strings, consolidated lists using compact offsets, and cut redundant metadata and padding; it reports roughly 100 TB less production working-set memory, 43% higher insertion throughput and 19% lower lookup latency. The reusable lesson: match representation to actual mutability, and measure allocations, locality and end-to-end behaviour together. Found through [a repost](https://x.com/IntCyberDigest/status/2093136301516046424) whose claim that this solved the global memory shortage is hyperbole.
- [Zustand for client state, TanStack Query for server state](https://x.com/fyzanshaik/status/1981413664378011818) — A concise frontend architecture rule: give each state-management tool the job it is good at. _(@fyzanshaik)_
- [Peer-to-peer transfer app architecture](https://x.com/AravSrinivas/status/2031414450046259433) — Implementation reference for a WebRTC transfer app: DTLS, chunking and signalling. _(@AravSrinivas)_
- [Browser-hosted Windows 3.11 virtual LAN](https://x.com/levelsio/status/2068817152317288823) — Pieter Levels connects browser-hosted Windows 3.11 sessions through a virtual NE2000 adapter and a WebSocket-backed Ethernet hub, a practical emulated-LAN architecture. _(@levelsio)_

## Cloudflare, cloud hosting and self-hosting

- [Cloudflare as an automation and deployment substrate](https://x.com/MitchellKeller_/status/2095576450791346626) — A compact map of Workers, databases, email, scraping, traffic, deployments, automations and schedules as one developer platform. A capability map, not a promise that every workload is free or appropriate; check limits and costs per project. _(@MitchellKeller_)_
- [Cloudflare AI Gateway feature set](https://x.com/_ashleypeacock/status/2023457563434487948) — Overview of routing, failover, caching, analytics, rate limiting and provider abstraction in front of model APIs. _(@_ashleypeacock)_
- [Cloudflare crawl endpoint](https://x.com/CloudflareDev/status/2031488099725754821) — API reference for whole-site extraction into HTML, Markdown or JSON. _(@CloudflareDev)_
- [Cloudflare Email Service migration checklist](https://x.com/levelsio/status/2053482525780008997) — A durable sequence for switching email providers: audit every send, centralise one provider adapter, import the old provider's [suppression list](https://x.com/levelsio/status/2053489575423557653), and canary a low-stakes transactional message before moving authentication mail. Recheck the [REST API](https://developers.cloudflare.com/email-service/api/send-emails/rest-api/), [pricing](https://developers.cloudflare.com/email-service/platform/pricing/) and product state at migration time. Cloudflare now provides [delivery-event subscriptions](https://developers.cloudflare.com/email-service/platform/event-subscriptions/) and [Activity-log previews](https://developers.cloudflare.com/changelog/product/email-service/), so parts of the original beta warning are stale. _(@levelsio)_
- [Lean self-hosted web stack](https://x.com/levelsio/status/2052734824541016107) — A practical checklist: Ubuntu and Nginx, automatic updates, cron, SQLite, vanilla web code, Cloudflare Tunnel and R2, Tailscale, OpenFreeMap, Stripe and a low-cost Hetzner VPS. The quoted "about $5/month" for "about 5M unique visitors" is the author's own report, not a cost or capacity benchmark. _(@levelsio)_
- [VPS firewalling with Cloudflare and Tailscale](https://x.com/levelsio/status/2019058602707681593) — Server-hardening pattern: limit HTTPS to Cloudflare and SSH to a private Tailscale subnet. _(@levelsio)_
- [Oracle Cloud Always Free compute](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) — The documentation, checked on 28 August 2026, lists Ampere A1 allowances equivalent to 2 OCPUs and 12 GB RAM, 200 GB combined boot and block storage, and 10 TB monthly outbound transfer. Provision in the tenancy's home region; regional capacity can be unavailable and idle instances may be reclaimed after seven days of low utilisation. Check quotas and paid-resource boundaries, and do not keep the only copy of important data on a free VM. Found through [Ian's discovery post](https://x.com/keywordian/status/2092724783125262508).
- [Coolify 4.3 redesign](https://coolify.io/) — Coolify's [release post](https://x.com/coolifyio/status/2087495682978468125) announces a redesigned interface and new features for the self-hosted deployment platform. Read the migration notes and keep a backup before upgrading production.
- [Upstash Redis Search](https://x.com/upstash/status/2032031432428650961) — Managed low-latency, type-safe search on Upstash Redis. _(@upstash)_
- [Vercel geolocation headers IP demo](https://x.com/shuding/status/2034429894642516216) — Implementation pattern for lightweight location-aware web tools built on Vercel's geolocation headers. _(@shuding)_
- [Crabbox remote execution control plane](https://crabbox.sh/) — Keeps a local edit-and-run loop while leasing or reusing remote machines: syncs tracked files, streams commands, applies TTL and spend controls, and collects test evidence. Its own documentation says it is not CI, deployment infrastructure or a hostile multi-tenant sandbox, so use it for scoped remote builds and tests, not as a security boundary. _(@steipete)_
- [Swift and Cloudflare trip-planner agent](https://x.com/fayazara/status/2098690157209907543) — Native-agent architecture joining a Swift client to a Hono Worker, browser tooling, Durable Objects and R2. An architecture example from a demo post, not a tested application in this wiki. _(@fayazara)_

## Networking, remote access, privacy and security

Remote control, content credentials, unofficial application builds and private-account graph inference all sit beside [[Digital Security]].

- [macOS Screen Sharing over Tailscale](https://x.com/stolinski/status/2095669413639024996) — Enable Screen Sharing on the target Mac, then use Finder's Connect to Server with `vnc://hostname` or the Tailscale address. Access still depends on macOS permissions, Tailscale reachability, ACLs and which account may control the Mac. _(@stolinski)_
- [Tailscale identity-aware services](https://x.com/Tailscale/status/2024487918123843962) — Official reference for named internal services, tsnet, Kubernetes support and observability. _(@Tailscale)_
- [Use a travel device as a frontend to home compute](https://x.com/ashen_one/status/2103757218621653040) — Run demanding jobs on the home workstation and use the portable device as the interface. Private-network reachability and SSH or remote-desktop authentication are separate controls, which [Tailscale's SSH documentation](https://tailscale.com/docs/reference/ssh-over-tailscale) confirms; test recovery when the connection drops. A workflow anecdote, not proof of a universal hardware setup. _(@ashen_one)_
- [Slim local HTTPS and tunnel tool](https://x.com/kamrify/status/2030259549798584798) — Utility for local HTTPS, development domains and sharing localhost publicly. _(@kamrify)_
- [Cloudflare malware-filtering DNS for a home router](https://x.com/lucataco/status/2094063782628577631) — Cloudflare documents `1.1.1.2` and `1.0.0.2` as resolvers that block domains classified as malicious. A useful network-level layer, not an antivirus: it cannot inspect every URL, file, IP connection, local exploit or newly uncategorised domain, and misclassifications happen. _(@lucataco)_
- [Treat privacy as several separate layers](https://x.com/cyber_razz/status/2103807409395233170) — A VPN exit IP does not remove browser, account or locale signals. WebRTC candidate addresses can expose network information depending on application and browser configuration; [MDN's WebRTC candidate-address page](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/address) describes relay-only ICE as one application control. DNS-over-HTTPS or DNS-over-TLS encrypts DNS exchanges, not all traffic or identity signals ([Cloudflare: encrypted DNS](https://www.cloudflare.com/learning/dns/dns-over-tls/)). Test the actual device and browser rather than assuming WebRTC always bypasses a VPN or that encrypted DNS hides every visited site. A [second post](https://x.com/schmidt1024/status/2103300207857353043) makes the same point. _(@cyber_razz, @schmidt1024)_
- [Mullvad exit-IP fingerprinting postmortem](https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/) — tmctmt found that deterministic exit-IP positions across sampled Mullvad servers collapsed 3,650 tested WireGuard keys into only 284 observed combinations, a cross-server correlation signal. A 29 May update says Mullvad began scrambling exit-IP positions and fixed the pattern, though selection stays deterministic for a given public key. A resolved implementation lesson, not a current vulnerability. _(@tmctmt)_
- [PS5 hardware-jailbreak claim](https://x.com/GodSon83/status/2095675020270022974) — The post claims a hardware-level compromise can rip games, run emulators and broadly jailbreak PS5 consoles. A console-security news lead, not a confirmed universal or unpatchable exploit: firmware, hardware revision, prerequisites, legality, warranty and the researchers' disclosure are all unverified. _(@GodSon83)_
- [Removing Claude content-credential metadata](https://x.com/guillaumemeyer/status/2095207287392501986) — Demonstrates a tool claimed to strip content credentials from supported Claude-generated files. The provenance lesson: metadata is lost through ordinary file transforms, so authentication systems should not assume it persists. Do not use removal to misrepresent authorship or evade disclosure requirements. _(@guillaumemeyer)_
- [Instagram private-graph analyser](https://x.com/akaclandestine/status/2096556432908791953) — Project advertised as inferring interactions involving private Instagram accounts. Kept only as a security and privacy-risk reference; not for evading privacy controls, surveilling people or violating platform terms or law. _(@akaclandestine)_
- [Magika content-type detector](https://github.com/google/magika) — Google's Apache-2.0 tool identifies file content from bytes rather than extensions, with a CLI and Python, Rust, JavaScript and Go bindings. The repository reports training on roughly 100 million files across 200+ types, about 99% test precision and recall, and millisecond CPU inference. Use its confidence modes, and do not mistake type classification for malware detection. _(via @_vmlops)_
- [Astra reverse-engineers Wind Waker for a phone](https://x.com/IsaakMo/status/2097457853921640880) — Coding demonstration of game reverse engineering for mobile play. A capability lead; reproducibility, ownership, copyright and distribution boundaries are unchecked. _(@IsaakMo)_
- [Archived Goose WHOOP 5.0 reverse-engineering prototype](https://github.com/b-nnett/goose) — Bennett's developer-only alpha demonstrated local BLE access to a WHOOP 5.0 and seeded later projects. The repository is archived and was never a drop-in health app. _(via @b_nnett)_

## Browsers and browser automation

- [Obscura Rust headless browser](https://x.com/RodmanAi/status/2094784063576113434) — [Obscura](https://github.com/h4ckf0r0day/obscura) is an Apache-2.0 Rust browser-automation project with Chrome DevTools Protocol support and Playwright/Puppeteer compatibility. Its size, startup and memory numbers are project-reported benchmarks, not independently measured. _(@RodmanAi)_
- [Apple WebPage headless browser](https://x.com/nathanborror/status/2029011325205233769) — Native headless-browser capability on Apple platforms that could simplify Mac automation. _(@nathanborror)_
- [agent-browser Chrome auto-connect command](https://x.com/ctatedev/status/2032905426631598324) — The exact CLI command and environment flag for attaching an agent to an already running Chrome session. _(@ctatedev)_
- [Browser Harness editable CDP automation](https://github.com/browser-use/browser-harness) — MIT-licensed harness that connects an LLM directly to Chrome over CDP and lets the agent add missing helper code and reusable domain skills as it works. Powerful and experimental: use an isolated profile where possible and treat authenticated-session access as sensitive. _(via @gregpr07)_
- [Helium Browser experimental TLS and developer-mode work](https://x.com/uwukko/status/2088882137877663921) — [[Helium Browser]]'s developer asks users on censored networks to test splitting the TLS ClientHello and pairing it with secure DNS; a later [development update](https://x.com/uwukko/status/2095077590994149563) discusses making the compact debugging warning clearer in the latest build. ClientHello fragmentation may bypass simple filtering but can also fail or make traffic conspicuous, and debugging warnings need to stay understandable and hard for malicious pages to normalise. _(@uwukko)_
- [Helium Browser 0.17.2](https://x.com/cyyynthia_/status/2101259480981758225) — Release discussion covering CNAME uncloaking in the built-in uBlock Origin, keychain safeguards, Global Privacy Control, optional ClientHello splitting, lazy restore, UI improvements and upcoming sync and mobile work. Check security and privacy behaviour against [Helium's current release](https://helium.computer/) and source. _(@cyyynthia_ quoting @heliumbrowser)_
- [Sweet Cookie and Oracle CLI updates](https://x.com/steipete/status/2030478956646834590) — Pointers to two maintained utilities: a browser-cookie utility and a model-oracle CLI. _(@steipete)_

## Omarchy and Linux on Apple hardware

- [Omarchy Quattro](https://github.com/basecamp/omarchy) — [[Omarchy]] is Basecamp's opinionated Arch Linux and Hyprland development environment. Jorge Manrubia's [original recommendation](https://x.com/jorgemanru/status/2085371786409980026) aims it at macOS developers; the [Quattro release post](https://x.com/tobi/status/2088333047024202115) frames it as a malleable environment for agentic work; an [experimental macOS packaging demo](https://x.com/athasdev/status/2088688906657005726) runs it through Apple Containerization and Rosetta with Quickshell streamed into Athas Capsule; and an [mlx-omarchy compatibility report](https://x.com/JoshuaSWarren/status/2095268521391354205) claims 94.6% functional parity with macOS MLX, with three remaining Apple-dependent or upstream Vulkan gaps (a project-defined figure, not an independent benchmark). None of this proves macOS parity. Switching or containerising a desktop costs hardware, compatibility, security, performance and workflow, so try it on non-critical hardware first.
- [Omarchy adoption scepticism](https://x.com/ChefExecOfficer/status/2093574043769479351) — A hostile counterpoint to DHH's rapid-growth announcement: Omarchy is getting credit for work done by Linux, Arch and Hyprland, and the YouTube promotion push looks inorganic. A perception and attribution critique, not verified adoption data or proof of paid promotion. Judge the distribution by its code, contributors, retention, support burden and upstream dependencies rather than either side's rhetoric. _(@ChefExecOfficer)_
- [Omarchy on Apple hardware](https://x.com/OmarchyMac/status/2098384849770037280) — Linux-on-Mac lead framed around local AI. Check hardware support, firmware recovery and a tested rollback path before replacing macOS. _(@OmarchyMac)_
- [Omarchy iCloud Photos](https://x.com/jankeesvw/status/2101977870289527284) — [Open-source native client](https://github.com/jankeesvw/omarchy-icloud-photos) for browsing a recent portion of an iCloud photo library under Omarchy, with delete/undo, HDR video and Live Photos described. Check how it authenticates and how deletion works before granting library access. Entity page: [[Omarchy iCloud Photos]]. _(@jankeesvw)_
- [Omarchy Pods manages AirPods on Linux](https://github.com/thisisgm/omarchy-pods) — Small Omarchy-oriented utility exposing AirPods controls after a move from macOS to Linux ([announcement](https://x.com/stevenharms/status/2089539284508561623), [repository post](https://x.com/stevenharms/status/2089539319908495584)). A practical migration aid; check supported AirPods models and maintenance activity before installing on a primary machine. _(@stevenharms)_
- [Touch ID on Linux through t1bridge](https://x.com/niconistal/status/2097906524559384816) — Report of recovering T1 data and enabling fingerprint authentication after macOS had been removed. A user report, not a guide; hardware support and the recovery procedure are unverified. _(@niconistal)_
- [LibrePods](https://x.com/HowToPrompt__/status/2068685081900875926) — Open-source implementation of AirPods features such as noise-control modes, ear detection, battery status and gestures on Android and Linux. _(@HowToPrompt__)_

## macOS utilities, virtualization and small dev tools

- [UTM 5.0.5 beta and experimental DirectX 12](https://x.com/UTMapp/status/2095033715848265783) — The beta adds D3DMetal-based DirectX 12 support for Windows 11 ARM guests on macOS. The [release discussion](https://github.com/utmapp/UTM/discussions/7847) labels the driver experimental, with limited game compatibility and stability; test on disposable workloads first. _(@UTMapp)_
- [Apple container](https://x.com/twtayaan/status/2069307717177737658) — Apple's open-source container runtime for Apple silicon, written in Swift around macOS virtualization and standard container images. _(@twtayaan)_
- [Space Rabbit removes the macOS Spaces transition](https://github.com/tahul/space-rabbit) — Small native Swift utility ([app site](https://space-rabbit.app/), [original post](https://x.com/valeriansaliou/status/2084925453760930033)) that fires a fast synthetic swipe to switch Spaces without the standard animation, with a menu-bar configuration UI. Open source and used daily by its authors, but it relies on a workaround that may break across macOS releases; review permissions and current compatibility before installing.
- [Remap Command-Space to macOS Show Apps](https://x.com/tmuxvim/status/2085548588403167537) — Disable the two Spotlight shortcuts under System Settings → Keyboard → Keyboard Shortcuts → Spotlight, then assign Command-Space to "Show Apps". This changes the launcher shortcut; it does not uninstall or truly disable Spotlight. Confirm the exact label on the installed macOS version. _(@tmuxvim)_
- [Reduce Spotlight indexing on large repos](https://x.com/billyjhowell/status/2023801833307652385) — macOS troubleshooting step: exclude large repository trees from Spotlight, but only when indexing is causing measurable resource use. _(@billyjhowell)_
- [fix-my-mic Mac input selector](https://x.com/yigitkonur/status/2025073457181196454) — Small native utility that keeps the Mac's built-in microphone selected when AirPods connect. _(@yigitkonur)_
- [Textream offline macOS teleprompter](https://x.com/fkadev/status/2020452350385635552) — Small installable teleprompter that uses on-device speech recognition and works offline. _(@fkadev)_
- [Open-source Markdown viewer and skills editor](https://x.com/Shpigford/status/2034365122638954924) — Two practical macOS utilities with source available for reuse or study. _(@Shpigford)_
- [Ports CLI for orphaned dev servers](https://x.com/larsencc/status/2039923439159648488) — Simple tool to identify, monitor and clean up processes occupying development ports. _(@larsencc)_

## AI coding agents and Codex

Most entries here concern OpenAI's Codex tooling; the broader agent material is in [[AI Agents]].

- [CodexBar token-usage tracker](https://x.com/steipete/status/2022407067122725335) — Maintained utility for monitoring Codex usage. _(@steipete)_
- [Codex reusable least-privilege permission profiles](https://x.com/thsottiaux/status/2071636285807059315) — A concrete security control: inheritable filesystem rules, per-domain network access, Unix-socket policy and fail-closed administrative allowlists. _(@thsottiaux)_
- [Codex Remote Control setup](https://x.com/iScienceLuvr/status/2096752682455503117) — The author pairs a remote machine with the mobile app using remote-control commands. Check official support, authentication and network exposure before using it on a sensitive host. _(@iScienceLuvr)_
- [Native iPhone client on Codex app-server](https://x.com/SIGKITTEN/status/2025073817467416983) — Proof of concept embedding Codex locally in a native iPhone application. _(@SIGKITTEN)_
- [Codex iOS preview and hot-reload loop](https://x.com/kedytcom/status/2067190011192078535) — A third-party demonstration says the Build iOS Apps plugin can run the app, open SwiftUI previews and hot-reload edits inside Codex, tightening the visual verification loop. Feature details are time-sensitive. _(@kedytcom)_
- [CLI design layer for AI-generated code](https://x.com/denicmarko/status/2031690682398908753) — Tool for applying a consistent visual system to generated interfaces. _(@denicmarko)_
- [React Grab visual edit handoff](https://x.com/aidenybai/status/2029603067927351506) — Open-source bridge from selecting a DOM element to requesting a change from a coding agent. _(@aidenybai)_
- [Repository of prompts, code and previews](https://x.com/LexnLin/status/2032981438748873086) — Learning archive that keeps builds alongside the prompts that produced them. _(@LexnLin)_
- [ComfyUI App Mode](https://x.com/hellorob/status/2031423137045176698) — A pattern for hiding node-graph complexity behind a handoff-friendly interface. _(@hellorob)_
- [OpenGrok model-routing patch for Grok Bot](https://github.com/OnlyTerp/opengrok) — The [announcement](https://x.com/OnlyTerp/status/2093077239873069058) presents a Python patch that routes [[Grok Bot]] through subscription, API or local models and adds a model picker plus diagnostic tooling. Unofficial, unrelated to Oracle's similarly named source-browser project, and dependent on Grok Bot internals that may break with product updates; inspect the code, credential handling and account terms before running it on a real profile. _(@OnlyTerp)_
- [Blueprint AI hardware planning](https://x.com/Sajeel_Purewal/status/2069099646308220973) — Sajeel Purewal's tool turns a hardware idea into a proposed build plan. _(@Sajeel_Purewal)_

## Local AI, models and document parsing

- [Local semantic photo search stack](https://x.com/measure_plan/status/2033941877750436037) — Local-AI recipe using SmolVLM, RF-DETR, ChromaDB and Streamlit. _(@measure_plan)_
- [TurboVec local vector index](https://github.com/RyanCodrai/turbovec) — MIT-licensed Rust and Python vector index built on TurboQuant, with online ingest, local operation and filtered search. Project benchmarks report 16× vector-storage compression at two bits and speed advantages in tested ARM and four-bit configurations, not across every x86 or bit-width setup; benchmark it on the intended corpus and recall target. _(via @RodmanAi)_
- [DDTree-MLX speculative decoding](https://github.com/humanrouter/ddtree-mlx) — Apple-silicon MLX port that builds a tree from DFlash token probabilities and verifies branches in one target-model pass. The repository reports about 10–15% over DFlash and 1.52× autoregressive for Qwen 3.5 27B code on one M3 Ultra, but roughly no gain for low-acceptance creative prose; reproduce on the intended model, prompt mix, memory budget and hardware. _(via @runsonai)_
- [LiteParse v2 Rust PDF parser](https://github.com/run-llama/liteparse) — Rust PDF parser shipped as Rust, Python, Node and WASM packages; broader document formats go through external converters. Benchmark its speed and accuracy claims on the intended documents. _(via @jerryjliu0)_
- [Reverse-engineered Apple Neural Engine](https://x.com/ronaldmannak/status/2028560995875168292) — Technical research on ANE efficiency and CoreML overhead. _(@ronaldmannak)_

## Audio, voice and media tooling

- [Talkify local macOS dictation](https://github.com/tornikegomareli/Talkify) — Free, open-source menu-bar dictation app ([product site](https://usetalkify.app/), [original post](https://x.com/tornikegomareli/status/2088524464224919700)) built on Apple's SpeechAnalyzer and system-managed on-device models. The author reports an 8.2 MB app and 123 ms median release-to-text latency against four alternatives; author-run, setup-specific measurements. _(@tornikegomareli)_
- [OpenWhisper private Mac voice-to-text](https://x.com/0xrwu/status/2022356207890280486) — Open-source local dictation app for people who do not want proprietary services processing their speech. _(@0xrwu)_
- [FluidVoice](https://github.com/altic-dev/FluidVoice) — Open-source local dictation project.
- [Voxtral real-time WebGPU transcription](https://x.com/xenovacom/status/2031772745474707532) — Private in-browser multilingual speech recognition with concrete latency figures. _(@xenovacom)_
- [Fish Audio S2 expressive TTS](https://x.com/FishAudio/status/2031411140820152560) — Open-source low-latency multilingual voice model with emotion control. _(@FishAudio)_
- [Inworld Mini and Max TTS models](https://x.com/replicate/status/2031792388453388373) — Model reference for low-latency agent voices and high-quality expressive speech. _(@replicate)_
- [Open-source real-time speech-to-speech stack](https://x.com/Thom_Wolf/status/2072825424800006350) — Hugging Face and Cerebras released a forkable live voice demo with models, code, a hosted space and an implementation write-up. _(@Thom_Wolf)_
- [Grok speech-to-text and text-to-speech APIs](https://docs.x.ai/developers/model-capabilities/audio/voice) — xAI's official documentation for multilingual transcription, multi-speaker handling and speech generation. Coverage, pricing and quality are vendor claims; benchmark on the intended audio. _(via @SpaceXAI)_
- [FFmpeg skill v0.12.0](https://x.com/kebura_P/status/2096964158994755604) — Update adding cropping, compositing, stabilisation, subtitle handling, track selection, environment checks, output verification and safeguards against overwriting source media. Inspect the repository and tests before installing. _(@kebura_P)_
- [VideoLAN dav2d AV2 decoder](https://code.videolan.org/videolan/dav2d) — VideoLAN's open-source, cross-platform AV2 decoder, based on dav1d and aiming for fast, correct software decoding across C and assembly targets. VideoLAN calls it an early project and warns against production use while the implementation and codec specification mature. _(via @Pirat_Nation)_
- [lawn.video open-source review platform](https://x.com/theo/status/2026794317197849001) — Fast open-source alternative for collaborative video review with simple pricing. _(@theo)_
- [Torflix terminal torrent streamer](https://github.com/surajssc1232/torflix) — MIT-licensed Rust TUI ([original post](https://x.com/surajkhahai/status/2086417384181776734)) that uses rqbit and streams magnet or torrent content through mpv or VLC; crates.io listed version 0.4.1 when saved. A young, lightly reviewed tool: inspect the source before `cargo install`, limit its filesystem access, and use it only for content you are legally authorised to obtain.
- [Invidious as a self-hostable YouTube frontend](https://x.com/marcusyul/status/2094089513286951024) — A Spanish overview of ad-free viewing, background play, no Google login and self-hosting. The project itself notes that public instances can be unreliable and that video streams normally come straight from Google unless proxying is enabled, so "no tracking" depends on configuration and the operator. _(@marcusyul)_
- [Fastpotify native Rust Spotify client](https://x.com/paolino/status/2093659889339888126) — The saved v0.3.0 release added playback, playlist, local-link and interface improvements; [later releases](https://github.com/crmne/fastpotify/releases) reached v0.4.0 release candidates. macOS builds may need manual quarantine handling and are not necessarily notarised. _(@paolino)_

## Web graphics and creative coding

- [Canvas 2D faux-3D globe](https://x.com/wescld/status/2031022730036805998) — Reusable method: precomputed point clustering plus projection interpolation. _(@wescld)_
- [Circling-arrow creative coding source](https://x.com/junkiyoshi/status/2032745435543343162) — openFrameworks motion study with source, suitable for adaptation. _(@junkiyoshi)_
- [Client-side GLTF to KTX2 optimizer](https://x.com/iced_coffee_dev/status/2031368335103762438) — Browser tool that cuts both asset size and GPU memory use through KTX2 texture compression. _(@iced_coffee_dev)_
- [Compact generative Processing sketch](https://x.com/yuruyurau/status/2031366569448886284) — Code-golfed procedural drawing reference. _(@yuruyurau)_
- [Composable WebGPU shaders without GLSL](https://x.com/abduzeedo/status/2031856827189940237) — Cross-framework route to GPU effects in web interfaces. _(@abduzeedo)_
- [JSON renderer for React Three Fiber](https://x.com/ctatedev/status/2032119565736374537) — Catalog-driven renderer for interactive 3D scenes. _(@ctatedev)_
- [MeshBVH 3D wiping effect](https://x.com/auxdesigner/status/2032608899195613416) — Three.js technique with a model reference. _(@auxdesigner)_
- [Open-source interactive WebGL energy shield](https://x.com/QingQ77/status/2031146010031043049) — R3F, Three.js and GLSL project with tunable grid, impact, health and bloom systems. _(@QingQ77)_
- [p5.brush 2.0](https://x.com/acamposuribe/status/2032483899020878335) — Open-source brush, hatching and natural-fill library for p5.js. _(@acamposuribe)_
- [Three-dimensional onion skinning CodePen](https://x.com/ericvanholtz/status/2031628808332230829) — Stacked-image-plane technique with source. _(@ericvanholtz)_
- [TypeGPU physics-based Jelly Slider tutorial](https://x.com/swmansion/status/2031407650424971696) — Beginner-friendly graphics article with a reusable interactive control. _(@swmansion)_
- [Anime.js Three.js adapter](https://x.com/JulianGarnier/status/2069100438301856024) — Anime.js 4.5's Three.js adapter: terser 3D transforms, material-colour animation, instanced meshes and 3D staggering. _(@JulianGarnier)_
- [Houdini FLIP rotation tutorial](https://x.com/Shijuwei/status/2031292101363892476) — Fluid-simulation technique reference bundled with a project file. _(@Shijuwei)_

## 3D reconstruction, splatting and spatial AI

- [Holi-Spatial 3D data-curation pipeline](https://x.com/10027lifuguan/status/2031266372400095394) — Project joining video 3D Gaussian splatting with semantic annotations. _(@10027lifuguan)_
- [LASER streaming 3D reconstruction](https://x.com/TianyeJerryDing/status/2031455793996857502) — CVPR research on training-free, kilometre-scale streaming reconstruction. _(@TianyeJerryDing)_
- [LoGeR long-context reconstruction](https://x.com/junyi42/status/2031024111716331759) — Research thread on hybrid memory for kilometre-scale 3D reconstruction. _(@junyi42)_
- [Open-source Gaussian splatting in C++](https://x.com/tom_doerr/status/2039400710962356575) — Code for a native 3D Gaussian-splat implementation. _(@tom_doerr)_
- [Spark++ WebGPU splat renderer](https://x.com/alightinastorm/status/2031187607858577918) — Open demo and repository for a performant browser splat renderer. _(@alightinastorm)_
- [Agent-generated 3D models with Monid and Suzanne](https://x.com/shengkun_ye/status/2069118784678621555) — Shengkun's agent-accessible 3D-model workflow built with Suzanne and Monid. A tool pointer; the production-quality claim is untested. _(@shengkun_ye)_

## App frameworks, iOS and Android

- [Electrobun TypeScript desktop runtime](https://x.com/taylordotcat/status/2023705018616922338) — Lightweight alternative sitting between Electron and Tauri, with typed RPC and small updates. _(@taylordotcat)_
- [X web interface using Base UI](https://x.com/colmtuite/status/2082075686580146249) — A short clip shows X's web interface built on Base UI components. [Base UI](https://base-ui.com/) is an unstyled React component library designed for composability, styling freedom and accessible behaviour; the X sighting is a point-in-time adoption signal, the documentation is the durable resource. _(@colmtuite)_
- [Beautiful UI interaction gallery](https://beautiful-ui-five.vercel.app/) — Compact visual reference of polished web-interface treatments, found through a largely context-free [post](https://x.com/suraj_sharma14/status/2088891006015930506). Inspiration, not a component library or accessibility reference; check motion, keyboard use and contrast before adapting a pattern.
- [tldraw](https://www.tldraw.com/) — General-purpose whiteboard, diagramming and canvas tool.
- [Flighty rebuilt with Expo native UI](https://x.com/nater02/status/2079180521427308791) — Implementation reference: a visually demanding iOS interface recreated with Expo while keeping real native controls. _(@nater02)_
- [App Store Connect CLI](https://x.com/rudrank/status/2023833941443272946) — Automation tool for Apple-platform release and App Store workflows. _(@rudrank)_
- [Rork Companion iOS sideloading](https://x.com/rork/status/2024992004007231512) — Workflow for installing test iOS apps without a paid developer account. _(@rork)_
- [iOS-remote browser control](https://x.com/HowToPrompt__/status/2068945092115898827) — Open-source WebDriverAgent-based tool for displaying and controlling a USB-connected iPhone from a browser on macOS, Windows and Linux. _(@HowToPrompt__)_
- [SMS Gateway for Android](https://x.com/HowToPrompt__/status/2069816991943401633) — Open-source Android gateway exposing a phone's SIM through REST APIs and webhooks, with local and cloud modes. _(@HowToPrompt__)_
- [YouTube Plus for iOS](https://x.com/senumy_ipa/status/2099730938662154664) — Third-party iOS modification advertising downloads, Picture in Picture, high-quality playback and interface controls. An unofficial sideloaded build; signing and account risk apply. _(@senumy_ipa)_

## Data, scraping and APIs

- [Discord archive crawler into SQLite](https://x.com/steipete/status/2030371936405188776) — Approach for turning a large Discord corpus into a searchable local dataset. _(@steipete)_
- [Real-time Telegram scraper](https://x.com/tom_doerr/status/2031291567944691821) — Utility for collecting Telegram messages and media with live updates. _(@tom_doerr)_
- [Scrapling browser and MCP scraper](https://x.com/D4Vinci1/status/2027241426849800651) — Maintained scraping tool with a stealth browser, Cloudflare handling and MCP support. _(@D4Vinci1)_
- [xint X intelligence CLI](https://x.com/nyk_builderz/status/2022996371922649192) — Open-source terminal tool for X search, bookmark analysis, trend tracking and Grok pipelines. _(@nyk_builderz)_
- [birdclaw X archive reader](https://x.com/steipete/status/2068965200343224367) — Fast interface for searching and reviewing an X archive: feeds, bookmarks, links, mentions and summaries. _(@steipete)_
- [gogcli Google Workspace automation](https://x.com/steipete/status/2022879695625199937) — CLI covering Apps Script, Forms, Docs, Sheets, Gmail, Drive and OAuth. _(@steipete)_
- [Google Maps Demo Key](https://x.com/GMapsPlatform/status/2039727056137650463) — Official low-friction way to prototype Dynamic Maps, Photorealistic 3D Maps, Places UI and Weather. _(@GMapsPlatform)_
- [UK Property Insight public API](https://x.com/ukhpinfo/status/2097235890489688397) — Property-data API with possible value for housing research. Coverage, licensing and update frequency are unchecked. _(@ukhpinfo)_
- [MDBList API](https://api.mdblist.com/) — Media-metadata API reference.
- [Open-source lightweight Postman alternative](https://x.com/Amank1412/status/2034207341697212885) — Low-overhead API client with no mandatory account. _(@Amank1412)_
- [Optimizing Hyperliquid EIP-712 order signing](https://www.research.hangukquant.com/p/optimising-the-hyperliquid-python) — HangukQuant caches static typed-data hashes and moves secp256k1 work from Python into a C-backed library; a 1,000-iteration local benchmark reports roughly 2.4–2.6 ms falling to 0.08–0.09 ms. Author-reported figures, and the implementation sits in a subscriber wrapper, so audit signature equivalence, nonce handling, failure behaviour and target-hardware latency independently. Exchange background: [[Hyperliquid]]. _(@HangukQuant)_
- [Machine Payments Protocol services](https://mpp.dev/services) — Protocol and service-directory reference for machine payments.
- [WalletConnect React App](https://react-app.walletconnect.com/) — WalletConnect's React integration test surface.

## Hardware, research models and simulation

- [Heaviside electromagnetism foundation model](https://x.com/_i_am_arya/status/2038993003579347247) — Research preview applying learned physics to rapid inverse electromagnetic design in an interactive sandbox. _(@_i_am_arya)_
- [Aleph non-invasive 3D brain imaging](https://x.com/alephneuro/status/2070183632132845995) — Research-lab reference for high-resolution volumetric brain imaging from outside the skull and the interface work it may enable. _(@alephneuro)_
- [Data Center networking simulator](https://x.com/chiefofautism/status/2039649697581666466) — Low-cost game that teaches racks, servers, cabling, traffic flow and bottleneck diagnosis visually. _(@chiefofautism)_
- [In-browser electronic circuit simulator](https://x.com/eyishazyer/status/2037495049328750629) — Browser utility for building and immediately testing circuits. _(@eyishazyer)_
- [Kame open-source quadruped robot](https://x.com/sciencegirl/status/2039953915207200928) — Compact 3D-printable robotics project with animal-like locomotion. _(@sciencegirl)_
- [OpenTools Studio printer](https://x.com/rafaelcaricio/status/2102031482566955116) — Enthusiastic product lead for [OpenTools Studio](https://www.opentools.studio/). A product post, not a review; the printer design, bill of materials, build difficulty and safety are unverified. Context: [[3D Printing and Digital Fabrication]]. _(@rafaelcaricio)_
- [Oxide 3D Explorer](https://explorer.oxide.computer/) — Oxide Computer's 3D systems and hardware explorer.

## Links with little context

- [citrini-setup repository](https://github.com/fightingentropy/citrini-setup) — Private repository under the fightingentropy GitHub account. An anonymous 404 is not evidence that the project is dead.
- [workbox.sh](https://workbox.sh/) — Small live utility; the note does not say what its recurring job does.
- [Spectrum Library v1.4.6](https://x.com/Jdr8245Jhon/status/2101431367410041230) — Image-only post linking to the [Spectrum Library 1.4.6 GitHub release](https://github.com/Phoenixx1202/Spectrum-Library/releases/tag/1.4.6). Its purpose cannot be established from the post; read the release notes before running any binary. _(@Jdr8245Jhon)_

## Related

[[X-Bookmarks]] · [[Developer Resources]] · [[Digital Security]] · [[Omarchy]] · [[Omarchy iCloud Photos]] · [[Helium Browser]] · [[3D Printing and Digital Fabrication]] · [[Evergreen Lessons from X - September 2026]] · [[AI Agents]] · [[Grok Bot]] · [[Hyperliquid]] · [[Developer Tool Evaluation Map]] · [[Tools & Software]]
