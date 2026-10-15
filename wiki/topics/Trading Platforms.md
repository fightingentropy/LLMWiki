---
title: Trading Platforms
type: topic
domain: markets
sources:
  - markets/Tools.md
  - markets/Trading.md
related:
  - Hyperliquid
  - CME
  - Exchange Microstructure
  - Crypto Trading
  - HIP-3 Silver Microstructure
  - TradeXYZ
  - Robinhood HYPE
  - Gloomberb
  - Liquidations
  - Positioning
  - Leverage
  - Flow Analysis
  - Markets - Tools
  - Markets - Trading
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - platforms
  - execution
  - trading-venues
  - derivatives
  - analytics
summary: "The venues and dashboards in Erlin's markets notes, from Hyperliquid and CME to liquidation maps, plus what to weigh when picking a venue."
---

# Trading Platforms

The places where trades get executed and the tools used to watch the market around them. Erlin's notes cover one decentralised venue ([[Hyperliquid]]), one traditional exchange ([[CME]]), a handful of liquidation and flow dashboards, and an open-source finance terminal. For how venues work internally, see [[Exchange Microstructure]].

## Execution venues

### Crypto derivatives

- **[[Hyperliquid]]**: decentralised perpetual futures exchange.
  - Glassnode publishes a latency map for it, and HyperEVM has its own on-chain explorer (links below).
  - The trading note saves one HyperEVM wallet, the [[Robinhood HYPE]] wallet.
  - [[TradeXYZ]] is an RWA and equities-oriented HIP-3 DEX built on Hyperliquid's blockchain.

### Traditional derivatives

- **[[CME]]**: centralised exchange for commodity and equity index futures.
  - Largest derivatives exchange globally.
  - Primary price discovery for commodities, equities and rates.

[[HIP-3 Silver Microstructure]] compares how silver trades on Hyperliquid against CME.

## Analytics and monitoring

The trading note's list of things to look for includes liquidations, mechanical movements, top traders' positioning and funding rates (from [[Markets - Trading]]). These dashboards cover the liquidation and flow side of that list. See [[Liquidations]], [[Positioning]] and [[Flow Analysis]].

- **Qwantify**: market flow analysis.
- **CoinGlass**: liquidations and positioning.
- **Loris Tools**: real-time liquidations.
- **ASXN Hyperscreener**: ASXN's Hyperscreener dashboard, saved without a note.
- **[[Gloomberb]]**: open-source, keyboard-driven finance terminal for watchlists, filings, macro data, alerts and research (from [[Markets - Tools]]).

## Choosing a platform

- **Liquidity**: can you get your size done?
- **Execution**: what's the slippage?
- **Fees**: taker/maker dynamics, rebates.
- **Leverage**: how much can you use? See [[Leverage]].
- **Stability**: risk of platform failures.
- **Regulatory**: jurisdiction and oversight.

## Resources

- [Hyperliquid latency map](https://hyperlatency.glassnode.com/) — Glassnode's latency map for Hyperliquid, for monitoring venue latency. Same page with X campaign tags: [link as shared on X](https://hyperlatency.glassnode.com/?utm_source=X&utm_medium=social&utm_campaign=hyperliquid).
- [HyperEVM Scan](https://hyperevmscan.io/) — on-chain block explorer for HyperEVM.
- [Robinhood HYPE wallet](https://hyperevmscan.io/address/0x841ed663f2636863d40be4ee76243377dff13a34) — the wallet the trading note labels "Robinhood HYPE wallet", opened in HyperEVM Scan.
- [Qwantify market flow](https://www.qwantify.io/app/analytics/market-flow) — Qwantify's market-flow analytics view.
- [CoinGlass liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — CoinGlass Pro futures liquidation map, for seeing where leveraged positions would be liquidated.
- [Loris Tools liquidations](https://loris.tools/liquidations) — real-time liquidations feed.
- [ASXN Hyperscreener](https://hyperscreener.asxn.xyz/home) — ASXN's Hyperscreener dashboard. Saved without a note.
- [Gloomberb](https://github.com/vincelwt/gloomberb) — GitHub repo for the open-source, keyboard-driven finance terminal with desktop and terminal interfaces; check its data sources before relying on it for trading decisions.

## Related

[[Hyperliquid]] · [[CME]] · [[Exchange Microstructure]] · [[Crypto Trading]] for crypto-specific platforms · [[HIP-3 Silver Microstructure]] · [[TradeXYZ]] · [[Robinhood HYPE]] · [[Gloomberb]] · [[Liquidations]] · [[Positioning]] · [[Leverage]] · [[Flow Analysis]] · [[Markets - Tools]] · [[Markets - Trading]]
