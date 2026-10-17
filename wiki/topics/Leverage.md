---
title: Leverage and Liquidations
type: topic
domain: markets
summary: "How leverage builds and unwinds: funding and margin gauges, how a liquidation cascade runs, collateral design, and sizing from risk."
tags: [crypto, trading, markets]
related: [Crypto Trading, Hyperliquid, Exchange Microstructure, Positioning and Sentiment, Markets - Trading]
aliases: ["Liquidations", "Funding Rates", "Leverage"]
sources:
  - markets/Trading.md
  - markets/Brief.md
  - markets/Tools.md
  - misc/CT.md
  - bookmarks/Markets & Crypto.md
  - snapshots/1790804551519-1de9816cb631/bookmarks/Markets & Crypto.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
---

# Leverage and Liquidations

Leverage borrows to enlarge a position. A liquidation is the exchange force-closing that position when its collateral runs short. How much leverage sits in a market tells you when forced selling becomes likely, and liquidation cascades drive crypto's sharpest moves. Liquidation maps are in [[Markets - Trading]]; saved posts in [[Bookmarks - Markets & Crypto]].

## Leverage shortens the deadline

xydotdot frames leverage as an attempt to reach a target faster by narrowing the acceptable path. At high enough leverage, being right on direction is not enough: financing, volatility, maintenance margin, slippage and gaps can end the position before the thesis plays out.

> "Liquidations are a forced transfer of wealth from impoverished traders who need leverage - to wealthy spot buyers." — GCR (from [[Crypto Takes]])

## Funding and other gauges

Perpetual swaps never expire, so a funding payment keeps them near spot: the crowded side pays the other. Positive funding means longs pay shorts. Negative funding means shorts pay longs, which signals crowded shorts and a possible short squeeze.

| Level | Funding per day | Annualised | Stablecoin borrow rate |
| --- | --- | --- | --- |
| Normal | under 0.05% | under 18% | under 5% |
| Caution | 0.05–0.1% | 18–36% | 5–10% |
| Alert | over 0.1% | over 36% | over 10% |
| Danger | over 0.2% | over 73% | over 20% |

The thresholds are rules of thumb. Other gauges point the same way: margin debt above about 3% of S&P 500 market cap, and a rising leverage ratio. A fast drop in leverage is the crash itself.

Funding measures crowding and carrying cost, not direction. Takopi's study found raw funding weak at predicting daily price. Open-interest filters, composites, cross-venue weighting and settlement timing added no robust edge, and the best carry results clustered in 2020–2021. In a retail-driven bull market, funding can stay high longer than shorts stay solvent (see [[Crypto Trading]]).

## How a cascade runs

1. Leverage builds while price trends its way, peaking in euphoria.
2. A shock trips stops; leveraged positions go underwater and margin calls start.
3. Forced sales hit other traders' liquidation levels. Price gaps through levels and liquidity vanishes.
4. The last holders capitulate, price stabilises and recovery begins.

Shallow books and crowded, similar positions make it worse. fewseethis: "cascades occur as a RESULT of prices going down within a levered environment. in other words a cascade is a secondary effect." After the mechanical bounce, prices "can resume wherever they were going in the first place: up or down." (from [[Crypto Takes]])

Two mechanics to know. Liquidation statistics count position notional, not posted collateral. When losses exceed the insurance fund, exchanges such as Bybit auto-deleverage: they force-close profitable opposing positions at the bankruptcy price.

## After the flush

Husslin's reasons a flush makes a good bottom: algos closing longs and cutting leverage, "Liqs reset positioning", funds forced to open shorts, market makers pulling bids so books are thin, and "Ppl afraid to catch knives here". Then: "Second leg up is always the slowest grind." (from [[Crypto Takes]])

## Collateral and margin design

- **HYPE as collateral.** USDC "can be infinitely redeemed in a liquidation for its full value"; HYPE cannot. With too many positions margined in HYPE, "a cascade could send HYPE low enough where slippage and spread leave positions UNDER collateralized and the protocol insolvent" (from [[Crypto Takes]]). The same question applies to [[Hyperliquid]] borrowing against HYPE or BTC, and to Nado's tokenized-stock collateral.
- **Hedged is not safe.** Margin ratio, loan-to-value, borrow cost and basis can liquidate a delta-neutral funding trade. The worked example is in [[Trading Evidence and Review Framework]].
- **Predictable liquidation prices.** Jeff Yan argued in March 2025 that address-based leverage tiers invite Sybil attacks and that global margin inputs make liquidation prices unpredictable. Hyperliquid's margining docs hold the current rules.

## Sizing

Size from risk, not from leverage: notional ≈ planned loss ÷ stop distance. That holds only if the stop fills near its level; a 1 ÷ leverage liquidation estimate ignores maintenance margin, fees, slippage and gaps. CryptoCred lists five small-account edges: low market impact, a flexible horizon, tolerance for volatility, freedom to concentrate, and the option to sit in cash. None of them excuses too much leverage.

## Deleveraging without bailouts

@Chubbicorn219 on a record crypto crash: "The people who took the risks are taking the damage, no bailouts needed, just an orderly deleveraging and mass death." cobie replied: "Everyone died, but the machines did their jobs perfectly. A beautiful world." (from [[Crypto Takes]])

## Resources

- [Bybit](https://www.bybit.com/en-US/) — Crypto derivatives exchange, saved as a source of funding-rate data.
- [CoinGlass](https://www.coinglass.com/) — Aggregated funding, open-interest and liquidation data across exchanges.
