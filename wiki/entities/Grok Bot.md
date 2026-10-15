---
title: Grok Bot
type: entity
domain: dev
sources:
  - bookmarks/AI & Agents.md
  - bookmarks/Developer Tools.md
  - bookmarks/Markets & Crypto.md
related:
  - AI Agents
  - Digital Security
  - Developer Resources
  - X-Bookmarks
  - Bookmarks - AI & Agents
  - Bookmarks - Developer Tools
  - Bookmarks - Markets & Crypto
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-15'
tags:
  - grok
  - agent
  - automation
  - personal-operations
  - mcp
summary: "Grok Bot's confirmed features, the household and brokerage workflows proposed for it, the OpenGrok patch, and the approval controls those uses call for."
---

# Grok Bot

Grok Bot is a computer-using agent product, with a product page at [x.ai/bot](https://x.ai/bot). The page confirms app access through a computer, scheduled routines and multi-bot work. This wiki holds the uses people propose for it, an unofficial patch for it (OpenGrok), and the permission controls those uses call for. None of the workflows below has been tested here. (from [[X-Bookmarks]])

## What the product page confirms

- Computer-based access to apps.
- Scheduled routines.
- Multi-bot work.

Subscription eligibility and limits are time-sensitive.

## Proposed uses

Fatih Arslan's post suggests a household and personal-operations setup (from [[Bookmarks - AI & Agents]]):

- Messaging reminders.
- Inbox triage.
- Home-device administration.
- Collaborating bots.
- A shared family shopping workflow, including an unattended grocery-ordering example.

The specific integrations and the grocery example are the author's suggestions.

Jason Luongo's walkthrough links Grok Bot to a Public brokerage account for quotes, option chains, Greeks and multi-leg strategy quotes through Public's MCP server (from [[Bookmarks - Markets & Crypto]]). The official server documents those read tools, but it also exposes order-placement and cancellation tools, so connecting it is not inherently read-only. Public's quote endpoint provides live market data; check account eligibility, entitlements, timestamps and market hours rather than assuming the thread's free-access claim applies to everyone.

## Controls

[[Digital Security]] controls apply to any agent with account access:

- Give each bot a narrow role.
- Review connected-account permissions.
- Require explicit approval for purchases, deletion, messages, trades and other consequential actions.
- Keep credentials in secure configuration and limit tools to the intended scope.

## OpenGrok

OpenGrok is an unofficial Python patch that routes Grok Bot through subscription, API or local models. It adds a model picker and diagnostic tooling. It depends on Grok Bot internals, so product updates may break it. Before running it on a real profile, inspect the installer, code, credential handling, licence, network access and account terms. It is unrelated to Oracle's similarly named source-browser project. (from [[X-Bookmarks]])

## Links

- [Grok Bot product page](https://x.ai/bot) — The product page that confirms app access through a computer, scheduled routines and multi-bot work.
- [Grok Bot as a household and personal-operations assistant](https://x.com/fatih/status/2092673633835426033) — Fatih Arslan's post suggesting reminders, inbox triage, home-device administration, collaborating bots and a shared family shopping workflow. _(@fatih)_
- [OpenGrok model-routing patch for Grok Bot](https://github.com/OnlyTerp/opengrok) — The repository for the unofficial Python patch that routes Grok Bot through subscription, API or local models.
- [OpenGrok announcement](https://x.com/OnlyTerp/status/2093077239873069058) — OnlyTerp's post presenting the patch, its model picker and its diagnostic tooling. _(@OnlyTerp)_
- [Public market data via MCP](https://github.com/PublicDotCom/publicdotcom-mcp-server) — Public's MCP server. It has read tools for market data plus order placement and cancellation, so scope it before connecting it to an agent.
- [Grok Bot walkthrough for Public brokerage data](https://x.com/JasonL_Capital/status/2093130738371539046) — Jason Luongo's thread connecting a Public account to quotes, option chains, Greeks and multi-leg strategy quotes. _(@JasonL_Capital)_
- [Public quote endpoint documentation](https://public.com/api/docs/resources/market-data/get-quotes) — Public's API reference for live market-data quotes.

## Related

[[AI Agents]] · [[Digital Security]] · [[Developer_Resources|Developer Resources]] · [[X-Bookmarks]] · [[Bookmarks - AI & Agents]] · [[Bookmarks - Developer Tools]] · [[Bookmarks - Markets & Crypto]]
