---
title: Exchange Microstructure
type: topic
domain: markets
summary: "How orders become price, how the main venues differ, the silver test case on Hyperliquid and CME, and when each exchange is open."
tags: [markets, trading, crypto]
related: [Hyperliquid, Leverage and Liquidations, Crypto Trading, Commodities, Markets - Trading]
aliases: ["HIP-3 Silver Microstructure", "CME", "Exchange Hours", "Trading Platforms", "Citadel Securities"]
sources:
  - snapshots/1790804551519-1de9816cb631/bookmarks/Markets & Crypto.md
  - markets/Tools.md
  - markets/Articles.md
  - markets/Trading.md
  - markets/Handbook.md
  - misc/CT.md
  - misc/X-Bookmarks.md
  - misc/Bizz & Finance.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
---

# Exchange Microstructure

Microstructure is how orders turn into price: latency, the order book, maker and taker incentives, and who supplies liquidity. This page also covers the venues themselves, from CME to Hyperliquid, and when each market is open. Flow and liquidation dashboards are in [[Markets - Trading]]; saved posts on venues are in [[Bookmarks - Markets & Crypto]].

## Core mechanics

- **Latency.** Fast traders front-run slow ones. Distance to the matching engine and network routing set the delay.
- **Liquidity.** Spreads tighten in liquid markets and widen under stress. Depth is what can trade at each price; slippage is the gap between fill and mid; maker rebates pay for passive orders.
- **Order types.** Market orders pay the spread and fill now. Limit orders earn the rebate and risk not filling. Under stress the book can vanish and leave partial fills.
- **Edges fade.** Speed and rebate edges get competed away; knowing when liquidity vanishes still matters.
- **Build for measured bottlenecks.** For a trading system, keep the order book and feed path simple and switch to Rust or C++ only when measurement demands it.

## How order flow moves price

Trader takes from [[Crypto Takes]]:

- HsakaTrades: "The orderflow frontruns the newsflow", signed as a joke "Marcus Aurelius". Price moves first; the story follows.
- ImperatorXBT: a range builds open interest, and the breakout comes when price hits that open interest's stops and forces selling. The longer the range, the bigger the expansion.
- HsakaTrades on sell walls: "The sell walls are not there to suppress price. The sell walls are there to give us a chance to show how badly we want higher prices."
- On volume: "Wouldn't you rather see price floating up on no volume? Nobody willing to sell, buyers less quick to run out of cash" (from [[Crypto Takes]])
- A sharp move off a thin-liquidity bottom can be positioning, not repricing. Volume and market profile tell them apart.

Stoiiic's posts on auction market theory and volume profile explain the auction itself. CryptoCred's parody of where the jargon ends up:

> Now: perp hedges getting unwound into spot sells but Bitfinex CVD is diverging and stablecoin smart money ratio is up while FTX TWAP absorbing

## Venues

- **CME.** The Chicago Mercantile Exchange is the largest centralised derivatives exchange: commodity, equity-index, FX and rate futures (Treasuries and SOFR). It has deep central order books, CFTC oversight and near 24/5 hours. The benchmark Dollar Index future trades on ICE, not CME.
- **Hyperliquid.** An on-chain perp exchange where HIP-3 lets builders deploy their own perp markets. It "increased bandwidth and reduced latency so much that solana folks started talking about decentralization" (from [[Crypto Takes]]). See [[Hyperliquid]].
- **Perps.** One post calls perps "the best pmf in all of crypto" and notes that Robert Shiller proposed perpetual futures in 1992 for rarely priced assets such as houses.
- **Choosing a venue.** Weigh liquidity for your size, slippage, fees and rebates, available leverage, platform stability and jurisdiction.
- **Cross-venue gaps.** Check the same asset across exchanges for dislocations. ASXN's dashboard compares Hyperliquid depth and spreads with major venues. One post imagines regulated KYC venues and permissionless HIP-3 markets side by side, joined by arbitrage.

## Silver on Hyperliquid and CME

@shaundadevens compared silver trading on Hyperliquid's HIP-3 market and on CME: the same metal on an old futures exchange and an on-chain perp. @0xCryptoSam counted about $3B in a day against CME's ~$130B notional: "Hyperliquid just captured ~2% of the world's primary silver market for an asset it listed 30 days ago." That day, 30 January 2026, was violent. @TheShortBear: "You are witnessing the second biggest down day in Silver in 60y." @DonAlt: "Just straight up rug pull crypto style". By March, @MomentumKevin saw traders turning to Hyperliquid for "the volatility and volume density in HIP-3 commodities".

A comparison like this turns on spreads, which venue leads price, how market makers are paid, latency, and how each venue holds up under stress. Silver's own drivers are on [[Commodities]].

## Exchange hours

| Exchange | Local time | UK time (winter) |
| --- | --- | --- |
| NYSE, NASDAQ | 9:30 AM – 4:00 PM ET | 2:30 PM – 9:00 PM |
| Euronext | 9:00 AM – 5:30 PM CET | 8:00 AM – 4:30 PM |
| Shanghai | 9:30 AM – 3:00 PM | 1:30 AM – 7:00 AM |
| Tokyo | 9:00 AM – 3:30 PM | midnight – 6:30 AM |

- China and Japan have no daylight saving, so in British Summer Time both trade an hour later in UK time.
- The US and UK change clocks on different dates. For a few weeks each spring and autumn, New York opens at 1:30 PM UK.
- Europe and the US overlap from 2:30 to 4:30 PM UK. Each session's close sets up the next session's open, which is where opening gaps come from.

## The trading calendar

US volume follows the year: "For the U.S. markets the year really begins in September." Activity stays strong to Christmas, with a lull after Thanksgiving. It picks up after 1 January and holds until "Sell in May and Go Away", then bottoms the week after 4 July. The last week of August is thin into the September FOMC, a day "sure to see wild market gyrations". Thin volume matters because "low volume can often lead to unexpected market movements that don't follow typical patterns." (from [[Business & Finance]])

## Citadel Securities

The market maker is in the wiki for one piece, "2026 Global Intelligence Crisis", its rebuttal to Citrini's June 2028 crash scenario. Both are in [[Markets - Articles]], and [[Trading Evidence and Review Framework]] uses the pair.

## Resources

- [HyperEVM Scan](https://hyperevmscan.io/) — Block explorer for Hyperliquid's EVM chain, for tracking on-chain activity and wallets.
- [Hyperliquid latency map](https://hyperlatency.glassnode.com/) — Glassnode's live map of Hyperliquid network latency.
- [Silver volume on Hyperliquid](https://x.com/0xCryptoSam/status/2017319218874913060) — About $3B of Hyperliquid silver volume against CME's ~$130B notional, roughly 2% share after 30 days. _(@0xCryptoSam)_
- [Second biggest down day in silver in 60 years](https://x.com/TheShortBear/status/2017276569585172600) — Ranks the 30 January 2026 silver drop; the third biggest came the week before. _(@TheShortBear)_
- [Silver "rug pull crypto style"](https://x.com/DonAlt/status/2017301437953544569) — One-line reaction to the same drop. _(@DonAlt)_
- [Research rigor in crypto](https://x.com/TraderNoah/status/2019783560782127590) — Quote-post praising the shaundadevens silver comparison as the research rigor crypto needs. _(@TraderNoah)_
- [New wallets and HIP-3 commodities](https://x.com/MomentumKevin/status/2032041635413119125) — HYPE bid by new wallets as traders move to Hyperliquid for HIP-3 commodity volatility and volume. _(@MomentumKevin)_
