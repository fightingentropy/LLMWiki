---
title: Markets - Brief
type: source
domain: markets
sources:
  - markets/Brief.md
related:
  - Markets - Articles
  - Macro Trading
  - Market Regime
  - Risk Analysis
  - Stanley Druckenmiller
  - Cross-Asset Analysis
  - Positioning
  - Flow Analysis
  - Sentiment
  - Rates
  - FX
  - Equities
  - Credit
  - Commodities
  - Crypto Trading
  - Markets - Handbook
  - Markets - Tools
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - daily-overview
  - market-analysis
  - template
  - druckenmiller-style
  - regime-analysis
  - cross-asset
  - polymarket
summary: "A Druckenmiller-style daily market brief template: seven required sections, from executive snapshot and regime call to risk radar and a Polymarket check."
review_status: archive
---

# Markets - Brief

A template for a daily market overview written in the style of [[Stanley Druckenmiller]]. It asks for a **complete but succinct** brief that a portfolio manager can act on: what is happening now, which [[Market Regime]] the market is in, which shifts are underway, the key risks and opportunities, and the high-signal triggers to watch next. Seven output sections are required, and the last one pulls live prediction-market signal from Polymarket.

## Objective

The brief covers:

- What is happening now (not what already happened)
- Current market regime
- Regime shifts underway
- Key risks and opportunities
- What to watch next (high-signal triggers)

Regime calls should rest on specific, observable indicators.

## Writing style

Write in a **direct, high-conviction, PM-ready** style:

- No fluff
- Prioritize signal over narrative
- Separate facts, interpretation, and positioning implications
- Keep concise, but comprehensive enough for portfolio decisions

## Output format (required)

### 1) Executive Snapshot (5–10 bullets)

- Most important cross-asset developments in the last 24–72h
- One-line "so what" for each

### 2) Market Regime Assessment

See [[Market Regime]] and [[Macro Trading]].

- **Growth / inflation regime call** — e.g. disinflationary slowdown, reacceleration, stag risk
- **Liquidity backdrop** — Fed, Treasury issuance, QT/QE proxies, dollar liquidity
- **Volatility regime** — suppressed, transitioning, unstable
- **Confidence level** — High / Medium / Low

### 3) Cross-Asset Read

Cover each with 2–5 bullets. See [[Cross-Asset Analysis]].

| Asset class | What to cover |
|---|---|
| [[Rates]] | Front-end, long-end, curve, real yields, implied policy path |
| [[FX]] | USD broad, key crosses (such as EUR/USD, GBP/USD, JPY), EM stress signals |
| [[Equities]] | Index internals, breadth, leadership, cyclicals vs defensives |
| [[Credit]] | IG/HY spreads, refinancing stress, defaults |
| [[Commodities]] | Oil, gas, metals; macro implications |
| Crypto | Only if macro-relevant, especially BTC as a liquidity/risk proxy (see [[Crypto Trading]]) |

### 4) Positioning & Flow

See [[Positioning]], [[Flow Analysis]] and [[Sentiment]].

- Consensus positioning and crowded trades
- Dealer/gamma/CTA/systematic flow context, if available
- Sentiment extremes and squeeze risk

### 5) Regime Shifts / Inflections to Watch

List 5–10 specific shifts, each with:

- What is changing
- Why it matters
- Observable confirmation signal

### 6) Risk Radar

See [[Risk Analysis]].

- Top 5 upside risks
- Top 5 downside risks
- Explicit trigger levels or events where possible

### 7) Polymarket Signal Check (required)

Run this query and summarise the notable signal from the top markets:

```bash
curl -s "https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false" \
| jq '[ .[] as $e | ($e.markets // [])[] | { title: (($e.title // "Untitled Event") + " - " + (.question // "Untitled Market")), volume24h: ((.volume24hr // .volume_24h // 0) | tonumber), liquidity: ((.liquidity // 0) | tonumber), slug: $e.slug } ] | sort_by(-.volume24h) | .[:10]'
```

What the command does:

- Fetches up to 200 active, open Polymarket events, ordered by volume, highest first.
- Flattens every market inside each event into one record: a title (event title + market question), 24-hour volume, liquidity and the event slug. Missing titles fall back to "Untitled Event" or "Untitled Market"; missing volume or liquidity counts as 0.
- Sorts the records by 24-hour volume and keeps the top 10.

## Links

- [Polymarket Gamma API — active events by volume](https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false) — Polymarket's public events endpoint, filtered to active, open events and sorted by volume; the data source for the Polymarket Signal Check.

## Related

[[Stanley Druckenmiller]] · [[Market Regime]] · [[Macro Trading]] · [[Risk Analysis]] · [[Cross-Asset Analysis]] · [[Positioning]] · [[Markets - Articles]] · [[Markets - Handbook]] · [[Markets - Tools]]
