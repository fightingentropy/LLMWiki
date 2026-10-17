---
title: Developer Resources
type: topic
domain: dev
summary: "Map of the developer setup: coding agents, local models, lean hosting, desktop tools, and a method for testing a tool before adopting it."
tags: [dev, ai]
related:
  - Dev Resources
  - Bookmarks - Developer Tools
  - AI Agents
  - Omarchy
  - Digital Security
aliases:
  - Tools & Software
  - Tools
  - Developer Tool Evaluation Map
sources:
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - misc/Dev.md
  - misc/Setup.md
  - misc/Design.md
  - misc/X-Bookmarks.md
  - bookmarks/Developer Tools.md
  - bookmarks/AI & Agents.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/AI & Agents.md
  - clippings/bookmark-updates-2026-09-22/Design & Frontend.md
  - clippings/bookmark-updates-2026-09-22/Business & Startups.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
---

# Developer Resources

This page maps the tools for building software and a way to test one before adopting it. The links live in [[Bookmarks - Developer Tools]], [[Bookmarks - AI & Agents]] and the [[Dev Resources]] link bank. Agent practice is on [[AI Agents]]; permissions are on [[Digital Security]].

## Working setup

The Setup note lists what is installed and used: mole, Codex and Claude Code, Bun, Obsidian, Zero Brew (a Homebrew alternative), the Helium browser and Handy for voice transcription. OpenShip, an open-source deployment platform, is on the list to evaluate.

## Coding agents and local models

Use Codex and Claude Code together. The meta from @KingBootoshi:

> CODEX FOR BACKEND (5.4 X-HIGH REASONING)
>
> CLAUDE CODE FOR FRONTEND (/frontend-design skill)
>
> ENSURE CODEX DOES TDD FEEDBACK LOOPS (its great at this)
>
> HAVE CLAUDE CODE GENERATE DESIGN VARIATIONS

Local models on Apple Silicon are now usable. Craig Hewitt's case for Qwopus 27B: "local agent loops get a lot cheaper, faster, and more usable", and "frontier models aren't going to keep subsidizing cheap tokens on subscriptions forever". TurboQuant with MLX shrinks a 20-page PDF's KV cache from 1.33 GB to 229 MB and reloads it in 23 ms, at the cost of slower generation.

## The autonomous-agent stack

agent-browser, OpenClaw, Paperclip and OpenFang recur as one stack. agent-browser is now native Rust and can attach to a running Chrome. Paperclip is "the orchestration layer for zero-human companies": org charts, goals, budgets and agent templates.

## Lean hosting

Pieter Levels' stack is the baseline: Ubuntu and Nginx, unattended upgrades, cron, SQLite, vanilla web code, Cloudflare Tunnel and R2, Tailscale and a cheap Hetzner VPS, with HTTPS open only to Cloudflare and SSH only to Tailscale. His email migration checklist: list every sending path, route sends through one adapter, import the old suppression list, canary a low-stakes message, and move login mail last. Oracle's Always Free tier gives 2 Ampere OCPUs, 12 GB RAM and 200 GB storage, but idle instances can be reclaimed, so never keep the only copy of anything there.

Self-hosted deployment platforms such as Coolify and OpenShip share the same adoption gates: restore from backup, rollback under failure, secrets and access control, monitoring and alerts, and email deliverability from a clean server.

Review each production system against concrete failures (deadlock, memory growth, N+1 queries, conflicting writes, stale reads, a dead dependency, a failed deploy) and name an owner, the symptom and the recovery. Use a travel laptop as a front end to home compute, remembering that Tailscale reachability and SSH authentication are separate controls.

## Desktop and browser

[[Omarchy]], Basecamp's Arch and Hyprland environment, is the Linux alternative to macOS here. The macOS saves include Talkify and FluidVoice for local dictation, Space Rabbit for instant Spaces switching, UTM with experimental DirectX 12, and Fastpotify, a native Rust Spotify client. Browser leads are Helium, Obscura for Rust browser automation and Invidious as a self-hosted YouTube front end. Frontend and graphics references are on [[Design & Aesthetics]].

## Testing a tool before adopting it

Tie each saved tool to a real job:

1. **Pick the test.** A real screen for interface work. A bounded task with a checkable output for agents, counting corrections and supervision time. The everyday path, restart, export and removal for local utilities. Data leaving the device, cost, failure and exit for hosted services.
2. **Run one candidate against the current baseline**, changing one thing at a time.
3. **Write one record:** task, candidate, version and date, baseline, input, outcome, effort, what failed, and the original bookmark.
4. **Decide:** adopt for this job, keep as a specialist option, investigate a specific gap, or keep only as a reference. Note what would change the decision.

## Resources

- [Codex for backend, Claude Code for frontend](https://x.com/KingBootoshi/status/2031962873505988744) — the coding meta quoted above. _(@KingBootoshi)_
- [Qwopus 27B on a $600 Mac Mini](https://x.com/TheCraigHewitt/status/2039303217620627604) — a Qwen3.5 27B distill trained on Claude Opus reasoning traces, run in 4-bit on a 16GB Mac Mini. _(@TheCraigHewitt)_
- [agent-browser is now fully native Rust](https://x.com/ctatedev/status/2032635370089693456) — the rewrite: 1.6x faster cold start, 18x less memory, 99x smaller install, 140+ commands. _(@ctatedev)_
- [The super-stack](https://x.com/stackinbits/status/2029382281396109386) — "Paperclip + OpenFang + Obsidian" on a new MacBook Pro as an army of agents for mundane work. _(@stackinbits)_
- [EU Inc. proposal](https://x.com/initjean/status/2034240190235996393) — summary of the proposed EU company: 48 hours and €100 to incorporate, fully digital, no notaries, EU-wide stock options. _(@initjean)_
- [EU Commission on EU Inc.](https://x.com/EU_Commission/status/2034231737161588800) — the Commission's own announcement, quoted in the summary above. _(@EU_Commission)_
- [MarineTraffic](https://www.marinetraffic.com/) — real-time vessel tracking on an AIS world map.
- [Real-time Aave](https://world.gizatech.xyz/) — "real time visualization of transactions" on the Aave protocol.
- [Polymarket](https://polymarket.com/) — prediction markets, saved for its interface.
- [WGSN](https://www.wgsn.com/) — trend forecasting.
