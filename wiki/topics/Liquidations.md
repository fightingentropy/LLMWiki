---
title: Liquidations
type: topic
domain: markets
sources:
  - markets/Trading.md
  - markets/Tools.md
  - misc/CT.md
related:
  - Crypto Trading
  - Exchange Microstructure
  - Risk Analysis
  - Leverage
  - Crypto Takes
  - Funding Rates
  - Hyperliquid
  - GCRClassic
  - fewseethis
  - Flow Analysis
  - Markets - Trading
  - Markets - Tools
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - liquidations
  - leverage
  - risk
  - cascade
  - mechanical-flow
summary: How forced liquidations trigger and cascade, where to watch them, and the crypto-trader takes on them as wealth transfer, secondary effect and bottom signal.
---

# Liquidations

Liquidations are the forced closing of leveraged positions when collateral falls below the minimum threshold. In crypto and derivatives markets they can cascade and drive sharp volatility. The mechanical moves they cause can dislocate price from fundamental value, so knowing where leverage is concentrated is central to risk management. Erlin's trading note lists liquidations under "Things to look for", next to mechanical movements, funding rates, stablecoin dominance and stablecoin yields (from [[Markets - Trading]]).

## How a liquidation unfolds

1. **Trader takes leverage.** Borrowed capital amplifies the position.
2. **Market moves against the trade.** The position goes underwater.
3. **Margin ratio deteriorates.** Collateral value falls.
4. **Exchange liquidates.** The position is force-sold to cover losses before the exchange has to absorb them.
5. **Cascade risk.** Each forced sale can push price into the next liquidation level.

## What raises cascade risk

- **Leverage ratio:** how much borrowed capital there is relative to own capital.
- **Position size:** larger positions hit harder when they are liquidated.
- **Market depth:** shallow order books amplify liquidation slippage.
- **Leverage clustering:** many traders with similar leverage and positions means a cascade is more likely.

## Reading the market

### Direction of the squeeze

- When shorts get liquidated, the upside squeeze accelerates.
- When longs get liquidated, the downside accelerates.
- If a liquidation map shows concentrated stops, that cluster is cascade risk.

### Signs that liquidations are likely

- **Volatile regimes:** when realised volatility picks up, liquidations become likely.
- **Funding extremes:** elevated funding rates indicate leverage build-up. Funding is a proxy for leverage in perpetual markets (see [[Funding Rates]]).
- **Stablecoin yields:** high rates indicate leverage seeking yield.
- **Before key events:** binary events such as earnings increase liquidation risk.

## Risks

- **Liquidity crunch:** when leveraged players blow up they have to sell, and liquidity evaporates.
- **Cascade failures:** one liquidation triggers the next.
- **Exchange risk:** if liquidations exceed the market value of the position, the exchange eats the loss.
- **Systemic risk:** if large traders blow up, their counterparties face losses.

## Framings from Crypto Takes

### GCR: forced wealth transfer

The note records this line under GCR ([[GCRClassic]]):

> "Liquidations are a forced transfer of wealth from impoverished traders who need leverage - to wealthy spot buyers." (from [[CT|Crypto Takes]])

### A cascade is a secondary effect

[[fewseethis]] (@fewseethis) argues that a cascade follows the price fall rather than causing it:

> "the simple truth is that cascades occur as a RESULT of prices going down within a levered environment. in other words a cascade is a secondary effect. then - outside of a mechanical bounce - prices can resume wherever they were going in the first place: up or down." (from [[CT|Crypto Takes]])

The implication is that a reversal after a cascade is not guaranteed. The cascade only unsticks the jam, and the underlying trend can resume.

### Husslin_ on bottoms

@Husslin_ gave [five reasons](https://twitter.com/Husslin_/status/1781147687103893882) why a given spot was ideal for a bottom (from [[CT|Crypto Takes]]):

- "Algos mindlessly closing longs and reducing leverage in mkt"
- "Liqs reset positioning"
- "Funds forced to open shorts to manage risk"
- "Market makers pulling bids/asks so books are piss thin rn"
- "Ppl afraid to catch knives here"

The same author's [follow-up](https://twitter.com/Husslin_/status/1781349288401846364) on what comes next:

> "Second leg up is always the slowest grind. There’s still supply here from last few days + ppl aren’t fully convinced it’s a bottom just yet"
>
> "Next leg up and onwards should be smooth sailing given most longs from higher have been liquidated, yet shorts haven’t capitulated"

### HYPE-margined cascade risk

A passage in Crypto Takes flags an insolvency risk on [[Hyperliquid]] if too many positions are collateralised in HYPE rather than USDC. USDC holds a 1:1 value and can be redeemed in full in a liquidation. A HYPE-margined position is harder to keep at a precise notional value, and when it is liquidated the HYPE may need to be sold into USDC. HYPE has an FDV that is not backed 1:1 by USDC, so a cascade could push HYPE low enough that slippage and spread leave positions under-collateralised and the protocol insolvent (from [[CT|Crypto Takes]]).

## Resources

- [Loris Tools liquidations](https://loris.tools/liquidations) — real-time liquidation tracking across markets. Saved in the tools note as "real time liquidations" (from [[Markets - Tools]]).
- [CoinGlass liquidation map](https://www.coinglass.com/pro/futures/LiquidationMap) — futures liquidation map showing where stops sit and which direction carries the danger (from [[Markets - Trading]]).
- [Husslin_ on why these spots are ideal for bottoms](https://twitter.com/Husslin_/status/1781147687103893882) — the post behind the five-point list above.
- [Husslin_ on the second leg up](https://twitter.com/Husslin_/status/1781349288401846364) — the follow-up post on the slow second leg, remaining supply and liquidated longs.

## Related

[[Crypto Trading]] · [[Exchange Microstructure]] · [[Risk Analysis]] · [[Leverage]] · [[Crypto Takes]] · [[Funding Rates]] · [[Hyperliquid]] · [[GCRClassic]] · [[fewseethis]] · [[Flow Analysis]] · [[Markets - Trading]] · [[Markets - Tools]]
