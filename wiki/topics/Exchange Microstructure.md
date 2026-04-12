---
title: Exchange Microstructure
type: topic
domain: markets
sources: [Tools.md, Articles.md]
related: [[Hyperliquid]], [[Trading Platforms]], [[Market Structure]], [[CME]], [[Crypto Trading]]
created: 2026-04-12
updated: 2026-04-12
tags: [microstructure, order-flow, latency, execution]
---

## Overview
Microstructure is how order flow translates to price. It encompasses latency, order dynamics, maker/taker dynamics, and liquidity provision.

## Key Microstructure Factors

### Latency
- **Maker advantage**: Fast participants can front-run slow ones
- **Latency arbitrage**: Opportunities in flow timing
- **Geographic factors**: Distance from matching engine, network routing
- **Monitoring**: [[Hyperliquid Latency Map]] tracks real-time network conditions

### Liquidity Provision
- **Bid-ask spreads**: Tighter in liquid markets, wider in stressed
- **Market depth**: How much can you buy/sell at each price level
- **Maker rebates**: Incentive structure for passive liquidity
- **Slippage**: Actual execution vs. mid-price

### Order Dynamics
- **Market orders**: Aggressive, pay the spread, immediate execution
- **Limit orders**: Patient, earn rebate, risk of non-fill
- **Partial fill risk**: Order books can evaporate in stress
- **Dark pools vs. lit**: Off-exchange vs. transparent execution

## Comparative Analysis: Hyperliquid vs. CME

See **HIP-3 Silver Microstructure** in [[Markets - Articles]]:
- Compares how silver futures trade on [[Hyperliquid]] (decentralized) vs. CME (centralized)
- Highlights differences in order flow, spreads, and price discovery
- Important for understanding multi-venue trading dynamics

## Microstructure Monitoring
- **Qwantify**: Real-time market flow analysis
- **CoinGlass**: Liquidation flow and positioning
- **Exchange explorers**: On-chain order flow (Hyperliquid, etc.)

## Trading Implications
Microstructure advantages exist but are temporary:
- **Fast traders**: Can extract value from slow traders, but costs (technology, latency) limit pool
- **Maker/taker**: Rebate structures incentivize different order types
- **Stress periods**: Liquidity evaporates; spreads blow out
- **Multi-venue**: Arbitrage opportunities between venues

Macro traders typically care less about microstructure than quants, but understanding when liquidity evaporates is critical for position sizing.
