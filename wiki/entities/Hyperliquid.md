---
title: Hyperliquid
type: entity
domain: markets
summary: "The on-chain perpetuals exchange behind HYPE: its HIP-3 markets, collateral and margin risks, leaderboard limits, and the bull and bear cases."
tags: [crypto, trading]
related: [Exchange Microstructure, Leverage and Liquidations, Crypto Trading, Trading Evidence and Review Framework, Bookmarks - Markets & Crypto]
aliases: ["Robinhood HYPE", "TradeXYZ"]
sources:
  - markets/Tools.md
  - markets/Articles.md
  - markets/Trading.md
  - misc/CT.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
---

# Hyperliquid

Hyperliquid is a decentralized exchange for perpetual futures, with its own chain (HyperEVM) and the HYPE token. It is in the wiki as a trading venue, as the chain HIP-3 builder markets deploy on, and as the subject of recurring margin-risk debate. Its dashboards, explorers and research posts are in [[Bookmarks - Markets & Crypto]] and [[Markets - Trading]].

## Key ideas

- **Speed.** Hyperliquid "increased bandwidth and reduced latency so much that solana folks started talking about decentralization" (from [[Crypto Takes]]). How it compares with CME and other venues is on [[Exchange Microstructure]].
- **HIP-3 and TradeXYZ.** Builders can deploy their own perp markets. TradeXYZ runs an RWA and equities DEX this way; its FAQ says Hyperliquid supplies the chain and independent, unaffiliated contributors deployed the DEX. Jordi Alexander asks whether TradeXYZ's fees reach HYPE holders through buybacks, burns or distributions, and the FAQ does not say. TradeXYZ's Discovery Bounds V2 sets the off-hours price bands for its 24/7 perps (see [[Crypto Trading]]).
- **HYPE as collateral.** USDC holds its value in a liquidation and HYPE does not, so too many HYPE-margined positions could turn a cascade into protocol insolvency. Portfolio margin and borrowing against HYPE or BTC add to that risk, and even delta-neutral accounts can be liquidated. See [[Leverage and Liquidations]].
- **Leaderboards.** A study of 935,000 wallets found that top-decile traders barely persist month to month, and the largest displayed accounts mix protocol contracts, market makers, deployers and long-term holders. See [[Trading Evidence and Review Framework]].
- **Bull and bear cases.** Syncracy's March 2025 thesis casts Hyperliquid as a vertically integrated exchange whose interface, order flow and developers reinforce each other; Syncracy disclosed a large HYPE position. MONK's May 2025 bear case says it has already won most on-chain retail flow, so growth needs HFT and institutional flow. Jintao's satire uses the JELLY intervention to separate real product traction from decentralization claims. A Lighter comparison favours Hyperliquid's continuous sequencing and Ethereum escape hatch.
- **Robinhood HYPE wallet.** One HyperEVM wallet, labelled as Robinhood's operations wallet (`0x841ed663f2636863d40be4ee76243377dff13a34`), is watched as a proxy for institutional and retail flow.
