---
title: Hyperliquid
type: entity
domain: markets
sources:
  - markets/Tools.md
  - markets/Articles.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
related:
  - Robinhood HYPE
  - Crypto Takes
  - Exchange Microstructure
  - TradeXYZ
  - Digital Security
  - Market Performance Measurement
  - Bookmarks - Markets & Crypto
created: 2026-04-12T00:00:00.000Z
updated: '2026-09-22'
tags:
  - platform
  - exchange
  - derivatives
  - crypto
  - microstructure
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

## August 2026 diligence

- [[TradeXYZ]] uses Hyperliquid's blockchain through a HIP-3 DEX deployed by described independent contributors. Fee routing and HYPE-holder value accrual remain unanswered.
- ASXN compares depth, spreads, and estimated slippage across Hyperliquid and other venues. Treat results as time-, size-, instrument-, and methodology-specific.
- Public market-data MCP tooling can expose live quotes and options data alongside order placement and cancellation; connected access is not automatically read-only. See [[Digital Security]].

## September 2026 performance and borrowing notes

- [[Market Performance Measurement]] captures the leaderboard question: large displayed accounts may have different roles, exposures, cost bases, and hedges.
- The HYPE funding-trade entry now preserves the author's mathematical correction alongside the setup. The official [portfolio-margin documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin), checked 2026-09-22, explains account-level maintenance, borrowing, and carry-trade risks; a spot/perpetual hedge does not remove every liquidation path.
- The manual-borrows post is retained as a dated official announcement. It does not establish current account eligibility or a fixed future borrowing rate.
- Chrome additions include fee views, leaderboards, trade exporters, ecosystem directories, and financial dashboards. They are research references, not validated account records.

Full trail and both corrected-trade links: [[Bookmarks - Markets & Crypto]].
