---
title: Liquidations
type: topic
domain: markets
sources: [Trading.md, Tools.md]
related: [[Crypto Trading]], [[Market Structure]], [[Risk Analysis]], [[Leverage]]
created: 2026-04-12
updated: 2026-04-12
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
