---
title: Omarchy
type: entity
domain: dev
summary: "Basecamp's Arch Linux and Hyprland dev environment: macOS compatibility, Apple hardware, the adoption debate and add-ons such as iCloud Photos."
tags: [dev]
related:
  - Bookmarks - Developer Tools
  - Developer Resources
  - Digital Security
aliases:
  - Omarchy iCloud Photos
sources:
  - bookmarks/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-17'
---

# Omarchy

Omarchy is Basecamp's opinionated Arch Linux and Hyprland development environment. It is here as the main Linux alternative to macOS for development; Jorge Manrubia recommends it to macOS developers. The posts are described in [[Bookmarks - Developer Tools]].

## Key ideas

- **Quattro.** The Quattro release frames Omarchy as a malleable environment for agentic work.
- **macOS compatibility.** An experimental demo runs Omarchy on macOS through Apple Containerization and Rosetta. A mlx-omarchy report puts parity with macOS MLX at 94.6% by its own measure, with three Apple-dependent or Vulkan gaps left. Neither is native macOS parity.
- **Apple hardware.** @OmarchyMac pitches Linux on Macs for local AI, and @niconistal recovered T1 data to get Touch ID working after removing macOS. Have firmware recovery and a rollback path first.
- **Adoption debate.** DHH announced rapid growth. @ChefExecOfficer replied that Omarchy takes credit for the work of Linux, Arch and Hyprland, and alleged an inorganic YouTube push. Judge it by its code, contributors, upstream dependencies and daily use.
- **Add-ons.** Omarchy Pods brings AirPods controls to Linux. Omarchy iCloud Photos, by @jankeesvw, is an open-source Quickshell client over icloudpd and a Python helper for browsing a recent slice of an iCloud library, with delete and undo, HDR video and Live Photos. Downloading copies differs from deleting or restoring iCloud assets, deleting from a Shared Library affects everyone in it, and the integration uses an unofficial Apple API. A demo library lets you try it without personal photos.

Try Omarchy on non-critical hardware before replacing macOS.
