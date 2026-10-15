---
title: Tools & Software
type: topic
domain: dev
sources:
  - misc/Dev.md
  - misc/Setup.md
  - misc/Design.md
  - bookmarks/Developer Tools.md
related:
  - Developer Resources
  - Design & Aesthetics
  - Setup
  - Omarchy
  - OpenShip
  - Helium Browser
  - Dev Resources
  - Design Resources
  - Bookmarks - Developer Tools
  - Developer Tool Evaluation Map
  - Personal Knowledge Management
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - tools
  - software
  - productivity
  - dev-tools
  - self-hosting
summary: "The software in Erlin's setup and saved tool lists, by job: coding environment, design, animation, utilities, assets, maps and self-hosted ops."
---

# Tools & Software

This page sorts the software named in Erlin's notes by what it is for: the core coding setup, design and animation tools, small utilities, asset libraries, maps and trackers, and self-hosted operations. Most entries come from the [[Setup]] list and the link dumps in [[Dev Resources]] and [[Design Resources]]. Deeper notes live in [[Developer_Resources|Developer Resources]], [[Design_and_Aesthetics|Design & Aesthetics]] and the [[Developer Tool Evaluation Map]].

## Development environment

The core setup, from the [[Setup]] note:

- **Codex / Claude Code** — AI-assisted coding. The dev note also saves [OpenAI's Codex app-server documentation](https://developers.openai.com/codex/app-server/).
- **Bun** — Fast JavaScript runtime and package manager.
- **Zero Brew** — Alternative to Homebrew.
- **mole** — Development utility.
- **Obsidian** — Knowledge management and note-taking; see [[Personal Knowledge Management]].

## System and productivity

- **Helium** — Listed in the setup note without a description. The Helium saved elsewhere in the wiki is [[Helium Browser]], a Chromium-based privacy browser.
- **Handy** — Voice transcription.
- [Paste.ente.io](https://paste.ente.io/) — Pastebin alternative.

Correction, 15 October 2026: this page previously called Helium a "system utility"; nothing in the notes supports that.

## Design and UI tools

- [Framer](https://www.framer.com/) — No-code design tool for building sites and design systems.
- **Figma** — Collaborative design tool. The dev note saves a [Figma capture](https://claude.ai/public/artifacts/92eca46f-bfc2-4f53-8d15-833a88989d64) page under the label "figma capture".
- **Shadcn UI** — Component library. Saved alongside it: [Shadcn Blocks](https://www.shadcnblocks.com/blocks), pre-built component compositions, and [refined shadcn components](https://interfacesds.com/), saved with that label.
- [Variant](https://variant.com/) — Design site, saved in the design note with its tagline: "Endless designs for your ideas, just scroll."
- **Paper** — Design tool. The design note saves a [post](https://x.com/stephenhaney/status/2036485780961669214) under the label "paper snapshot". _(@stephenhaney)_
- [Air OS](https://x.com/slavakornilov/status/2028885781448671325) — OS design language, saved as "AirOS". _(@slavakornilov)_

## Animation and effects

- [GSAP](https://gsap.com/) — Professional animation library, saved as "animation library". [Made With GSAP](https://madewithgsap.com/) is saved alongside it in the design note.
- **Motion.dev** — Production-grade web animation. No link saved.
- **Rive** — Interactive animation tool. Saved examples are on [[Design_and_Aesthetics|Design & Aesthetics]].
- **Lottie** — Vector animation framework. Saved: [Lottielab templates](https://www.lottielab.com/templates).

## Utilities

- [Defuddle](https://defuddle.md/) — "Get the main content of any page as Markdown."
- [Ramp](https://ramp.com/) — Expense management.
- [Cotool.ai](https://www.cotool.ai/) — AI-powered utility; saved without a note.
- [Toolfolio](https://toolfolio.io/) — Design tools aggregator.
- [Hotkeys.design](https://hotkeys.design/) — Keyboard shortcuts reference, saved as "design hotkeys".

## Media and assets

- [Poly.app](https://poly.app/) — 3D model library.
- [Morflax Studio upload](https://studio.morflax.com/objects/upload) — 3D model uploading, saved as "3d models".
- [SVGL](https://svgl.app/) — SVG logo collection.
- [Envato Elements](https://elements.envato.com/) — Stock assets. The note also saves one item, a [vertical carousel slideshow](https://elements.envato.com/vertical-carousel-slideshow-RTDYGLW).

## Specialised resources

- [Cobalt](https://cobalt.tools/) — Media downloader.
- [Mockdown](https://www.mockdown.design/) — Mockup generation.
- [Withdiode](https://www.withdiode.com/) — Hardware simulator, saved as "Simulate Hardware", with one [saved project](https://www.withdiode.com/projects/373b4668-086c-4842-b473-c640e88011b2).
- [Piano Notes Trainer](https://kvyverse.com/piano_notes_trainer) — Music learning, saved as "learn piano".
- [Build Anything Blueprint](https://www.blueprint.am/) — Reference, saved as "build anything blueprint". A separate bookmark introduces a [Blueprint that turns a hardware idea into a proposed build plan](https://x.com/Sajeel_Purewal/status/2069099646308220973); the notes do not say whether it is the same site. _(@Sajeel_Purewal)_
- [Skills.sh](https://skills.sh/) — Skills platform; saved without a note.

## Maps, tracking and monitoring

- [3wifi Map](https://3wifi.dev/map.html) — Wi-Fi mapping.
- [MarineTraffic](https://www.marinetraffic.com/en/ais/home/centerx:-12.8/centery:0.0/zoom:2) — Vessel tracking; the saved link opens the AIS world map.
- [Aviationstack](https://aviationstack.com/) — Flight data.
- [Quick Map Tools](https://www.quickmaptools.com/) — Mapping utilities.
- [Monitor the Situation](https://monitorthesituation.org/) — Monitoring site; saved without a note.

## Environment and operations

- [[Omarchy]] — Basecamp's opinionated [Arch Linux and Hyprland development environment](https://github.com/basecamp/omarchy). Evaluate upstream dependencies and workflow fit before switching.
- [[OpenShip]] — [Open-source deployment and operations platform](https://openship.io/) for infrastructure you control. A watchlist item: the setup note's gates are restore from backup, rollback under failure, secrets and access controls, monitoring and alert delivery, and outbound-email deliverability from a clean server.
- [Coolify](https://coolify.io/) — Self-hosted application platform; the 4.3 release redesigned the interface. Read the release-specific migration and rollback notes before upgrading production.
- [Talkify](https://github.com/tornikegomareli/Talkify) — Free, open-source on-device macOS dictation in the menu bar, built on Apple's SpeechAnalyzer. The author reports an 8.2 MB app and 123 ms median release-to-text latency; author-run benchmarks, not reproduced.
- [Space Rabbit](https://github.com/tahul/space-rabbit) — Small Swift utility that switches macOS Spaces without the standard transition animation. It relies on a workaround that may break across macOS releases.

## Related

[[Developer_Resources|Developer Resources]] · [[Design_and_Aesthetics|Design & Aesthetics]] · [[Setup]] · [[Omarchy]] · [[OpenShip]] · [[Helium Browser]] · [[Dev Resources]] · [[Design Resources]] · [[Bookmarks - Developer Tools]] · [[Developer Tool Evaluation Map]] · [[Personal Knowledge Management]]
