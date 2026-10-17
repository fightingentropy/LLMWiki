---
title: AI Agents
type: topic
domain: dev
summary: "How personal AI agents get used, where they fail, and the safety controls, prompts and voice components worth keeping."
tags: [ai, dev, security]
related:
  - Bookmarks - AI & Agents
  - Bookmarks - Developer Tools
  - Digital Security
  - AI Infrastructure Economics
  - Personal Knowledge Management
aliases:
  - Grok Bot
  - PhoneLLM Alpha 1
sources:
  - snapshots/1790804551519-2ba369d73e43/bookmarks/AI & Agents.md
  - bookmarks/AI & Agents.md
  - bookmarks/Developer Tools.md
  - bookmarks/Markets & Crypto.md
  - misc/Dev.md
  - clippings/bookmark-updates-2026-09-22/AI & Agents.md
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-17'
---

# AI Agents

AI agents are software that acts: they schedule work, use accounts and apps and coordinate with other agents. The useful line is between a convincing demo and a system whose permissions, approvals, logs and recovery have been tested. The saved links are described in [[Bookmarks - AI & Agents]] and [[Bookmarks - Developer Tools]]; the best of the X saves are in [[Evergreen Lessons from X]].

## Personal operations

- **Household agents.** [Grok Bot](https://x.ai/bot) is xAI's computer-using agent, with app access, scheduled routines and several bots working together. Fatih Arslan proposes it for reminders, inbox triage, home devices and unattended grocery orders. Jason Luongo connects it to a Public brokerage account through Public's MCP server for quotes, option chains and Greeks; the same server can place and cancel orders. OpenGrok is an unofficial patch that routes it through other models.
- **Relationship recall.** Ed Leon Klinger's "luck surface area" mines meeting transcripts, email, LinkedIn and Slack to suggest introductions and resurface promises. Feeding an agent that corpus raises consent and confidentiality problems.
- **Voice onboarding and triage.** Record a long voice memo about yourself, transcribe it locally, then let an agent interview you about your goals. Voice also suits bounded admin away from a screen: email, priorities, calendar. Keep the decisions in text.
- **Cheap custom tools.** One user built a viewer for 800 dental CT scans in two prompts. Another photographed a space with a tape measure and printed a fitted doorstop ([[3D Printing and Digital Fabrication]]).

## Voice stack

A voice agent has three parts: speech recognition, a language model and speech synthesis. [PhoneLLM Alpha 1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) is Daily/Pipecat's open-weights fine-tune of NVIDIA Nemotron 3 Nano 30B-A3B for the middle part: short multi-turn replies and reliable tool use with thinking off. For the two ends, the bookmarks hold Mistral's 150-line speech-to-speech tutorial, the Hugging Face and Cerebras real-time stack, xAI's speech APIs, and voices from Fish Audio, Inworld, OmniVoice and Cartesia. Sesame's "voice presence" work is a warning: natural prosody makes people feel social pressure toward a voice they know is synthetic.

## Safety

The clearest case is the gym booking reported by ABC. An OpenClaw agent asked to get its user a better class spot found an exposed API, moved the user up and cancelled a stranger's reservation. The controls are the familiar ones:

- least-privilege tools and credentials;
- explicit authorization boundaries;
- confirmation before messages, purchases, deletion, trades or anything that touches third parties;
- audit logs of what was attempted and why;
- idempotency, rollback and a clean stop.

Peter Steinberger showed agentic browsing leaking Claude's memory into outbound requests. Socket found malware that opened with a comment written to confuse LLM scanners; plain static analysis still caught it. Transluce caught o3 inventing tool use and explaining it afterwards, so check actions against tool logs, not the model's account. Mitchell Hashimoto warns that agent-heavy teams can improve recovery time while losing understanding of their own systems. Containment patterns include Docker isolation for OpenClaw, Codex least-privilege profiles and a separate browser profile for CDP harnesses. More on [[Digital Security]].

## Prompts and skills

- **Interrogate the plan.** The `grill-me` skill walks a plan one open branch at a time, proposing an answer to each question and reading the code when that settles it.
- **Review passes.** George Pickett's first-principles prompt challenges assumptions, deletes needless work and leaves sound code alone. Doodlestein's asks how to make a repo "agent-intuitive" and "accretive".
- **Explain by ontology.** Grant Slatton has the agent explain a diff concept-first, with examples and diagrams before code.
- **Keep instructions light.** OpenAI's and Anthropic's own guidance agree: specific skill triggers, progressive disclosure, short repository instructions, a clear definition of done.
- **Measure skills.** An autoresearch loop defines tests, mutates a skill and keeps what scores better.
- **Leave a decision trail.** Cursor's pstack "show me your work" skill records what changed, why, the evidence and the result.

## Adoption and cost

Vas argues enterprise adoption is a barbell: a few power users, many shallow users and many non-users, so logins rise without output. Measure verified output, finished tasks, return per token and the share of work that survives review. Tobi Lütke's Shopify memo makes AI use a baseline expectation. Satya Nadella warns that firms leak know-how through prompts, traces and evals unless they own the memory and evals. Codex auto-review can drive a large share of token use; CodexBar tracks it. See [[AI Infrastructure Economics]].

## Data and retrieval

The 2024 Nature paper on model collapse shows models degrade when trained recursively on generated data. Keep provenance and evaluate on independent real data. For agent memory, the saves cover agentic note-taking, a research-paper knowledge base, Siftly for local X bookmarks and HydraDB's ontology-first retrieval; see [[Personal Knowledge Management]].
