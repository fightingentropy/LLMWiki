---
title: Flow Analysis
type: topic
domain: markets
sources:
  - markets/Trading.md
  - markets/Tools.md
  - markets/Brief.md
related:
  - Market Drivers
  - Positioning
  - Crypto Trading
  - Sentiment
  - Liquidations
  - Funding Rates
  - Leverage
  - Market Regime
  - Hyperliquid
  - Stanley Druckenmiller
  - Markets - Trading
  - Markets - Tools
  - Markets - Brief
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - flows
  - positioning
  - money-movement
  - analysis
  - stablecoins
  - liquidations
summary: "The kinds of money flow that move prices, how to tell normal, flow-driven and squeeze markets apart, the signals to read, and the tools to watch flows."
---

# Flow Analysis

Flow analysis asks who is buying and who is selling, and how hard. The core claim: money flows are what actually move prices, and reading them reveals regime changes before those changes show up in price. Several of the "things to look for" in Erlin's trading note are flow inputs: mechanical movements, liquidations, top traders' positioning, stablecoin dominance, stablecoin yields, funding rates and options positioning (from [[Markets - Trading]]). The daily brief template gives positioning and flow a section of its own (from [[Markets - Brief]]).

The trading note opens with a different emphasis:

> "Truth doesn't necessarily move markets. Perception & Uncertainty/Certainty transition does." (from [[Markets - Trading]], linked to a [YouTube video at 31:16](https://youtu.be/rZ9rUh9WhwU?t=1876))

The two are not the same claim. One says flows move price; the other says shifts in perception and in how certain an outcome looks do. Flows can be read as the visible trace of those shifts, but the notes leave the tension open.

## Types of flow

### Cash flows

- **ETF inflows/outflows:** retail buying and selling via funds.
- **Insider transactions:** company insiders buying signals confidence; selling signals concern.
- **Buyback activity:** companies buying their own stock gives price support but flushes capital.
- **Redemptions:** mutual fund outflows mean forced selling.

### Leverage flows

- **Margin buying:** increasing use of leverage means risk-taking, and bulls winning. See [[Leverage]].
- **Margin liquidation:** forced selling from margin calls accelerates a price decline. See [[Liquidations]].
- **Short covering:** shorts buying to close produces a squeeze.
- **Short selling:** new shorts mean bearish positioning.

### Crypto-specific flows

- **Stablecoin flows:** USDT/USDC moving into or out of exchanges is a positioning indicator.
- **Stablecoin yields:** borrow rates on stables indicate funding pressure. See [[Funding Rates]].
- **Exchange inflows:** coins moving to exchanges make selling pressure likely.
- **Exchange outflows:** coins moving to self-custody show holding conviction.

The trading note also tracks stablecoin dominance alongside stablecoin yields and funding rates (from [[Markets - Trading]]). For how these fit a crypto view, see [[Crypto Trading]].

### Cross-asset flows

- **Risk-on flow:** money rotating into equities, away from bonds and gold.
- **Risk-off flow:** money rotating into bonds and gold, away from equities.
- **Sector flows:** rotation from one sector to another within equities.
- **EM flows:** capital moving into or out of emerging markets drives currency moves.

## Three flow regimes

| | Normal market | Flow-driven market | Squeeze market |
|---|---|---|---|
| Flow | Steady bidding and offering; flows balanced, no extreme directionality | Directional flow one way; buyers and sellers exhausting each other | Extreme positioning forces flows; liquidations cascade |
| Price | Moves on news and data | Moves faster than normal on a given piece of news | Gaps through levels; momentum accelerates, then reverses sharply |
| Technical levels | Hold | Break | Gapped through |

See [[Market Regime]] for the wider regime frame and [[Positioning]] for the positioning that creates squeezes.

## Reading flow direction

- **Ask prices hitting:** more sellers than buyers.
- **Bid prices hitting:** more buyers than sellers.
- **Volume with direction:** a trend moving on high volume means strong flow.
- **Volume against trend:** buying into weakness without moving price signals exhaustion.

Correction, 15 October 2026: the first two lines reverse the usual convention. Sellers hit the bid and buyers lift the ask, so trades printing at the bid show selling pressure and trades printing at the ask show buying pressure.

## Practical applications

### Identifying regime shifts

- Stablecoin outflows mean money leaving risk assets: bearish.
- ETF inflows to growth mean rotation into risk: bullish.
- A spike in insider selling means executives are concerned: caution.

### Catching extremes

- Margin at extremes: leverage ready to blow.
- Shorts at extremes: squeeze risk is high.
- Long positions clustered: rotation risk.
- Options at extremes: a gamma edge to one side.

### Predicting moves

- Flow acceleration: continuation of the move is likely.
- Flow reversal: an inflection is likely.
- Flow divergence: new money entering while old holders leave.

## Flow in the daily brief

The Druckenmiller-style daily market overview (see [[Stanley Druckenmiller]]) requires a "Positioning & Flow" section covering (from [[Markets - Brief]]):

- Consensus positioning and crowded trades.
- Dealer, gamma, CTA and systematic flow context, if available.
- Sentiment extremes and squeeze risk. See [[Sentiment]].

## Monitoring tools

- **Qwantify:** real-time market flow analysis.
- **CoinGlass:** liquidation flows and positioning in crypto.
- **On-chain explorers:** track wallet movements and exchange flows.
- **Visa/Mastercard data:** a spending proxy for retail activity.
- **Sentiment indicators:** flow often precedes a shift in sentiment.

## Resources

- [Qwantify market flow](https://www.qwantify.io/app/analytics/market-flow) — Qwantify's market-flow analytics page, the real-time flow tool listed above (from [[Markets - Trading]]).
- [CoinGlass liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — CoinGlass's futures liquidation map, the crypto liquidation and positioning tool listed above (from [[Markets - Trading]]).
- [Loris Tools liquidations](https://loris.tools/liquidations) — the page the tools note labels "real time liquidations" (from [[Markets - Tools]]).
- [Checkonchain ETF MVRV chart](https://charts.checkonchain.com/btconchain/etfs/etf_mvrv/etf_mvrv_light.html) — Checkonchain's Bitcoin ETF MVRV chart, saved without a note (from [[Markets - Trading]]).
- [Robinhood HYPE wallet](https://hyperevmscan.io/address/0x841ed663f2636863d40be4ee76243377dff13a34) — HyperEVM explorer page for the address the note labels Robinhood's HYPE wallet; an example of following one wallet on-chain on [[Hyperliquid]] (from [[Markets - Trading]]).
- [YouTube video at 31:16](https://youtu.be/rZ9rUh9WhwU?t=1876) — the video the trading note links from its line on what moves markets. Saved without a further note.

## Related

[[Positioning]] for what flow created · [[Liquidations]] for forced flow mechanics · [[Market Drivers]] for flow as a macro driver · [[Crypto Trading]] · [[Sentiment]] · [[Funding Rates]] · [[Leverage]] · [[Market Regime]] · [[Hyperliquid]] · [[Markets - Trading]] · [[Markets - Tools]] · [[Markets - Brief]]
