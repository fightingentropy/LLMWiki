---
title: Omarchy
type: entity
domain: dev
sources:
  - bookmarks/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
related:
  - X-Bookmarks
  - Developer Resources
  - Tools & Software
  - Technology Critique
  - Omarchy iCloud Photos
  - Bookmarks - Developer Tools
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-15'
tags:
  - linux
  - arch
  - hyprland
  - development-environment
summary: "Basecamp's Arch and Hyprland dev environment: Quattro and macOS-compatibility claims, Apple hardware reports, the adoption debate, and add-ons like Omarchy Pods."
---

# Omarchy

Omarchy is Basecamp's opinionated Arch Linux and Hyprland development environment. Jorge Manrubia recommends it specifically to macOS developers. It recurs in the developer-tools bookmarks as a distribution, a macOS-migration story and an ecosystem of add-ons (from [[Bookmarks - Developer Tools]]).

## Quattro and macOS

- The Quattro release post (@tobi) frames Omarchy as a malleable environment for agentic work.
- An experimental macOS demo (@athasdev) runs it through Apple Containerization and Rosetta, with Quickshell streamed into Athas Capsule. That is a containerised demo, not native macOS parity.
- A mlx-omarchy compatibility report (@JoshuaSWarren) claims 94.6% functional parity with macOS MLX and names three remaining Apple-dependent or upstream Vulkan gaps. The percentage is the report's own measure, not an independent compatibility benchmark.

All of these are point-in-time claims and none establishes general macOS feature parity. Switching or containerising a desktop carries hardware, compatibility, security, performance and workflow costs, so try it on non-critical hardware first.

## Omarchy on Apple hardware

Both reports involve removing macOS, so check supported hardware, firmware recovery, drivers, security updates and a tested rollback path first.

- @OmarchyMac is a Linux-on-Mac operating-system lead framed around local AI.
- @niconistal reports recovering T1 data and enabling fingerprint authentication on Linux after macOS had been removed; inspect the repository and threat model before trying it.

## Adoption and criticism

DHH announced rapid growth. Chef Exec Officer (@ChefExecOfficer) posted a hostile counterpoint, which argues that Omarchy is receiving credit for work done by Linux, Arch and Hyprland, and alleges an inorganic YouTube promotion push.

It is a perception and attribution critique, not verified adoption data or proof of paid promotion. Neither the growth announcement nor the scepticism establishes retention, support burden or originality. To judge the distribution, look at its code, contributors, upstream dependencies, hardware compatibility, rollback and day-to-day workflow.

## Ecosystem

- Omarchy Pods is a small utility that exposes AirPods controls after a move from macOS to Linux. Before installing it on a primary machine, inspect Bluetooth permissions, supported models, dependencies, packaging and maintenance activity (from [[X-Bookmarks]]).
- [[Omarchy iCloud Photos]] is a separate page for a photo-library tool. It is a native interface over existing downloading and authentication components.

## Links

- [basecamp/omarchy](https://github.com/basecamp/omarchy) — The Omarchy repository: Basecamp's Arch Linux and Hyprland environment (saved as "Omarchy Quattro").
- [Jorge Manrubia's recommendation](https://x.com/jorgemanru/status/2085371786409980026) — The original bookmark, recommending Omarchy specifically to macOS developers.
- [Quattro release post](https://x.com/tobi/status/2088333047024202115) — @tobi framing Quattro as a malleable environment for agentic work.
- [Experimental macOS packaging demo](https://x.com/athasdev/status/2088688906657005726) — @athasdev running Omarchy through Apple Containerization and Rosetta, with Quickshell streamed into Athas Capsule.
- [mlx-omarchy compatibility report](https://x.com/JoshuaSWarren/status/2095268521391354205) — @JoshuaSWarren's claimed 94.6% functional parity with macOS MLX, and the three gaps still open.
- [Omarchy on Apple hardware](https://x.com/OmarchyMac/status/2098384849770037280) — @OmarchyMac, the Linux-on-Mac operating-system lead framed around local AI.
- [Touch ID on Linux through t1bridge](https://x.com/niconistal/status/2097906524559384816) — @niconistal on recovering T1 data and enabling fingerprint authentication after macOS had been removed.
- [Omarchy adoption scepticism](https://x.com/ChefExecOfficer/status/2093574043769479351) — Chef Exec Officer (@ChefExecOfficer) countering DHH's rapid-growth announcement.
- [omarchy-pods repository](https://github.com/thisisgm/omarchy-pods) — Omarchy-oriented AirPods controls for Linux.
- [Omarchy Pods announcement](https://x.com/stevenharms/status/2089539284508561623) — @stevenharms announcing the utility.
- [Omarchy Pods repository post](https://x.com/stevenharms/status/2089539319908495584) — @stevenharms' repository bookmark for the utility.

## Related

[[X-Bookmarks]] · [[Bookmarks - Developer Tools]] · [[Omarchy iCloud Photos]] · [[Developer_Resources|Developer Resources]] · [[Tools|Tools & Software]] · [[Technology_Critique|Technology Critique]]
