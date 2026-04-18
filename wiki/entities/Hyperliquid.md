---
title: Hyperliquid
type: entity
domain: markets
sources: [Tools.md, Articles.md]
related: [[Exchange Microstructure]], [[Trading Platforms]], [[Markets - Tools]]
created: 2026-04-12
updated: 2026-04-12
tags: [platform, exchange, derivatives, crypto, microstructure]
---

## Overview
Decentralized exchange and derivatives platform focused on perpetual futures trading.

## Key Resources
- **Hyperliquid Latency Map**: https://hyperlatency.glassnode.com/
  - Monitors network latency and microstructure for trading analysis
  
- **Hyperliquid EVM Explorer**: https://hyperevmscan.io/
  - Block explorer for on-chain activity and wallet tracking

## Notable Analysis
- **HIP-3 Silver Microstructure: Hyperliquid vs. CME**
  - Comparative analysis of silver futures microstructure between Hyperliquid and CME
  - Reference: https://x.com/shaundadevens/status/2019782009267085656

## Tracked Wallets
- [[Robinhood HYPE]] - Robinhood's crypto operations wallet on Hyperliquid

## Commentary (from [[CT]])

### Bandwidth / latency improvements
CT archive notes that Hyperliquid "increased bandwidth and reduced latency so much that solana folks started talking about decentralization" (refs @kunalgoel, @TheSlurper_ on cross-exchange dislocation). See [[CT]], [[Exchange Microstructure]].

### HYPE-margined collateral risk
Preserved in [[CT]]: concern that over-collateralizing positions in HYPE (vs. USDC at 1:1) creates cascade risk where slippage and spread could leave positions under-collateralized and the protocol insolvent.
