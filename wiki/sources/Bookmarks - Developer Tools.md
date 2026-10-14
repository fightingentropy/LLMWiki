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
created: '2026-09-22'
updated: '2026-09-30'
tags:
  - bookmarks
  - september-2026
  - developer-tools
  - browsers
  - macos
  - linux
  - self-hosting
review_status: archive
review_notes: >-
  Source summary and attributed claims. Capture or edit dates do not establish
  factual verification.
summary: >-
  Curated developer tools references, with the complete September capture linked
  below.
---

# Bookmarks - Developer Tools

Latest category capture, **30 September 2026**: **135 structured entries**. The new evergreen-only section below adds 3 distilled knowledge entries; earlier September registers retain their original scope.

22 September update to **132 structured entries** in the Brain category (previous wiki snapshot: 102). This page preserves all **32 added or revised entries**; earlier material remains in the August source and [[X-Bookmarks]]. Counts describe note entries, not unique URLs or X posts.

## Key takeaways

The additions cover browser engines, native media clients, remote access, Cloudflare architecture, property-data tools, and hardware projects.

- [[Helium Browser]] gathers the privacy and release references; [[Omarchy]] now links to [[Omarchy iCloud Photos]].
- Obscura, UTM, Fastpotify, FluidVoice, and FFmpeg workflows are implementation leads with version-specific claims.
- The Swift trip-planner demo joins a native client to Worker services, browser tools, Durable Objects, and R2; it is an architecture example, not a tested application in this wiki.
- OpenTools Studio connects to [[3D Printing and Digital Fabrication]]. Spectrum Library's purpose cannot be established from its image-only bookmark.
- Remote control, content credentials, unofficial application builds, and private-account graph inference belong beside [[Digital Security]].
- Revised Omarchy and Helium entries replace the corresponding earlier summaries while preserving the additional source links.

## Source register

The following annotations are reproduced from the curated Brain notes. Dates record retention or revision, not independent verification. A revised annotation supersedes the earlier annotation for the same bookmark. Links, uncertainty, and missing-context labels are preserved.

- [Cloudflare as an automation and deployment substrate](https://x.com/MitchellKeller_/status/2095576450791346626) — A compact overview links Workers, databases, email, scraping, traffic, deployments, automations, and schedules into one developer platform. Useful as a capability map rather than a promise that every workload is free or appropriate; check current limits, bindings, data-handling rules, and operational costs per project. _(Mitchell Keller (@MitchellKeller_); retained 2026-09-05)_

- [PS5 hardware-jailbreak claim](https://x.com/GodSon83/status/2095675020270022974) — The post says a hardware-level compromise can rip games, run emulators, and broadly jailbreak PS5 consoles. Preserve it as a console-security news lead, not a confirmed universal or unpatchable exploit: firmware, hardware revision, prerequisites, legality, warranty, and the underlying researchers' disclosure all need verification. _(GODSON (@GodSon83); retained 2026-09-05)_

- [macOS Screen Sharing over Tailscale](https://x.com/stolinski/status/2095669413639024996) — Enable Screen Sharing on the target Mac, then use Finder's Connect to Server with `vnc://hostname` or the Tailscale address. Access still depends on macOS permissions, Tailscale reachability, ACLs, and the account allowed to control the Mac. _(Scott Tolinski (@stolinski); retained 2026-09-05)_

- [Removing Claude content-credential metadata](https://x.com/guillaumemeyer/status/2095207287392501986) — Demonstrates a tool claimed to strip content credentials from supported Claude-generated files. Keep as a provenance-security reference: metadata can be lost through ordinary file transforms, so authentication systems should not assume its continued presence; do not use removal to misrepresent authorship or evade disclosure requirements. _(Guillaume Meyer (@guillaumemeyer); retained 2026-09-05)_

- [Obscura Rust headless browser](https://x.com/RodmanAi/status/2094784063576113434) — [Obscura](https://github.com/h4ckf0r0day/obscura) is an Apache-2.0 Rust browser-automation project with Chrome DevTools Protocol support and Playwright/Puppeteer compatibility. Treat its size, startup, and memory numbers as project-reported benchmarks until reproduced on the intended workload. _(Rodman (@RodmanAi); retained 2026-09-05)_

- [UTM 5.0.5 beta and experimental DirectX 12](https://x.com/UTMapp/status/2095033715848265783) — The beta adds D3DMetal-based DirectX 12 support for Windows 11 ARM guests on macOS. The [release discussion](https://github.com/utmapp/UTM/discussions/7847) labels the driver experimental and warns that game compatibility and stability remain limited; test disposable workloads before relying on it. _(UTM (@UTMapp); retained 2026-09-05)_

- [Invidious as a self-hostable YouTube frontend](https://x.com/marcusyul/status/2094089513286951024) — A Spanish overview highlights ad-free viewing, background play, no Google login, and self-hosting. The project itself notes that public instances can be unreliable and that video streams normally come directly from Google unless proxying is enabled, so “no tracking” depends on configuration and operator behavior. _(Marcus Yu (@marcusyul); retained 2026-09-05)_

- [Cloudflare malware-filtering DNS for a home router](https://x.com/lucataco/status/2094063782628577631) — Cloudflare documents `1.1.1.2` and `1.0.0.2` as resolvers that block domains classified as malicious. This is a useful network-level layer, not a complete antivirus: it cannot inspect every URL, file, IP connection, local exploit, or newly uncategorized domain, and false classifications are possible. _(Luca (@lucataco); retained 2026-09-05)_

- [Fastpotify native Rust Spotify client](https://x.com/paolino/status/2093659889339888126) — The bookmarked v0.3.0 release added playback, playlist, local-link, and interface improvements. [Fastpotify's releases](https://github.com/crmne/fastpotify/releases) have since advanced into v0.4.0 release candidates; macOS builds may still require manual quarantine handling and are not necessarily notarized. _(Carmine Paolino (@paolino); retained 2026-09-05)_

- [Omarchy Quattro](https://github.com/basecamp/omarchy) — Omarchy is Basecamp's opinionated Arch Linux and Hyprland development environment. Jorge Manrubia recommends it specifically to macOS developers; the later [Quattro release post](https://x.com/tobi/status/2088333047024202115) frames it as a malleable environment for agentic work, while an [experimental macOS packaging demo](https://x.com/athasdev/status/2088688906657005726) runs it through Apple Containerization and Rosetta with Quickshell streamed into Athas Capsule. A newer [mlx-omarchy compatibility report](https://x.com/JoshuaSWarren/status/2095268521391354205) claims 94.6% functional parity with macOS MLX and identifies three remaining Apple-dependent or upstream Vulkan gaps; treat that percentage as project-defined rather than an independent compatibility benchmark. These are point-in-time claims rather than proof of macOS parity; switching or containerizing a desktop carries hardware, compatibility, security, performance, and workflow costs, so evaluate it on non-critical hardware first. _([original bookmark](https://x.com/jorgemanru/status/2085371786409980026); selected 2026-08-08; updated 2026-09-05)_

- [Helium Browser experimental TLS and developer-mode work](https://x.com/uwukko/status/2088882137877663921) — Helium's developer asks users in censored networks to test splitting the TLS ClientHello and pairing it with secure DNS. A later [development update](https://x.com/uwukko/status/2095077590994149563) discusses making the compact debugging warning clearer in the latest build. Both are evolving browser behavior: fragmentation may bypass some simple filtering but can also fail or make traffic conspicuous, while debugging warnings should remain understandable and difficult for malicious pages to normalize. _(wukko (@uwukko); selected 2026-08-23; updated 2026-09-05)_

### Chrome bookmarks — developer tools · 2026-09-06

- [Machine Payments Protocol services](https://mpp.dev/services) — Protocol and service-directory reference for machine payments. _(Chrome bookmark; retained 2026-09-06)_

- [WalletConnect React App](https://react-app.walletconnect.com/) — WalletConnect integration test surface. _(Chrome bookmark; retained 2026-09-06)_

- [FluidVoice](https://github.com/altic-dev/FluidVoice) — Open-source local dictation project. _(Chrome bookmark; retained 2026-09-06)_

- [tldraw](https://www.tldraw.com/) — General-purpose whiteboard, diagramming, and canvas tool. _(Chrome bookmark; retained 2026-09-06)_

- [workbox.sh](https://workbox.sh/) — Small live utility retained until its recurring job is documented more precisely. _(Chrome bookmark; retained 2026-09-06)_

- [MDBList API](https://api.mdblist.com/) — Media-metadata API reference. _(Chrome bookmark; retained 2026-09-06)_

- [citrini-setup repository](https://github.com/fightingentropy/citrini-setup) — Private project reference; anonymous 404 responses are not evidence that the repository is dead. _(Chrome bookmark; retained 2026-09-06)_

- [Oxide 3D Explorer](https://explorer.oxide.computer/) — 3D systems and hardware explorer, moved conceptually out of the Sparky grouping. _(Chrome bookmark; retained 2026-09-06)_

### Live X bookmarks retained · 2026-09-17

- [YouTube Plus for iOS](https://x.com/senumy_ipa/status/2099730938662154664) — Third-party iOS modification advertising downloads, Picture in Picture, high-quality playback, and interface controls. Verify source integrity, signing, account risk, local rights, and dependencies before installation. _(@senumy_ipa; retained from X 2026-09-17)_

- [Swift and Cloudflare trip-planner agent](https://x.com/fayazara/status/2098690157209907543) — Native-agent architecture combining Swift with a Hono Worker, browser tooling, Durable Objects, and R2. Useful implementation lead; the post is a demonstration rather than documentation. _(@fayazara; retained from X 2026-09-17)_

- [Omarchy on Apple hardware](https://x.com/OmarchyMac/status/2098384849770037280) — Linux-on-Mac operating-system lead framed around local AI. Check supported hardware, firmware recovery, drivers, security updates, and a tested rollback path before replacing macOS. _(@OmarchyMac; retained from X 2026-09-17)_

- [Touch ID on Linux through t1bridge](https://x.com/niconistal/status/2097906524559384816) — Report of recovering T1 data and enabling fingerprint authentication after macOS had been removed. Verify hardware support, repository, threat model, and recovery procedure first. _(@niconistal; retained from X 2026-09-17)_

- [Astra reverse-engineers Wind Waker for a phone](https://x.com/IsaakMo/status/2097457853921640880) — Coding demonstration involving game reverse engineering and mobile play. Preserve as a capability lead while checking reproducibility, ownership, copyright, and distribution boundaries. _(@IsaakMo; retained from X 2026-09-17)_

- [FFmpeg skill v0.12.0](https://x.com/kebura_P/status/2096964158994755604) — Update describing cropping, compositing, stabilization, subtitle handling, track selection, environment checks, output verification, and safeguards against overwriting source media. Inspect the repository and tests before installation. _(@kebura_P; retained from X 2026-09-17)_

- [UK Property Insight public API](https://x.com/ukhpinfo/status/2097235890489688397) — Property-data API lead with possible value for housing research. Review documentation, provenance, coverage, licensing, rate limits, and update frequency. _(@ukhpinfo; retained from X 2026-09-17)_

- [Codex Remote Control setup](https://x.com/iScienceLuvr/status/2096752682455503117) — Author describes pairing a remote machine with the mobile app using remote-control commands. Confirm command names, authentication, network exposure, and current official support before using it on a sensitive host. _(@iScienceLuvr; retained from X 2026-09-17)_

- [Instagram private-graph analyser](https://x.com/akaclandestine/status/2096556432908791953) — Project advertised as inferring interactions involving private Instagram accounts. Retained only as a security and privacy-risk reference; do not use it to evade privacy controls, surveil people, or violate platform terms or law. _(@akaclandestine; retained from X 2026-09-17)_

### Live X bookmarks retained · 2026-09-22

- [OpenTools Studio printer](https://x.com/rafaelcaricio/status/2102031482566955116) — Enthusiastic product lead pointing to [OpenTools Studio](https://www.opentools.studio/). Check the exact printer design, bill of materials, build difficulty, software, safety, documentation, support, and independent results before buying or building. _(@rafaelcaricio; retained from X 2026-09-22)_

- [Omarchy iCloud Photos](https://x.com/jankeesvw/status/2101977870289527284) — [Open-source native client](https://github.com/jankeesvw/omarchy-icloud-photos) for browsing a recent portion of an iCloud photo library under Omarchy, with delete/undo, HDR video, and Live Photos described. Audit authentication, data handling, deletion semantics, and project maturity before granting library access. _(@jankeesvw; retained from X 2026-09-22)_

- [Spectrum Library v1.4.6](https://x.com/Jdr8245Jhon/status/2101431367410041230) — Image-only bookmark linking to the [Spectrum Library 1.4.6 GitHub release](https://github.com/Phoenixx1202/Spectrum-Library/releases/tag/1.4.6). Inspect the repository, purpose, licence, release notes, and binaries before use. _(@Jdr8245Jhon; retained from X 2026-09-22)_

- [Helium Browser 0.17.2](https://x.com/cyyynthia_/status/2101259480981758225) — Release discussion highlights CNAME uncloaking in built-in uBlock Origin, keychain safeguards, GPC, optional ClientHello splitting, lazy restore, UI improvements, and upcoming sync/mobile work. Verify security and privacy behaviour against [Helium's current release](https://helium.computer/) and source. _(@cyyynthia_ quoting @heliumbrowser; retained from X 2026-09-22)_

## Related pages

[[X-Bookmarks]] · [[Developer_Resources]] · [[Digital Security]] · [[Omarchy]] · [[Omarchy iCloud Photos]] · [[Helium Browser]] · [[3D Printing and Digital Fabrication]]

## Complete source capture

The linked September source record preserves the full current category, including older entries. The sections above summarize the added or revised September material. Every current saved item can also be opened individually in [Bookmarks](/bookmarks), searched by title or original post ID, and traced to its captured note. Inclusion records the curated source; it does not imply every claim has been independently verified.

## Evergreen-only additions — 30 September 2026

Pinned source revision: `raw/snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md`. Selected from the 70-post live review using the human's narrower instruction to keep lasting knowledge. See [[Evergreen Lessons from X - September 2026]] for the synthesis and evidence limits.

- [Review production software through concrete failure cases](https://x.com/GohilHardy/status/2103760572835938540) — Ask how the system detects or survives deadlocks, memory leaks, N+1 queries, concurrent updates, stale reads, dependency failures and failed releases. For each relevant failure, identify an owner, an observable symptom, and recovery or rollback. A reusable review checklist distilled from the post. _(@GohilHardy; evergreen synthesis retained 2026-09-30)_

- [Use a travel device as a frontend to home compute](https://x.com/ashen_one/status/2103757218621653040) — Run demanding jobs on an available home workstation and use the portable device for the interface. Private-network reachability and SSH or remote-desktop authentication are separate controls; test recovery when the connection drops. The source is a workflow anecdote, not proof of a universal hardware setup. Tailscale documentation confirms that ordinary SSH authentication remains separate from network access. References: [Tailscale: SSH over a private network](https://tailscale.com/docs/reference/ssh-over-tailscale). _(@ashen_one; evergreen synthesis retained 2026-09-30)_

- [Treat privacy as several separate layers](https://x.com/cyber_razz/status/2103807409395233170) — A VPN exit IP does not remove every browser, account or locale signal. WebRTC candidate addresses can expose network information depending on application and browser configuration; MDN describes relay-only ICE as one application control. DNS-over-HTTPS or TLS encrypts DNS exchanges, not all traffic or identity signals. Test the actual device and browser instead of assuming WebRTC always bypasses a VPN or encrypted DNS hides every visited site. References: [additional X source](https://x.com/schmidt1024/status/2103300207857353043); [MDN: WebRTC candidate addresses](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/address); [Cloudflare: encrypted DNS](https://www.cloudflare.com/learning/dns/dns-over-tls/). _(@cyber_razz, @schmidt1024; evergreen synthesis retained 2026-09-30)_
