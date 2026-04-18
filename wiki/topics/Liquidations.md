---
title: Liquidations
type: topic
domain: markets
sources: [Trading.md, Tools.md, CT.md]
related: [[Crypto Trading]], [[Market Structure]], [[Risk Analysis]], [[Leverage]], [[CT]]
created: 2026-04-12
updated: 2026-04-18
tags: [liquidations, leverage, risk, cascade, mechanical-flow]
---

## Overview
Liquidations are the forced closing of leveraged positions when collateral falls below minimum thresholds. In crypto and derivatives markets, liquidations can cascade and drive sharp volatility.

## Liquidation Mechanics

### How Liquidations Trigger
1. **Trader takes leverage**: Using borrowed capital to amplify position
2. **Market moves against trade**: Position underwater
3. **Margin ratio deteriorates**: Collateral value falls
4. **Exchange liquidates**: Forced sale to cover losses before exchange eats it
5. **Cascade risk**: Liquidations can trigger more liquidations

### Key Drivers
- **Leverage ratio**: How much borrowed capital relative to own capital
- **Position size**: Larger positions hit harder when liquidations occur
- **Market depth**: Shallow order books amplify liquidation slippage
- **Leverage clustering**: Many traders with similar leverage/positions = cascade risk

## Monitoring Tools
- **Loris Tools**: https://loris.tools/liquidations
  - Real-time liquidation tracking across markets
- **CoinGlass**: https://www.coinglass.com/pro/futures/LiquidationMap
  - Liquidation map showing where stops are, which direction has danger
- **Funding rates**: Proxy for leverage levels in perpetual markets

## Trading Implications

### Recognizing Cascade Risk
- **Long liquidations**: When shorts get liquidated, upside squeeze accelerates
- **Short liquidations**: When longs get liquidated, downside accelerates
- **Position clusters**: If liquidation map shows concentrated stops, that's cascade risk

### Positioning for Liquidations
- **Volatile regimes**: When realized vol picks up, liquidations become likely
- **Funding extremes**: Elevated funding rates indicate leverage build-up
- **Stablecoin yields**: High rates indicate leverage seeking yield
- **Before key events**: Binary events like earnings increase liquidation risk

## Risks
- **Liquidity crunch**: When leveraged players blow up, they need to sell = liquidity evaporates
- **Cascade failures**: One liquidation triggers the next
- **Exchange risk**: If liquidations exceed market value, exchange eats loss
- **Systemic risk**: If large traders blow up, counterparties face losses

## Historical Examples
Liquidations are mechanical drivers that can create sharp dislocations divorced from fundamental value. Understanding where leverage is concentrated is key to risk management.

## Framings (from [[CT]])

### GCR: forced wealth transfer
[[GCRClassic]]:
> "Liquidations are a forced transfer of wealth from impoverished traders who need leverage — to wealthy spot buyers." (from [[CT]])

### Cascade is a secondary effect
@fewseethis:
> "cascades occur as a RESULT of prices going down within a levered environment. in other words a cascade is a secondary effect. then — outside of a mechanical bounce — prices can resume wherever they were going in the first place: up or down." (from [[CT]])

Implication: reversal after a cascade is *not* guaranteed — the cascade only unsticks the jam; the underlying trend can resume.

### Husslin_ on bottoms
Conditions flagged as ideal for bottoms (from [[CT]]):
- Algos mindlessly closing longs and reducing leverage
- Liqs reset positioning
- Funds forced to open shorts for risk management
- Market makers pulling bids/asks → thin books
- People afraid to catch knives

### HYPE-margined cascade risk
CT archive flags a specific Hyperliquid insolvency risk if too many positions are collateralized in HYPE rather than USDC — slippage/spread during a cascade could leave positions under-collateralized. See [[CT]], [[Hyperliquid]].
