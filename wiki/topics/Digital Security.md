---
title: Digital Security
type: topic
domain: dev
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
related:
  - Evergreen Lessons from X - September 2026
  - X-Bookmarks
  - Grok Bot
  - AI Agents
  - Developer Resources
  - Technology Critique
  - Quicker
  - Omarchy iCloud Photos
  - Helium Browser
  - Bookmarks - Reference & Utilities
  - Bookmarks - Developer Tools
  - Bookmarks - Business & Startups
  - Bookmarks - Personal & Life
created: 2026-08-29T00:00:00.000Z
updated: '2026-09-30'
tags:
  - security
  - privacy
  - accounts
  - devices
  - least-privilege
  - phishing
---

# Digital Security

A practical security layer connecting account recovery, phone theft, automated phishing, and agent permissions.

## Account and phone baseline

- Use a password manager with unique credentials; prefer passkeys or hardware security keys where supported.
- Keep software current and verify unexpected recovery, payment, and login requests through an independent channel—even when voice or video appears familiar.
- On iPhone, use a strong non-obvious passcode, Find My, Send Last Location, a trusted recovery contact, carrier number-transfer protection, and Stolen Device Protection. Apple's current guidance should override social-media checklists because feature dependencies can change. (from [[X-Bookmarks]])

## Agents and connected accounts

A connector's product label does not define its authority. The Public brokerage MCP example exposes both market-data tools and order placement/cancellation; connecting it is not inherently read-only. The safe sequence is to enumerate callable tools, disable mutation where possible, scope credentials, and require separate approval for trades. (from [[X-Bookmarks]])

The same rule applies to [[Grok Bot]], relationship graphs, and cross-device agent controllers: narrow role, minimum data, explicit approval for consequential actions, complete logs, and tested revocation.

## Deliberately weakened boundaries

The macOS `ComputerUseAllowForbiddenTargets` preference relaxes a safety boundary. It belongs in troubleshooting notes, not default setup: enable only for a understood target and delete the preference afterward. Experimental censorship-bypass features such as TLS ClientHello splitting can also make traffic fail or stand out; suitability depends on the network and personal risk.

Related: [[AI Agents]], [[Developer_Resources]], [[Technology_Critique]], [[Grok Bot]]

## September 2026 account and provenance references

- [[Quicker]] raises the distinction between storing messages locally and processing, syncing, or backing them up elsewhere.
- [[Omarchy iCloud Photos]] separates downloading copies from operations that change iCloud, including Shared Library assets.
- [[Helium Browser]] gathers privacy-feature references; TLS fragmentation and debugging-warning changes remain version-specific.
- The source retains KYC misuse only by link and a privacy-risk summary, without exposed identity data. Private-account graph inference is catalogued as a privacy-risk claim, not a workflow to perform.
- Content credentials, reverse-image search, account-recovery services, and disposable phone numbers involve different provenance and recovery boundaries; a missing marker or search result does not itself establish authorship or identity.
- An account-console bookmark is a navigation reference. It is not evidence that a service is connected, installed, or activated.

Sources: [[Bookmarks - Reference & Utilities]], [[Bookmarks - Developer Tools]], [[Bookmarks - Business & Startups]], and [[Bookmarks - Personal & Life]].

## Privacy has separate layers

A VPN exit address is only one signal. Account activity, browser configuration and locale can remain identifying. MDN documents possible address exposure through WebRTC ICE candidates and a relay-only application policy; the actual exposure depends on configuration. Encrypted DNS protects DNS exchanges, not every traffic or identity signal. Check the actual device and browser rather than relying on universal bypass or anonymity claims. (from [[Bookmarks - Developer Tools]])

The complete evergreen selection is [[Evergreen Lessons from X - September 2026]].
