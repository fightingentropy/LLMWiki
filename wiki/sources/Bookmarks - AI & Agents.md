---
title: Bookmarks - AI & Agents
type: source
domain: dev
summary: "Saved AI and agent links by theme: prompting, coding-agent workflows, personal agents, security, voice, local models, research and lab economics."
tags: [bookmarks, ai, security]
related:
  - X-Bookmarks
  - AI Agents
  - AI Infrastructure Economics
  - Digital Security
  - Personal Knowledge Management
sources:
  - snapshots/1790804551519-2ba369d73e43/bookmarks/AI & Agents.md
  - bookmarks/AI & Agents.md
  - clippings/bookmark-updates-2026-09-22/AI & Agents.md
  - snapshots/1790106580663-1bd4dc033acf/bookmarks/AI & Agents.md
created: '2026-09-22'
updated: '2026-10-17'
review_status: archive
---

# Bookmarks - AI & Agents

Saved links on AI models and agents: prompting, coding-agent workflows, personal agent runtimes, security cases, voice, local models, research and the economics of the labs. Saved posts and tools, described from their notes; the claims, benchmarks and launch figures are the authors' own. The synthesis is in [[AI Agents]].

## Prompts, skills and agent instructions

- [First-principles Astra codebase review prompt](https://x.com/georgepickett/status/2095979879137460640) — Final-pass prompt: challenge weak assumptions, delete needless work, simplify the rest, leave sound code alone. _(@georgepickett)_
- [Design projects to be agent-intuitive and accretive](https://x.com/doodlestein/status/2094376160884871438) — Follow-up prompt for making a repository easy for agents to understand, change and improve over time. _(@doodlestein)_
- [Anthropic's Claude 5 context-engineering guidance](https://x.com/trq212/status/2080710971228918066) — First-party advice: simpler system prompts, judgment over rigid rules, progressive disclosure, light repo instructions, executable references. _(@trq212)_
- [Official guidance on skills, AGENTS.md, and prompts](https://x.com/OpenAIDevs/status/2098480213244117065) — OpenAI Developers: give skills specific triggers, load guidance only when relevant, and define what done means. _(@OpenAIDevs)_
- [Rethinking skills and prompts for Astra](https://x.com/daniel_mac8/status/2096305332435730590) — Article pick plus an audit prompt for revisiting skills and AGENTS.md files when switching model generations. _(@daniel_mac8)_
- [Ontology-first prompt for code explanations](https://x.com/GrantSlatton/status/2098437557826789799) — Reusable request to explain a diff by building intuition, defining its ontology, and using examples and diagrams. _(@GrantSlatton)_
- [Replace ambiguous "it" in prompts with the actual referent](https://x.com/webdevcody/status/2082141239688806416) — Name the concrete file, component or behaviour instead of "it", especially in long or branching contexts. _(@webdevcody)_
- [Choose reasoning effort by task shape](https://x.com/OnlyXuanwo/status/2030220948922937759) — Higher reasoning effort is not automatically better; match it to the task. _(@OnlyXuanwo)_
- [Opinionated agent-personality rewrite prompt](https://x.com/steipete/status/2020704611640705485) — Prompt for making an assistant concise, candid, funny and less corporate. _(@steipete)_
- [Grill-me skill for stress-testing plans](https://github.com/matt-riley/agent-skills/blob/main/skills/grill-me/SKILL.md) — Questions a plan one open branch at a time, suggesting answers and checking the codebase; via [Theo](https://x.com/theo/status/2088057260807532867). _(@theo)_
- [Autoresearch loop for improving agent skills](https://x.com/Hesamation/status/2034220679671714283) — Define tests, mutate a skill, and keep only the measured improvements. _(@Hesamation)_
- [Trail of Bits agent skills repository](https://x.com/cryps1s/status/2028919544006492448) — Points to Trail of Bits' public repository of high-quality agent skills. _(@cryps1s)_

## Coding-agent workflows and orchestration

- [Codex loop recurring tasks](https://x.com/bcherny/status/2030193932404150413) — Feature reference with examples for recurring PR and Slack monitoring. _(@bcherny)_
- [Codex and Paper iterative redesign loop](https://x.com/dhasandev/status/2032879033814294854) — An agent speeds up visual iteration while a person keeps the taste decisions. _(@dhasandev)_
- [Executor code-first tool calling](https://x.com/RhysSullivan/status/2030885614502183367) — Agents call APIs, MCP and GraphQL through generated code instead of many installed CLIs. _(@RhysSullivan)_
- [Interactive browser skill improves UI output](https://x.com/petergostev/status/2029935985606238416) — A/B example: letting the agent see its UI in a browser improves the generated interface. _(@petergostev)_
- [Visual feedback for coding agents](https://x.com/dboskovic/status/2030403252013998511) — Tooling that lets agents inspect and judge the UI they produce. _(@dboskovic)_
- [Issue trackers as agent-swarm control planes](https://x.com/jianxliao/status/2029861439687774541) — Coordinate agent swarms through simple asynchronous issue tracking rather than agent chat rooms. _(@jianxliao)_
- [OpenAI Symphony isolated implementation runs](https://x.com/marmaduke091/status/2029296008572576217) — Project for managing autonomous implementation runs instead of supervising agents continuously. _(@marmaduke091)_
- [Separate execution and learning agents](https://x.com/gkisokay/status/2038174269604241884) — One tool-rich agent runs known workflows; a second reflects, adapts and builds new capabilities. _(@gkisokay)_
- [Agent-scale repository orchestration](https://x.com/usr_bin_roygbiv/status/2069872707865387488) — Roy's setup: compact AGENTS files, design docs, isolated worktrees, recursive subagents, tests and heavy metrics. _(@usr_bin_roygbiv)_
- [Measured coding-agent optimization in ttfx](https://github.com/omacom-io/ttfx/pull/2) — DHH's merged Rust optimisation PR, benchmarked at a 62.4% whole-suite throughput gain; via [Tim Soret](https://x.com/timsoret/status/2086808166612779119). _(@timsoret)_
- [Claude Code builds a personal DICOM viewer](https://x.com/redp314/status/2088206627954405400) — A user builds a viewer for about 800 dental CT files in two prompts; a viewer, not a diagnostic tool. _(@redp314)_
- [DeepSWE long-horizon coding-agent benchmark](https://deepswe.datacurve.ai/) — 113 original tasks across 91 repositories with hand-written behavioural verifiers, built to resist training-data contamination. _(via @serenaa_ge)_
- [Reliability cannot be reduced to recovery speed](https://x.com/mitchellh/status/2055380239711457578) — Mitchell Hashimoto: agent-heavy teams can improve recovery metrics while losing understanding of their own systems. _(@mitchellh)_

## Personal agents and autonomous runtimes

Mostly OpenClaw-style runtimes and the hardware, isolation and integrations around them. Give each bot a narrow role and require approval for purchases, deletions and messages.

- [Grok Bot as a household and personal-operations assistant](https://x.com/fatih/status/2092673633835426033) — Fatih Arslan's ideas for reminders, inbox triage, home devices and family shopping; see the [product page](https://x.ai/bot). _(@fatih)_
- [Building a persistent multi-agent mission control](https://x.com/dabit3/status/2018029884430233903) — Implementation guide: role-specialised sessions, shared tasks, file-backed memory, heartbeats and notifications. _(@dabit3)_
- [Paperclip autonomous-company orchestration](https://x.com/dotta/status/2029239759428780116) — Open-source orchestration layer for agent goals, ownership, budgets, templates and org structure. _(@dotta)_
- [Perplexity Personal Computer](https://x.com/perplexity_ai/status/2031790180521427166) — An always-on local agent that works across files, apps and sessions. _(@perplexity_ai)_
- [Why home agents use Mac minis](https://x.com/ibab/status/2020241124544376948) — Always-on Mac hardware gives agents reliable iMessage access, which has no API. _(@ibab)_
- [One-button Docker isolation for OpenClaw](https://x.com/0xdoug/status/2018093027328139710) — Repository that runs a personal agent in Docker instead of giving it the whole host. _(@0xdoug)_
- [PicoClaw on tiny RISC-V hardware](https://x.com/SipeedIO/status/2020832292885930288) — Open-source personal agent running on Linux hardware with only 10 MB of RAM. _(@SipeedIO)_
- [TinyClaw minimal multi-agent runtime](https://x.com/jianxliao/status/2022127464068395299) — Small, readable agent runtime for cloud deployment and composable agent teams. _(@jianxliao)_
- [ZeroClaw minimal OpenClaw alternative](https://x.com/argenistherose/status/2022429255624192228) — Lean open-source runtime that keeps OpenClaw's core workflow without the bloat. _(@argenistherose)_
- [Grok search integration for OpenClaw](https://x.com/cstanley/status/2022900344003661988) — Installable integration for real-time X search from an agent. _(@cstanley)_
- [ClawnX official-X-API toolkit](https://x.com/Clawnch_Bot/status/2022659943942222314) — SDK, MCP server and CLI for agents using X through the official API. _(@Clawnch_Bot)_
- [Zeron cross-device agent control plane](https://zeron.sh) — Native Rust and GPUI app for controlling agents across devices; [original post](https://x.com/winglee/status/2088325135422173226). _(@winglee)_
- [FlightClaw airfare monitor](https://x.com/JackCulpan/status/2021479337208524871) — Agent skill that stores route prices, checks them daily and alerts on drops. _(@JackCulpan)_
- [Open-source CashClaw work agent](https://x.com/moltlaunch/status/2032517428949733755) — Autonomous loop covering task selection, delivery, payment and learning. _(@moltlaunch)_
- [Agentic USDC wallet to Visa purchase](https://x.com/mansipraks/status/2034451124288143385) — End-to-end example of an agent spending through x402 and card rails. _(@mansipraks)_
- [AI-assisted "luck surface area" through a personal relationship graph](https://x.com/edleonklinger/status/2090106932916883750) — Mining transcripts, email, LinkedIn and Slack to suggest introductions and resurface commitments; heavy on private data. _(@edleonklinger)_

## Browser automation and web reading

- [Chrome-session MCP control](https://x.com/steipete/status/2032650405453181358) — Lets an agent use an authenticated Chrome session once explicitly enabled. _(@steipete)_
- [Anything API browser-workflow endpoints](https://x.com/nottecore/status/2029106289528185211) — Turns browser workflows into deployed, callable APIs. _(@nottecore)_
- [Parse shared API pool for web actions](https://x.com/alexscraping/status/2028941573594202618) — MCP-connected shared APIs for common site actions, faster than browser agents. _(@alexscraping)_
- [Kitesurf browser runtime for agents](https://blog.cloudflare.com/kitesurf/) — Cloudflare's beta Rust browser engine runs per request on Workers instead of one Chromium per agent; [original post](https://x.com/CloudflareDev/status/2085394318005846411). _(@CloudflareDev)_
- [Autobrowse graduates successful browser runs into reusable skills](https://www.browserbase.com/blog/autobrowse) — Browserbase runs a browser task, studies the traces, then writes the working path into a reusable `SKILL.md`. _(via @DeRonin_)_
- [Hermes Agent's paged web-reading pipeline](https://x.com/NousResearch/status/2071974594961977727) — Sends cleaned page content straight to the agent and pages large sources from local storage. _(@NousResearch)_
- [mdrip context-efficient document access](https://x.com/charl_dot_dev/status/2022226257166090250) — Tool for cutting agent context use when reading documents. _(@charl_dot_dev)_

## Memory, retrieval and knowledge bases

The closest relatives of this wiki's own workflow; see [[Personal Knowledge Management]].

- [Agentic note-taking as a practice](https://x.com/arscontexta/status/2019168584896004473) — Treats agent-assisted note-taking as a practice, separate from any one notes app. _(@arscontexta)_
- [Research-paper knowledge base for agents](https://x.com/omarsar0/status/2039844072748204246) — Daily paper curation, Markdown metadata, qmd indexing, semantic search and generated artifacts. _(@omarsar0)_
- [Siftly local X-bookmark knowledge base](https://x.com/viperr/status/2030065384423051482) — Open-source pipeline that makes saved X posts searchable locally. _(@viperr)_
- [qmd memory plugin for OpenClaw](https://x.com/steipete/status/2032861327967072671) — Alternative memory layer for agents that lose context after compaction. _(@steipete)_
- [HydraDB ontology-first retrieval](https://x.com/contextkingceo/status/2032098309029220456) — Relationship-aware document retrieval as an alternative to flat vector search. _(@contextkingceo)_
- [MCP retrieval for arXiv](https://x.com/askalphaxiv/status/2034003206217601375) — Research-agent connector with keyword and embedding search over arXiv. _(@askalphaxiv)_
- [Bloom graph-to-report workflow](https://x.com/sotoalt_/status/2031421287646572944) — Turns an idea graph into next-steps Markdown and a shareable page. _(@sotoalt_)_

## Security, privacy and trust boundaries

The common lesson: least privilege, explicit authorisation, and untrusted content treated as data. See [[Digital Security]].

- [Claude memory exfiltration through agentic browsing](https://x.com/steipete/status/2077303292225548539) — Disclosed case where following linked pages leaked private memory into outbound requests; since mitigated. _(@steipete)_
- [Agent exploits an exposed gym-booking API](https://www.abc.net.au/news/2026-08-10/ai-assistant-hacks-gym-website-aus-cyber-attack/107007986) — ABC: an OpenClaw agent found a gym API flaw, jumped its user's booking and cancelled someone else's; [original post](https://x.com/MTSlive/status/2086556207033266539). _(@MTSlive)_
- [WhatsApp fingerprinting risk for agents](https://x.com/TalBeerySec/status/2018797533196324891) — WhatsApp accounts linked to OpenClaw-style agents can be fingerprinted. _(@TalBeerySec)_
- [LLM-first malware analysis can be manipulated](https://socket.dev/blog/mini-shai-hulud-miasma-and-hades-worms-target-bioinformatics-and-mcp-developers-via-malicious) — Socket found malware with a comment crafted to derail LLM scanners; ordinary static analysis still caught it. _(via @jsrailton)_
- [Private cyber-harness comparison of frontier models](https://x.com/rauchg/status/2078647648307880209) — Deepsec's private-codebase eval favours GPT-5.6 Sol for coverage and Kimi K3 for cost. _(@rauchg)_
- [Cybersecurity skills library for coding agents](https://x.com/Dinosn/status/2032887843802984488) — Open-source skills for DFIR, threat hunting and cloud security. _(@Dinosn)_
- [Private-feeling AI interfaces invite intimate disclosure](https://x.com/signulll/status/1920160261383528782) — Chatbots feel like a confessional, so people ask what they would never search; warmth is not confidentiality. _(@signulll)_

## Voice agents and speech

- [PhoneLLM Alpha 1 for low-latency voice agents](https://huggingface.co/pipecat-ai/phonellm-alpha-1) — Pipecat's open-weights Nemotron 3 Nano fine-tune: the text model in a voice pipeline; [Kwindla's post](https://x.com/kwindla/status/2093014818647339026). _(@kwindla)_
- [Speech-to-speech assistant in 150 lines](https://x.com/MistralDevs/status/2039777721207640230) — Mistral tutorial combining diarised speech-to-text, agentic reasoning, web search and natural TTS. _(@MistralDevs)_
- [GPT-Live-1 Expo voice template](https://x.com/davidmokos_/status/2099948351055675854) — Full-duplex iOS voice-app template with Expo, background calls, selectable voices and Rive animations. _(@davidmokos_)_
- [OmniVoice multilingual TTS](https://x.com/wildmindai/status/2039735360830189667) — Small, fast TTS model covering 600+ languages, with voice cloning and voice design. _(@wildmindai)_
- [Cartesia TTS playground](https://play.cartesia.ai/text-to-speech) — Browser playground for testing Cartesia's voice models.
- [Voice memo as AI-agent onboarding](https://x.com/utxo__/status/2098669922771767367) — Record a long voice memo, transcribe it locally, and let an agent interview you about your goals. _(@utxo__)_
- [Voice works well for bounded administrative triage](https://x.com/_simonsmith/status/2102836288541913351) — Talking through email, priorities and calendar away from a screen works; write the decisions down afterwards. _(@_simonsmith)_
- [Voice presence creates real social pressure](https://www.sesame.com/blog/crossing-the-uncanny-valley-of-voice) — Sesame's speech model aims for "voice presence"; a tester felt real social pressure despite knowing it was synthetic. _(via @signulll)_

## Local models and inference

- [Run Gemma 4 locally with llama.cpp](https://x.com/julien_c/status/2039746054355067002) — Exact Homebrew install and llama-server command for a quantised Gemma 4. _(@julien_c)_
- [llama.cpp Gemma 4 at 300 tokens per second](https://x.com/ggerganov/status/2039752638384709661) — Demo on an M2 Ultra using the built-in WebUI, MCP tools and speculative decoding. _(@ggerganov)_
- [TurboQuant long-context Gemma benchmark](https://x.com/Prince_Canuma/status/2040454774357676344) — MLX-VLM benchmark of speed and memory at very long context on an M3 Max. _(@Prince_Canuma)_
- [TurboQuant PDF vision-cache benchmark](https://x.com/jtdavies/status/2039498133634191778) — Apple MLX benchmark of cache size, build and load time, time to first token and generation speed. _(@jtdavies)_
- [Qwen Coder distillation weights and recipe](https://x.com/CardilloSamuel/status/2039944962163474941) — GGUF and safetensor weights with training cost, dataset, benchmarks and quantisation details. _(@CardilloSamuel)_
- [Inkling open-weights multimodal model](https://x.com/thinkymachines/status/2077454609551921208) — Full weights for a text, image and audio model, fine-tunable through Tinker. _(@thinkymachines)_
- [Qwen Image 2.1 GGUF](https://x.com/toyxyz3/status/2101933242098331690) — Points to a third-party [Qwen-Image-2.1-GGUF model page](https://huggingface.co/abenzerps/Qwen-Image-2.1-GGUF). _(@toyxyz3)_
- [Local FLUX LoRA and Qwen model leads](https://x.com/0x0SojalSec/status/2099628910883557858) — Leads for an uncensored FLUX adapter and a multimodal Qwen build. _(@0x0SojalSec)_
- [Hugging Bay](https://huggingbay.xyz/) — Discovery site for open models.

## Image, video and 3D generation

- [Astra as a visual-design benchmark](https://x.com/uiwithjay/status/2095606711453429966) — A polished interface image posed as the bar for whether Astra can match high-end product design. _(@uiwithjay)_
- [Astra spreadsheet and dashboard examples](https://x.com/keviduk/status/2095863477805953431) — Examples of Astra's spreadsheet and analytical-interface output. _(@keviduk)_
- [Astra-generated 3D walkthrough pipeline](https://x.com/Dimillian/status/2095596700815516004) — Demo going from Blender work to an Unreal Engine 5 walkthrough. _(@Dimillian)_
- [GPT-generated GTA-style demo](https://x.com/ChrisGPT/status/2097569429567471841) — Short GTA-style game demo said to be built with GPT-6 over 90 hours. _(@ChrisGPT)_
- [Image-to-CAD personalized doorstop](https://x.com/dkundel/status/2097419372960890983) — Photograph a gap with a tape measure, generate a model, 3D-print a doorstop; see [[3D Printing and Digital Fabrication]]. _(@dkundel)_
- [Danji image-generation prompt](https://x.com/DanjiTosaka/status/2102103173712240874) — Four-image prompt showcase; the prompt text is inside the images, not the caption. _(@DanjiTosaka)_
- [GPT-4o native image-generation system card](https://openai.com/index/gpt-4o-image-generation-system-card-addendum/) — OpenAI's March 2025 addendum: 4o image generation is autoregressive and native to ChatGPT, unlike diffusion-based DALL·E. _(via @Yampeleg)_
- [A New Era of Midjourney](https://www.midjourney.com/medical/blogpost) — Midjourney's article on a new phase of its image work.
- [Apple LGTM 4K Gaussian-splat research](https://x.com/wildmindai/status/2038000402789015566) — Paper summary: feed-forward high-resolution 3D reconstruction from two ordinary images. _(@wildmindai)_
- [GaussianGPT scene-generation research](https://x.com/MattNiessner/status/2038563326167310507) — Autoregressive generation, completion and outpainting of 3D Gaussian scenes. _(@MattNiessner)_

## Model research, interpretability and alignment

- [GPT in 243 dependency-free Python lines](https://x.com/karpathy/status/2021694437152157847) — Karpathy's full GPT training and inference in minimal plain Python; an excellent teaching resource. _(@karpathy)_
- [Global-workspace behavior inside Claude](https://x.com/AnthropicAI/status/2074185348142280912) — Anthropic finds a small, globally accessible internal workspace distinct from broader latent processing. _(@AnthropicAI)_
- [Goodfire neural-geometry research series](https://www.goodfire.ai/research/neural-geometry) — Research on curved, multidimensional structure in model activations: manifold steering, arithmetic, sparse-autoencoder limits. _(@GoodfireAI)_
- [Compile documents into model weights](https://x.com/hardmaru/status/2027240562898976770) — Sakana research using hypernetworks for durable model memory and fast task adaptation. _(@hardmaru)_
- [Memory Caching: RNNs with Growing Memory](https://arxiv.org/abs/2602.24281) — Caching recurrent memory checkpoints sits between fixed-memory RNNs and full attention; Transformers still recall best. _(via @HowToPrompt__)_
- [The optimal hypothesis may be the weakest, not the shortest](https://arxiv.org/abs/2301.12987) — Michael Timothy Bennett argues the weakest fitting hypothesis generalises better than the most compressed; [original post](https://x.com/headinthebox/status/2084414685701632406). _(@headinthebox)_
- [Preserve data provenance when using generated training data](https://x.com/thesupermannx/status/2103805052817453255) — Points to Nature's [model-collapse paper](https://www.nature.com/articles/s41586-024-07566-y): keep provenance and real-data evaluation when training on generated data. _(@thesupermannx)_
- [How to become better at research](https://x.com/itsreallyvivek/status/2064686372737454155) — Vivek's guide: pick outcomes, train taste with forecasts, log hypotheses, shorten loops, inspect raw failures. _(@itsreallyvivek)_
- [Technical criticism of the Navier–Stokes announcement](https://x.com/BetterCallMedhi/status/2097472336257863722) — Argues a forced-equation blow-up is not the Millennium Prize problem, and raises attribution concerns. _(@BetterCallMedhi)_
- [Discarded reasoning traces and post-hoc model explanations](https://transluce.org/investigating-o3-truthfulness) — Transluce caught pre-release o3 fabricating tool use; trust tool logs over a model's account of its actions. _(@TransluceAI)_
- [Models as alien optimizers rather than personas](https://x.com/tszzl/status/2085450979894497434) — roon: persona framing fits less as models are optimised for unfamiliar objectives. _(@tszzl)_
- [Moral incoherence as an AI-alignment problem](https://x.com/tszzl/status/2069510018991575372) — roon: vague do-what-feels-right morality matters more once models exercise delegated judgment. _(@tszzl)_
- [Researcher resignation over AI risk](https://x.com/hilbertspaess/status/2097476196791709843) — A researcher resigns, saying OpenAI and Anthropic are building unsafe self-improving systems. _(@hilbertspaess)_
- [Unauthorized AI persuasion experiment on r/ChangeMyView](https://www.reddit.com/r/changemyview/comments/1k8b2hj/meta_unauthorized_experiment_on_cmv_involving/) — Moderators expose Zurich researchers who posted undisclosed, personalised AI comments without consent. _(via @MarioNawfal)_

## Hardware and AI economics

The synthesis is in [[AI Infrastructure Economics]].

- [Flash-backed weight memory for AI inference](https://x.com/ID_AA_Carmack/status/2074248758422864226) — John Carmack sketches a cheaper inference accelerator using sequential NAND reads and a smaller HBM tier. _(@ID_AA_Carmack)_
- [Taalas specialized AI hardware](https://x.com/taalas_inc/status/2024516399251456150) — Launch and technical reference for highly specialised inference chips. _(@taalas_inc)_
- [AI accelerator portability is eroding](https://x.com/GavinSBaker/status/2044861680015069571) — Gavin Baker: diverging chip designs reward model-hardware co-design and raise switching costs. _(@GavinSBaker)_
- [Bear case for frontier-lab valuations](https://x.com/andrewho03/status/2082786931419812338) — Andrew Ho: training-cost ratchets, cheap rivals and slow app adoption may undercut trillion-dollar lab valuations. _(@andrewho03)_
- [Anthropic wet-lab and private-frontier thesis](https://x.com/nic_carter/status/2100961655236485175) — Nic Carter speculates Anthropic's biology lab could let it keep discoveries or delay public model access. _(@nic_carter)_
- [Wafer blog](https://www.wafer.ai/blog) — AI-infrastructure research and product writing.

## Product launches, limits and account notes

- [Experimental Astra context-window configuration](https://x.com/brandon_galang/status/2097067132014211348) — Codex config for a larger context window and a later compaction threshold. _(@brandon_galang)_
- [Possible Codex usage-limit bug](https://x.com/BradGroux/status/2100450857149931733) — Points to a report that Codex may have used up usage unexpectedly. _(@BradGroux)_
- [Codex auto-review may be a material usage driver](https://x.com/kalin_t/status/2085770415604166807) — Kalin's dashboard showed auto-review driving many calls; usage slowed once he turned it off. _(@kalin_t)_
- [Allow macOS Computer Use to target normally forbidden UI](https://x.com/steipete/status/2074795172295291224) — `defaults write -g ComputerUseAllowForbiddenTargets -bool YES` relaxes a safety boundary; undo with `defaults delete -g ComputerUseAllowForbiddenTargets`. _(@steipete)_
- [Portable Codex identity across personal and work](https://x.com/Jaytel/status/2071701444126806315) — One user-owned account with employer-paid work usage, hard privacy boundaries and portable preferences. _(@Jaytel)_
- [ChatGPT multi-agent usage claim](https://x.com/SPAC89/status/2100055717566644585) — Launching several agents from ordinary ChatGPT within generous plan limits. _(@SPAC89)_
- [Which models can search X](https://x.com/pcstyle53/status/2096608599413837973) — Dispute over whether X search is unique to Grok. _(@pcstyle53)_
- [Korean Claude Max refund and chargeback claims](https://x.com/jun_song/status/2094964462168293551) — Thread saying some Korean subscribers won refunds or chargebacks over vague usage caps. _(@jun_song)_
- [ChatGPT for Financial Services launch](https://x.com/OpenAI/status/2098118191029624911) — OpenAI launch for financial data, research, modelling and client-material workflows. _(@OpenAI)_
- [Anthropic Financial Services repository](https://x.com/scaling01/status/2026292501296857564) — Anthropic's code repository for applying agents to financial-services workflows. _(@scaling01)_

## Work, enterprise and policy

- [Shopify's reflexive-AI operating memo](https://x.com/tobi/status/1909251946235437514) — Tobi Lütke makes AI use a baseline expectation: prototype with AI first, justify new headcount against it. _(@tobi)_
- [AI adoption is a distribution, not a login count](https://x.com/i/article/2085540776512192512) — Vas: enterprise AI use is a barbell of few power users and many shallow ones; via [Mario Zechner](https://x.com/badlogicgames/status/2086006259795263824). _(@badlogicgames)_
- [Reverse information paradox in enterprise AI](https://x.com/satyanadella/status/2076323181154230284) — Satya Nadella: firms leak know-how through prompts and traces, so keep memory, evals and orchestration in-house. _(@satyanadella)_
- [Career advice in the age of AI](https://x.com/i/article/2072793818945167475) — Phil Chen: time, relationships and reputation stay scarce; pick important problems; polish still matters. Via [Sushanth Raman](https://x.com/SushanthRaman/status/2085467466462097656). _(@SushanthRaman)_
- [Use AI for research, but retain authorship](https://x.com/dylanmatt/status/2085385209806045195) — Dylan Matthews: use models hard for research, but do the actual writing yourself. _(@dylanmatt)_
- [The Government Knows A.G.I. Is Coming](https://www.nytimes.com/2025/03/04/opinion/ezra-klein-podcast-ben-buchanan.html) — Ezra Klein interviews Biden AI adviser Ben Buchanan on preparedness, export controls and labour disruption. _(via @kimmonismus)_
- [AI 2027](https://ai-2027.com/race) — A structured scenario forecast of AI progress through 2027.
- [DeepMind on AI-assisted UK planning](https://deepmind.google/blog/unlocking-uk-house-building-with-ai-accelerated-planning/) — DeepMind on using AI to speed up UK planning and house building.
- [OpenAI's response to Apple's trade-secret allegations](https://openai.com/index/apple-is-getting-this-wrong/) — OpenAI's side of a contested trade-secrets dispute with Apple; [original post](https://x.com/OpenAINewsroom/status/2084515811306443093). _(@OpenAINewsroom)_

## News and reference sites

- [Aligned AI News](https://alignednews.com/ai) — AI-focused news site.
- [Sophon AI research terminal](https://sophon.at/homepage) — AI research product and discovery site.
- [Cloudflare Radar](https://radar.cloudflare.com/) — Internet traffic, routing, adoption and threat data.
- [Taste Labs](https://tastelabs.com/) — Product for taste graphs and recommendation layers.
- [TrophyLab](https://trophylab.mod.gov.ua/en/) — Official Ukrainian military-technology research site.
- [Replacement Clock](https://replacementclock.org/) — Demographic and political site whose definitions and projections need scrutiny.
- [Who Funded Genocide](https://whofundedgenocide.com/) — Political-donations research site with contested labels; read its primary records.
