---
title: Bookmarks - Developer Tools
type: source
domain: dev
summary: "Saved developer tools and posts by theme: hosting, networking, browsers, Omarchy, macOS utilities, coding agents, local AI, voice, graphics and APIs."
tags: [bookmarks, dev, ai]
related:
  - X-Bookmarks
  - Developer Resources
  - Digital Security
  - Omarchy
  - AI Agents
sources:
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - bookmarks/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
  - snapshots/1790106580663-f31d8b54f166/bookmarks/Developer Tools.md
created: '2026-09-22'
updated: '2026-10-17'
review_status: archive
---

# Bookmarks - Developer Tools

Developer links saved from X and the web: hosting and self-hosting, networking and privacy, browsers, Linux on Apple hardware, macOS utilities, coding agents, local AI, voice, web graphics and data APIs. Saved posts and tools, described from their notes; the claims are the authors' own. The lasting lessons are pulled together in [[Evergreen Lessons from X]].

## Engineering lessons

- [Review production software through failure cases](https://x.com/GohilHardy/status/2103760572835938540) — Checklist: for deadlocks, leaks, N+1 queries, stale reads and failed releases, name an owner, a symptom and a rollback. _(@GohilHardy)_
- [Cloudflare's DNS-cache memory optimization](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/) — Immutable slices and compact offsets saved about 100 TB of memory; match data layout to real mutability. Found via [a repost](https://x.com/IntCyberDigest/status/2093136301516046424).
- [Zustand for client state, TanStack Query for server state](https://x.com/fyzanshaik/status/1981413664378011818) — Frontend rule: give each state tool the one job it is good at. _(@fyzanshaik)_
- [Peer-to-peer transfer app architecture](https://x.com/AravSrinivas/status/2031414450046259433) — Reference for a WebRTC file-transfer app: DTLS, chunking and signalling. _(@AravSrinivas)_
- [Browser-hosted Windows 3.11 virtual LAN](https://x.com/levelsio/status/2068817152317288823) — Windows 3.11 sessions in the browser, joined through a virtual NE2000 adapter and a WebSocket Ethernet hub. _(@levelsio)_

## Cloudflare, hosting and self-hosting

- [Cloudflare as an automation and deployment platform](https://x.com/MitchellKeller_/status/2095576450791346626) — Map of Workers, databases, email, scraping, deployments and schedules as one developer platform. _(@MitchellKeller_)_
- [Cloudflare AI Gateway](https://x.com/_ashleypeacock/status/2023457563434487948) — Routing, failover, caching, analytics and rate limiting in front of model APIs. _(@_ashleypeacock)_
- [Cloudflare crawl endpoint](https://x.com/CloudflareDev/status/2031488099725754821) — API that extracts a whole site as HTML, Markdown or JSON. _(@CloudflareDev)_
- [Cloudflare Email Service migration checklist](https://x.com/levelsio/status/2053482525780008997) — Audit every send, use one provider adapter, import the [suppression list](https://x.com/levelsio/status/2053489575423557653), and canary low-stakes mail first. _(@levelsio)_
- [Cloudflare Email Service REST API](https://developers.cloudflare.com/email-service/api/send-emails/rest-api/) — Official send API; see also [pricing](https://developers.cloudflare.com/email-service/platform/pricing/), [delivery events](https://developers.cloudflare.com/email-service/platform/event-subscriptions/) and the [changelog](https://developers.cloudflare.com/changelog/product/email-service/).
- [Lean self-hosted web stack](https://x.com/levelsio/status/2052734824541016107) — Ubuntu, Nginx, cron, SQLite, vanilla code, Cloudflare Tunnel and R2, Tailscale and a cheap Hetzner VPS. _(@levelsio)_
- [VPS firewalling with Cloudflare and Tailscale](https://x.com/levelsio/status/2019058602707681593) — Allow HTTPS only from Cloudflare and SSH only over a private Tailscale subnet. _(@levelsio)_
- [Oracle Cloud Always Free compute](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm) — Free Ampere A1 allowance of 2 OCPUs and 12 GB RAM; idle instances can be reclaimed. Found via [Ian's post](https://x.com/keywordian/status/2092724783125262508).
- [Coolify](https://coolify.io/) — Self-hosted deployment platform; the 4.3 [release post](https://x.com/coolifyio/status/2087495682978468125) announces a redesigned interface.
- [Upstash Redis Search](https://x.com/upstash/status/2032031432428650961) — Managed, low-latency, type-safe search on Upstash Redis. _(@upstash)_
- [Vercel geolocation headers demo](https://x.com/shuding/status/2034429894642516216) — Pattern for small location-aware web tools built on Vercel's geolocation headers. _(@shuding)_
- [Crabbox](https://crabbox.sh/) — Leases remote machines for a local edit-and-run loop, with file sync, TTL and spend limits; not a security sandbox.
- [Swift and Cloudflare trip-planner agent](https://x.com/fayazara/status/2098690157209907543) — Native agent design: Swift client, Hono Worker, browser tooling, Durable Objects and R2. _(@fayazara)_

## Networking, remote access and privacy

Security background lives in [[Digital Security]].

- [macOS Screen Sharing over Tailscale](https://x.com/stolinski/status/2095669413639024996) — Turn on Screen Sharing, then open `vnc://hostname` from Finder's Connect to Server. _(@stolinski)_
- [Tailscale identity-aware services](https://x.com/Tailscale/status/2024487918123843962) — Named internal services, tsnet, Kubernetes support and observability. _(@Tailscale)_
- [Travel device as a frontend to home compute](https://x.com/ashen_one/status/2103757218621653040) — Run heavy jobs at home and connect remotely; [Tailscale SSH docs](https://tailscale.com/docs/reference/ssh-over-tailscale) cover the access side. _(@ashen_one)_
- [Slim local HTTPS and tunnel tool](https://x.com/kamrify/status/2030259549798584798) — Local HTTPS, development domains and public sharing of localhost. _(@kamrify)_
- [Cloudflare malware-filtering DNS](https://x.com/lucataco/status/2094063782628577631) — Point a home router at `1.1.1.2` and `1.0.0.2` to block known malicious domains; not an antivirus. _(@lucataco)_
- [Privacy is several separate layers](https://x.com/cyber_razz/status/2103807409395233170) — A VPN does not hide browser, account or WebRTC signals; a [second post](https://x.com/schmidt1024/status/2103300207857353043) says the same. _(@cyber_razz)_
- [MDN: RTCIceCandidate address](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/address) — How WebRTC candidates expose addresses; relay-only ICE is the application-side fix.
- [Cloudflare: DNS over TLS](https://www.cloudflare.com/learning/dns/dns-over-tls/) — Encrypted DNS hides lookups in transit, not all traffic or identity signals.
- [Mullvad exit-IP fingerprinting](https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/) — Deterministic exit IPs collapsed 3,650 WireGuard keys into 284 combinations; Mullvad has since scrambled them.
- [PS5 hardware jailbreak](https://x.com/GodSon83/status/2095675020270022974) — Post about a hardware-level PS5 exploit said to rip games and run emulators. _(@GodSon83)_
- [Removing Claude content-credential metadata](https://x.com/guillaumemeyer/status/2095207287392501986) — Tool that strips content credentials from Claude files; provenance metadata does not survive ordinary transforms. _(@guillaumemeyer)_
- [Instagram private-graph analyser](https://x.com/akaclandestine/status/2096556432908791953) — Project that infers interactions with private Instagram accounts; kept as a privacy-risk reference. _(@akaclandestine)_
- [Magika](https://github.com/google/magika) — Google's open-source tool that detects file type from bytes rather than extensions, with CLI and language bindings.
- [Astra reverse-engineers Wind Waker for a phone](https://x.com/IsaakMo/status/2097457853921640880) — Coding demo reverse-engineering a GameCube game to play on mobile. _(@IsaakMo)_
- [Goose WHOOP 5.0 prototype](https://github.com/b-nnett/goose) — Archived developer alpha that read a WHOOP 5.0 over local Bluetooth.

## Browsers and browser automation

- [Obscura Rust headless browser](https://x.com/RodmanAi/status/2094784063576113434) — [Obscura](https://github.com/h4ckf0r0day/obscura) is an open-source Rust automation browser with CDP and Playwright/Puppeteer compatibility. _(@RodmanAi)_
- [Apple WebPage headless browser](https://x.com/nathanborror/status/2029011325205233769) — Native headless browsing on Apple platforms, useful for Mac automation. _(@nathanborror)_
- [agent-browser Chrome auto-connect](https://x.com/ctatedev/status/2032905426631598324) — The command and environment flag for attaching an agent to a running Chrome. _(@ctatedev)_
- [Browser Harness](https://github.com/browser-use/browser-harness) — MIT harness connecting an LLM to Chrome over CDP; the agent writes its own helpers as it goes.
- [Helium Browser TLS splitting test](https://x.com/uwukko/status/2088882137877663921) — Helium's developer asks users on censored networks to test ClientHello splitting; a [later update](https://x.com/uwukko/status/2095077590994149563) clarifies the debugging warning. _(@uwukko)_
- [Helium Browser 0.17.2](https://x.com/cyyynthia_/status/2101259480981758225) — Release adding CNAME uncloaking, Global Privacy Control and lazy restore; see [Helium's site](https://helium.computer/). _(@cyyynthia_)_
- [Sweet Cookie and Oracle CLI updates](https://x.com/steipete/status/2030478956646834590) — A browser-cookie utility and a model-oracle CLI. _(@steipete)_

## Omarchy and Linux on Apple hardware

Background in [[Omarchy]].

- [Omarchy](https://github.com/basecamp/omarchy) — Basecamp's opinionated Arch Linux and Hyprland setup; see the [Quattro release](https://x.com/tobi/status/2088333047024202115) and [Jorge Manrubia's pitch](https://x.com/jorgemanru/status/2085371786409980026).
- [Omarchy on macOS via Containerization](https://x.com/athasdev/status/2088688906657005726) — Experimental packaging through Apple Containerization and Rosetta, streamed into Athas Capsule. _(@athasdev)_
- [mlx-omarchy compatibility report](https://x.com/JoshuaSWarren/status/2095268521391354205) — Says 94.6% functional parity with macOS MLX, with three Vulkan gaps left. _(@JoshuaSWarren)_
- [Omarchy adoption scepticism](https://x.com/ChefExecOfficer/status/2093574043769479351) — Counterpoint: Omarchy takes credit for Linux, Arch and Hyprland work, and its YouTube push looks inorganic. _(@ChefExecOfficer)_
- [Omarchy on Apple hardware](https://x.com/OmarchyMac/status/2098384849770037280) — Linux-on-Mac project pitched around local AI. _(@OmarchyMac)_
- [Omarchy iCloud Photos](https://x.com/jankeesvw/status/2101977870289527284) — [Open-source native client](https://github.com/jankeesvw/omarchy-icloud-photos) for recent iCloud photos on Omarchy, with Live Photos and HDR video. _(@jankeesvw)_
- [Omarchy Pods](https://github.com/thisisgm/omarchy-pods) — AirPods controls on Linux; [announcement](https://x.com/stevenharms/status/2089539284508561623) and [repository post](https://x.com/stevenharms/status/2089539319908495584). _(@stevenharms)_
- [Touch ID on Linux through t1bridge](https://x.com/niconistal/status/2097906524559384816) — User report of fingerprint login on Linux after removing macOS. _(@niconistal)_
- [LibrePods](https://x.com/HowToPrompt__/status/2068685081900875926) — Open-source AirPods features on Android and Linux: noise control, ear detection, battery and gestures. _(@HowToPrompt__)_

## macOS utilities and virtualization

- [UTM 5.0.5 beta](https://x.com/UTMapp/status/2095033715848265783) — Experimental DirectX 12 for Windows 11 ARM guests; the [release discussion](https://github.com/utmapp/UTM/discussions/7847) notes limited game support. _(@UTMapp)_
- [Apple container](https://x.com/twtayaan/status/2069307717177737658) — Apple's open-source Swift container runtime for Apple silicon. _(@twtayaan)_
- [Space Rabbit](https://github.com/tahul/space-rabbit) — Swift utility that switches macOS Spaces without the animation; [app site](https://space-rabbit.app/), [original post](https://x.com/valeriansaliou/status/2084925453760930033).
- [Remap Command-Space to Show Apps](https://x.com/tmuxvim/status/2085548588403167537) — Disable the Spotlight shortcuts in Keyboard Shortcuts, then assign Command-Space to "Show Apps". _(@tmuxvim)_
- [Reduce Spotlight indexing on large repos](https://x.com/billyjhowell/status/2023801833307652385) — Exclude big repository folders from Spotlight when indexing eats resources. _(@billyjhowell)_
- [fix-my-mic](https://x.com/yigitkonur/status/2025073457181196454) — Keeps the Mac's built-in microphone selected when AirPods connect. _(@yigitkonur)_
- [Textream offline teleprompter](https://x.com/fkadev/status/2020452350385635552) — macOS teleprompter using on-device speech recognition, fully offline. _(@fkadev)_
- [Markdown viewer and skills editor](https://x.com/Shpigford/status/2034365122638954924) — Two open-source macOS utilities. _(@Shpigford)_
- [Ports CLI](https://x.com/larsencc/status/2039923439159648488) — Finds and cleans up orphaned processes holding development ports. _(@larsencc)_

## Coding agents and Codex

Broader agent material is in [[AI Agents]].

- [CodexBar](https://x.com/steipete/status/2022407067122725335) — Utility that tracks Codex token usage. _(@steipete)_
- [Codex permission profiles](https://x.com/thsottiaux/status/2071636285807059315) — Reusable least-privilege profiles: filesystem rules, per-domain network access and fail-closed allowlists. _(@thsottiaux)_
- [Codex Remote Control setup](https://x.com/iScienceLuvr/status/2096752682455503117) — Pairs a remote machine with the Codex mobile app. _(@iScienceLuvr)_
- [Native iPhone client on Codex app-server](https://x.com/SIGKITTEN/status/2025073817467416983) — Proof of concept running Codex inside a native iPhone app. _(@SIGKITTEN)_
- [Codex iOS preview and hot reload](https://x.com/kedytcom/status/2067190011192078535) — The Build iOS Apps plugin runs the app, opens SwiftUI previews and hot-reloads edits inside Codex. _(@kedytcom)_
- [CLI design layer for AI-generated code](https://x.com/denicmarko/status/2031690682398908753) — Applies one visual system to generated interfaces. _(@denicmarko)_
- [React Grab](https://x.com/aidenybai/status/2029603067927351506) — Select a DOM element and hand the change request to a coding agent. _(@aidenybai)_
- [Prompts, code and previews archive](https://x.com/LexnLin/status/2032981438748873086) — Repository keeping builds next to the prompts that made them. _(@LexnLin)_
- [ComfyUI App Mode](https://x.com/hellorob/status/2031423137045176698) — Hides the node graph behind a simple app interface. _(@hellorob)_
- [OpenGrok](https://github.com/OnlyTerp/opengrok) — Unofficial patch routing Grok Bot through subscription, API or local models; [announcement](https://x.com/OnlyTerp/status/2093077239873069058). _(@OnlyTerp)_
- [Blueprint AI hardware planning](https://x.com/Sajeel_Purewal/status/2069099646308220973) — Turns a hardware idea into a proposed build plan. _(@Sajeel_Purewal)_

## Local AI, models and parsing

- [Local semantic photo search](https://x.com/measure_plan/status/2033941877750436037) — Recipe using SmolVLM, RF-DETR, ChromaDB and Streamlit. _(@measure_plan)_
- [TurboVec](https://github.com/RyanCodrai/turbovec) — Local Rust and Python vector index on TurboQuant, with 16× compression at two bits.
- [DDTree-MLX](https://github.com/humanrouter/ddtree-mlx) — Tree-based speculative decoding for MLX; about 1.5× faster on code, no gain on creative prose.
- [LiteParse v2](https://github.com/run-llama/liteparse) — Rust PDF parser with Python, Node and WASM packages.
- [Reverse-engineered Apple Neural Engine](https://x.com/ronaldmannak/status/2028560995875168292) — Research on ANE efficiency and CoreML overhead. _(@ronaldmannak)_

## Audio, voice and media

- [Talkify](https://github.com/tornikegomareli/Talkify) — Free open-source macOS dictation on Apple's on-device speech models; [site](https://usetalkify.app/), [post](https://x.com/tornikegomareli/status/2088524464224919700). _(@tornikegomareli)_
- [OpenWhisper](https://x.com/0xrwu/status/2022356207890280486) — Open-source local Mac dictation that keeps speech off third-party services. _(@0xrwu)_
- [FluidVoice](https://github.com/altic-dev/FluidVoice) — Open-source local dictation app.
- [Voxtral real-time WebGPU transcription](https://x.com/xenovacom/status/2031772745474707532) — Private multilingual speech recognition running in the browser. _(@xenovacom)_
- [Fish Audio S2](https://x.com/FishAudio/status/2031411140820152560) — Open-source low-latency multilingual text-to-speech with emotion control. _(@FishAudio)_
- [Inworld Mini and Max TTS](https://x.com/replicate/status/2031792388453388373) — Low-latency agent voices and expressive speech models. _(@replicate)_
- [Open-source speech-to-speech stack](https://x.com/Thom_Wolf/status/2072825424800006350) — Hugging Face and Cerebras's forkable live-voice demo with models, code and a write-up. _(@Thom_Wolf)_
- [Grok speech APIs](https://docs.x.ai/developers/model-capabilities/audio/voice) — xAI docs for transcription, multi-speaker handling and speech generation.
- [FFmpeg skill v0.12.0](https://x.com/kebura_P/status/2096964158994755604) — Adds cropping, stabilisation, subtitles, output checks and protection against overwriting source media. _(@kebura_P)_
- [dav2d](https://code.videolan.org/videolan/dav2d) — VideoLAN's early open-source AV2 decoder, based on dav1d; not yet for production.
- [lawn.video](https://x.com/theo/status/2026794317197849001) — Open-source collaborative video review with simple pricing. _(@theo)_
- [Torflix](https://github.com/surajssc1232/torflix) — Rust terminal app that streams torrents through mpv or VLC; [original post](https://x.com/surajkhahai/status/2086417384181776734).
- [Invidious](https://x.com/marcusyul/status/2094089513286951024) — Spanish overview of the self-hostable, ad-free YouTube frontend; privacy depends on the instance. _(@marcusyul)_
- [Fastpotify](https://x.com/paolino/status/2093659889339888126) — Native Rust Spotify client; see its [releases](https://github.com/crmne/fastpotify/releases). _(@paolino)_

## Web graphics and creative coding

- [Canvas 2D faux-3D globe](https://x.com/wescld/status/2031022730036805998) — Precomputed point clustering plus projection interpolation. _(@wescld)_
- [Circling-arrow creative coding](https://x.com/junkiyoshi/status/2032745435543343162) — openFrameworks motion study with source. _(@junkiyoshi)_
- [Client-side GLTF to KTX2 optimizer](https://x.com/iced_coffee_dev/status/2031368335103762438) — Browser tool that shrinks assets and GPU memory with KTX2 textures. _(@iced_coffee_dev)_
- [Compact generative Processing sketch](https://x.com/yuruyurau/status/2031366569448886284) — Code-golfed procedural drawing. _(@yuruyurau)_
- [Composable WebGPU shaders without GLSL](https://x.com/abduzeedo/status/2031856827189940237) — Cross-framework GPU effects for web interfaces. _(@abduzeedo)_
- [JSON renderer for React Three Fiber](https://x.com/ctatedev/status/2032119565736374537) — Catalog-driven renderer for interactive 3D scenes. _(@ctatedev)_
- [MeshBVH 3D wiping effect](https://x.com/auxdesigner/status/2032608899195613416) — Three.js technique with a model reference. _(@auxdesigner)_
- [WebGL energy shield](https://x.com/QingQ77/status/2031146010031043049) — Open-source R3F and GLSL shield with grid, impact, health and bloom effects. _(@QingQ77)_
- [p5.brush 2.0](https://x.com/acamposuribe/status/2032483899020878335) — Brush, hatching and natural-fill library for p5.js. _(@acamposuribe)_
- [3D onion-skinning CodePen](https://x.com/ericvanholtz/status/2031628808332230829) — Stacked image planes, with source. _(@ericvanholtz)_
- [TypeGPU Jelly Slider tutorial](https://x.com/swmansion/status/2031407650424971696) — Beginner graphics article building a physics-based slider. _(@swmansion)_
- [Anime.js Three.js adapter](https://x.com/JulianGarnier/status/2069100438301856024) — Anime.js 4.5 animates 3D transforms, material colours, instanced meshes and staggers. _(@JulianGarnier)_
- [Houdini FLIP rotation tutorial](https://x.com/Shijuwei/status/2031292101363892476) — Fluid-simulation technique with a project file. _(@Shijuwei)_

## 3D reconstruction and spatial AI

- [Holi-Spatial](https://x.com/10027lifuguan/status/2031266372400095394) — Pipeline joining video Gaussian splatting with semantic labels. _(@10027lifuguan)_
- [LASER](https://x.com/TianyeJerryDing/status/2031455793996857502) — CVPR work on training-free, kilometre-scale streaming 3D reconstruction. _(@TianyeJerryDing)_
- [LoGeR](https://x.com/junyi42/status/2031024111716331759) — Hybrid memory for long-context, kilometre-scale 3D reconstruction. _(@junyi42)_
- [Gaussian splatting in C++](https://x.com/tom_doerr/status/2039400710962356575) — Open-source native splat implementation. _(@tom_doerr)_
- [Spark++](https://x.com/alightinastorm/status/2031187607858577918) — WebGPU Gaussian-splat renderer with a demo and repository. _(@alightinastorm)_
- [Monid and Suzanne 3D models](https://x.com/shengkun_ye/status/2069118784678621555) — Workflow that lets agents generate 3D models. _(@shengkun_ye)_

## App frameworks, iOS and Android

- [Electrobun](https://x.com/taylordotcat/status/2023705018616922338) — TypeScript desktop runtime between Electron and Tauri, with typed RPC and small updates. _(@taylordotcat)_
- [X web interface on Base UI](https://x.com/colmtuite/status/2082075686580146249) — Clip of X's web app built on [Base UI](https://base-ui.com/), an unstyled, accessible React component library. _(@colmtuite)_
- [Beautiful UI](https://beautiful-ui-five.vercel.app/) — Gallery of polished web-interface treatments, found via a [post](https://x.com/suraj_sharma14/status/2088891006015930506).
- [tldraw](https://www.tldraw.com/) — Whiteboard, diagramming and canvas tool.
- [Flighty rebuilt with Expo](https://x.com/nater02/status/2079180521427308791) — A demanding iOS interface recreated in Expo with real native controls. _(@nater02)_
- [App Store Connect CLI](https://x.com/rudrank/status/2023833941443272946) — Automates Apple release and App Store workflows. _(@rudrank)_
- [Rork Companion](https://x.com/rork/status/2024992004007231512) — Installs test iOS apps without a paid developer account. _(@rork)_
- [iOS-remote](https://x.com/HowToPrompt__/status/2068945092115898827) — Controls a USB-connected iPhone from a browser, built on WebDriverAgent. _(@HowToPrompt__)_
- [SMS Gateway for Android](https://x.com/HowToPrompt__/status/2069816991943401633) — Exposes a phone's SIM through REST APIs and webhooks. _(@HowToPrompt__)_
- [YouTube Plus for iOS](https://x.com/senumy_ipa/status/2099730938662154664) — Unofficial sideloaded YouTube build with downloads and Picture in Picture. _(@senumy_ipa)_

## Data, scraping and APIs

- [Discord archive crawler into SQLite](https://x.com/steipete/status/2030371936405188776) — Turns a large Discord corpus into a searchable local database. _(@steipete)_
- [Real-time Telegram scraper](https://x.com/tom_doerr/status/2031291567944691821) — Collects Telegram messages and media with live updates. _(@tom_doerr)_
- [Scrapling](https://x.com/D4Vinci1/status/2027241426849800651) — Scraper with a stealth browser, Cloudflare handling and MCP support. _(@D4Vinci1)_
- [xint](https://x.com/nyk_builderz/status/2022996371922649192) — Terminal tool for X search, bookmark analysis, trends and Grok pipelines. _(@nyk_builderz)_
- [birdclaw](https://x.com/steipete/status/2068965200343224367) — Fast reader for searching an X archive: feeds, bookmarks, links and mentions. _(@steipete)_
- [gogcli](https://x.com/steipete/status/2022879695625199937) — CLI for Google Workspace: Apps Script, Forms, Docs, Sheets, Gmail and Drive. _(@steipete)_
- [Google Maps Demo Key](https://x.com/GMapsPlatform/status/2039727056137650463) — Official quick key for prototyping Dynamic Maps, 3D Maps, Places UI and Weather. _(@GMapsPlatform)_
- [UK Property Insight API](https://x.com/ukhpinfo/status/2097235890489688397) — Public UK property-data API. _(@ukhpinfo)_
- [MDBList API](https://api.mdblist.com/) — Media-metadata API.
- [Lightweight Postman alternative](https://x.com/Amank1412/status/2034207341697212885) — Open-source API client with no required account. _(@Amank1412)_
- [Optimizing Hyperliquid order signing](https://www.research.hangukquant.com/p/optimising-the-hyperliquid-python) — Cached typed-data hashes and C-backed secp256k1 cut signing from about 2.5 ms to 0.09 ms. Exchange: [[Hyperliquid]].
- [Machine Payments Protocol services](https://mpp.dev/services) — Directory of services on the machine-payments protocol.
- [WalletConnect React App](https://react-app.walletconnect.com/) — WalletConnect's React integration test app.

## Hardware, research and simulation

- [Heaviside](https://x.com/_i_am_arya/status/2038993003579347247) — Electromagnetism foundation model for fast inverse design in an interactive sandbox. _(@_i_am_arya)_
- [Aleph brain imaging](https://x.com/alephneuro/status/2070183632132845995) — Lab building high-resolution 3D brain imaging from outside the skull. _(@alephneuro)_
- [Data Center networking simulator](https://x.com/chiefofautism/status/2039649697581666466) — Cheap game teaching racks, cabling, traffic flow and bottlenecks. _(@chiefofautism)_
- [In-browser circuit simulator](https://x.com/eyishazyer/status/2037495049328750629) — Build and test electronic circuits in the browser. _(@eyishazyer)_
- [Kame quadruped robot](https://x.com/sciencegirl/status/2039953915207200928) — Small open-source, 3D-printable robot with animal-like walking. _(@sciencegirl)_
- [OpenTools Studio printer](https://x.com/rafaelcaricio/status/2102031482566955116) — Enthusiastic post about the [OpenTools Studio](https://www.opentools.studio/) printer; see [[3D Printing and Digital Fabrication]]. _(@rafaelcaricio)_
- [Oxide 3D Explorer](https://explorer.oxide.computer/) — Oxide Computer's interactive 3D explorer of its hardware.

## Other saved links

- [citrini-setup (private repository)](https://github.com/fightingentropy/citrini-setup)
- [workbox.sh](https://workbox.sh/)
- [Spectrum Library v1.4.6 post](https://x.com/Jdr8245Jhon/status/2101431367410041230)
- [Spectrum Library 1.4.6 release](https://github.com/Phoenixx1202/Spectrum-Library/releases/tag/1.4.6)
