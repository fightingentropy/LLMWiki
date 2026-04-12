---
title: Positioning
type: topic
domain: markets
sources: [Brief.md, Trading.md]
related: [[Risk Analysis]], [[Liquidations]], [[Sentiment]], [[Market Drivers]]
created: 2026-04-12
updated: 2026-04-12
tags: [positioning, leverage, crowding, extremes, squeeze]
---

## Overview
Positioning is where the money is. Understanding positioning reveals crowded trades, squeeze risk, and who will be forced to capitulate.

## Positioning Assessment

### Crowded Trades
When consensus positioning is extreme:
- **Everyone long**: No buyers left, vulnerable to sellers
- **Everyone short**: No sellers left, vulnerable to buyers
- **Concentration**: If a few large players are on same side, position unwinding is violent

### Leverage and Funding
- **Funding rates**: In perpetual futures, extreme funding indicates leverage build-up
- **Borrow rates**: Stablecoin yields indicate debt seeking returns = leverage pressure
- **Margin ratios**: Traders using increasingly thin margins = fragile positioning
- **Liquidation maps**: Show where forced selling would occur

### Flow Indicators
- **Stablecoin dominance**: Shifting to/from risk
- **Stablecoin flows**: Inflows = buyers coming in, outflows = buyers exhausting
- **Options positioning**: Gamma and vega exposure to moves
- **Dealer gamma**: If dealers are short gamma, they hedge by selling rallies

## Positioning Extremes & Implications

### Long Extremes
- **Sign**: Everyone long, leverage high, stablecoin dominance low
- **Risk**: Vulnerable to any bad news or profit-taking
- **Setup**: Short rally or decline triggers cascade liquidation of longs

### Short Extremes
- **Sign**: Everyone short, shorts borrowing expensive, puts expensive
- **Risk**: Any good news triggers short squeeze
- **Setup**: Rally forces short covering in cascade

### No Clear Positioning
- **Sign**: Long/short balanced, low leverage, unclear consensus
- **Risk**: Binary event can go either way; high vol expected
- **Setup**: Wait for confirmation; no asymmetry

## Monitoring
- **CoinGlass**: Liquidation map shows positioning distribution
- **Funding rates**: Perpetual futures leverage indicator
- **COT reports**: Commitment of Traders for commodity positioning
- **Options data**: Put/call ratios, max pain levels
- **Flow metrics**: Stablecoin/ETF flows

## Risk Management Implication
Extreme positioning is risk amplifier:
- **Consensus positioning**: Your edge is betting against consensus
- **Leverage extremes**: Liquidations will be violent when they happen
- **Cascade risk**: One liquidation can trigger the next

## Related
- [[Liquidations]] - Mechanism by which positioning unwinding happens
- [[Risk Analysis]] - Squeeze risk from extremes
- [[Sentiment]] - Sentiment often correlates with positioning extremes
