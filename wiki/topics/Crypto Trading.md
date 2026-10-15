---
title: Crypto Trading
type: topic
domain: markets
sources:
  - markets/Trading.md
  - markets/Articles.md
  - markets/Tools.md
  - misc/CT.md
  - misc/X-Bookmarks.md
  - bookmarks/Markets & Crypto.md
related:
  - Market Drivers
  - Trading Philosophy
  - Exchange Microstructure
  - Traders Directory
  - Hyperliquid
  - Crypto Takes
  - X-Bookmarks
  - HIP-3 Silver Microstructure
  - Market Cycles
  - Funding Rates
  - Liquidations
  - Leverage
  - Trading Psychology
  - TradeXYZ
  - CryptoCred
  - Gloomberb
  - Robinhood HYPE
  - Markets - Trading
  - Markets - Articles
  - Bookmarks - Markets & Crypto
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - crypto
  - trading
  - positioning
  - momentum
  - bag-holding
  - cycles
  - tools
  - market-structure
summary: "Crypto as a momentum market: what drives it, the tools and traders Erlin watches, cycle theories from crypto Twitter, and rules on exits and risk."
---

# Crypto Trading

Crypto trading in this wiki means trading a momentum-driven market where market structure, leverage, on-chain flows and sentiment move price. This page holds the drivers Erlin's notes tell him to watch, the traders and tools he follows, the competing cycle theories from crypto Twitter, and the rules on exits, bag-holding and cascades. The raw quotes come from [[Crypto Takes]] (the CT note); the drivers and tool lists come from [[Markets - Trading]].

## Core principle

**Crypto is momentum-driven. Market structure and moving averages play central roles.**

The note opens with a line on what moves markets: "Truth doesn't necessarily move [markets](https://youtu.be/rZ9rUh9WhwU?t=1876). Perception & Uncertainty/Certainty transition does." The link is a saved video moment attached to the word "markets".

Every system also pays a characteristic cost, per a [@CryptoCred post](https://x.com/CryptoCred/status/2079138151528890777) saved in the note:

- Trend-following pays through false starts.
- Momentum often enters late and can buy tops or sell bottoms.
- Mean reversion periodically gets overwhelmed by a genuinely outsized move.
- A recurring failure mode is abandoning a valid system because its unavoidable cost is mistaken for evidence that the system is broken.

[[CryptoCred]] is the author of that post. See also [[Trading Philosophy]].

## What drives the market

The note's "things to look for" list. See [[Market Drivers]] for how these combine.

### Flow and sentiment

- **CT Sentiment**: Crypto Twitter sentiment and narrative shifts.
- **Stablecoin Dominance**: USDT/USDC flows and shifts indicate entry/exit volume.
- **Stablecoin Yields**: Borrow/lend rates on stables (proxy for leverage/funding pressure).

### Technical and mechanical

- **Funding Rates**: Perpetual futures funding indicates leverage extremes. See [[Funding Rates]].
- **Liquidations**: Real-time cascades drive momentum and volatility. See [[Liquidations]].
- **Options Positioning**: Gamma exposure and implied volatility extremes.
- **Moving Averages**: Momentum confirmation and trend structure.

Funding is not a clean signal. A research post in [[Bookmarks - Markets & Crypto]] found raw funding weak for daily price prediction. Per that research, open-interest conditioning, high-funding-plus-falling-price tests, composites and cross-venue weighting did not add robust alpha, and the stronger carry results were fragile and concentrated in 2020-2021. The methodology was not independently reproduced. Source: [Funding-rate signals are weaker than the intuitive story](https://x.com/OctopusTakopi/status/2085776377366864050) _(@OctopusTakopi)_.

### Macro context

- **Macro Regime**: Broader economic backdrop (risk-on/risk-off).
- **Catalysts**: Events with binary outcomes.
- **Top Trader Positioning**: Notable traders' moves indicate regime changes.

A line in the CT note, linked to a post on [[fejau_inc]]'s account, puts the macro-liquidity version of this plainly: "It's [crazy](https://x.com/fejau_inc/status/1916270321533128797) how you can just overlay M2 on any chart and if it goes up you long and can outperform the smartest pod shop hedge funds filled with phd traders and the market will not frontrun that ever and let you in".

On top-trader positioning there is a counterpoint. An author-reported study of 935,000 Hyperliquid wallets found very weak month-to-month persistence among top-decile traders, which argues against naive copy-trading; the methodology is still to verify. See [Hyperliquid top-trader persistence analysis](https://x.com/chase_mew_/status/2079212386532139461) _(@chase_mew_)_.

## Notable traders

See [[Traders Directory]] for the comprehensive list. Key traders to monitor:

- @fejau_inc ([[fejau_inc]])
- @cobie ([[cobie]])
- @TheFlowHorse ([[TheFlowHorse]])
- @ThinkingUSD
- @lBattleRhino

The note's full "good traders" list: @fejau_inc, @lBattleRhino, @ezcontra, @CryptoDonAlt, @abetrade, @HsakaTrades ([[HsakaTrades]]), @TheFlowHorse, @ThinkingUSD, @cobie, @BoHines, @BobLoukas, @fomocapdao, @HighStakesCap ([[HighStakesCap]]), @TheCryptoNexus, @KillaXBT, @Bluntz_Capital, @BigTrout300.

## Tools and analytics

- [Qwantify market flow](https://www.qwantify.io/app/analytics/market-flow) — Market flow analysis.
- [CoinGlass liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — Liquidation maps and perpetual positioning.
- [Unbiased.fyi](https://unbias.fyi/) — On-chain metrics.
- [Loris Tools liquidations](https://loris.tools/liquidations) — Real-time liquidations.
- [Hyperliquid latency map](https://hyperlatency.glassnode.com/?utm_source=X&utm_medium=social&utm_campaign=hyperliquid) — Glassnode-hosted map for monitoring Hyperliquid microstructure.
- [Check on Chain ETF MVRV chart](https://charts.checkonchain.com/btconchain/etfs/etf_mvrv/etf_mvrv_light.html) — Bitcoin on-chain ETF MVRV chart.
- [Delphi Digital sector performance](https://members.delphidigital.io/data/apps/sector-performance?refDate=2025-12-28&endDate=2026-01-03) — Crypto sector performance data app in Delphi's members area; the saved link covers the week ending 3 January 2026.
- [a16z State of Crypto](https://stateofcrypto.a16zcrypto.com/) — Industry report and metrics from a16z crypto.
- [Hyperscreener](https://hyperscreener.asxn.xyz/home) — Screening tool hosted on ASXN's domain.
- [ASXN](https://www.asxn.xyz/) — Dashboard comparing order-book depth, spreads and estimated slippage for Hyperliquid against major centralized and decentralized venues. The post behind it ([announcement](https://x.com/asxn_r/status/2085742057315094666); [bookmark context](https://x.com/chameleon_jeff/status/2087559428342215100)) claims order-of-magnitude advantages for some contracts, including an S&P 500 perpetual. The results depend on instrument equivalence, timestamp, size, fees, funding, latency and venue risk.
- [Gloomberb](https://github.com/vincelwt/gloomberb) — Open-source, keyboard-driven finance terminal with desktop and terminal interfaces. Useful for watchlists, filings, macro data, alerts and market research; check its data sources before relying on it for trading decisions. See [[Gloomberb]].
- [Robinhood HYPE wallet](https://hyperevmscan.io/address/0x841ed663f2636863d40be4ee76243377dff13a34) — The Robinhood HYPE wallet on HyperEVMScan. See [[Robinhood HYPE]].

## Market structure and Hyperliquid

- [[Exchange Microstructure]] - How order flow translates to price.
- [[HIP-3 Silver Microstructure]] - Hyperliquid vs CME comparative analysis. The article behind it: [HIP-3 Silver Microstructure: Hyperliquid vs. CME](https://x.com/shaundadevens/status/2019782009267085656) _(@shaundadevens)_.
- **Hyperliquid's speed.** The CT note records that Hyperliquid [increased](https://x.com/kunalgoel/status/1862449297905574002) bandwidth and reduced latency so much that Solana people started talking about decentralization.
- **Discovery Bounds V2** (Hyperliquid / @0xmev): the evolution from static bounds to active bounds that converge toward persistent edge-of-range levels. It is a concrete microstructure innovation enabling 24/7 perps price discovery that outruns closed-weekend tradfi. The post claims weekend volume grew about 28% week-over-week to an all-time weekend high near $1 billion, and that [[TradeXYZ]]'s 24/7 perps are becoming the most accurate predictor of asset prices when traditional markets reopen. Those are the post's claims. [Post](https://x.com/0xmev/status/2032614603285283011); [quoted TradeXYZ post](https://x.com/tradexyz/status/2032563867591520476). See [[Exchange Microstructure]], [[Hyperliquid]].
- **HYPE as collateral.** An unattributed passage in the CT note flags over-collateralization risk: USDC has a 1:1 value and can be redeemed in full in a liquidation, but a HYPE-margined position is harder, because HYPE has an FDV not backed 1:1 by USDC. Too many positions collateralized in HYPE could let a cascade push HYPE low enough that slippage and spread leave positions under-collateralized and the protocol insolvent.
- **Portfolio-margin liquidations.** [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) is a detailed risk note on BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate _(@alex_hunter20)_.
- **[[TradeXYZ]] and HYPE accrual.** The DEX's relationship to Hyperliquid is documented narrowly. [Jordi Alexander asks](https://x.com/dnapway/status/2093506822414147637) whether fees from RWA growth accrue to HYPE holders, whether tokens are bought, burned or distributed, and what arrangements exist between the parties. TradeXYZ's [FAQ](https://docs.trade.xyz/support-and-faqs/faqs/trade-xyz-and-equities-xyz-markets) says Hyperliquid supplies the blockchain and that the XYZ HIP-3 DEX was deployed by independent, unaffiliated core contributors. It does not answer the fee-routing or token-accrual questions. Fee routing, buy/burn/distribution and token-holder accrual remain open diligence questions, not an allegation or a thesis.

## Cycle philosophy (from [[CT]])

### Supercycle vs inverse supercycle

- [[cobie]]: crypto as a decade-long supercycle bubble — "siren for the market top of the multi-decade Everything Bubble" (from [[CT]]).
- [[GCRClassic]]: inverse supercycle is crypto going to 0 as gen-z prefers memes to growth stocks and UBI/joblessness create "generation moonshot" (from [[CT]]). His list of reasons: gambling is one of the largest human use cases; crypto is the most addictive of financial vices, and addictions are parabolic (obesity, drug use); more UBI, pandemics and joblessness. His trade: "Want to do well trading over the next decade? Tap into the heart and soul of the increasingly desperate, degenerate, jobless, lonely, addicted-generation moonshot".
- The exchange started with @DeFifrog1: "Do the permabears recognize this is the same as saying supercycle as they say it's going to zero?"

Both takes rely on the same demographic observation — desperate, lonely, lottery-ticket-chasing youth — but reach opposite price conclusions. [[DegenSpartan]] explicitly contrasts "ingenuity/self-sovereignty" vs "degradation/greed" framings of the same asset class:

> you think crypto is a bet on human ingenuity, financial self sovereignty and the natural progression of civilization
>
> i think crypto is a bet on degradation of society, failure of trust and trad economies, forced speculation, desperation and human greed we are not the same

### Dilution kills bulls

[[Pentosh1]]: "The end simply comes when the dilution exceeds the amount of capital inflows" (from [[CT]]). The [full post](https://twitter.com/Pentosh1/status/1779586050597249472) says the largest gains come in the back half of the bull run as greed takes over, and that the only way to survive is fear: "Greed is the parabola you sell into little by little." In his words, "Dilution is the bull market killer. Supply is infinite in this market as we dream up a million new coins a day".

### Low-conviction money late

[[cobie]]: boomer LPs bid "new projects" at cycle tops because they perceive low entry prices as low risk — the foundation of the "outerspace metaverse hotel" fundraise (from [[CT]]). In the [linked post](https://twitter.com/cobie/status/1483451870152638476): "Low conviction money enters extremely late and offsets their lack of belief by bidding only "new projects" so they can be "early" as they perceive lower risk in buying at the lowest possible entry."

### PvP vs PvE

[[Rewkang]]: crypto cycles alternate between PvP (trader-dominant) and PvE (retail-paycheck-DCA) regimes. Mean-reversion heuristics that work in PvP break in PvE (from [[CT]]). His two examples:

- Fading high funding or up-only price action. "In bull markets funding can stay higher than shorts can remain solvent."
- The need to rotate. New money does not "schizo trade like crypto traders"; it picks favorite meme coins and keeps sending every paycheck in. Traders who short memecoins because they are "being rotated out of" eventually get blown out, like those who faded AXS, ADA and LUNA last cycle.

"To outperform like retail you need to think like retail." Rewkang also argues crypto will keep expanding because it beats casinos and other trading markets on [volatility, variety, complexity, social component and higher odds of developing an edge](https://twitter.com/Rewkang/status/1780351547181789353): "It is simply the most engaging multi player money game".

### Cascades as secondary effect

@fewseethis ([[fewseethis]]) in [[CT]]: "cascades occur as a RESULT of prices going down within a levered environment. in other words a cascade is a secondary effect." Outside a mechanical bounce, prices can resume wherever they were going: up or down. See [[Liquidations]], [[Leverage]].

Alex Krüger studied alt coin crashes greater than 25% in a day, using ADA as the dataset. His conclusion: crashes may come in the middle of a bull run, at the top, or at the bottom. "There's no signal." (from [[CT]]).

### Bottoms and tops

- @Husslin_ on why [spots like these are ideal for bottoms](https://twitter.com/Husslin_/status/1781147687103893882): algos mindlessly closing longs and reducing leverage, liquidations resetting positioning, funds forced to open shorts to manage risk, market makers pulling bids and asks so books are thin, and people afraid to catch knives. His [follow-up](https://twitter.com/Husslin_/status/1781349288401846364): the second leg up is always the slowest grind.
- @0xSisyphus: "Normies showing up isn't a top signal. When they start quitting their IRL jobs for crypto or starting funds that's when we need to worry."
- [[CryptoCred]]: first-cycle participants make money because they are open-minded and think "What if I'm right?" instead of "What if I'm wrong?" They lose most of their gains for the same reasons. "Navigating cycles requires switching between childlike idealism and sagely cynicism."
- [[cobie]], recalling a tweet whose author he had forgotten: "you act too quickly when you are trying to grow capital, and you act too slowly when you are trying to protect capital" — "it rly changed my life tbh" (from [[CT]]).

See [[Market Cycles]] for the wider frame.

## Exits, bag-holding and risk

- **Bag-holding test.** [[CryptoCred]] on awkward bag-holding after a bad week ([profile](https://x.com/CryptoCred)): you don't want to sell because it is already down a lot, or you are tempted to wait for a bounce to reassess. The test: "If I didn't have a position, would I want the exposure I have now?" Yes: fine. No: do something about it. "Active positions cost mental capital, which is a scarce resource. You're less likely to spot and execute the next good trade if the current shit trade is eating away at you."
- **Take life-changing money out.** [[Pentosh1]], after trading nearly every day for 2,500+ days, in a [post](https://x.com/Pentosh1/status/1740042952108388405): if you make life-changing money, take it out of the market. Over time your money ends up in the pockets of experienced traders with better systems and information. "If you leave all your money on the table, it likely is only temporarily yours." This is not a bear post; it is about what to do at life-changing money: "Secure it, then start over with just a bit less." A [second post](https://twitter.com/Pentosh1/status/1779171728100339944) makes the same point: "Making money is easy. Keeping money isn't."
- **Poker discipline.** [[0xaporia]] says [poker](https://x.com/0xaporia/status/1894332130093629551) players accept variance, fold strategically and avoid forcing action when odds are unfavorable. Novice traders conflate constant activity with progress.
- **Profit-taking is forward-looking, not P&L-anchored.** [[0xaporia]]: for any strategy that doesn't win the majority of the time, outsized winners fund inevitable losses. Aggressively cutting green trades systematically underfunds the outliers you need to survive (from [[X-Bookmarks]]). [Source post](https://x.com/0xaporia/status/2031360073700724823). @Cheshire_Cap's concrete math: 20% winners at 5x, 80% losers at -50% is EV +40%; taking profit at 2x flips to EV -20% ([post](https://x.com/Cheshire_Cap/status/2031362490219503757)). Applies to [[Trading_Psychology|Trading Psychology]] and [[Trading Philosophy]].
- **Selling the top is more dangerous than selling into drops.** [[Zhu Su]] via [[X-Bookmarks]]: the euphoria of top-selling leads to early rebidding and overconfidence. He suspects Garrett, who made nine figures on 10/10, fell to a version of this hubris. [Post](https://x.com/zhusu/status/2018225130003148870).
- **Execution discipline.** Profitable implementation matters more than public top/bottom calls: a correct turning-point call can still lose money through sizing, path, leverage or exit errors ([post](https://x.com/blknoiz06/status/2091151900729115029); [original](https://x.com/0xaporia/status/2091034462561706287)). See [[Trading_Psychology|Trading Psychology]].

## Prediction markets and alpha

- **ML engineers quietly extracting alpha from prediction markets and sports gambling.** [@evisdrenova reports](https://x.com/evisdrenova/status/2020607591676809434) personally knowing an ML engineer with $15M over 5 years from sports gambling. [@RohOnChain documents](https://x.com/RohOnChain/status/2018041418573623617) the Frank-Wolfe + Bregman projection algorithms used by Polymarket arb bots (for example gabagool22). These are reports, not audited results.

## Broader scenarios

- **Broad on-chain-finance scenario.** [[goodalexander]] [links AI disappointment, fiscal stress, stablecoins, tokenized debt, FX, and leveraged on-chain markets](https://x.com/goodalexander/status/2089906200817066108). Test each premise separately against actual adoption and fee growth.
- **Contrarian checklist.** goodalexander's [framework for spotting contrarian value](https://x.com/goodalexander/status/2032143213344276528) has crypto-specific points: protocol earnings or gas, cost of attack (hash power, amount staked), and deeply negative perp funding as a sign that people hate an asset.

## Reading list

Crypto articles saved by title in [[Markets - Articles]].

- [Rethinking Crypto Cycles](https://x.com/xydotdot/status/2000596135438631332) — Post by @xydotdot on crypto cycles.
- [The Most Uncomfortable Phase of Crypto Has Begun](https://obviously.substack.com/p/the-most-uncomfortable-phase-of-crypto) — Substack essay on the obviously.substack.com publication.
- [Why Your Coin Isn't Pumping](https://obviously.substack.com/p/why-your-coin-isnt-pumping) — Second essay from the same publication.
- [Zcash - A hedge against BTC?](https://x.com/0xYoussef_/status/2004624231213183393) — Post by @0xYoussef_ on Zcash as a hedge against Bitcoin.
- [Why Exchanges With Fees Win in the Long Run](https://x.com/lttlanna/status/2002085240940945903) — Post by @lttlanna on exchange economics.
- [Profitable Trading: reverse engineered.](https://x.com/spicyofc/status/1968193699575370032) — Post by @spicyofc.
- [Price Action + Market Structure Masterclass](https://x.com/spicyofc/status/1985672953649119349) — Post by @spicyofc on price action and market structure.
- ["I am an (insert silly style) trader"](https://x.com/TheFlowHorse/status/1995594613881799018) — Post by [[TheFlowHorse]].
- [Price discovery and Trading](https://x.com/KevinLMak/status/1837711487017562146) — Post by @KevinLMak.

## Related

[[Market Drivers]] · [[Trading Philosophy]] · [[Trading_Psychology|Trading Psychology]] · [[Exchange Microstructure]] · [[HIP-3 Silver Microstructure]] · [[Market Cycles]] · [[Traders Directory]] · [[Hyperliquid]] · [[TradeXYZ]] · [[Funding Rates]] · [[Liquidations]] · [[Leverage]] · [[Crypto Takes]] · [[X-Bookmarks]] · [[Markets - Trading]] · [[Markets - Articles]] · [[Bookmarks - Markets & Crypto]]
