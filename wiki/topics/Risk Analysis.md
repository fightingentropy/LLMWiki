---
title: Risk Analysis
type: topic
domain: markets
sources:
  - markets/Brief.md
  - markets/Articles.md
  - markets/Handbook.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
related:
  - Markets - Brief
  - Markets - Articles
  - Market Regime
  - Liquidations
  - Positioning
  - Market Performance Measurement
  - Hyperliquid
  - Bookmarks - Markets & Crypto
  - Credit
  - Leverage
  - Sentiment
  - Citrini Research
  - Citadel Securities
  - Stanley Druckenmiller
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - risk
  - downside
  - volatility
  - triggers
  - radar
  - scenarios
  - model-risk
summary: "How to build a risk radar: upside and downside risks with triggers, macro, market-structure and credit risks, scenarios, and hedged-trade model risk."
---

# Risk Analysis

Risk analysis here means naming specific risks in both directions and tying each one to a trigger you can observe, rather than making predictions. The [[Markets - Brief]] daily overview, written in a [[Stanley Druckenmiller]] style, requires a "Risk Radar" section with explicit trigger levels and events. This page holds that structure, a catalogue of risk categories, a worked downside scenario from [[Markets - Articles]], and a lesson on hedged trades that were less hedged than they looked.

## The risk radar

The Brief asks for three things in its Risk Radar (from [[Markets - Brief]]):

- Top 5 upside risks.
- Top 5 downside risks.
- Explicit trigger levels or events where possible.

It pairs this with a list of 5–10 regime shifts to watch, each stated as what is changing, why it matters, and the observable confirmation signal. Its positioning section also asks for "Sentiment extremes and squeeze risk". See [[Market Regime]] for the regime context the risks sit in, and [[Sentiment]] for reading crowd extremes.

### Upside risks

Risks that could cause prices to rally unexpectedly:

- Identify specific catalysts (Fed pivot, earnings beats, geopolitical resolution).
- Set trigger levels (specific announcement, economic print).
- Assess probability and impact.

### Downside risks

Risks that could cause sharp drawdowns:

- Identify specific catalysts (policy error, credit event, geopolitical escalation).
- Set trigger levels (economic miss, spread widening, index level breaks).
- Assess probability and impact.

For the probability side, the Brief also requires a Polymarket check: a query that pulls active events and lists the ten markets with the highest 24-hour volume (link under Resources).

## Risk categories

### Macro risks

- Growth shock (recession or depression).
- Inflation shock (geopolitical, supply-side).
- Policy error (rate hike or cut too aggressive).
- Fiscal crisis (sovereign debt stress).
- Geopolitical escalation.

### Market-structure risks

- Liquidity evaporation (bid-ask spreads widen, dealers withdraw).
- Positioning unwinding (flash crashes from gamma or CTA flows). See [[Positioning]].
- Leverage cascade (margin calls forcing liquidations). See [[Liquidations]] for the mechanics that amplify moves, and [[Leverage]].
- Flow reversal (ETF redemptions, stablecoin outflow).

### Credit risks

- Refinancing stress (higher rates, wider spreads).
- Default cascade (rating downgrades, deteriorating credits).
- Private credit unraveling (less transparent, less liquid structures).
- Duration blow-up (real yields spike, mortgages stress).

See [[Credit]] for the wider subject.

## Observable triggers

Focus on specific, observable confirmations rather than predictions:

- **Yield curve**: specific levels (10Y/2Y inversion depth, 2Y level).
- **Credit spreads**: HY breaks above specific levels; specific credits under pressure.
- **Equity breadth**: A/D line divergence, small-cap underperformance.
- **FX moves**: DXY breaks, EM currency weakness.
- **Commodity spikes**: oil, food inflation indicators.
- **Volatility regimes**: VIX breaks, GARCH regime shifts.

## Scenario analysis

The "June 2028" scenario saved in [[Markets - Articles]] is an example of explicit downside scenario modeling. [[Citrini Research]] opens it with:

> "JUNE 2028. The S&P is down 38% from its highs. Unemployment just printed 10.2%. Private credit is unraveling. Prime mortgages are cracking. AI didn’t disappoint. It exceeded every expectation. What happened?" ([post](https://x.com/Citrini7/status/2025653614430023864))

- S&P down 38% from highs.
- Unemployment at 10.2%.
- Private credit unraveling.
- Prime mortgages cracking.
- AI exceeded expectations, yet this paradoxically coincides with financial stress.

The scenario tests portfolio resilience and identifies what would break. It is a fictional scenario, not a forecast. [[Citadel Securities]] published a rebuttal, saved beside it.

## Hedged positions and model risk

@alex_hunter20 posted a HYPE spot-plus-perpetual funding strategy on [[Hyperliquid]], then published a mathematical correction of it: portfolio-margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis behaviour make the apparently delta-neutral trade capable of liquidation and loss (from [[Bookmarks - Markets & Crypto]]). An earlier note by the same author explains why a delta-neutral portfolio-margin account can still be liquidated.

The reusable lesson is to keep the corrected assumptions next to the initial payoff story. Financing, collateral rules, maintenance requirements and price drift are all part of the exposure, even when the position looks hedged.

[[Market Performance Measurement]] applies the same discipline to leaderboard returns: apparent success can be misclassified when account roles or offsetting positions are missing. See [[Hyperliquid]] and [[Bookmarks - Markets & Crypto]] for the underlying references.

## Resources

- [JUNE 2028 scenario](https://x.com/Citrini7/status/2025653614430023864) — Citrini's hypothetical crash scenario in which AI exceeds expectations while equities, jobs, private credit and mortgages break. _(@Citrini7)_
- [Citadel Securities: 2026 Global Intelligence Crisis](https://www.citadelsecurities.com/news-and-insights/2026-global-intelligence-crisis/) — Citadel Securities piece saved as the rebuttal to the June 2028 scenario.
- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — Detailed risk note on BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate. _(@alex_hunter20)_
- [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) — The original funding-trade setup. Read it only together with the correction below. _(@alex_hunter20)_
- [Mathematical correction to the HYPE funding strategy](https://x.com/alex_hunter20/status/2095155500119945541) — The author's own correction showing how margin ratio, LTV, rebalancing, funding, borrow cost and basis can turn the trade into a liquidation and a loss. _(@alex_hunter20)_
- [What Hyperliquid leaderboard PnL actually measures](https://x.com/alex_hunter20/status/2102003574331130349) — Quotes an attempt to separate protocol contracts, market makers, token deployers, long-term holders and directional traders among the largest displayed accounts. Useful method; identities and PnL still need on-chain checking. _(@alex_hunter20 quoting @MarketsAlpha)_
- [Hyperliquid manual borrows](https://x.com/HyperliquidX/status/2100838194317312446) — Official announcement that portfolio-margin users can supply HYPE or BTC and borrow USDC or USDT at utilization-based interest, the borrow cost that sits inside a funding trade. Rates and collateral rules change; check current docs. _(@HyperliquidX)_
- [UK long-gilt stress and bankruptcy rhetoric](https://x.com/philippilk/status/2094692355605516614) — Pairs a high 30-year gilt yield with Britain's large US Treasury holdings and predicts a blow-up. The yield and cross-border balance-sheet questions are a sovereign-stress watch item; "bankruptcy" is unsupported rhetoric. _(@philippilk)_
- [Misleading Bank of England mortgage explanation](https://x.com/TJiMTS/status/2095425688698290214) — A prompt to think about mortgage refinancing pain; the mechanics in the post are wrong, since bank lending creates a deposit and mortgage pricing reflects many funding and credit inputs. _(@TJiMTS)_
- [Polymarket active-events query](https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false) — Polymarket Gamma API endpoint the Brief queries (with a jq filter) to list the top ten markets by 24-hour volume, as a market-implied read on event risk.

## Related

[[Markets - Brief]] · [[Markets - Articles]] · [[Market Regime]] · [[Liquidations]] · [[Positioning]] · [[Leverage]] · [[Credit]] · [[Sentiment]] · [[Market Performance Measurement]] · [[Hyperliquid]] · [[Bookmarks - Markets & Crypto]] · [[Citrini Research]] · [[Citadel Securities]] · [[Stanley Druckenmiller]]
