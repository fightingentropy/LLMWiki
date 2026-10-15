---
title: Funding Rates
type: topic
domain: markets
sources:
  - markets/Trading.md
  - bookmarks/Markets & Crypto.md
related:
  - Crypto Trading
  - Leverage
  - Market Drivers
  - Liquidations
  - Markets - Trading
  - X-Bookmarks
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - crypto
  - derivatives
  - funding
  - leverage-indicator
  - perpetuals
summary: How perpetual-swap funding rates work, the crowding heuristics and trade setups attached to them, and research showing funding is weak as a standalone price signal.
---

# Funding Rates

Perpetual futures funding rates are a direct measure of leverage and leverage imbalance in crypto markets. They show whether longs or shorts are paying to hold positions. Funding rates are on the "Things to look for" list in Erlin's trading note, next to liquidations, mechanical movements, top traders' positioning and options positioning (from [[Markets - Trading]]).

Funding describes carrying cost and relative crowding. It is not a robust standalone daily price predictor, and the thresholds below are heuristics, not invariant probabilities or automatic trades.

## How funding works

Perpetual swaps have no expiration date, unlike traditional futures, so traders can hold positions indefinitely. To keep longs and shorts balanced there is a funding rate: whoever is on the crowded side (usually longs) pays the uncrowded side (usually shorts).

| Funding | Who pays | Implication | Market signal |
| --- | --- | --- | --- |
| Positive | Longs pay shorts | More longs than shorts; crowding on the long side | Bulls dominating, risk-on sentiment |
| Negative | Shorts pay longs | More shorts than longs; crowding on the short side | Bears dominating, risk-off sentiment (rare) |
| Zero or balanced | Neither side | No crowding, balanced positioning | Neutral market, vulnerable to a directional move |

Extreme funding levels:

- **0.1%+ per day** is 36%+ annualized, which means bubble risk.
- **0.2%+ per day** is 73%+ annualized, which means dangerous crowding.

## Reading the trend

- **Rising positive funding:** longs accumulating, leverage building on the long side, bubble risk increasing. An exhaustion warning.
- **Falling or negative funding:** longs capitulating, leverage reducing, shorts accumulating (a contrarian indicator). Sets up a potential bounce.
- **Zero or balanced funding:** no crowding, balanced positioning, neutral market. The market is vulnerable to a directional move.

## Trade setups

These are heuristics, not rules. The research below found funding-based conditionals weaker than they look.

**High positive funding (above 0.05% per day)**

- Setup: long-biased market with leverage.
- Risk: liquidations on a sharp selloff.
- Trade: short pullbacks (fade rallies) or wait for the cascade.
- Probability: eventual capitulation.

**Negative funding (rare)**

- Setup: unusual positioning and extreme bearishness.
- Opportunity: short squeeze setup.
- Trade: long into weakness, or wait for a reversal.
- Probability: oversold bounce.

**Rapidly rising funding**

- Setup: trend day up, longs piling in.
- Risk: that is the last rally.
- Trade: short into momentum.
- Setup: climactic action.

## Funding and price

- High funding does not predict direction, only crowding.
- Crowding limits upside, because buyers are exhausted.
- Crowding increases downside risk, because of forced selling.
- Extreme funding often precedes consolidation, then reversal.

Cascades often happen at high funding:

1. Price trends up on high funding.
2. Something triggers uncertainty.
3. Longs start to worry.
4. Early longs exit, hitting other traders' stops.
5. The cascade begins.

## What the research found

Research on funding signals found them weaker than the intuitive story (from [[X-Bookmarks]]). It tested per-contract normalization, open interest, price action, cross-venue aggregation, composites, volatility sizing, hedging and settlement timing.

- Raw funding was weak for daily price direction.
- Open-interest conditioning, high-funding plus falling-price tests, composites, cross-venue weighting, volatility sizing, hedging and settlement sniping did not add robust alpha.
- Stronger carry results were fragile and concentrated in 2020-2021.
- The code repository and raw datasets are unavailable, so the results cannot be independently recomputed.

Read it as a negative-result lead from skeptical research, not a strategy and not a final replication. It sits in tension with the trade setups above: the funding-based conditionals it tested, such as high funding plus falling price, did not add robust alpha.

## Resources

- [Bybit](https://www.bybit.com/en-US/) — Exchange site listed as a source of funding rate data.
- [CoinGlass](https://www.coinglass.com/) — Aggregated funding and liquidations data across exchanges.
- Funding rate aggregators in general give real-time tracking across exchanges.
- [Funding-rate signals are weaker than the intuitive story](https://x.com/OctopusTakopi/status/2085776377366864050) — Takopi's post linking the skeptical funding-rate research summarised above. _(@OctopusTakopi)_

## Related

[[Leverage]] for the broader leverage indicator context · [[Liquidations]] for forced-selling mechanics · [[Crypto Trading]] for crypto-specific drivers · [[Market Drivers]] · [[Markets - Trading]] · [[X-Bookmarks]]
