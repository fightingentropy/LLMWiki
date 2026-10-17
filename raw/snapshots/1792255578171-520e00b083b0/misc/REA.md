# REA — reverse engineering with agents

REA is a strong tooling lead for answering a specific question about an application's behaviour and tracing the answer to code or captured evidence. It connects an agent to analysis tools through MCP and also offers a CLI. It is especially relevant to owned-device integrations in the remote project.

## Our fork

- [fightingentropy/rea](https://github.com/fightingentropy/rea) — created at Erlin's request on 2026-10-11.
- [Upstream: morluto/rea](https://github.com/morluto/rea).
- Initial fork `main`: `12ee785e5e61132898adecf9424ce6706a2e754a`.
- MIT licence. Fork creation and its upstream relationship were verified through GitHub. No local clone, REA installation, agent registration or target investigation was performed as part of this curation.

## What is useful

- **JavaScript / Electron:** inspect modules, source maps, routes and IPC relationships. Static JavaScript inspection does not need Hopper, Ghidra or IDA.
- **Native applications:** inspect pseudocode, assembly, strings, symbols, calls and references through Hopper, Ghidra or IDA. Host and format coverage depend on the provider.
- **Android APKs:** inspect manifest declarations, classes and decompiled methods with headless JADX and a full JDK. This is a promising route for understanding a companion app's command construction.
- **Saved network captures:** inspect requests, responses, exposed payloads and source locations from a HAR. The README lists Linux mitmdump for native mitmproxy capture files.
- **.NET assemblies:** static metadata and CIL inspection without a native analysis engine.

These are documented capabilities, not results reproduced on Erlin's applications. REA supplies evidence to help an agent reconstruct or explain a feature; that does not establish that an arbitrary app can be reproduced correctly.

## First useful experiment: one remote command

Suggested question: **How does the companion app construct and send a single volume-up command to an owned device?** This is a proposed investigation, not a claim about the current TV protocol.

1. Choose the actual companion app, version and device. Check existing source or API documentation first.
2. Capture one action and its response, or inspect the supplied APK statically if network capture is unavailable. For HTTP capture, preserve a HAR; a user-installed CA may be insufficient and certificate pinning can block inspection.
3. Ask REA to locate command construction, endpoint, payload fields, authentication state and response parsing. Require source locations or captured request references for each conclusion, and distinguish observed fields from inferred ones.
4. Reproduce only that command in a small local client, then compare its behaviour with the companion app. Record versions, the minimal evidence and the result in the remote project before adding more commands.

For UI feature research in YinYang or Trips, the same approach can start with one observable interaction and its state transitions. This is a possible application, not a tested integration.

## Requirements and boundaries

The checked README requires Node.js 22.x >=22.19, 24.x >=24.11, or 26+, plus npm. Additional tools depend on the analysis route. Its documented setup command is `npx rea-agents setup`; setup changes agent configuration and matching workflow instructions, so review the proposed changes when choosing to install it.

Static JavaScript and .NET inspection read the supplied files without running the target. Runtime capture can run or interact with it using the user's permissions. REA analyses locally; tool results supplied to an agent remain subject to that model provider's data handling. Keep tokens and unrelated personal data out of exported evidence.

## Sources and related notes

- [README at the checked fork commit](https://github.com/fightingentropy/rea/blob/12ee785e5e61132898adecf9424ce6706a2e754a/README.md) — requirements and capabilities checked 2026-10-11.
- [Original discovery post](https://x.com/RoundtableSpace/status/2109165852578992582).
- [Developer Tools](<../bookmarks/Developer Tools.md>) — companion-app capture, ipatool, xtool and scrcpy references.
- [mitmproxy Android certificate guide](https://docs.mitmproxy.org/stable/howto/install-system-trusted-ca-android/).

## Follow-up — 2026-10-16

[REA v6.5.0](https://github.com/morluto/rea/releases/tag/rea-agents-6.5.0) is the release linked in the new bookmark. Its expanded capture/offline-inspection coverage has route-specific requirements; for example, the SQLite operation needs newer Node runtimes than the general minimum. Treat coverage limitations in the release notes as part of the feature.

Compare one concrete investigation with simpler source/network inspection. [This user's comparison](https://x.com/yuhasbeentaken/status/2109235513102057828) reports a plain model finishing first; that is anecdotal evidence, not a benchmark, and does not measure reconstruction correctness.

The existing [fork](https://github.com/fightingentropy/rea) was verified at main `2202e3f0ba556d40cc6e598df1ecbdf1eda56c13`. Upstream main was 111 commits ahead at this check. The fork was not synced and no software was installed during this review.

## Codex skill and MCP setup — 2026-10-16

Installed `rea-agents` 6.5.0 and its matching official `reverse-engineer-anything` skill. The managed skill is at `~/.agents/skills/reverse-engineer-anything/SKILL.md`; CLI is `/opt/homebrew/bin/rea`. Codex's local stdio MCP entry runs `rea mcp`; unrelated Codex settings were verified unchanged, with the setup backup at `~/.codex/config.toml.rea.backup`.

Use `$reverse-engineer-anything` explicitly, or ask Codex to use REA for a supplied app/package/capture and a concrete question. For ordinary source-repository reading, use normal repository tools. The skill is available from the next turn; restart/reconnect Codex to load the new MCP server in a session.

Verification: skill validation and scoped `rea doctor --client codex --skill --json` passed. A separate MCP client initialized REA, listed 207 tools and statically analysed two fixture modules without executing their side effect. This verifies the installed server, not a reconnected active Codex session or a real app investigation.

Deep native decompilation still needs an appropriate Hopper/Ghidra/IDA provider. Android code analysis needs the separate headless JADX MCP JAR; the ordinary installed JADX CLI alone does not satisfy REA's current requirement. Optional Frida instrumentation was not installed. Choose those prerequisites for an actual target.

The fork was synced earlier in this chat to upstream main at `67384b23e56e95da780d73f8e019f9c1585652f8`. The installed CLI follows the published package, independently of later fork commits.

## Ghidra native provider ready — 2026-10-16

Installed Ghidra 12.1.4 through Homebrew and connected it to REA 6.5.0 in the Codex MCP registration. This completes the native-provider prerequisite mentioned above. It uses the existing full ARM64 OpenJDK 21.0.12.1 and Ghidra's bundled ARM64 decompiler.

- `GHIDRA_INSTALL_DIR`: `/opt/homebrew/opt/ghidra/libexec`
- `JAVA_HOME`: `/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home`
- Codex MCP startup timeout: 30 seconds; per-tool timeout: 450 seconds to allow native analysis to finish.

Both paths are saved under `[mcp_servers.rea.env]` in `~/.codex/config.toml`; no shell-wide Java setting was changed. For direct CLI diagnostics in a shell, supply the same environment:

```sh
GHIDRA_INSTALL_DIR=/opt/homebrew/opt/ghidra/libexec \
JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home \
rea doctor --client codex --provider ghidra --skill --json
```

Verification: a separate MCP client launched REA with the saved Codex command and environment, opened a locally compiled ARM64 Mach-O fixture with automatic provider selection, and called `procedure_pseudo_code`. Ghidra 12.1.4 returned the expected multiplication plus `0x11` (17) from the test function. The target's execution marker remained absent, and `close_binary` completed. Scoped doctor passed with that same saved environment; unrelated Codex configuration was verified unchanged.

Restart/reconnect Codex to load the updated MCP environment. Then ask, for example: **Use REA to inspect `/Applications/Example.app` and explain how [one specific feature] works.** This proves native analysis of a small Mac fixture, not every app or runtime workflow. Android headless JADX and optional Frida remain separate prerequisites.

References: [Ghidra Homebrew formula](https://formulae.brew.sh/formula/ghidra), [official Ghidra 12.1.4 release](https://github.com/NationalSecurityAgency/ghidra/releases/tag/Ghidra_12.1.4_build), [REA Ghidra provider](https://github.com/morluto/rea/blob/main/docs/ghidra-provider.md), [Codex MCP configuration](https://learn.chatgpt.com/docs/extend/mcp).
