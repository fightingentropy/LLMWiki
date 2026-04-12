---
title: Markets - Brief
type: source
domain: markets
sources: [Brief.md]
related: [[Markets - Articles]], [[Macro Trading]], [[Market Regime]], [[Risk Analysis]]
created: 2026-04-12
updated: 2026-04-12
tags: [daily-overview, market-analysis, template, druckenmiller-style, regime-analysis]
---

## Overview
Daily market overview template in the style of Stanley Druckenmiller. Designed to produce complete but succinct analysis covering market regime, cross-asset dynamics, positioning, and key inflections.

## Template Structure

### 1) Executive Snapshot (5–10 bullets)
Most important cross-asset developments in last 24–72h with one-line "so what" for each development.

### 2) Market Regime Assessment
Focus areas:
- **Growth/Inflation Regime**: Disinflationary slowdown, reacceleration, or stag risk calls
- **Liquidity Backdrop**: Fed policy, Treasury issuance, QT/QE proxies, dollar liquidity conditions
- **Volatility Regime**: Suppressed, transitioning, or unstable
- **Confidence Level**: High / Medium / Low assessment

### 3) Cross-Asset Read
Comprehensive coverage with 2–5 bullets each:
- **Rates**: Front-end, long-end, curve shape, real yields, implied policy path
- **FX**: USD broad, key crosses (EUR/USD, GBP/USD, JPY), EM stress signals
- **Equities**: Index internals, breadth, sector leadership, cyclicals vs defensives rotation
- **Credit**: IG/HY spreads, refinancing stress signals, default risk
- **Commodities**: Oil, natural gas, metals; macro implications
- **Crypto**: If macro-relevant; BTC as liquidity/risk proxy

### 4) Positioning & Flow
- Consensus positioning and crowded trades
- Dealer/gamma/CTA/systematic flow context
- Sentiment extremes and squeeze risk identification

### 5) Regime Shifts / Inflections to Watch
List 5–10 specific shifts with:
- What is changing
- Why it matters
- Observable confirmation signal

### 6) Risk Radar
- Top 5 upside risks with catalysts
- Top 5 downside risks with catalysts
- Explicit trigger levels/events where possible

### 7) Polymarket Signal Check
Query and summarize notable signal from top prediction markets:
```bash
curl -s "https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false" \
| jq '[ .[] as $e | ($e.markets // [])[] | { title: (($e.title // "Untitled Event") + " - " + (.question // "Untitled Market")), volume24h: ((.volume24hr // .volume_24h // 0) | tonumber), liquidity: ((.liquidity // 0) | tonumber), slug: $e.slug } ] | sort_by(-.volume24h) | .[:10]'
```

## Writing Style
- **Direct, high-conviction, PM-ready**
- No fluff
- Prioritize signal over narrative
- Separate facts, interpretation, and positioning implications
- Keep concise, but comprehensive enough for portfolio decisions

## Key Principles
- Focus on what is happening now, not what already happened
- Identify current market regime and shifts underway
- Surface high-signal triggers and inflection points
- Support regime calls with specific, observable indicators
