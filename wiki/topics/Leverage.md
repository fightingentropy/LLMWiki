---
title: Leverage
type: topic
domain: markets
sources: [Trading.md, Brief.md, CT.md]
related: [[Risk Analysis]], [[Liquidations]], [[Positioning]], [[Funding Rates]], [[CT]]
created: 2026-04-12
updated: 2026-04-18
tags: [leverage, margin, funding-rates, risk, amplification]
---

## Overview
Leverage amplifies returns and risks. Understanding leverage levels is critical to identifying when forced selling becomes likely.

## Leverage Indicators

### Funding Rates (Crypto Perpetuals)
- **What it is**: Daily borrowing cost for holding leveraged positions
- **Normal**: 0.01-0.05% per day
- **Elevated**: 0.1%+ per day indicates high leverage
- **Extreme**: 0.2%+ per day indicates bubble/crash risk
- **Negative rates**: Shorts expensive = long squeeze setting up

### Margin Usage
- **Margin debt**: Total borrowed capital by retail investors
- **Margin as % of market cap**: Extreme when > 3% of SPX market cap
- **Margin increases**: Risk-taking increasing
- **Margin decreases**: Risk-off, forced liquidation likely

### Stablecoin Yields
- **Borrow rates on USDT/USDC**: Higher rates = more leverage demand
- **Lending rates**: Excess supply = less leverage
- **Yield curve**: Basis for leverage trades

### Leverage Ratio Compression
- **Ratio falling**: Leverage reducing = deleveraging
- **Ratio rising**: Leverage increasing = risk-taking
- **Reversal speed**: Fast leverage reduction = crash imminent

## Leverage Cascade Mechanics

### Building Phase
1. Leverage increases gradually
2. Markets trending in direction of leverage
3. Stop losses hit, triggering more leverage
4. Euphoria at peak

### Inflection Point
- Some event triggers uncertainty
- Stop losses trigger
- Leveraged positions underwater
- Margin calls initiate

### Cascade Phase
1. Forced liquidations increase
2. Liquidations hit stops of other leveraged traders
3. Cascade accelerates
4. Market gaps through levels
5. Liquidity evaporates

### Capitulation Phase
- Final holders capitulate
- Last momentum traders stop out
- Price stabilizes
- Recovery begins

## Risk Levels by Indicator

### Normal
- Funding rates < 0.05% per day
- Margin debt stable or declining
- Stablecoin yields < 5% annualized
- Leverage reducing

### Caution
- Funding rates 0.05-0.1% per day
- Margin debt stable
- Stablecoin yields 5-10% annualized
- Leverage stable

### Alert
- Funding rates > 0.1% per day
- Margin debt rising
- Stablecoin yields > 10% annualized
- Leverage increasing

### Danger
- Funding rates > 0.2% per day
- Margin debt at extremes
- Stablecoin yields > 20% annualized
- Leverage at record highs

## Trader Perspective on Leverage

### Leverage As Edge
- Smaller capital base can achieve outsize returns
- But requires timing and size discipline
- One mistake blows account
- Risk of ruin applies

### Leverage As Risk
- Amplifies losses
- Forces you to cut winners early (margin calls)
- Hides leverage risk until it cascades
- Can lock you out of rallies post-cascade

## See Also
[[Liquidations]] for forced selling mechanics, [[Positioning]] for crowding analysis, [[Funding Rates]] for crypto-specific indicator.

## Collateral Composition Risk (from [[CT]])
CT archive flags a Hyperliquid-specific concern: HYPE-margined positions are more fragile than USDC-margined ones because HYPE's FDV is not backed 1:1. If positions over-collateralize in HYPE, a cascade can drive HYPE low enough that slippage/spread leave the protocol insolvent. See [[Hyperliquid]], [[Liquidations]].

## Rewkang: funding extremes in bulls (from [[CT]])
> "In bull markets funding can stay higher than shorts can remain solvent."

Fading high funding works in PvP regimes but breaks in PvE regimes where retail DCA overrides mean reversion.
