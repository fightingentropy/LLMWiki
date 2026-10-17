---
title: Markets - Brief
type: source
domain: markets
summary: "A template for a Druckenmiller-style daily market brief: seven sections, from executive snapshot and regime call to risk radar and a Polymarket check."
tags: [markets, macro, trading]
related: [Macro Trading, Stanley Druckenmiller, Positioning and Sentiment, Rates and Credit, Markets - Handbook]
sources:
  - markets/Brief.md
created: '2026-04-12'
updated: '2026-10-17'
review_status: archive
---

# Markets - Brief

A prompt template for a daily market brief in the style of [[Stanley Druckenmiller]]. The brief must be complete but succinct, and ready for a portfolio manager to act on. It covers what is happening now (not what already happened), the current regime, regime shifts underway, key risks and opportunities, and the high-signal triggers to watch next. Regime calls rest on specific, observable indicators.

**Style:** direct, high-conviction, PM-ready. No fluff. Signal over narrative. Separate facts, interpretation and positioning implications. Concise, but enough for portfolio decisions.

## Required sections

1. **Executive snapshot** — 5–10 bullets on the most important cross-asset developments of the last 24–72 hours, each with a one-line "so what".
2. **Market regime assessment** — growth/inflation call (e.g. disinflationary slowdown, reacceleration, stag risk); liquidity backdrop (Fed, Treasury issuance, QT/QE proxies, dollar liquidity); volatility regime (suppressed, transitioning, unstable); confidence (high, medium, low). See [[Macro Trading]].
3. **Cross-asset read** — 2–5 bullets per asset class, using the table below.
4. **Positioning and flow** — consensus positioning and crowded trades; dealer, gamma, CTA and systematic flows if available; sentiment extremes and squeeze risk. See [[Positioning and Sentiment]].
5. **Regime shifts and inflections to watch** — 5–10 specific shifts, each with what is changing, why it matters, and the observable signal that would confirm it.
6. **Risk radar** — top 5 upside and top 5 downside risks, with explicit trigger levels or events where possible.
7. **Polymarket signal check** — run the query below and summarise the notable signal from the top markets.

| Asset class | What to cover |
|---|---|
| Rates | Front end, long end, curve, real yields, implied policy path |
| FX | Broad USD, key crosses (EUR/USD, GBP/USD, JPY), EM stress signals |
| Equities | Index internals, breadth, leadership, cyclicals vs defensives |
| Credit | IG/HY spreads, refinancing stress, defaults |
| Commodities | Oil, gas, metals, and their macro implications |
| Crypto | Only if macro-relevant, mainly BTC as a liquidity and risk proxy |

Background for each row: [[Rates and Credit]], [[FX]], [[Equities]], [[Commodities]], [[Crypto Trading]].

## Polymarket query

```bash
curl -s "https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false" \
| jq '[ .[] as $e | ($e.markets // [])[] | { title: (($e.title // "Untitled Event") + " - " + (.question // "Untitled Market")), volume24h: ((.volume24hr // .volume_24h // 0) | tonumber), liquidity: ((.liquidity // 0) | tonumber), slug: $e.slug } ] | sort_by(-.volume24h) | .[:10]'
```

The query fetches up to 200 active, open events ordered by volume. It flattens every market in each event into one record: title (event title plus market question), 24-hour volume, liquidity and event slug. Missing titles become "Untitled Event" or "Untitled Market"; missing numbers count as 0. It then sorts by 24-hour volume and keeps the top 10.

- [Polymarket Gamma API — active events by volume](https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false) — Polymarket's public events endpoint, filtered to active open events and sorted by volume.
