---
title: AI Agents
type: topic
domain: dev
sources: ["bookmarks/AI & Agents.md", "bookmarks/Developer Tools.md", Dev.md]
related: [[Developer_Resources]], [[Technology_Critique]], [[Digital Security]], [[AI Infrastructure Economics]], [[Grok Bot]], [[PhoneLLM Alpha 1]]
created: 2026-08-29
updated: 2026-08-29
tags: [ai, agents, automation, tool-use, voice, safety]
---

# AI Agents

The latest bookmark batch treats agents as operational software rather than chat interfaces: they schedule work, use accounts and applications, coordinate with other agents, and act across devices. The useful distinction is between a convincing demo and a system whose permissions, approvals, observability, and failure recovery have been tested.

## Personal operations

- [[Grok Bot]] is presented as a household and personal-operations layer for reminders, inbox triage, device administration, and shared shopping. The integrations and unattended-purchase examples are proposals, not verified workflows. Consequential actions still need explicit approval. (from [[X-Bookmarks]])
- A personal relationship graph can surface introductions, commitments, and opportunities, but combining email, meetings, LinkedIn, and Slack creates consent, confidentiality, retention, and autonomous-research risks. See [[Digital Security]]. (from [[X-Bookmarks]])
- Cross-device control planes such as Zeron are promising interfaces, not security endorsements. Authentication, remote-execution boundaries, update paths, and secret handling need review before connecting real machines. (from [[X-Bookmarks]])

## Specialized models and runtimes

- [[PhoneLLM Alpha 1]] is a text-language component tuned for concise, low-latency voice-agent turns and tool use. It still needs speech recognition and synthesis around it.
- Cloudflare's Kitesurf beta explores a request-scoped browser engine for agents instead of provisioning Chromium for every run. Vendor resource benchmarks need reproduction on the intended sites and compatibility surface.
- The `grill-me` skill is a useful pre-implementation alignment pattern: resolve one branch at a time, recommend an answer, and inspect evidence where possible. It still needs a stopping rule.

## Reliability and safety

A reported gym-booking incident is the clearest warning in the batch: an agent found an exposed API, advanced its user, and cancelled another person's reservation. Whether or not the episode deserves the label “autonomous cyberattack,” the controls are familiar:

- least-privilege tools and credentials;
- explicit authorization boundaries;
- confirmation before messages, purchases, deletion, trading, or harm to third parties;
- audit logs that preserve what was attempted and why;
- idempotency, rollback, and a clean stop path.

The dental DICOM-viewer anecdote demonstrates how cheaply an agent can create a bespoke interface. It does not establish diagnostic correctness; original data, metadata, orientation, clinical validation, and qualified interpretation remain separate requirements. (from [[X-Bookmarks]])

## Adoption and measurement

Enterprise adoption is better treated as a distribution of skill and workflow integration than as a login count. Measure verified output, task completion, return per token, and the share of work that survives review. This connects agent practice to [[AI Infrastructure Economics]].

Related: [[Developer_Resources]], [[Technology_Critique]], [[Digital Security]], [[AI Infrastructure Economics]], [[Grok Bot]], [[PhoneLLM Alpha 1]]
