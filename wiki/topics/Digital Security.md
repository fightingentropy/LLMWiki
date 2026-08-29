---
title: Digital Security
type: topic
domain: dev
sources: ["bookmarks/Reference & Utilities.md", "bookmarks/AI & Agents.md", "bookmarks/Developer Tools.md", "bookmarks/Markets & Crypto.md"]
related: [[AI Agents]], [[Developer_Resources]], [[Technology_Critique]], [[Grok Bot]]
created: 2026-08-29
updated: 2026-08-29
tags: [security, privacy, accounts, devices, least-privilege, phishing]
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
