---
title: Hyperliquid
type: entity
domain: markets
sources:
  - markets/Tools.md
  - markets/Articles.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
  - misc/CT.md
  - markets/Trading.md
related:
  - Robinhood HYPE
  - Crypto Takes
  - Exchange Microstructure
  - TradeXYZ
  - Digital Security
  - Market Performance Measurement
  - Bookmarks - Markets & Crypto
  - HIP-3 Silver Microstructure
  - Trading Platforms
  - Funding Rates
  - Leverage
  - Liquidations
  - Markets - Tools
  - Markets - Articles
  - Crypto Trading
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - platform
  - exchange
  - derivatives
  - crypto
  - microstructure
  - hip-3
  - portfolio-margin
  - hype
summary: What Hyperliquid is, the margin and collateral risks traders have flagged, and every saved dashboard, explorer and analysis for researching the venue.
---

# Hyperliquid

Hyperliquid is a decentralized exchange and derivatives platform built around perpetual futures, with its own chain (Hyperliquid EVM) and the HYPE token. It appears in this wiki from several angles: as a trading venue, as the blockchain that HIP-3 builder markets such as [[TradeXYZ]] deploy on, as a surface for tracking large wallets like [[Robinhood HYPE]], and as a recurring subject of margin-risk commentary in Erlin's notes. The links section below is the research bank: official docs, explorers, dashboards, fee and leaderboard tools, and the analyses worth reading before trading there.

## Key ideas

### What it is and who builds on it

- Decentralized exchange and derivatives platform focused on perpetual futures trading.
- [[TradeXYZ]] runs an RWA and equities-oriented HIP-3 DEX on Hyperliquid's blockchain. Its FAQ says Hyperliquid supplies the chain and that independent, unaffiliated core contributors deployed the DEX. It does not answer whether fees from RWA growth accrue to HYPE holders, or whether tokens are bought, burned or distributed. Those stay open due-diligence questions, not an allegation or a thesis.
- Current HIP-3 documentation describes permissionless, builder-deployed perpetual markets. A saved post imagines regulated or KYC venues coexisting with unregulated markets and arbitrage connecting them; that is market-structure speculation, not an announced feature.
- Discovery Bounds V2 is TradeXYZ's own explanation of the dynamic off-hours price bands it applies to 24/7 perpetuals.

### Bandwidth and latency

- From Erlin's crypto takes: Hyperliquid "increased bandwidth and reduced latency so much that solana folks started talking about decentralization" (from [[CT]]; the note links [@kunalgoel](https://x.com/kunalgoel/status/1862449297905574002) and [@TheSlurper_](https://x.com/TheSlurper_/status/2028960211478724882) with the reminder to "check Dislocation betweetn Different exchanges"). See [[Exchange Microstructure]].
- A wallet-level case study links unusually high priority-fee spend with strong reported P&L and a possible latency edge. A lead for replication, not proof of a durable strategy.
- The Lighter-versus-Hyperliquid comparison favours Hyperliquid's continuous sequencing and an Ethereum escape hatch; a counterpoint argues Lighter's speed bump allows undetectable information leakage.

### HYPE as collateral

The core worry, quoted from [[CT]] with sentence breaks added:

> "The risk is in possible over collateralization of positions using HYPE. USDC has a 1:1 value and can be infinitely redeemed in a liquidation for its full value. On the other hand, a HYPE margined position to maintain a precise notional value is more complicated. When liquidated, HYPE is a coin with an FDV that is not backed 1:1 by USDC, and that position may need to be sold into USDC. You create a risk of collateralizing too many positions in HYPE and a cascade could send HYPE low enough where slippage and spread leave positions UNDER collateralized and the protocol insolvent."

- Jeff Yan's March 2025 margin-design response argues that address-based leverage tiers are Sybilable, that banning unrealized-PnL withdrawals harms funding arbitrage, and that global margin inputs undermine predictable liquidation prices. His transfer-aware 18.3% example is historical design rationale, not a current rule: the present official margining documentation describes remaining transfer margin as the greater of initial margin required and 10% of total position value, with separate tier and liquidation rules.

### Portfolio margin, borrowing and the delta-neutral trap

- Alex Hunter's risk note covers BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate.
- His later HYPE spot-plus-perpetual funding strategy was followed by his own mathematical correction: portfolio-margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis behaviour make the apparently delta-neutral trade capable of liquidation and loss. Read the setup and the correction together as a model-risk lesson, not a playbook.
- The official [portfolio-margin documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin) explains account-level maintenance, borrowing, and carry-trade risks. A spot/perpetual hedge does not remove every liquidation path. See [[Funding Rates]], [[Leverage]], [[Liquidations]].
- Manual borrows: Hyperliquid announced that portfolio-margin users can supply HYPE or BTC and borrow USDC or USDT at utilization-based interest. A dated announcement; it does not establish current account eligibility or a fixed future borrowing rate.

### Reading leaderboards and top traders

- [[Market Performance Measurement]] holds the leaderboard question: the largest displayed accounts may be protocol contracts, market makers, token deployers, long-term holders or directional traders, each with different exposures, cost bases and hedges. Calculated PnL needs on-chain and counterparty verification.
- An author-reported study of 935,000 wallets finds very weak month-to-month persistence among top-decile traders. A warning against naive copy-trading; methodology still to verify.
- Copy-trader and leaderboard sites are research views. Leaderboard performance is not a recommendation.

### Liquidity, flow and competition

- ASXN compares order-book depth, spreads and estimated slippage for Hyperliquid against major centralized and decentralized venues, and claims order-of-magnitude advantages for some contracts including an S&P 500 perpetual. The result is time-, size-, instrument-, methodology- and venue-specific.
- Retail-flow saturation bear case (MONK, May 2025): Hyperliquid may have captured much of the readily available on-chain retail taker flow, and gaining substantially more Binance-relative volume would need harder-to-win HFT and institutional flow plus further latency improvements. Share estimates are stale.
- Jintao's satire uses the JELLY intervention to separate Hyperliquid's genuine product traction from its stronger decentralization and "all finance" claims. A skeptical counterweight, not a neutral assessment.
- Syncracy's March 2025 thesis frames Hyperliquid as a vertically integrated exchange and smart-contract platform whose shared interface, order flow, liquidity and developer ecosystem could reinforce one another. Syncracy disclosed a large HYPE position; its fee run rates, market shares and valuation are dated investor assumptions.
- hl.eco's AQA v2 model multiplies live Hyperliquid USDC supply by an adjustable reserve-yield assumption and a stated roughly 90% protocol share to estimate potential HYPE buying. The page labels the output illustrative, says the AQA rate has no public read path, and showed treasury routing had not begun.
- HIP-3 Silver Microstructure: Hyperliquid vs. CME is a comparative analysis of silver futures microstructure on the two venues. Full page: [[HIP-3 Silver Microstructure]].

### Tracked wallets

- [[Robinhood HYPE]] is Robinhood's crypto operations wallet on Hyperliquid EVM (`0x841ed663f2636863d40be4ee76243377dff13a34`), watched as a proxy for institutional flow, market-maker activity, hedging and retail interest.

### Tooling caution

- Public's market-data MCP server exposes live quotes and option chains alongside order placement and cancellation tools, so a connected account is not automatically read-only. Enumerate callable tools, scope credentials and require separate approval for trades. See [[Digital Security]].

## Links

### Official

- [Hyperliquid](https://hyperliquid.xyz/) — The venue's canonical entry point.
- [Portfolio-margin documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin) — Official explanation of account-level maintenance, borrowing and carry-trade risk under portfolio margin.
- [Margining documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining) — Official rules for transfer margin, tiers and liquidation; the current reference against Jeff Yan's 2025 design post.
- [Hyperliquid manual borrows announcement](https://x.com/HyperliquidX/status/2100838194317312446) — Official post: portfolio-margin users can supply HYPE or BTC and borrow USDC or USDT at utilization-based interest. Time-sensitive. _(@HyperliquidX)_

### Explorers and address tools

- [Hyperliquid EVM Explorer](https://hyperevmscan.io/) — Block explorer for on-chain activity and wallet tracking.
- [Robinhood HYPE wallet on hyperevmscan](https://hyperevmscan.io/address/0x841ed663f2636863d40be4ee76243377dff13a34) — Direct explorer view of the Robinhood operations wallet tracked in [[Robinhood HYPE]].
- [View a Hyperliquid address without connecting](https://x.com/janklimo/status/2020024099498758451) — Frontend URL pattern that opens any Hyperliquid address directly, with no wallet connection. _(@janklimo)_

### Latency, flow and liquidity dashboards

- [Hyperliquid Latency Map](https://hyperlatency.glassnode.com/) — Glassnode's map of network latency and microstructure for trading analysis.
- [HypeFlows](https://hypeflows.com/) — Charts Hyperliquid perpetual volume and open interest against a site-defined aggregate of eight centralized exchanges (Binance, Bybit, OKX, Huobi, Coinbase, Kraken, Bitfinex, Bitget) with pairwise ratios. Not the whole global market; upstream feeds undocumented. _(via @karl_0x)_
- [ASXN cross-venue liquidity comparison](https://www.asxn.xyz/) — Dashboard comparing depth, spreads and estimated slippage for Hyperliquid against CEX and DEX venues. Launch [announcement](https://x.com/asxn_r/status/2085742057315094666) and Jeff Yan's [bookmark context](https://x.com/chameleon_jeff/status/2087559428342215100). _(@asxn_r)_
- [Orion Binance and Hyperliquid market screener](https://x.com/awawat/status/2094983005546881185) — [Orion](https://screener.orionterminal.com/) offers exchange filters, open-interest spikes, large moves, funding, sorting and alerts. A monitoring tool; check data latency and alert delivery before relying on it. _(@awawat)_
- [Cryexc Hyperliquid order overlays](https://x.com/josedonato__/status/2030683232975347787) — Market-data tool that overlays limit, take-profit, stop and liquidation levels on historical charts. _(@josedonato__)_

### Fees, leaderboards, exporters and ecosystem

- [Hyperliquid Fees](https://fees.6is.dev/) — Fee reference; check figures against the official schedule before execution.
- [Hyperliquid trades exporter](https://trade-export.hypedexer.com/?v=1) — Exports trade history; validate output before using it for tax or accounting.
- [Hyperdash copytraders](https://hyperdash.com/explore/copytraders) — Copy-trader research view; leaderboard performance is not a recommendation.
- [Mirrorly leaderboard](https://portal.mirrorly.xyz/leaderboard) — A separate performance leaderboard, kept for comparison.
- [hl.eco relative performance](https://hl.eco/hype-relative-perf) — HYPE relative-performance view on the hl.eco hub.
- [hl.eco financials](https://hl.eco/financials) — Protocol-financials view on hl.eco.
- [hl.eco AQA v2 reserve-yield model](https://hl.eco/stables) — Scenario calculator for potential HYPE buying from stablecoin reserve yield; labelled illustrative by the page itself. _(via @guru__hl)_
- [Liquid Terminal ecosystem directory](https://liquidterminal.xyz/ecosystem/project) — Hyperliquid ecosystem directory that overlaps with hl.eco but gives a different research view.

### Margin, collateral and risk analysis

- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — Detailed risk note on BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate. _(@alex_hunter20)_
- [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) — The carry setup; read with the author's [mathematical correction](https://x.com/alex_hunter20/status/2095155500119945541), which shows the trade can still be liquidated and lose. _(@alex_hunter20)_
- [What Hyperliquid leaderboard PnL actually measures](https://x.com/alex_hunter20/status/2102003574331130349) — Attempt to separate protocol contracts, market makers, token deployers, long-term holders and directional traders among the largest accounts. _(@alex_hunter20 quoting @MarketsAlpha)_
- [March 2025 Hyperliquid margin-design response](https://x.com/chameleon_jeff/status/1900218435562578130) — Jeff Yan on why address-based tiers, withdrawal bans and global margin inputs are bad design. Historical rationale, superseded by the margining docs above. _(@chameleon_jeff)_
- [Hyperliquid top-trader persistence analysis](https://x.com/chase_mew_/status/2079212386532139461) — Author-reported study of 935,000 wallets showing weak month-to-month persistence among top-decile traders. _(@chase_mew_)_
- [Hyperliquid priority-fee trader case study](https://x.com/VietnamPenguin/status/2073091585248514536) — Wallet-level observation tying high priority-fee spend to strong reported P&L and a possible latency edge. _(@VietnamPenguin)_

### Theses, critiques and market structure

- [HIP-3 Silver Microstructure: Hyperliquid vs. CME](https://x.com/shaundadevens/status/2019782009267085656) — Comparative analysis of silver futures microstructure between Hyperliquid and CME. _(@shaundadevens)_
- [March 2025 Hyperliquid thesis: Building a Financial Aggregator](https://www.syncracy.io/writing/hyperliquid-thesis) — Syncracy's bull case for Hyperliquid as a vertically integrated exchange and platform; the author disclosed a large HYPE position. _(@RyanWatkins_)_
- [Hyperliquid retail-flow saturation bear case](https://x.com/defi_monk/status/1924139882181509471) — MONK's May 2025 argument that further Binance-relative share needs HFT and institutional flow, not more retail. _(@defi_monk)_
- [Hyperliquid product strength versus decentralization claims](https://x.com/hellojintao/status/2057508705969795563) — Jintao's polemical satire built around the JELLY intervention. _(@hellojintao)_
- [Lighter versus Hyperliquid execution and trust trade-offs](https://x.com/moonshiesty/status/2074267353278496878) — Architecture comparison, paired with David Perkins' [counterpoint](https://x.com/davidtperk/status/2074288010753896846) on information leakage during Lighter's speed bump. _(@moonshiesty, @davidtperk)_
- [TradeXYZ and HYPE value-accrual question](https://x.com/dnapway/status/2093506822414147637) — Jordi Alexander asks what TradeXYZ's alignment with Hyperliquid means economically for HYPE holders. TradeXYZ's [FAQ](https://docs.trade.xyz/support-and-faqs/faqs/trade-xyz-and-equities-xyz-markets) confirms Hyperliquid supplies the chain but leaves the fee question open. _(@dnapway)_
- [Discovery Bounds V2 for 24-7 perps](https://x.com/tradexyz/status/2032563867591520476) — Primary explanation of the dynamic off-hours price bands on TradeXYZ markets. _(@tradexyz)_
- [Permissioned and permissionless HIP-3 market speculation](https://x.com/wassielawyer/status/2095556242701983881) — Imagines KYC and unregulated HIP-3 venues side by side, linked by arbitrage. Speculation, not an announced feature. _(@wassielawyer)_
- [Public market data via MCP](https://github.com/PublicDotCom/publicdotcom-mcp-server) — The brokerage MCP server behind the tooling caution above: read tools plus order placement and cancellation in one connector.

## Related

[[Robinhood HYPE]] · [[Crypto Takes]] · [[Exchange Microstructure]] · [[HIP-3 Silver Microstructure]] · [[TradeXYZ]] · [[Trading Platforms]] · [[Market Performance Measurement]] · [[Funding Rates]] · [[Leverage]] · [[Liquidations]] · [[Crypto Trading]] · [[Digital Security]] · [[Bookmarks - Markets & Crypto]] · [[Markets - Tools]] · [[Markets - Articles]]
