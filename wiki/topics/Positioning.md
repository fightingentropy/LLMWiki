---
title: Positioning
type: topic
domain: markets
sources:
  - markets/Brief.md
  - markets/Trading.md
related:
  - Risk Analysis
  - Liquidations
  - Sentiment
  - Market Drivers
  - Funding Rates
  - Leverage
  - Flow Analysis
  - Crypto Trading
  - Stanley Druckenmiller
  - Markets - Brief
  - Markets - Trading
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - positioning
  - leverage
  - crowding
  - extremes
  - squeeze
  - options
summary: "How to read where the money sits (crowding, leverage, funding, flows, options), what long and short extremes set up, and where to monitor them."
---

# Positioning

Positioning is where the money is. Reading it reveals crowded trades, squeeze risk, and who will be forced to capitulate. This page covers how to assess positioning, what long and short extremes look like and set up, where to monitor them, and what extreme positioning means for risk. Forced unwinds themselves are covered in [[Liquidations]]; the money moving in and out is covered in [[Flow Analysis]].

## Where positioning sits in Erlin's notes

- The Druckenmiller-style daily brief gives positioning its own section, "Positioning & Flow", which asks for consensus positioning and crowded trades, dealer/gamma/CTA/systematic flow context if available, and sentiment extremes and squeeze risk (from [[Markets - Brief]]; see [[Stanley Druckenmiller]]).
- The trading checklist of things to look for includes "Top traders positioning" and "options positioning", next to liquidations, stablecoin dominance, stablecoin yields and funding rates (from [[Markets - Trading]]). These drivers are expanded in [[Market Drivers]].

## Assessing positioning

### Crowded trades

When consensus positioning is extreme:

- **Everyone long**: no buyers left, so the market is vulnerable to sellers.
- **Everyone short**: no sellers left, so the market is vulnerable to buyers.
- **Concentration**: if a few large players are on the same side, the unwind is violent.

### Leverage and funding

- **Funding rates**: in perpetual futures, extreme funding indicates leverage build-up. See [[Funding Rates]].
- **Borrow rates**: stablecoin yields show borrowed money seeking returns, a sign of leverage pressure.
- **Margin ratios**: traders running increasingly thin margins means fragile positioning.
- **Liquidation maps**: show where forced selling would occur.

See [[Leverage]] for leverage gauges and thresholds.

### Flow indicators

- **Stablecoin dominance**: shows money shifting into or out of risk.
- **Stablecoin flows**: inflows mean buyers coming in; outflows mean buyers exhausting.
- **Options positioning**: gamma and vega exposure to moves.
- **Dealer gamma**: dealers who are short gamma hedge by buying rallies and selling dips, which amplifies moves; dealers who are long gamma sell rallies and buy dips, which dampens them.

Correction, 15 October 2026: this page earlier said that short-gamma dealers hedge by selling rallies. That is the long-gamma hedge; short-gamma hedging chases the move.

## Positioning extremes

| State | Signs | Risk | Setup |
|---|---|---|---|
| Long extreme | Everyone long, leverage high, stablecoin dominance low | Vulnerable to any bad news or profit-taking | A short rally or a decline triggers cascade liquidation of longs |
| Short extreme | Everyone short, shorts' borrowing expensive, puts expensive | Any good news triggers a short squeeze | A rally forces short covering in a cascade |
| No clear positioning | Long/short balanced, low leverage, unclear consensus | A binary event can go either way; high vol expected | Wait for confirmation; there is no asymmetry |

Sentiment often runs to the same extremes as positioning; see [[Sentiment]].

## Monitoring

- **CoinGlass**: the [liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) shows the distribution of positioning.
- **Funding rates**: the leverage indicator for perpetual futures.
- **COT reports**: the Commitments of Traders reports, for positioning in commodity futures.
- **Options data**: put/call ratios and max pain levels.
- **Flow metrics**: stablecoin and ETF flows.

## Risk management

Extreme positioning is a risk amplifier:

- **Consensus positioning**: your edge is betting against consensus.
- **Leverage extremes**: liquidations will be violent when they happen.
- **Cascade risk**: one liquidation can trigger the next.

See [[Risk Analysis]] for squeeze risk from extremes and [[Liquidations]] for the mechanism by which positioning unwinds.

## Resources

- [CoinGlass Pro liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — CoinGlass's futures liquidation map; shows where leveraged positions cluster and where forced selling would trigger. Listed under useful links in [[Markets - Trading]].
- [Qwantify market flow](https://www.qwantify.io/app/analytics/market-flow) — Qwantify's market-flow analytics page, for reading flows alongside positioning. Also listed in [[Markets - Trading]].

## Related

[[Liquidations]] for the mechanism by which positioning unwinds · [[Risk Analysis]] for squeeze risk from extremes · [[Sentiment]], which often correlates with positioning extremes · [[Flow Analysis]] · [[Funding Rates]] · [[Leverage]] · [[Market Drivers]] · [[Crypto Trading]] · [[Markets - Brief]] · [[Markets - Trading]]
