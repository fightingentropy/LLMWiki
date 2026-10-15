---
title: Leverage
type: topic
domain: markets
sources:
  - markets/Trading.md
  - markets/Brief.md
  - misc/CT.md
  - bookmarks/Markets & Crypto.md
  - snapshots/1790804551519-1de9816cb631/bookmarks/Markets & Crypto.md
related:
  - Risk Analysis
  - Liquidations
  - Positioning
  - Funding Rates
  - Crypto Takes
  - Hyperliquid
  - Rewkang
  - GCRClassic
  - CryptoCred
  - Markets - Trading
  - Bookmarks - Markets & Crypto
  - X-Bookmarks
  - Crypto Trading
  - cobie
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - leverage
  - margin
  - funding-rates
  - risk
  - amplification
  - deleveraging
  - collateral
  - position-sizing
summary: "How leverage builds and unwinds: funding, margin and stablecoin-yield gauges, risk thresholds, cascade phases, collateral design and sizing."
---

# Leverage

Leverage amplifies returns and risks. Knowing how much leverage is in a market tells you when forced selling becomes likely. This page covers the gauges that show leverage building, the thresholds for each, how a leverage cascade plays out, how margin and collateral design change the risk, and how traders should think about leverage in their own sizing. Funding rates, liquidations and stablecoin yields all appear on the note's list of things to look for when trading (from [[Markets - Trading]]).

## Leverage as a compressed deadline

Leverage is an attempt to reach a target faster by narrowing the acceptable path and timing. At high enough leverage, being directionally right is not enough: financing, volatility, maintenance margin, liquidation rules, slippage, gaps, and correlation can end the position before the thesis resolves. Social feeds overrepresent fast outliers and distort the perceived clock. (from [[X-Bookmarks]]; the post is [xy's "Leverage accelerates the deadline for being right"](https://x.com/xydotdot/status/2091158742523863538))

A related point: a correct top or bottom call can still lose money through sizing, path, leverage or exit errors, while a mediocre entry can support an excellent trade ([post](https://x.com/blknoiz06/status/2091151900729115029); [original post](https://x.com/0xaporia/status/2091034462561706287); from [[Bookmarks - Markets & Crypto]]).

> "Liquidations are a forced transfer of wealth from impoverished traders who need leverage - to wealthy spot buyers." — GCR (from [[CT|Crypto Takes]]; see [[GCRClassic]])

## Leverage indicators

Rule-of-thumb thresholds without a cited source.

### Funding rates (crypto perpetuals)

- **What it is:** the daily cost of holding a leveraged perpetual position, paid between longs and shorts.
- **Normal:** 0.01–0.05% per day.
- **Elevated:** 0.1%+ per day indicates high leverage.
- **Extreme:** 0.2%+ per day indicates bubble or crash risk.
- **Negative rates:** shorts pay longs, so holding shorts is expensive.
- Correction, 15 October 2026: negative funding means crowded shorts and sets up a short squeeze. This page earlier said "long squeeze setting up"; [[Funding Rates]] also calls it a short-squeeze setup.

Funding-rate levels indicate carrying cost and crowding, not a self-contained directional signal. [Takopi's funding-rate study](https://x.com/OctopusTakopi/status/2085776377366864050) found raw funding weak for daily price prediction; open-interest conditioning, composites, cross-venue weighting, volatility sizing, hedging and settlement sniping added no robust alpha, and the stronger carry results were fragile and concentrated in 2020–2021. Its code repository is unavailable, so treat it as skeptical research, not a strategy. See [[Funding Rates]].

**Funding extremes in bulls.** [[Rewkang]] (from [[CT|Crypto Takes]]):

> "There are certain heuristics that work in PvP market conditions that don't apply as much in PvE market conditions"
>
> "The most obvious is fading high funding/up only price action. In bull markets funding can stay higher than shorts can remain solvent."
>
> "To outperform like retail you need to think like retail"

Fading high funding works in PvP regimes but breaks in PvE regimes, where retail DCA overrides mean reversion. His second example: new money picks favourite meme coins and keeps buying with every paycheck, so traders who short them because they are "being rotated out of" eventually get blown out, as those who faded AXS, ADA and LUNA did last cycle.

### Margin usage

- **Margin debt:** total capital borrowed by retail investors.
- **Margin as % of market cap:** extreme when above 3% of SPX market cap.
- **Margin increasing:** risk-taking is increasing.
- **Margin decreasing:** risk-off; forced liquidation likely.

### Stablecoin yields

- **Borrow rates on USDT/USDC:** higher rates mean more demand for leverage.
- **Lending rates:** excess supply means less leverage.
- **Yield curve:** the basis for leverage trades.

### Leverage ratio

- **Ratio falling:** leverage reducing, i.e. deleveraging.
- **Ratio rising:** leverage increasing, i.e. risk-taking.
- **Reversal speed:** a fast reduction in leverage means a crash is imminent.

## Risk levels by indicator

| Level | Funding rates | Margin debt | Stablecoin yields (annualized) | Leverage |
|---|---|---|---|---|
| Normal | < 0.05% per day | Stable or declining | < 5% | Reducing |
| Caution | 0.05–0.1% per day | Stable | 5–10% | Stable |
| Alert | > 0.1% per day | Rising | > 10% | Increasing |
| Danger | > 0.2% per day | At extremes | > 20% | At record highs |

## Leverage cascade mechanics

See [[Liquidations]] for forced-selling mechanics and [[Positioning]] for crowding analysis.

### Building phase

1. Leverage increases gradually.
2. Markets trend in the direction of the leverage.
3. Stop losses hit, triggering more leverage.
4. Euphoria at the peak.

### Inflection point

- Some event triggers uncertainty.
- Stop losses trigger.
- Leveraged positions go underwater.
- Margin calls start.

### Cascade phase

1. Forced liquidations increase.
2. Liquidations hit the stops of other leveraged traders.
3. The cascade accelerates.
4. The market gaps through levels.
5. Liquidity evaporates.

When liquidation losses breach an exchange's insurance-fund conditions, auto-deleveraging can force-close profitable or highly leveraged opposing positions at the liquidated position's bankruptcy price ([Bybit's ADL explainer](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL)). When reading cascade data, note that liquidation statistics count position notional, not the collateral posted ([explanation](https://x.com/udiWertheimer/status/2018176455113351441)).

### Capitulation phase

- Final holders capitulate.
- The last momentum traders stop out.
- Price stabilises.
- Recovery begins.

@Husslin_ listed [why these spots are ideal for bottoms](https://twitter.com/Husslin_/status/1781147687103893882) after a flush (from [[CT|Crypto Takes]]):

- "Algos mindlessly closing longs and reducing leverage in mkt"
- "Liqs reset positioning"
- "Funds forced to open shorts to manage risk"
- "Market makers pulling bids/asks so books are piss thin rn"
- "Ppl afraid to catch knives here"

## Margin design and collateral

### Collateral composition risk

The note flags a [[Hyperliquid]]-specific concern: HYPE-margined positions are more fragile than USDC-margined ones because HYPE's FDV is not backed 1:1. USDC "can be infinitely redeemed in a liquidation for its full value"; a liquidated HYPE-margined position may need to be sold into USDC. If positions over-collateralize in HYPE, "a cascade could send HYPE low enough where slippage and spread leave positions UNDER collateralized and the protocol insolvent" (from [[CT|Crypto Takes]]). See [[Liquidations]].

The same question applies to newer collateral options:

- Hyperliquid's [manual borrows](https://x.com/HyperliquidX/status/2100838194317312446) let portfolio-margin users supply HYPE or BTC and borrow USDC or USDT at utilization-based interest.
- Nado says its SPYx and QQQx [tokenized-stock wrappers](https://x.com/nadoHQ/status/2064199751923318789) can serve as collateral alongside spot and perpetual positions under one portfolio-margin system. These are venue-issued exposure, not shares.

### Portfolio margin can still liquidate

Alex's [note on Hyperliquid portfolio margin](https://x.com/alex_hunter20/status/2031304222994739308) covers BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate. His later [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) was followed by his own [mathematical correction](https://x.com/alex_hunter20/status/2095155500119945541): margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis behaviour make the apparently delta-neutral trade capable of liquidation and loss. Read the pair as a model-risk lesson.

### Margin rules

Jeff Yan's [March 2025 margin-design response](https://x.com/chameleon_jeff/status/1900218435562578130) argues that address-based leverage tiers are Sybilable, that banning unrealized-PnL withdrawals harms funding arbitrage, and that global margin inputs undermine predictable liquidation prices. His 18.3% example is historical design rationale, not a current rule. The [official Hyperliquid margining docs](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining) describe remaining transfer margin as the greater of initial margin required and 10% of total position value, with separate tier and liquidation rules.

## Trader perspective on leverage

### Leverage as edge

- A smaller capital base can achieve outsize returns.
- But it requires timing and size discipline.
- One mistake blows the account.
- Risk of ruin applies.

[[CryptoCred]]'s [five small-account advantages](https://x.com/CryptoCred/status/1913485279706677328) are low market impact, a flexible time horizon, tolerance for marked volatility, freedom to concentrate, and the option to stay in cash. They create opportunity only; they do not rescue excessive leverage or weak risk management.

### Leverage as risk

- Amplifies losses.
- Forces you to cut winners early (margin calls).
- Hides leverage risk until it cascades.
- Can lock you out of rallies after a cascade.

### Sizing from risk, not from leverage

The reusable relation is notional ≈ planned loss budget ÷ stop distance ([koi's sizing post](https://x.com/k0ifishfarmer/status/1895877387818041622)). It holds only if the stop executes near its level. Posted margin and leverage do not define the loss, and a simple 1 ÷ leverage liquidation estimate ignores maintenance margin, fees, slippage, gaps, cross-margin effects and venue rules. The post's $500 example risks 5% of the portfolio, an unusually aggressive per-trade budget.

## Deleveraging takes

- A take saved in [[CT|Crypto Takes]], beginning with a [post on Bessent](https://x.com/SuitablePolitic/status/1909094334349337081), claims the tariff roll-out was a "controlled detonation": "Hedge funds were leveraged to the gills, and if that bubble popped, it would have created an 08 style financial crisis." Then: "Wall Street FREAKED OUT and deleveraged themselves."
- @Chubbicorn219: "Crypto is having probably its largest crash ever and all of the decentralized systems are holding up." And: "The people who took the risks are taking the damage, no bailouts needed, just an orderly deleveraging and mass death." [[cobie]] replied: "Everyone died, but the machines did their jobs perfectly. A beautiful world." (from [[CT|Crypto Takes]])
- A [forced-seller case study](https://x.com/TheOtherParker_/status/2019587226871447687) combines spot and options volume, cross-asset behaviour, leverage clues and a future 13F check into a falsifiable market hypothesis.

## Resources

- [Leverage accelerates the deadline for being right](https://x.com/xydotdot/status/2091158742523863538) — Frames leverage as compressing the time to reach a target until being directionally right is no longer enough. _(@xydotdot)_
- [Funding-rate signals are weaker than the intuitive story](https://x.com/OctopusTakopi/status/2085776377366864050) — Skeptical research on funding as a signal and as carry; weak daily prediction, fragile carry results. _(@OctopusTakopi)_
- [Profitable execution matters more than calling exact tops and bottoms](https://x.com/blknoiz06/status/2091151900729115029) — Sizing, path, leverage and exits decide the trade, not the turning-point call; public top-and-bottom calls are a separate status game. [Original post](https://x.com/0xaporia/status/2091034462561706287). _(@blknoiz06)_
- [How auto-deleveraging works on Bybit](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL) — Bybit's help page on how ADL ranks and force-closes opposing positions when insurance-fund conditions are breached. The linked [X article](https://x.com/i/article/1916529294441938945) adds a MANEKI case built on anonymized, deliberately altered data; its exchange-conduct allegations are unverified. _(via @ltrd_)_
- [How liquidation volume is counted](https://x.com/udiWertheimer/status/2018176455113351441) — Short explanation that liquidation statistics count position notional rather than posted collateral. _(@udiWertheimer)_
- [Husslin_ on why these spots are ideal for bottoms](https://twitter.com/Husslin_/status/1781147687103893882) — Five-point list on leverage reduction, reset positioning and thin books after a flush. _(@Husslin_)_
- [Hyperliquid manual borrows](https://x.com/HyperliquidX/status/2100838194317312446) — Official announcement: portfolio-margin users can supply HYPE or BTC and borrow USDC or USDT at utilization-based interest. _(@HyperliquidX)_
- [Tokenized-stock collateral under unified margin](https://x.com/nadoHQ/status/2064199751923318789) — Nado on using its SPYx and QQQx tokenized-stock wrappers as collateral alongside spot and perpetual positions under one portfolio-margin system. _(@nadoHQ)_
- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — Risk note on BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate. Follow-ups: the [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) and its [correction](https://x.com/alex_hunter20/status/2095155500119945541). _(@alex_hunter20)_
- [March 2025 Hyperliquid margin-design response](https://x.com/chameleon_jeff/status/1900218435562578130) — Jeff Yan on leverage tiers, unrealized-PnL withdrawals and predictable liquidation prices; historical rationale. _(@chameleon_jeff)_
- [Hyperliquid margining documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining) — Official docs for current initial, transfer and liquidation margin rules.
- [Structural sources of retail trading edge](https://x.com/CryptoCred/status/1913485279706677328) — Five advantages small accounts have, and why they do not excuse excessive leverage. _(@CryptoCred)_
- [Size notional from risk and stop distance](https://x.com/k0ifishfarmer/status/1895877387818041622) — Notional ≈ loss budget ÷ stop distance; why leverage and posted margin do not define the loss. _(@k0ifishfarmer)_
- [Building a falsifiable forced-seller hypothesis](https://x.com/TheOtherParker_/status/2019587226871447687) — Case study using spot and options volume, cross-asset behaviour and leverage clues to test a forced-seller story. _(@TheOtherParker_)_
- [Bessent post](https://x.com/SuitablePolitic/status/1909094334349337081) — The post linked at the start of the take that the tariff roll-out was a "controlled detonation" that forced Wall Street to deleverage. _(@SuitablePolitic)_
- [CoinGlass liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — CoinGlass futures liquidation map, for seeing where leveraged positions sit; saved without a note in [[Markets - Trading]].

## Related

[[Liquidations]] · [[Positioning]] · [[Funding Rates]] · [[Risk Analysis]] · [[CT|Crypto Takes]] · [[Hyperliquid]] · [[Rewkang]] · [[GCRClassic]] · [[CryptoCred]] · [[cobie]] · [[Crypto Trading]] · [[Markets - Trading]] · [[Bookmarks - Markets & Crypto]] · [[X-Bookmarks]]
