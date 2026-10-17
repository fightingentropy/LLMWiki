---
title: Digital Security
type: topic
domain: dev
summary: "A practical baseline for accounts, phones, agents with account access, browsers and network privacy."
tags: [security, dev, ai]
related:
  - AI Agents
  - Bookmarks - Reference & Utilities
  - Bookmarks - Developer Tools
  - Omarchy
  - Developer Resources
aliases:
  - Helium Browser
sources:
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - bookmarks/Reference & Utilities.md
  - bookmarks/AI & Agents.md
  - bookmarks/Developer Tools.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Reference & Utilities.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/Business & Startups.md
  - clippings/bookmark-updates-2026-09-22/Personal & Life.md
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-17'
---

# Digital Security

Digital security here is a practical layer across accounts, phones, AI agents with account access, browsers and network privacy. The rules come from saved checklists, vendor documents and posts, described in [[Bookmarks - Reference & Utilities]], [[Bookmarks - Developer Tools]] and [[Bookmarks - AI & Agents]].

## Accounts and phones

- Use a password manager with unique passwords, and passkeys or hardware keys where supported. Andrej Karpathy's digital-hygiene list adds several hardware keys for critical accounts, random answers to security questions, full-disk encryption, fewer IoT devices, encrypted messaging, tracker blocking, and keeping personal life off work devices.
- Prefer authenticator-app MFA to SMS.
- Confirm unexpected recovery, payment and login requests through a separate channel, even when the voice or video looks familiar.
- On iPhone: a strong passcode, Find My, Send Last Location, a recovery contact, carrier number-transfer protection, and Stolen Device Protection set to "Always". Check what the lock screen exposes.
- Contradiction: a widely shared theft thread says to turn off Significant Locations, but Apple's support page requires it for Stolen Device Protection. Follow Apple.
- Never put a disposable phone number on an account whose recovery matters.
- Proton Pass and Bitwarden are cheaper alternatives to 1Password with open-source clients; compare family sharing, passkeys, emergency access and export before switching.

## Agents with account access

A connector's name does not define its power. Public's brokerage MCP server reads quotes and option chains but can also place and cancel orders. List every callable tool, switch off what writes, scope the credentials and require separate approval for trades.

The same applies to any agent with real accounts, from Grok Bot to relationship graphs to cross-device controllers: a narrow role, the minimum data, explicit approval for consequential actions, complete logs and tested revocation. Codex permission profiles show least privilege in practice: inheritable filesystem rules, per-domain network access, Unix-socket policy and fail-closed admin allowlists. WhatsApp accounts linked to OpenClaw-style agents can be fingerprinted. A chatbot feels like a confessional, not a search box, so people tell it more; warmth is not confidentiality. See [[AI Agents]].

## Boundaries you weaken on purpose

The macOS `ComputerUseAllowForbiddenTargets` preference relaxes a Computer Use safety boundary. Turn it on only for a known target, then remove it:

```sh
defaults write -g ComputerUseAllowForbiddenTargets -bool YES
defaults delete -g ComputerUseAllowForbiddenTargets
```

TLS ClientHello splitting, a censorship-bypass trick, can get past simple filters but can also fail or make traffic stand out.

## Helium Browser

Helium is a Chromium-based desktop browser with ad and tracker blocking on by default, less reliance on Google services and opt-in browser services. Its FAQ (22 September 2026) lists no sync, no mobile app, no Widevine media and no built-in password manager. Version 0.17.2 added CNAME uncloaking in the built-in uBlock Origin, keychain safeguards, Global Privacy Control, optional ClientHello splitting and lazy tab restore; sync and mobile are next. Its developer, wukko, asked users on censored networks to test ClientHello splitting with secure DNS.

## Where your data goes

- Storing messages locally is not the same as processing, syncing or backing them up elsewhere. Ask which applies before connecting a unified inbox such as Quicker.
- A photo client that downloads copies differs from one that can delete iCloud originals, including Shared Library items; see [[Omarchy]].
- A bookmarked account console is a shortcut, not proof a service is connected.
- Samsung TVs collect viewing data through optional automatic content recognition under "Viewing Information Services"; turn it off in the TV's privacy settings.
- iOS 27's Writing Assistance can be disabled through Screen Time restrictions.

## Identity and provenance

- Content-credential metadata on AI-generated files is easy to strip or lose, so no system should rely on it surviving.
- A viral image can stay unidentified despite reverse-image search; a missing result proves nothing about authorship or identity.
- Two saves are kept only as risk references: a post selling identity details for KYC bypass, and a project advertised as inferring private Instagram interactions.

## Privacy has layers

A VPN hides the exit address and nothing else. Account activity, browser setup and locale still identify you; WebRTC ICE candidates can expose addresses unless the app forces relay-only; encrypted DNS protects lookups, not all traffic. Test the actual device and browser.

- A VPN is a technique, not a product: WireGuard or OpenVPN on any server makes one, so blocking providers does not block VPNs.
- Commercial no-log and no-KYC promises are the vendor's word.
- Cloudflare's `1.1.1.2` and `1.0.0.2` resolvers block known-malicious domains at the router; that is a filter, not antivirus.
- Remote access has two separate locks: network reachability (Tailscale) and SSH or desktop authentication. Plan for the connection dropping.
