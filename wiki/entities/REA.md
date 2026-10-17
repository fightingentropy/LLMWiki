---
title: REA
type: entity
domain: dev
summary: "REA links coding agents to app-analysis tools so a question about how an app works is answered with code or captured traffic."
tags:
  - dev
  - ai
  - security
related:
  - Bookmarks - Developer Tools
  - AI Agents
  - Developer Resources
  - Digital Security
sources:
  - snapshots/1792255578171-520e00b083b0/misc/REA.md
created: '2026-10-17'
updated: '2026-10-17'
---

# REA

REA (reverse engineering with agents) connects a coding agent to analysis tools over MCP, with a CLI as well. You ask a specific question about an app, and the answer comes back tied to code locations or captured traffic. It suits owned-device work such as the remote-control project. The repository, the fork and the release notes are in [[Bookmarks - Developer Tools]]. [Read the original note](/source/a7b2ee104d269205d8af).

## What it can inspect

- **JavaScript and Electron:** modules, source maps, routes and IPC, with no native decompiler needed.
- **Native apps:** pseudocode, assembly, strings and calls through Ghidra, Hopper or IDA.
- **Android APKs:** manifest, classes and decompiled methods through headless JADX and a full JDK.
- **Network captures:** requests, responses and payloads from a HAR file.
- **.NET:** metadata and CIL.

These are documented capabilities, not results on a real target yet. One user reports a plain model finishing first, so compare REA with simple source or network inspection on the same question.

## First experiment: one remote command

Question: how does the companion app build and send a single volume-up command?

1. Pick the app, its version and the device. Check for existing API documentation first.
2. Capture that one action as a HAR with mitmproxy, or inspect the APK statically. Certificate pinning can block capture.
3. Ask REA for the command construction, endpoint, payload, authentication and response parsing, with a source location or captured request behind each claim.
4. Rebuild only that command in a small client and compare it with the app before adding more.

## Setup on this Mac

- `rea-agents` 6.5.0 and its `reverse-engineer-anything` skill are installed. Codex runs REA as a local MCP server (`rea mcp`).
- Ghidra 12.1.4 from Homebrew is the native provider, using OpenJDK 21. Both paths are under `[mcp_servers.rea.env]` in `~/.codex/config.toml`.
- Tested only on a small ARM64 test binary. Android analysis still needs the headless JADX MCP JAR; Frida is not installed.
- REA needs Node 22.19+, 24.11+ or 26+.

```sh
GHIDRA_INSTALL_DIR=/opt/homebrew/opt/ghidra/libexec \
JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home \
rea doctor --client codex --provider ghidra --skill --json
```

## Resources

- [README at the checked fork commit](https://github.com/fightingentropy/rea/blob/12ee785e5e61132898adecf9424ce6706a2e754a/README.md) — Requirements and capabilities as they stood when checked.
- [REA Ghidra provider guide](https://github.com/morluto/rea/blob/main/docs/ghidra-provider.md) — How Ghidra connects to REA.
- [Ghidra 12.1.4 release](https://github.com/NationalSecurityAgency/ghidra/releases/tag/Ghidra_12.1.4_build) — The installed Ghidra version.
- [Ghidra Homebrew formula](https://formulae.brew.sh/formula/ghidra) — How Ghidra was installed.
- [Codex MCP configuration](https://learn.chatgpt.com/docs/extend/mcp) — Where MCP servers like REA are registered.
