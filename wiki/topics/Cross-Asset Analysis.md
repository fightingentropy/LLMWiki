---
title: Cross-Asset Analysis
type: topic
domain: markets
sources:
  - markets/Brief.md
  - markets/Trading.md
related:
  - Market Regime
  - Macro Trading
  - Rates
  - FX
  - Equities
  - Credit
  - Commodities
  - Markets - Brief
  - Markets - Trading
  - Real Yields
  - Gold
  - Oil
  - Funding Rates
  - Positioning
  - Risk Analysis
  - Stanley Druckenmiller
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - correlation
  - integration
  - macro
  - regime
  - cross-asset
  - risk-on-risk-off
summary: "How rates, FX, equities, credit, commodities and crypto read together to call the market regime, and the cross-asset checklist behind the Markets Brief."
---

# Cross-Asset Analysis

Cross-asset analysis reads several markets together to identify the regime, positioning and hidden dynamics. Each asset class on its own tells an incomplete story; the relationships between them show the full picture. In this wiki the topic is the backbone of the "Cross-Asset Read" section of the [[Markets - Brief]] template, the Druckenmiller-style daily overview (see [[Stanley Druckenmiller]]). This page gives the checklist, what each market signals, the standard relationships, and the dislocations that flag tail risk.

## The Brief's checklist

The [[Markets - Brief]] template asks for 2–5 bullets on each market below (from [[Markets - Brief]]):

| Market | What to cover |
|---|---|
| [[Rates]] | Front-end, long-end, curve, real yields, implied policy path |
| [[FX]] | USD broad, key crosses, EM stress signals |
| [[Equities]] | Index internals, breadth, leadership, cyclicals vs defensives |
| [[Credit]] | IG/HY spreads, refinancing stress, defaults |
| [[Commodities]] | Oil, gas, metals; macro implications |
| Crypto | Only if macro-relevant, especially BTC as liquidity/risk proxy |

The same template opens with an executive snapshot of the most important cross-asset developments of the last 24–72 hours, each with a one-line "so what", and closes with a required Polymarket signal check (see Resources).

## What each market signals

### Rates

- **Front-end** (2Y, 3Y): reflects near-term policy expectations.
- **Long-end** (10Y, 30Y): growth and inflation expectations.
- **Curve shape**: inversion signals recession risk; steepening signals growth or inflation.
- **Real yields**: inflation-adjusted; they drive the macro regime. See [[Real Yields]].
- **Implied policy path**: the market-priced Fed path against consensus.

### FX

- **USD broad**: dollar strength usually means risk-off, a flight to safe havens.
- **Key crosses**: EUR/USD (Europe growth), GBP/USD (UK policy), JPY (safe haven).
- **EM stress signals**: emerging markets are often the first to stress in risk-off; currency weakness reveals it.
- **Carry trade unwinds**: yen strength can force liquidations in leveraged positions.

### Equities

- **Index internals**: breadth and the advance/decline ratio show market health.
- **Leadership**: concentration (mega-cap tech) against dispersion (small caps, cyclicals).
- **Sector rotation**: cyclicals against defensives shows growth expectations.
- **Valuation**: P/E ratios and earnings yields show positioning and risk.

### Credit

- **IG/HY spreads**: wider spreads mean higher risk perception; tighter spreads mean complacency.
- **Refinancing stress**: maturing debt at high rates, weak demand.
- **Default risk**: specific credits against market-wide stress.
- **Private credit**: less liquid and less transparent; it can surprise on the downside.

### Commodities

- **Oil**: cyclical; correlated with growth and risk appetite. See [[Oil]].
- **Natural gas**: seasonal; driven by weather, policy and geopolitics.
- **Metals**: gold and silver are inversely correlated with real rates and the DXY. See [[Gold]].
- **Food inflation**: often a leading indicator for broader inflation.

### Crypto (if macro-relevant)

- **Bitcoin**: often trades as a risk asset (risk-on means up), but increasingly as a macro or liquidity proxy.
- **Stablecoin flows**: a money-market proxy and tail-risk hedge.
- **Funding rates**: the leverage indicator across crypto. See [[Funding Rates]].

The Trading note's list of things to look for in crypto overlaps with this read: CT sentiment, macro, mechanical movements, liquidations, top traders' positioning, catalysts, stablecoin dominance, stablecoin yields, funding rates and options positioning. It adds that "Crypto is momentum driven (meaning moving averages play a role & market structure is important)" (from [[Markets - Trading]]).

## Key relationships

### Risk-on and risk-off

- **Risk-on**: equities up, credit tight, commodity prices up, USD weak.
- **Risk-off**: equities down, credit wide, commodities mixed, USD strong, gold and other safe havens up.

These two maps pull against the metals line above: gold is listed as inversely correlated with the DXY, yet the risk-off map has both the dollar and gold rising. The notes do not reconcile the two.

### Growth expectations

- **Growth acceleration**: curves steepen, long rates rise, cyclicals outperform.
- **Growth deceleration**: curves flatten or invert, real yields fall, defensives outperform.

### Inflation expectations

- **Inflation rising**: real yields up (if growth is intact), commodities up; the dollar can be strong.
- **Inflation falling**: real yields down, growth-sensitive rates fall, long bonds rally.

## Regime integration

The [[Markets - Brief]] template requires cross-asset calls that cohere with its [[Market Regime]] call. In practice:

- Each market view must be consistent with the regime view.
- Contradictory signals reveal inflections or positioning extremes. See [[Positioning]].
- New regimes often show up first in carry and currency markets before they hit equities.

The Trading note frames why the inflection matters more than the facts: "Truth doesn't necessarily move [markets](https://youtu.be/rZ9rUh9WhwU?t=1876). Perception & Uncertainty/Certainty transition does." (from [[Markets - Trading]])

## Tail-risk recognition

Cross-asset dislocations reveal tail risks. See [[Risk Analysis]].

- **Equity–credit divergence** (equities up, spreads wide): positioning extremes.
- **EM currency crash plus commodity collapse**: an emerging-market crisis.
- **Real-yield spike plus equity selloff**: a volatility regime shift.

## Resources

- [Polymarket events API, active markets by volume](https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false) — The endpoint the Brief template queries for its required Polymarket signal check; the template's jq filter cuts the result to the ten markets with the highest 24-hour volume, with liquidity and slug.
- [YouTube video at 31:16](https://youtu.be/rZ9rUh9WhwU?t=1876) — The video the Trading note links behind its line that truth does not necessarily move markets.
- [CoinGlass liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — CoinGlass's crypto futures liquidation map, listed among the Trading note's useful links; it backs the "liquidations" item in the note's things to look for.

## Related

[[Market Regime]] · [[Macro Trading]] · [[Rates]] · [[FX]] · [[Equities]] · [[Credit]] · [[Commodities]] · [[Real Yields]] · [[Gold]] · [[Oil]] · [[Funding Rates]] · [[Positioning]] · [[Risk Analysis]] · [[Markets - Brief]] · [[Markets - Trading]] · [[Stanley Druckenmiller]]
