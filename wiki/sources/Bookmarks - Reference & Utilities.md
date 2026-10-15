---
title: Bookmarks - Reference & Utilities
type: source
domain: dev
sources:
  - snapshots/1790804551519-6d896f5ea773/bookmarks/Reference & Utilities.md
  - bookmarks/Reference & Utilities.md
  - clippings/bookmark-updates-2026-09-22/Reference & Utilities.md
  - snapshots/1790106580663-6c1ce06cff29/bookmarks/Reference & Utilities.md
related:
  - Evergreen Lessons from X - September 2026
  - X-Bookmarks
  - Digital Security
  - Developer Resources
  - Personal Knowledge Management
  - Technology Critique
  - Tools & Software
  - Bookmarks - Developer Tools
  - Bookmarks - Design & Frontend
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - bookmarks
  - september-2026
  - reference
  - utilities
  - privacy
  - accounts
  - media
  - security
  - directories
review_status: archive
summary: "Saved reference links and small utilities: account-security checklists, privacy services, web tools, dashboards, interactive explainers and a reading queue."
---

# Bookmarks - Reference & Utilities

This category holds practical reference links and small utilities saved from X and the browser bookmark bar. The strongest material is the account-security set (Karpathy's digital-hygiene checklist, Apple's iPhone theft protections, a family phishing checklist), followed by open intelligence dashboards, UK public-data explorers and interactive web explainers. Recurring sources include Nav Toor (@heynavtoor), levi (@leviackermanft) and @TipOfTheBanana.

## Accounts, devices and home network

Checklists for passwords, MFA, phones, TVs and home hardware. Settings menus change between software versions and regions; check them against current vendor documentation. The wider topic is [[Digital Security]].

- [Karpathy's digital-hygiene checklist](https://karpathy.bearblog.dev/digital-hygiene/) — Andrej Karpathy's practical layers: unique password-manager credentials, several hardware security keys for critical accounts, random stored answers to security questions, full-disk encryption, fewer IoT devices, encrypted messaging, tracker controls, and keeping personal activity off monitored work devices. Build it around your own threat model and recovery plan; the named products, regional services, legal assumptions and the claimed 1,000-fold risk reduction are his and not universal. _(@karpathy)_
- [iPhone theft-hardening checklist](https://support.apple.com/120340) — Apple's support page behind this checklist: turn on Stolen Device Protection and consider "Always", use a strong non-obvious passcode, keep Find My and Send Last Location on, add a trusted recovery contact, review what is reachable from the locked screen, and set the carrier's number-transfer lock or PIN. The [original thread](https://x.com/jaxoncoder/status/2085158362162057638) usefully stresses shoulder-surfing risk, but several of its minute-by-minute attack claims are anecdotal, and its advice to turn off Significant Locations conflicts with Apple's requirement for Stolen Device Protection. Follow Apple and carrier guidance over the thread. _(@jaxoncoder)_
- [Family account-security checklist for automated phishing](https://x.com/EzraJNewman/status/2085348692593115306) — A password manager and unique credentials; passkeys or hardware security keys where available; authenticator-based MFA rather than SMS when practical; prompt updates; and independent verification of unexpected calls, messages, payment requests and recovery prompts, even when the voice or video seems familiar. The post's exact loss totals and its forecast of an imminent attack wave are unsourced; the defensive checklist is the durable part. _(@EzraJNewman)_
- [Proton Pass and Bitwarden as 1Password alternatives](https://x.com/uwukko/status/2095452240639074312) — A comparison lead stressing free tiers, open-source clients and lower prices. It does not establish feature parity: compare family sharing, passkeys, emergency access, SSH keys, platform integration, export, recovery, audits and support on the current plans before migrating. _(@uwukko)_
- [Disabling Apple Intelligence in iOS 27](https://x.com/mysk_co/status/2099460590649446549) — Privacy-focused instructions that use Screen Time restrictions to turn off Writing Assistance; menus depend on the installed iOS build. _(@mysk_co)_
- [Samsung Smart TV automatic-content-recognition control](https://www.samsung.com/us/support/answer/ANS10010616/) — Samsung's support page says its optional ACR feature is enabled through "Viewing Information Services" and generates signatures about viewed content. Review and withdraw that consent in the TV's Terms or Privacy settings if unwanted; exact menus and separate advertising choices vary by model, software and region. _(via @heynavtoor)_
- [usbliter8 article](https://ps.tc/pages/blog-usbliter8.html) — Hardware and security article on the ps.tc blog, kept for reference.
- [UniFi Express 7 whole-home Wi-Fi reference](https://x.com/Ubiquiti/status/2095153222990401894) — Ubiquiti's product demonstration combining Wi-Fi 7, 10-gigabit networking, mesh placement and controller features. A home-network product lead; it is the vendor's own demo, so check independent radio performance, wired-backhaul needs, coverage geometry, thermal behaviour, support and total hardware cost before buying. _(@Ubiquiti)_

## Privacy services and identity risks

Tools and examples about anonymity, disposable identities and identity misuse. Vendor privacy claims are claims, not audits.

- [Why VPNs are encrypted tunnels, not merely products](https://x.com/brivael/status/2066598980335890939) — A VPN is an encrypted-routing primitive that anyone can self-host with WireGuard or OpenVPN on an ordinary server, so blocking named commercial providers is different from blocking the underlying technique. _(@brivael)_
- [nadanada VPN and eSIM](https://nadanada.me/) — Pay-as-you-go VPN and eSIM, positioned as a privacy and travel option. Its no-log and no-KYC statements are vendor claims.
- [Temp Number](https://temp-number.com/) — Disposable phone-number service. Do not use it for any account whose recovery, privacy or security matters.
- [KYC identity-misuse post](https://x.com/ImmortalXelf/status/2098383180646523065) — A post offering alleged identity details and images for bypassing KYC checks. Kept only as a fraud and privacy-risk reference; none of the exposed personal data is reproduced in this wiki. Never use it for impersonation or account verification. _(@ImmortalXelf)_
- [Reverse-image-search story](https://x.com/zoomerfemales/status/2097459473136664865) — A widely circulated image whose subject stayed unidentified even though reverse image search was available. A reminder that provenance tools are for checking where an image came from, not permission to identify or surveil a private person. _(@zoomerfemales)_

## Bookmarks and personal data

Tools for keeping saved links and personal exports usable. See [[Personal Knowledge Management]] for the wider system and [[X-Bookmarks]] for the main X bookmark archive.

- [Shiori bookmark manager with MCP and CLI](https://x.com/brian_lovin/status/2032979339604857170) — A bookmark archive with content extraction, search, apps, an API, a CLI and agent access over MCP. _(@brian_lovin)_
- [Official-API X bookmark endpoint](https://x.com/iannuttall/status/2022550096873771282) — A service that exposes X bookmarks as an API through the official X API, pitched as reducing ban risk. _(@iannuttall)_
- [Tool for resurfacing saved X bookmarks](https://x.com/chongdashu/status/2031994338822049796) — A utility for turning forgotten bookmarks into a usable archive. _(@chongdashu)_
- [Google Takeout backup and local RAG workflow](https://x.com/0xSero/status/2032738207100490001) — A practical procedure for personal-data resilience: back up your Google data with Takeout and query it offline with local retrieval. _(@0xSero)_

## Web utilities and directories

Small single-purpose web tools, plus directories that point to many more. For developer tooling see [[Developer_Resources|Developer Resources]] and [[Bookmarks - Developer Tools]].

- [SearXNG instance directory](https://searx.space/) — Directory of public SearXNG metasearch instances. A durable entry point for choosing one, rather than bookmarking a single instance that may break.
- [Cloudflare Drop](https://www.cloudflare.com/drop/) — File-transfer utility from Cloudflare.
- [Authorized — authorization-letter generator](https://authorized.xultra.fun/) — Client-side tool that produces an authorization letter as a PDF. The generated letter does not itself create legal authority.
- [Aether](https://aether.bar/) — Utility entry point; the address currently redirects to aether.ist.
- [Unidentified free tool](https://x.com/SwamiMalode/status/2096651240075825292) — A bare link praised as a surprisingly free utility; what it points to is still unresolved. Check the destination, ownership, privacy policy, limits and business model before using it. _(@SwamiMalode)_
- [afkarxyz profile page](https://afkarxyz.fyi/) — Thin personal landing page pointing to afkarxyz's GitHub profile, kept as a reference.
- [Open-source SaaS alternatives directory](https://x.com/xoaanya/status/2029254060243841237) — A broad starting point for finding self-hostable substitutes across common software categories. _(@xoaanya)_
- [Design Engineer Tools directory](https://x.com/remvze/status/2032795865375555767) — A curated list of utilities for web-focused design engineering. _(@remvze)_
- [Creative inspiration website directory](https://x.com/beechinour/status/2031558826672140556) — A high-value list of inspiration sites spanning film, imagery, web, apps, brands, systems and objects. _(@beechinour)_

## Desktop, media and document tools

- [Squoosh](https://squoosh.app/) — Image-compression utility that runs locally.
- [Open-source Screen Studio alternative](https://x.com/denicmarko/status/2032828494288236641) — A cross-platform screen-recording utility. _(@denicmarko)_
- [Pica native macOS font manager](https://pica.joshpuckett.me/) — Native Mac app for custom font collections, OpenType support, logo and colour-theme previews, one-click activation and watched folders. The official site offers it free; availability and terms can change. _(@joshpuckett)_
- [Fish Audio production-oriented STT](https://x.com/rissa_cao/status/2039382479430459823) — A speech-to-text tool that adds speaker labels, emotion and paralanguage timing, with SRT, VTT or JSON export. _(@rissa_cao)_
- [NVIDIA Nemotron OCR v2](https://x.com/HuggingPapers/status/2039539303152525513) — A multilingual OCR resource that handles text, layout and reading order. _(@HuggingPapers)_

## Dashboards and public data

Live monitors and searchable public datasets. Aggregators are inputs to a view, not proof of neutrality.

- [Crucix local intelligence dashboard](https://x.com/heynavtoor/status/2034034576893612113) — An open-source monitor, run locally, that joins many public geopolitical and market data sources. _(@heynavtoor)_
- [SitDeck live intelligence dashboard](https://x.com/TonySeruga/status/2028835370121773516) — A free, customisable dashboard aggregating a large set of conflict, disaster, transport, cyber, election and market feeds. _(@TonySeruga)_
- [X lists for multi-source live news](https://x.com/Scobleizer/status/2027735733956710586) — Robert Scoble's long-maintained lists of news accounts across multiple perspectives. _(@Scobleizer)_
- [UK Company Radar](https://companyradar.uk/) ([source](https://github.com/mso96/company-radar)) — A dashboard over Companies House data: recent formations, search, SIC-code and regional trends, and paid weekly alerts. The public repository has no explicit software licence, so it is source-available rather than open-source; live availability and filing-derived classifications need checking. _(@msefaoruc)_
- [Hackney Council payment explorer](https://x.com/UKGovscan/status/2068997250559115705) — UKGovscan's searchable Hackney Council dataset: 736,189 payments totalling £8.9 billion, from 2013 to the post's publication. _(@UKGovscan)_
- [Humanoid Atlas industry database](https://x.com/JulianSaks/status/2033616977663545817) — A structured reference for humanoid-robot OEMs, suppliers and dependencies. _(@JulianSaks)_
- [London Startup Map](https://londonstartupmap.com/) — Directory of London startups. It sometimes rate-limits visitors; that does not mean the site is dead.

## Interactive explainers and web exhibits

Pages worth opening both for what they teach and for how they present it.

- [Interactive explanation of JPEG compression](https://x.com/SophieLWang/status/2032560128906420445) — A strong educational resource on how image compression works. _(@SophieLWang)_
- [Sine and cosine as rotating-circle projections](https://x.com/TheMathFlow/status/2070774628713451694) — A compact visual explanation: the two waveforms are orthogonal shadows of one rotating point. _(@TheMathFlow)_
- [Human Web museum by Parallel](https://museum.parallel.ai/introduction?era=modern) — Parallel's interactive collection of objects from the web as people built it, from ARPANET to just before generative-AI collaboration became commonplace. Both a technology-history reference and an example of exhibition-style web storytelling. _(via @vamsibatchuk)_
- [UFO.ZIP infinite-canvas document archive](https://www.cosmos.so/archive/ufo-zip/canvas) — A searchable Cosmos canvas that lays out Pentagon UFO-file material spatially rather than as a linear list. A reference for research interfaces and information architecture, not validation of the claims in the documents. _(via @itsjamiecho)_
- [Cool internet things, part 9](https://x.com/jonaasw1/status/2069135333422166044) — Jonas's seven interactive-web references: a digital MoMA gallery, a personal digital home, interface experiments, a self-organising inbox, biological scale, constellation drawing and a Knicks photo mosaic. _(@jonaasw1)_
- [Interactive correlation map of roughly 500 kinks](https://x.com/Aella_Girl/status/2066713306812023238) — Aella's interactive map built from correlations across a large kink survey. Good for exploration; it comes with explicit caveats that a two-dimensional projection loses high-dimensional nuance. _(@Aella_Girl)_

## Streaming and playback

Third-party media apps and add-ons. Treat binaries, manifests, media providers and torrent sources as untrusted until code, permissions, signatures, licences and local copyright rules are checked.

- [PlayTorrio V3 multi-media application](https://x.com/leviackermanft/status/2094236227117453676) — A claimed open-source, cross-platform interface for movies, manga, audiobooks, music, torrents, video-on-demand and Stremio. _(@leviackermanft)_
- [PlayTorrio Stremio add-on manifests](https://x.com/leviackermanft/status/2094240889787060650) — Direct configuration links posted alongside the V3 announcement. They belong with the parent tool and are not an endorsement; each add-on's availability, safety, legality and compatibility can change on its own. _(@leviackermanft)_
- [Stremio on AltStore article](https://blog.stremio.com/stremio-released-on-apple-altstore-for-europe-and-japan/) — Stremio's blog post on its release through Apple AltStore for Europe and Japan. A one-off implementation reference, to retire once acted on.
- [Useful VLC workflows](https://x.com/billiongjgly/status/2031296086023745786) — A concrete checklist of VLC's conversion, repair, capture, analysis, streaming and effects features. Menus vary by version. _(@billiongjgly)_

## Science, food and home

Everyday knowledge with the shaky numbers left out. The two ingredient-label entries are also part of [[Evergreen Lessons from X - September 2026]].

- [Human thermal comfort extends beyond air temperature](https://x.com/JessePeltan/status/1919470705906729320) — Jesse Peltan explains why mean radiant surface temperature, humidity, evaporation and insulation can matter as much as thermostat air temperature for comfort and HVAC load. His heat-loss shares and the claim that doubling insulation halves energy demand are context-dependent intuition, not a substitute for a building-specific load calculation. _(@JessePeltan)_
- [Genomically diverse Drosophila threat-behavior dataset](https://www.nature.com/articles/s41597-025-04724-3) — Scientific Data reports high-resolution behavioural trajectories for roughly 36,600 fruit flies across 105 genotypes in individual and group threat assays, material for genotype–behaviour and social-interaction analysis. It is an animal-model dataset: it does not establish that human personality is genetically fixed, and it does not justify the sharing thread's speculative gene-editing claims. _(via @IterIntellectus)_
- [Recognize carmine and cochineal on ingredient labels](https://x.com/TipOfTheBanana/status/2100362346145501450) — Carmine and cochineal extract are colourants derived from cochineal insects. US rules require their specific names on food ingredient lists, and the FDA explains this exception partly through possible allergic reactions. Useful label literacy for dietary choices; the post's insect counts, lobbying history and blanket health claims are left out. References: [21 CFR 73.100: identity and food labelling](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-73/subpart-A/section-73.100); [FDA consumer colour-additive guidance](https://www.fda.gov/food/color-additives-information-consumers/color-additives-questions-and-answers-consumers). _(@TipOfTheBanana)_
- [Molasses is central to brown sugar's character](https://x.com/TipOfTheBanana/status/2103804906356224076) — Molasses content distinguishes brown sugar's flavour and colour. Manufacturing processes vary, so not every brown sugar is simply white sugar recoloured the same way. Cooking and ingredient knowledge; the post's fixed percentages, calorie comparison and health framing are left out. Reference: [Domino: brown sugar and molasses](https://www.dominosugar.com/brown-sugar). _(@TipOfTheBanana)_
- [Barilla Playlist Timer](https://www.barilla.com/en-us/help-with-pasta-kitchen-tips/how-to-cook-pasta) — Barilla's official page links Spotify playlists whose lengths match the cooking times of its pasta varieties: a playful example of turning media duration into a kitchen utility. Check the time on the packet, and avoid playback settings or ad interruptions that change elapsed time. _(via @Wassup_Cara_Mel)_

## Reading queue and news

Sources still to read, plus everyday news destinations.

- [Curiosity-driven research queue](https://x.com/eagleseyeinc/status/2085441395674820765) — A broad discovery list: the Great Filter, Boltzmann brains, the Library of Alexandria, Gödel's incompleteness theorems, the Antikythera mechanism, the Toba catastrophe, the Dyatlov Pass incident, octopus cognition, pareidolia, the Great Attractor and several popular mysteries. Use it as a queue of search terms, not a coherent syllabus; entries such as the Black Knight satellite and "the Bloop" need especially strong source checking, because popular retellings mix real observations with speculation. _(@eagleseyeinc)_
- [FT — Nazi files and family secrets](https://www.ft.com/content/22295531-bf83-4ba9-9c34-d5f04a73ca9e) — Financial Times article in the reading queue; distil any durable point after reading.
- [Billion Dollar Tweets](https://billiondollartweets.com/) — A hand-curated collection of ideas. Useful if treated as a bounded source rather than another endless queue.
- [Financial Times](https://www.ft.com/) — FT front page; a primary news destination.
- [X](https://x.com/home) — X home timeline; a top-level destination.

## Related

[[X-Bookmarks]] · [[Digital Security]] · [[Developer_Resources|Developer Resources]] · [[Personal Knowledge Management]] · [[Technology_Critique|Technology Critique]] · [[Evergreen Lessons from X - September 2026]] · [[Tools & Software]] · [[Bookmarks - Developer Tools]] · [[Bookmarks - Design & Frontend]]
