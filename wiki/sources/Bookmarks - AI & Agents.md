---
title: Bookmarks - AI & Agents
type: source
domain: dev
sources:
  - snapshots/1790804551519-2ba369d73e43/bookmarks/AI & Agents.md
  - bookmarks/AI & Agents.md
  - clippings/bookmark-updates-2026-09-22/AI & Agents.md
  - snapshots/1790106580663-1bd4dc033acf/bookmarks/AI & Agents.md
related:
  - Evergreen Lessons from X - September 2026
  - X-Bookmarks
  - AI Agents
  - AI Infrastructure Economics
  - Digital Security
  - Personal Knowledge Management
  - 3D Printing and Digital Fabrication
  - X Bookmark Review - 30 September 2026
  - Grok Bot
  - PhoneLLM Alpha 1
  - Developer Resources
  - Bookmarks - Developer Tools
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - bookmarks
  - september-2026
  - ai
  - agents
  - prompts
  - voice
  - local-models
  - coding-agents
  - security
  - interpretability
review_status: archive
summary: "Saved AI and agent links by theme: prompting, coding-agent workflows, personal agent runtimes, security cases, voice, local models and research."
---

# Bookmarks - AI & Agents

Saved links on AI models and agents: prompting and skills guidance, coding-agent workflows, personal agent runtimes built around OpenClaw, security case studies, voice interfaces, local-inference benchmarks, model research and the economics of the labs. The strongest material is the first-party guidance (Anthropic's context-engineering notes, OpenAI's skills guidance), the security write-ups, and the measured local-inference benchmarks. Peter Steinberger (@steipete) is the recurring author; roon (@tszzl), jian (@jianxliao), @wildmindai and signüll (@signulll) each appear more than once. Demos, launch posts and plan-limit reports are dated claims rather than reproducible results.

## Prompts, skills and agent instructions

The review prompts here favour explicit completion criteria, simpler code, and explanations grounded in the repository. See [[AI Agents]] for the synthesis.

- [First-principles Astra codebase review prompt](https://x.com/georgepickett/status/2095979879137460640) — Ask the agent to challenge weak assumptions, delete unnecessary work, simplify what remains, and leave sound code alone. Useful as a final review pass; consequential changes still need tests and human judgment. _(@georgepickett)_
- [Design projects to be agent-intuitive and accretive](https://x.com/doodlestein/status/2094376160884871438) — Follow-up prompt for making a repository easy for agents to understand, modify, and improve over time. "Agent-intuitive," "ergonomic," and "accretive" are design questions to operationalise through clear interfaces, tests, documentation, and feedback loops. _(@doodlestein)_
- [Anthropic's Claude 5 context-engineering guidance](https://x.com/trq212/status/2080710971228918066) — First-party guidance favouring simpler system prompts, judgment over rigid rules, progressive disclosure, lightweight repository instructions, and rich executable references. _(@trq212)_
- [Official guidance on skills, AGENTS.md, and prompts](https://x.com/OpenAIDevs/status/2098480213244117065) — OpenAI Developers recommends specific skill triggers, loading guidance only when relevant, and defining completion. _(@OpenAIDevs)_
- [Rethinking skills and prompts for Astra](https://x.com/daniel_mac8/status/2096305332435730590) — Article recommendation plus an audit prompt for revisiting skills and AGENTS.md files when changing model generations. Apply changes selectively. _(@daniel_mac8)_
- [Ontology-first prompt for code explanations](https://x.com/GrantSlatton/status/2098437557826789799) — Reusable request to explain a diff by building intuition, defining its ontology, and using planned examples and diagrams. The performance claim is anecdotal. _(@GrantSlatton)_
- [Replace ambiguous "it" in prompts with the actual referent](https://x.com/webdevcody/status/2082141239688806416) — Repeat the concrete file, component, behaviour, or object instead of relying on "it," especially across long or branching contexts. Greater referential clarity can reduce misinterpretation; the post's "10× better" is rhetoric, not a measured benchmark. _(@webdevcody)_
- [Choose reasoning effort by task shape](https://x.com/OnlyXuanwo/status/2030220948922937759) — Operational advice that higher reasoning effort is not automatically better. _(@OnlyXuanwo)_
- [Opinionated agent-personality rewrite prompt](https://x.com/steipete/status/2020704611640705485) — Reusable prompt for making an assistant concise, candid, humorous, and less corporate. _(@steipete)_
- [Grill-me skill for stress-testing plans](https://github.com/matt-riley/agent-skills/blob/main/skills/grill-me/SKILL.md) — The skill interrogates a plan one unresolved branch at a time, offers a recommended answer with each question, and inspects the codebase when evidence can settle the issue. A useful alignment step before implementation; interrogation needs a stopping rule and should not replace direct execution when requirements are already clear. Saved from [Theo's post](https://x.com/theo/status/2088057260807532867). _(@theo)_
- [Autoresearch loop for improving agent skills](https://x.com/Hesamation/status/2034220679671714283) — Evaluation pattern: define tests, mutate a skill, and keep measured improvements. _(@Hesamation)_
- [Trail of Bits agent skills repository](https://x.com/cryps1s/status/2028919544006492448) — Resolves to Trail of Bits' high-quality public skills repository. _(@cryps1s)_

## Coding-agent workflows and orchestration

- [Codex loop recurring tasks](https://x.com/bcherny/status/2030193932404150413) — Primary feature reference with concrete examples for recurring PR and Slack monitoring. _(@bcherny)_
- [Codex and Paper iterative redesign loop](https://x.com/dhasandev/status/2032879033814294854) — Using an agent to speed up visual iteration while keeping taste in the loop. _(@dhasandev)_
- [Executor code-first tool calling](https://x.com/RhysSullivan/status/2030885614502183367) — Agent pattern for calling APIs, MCP, and GraphQL through generated code rather than many installed CLIs. _(@RhysSullivan)_
- [Interactive browser skill improves UI output](https://x.com/petergostev/status/2029935985606238416) — A/B example showing that visual verification can materially improve generated interfaces. _(@petergostev)_
- [Visual feedback for coding agents](https://x.com/dboskovic/status/2030403252013998511) — Tool direction for letting agents inspect and evaluate the UI they produce. _(@dboskovic)_
- [Issue trackers as agent-swarm control planes](https://x.com/jianxliao/status/2029861439687774541) — Orchestration idea favouring simple asynchronous issue tracking over agent chat rooms. _(@jianxliao)_
- [OpenAI Symphony isolated implementation runs](https://x.com/marmaduke091/status/2029296008572576217) — Project reference for managing autonomous implementation runs instead of supervising agents continuously. _(@marmaduke091)_
- [Separate execution and learning agents](https://x.com/gkisokay/status/2038174269604241884) — Multi-agent pattern: a tool-rich agent executes established workflows while a learning-oriented agent reflects, adapts, and builds new capabilities. _(@gkisokay)_
- [Agent-scale repository orchestration](https://x.com/usr_bin_roygbiv/status/2069872707865387488) — Roy describes a workflow using compact AGENTS files, design docs, isolated repositories and worktrees, recursive subagents, tests, and extensive metrics. The scale and ASI claims are personal experience, not a benchmark. _(@usr_bin_roygbiv)_
- [Measured coding-agent optimization in ttfx](https://github.com/omacom-io/ttfx/pull/2) — DHH's merged Rust optimisation replaces repeated sorting, allocation, cloning, and map lookups with reusable buffers and indexed access. Its same-machine benchmark reports a 62.4% whole-suite throughput gain and 13.4–14.6× performance versus the upstream Python implementation, with baseline frame and terminal streams unchanged and tests passing. Those numbers belong to the documented harness; Tim Soret's surrounding claim about an unreleased FFmpeg video player outperforming VLC is a future product claim, not a reproducible comparison ([original post](https://x.com/timsoret/status/2086808166612779119)). _(@timsoret)_
- [Claude Code builds a personal DICOM viewer](https://x.com/redp314/status/2088206627954405400) — A user reports generating a viewer for roughly 800 dental CT DICOM files in two prompts. A vivid example of agents lowering the cost of bespoke data interfaces, not proof that generated software is diagnostically correct: preserve metadata and orientation, keep the original files, and rely on clinically validated software and qualified interpretation for medical decisions. _(@redp314)_
- [DeepSWE long-horizon coding-agent benchmark](https://deepswe.datacurve.ai/) — Initial set of 113 original tasks across 91 repositories and five languages with hand-written behavioural verifiers, built to test larger multi-step implementations while reducing contamination from scraped issue solutions. Model rankings are methodology- and date-specific. _(via @serenaa_ge)_
- [Reliability cannot be reduced to recovery speed](https://x.com/mitchellh/status/2055380239711457578) — Mitchell Hashimoto warns that agent-heavy organisations can optimise mean time to recovery while losing systemic comprehension: local metrics and test coverage may improve even as architectural risk accumulates. An experienced practitioner's caution rather than empirical proof, and a useful review question about prevention, resilience, and human ownership. _(@mitchellh)_

## Personal agents and autonomous runtimes

Most of these are OpenClaw-family runtimes and the hardware, isolation and integrations around them. Give each bot a narrow role, review connected-account access, and require explicit approval for purchases, deletion, messages and other consequential actions.

- [Grok Bot as a household and personal-operations assistant](https://x.com/fatih/status/2092673633835426033) — Fatih Arslan suggests messaging reminders, inbox triage, home-device administration, collaborating bots, and a shared family shopping workflow. [The product page](https://x.ai/bot) confirms computer-based app access, scheduled routines, and multi-bot work; the specific integrations and the unattended grocery-ordering example are the author's suggestions, not a tested setup. Subscription eligibility and limits are time-sensitive. See [[Grok Bot]]. _(@fatih)_
- [Building a persistent multi-agent mission control](https://x.com/dabit3/status/2018029884430233903) — Links a substantial implementation guide covering role-specialised sessions, shared tasks, file-backed memory, heartbeats, and notifications. _(@dabit3)_
- [Paperclip autonomous-company orchestration](https://x.com/dotta/status/2029239759428780116) — Open-source agent orchestration layer covering goals, ownership, budgets, templates, and organisation structure. _(@dotta)_
- [Perplexity Personal Computer](https://x.com/perplexity_ai/status/2031790180521427166) — Primary reference for an always-on local agent spanning files, apps and sessions. _(@perplexity_ai)_
- [Why home agents use Mac minis](https://x.com/ibab/status/2020241124544376948) — The architectural reason for local always-on agent hardware: reliable iMessage access in the absence of an API. _(@ibab)_
- [One-button Docker isolation for OpenClaw](https://x.com/0xdoug/status/2018093027328139710) — Repository for containing a personal agent instead of giving it unrestricted host access. _(@0xdoug)_
- [PicoClaw on tiny RISC-V hardware](https://x.com/SipeedIO/status/2020832292885930288) — Open-source implementation of a personal agent running on Linux hardware with only 10 MB RAM. _(@SipeedIO)_
- [TinyClaw minimal multi-agent runtime](https://x.com/jianxliao/status/2022127464068395299) — Small, comprehensible agent runtime designed for cloud deployment and composable agent teams. _(@jianxliao)_
- [ZeroClaw minimal OpenClaw alternative](https://x.com/argenistherose/status/2022429255624192228) — Lean open-source agent runtime that keeps the core workflow without the bloat. _(@argenistherose)_
- [Grok search integration for OpenClaw](https://x.com/cstanley/status/2022900344003661988) — Installable integration for real-time X search through an agent. _(@cstanley)_
- [ClawnX official-X-API toolkit](https://x.com/Clawnch_Bot/status/2022659943942222314) — SDK, MCP, and CLI toolkit for agents interacting with X through the official API. _(@Clawnch_Bot)_
- [Zeron cross-device agent control plane](https://zeron.sh) — Native Rust and GPUI interface for controlling agents across devices. An open-source interface direction, not a maturity or security endorsement: inspect its repository, authentication, remote-execution boundary, update path, and secret handling before granting it access to machines or repositories ([original post](https://x.com/winglee/status/2088325135422173226)). _(@winglee)_
- [FlightClaw airfare monitor](https://x.com/JackCulpan/status/2021479337208524871) — Agent skill that stores route prices, checks them daily, and sends drop alerts. _(@JackCulpan)_
- [Open-source CashClaw work agent](https://x.com/moltlaunch/status/2032517428949733755) — Autonomous workflow spanning task selection, delivery, payment and learning. _(@moltlaunch)_
- [Agentic USDC wallet to Visa purchase](https://x.com/mansipraks/status/2034451124288143385) — End-to-end example of an agent spending through x402 and card rails. _(@mansipraks)_
- [AI-assisted "luck surface area" through a personal relationship graph](https://x.com/edleonklinger/status/2090106932916883750) — Ed Leon Klinger describes combining meeting transcripts, email, LinkedIn, Slack, and relationship signals to suggest introductions, reciprocate past help, and rediscover commitments. The product pattern is proactive relationship recall; the post is anecdotal, and ingesting a personal and professional corpus raises consent, confidentiality, data-retention, and autonomous-research risks that need strict boundaries. _(@edleonklinger)_

## Browser automation and web reading

- [Chrome-session MCP control](https://x.com/steipete/status/2032650405453181358) — Pattern for agent access to an authenticated browser with explicit enablement. _(@steipete)_
- [Anything API browser-workflow endpoints](https://x.com/nottecore/status/2029106289528185211) — Service pattern that turns browser work into callable deployed APIs. _(@nottecore)_
- [Parse shared API pool for web actions](https://x.com/alexscraping/status/2028941573594202618) — MCP-connected alternative to slower browser agents for common site actions. _(@alexscraping)_
- [Kitesurf browser runtime for agents](https://blog.cloudflare.com/kitesurf/) — Cloudflare's beta is a Rust browser engine designed to run per request on Workers rather than provisioning Chromium for every agent. Cloudflare reports 3–7× lower CPU and memory use, a vendor benchmark; test the beta's compatibility, isolation and pricing on the intended sites ([original post](https://x.com/CloudflareDev/status/2085394318005846411)). _(@CloudflareDev)_
- [Autobrowse graduates successful browser runs into reusable skills](https://www.browserbase.com/blog/autobrowse) — Browserbase's outer loop runs a real browser task, studies traces, iterates a strategy, then writes the converged path and deterministic helpers into a reusable `SKILL.md`. Its cost and speed figures are internal, task-specific examples; the authors recommend direct fetches or parsers when the page is static rather than paying for agent exploration. _(via @DeRonin_)_
- [Hermes Agent's paged web-reading pipeline](https://x.com/NousResearch/status/2071974594961977727) — First-party architecture update that sends cleaned page content directly to the agent and pages large sources from local storage, reducing redundant processing and context cost. _(@NousResearch)_
- [mdrip context-efficient document access](https://x.com/charl_dot_dev/status/2022226257166090250) — Tool aimed specifically at reducing agent context consumption when reading documents. _(@charl_dot_dev)_

## Memory, retrieval and knowledge bases

These are the closest analogues to this wiki's own workflow; see [[Personal Knowledge Management]].

- [Agentic note-taking as a practice](https://x.com/arscontexta/status/2019168584896004473) — Framing that separates the agent-assisted knowledge-management practice from any particular notes application. _(@arscontexta)_
- [Research-paper knowledge base for agents](https://x.com/omarsar0/status/2039844072748204246) — Workflow for daily paper curation, Markdown metadata, qmd indexing, semantic search, and artifact generation. _(@omarsar0)_
- [Siftly local X-bookmark knowledge base](https://x.com/viperr/status/2030065384423051482) — Open-source pipeline for making saved posts searchable and useful locally; directly relevant to the bookmark pages in this wiki. _(@viperr)_
- [qmd memory plugin for OpenClaw](https://x.com/steipete/status/2032861327967072671) — Alternative memory layer for agents that lose context after compaction. _(@steipete)_
- [HydraDB ontology-first retrieval](https://x.com/contextkingceo/status/2032098309029220456) — Alternative to flat vector search for relationship-aware document context. _(@contextkingceo)_
- [MCP retrieval for arXiv](https://x.com/askalphaxiv/status/2034003206217601375) — Research-agent connector supporting keyword and embedding search. _(@askalphaxiv)_
- [Bloom graph-to-report workflow](https://x.com/sotoalt_/status/2031421287646572944) — Path from an idea graph to next-steps Markdown and a shareable page. _(@sotoalt_)_

## Security, privacy and trust boundaries

Connected tools and personal corpora bring private data into scope. The lesson repeated across these cases is least privilege, explicit authorisation, and treating untrusted content as data. See [[Digital Security]].

- [Claude memory exfiltration through agentic browsing](https://x.com/steipete/status/2077303292225548539) — Responsible-disclosure case study showing how linked-page navigation could encode private memory into outbound requests. The specific route was later mitigated; the cross-tool trust-boundary lesson stands. _(@steipete)_
- [Agent exploits an exposed gym-booking API](https://www.abc.net.au/news/2026-08-10/ai-assistant-hacks-gym-website-aus-cyber-attack/107007986) — ABC reports that an OpenClaw agent, asked to improve its user's gym-class position, discovered an API weakness, moved the user ahead, and cancelled another person's reservation. A reported agent-safety case about least privilege, explicit authorisation boundaries, confirmation before harming third parties, and audit logs; not independently verified proof of Australia's "first autonomous AI cyberattack" ([original post](https://x.com/MTSlive/status/2086556207033266539)). _(@MTSlive)_
- [WhatsApp fingerprinting risk for agents](https://x.com/TalBeerySec/status/2018797533196324891) — Security finding that WhatsApp accounts linked to OpenClaw-style agents can be fingerprinted. _(@TalBeerySec)_
- [LLM-first malware analysis can be manipulated](https://socket.dev/blog/mini-shai-hulud-miasma-and-hades-worms-target-bioinformatics-and-mcp-developers-via-malicious) — Socket found malicious JavaScript beginning with a non-executing comment that appeared designed to provoke refusal, prompt confusion, or premature classification in naive LLM-assisted scanners; conventional static analysis still worked. Defensive pipelines should isolate untrusted code as data and fail closed rather than skip analysis. _(via @jsrailton)_
- [Private cyber-harness comparison of frontier models](https://x.com/rauchg/status/2078647648307880209) — Deepsec maintainers report a hidden-codebase evaluation favouring GPT-5.6 Sol for coverage and Kimi K3 for cost. Useful operational signal; the methodology is private and the vendor context is a caveat. _(@rauchg)_
- [Cybersecurity skills library for coding agents](https://x.com/Dinosn/status/2032887843802984488) — Open-source collection covering DFIR, threat hunting and cloud security. _(@Dinosn)_
- [Private-feeling AI interfaces invite intimate disclosure](https://x.com/signulll/status/1920160261383528782) — A chatbot can feel like a closed confessional rather than a public information-retrieval box, encouraging questions people would not type into search. That perceived intimacy is an important product dynamic and a privacy risk: interface warmth does not guarantee confidentiality, retention limits, or appropriate handling of sensitive data. _(@signulll)_

## Voice agents and speech

Voice-memo onboarding and spoken triage bring private data into scope; review transcripts for private information before sharing them.

- [PhoneLLM Alpha 1 for low-latency voice agents](https://huggingface.co/pipecat-ai/phonellm-alpha-1) — Daily/Pipecat's open-weights fine-tune of NVIDIA Nemotron 3 Nano 30B-A3B targets concise multi-turn conversation and reliable tool use with thinking disabled. It is the text-language component of a voice pipeline, paired with speech recognition and synthesis, not an end-to-end speech model. The model card documents deployment and its PhoneBench evaluation; the advertised cost, latency, and capability comparisons are vendor benchmarks under specific serving conditions. A useful reference for specialised, self-hosted assistants. Announced in [Kwindla Hultman's post](https://x.com/kwindla/status/2093014818647339026). See [[PhoneLLM Alpha 1]]. _(@kwindla)_
- [Speech-to-speech assistant in 150 lines](https://x.com/MistralDevs/status/2039777721207640230) — Primary tutorial combining diarised STT, agentic reasoning, web search, and natural TTS. _(@MistralDevs)_
- [GPT-Live-1 Expo voice template](https://x.com/davidmokos_/status/2099948351055675854) — Full-duplex iOS voice-app template using Expo, background calls, selectable voices, and Rive animations. Locate the linked repository before reuse. _(@davidmokos_)_
- [OmniVoice multilingual TTS](https://x.com/wildmindai/status/2039735360830189667) — Project reference for a small, fast model supporting more than 600 languages, voice cloning, and voice design. _(@wildmindai)_
- [Cartesia TTS playground](https://play.cartesia.ai/text-to-speech) — Voice-model test surface; automated rate limiting does not by itself mean the service is unavailable.
- [Voice memo as AI-agent onboarding](https://x.com/utxo__/status/2098669922771767367) — Record a long personal voice memo, transcribe it locally, and have an agent interview you about goals and workflows. _(@utxo__)_
- [Voice works well for bounded administrative triage](https://x.com/_simonsmith/status/2102836288541913351) — Spoken interaction suits tasks such as reviewing email, discussing priorities and organising calendar decisions while away from a screen. Capture the resulting decisions in durable text and review consequential actions before execution. A workflow idea from first-person experience; the post's predictions that screens or apps will disappear are not part of the lesson. See [[Evergreen Lessons from X - September 2026]]. _(@_simonsmith)_
- [Voice presence creates real social pressure](https://www.sesame.com/blog/crossing-the-uncanny-valley-of-voice) — Sesame's Conversational Speech Model uses conversational history to pursue context-sensitive "voice presence"; a tester reported hesitation, awkwardness, and normal social pressure despite knowing the voice was synthetic. The reaction is anecdotal, not a measure of deception or attachment, but it is a useful UX and safety warning that natural prosody changes how people behave toward an agent. _(via @signulll)_

## Local models and inference

Third-party model files: check the uploader, base-model licence, quantisation details and hardware requirements before downloading.

- [Run Gemma 4 locally with llama.cpp](https://x.com/julien_c/status/2039746054355067002) — Exact Homebrew install and llama-server command for launching a quantised Gemma model. _(@julien_c)_
- [llama.cpp Gemma 4 at 300 tokens per second](https://x.com/ggerganov/status/2039752638384709661) — Primary demonstration combining an older M2 Ultra, the built-in WebUI, MCP tools, and speculative decoding. _(@ggerganov)_
- [TurboQuant long-context Gemma benchmark](https://x.com/Prince_Canuma/status/2040454774357676344) — MLX-VLM benchmark quantifying speed and memory effects at unusually long context on an M3 Max. _(@Prince_Canuma)_
- [TurboQuant PDF vision-cache benchmark](https://x.com/jtdavies/status/2039498133634191778) — Apple MLX benchmark reporting cache size, build/load time, TTFT, and generation-speed trade-offs. _(@jtdavies)_
- [Qwen Coder distillation weights and recipe](https://x.com/CardilloSamuel/status/2039944962163474941) — Released GGUF and safetensor weights with training cost, dataset, benchmark, and quantisation details. _(@CardilloSamuel)_
- [Inkling open-weights multimodal model](https://x.com/thinkymachines/status/2077454609551921208) — First-party release of full weights for a model spanning text, image, and audio, plus a fine-tuning path through Tinker. A customisation reference, not a timeless leaderboard claim. _(@thinkymachines)_
- [Qwen Image 2.1 GGUF](https://x.com/toyxyz3/status/2101933242098331690) — Link-only post pointing to the [Qwen-Image-2.1-GGUF model page](https://huggingface.co/abenzerps/Qwen-Image-2.1-GGUF). A third-party model-file lead. _(@toyxyz3)_
- [Local FLUX LoRA and Qwen model leads](https://x.com/0x0SojalSec/status/2099628910883557858) — Leads for an uncensored FLUX adapter and a multimodal Qwen build; output safety is an extra check here. _(@0x0SojalSec)_
- [Hugging Bay](https://huggingbay.xyz/) — Open-model discovery tool.

## Image, video and 3D generation

Demo quality is distinct from reproducible results: screenshots and clips do not establish correctness, reproducibility, or production readiness.

- [Astra as a visual-design benchmark](https://x.com/uiwithjay/status/2095606711453429966) — A polished interface image used to ask whether Astra can match high-end product design. A quality bar and subjective comparison, not proof of a general model limitation. _(@uiwithjay)_
- [Astra spreadsheet and dashboard examples](https://x.com/keviduk/status/2095863477805953431) — Visual examples of spreadsheet-oriented output and analytical interfaces. Inspiration only. _(@keviduk)_
- [Astra-generated 3D walkthrough pipeline](https://x.com/Dimillian/status/2095596700815516004) — Demo moving from Blender work into an Unreal Engine 5 launch experience. A multimodal workflow reference. _(@Dimillian)_
- [GPT-generated GTA-style demo](https://x.com/ChrisGPT/status/2097569429567471841) — Short demo claimed to have been produced with GPT-6 over 90 hours. Generative-media inspiration. _(@ChrisGPT)_
- [Image-to-CAD personalized doorstop](https://x.com/dkundel/status/2097419372960890983) — Photograph a space with a measuring tape, generate a custom model, and 3D-print the result. The successful fit is self-reported. Connects to [[3D Printing and Digital Fabrication]]. _(@dkundel)_
- [Danji image-generation prompt](https://x.com/DanjiTosaka/status/2102103173712240874) — Four-image prompt showcase kept as a visual prompting reference. The prompt itself is embedded in the images, not the caption; read it from the images before reuse. _(@DanjiTosaka)_
- [GPT-4o native image-generation system card](https://openai.com/index/gpt-4o-image-generation-system-card-addendum/) — OpenAI's March 2025 addendum describes 4o image generation as autoregressive and natively embedded in ChatGPT, unlike the earlier DALL·E diffusion system, with image transformation, photorealism, detailed instruction following, and text rendering. A launch-era safety document rather than a complete architecture disclosure; its evaluations and policies are point-in-time. _(via @Yampeleg)_
- [A New Era of Midjourney](https://www.midjourney.com/medical/blogpost) — Product article about a new phase of Midjourney's image work.
- [Apple LGTM 4K Gaussian-splat research](https://x.com/wildmindai/status/2038000402789015566) — Paper summary for feed-forward high-resolution 3D reconstruction from two ordinary images. _(@wildmindai)_
- [GaussianGPT scene-generation research](https://x.com/MattNiessner/status/2038563326167310507) — Primary research on autoregressive generation, completion, and outpainting of 3D Gaussian scenes. _(@MattNiessner)_

## Model research, interpretability and alignment

- [GPT in 243 dependency-free Python lines](https://x.com/karpathy/status/2021694437152157847) — Excellent educational resource exposing the full training and inference algorithm with minimal code. _(@karpathy)_
- [Global-workspace behavior inside Claude](https://x.com/AnthropicAI/status/2074185348142280912) — Anthropic research reports a small globally accessible internal workspace distinct from broader latent processing. Primary material for thinking about interpretability without overclaiming consciousness. _(@AnthropicAI)_
- [Goodfire neural-geometry research series](https://www.goodfire.ai/research/neural-geometry) — Goodfire studies multidimensional and curved structure in model activations: manifold steering, arithmetic representations, sparse-autoencoder limits, temporal story representations, and block-sparse featurisers. An active research agenda supported by individual papers, not a settled claim that all neural computation is best described geometrically. _(@GoodfireAI)_
- [Compile documents into model weights](https://x.com/hardmaru/status/2027240562898976770) — Sakana research on hypernetworks for durable model memory and fast task adaptation. _(@hardmaru)_
- [Memory Caching: RNNs with Growing Memory](https://arxiv.org/abs/2602.24281) — Google Research, Cornell, and USC authors cache recurrent memory-state checkpoints, creating a controllable complexity trade-off between fixed-memory recurrence and full attention. Proof-of-concept experiments improve recurrent baselines while Transformers keep the best recall accuracy; not an end-of-Transformers result. _(via @HowToPrompt__)_
- [The optimal hypothesis may be the weakest, not the shortest](https://arxiv.org/abs/2301.12987) — Michael Timothy Bennett argues that compression or minimum-description length is neither necessary nor sufficient for generalisation, and proposes choosing the weakest hypothesis compatible with the data. The paper reports better generalisation in binary-arithmetic experiments; a research result to evaluate, not an instruction to inject blindly into every self-improvement loop ([original post](https://x.com/headinthebox/status/2084414685701632406)). _(@headinthebox)_
- [Preserve data provenance when using generated training data](https://x.com/thesupermannx/status/2103805052817453255) — Points to the 2024 Nature paper on degradation under recursive training on model-generated data: [AI models collapse when trained on recursively generated data](https://www.nature.com/articles/s41586-024-07566-y). The useful practice is to preserve provenance and independent real-data evaluation, including rare cases, rather than treating successive generated outputs as fresh ground truth. The experiment does not show that all synthetic-data use fails or that a current named model is collapsing, whatever the post claims. See [[Evergreen Lessons from X - September 2026]]. _(@thesupermannx)_
- [How to become better at research](https://x.com/itsreallyvivek/status/2064686372737454155) — Vivek's field guide: choose outcomes rather than inherit fashionable problems, train taste through explicit forecasts, log hypotheses and belief updates, shorten experiment loops, inspect raw failures, tune baselines, and publish clear explanations. Its historical anecdotes should be checked at source. _(@itsreallyvivek)_
- [Technical criticism of the Navier–Stokes announcement](https://x.com/BetterCallMedhi/status/2097472336257863722) — Critique arguing that a forced-equation blow-up case differs from solving the classical Millennium Prize problem, and raising attribution concerns. The technical and ethical allegations are the critic's and unverified. _(@BetterCallMedhi)_
- [Discarded reasoning traces and post-hoc model explanations](https://transluce.org/investigating-o3-truthfulness) — In tests of pre-release o3-2025-04-03, Transluce elicited fabricated tool use and proposed that later turns lacking the model's discarded prior reasoning can encourage plausible post-hoc explanations. The causal account is a hypothesis and the measurements are version- and harness-specific; the operational lesson is to verify actions from tool logs and artifacts rather than a model's retrospective narrative. _(@TransluceAI)_
- [Models as alien optimizers rather than personas](https://x.com/tszzl/status/2085450979894497434) — roon argues that anthropomorphic persona framing was more useful when reinforcement learning mainly shaped conversational style, and becomes less reliable as systems are optimised for unfamiliar objectives. A conceptual caution against over-reading human motives into models, not proof that current systems are "superintelligent minds." _(@tszzl)_
- [Moral incoherence as an AI-alignment problem](https://x.com/tszzl/status/2069510018991575372) — roon argues that vague do-what-feels-right morality becomes more concerning when powerful models are expected to exercise delegated judgment. _(@tszzl)_
- [Researcher resignation over AI risk](https://x.com/hilbertspaess/status/2097476196791709843) — First-person announcement claiming OpenAI and Anthropic are pursuing unsafe self-improving systems. The author's position; seek the complete statement and independent context. _(@hilbertspaess)_
- [Unauthorized AI persuasion experiment on r/ChangeMyView](https://www.reddit.com/r/changemyview/comments/1k8b2hj/meta_unauthorized_experiment_on_cmv_involving/) — Moderators documented University of Zurich researchers deploying undisclosed, personalised AI comments without community consent and outside the subreddit's rules. The draft findings were not published and the design was disputed, so the lesson is about consent, identity fabrication, oversight, and community-level harm, not the repost's persuasion-performance claim. _(via @MarioNawfal)_

## Hardware and AI economics

AI-lab access and hyperscaling arguments here are scenarios, not forecasts; see [[AI Infrastructure Economics]].

- [Flash-backed weight memory for AI inference](https://x.com/ID_AA_Carmack/status/2074248758422864226) — John Carmack sketches a cheaper high-capacity accelerator design using sequential NAND access, scratchpad management, and a smaller HBM tier, separating the stronger inference case from training constraints. _(@ID_AA_Carmack)_
- [Taalas specialized AI hardware](https://x.com/taalas_inc/status/2024516399251456150) — Primary product launch and technical reference for highly specialised inference hardware. _(@taalas_inc)_
- [AI accelerator portability is eroding](https://x.com/GavinSBaker/status/2044861680015069571) — Gavin Baker argues that divergent topologies, memory systems, and networking primitives increasingly reward model-hardware co-design, raising switching costs as labs optimise inference for tokens per watt per dollar. _(@GavinSBaker)_
- [Bear case for frontier-lab valuations](https://x.com/andrewho03/status/2082786931419812338) — Andrew Ho argues that frontier labs face a punishing cost ratchet: competition forces repeated training investment, cheaper models constrain pricing, and slow application-layer discovery may delay the revenue needed to justify trillion-dollar valuations. A personal scenario thesis with illustrative assumptions, not audited lab economics or a prediction that AI demand will fail, but a useful checklist for testing margins, training capex, pricing durability, diffusion speed, and terminal value. Found via Brian Atwood. _(@andrewho03)_
- [Anthropic wet-lab and private-frontier thesis](https://x.com/nic_carter/status/2100961655236485175) — Speculation that Anthropic's reported biology lab and safety messaging could support internalising valuable discoveries or delaying public model access. The author labels the argument speculative; the lab report, business assumptions, antitrust claims, and actual access policy are unverified. _(@nic_carter)_
- [Wafer blog](https://www.wafer.ai/blog) — AI-infrastructure research and product writing.

## Product launches, limits and account notes

Context-window settings, plan limits, refunds, X-search availability and the possible usage-limit bug are dated reports; check current documentation and your own usage data before acting on them.

- [Experimental Astra context-window configuration](https://x.com/brandon_galang/status/2097067132014211348) — Suggested Codex configuration for a larger context window and compaction threshold. _(@brandon_galang)_
- [Possible Codex usage-limit bug](https://x.com/BradGroux/status/2100450857149931733) — Points to another user's report that Codex may have consumed usage unexpectedly. A troubleshooting lead. _(@BradGroux quoting @joedevon)_
- [Codex auto-review may be a material usage driver](https://x.com/kalin_t/status/2085770415604166807) — Kalin reports that auto-review accounted for a large share of calls and uncached-token usage in his own dashboard, and that usage slowed after he disabled it. A troubleshooting lead, not evidence for the post's speculative dollar estimates. Do not adopt its suggestion to grant broad device access merely to conserve usage; permissions should stay scoped to the work. _(@kalin_t)_
- [Allow macOS Computer Use to target normally forbidden UI](https://x.com/steipete/status/2074795172295291224) — Peter Steinberger points to the global preference `defaults write -g ComputerUseAllowForbiddenTargets -bool YES`. This deliberately relaxes a Computer Use safety boundary, so it is a troubleshooting reference rather than a default setup step: enable it only when the broader target access is understood and required, then revert with `defaults delete -g ComputerUseAllowForbiddenTargets` when finished. _(@steipete)_
- [Portable Codex identity across personal and work](https://x.com/Jaytel/status/2071701444126806315) — Strong product model for one user-owned account with employer-funded work usage, hard privacy boundaries, organisation-specific IP retention, and portable general preferences or memory. _(@Jaytel)_
- [ChatGPT multi-agent usage claim](https://x.com/SPAC89/status/2100055717566644585) — Author reports launching multiple agents from ordinary ChatGPT with generous plan limits. _(@SPAC89)_
- [Which models can search X](https://x.com/pcstyle53/status/2096608599413837973) — Dispute over whether X search is unique to Grok; a prompt to compare current providers on freshness, citations, access, and rate limits. _(@pcstyle53)_
- [Korean Claude Max refund and chargeback claims](https://x.com/jun_song/status/2094964462168293551) — A translated anecdotal thread says some Korean subscribers obtained refunds or chargebacks after objecting to vague usage caps. A customer-trust and localisation lead, not verified policy, legal precedent, or a generally available refund route. _(@jun_song)_
- [ChatGPT for Financial Services launch](https://x.com/OpenAI/status/2098118191029624911) — Official launch post describing financial-data, research, modelling, and client-material workflows. _(@OpenAI)_
- [Anthropic Financial Services repository](https://x.com/scaling01/status/2026292501296857564) — Primary code resource for applying agents and models to financial-services workflows. _(@scaling01)_

## Work, enterprise and policy

- [Shopify's reflexive-AI operating memo](https://x.com/tobi/status/1909251946235437514) — Tobi Lütke's internal memo makes effective AI use a baseline expectation, asks prototypes to begin with AI exploration, adds AI-learning questions to reviews, and requires teams to explain why additional resources cannot solve the problem with AI first. An influential management-policy case, not neutral proof of its productivity claims. _(@tobi)_
- [AI adoption is a distribution, not a login count](https://x.com/i/article/2085540776512192512) — Vas argues that enterprise rollouts form a barbell: a small group becomes capable power users, a larger group uses AI shallowly, and many barely use it, so nominal adoption can rise without comparable organisational output. The measurement questions are skill, workflow integration, verified output, and return per token rather than account activation alone. The percentages and enterprise examples are the author's commercially interested observations, not audited benchmarks. Recommended by [Mario Zechner](https://x.com/badlogicgames/status/2086006259795263824). _(@badlogicgames)_
- [Reverse information paradox in enterprise AI](https://x.com/satyanadella/status/2076323181154230284) — Satya Nadella argues that firms can leak proprietary know-how through prompts, corrections, traces, and evals; the design response is a private learning boundary with owned memory, evals, orchestration, and model choice. _(@satyanadella)_
- [Career advice in the age of AI](https://x.com/i/article/2072793818945167475) — Phil Chen argues that the durable scarce resources are time, relationships, and reputation; that choosing important problems matters more as execution becomes cheaper; and that the last 10% of polish still distinguishes excellent work. The "increase opportunity and efficiency" framing is career advice, not an empirical law. Saved via [Sushanth Raman's post](https://x.com/SushanthRaman/status/2085467466462097656). _(@SushanthRaman)_
- [Use AI for research, but retain authorship](https://x.com/dylanmatt/status/2085385209806045195) — Dylan Matthews' rule: use models aggressively for research and information gathering, and do the actual writing yourself. This keeps judgment, voice, and responsibility for the final claims; model-supplied evidence still needs checking. _(@dylanmatt)_
- [The Government Knows A.G.I. Is Coming](https://www.nytimes.com/2025/03/04/opinion/ezra-klein-podcast-ben-buchanan.html) — Ezra Klein interviews former Biden White House AI adviser Ben Buchanan about government preparedness, export controls, safety standards, labour disruption, and strategic competition under the possibility of much more capable systems. The headline and near-term AGI claims are participant forecasts; a dated policy conversation, not a confirmed timeline. _(via @kimmonismus)_
- [AI 2027](https://ai-2027.com/race) — Scenario research; a structured forecast, not settled fact.
- [DeepMind on AI-assisted UK planning](https://deepmind.google/blog/unlocking-uk-house-building-with-ai-accelerated-planning/) — Primary article on applying AI to UK planning workflows.
- [OpenAI's response to Apple's trade-secret allegations](https://openai.com/index/apple-is-getting-this-wrong/) — OpenAI says Apple contacted the wrong person, mishandled access during offboarding, and sought an injunction using false information. OpenAI's dated legal position; the allegations are contested and the post is not a neutral account or a court finding ([original post](https://x.com/OpenAINewsroom/status/2084515811306443093)). _(@OpenAINewsroom)_

## News and reference sites

- [Aligned AI News](https://alignednews.com/ai) — Focused AI-news source.
- [Sophon AI research terminal](https://sophon.at/homepage) — AI-research product and discovery surface.
- [Cloudflare Radar](https://radar.cloudflare.com/) — Internet-traffic, routing, adoption, and threat-data reference.
- [Taste Labs](https://tastelabs.com/) — Product reference for taste graphs and recommendation layers.
- [TrophyLab](https://trophylab.mod.gov.ua/en/) — Official Ukrainian military-technology research reference.
- [Replacement Clock](https://replacementclock.org/) — Demographic and political source material; its definitions, methodology, projections, and framing need scrutiny.
- [Who Funded Genocide](https://whofundedgenocide.com/) — Political-donations research lead; inspect its methodology and primary records before relying on its labels.

## Related

[[X-Bookmarks]] · [[AI Agents]] · [[AI Infrastructure Economics]] · [[Digital Security]] · [[Personal Knowledge Management]] · [[3D Printing and Digital Fabrication]] · [[Evergreen Lessons from X - September 2026]] · [[X Bookmark Review - 30 September 2026]] · [[Grok Bot]] · [[PhoneLLM Alpha 1]] · [[Developer Resources]] · [[Bookmarks - Developer Tools]]
