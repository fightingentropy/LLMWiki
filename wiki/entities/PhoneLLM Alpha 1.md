---
title: PhoneLLM Alpha 1
type: entity
domain: dev
sources:
  - bookmarks/AI & Agents.md
  - bookmarks/Developer Tools.md
related:
  - AI Agents
  - Developer Resources
  - X-Bookmarks
  - Bookmarks - AI & Agents
  - Bookmarks - Developer Tools
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-15'
tags:
  - voice-agent
  - language-model
  - open-weights
  - tool-use
  - speech
summary: "What PhoneLLM Alpha 1 is, where it sits in a voice-agent pipeline, and the model card, announcement and speech components worth opening."
---

# PhoneLLM Alpha 1

PhoneLLM Alpha 1 is Daily/Pipecat's open-weights fine-tune of NVIDIA Nemotron 3 Nano 30B-A3B, built for low-latency voice agents. It is the text-language component of a voice pipeline, not an end-to-end speech model. It is in this wiki as a reference for specialized, self-hosted assistants. (from [[X-Bookmarks]])

## Key ideas

- **Aim.** Concise multi-turn conversation and reliable tool use, with thinking disabled.
- **Role in a pipeline.** Speech recognition and synthesis remain separate components around it.
- **References.** The model card documents deployment and the PhoneBench evaluation.
- **Benchmarks.** Cost, latency and capability comparisons are vendor benchmarks under specific serving conditions, not universal guarantees. Reproduce them on the target hardware and workload.

## Links

- [PhoneLLM Alpha 1 for low-latency voice agents](https://huggingface.co/pipecat-ai/phonellm-alpha-1) — The Hugging Face model card from pipecat-ai, with deployment details and the PhoneBench evaluation.
- [Kwindla Hultman's announcement](https://x.com/kwindla/status/2093014818647339026) — The post announcing the model. _(@kwindla)_

### Speech components for the rest of a voice pipeline

These cover the speech recognition and synthesis that PhoneLLM leaves to other components.

- [Open-source real-time speech-to-speech stack](https://x.com/Thom_Wolf/status/2072825424800006350) — Hugging Face and Cerebras released a forkable live voice demo with models, code, a hosted space and an implementation write-up. _(@Thom_Wolf)_
- [Speech-to-speech assistant in 150 lines](https://x.com/MistralDevs/status/2039777721207640230) — A tutorial combining diarized speech-to-text, agentic reasoning, web search and text-to-speech. _(@MistralDevs)_
- [Grok speech-to-text and text-to-speech APIs](https://docs.x.ai/developers/model-capabilities/audio/voice) — xAI's documentation for multilingual transcription, multi-speaker handling and speech generation. Language coverage, pricing, latency and quality are vendor claims that can change.
- [Fish Audio S2 expressive TTS](https://x.com/FishAudio/status/2031411140820152560) — An open-source, low-latency, multilingual voice model with emotion control. _(@FishAudio)_
- [Inworld Mini and Max TTS models](https://x.com/replicate/status/2031792388453388373) — A model reference for low-latency agents and high-quality expressive voice. _(@replicate)_
- [OmniVoice multilingual TTS](https://x.com/wildmindai/status/2039735360830189667) — A small, fast model supporting more than 600 languages, voice cloning and voice design. _(@wildmindai)_

## Related

[[AI Agents]] · [[Developer_Resources|Developer Resources]] · [[X-Bookmarks]] · [[Bookmarks - AI & Agents]] · [[Bookmarks - Developer Tools]]
