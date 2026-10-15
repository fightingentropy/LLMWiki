---
title: Dev Resources
type: source
domain: dev
sources:
  - misc/Dev.md
related:
  - Developer Resources
  - Design & Aesthetics
  - AI Agents
  - Design Resources
  - Tools & Software
  - Bookmarks - Developer Tools
  - Bookmarks - Design & Frontend
  - Bookmarks - AI & Agents
  - Developer Tool Evaluation Map
  - X-Bookmarks
  - Setup
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - development
  - tools
  - resources
  - links
  - ai-agents
  - 3d
  - visualization
  - ui-components
review_status: archive
summary: "Erlin's development link bank: agent platforms and API docs, UI libraries, design awards, 3D demos, live maps and web utilities, each described."
---

# Dev Resources

Erlin's running list of development links. It holds agent platforms and API docs, UI component libraries and app builders, design award sites, 3D and WebGL demos, live maps and trackers, and a handful of everyday utilities. The strongest material is the OpenAI Codex `app-server` documentation, Cloudflare's Code Mode post, the pstack decision-trail pattern, and the WebGL and Gaussian-splat demos. Most links were saved with a one- or two-word label or nothing at all; where there is no note the description says only what the site plainly is.

## Agent platforms and API docs

- [OpenAI Codex app-server](https://developers.openai.com/codex/app-server/) — OpenAI's documentation for `app-server`, the shared interface behind the Codex app, IDE extension and Codex cloud. Alexander Embiricos (@embirico): "all of the codex app, ide extension, and even codex cloud are built on our shared interface `app-server`, and you can use it too!" SIGKITTEN called it "legit af" after using it to build a native Codex iPhone app that runs Codex locally on the phone, and later said "it almost doesnt make sense to maintain your own responses api wrapper anymore" (from [[X-Bookmarks]]).
- [OpenAI API WebSocket mode](https://developers.openai.com/api/docs/guides/websocket-mode) — OpenAI's developer guide to the API's WebSocket mode.
- [Code Mode for MCP (Cloudflare blog)](https://blog.cloudflare.com/code-mode-mcp/) — Cloudflare engineering post on "Code Mode", their approach to using MCP (Model Context Protocol) tools from agents.
- [Wes Bos on openclaw with a Codex plan](https://x.com/wesbos/status/2024610896811524535) — practical gotcha: "Anyone using openclaw with a codex plan, you’ll need to also setup embeddings as codex does not come with them. Easiest way is set an open ai API key in your env to use text-embeddings-3. This costs pennies" (from [[X-Bookmarks]]). _(@wesbos)_
- [Andrew Warner's post](https://x.com/AndrewWarner/status/2024518232271417434) — the post Wes Bos quoted above; its body is a bare link (from [[X-Bookmarks]]). _(@AndrewWarner)_
- [Skills.sh](https://skills.sh/) — a skills directory; [[Tools & Software]] files it as a skill development platform. Saved without a note.
- [Cotool.ai](https://www.cotool.ai/) — AI tooling site; [[Tools & Software]] files it as an AI-powered utility. Saved without a note.
- [OpenFang.sh](https://www.openfang.sh/) — Saved without a note.
- [Inkling (Thinking Machines)](https://thinkingmachines.ai/inkling/) — open-weight multimodal model from Thinking Machines for text, image and audio input. Watchlist item: reassess against current models before adopting.

## Agent practice and technical writing

- [pstack "show me your work" skill](https://github.com/cursor/plugins/blob/main/pstack/skills/show-me-your-work/SKILL.md) — a Cursor plugin skill for keeping a compact decision trail: what changed, why, the evidence, and the result. Audit important choices rather than every line of generated code.
- [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/) — controlled-language rules worth borrowing for clear technical documentation and agent output. The correct name is ASD-STE100, not "ADS-STE100".

## UI and product references

- [Canvas UI](https://canvasui.dev/) — open-source WebGL and HTML-in-canvas component registry for React, Vue, Svelte and vanilla TypeScript. Some HTML-in-canvas behaviour is experimental; check browser support before production use.
- [Native Bloom](https://nativebloom.dev/) — browsable React Native UI patterns and components. Evaluate the free material before paying for Pro.
- [Buzz](https://buzz.xyz/) — open-source group chat for teams of people and agents; the canonical product reference.
- [Slate voice journal (App Store)](https://apps.apple.com/gb/app/slate-voice-journal/id6763851079) — native iPhone voice-journal reference using on-device transcription and local storage.

## App builders, editors and design files

- [Rork](https://rork.com/) — AI app builder for Apple platforms. Rork's own launch posts in Erlin's bookmarks describe Rork Max, "a website that replaces Xcode" that claims to one-shot "almost any app" for iPhone, Watch, iPad, TV and Vision Pro, and Rork Companion, a Mac app that installs up to 3 iOS apps on a phone without a $99 Apple Developer account (publishing to the App Store still needs one) (from [[X-Bookmarks]]). Claims are Rork's own.
- [Build Anything Blueprint](https://www.blueprint.am/) — Erlin's label is "build anything blueprint"; the site itself is Blueprint.
- [Maple.dev](https://maple.dev/) — Saved without a note.
- [Mockdown](https://www.mockdown.design/) — design mockup tool.
- [Pascal editor](https://editor.pascal.app/) — the editor for pascal.app. Saved without a note.
- [Figma team projects](https://www.figma.com/files/team/1389336954354579087/all-projects?fuid=1389336951670138311) — Erlin's own Figma team, "all projects" view. A workspace link, not a public resource.
- [Figma capture (Claude artifact)](https://claude.ai/public/artifacts/92eca46f-bfc2-4f53-8d15-833a88989d64) — a public Claude artifact labelled "figma capture" in the note.

## Animation, icons and UI components

- [GSAP](https://gsap.com/) — the GreenSock Animation Platform; Erlin's label is just "animation library".
- [Animated Icons](https://animated-icons.vercel.app/) — a library of animated icons.
- [SVGL](https://svgl.app/) — library of brand logos as SVGs ("logos svgs" in [[Design Resources]]).
- [mapcn blocks](https://www.mapcn.dev/blocks) — map components for web UI; the blocks page holds ready-made map sections ("map components" in [[Design Resources]]).

## Design inspiration, awards and assets

- [CSS Design Awards](https://www.cssdesignawards.com/) — website design awards; a source of interface references.
- [Awwwards 2025 — Ecommerce Site of the Year](https://www.awwwards.com/annual-awards-2025/ecommerce-site-of-the-year) — saved for one detail: the icon hover over the name ("icon hover over name").
- [Best Designs on X](https://bestdesignsonx.com/) — gallery of design work posted on X, by its name.
- [Off The Wall studio](https://offthewall.studio/) — a design studio's site. Saved without a note.
- [WGSN](https://www.wgsn.com/en) — trend forecasting service.
- [Toolfolio](https://toolfolio.io/) — design tools aggregator.
- [Envato Elements](https://elements.envato.com/) — stock asset subscription (templates, video, graphics). One specific template was saved: a [vertical carousel slideshow](https://elements.envato.com/vertical-carousel-slideshow-RTDYGLW).
- [symbl.space](https://symbl.space/) — Saved without a note.

## 3D, WebGL and generative visuals

- [Poly.app](https://poly.app/) — 3D models.
- [SuperSplat](https://superspl.at/) — 3D Gaussian splat tool.
- [Video to World (Gaussian splat video)](https://lukashoel.github.io/video_to_world/) — "gaussian splatter video": a research project page on turning video into a 3D world with Gaussian splats.
- [Atmospheric scattering (React Three Fiber)](https://r3f.maximeheckel.com/atmospheric-scattering-3) — Maxime Heckel's R3F demo of atmospheric scattering.
- [Studio Morflax — upload 3D objects](https://studio.morflax.com/objects/upload) — "3d models" upload page on Morflax Studio.
- [Particles (casberry)](https://particles.casberry.in/) — a particles demo, labelled "3d" in [[Design Resources]].
- [Withdiode — Simulate Hardware](https://www.withdiode.com/) — "Simulate Hardware": a hardware simulator, with one [saved project](https://www.withdiode.com/projects/373b4668-086c-4842-b473-c640e88011b2).
- [Blue wispy orb](https://x.com/m_strba/status/2031287944959447536) — post by Martin Strba, labelled "Blue wispy orb" in the note. _(@m_strba)_
- [Accretion](https://x.com/poetengineer__/status/2027682157372555526) — post by Kat, the Poet Engineer, labelled "accretion". _(@poetengineer__)_
- [Quicksand](https://x.com/FlipTo1Million/status/2027750751590576219) — labelled "quicksand" in the note. _(@FlipTo1Million)_
- [Poet Engineer post](https://x.com/poetengineer__/status/2041998061153427861) — a second saved post from the same account. Saved without a note. _(@poetengineer__)_

## Live maps, trackers and data visualisations

- [3WiFi map](https://3wifi.dev/map.html) — map view of the 3WiFi database of Wi-Fi access points.
- [MarineTraffic live map](https://www.marinetraffic.com/en/ais/home/centerx:-12.8/centery:0.0/zoom:2) — real-time AIS vessel tracking, saved at a world view (zoom 2). The plain [home map](https://www.marinetraffic.com/en/ais/home) is the same tool without the saved position.
- [Aviation Stack](https://aviationstack.com/) — flight data API.
- [Giza World — Aave in real time](https://world.gizatech.xyz/?play=true&protocols=aave) — "real time visualization of transactions" on the Aave protocol.
- [Proteo Cosmos](https://app.proteo-cosmos.com/) — interactive navigator of a human protein-protein interaction network (the note's own description).
- [PizzINT Polyglobe](https://www.pizzint.watch/polyglobe) — globe view on pizzint.watch. Saved without a note.
- [Monitor the Situation](https://monitorthesituation.org/) — situation-monitoring site, by its name. Saved without a note.
- [Quick Map Tools](https://www.quickmaptools.com/) — quick online map tools.
- [BLR Startup Arena map](https://www.blrstartuparena.com/map) — map of the Bangalore startup scene, by its name.
- [SomaliScan](https://www.somaliscan.com/) — Saved without a note.
- [Flagpost cards](https://flagpost.org/cards) — the cards page on flagpost.org. Saved without a note.
- [Epstein Search](https://epsteinsearch.info/) — a search site on the Epstein files, by its name.
- [Hashtree.cc](https://hashtree.cc/) — Saved without a note.

## Everyday utilities

- [Cobalt](https://cobalt.tools/) — media downloader.
- [Defuddle](https://defuddle.md/) — "Get the main content of any page as Markdown."
- [ente paste](https://paste.ente.io/) — pastebin from ente.
- [fli](https://github.com/punitarani/fli) — GitHub project for searching Google Flights ("google flights" in the note).
- [Ramp](https://ramp.com/) — business cards and spend management. Saved without a note.
- [peaceandquiet.io](https://peaceandquiet.io/) — Saved without a note; the same link also sits in [[Funny]].
- [Piano notes trainer](https://kvyverse.com/piano_notes_trainer) — "learn piano": a browser trainer for reading piano notes.

## People and posts

- [Ben Kuhn](https://www.benkuhn.net/) — Ben Kuhn's personal site and essays, saved on the same line as a post by [@zebriez](https://x.com/zebriez/status/2028537184744243450). No note on either.
- [@mntruell post](https://x.com/mntruell/status/2026736314272591924) — Saved without a note. _(@mntruell)_
- [@affaanmustafa post](https://x.com/affaanmustafa/status/2012378465664745795) — Saved without a note. _(@affaanmustafa)_
- [@johann_sath post](https://x.com/johann_sath/status/2024558974151119029) — Saved without a note. _(@johann_sath)_

## Related

[[Developer_Resources|Developer Resources]] · [[Design_and_Aesthetics|Design & Aesthetics]] · [[AI Agents]] · [[Design Resources]] · [[Tools & Software]] · [[Bookmarks - Developer Tools]] · [[Bookmarks - Design & Frontend]] · [[Bookmarks - AI & Agents]] · [[Developer Tool Evaluation Map]] · [[X-Bookmarks]] · [[Setup]] · [[Funny]]
