---
title: Dev Resources
type: source
domain: dev
summary: "Development link bank: agent docs, UI kits and app builders, 3D demos, live maps and utilities, plus Erlin's tool setup and the OpenShip watchlist."
tags: [dev, ai, bookmarks]
related: [Developer Resources, AI Agents, Design Resources, Bookmarks - Developer Tools, Bookmarks - AI & Agents]
aliases: [Setup, OpenShip]
sources:
  - misc/Dev.md
  - misc/Setup.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
review_status: archive
---

# Dev Resources

Development links: agent platforms and API docs, UI libraries and app builders, design references, 3D and WebGL demos, live maps and everyday utilities. It also holds Erlin's tool setup and a self-hosting watchlist. Design-specific links live on [[Design Resources]].

Most links were saved with a one-word label or none; product descriptions are the makers' own.

## Setup

- **Coding:** Codex and Claude Code (AI coding agents), bun (JavaScript runtime and package manager), mole, and Zero Brew, an "alternative to brew".
- **Notes and system:** Obsidian, Helium (the browser covered on [[Digital Security]]), and Handy for voice transcription.
- [OpenClaw on Mac Mini: The Complete Setup Guide](https://robertheubanks.substack.com/p/openclaw-on-mac-mini-the-complete?utm_campaign=post-expanded-share&utm_medium=web&triedRedirect=true) — Substack guide to running OpenClaw on a Mac Mini.

## Self-hosting watchlist

- [OpenShip](https://openship.io/) — Open-source deployment and operations platform for infrastructure you control.

OpenShip is a product to evaluate, not yet a production dependency. Test five things first: restore from backup, rollback under failure, secrets and access controls, monitoring and alert delivery, and outbound-email deliverability from a clean server.

## Agent platforms and API docs

- [OpenAI Codex app-server](https://developers.openai.com/codex/app-server/) — Docs for `app-server`, the shared interface behind the Codex app, IDE extension and Codex cloud.
- [OpenAI API WebSocket mode](https://developers.openai.com/api/docs/guides/websocket-mode) — OpenAI's guide to the API's WebSocket mode.
- [Code Mode for MCP](https://blog.cloudflare.com/code-mode-mcp/) — Cloudflare post on "Code Mode", its approach to agents using MCP tools.
- [Wes Bos on openclaw with a Codex plan](https://x.com/wesbos/status/2024610896811524535) — Codex plans lack embeddings; set an OpenAI API key for text-embeddings-3, which "costs pennies". _(@wesbos)_
- [Andrew Warner's post](https://x.com/AndrewWarner/status/2024518232271417434) — The post Wes Bos quoted; its body is a bare link. _(@AndrewWarner)_
- [Skills.sh](https://skills.sh/) — Directory of agent skills.
- [Inkling](https://thinkingmachines.ai/inkling/) — Open-weight multimodal model from Thinking Machines for text, image and audio input.

On app-server, Alexander Embiricos (@embirico): "all of the codex app, ide extension, and even codex cloud are built on our shared interface `app-server`, and you can use it too!" SIGKITTEN used it to build a native Codex iPhone app and concluded "it almost doesnt make sense to maintain your own responses api wrapper anymore" (from [[X-Bookmarks]]).

## Agent practice and technical writing

- [pstack "show me your work"](https://github.com/cursor/plugins/blob/main/pstack/skills/show-me-your-work/SKILL.md) — Cursor plugin skill for a compact decision trail: what changed, why, the evidence, the result. Audit key choices, not every line.
- [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/) — Controlled-language rules worth borrowing for clear technical documentation and agent output.

## UI libraries and product references

- [Canvas UI](https://canvasui.dev/) — Open-source WebGL and HTML-in-canvas component registry for React, Vue, Svelte and vanilla TypeScript; some parts experimental.
- [Native Bloom](https://nativebloom.dev/) — Browsable React Native UI patterns and components, with free material and a paid Pro tier.
- [Buzz](https://buzz.xyz/) — Open-source group chat for teams of people and agents.
- [Slate voice journal](https://apps.apple.com/gb/app/slate-voice-journal/id6763851079) — Native iPhone voice journal using on-device transcription and local storage.
- [GSAP](https://gsap.com/) — GreenSock Animation Platform, saved as "animation library".
- [Animated Icons](https://animated-icons.vercel.app/) — Library of animated icons.
- [SVGL](https://svgl.app/) — Library of brand logos as SVGs.
- [mapcn blocks](https://www.mapcn.dev/blocks) — Ready-made map sections built from mapcn's map components.

## App builders, editors and design files

- [Rork](https://rork.com/) — AI app builder for Apple platforms; Rork Max pitches itself as "a website that replaces Xcode".
- [Blueprint](https://www.blueprint.am/) — Saved as a "build anything blueprint".
- [Mockdown](https://www.mockdown.design/) — Design mockup tool.
- [Figma team projects](https://www.figma.com/files/team/1389336954354579087/all-projects?fuid=1389336951670138311) — Erlin's own Figma team, all-projects view; a private workspace link.
- [Figma capture (Claude artifact)](https://claude.ai/public/artifacts/92eca46f-bfc2-4f53-8d15-833a88989d64) — Public Claude artifact labelled "figma capture".

Rork's own launch posts add Rork Companion, a Mac app that installs up to 3 iOS apps on a phone without the $99 Apple Developer account; publishing to the App Store still needs one.

## Design inspiration, awards and assets

- [CSS Design Awards](https://www.cssdesignawards.com/) — Website design awards; a source of interface references.
- [Awwwards 2025 — Ecommerce Site of the Year](https://www.awwwards.com/annual-awards-2025/ecommerce-site-of-the-year) — Saved for the "icon hover over name".
- [Best Designs on X](https://bestdesignsonx.com/) — Gallery of design work posted on X.
- [WGSN](https://www.wgsn.com/en) — Trend forecasting service.
- [Toolfolio](https://toolfolio.io/) — Directory of design tools.
- [Envato Elements](https://elements.envato.com/) — Stock asset subscription; one [vertical carousel slideshow](https://elements.envato.com/vertical-carousel-slideshow-RTDYGLW) template saved.

## 3D, WebGL and generative visuals

- [Poly](https://poly.app/) — 3D models.
- [SuperSplat](https://superspl.at/) — 3D Gaussian splat tool.
- [Video to World](https://lukashoel.github.io/video_to_world/) — Research page on turning video into a 3D Gaussian-splat world, saved as "gaussian splatter video".
- [Atmospheric scattering](https://r3f.maximeheckel.com/atmospheric-scattering-3) — Maxime Heckel's React Three Fiber demo of atmospheric scattering.
- [Morflax Studio](https://studio.morflax.com/objects/upload) — Upload page for 3D models in Morflax Studio.
- [Casberry particles](https://particles.casberry.in/) — 3D particle effects demo.
- [Diode](https://www.withdiode.com/) — Hardware simulator ("Simulate Hardware"), with one [saved project](https://www.withdiode.com/projects/373b4668-086c-4842-b473-c640e88011b2).
- [Blue wispy orb](https://x.com/m_strba/status/2031287944959447536) — Post by Martin Strba, saved as "Blue wispy orb". _(@m_strba)_
- [Accretion](https://x.com/poetengineer__/status/2027682157372555526) — Post by Kat, the Poet Engineer, saved as "accretion". _(@poetengineer__)_
- [Quicksand](https://x.com/FlipTo1Million/status/2027750751590576219) — Post saved as "quicksand". _(@FlipTo1Million)_

## Live maps, trackers and data visualisations

- [3WiFi map](https://3wifi.dev/map.html) — Map of the 3WiFi database of Wi-Fi access points.
- [MarineTraffic](https://www.marinetraffic.com/en/ais/home/centerx:-12.8/centery:0.0/zoom:2) — Live AIS ship tracking at world view; the [home map](https://www.marinetraffic.com/en/ais/home) is the same tool.
- [Aviation Stack](https://aviationstack.com/) — Flight data API.
- [Giza World — Aave](https://world.gizatech.xyz/?play=true&protocols=aave) — "Real time visualization of transactions" on the Aave protocol.
- [Proteo Cosmos](https://app.proteo-cosmos.com/) — Interactive navigator of the human protein-protein interaction network.
- [Quick Map Tools](https://www.quickmaptools.com/) — Quick online map tools.
- [BLR Startup Arena map](https://www.blrstartuparena.com/map) — Map of the Bangalore startup scene.
- [Epstein Search](https://epsteinsearch.info/) — Search site for the Epstein files.

## Everyday utilities

- [Cobalt](https://cobalt.tools/) — Media downloader.
- [Defuddle](https://defuddle.md/) — "Get the main content of any page as Markdown."
- [ente paste](https://paste.ente.io/) — Pastebin from ente.
- [fli](https://github.com/punitarani/fli) — GitHub project for searching Google Flights.
- [Ramp](https://ramp.com/) — Business cards and spend management.
- [Piano notes trainer](https://kvyverse.com/piano_notes_trainer) — Browser trainer for reading piano notes, saved as "learn piano".
- [Ben Kuhn](https://www.benkuhn.net/) — Ben Kuhn's personal site and essays, saved beside a [post by @zebriez](https://x.com/zebriez/status/2028537184744243450).

## Other saved links

- [Maple.dev](https://maple.dev/)
- [Pascal editor](https://editor.pascal.app/)
- [Off The Wall studio](https://offthewall.studio/)
- [symbl.space](https://symbl.space/)
- [Cotool.ai](https://www.cotool.ai/)
- [OpenFang.sh](https://www.openfang.sh/)
- [PizzINT Polyglobe](https://www.pizzint.watch/polyglobe)
- [Monitor the Situation](https://monitorthesituation.org/)
- [SomaliScan](https://www.somaliscan.com/)
- [Flagpost cards](https://flagpost.org/cards)
- [Hashtree.cc](https://hashtree.cc/)
- [peaceandquiet.io](https://peaceandquiet.io/)
- [@poetengineer__ post](https://x.com/poetengineer__/status/2041998061153427861)
- [@mntruell post](https://x.com/mntruell/status/2026736314272591924)
- [@affaanmustafa post](https://x.com/affaanmustafa/status/2012378465664745795)
- [@johann_sath post](https://x.com/johann_sath/status/2024558974151119029)
