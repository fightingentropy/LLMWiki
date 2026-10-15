---
title: Bookmarks - Markets & Crypto
type: source
domain: markets
sources:
  - snapshots/1790804551519-1de9816cb631/bookmarks/Markets & Crypto.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
  - snapshots/1790106580663-33c2f5b6597a/bookmarks/Markets & Crypto.md
related:
  - Evergreen Lessons from X - September 2026
  - Credit
  - Developer Resources
  - Exchange Microstructure
  - Trading Evidence and Review Framework
  - X-Bookmarks
  - Hyperliquid
  - Market Performance Measurement
  - Risk Analysis
  - AI Infrastructure Economics
  - goodalexander
  - Trading Psychology
  - Liquidations
  - Leverage
  - Funding Rates
  - Flow Analysis
  - Positioning
  - Market Cycles
  - Macro Trading
  - Equities
  - Crypto Trading
  - Markets - Tools
  - TradeXYZ
  - Citrini Research
  - CryptoCred
  - TheFlowHorse
  - 0xaporia
  - Stanley Druckenmiller
  - Zhu Su
  - jimtalbot
  - Nassim Taleb
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - bookmarks
  - september-2026
  - markets
  - crypto
  - hyperliquid
  - risk
  - performance
  - trading-tools
  - trading-psychology
  - macro
review_status: archive
summary: "Saved markets and crypto links by theme, each described: Hyperliquid mechanics, trading process and risk, market tools, macro and AI-cycle theses."
---

# Bookmarks - Markets & Crypto

This is the markets and crypto resource bank: saved links covering Hyperliquid's margin and liquidation mechanics, exchange and screener tools, trading process and psychology, sizing and backtesting arithmetic, market microstructure, and macro, credit and AI-cycle theses. Most entries are X posts kept because they stay useful beyond their original timeline. The strongest material is the [[Hyperliquid]] cluster (portfolio-margin mechanics with the author's own correction, the leaderboard-PnL methodology, the March 2025 margin-design debate) and the process one-liners from [[0xaporia]], [[CryptoCred]] and [[TheFlowHorse]]. Other recurring authors: [[Citrini Research|Citrini]] (@Citrini7), [[goodalexander]], @alex_hunter20, @josedonato__, @Dipper_pol, @0x_Kun, @blknoiz06 and @chameleon_jeff.

Read the posts as attributed claims and research leads, not verified findings or trade recommendations. Mortgage, gilt, property-price, Treasury-positioning and hyperscaling posts are hypotheses or record-verification leads. Screeners, fee pages, trade exporters and leaderboards are research tools, not validated sources for execution or tax reporting.

## Margin, borrowing and liquidation mechanics

How portfolio margin, borrowing, auto-deleveraging and liquidation statistics actually work, mostly on [[Hyperliquid]]. Rules, rates and tiers change; check current official documentation before relying on any figure. See [[Liquidations]] and [[Leverage]].

- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — Detailed risk note on BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate. A later [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) was followed by the author's own [mathematical correction](https://x.com/alex_hunter20/status/2095155500119945541): portfolio-margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis behaviour make the apparently delta-neutral trade capable of liquidation and loss. Read the setup and the correction together as a model-risk lesson: delta neutrality does not remove the risks the correction identifies. _(@alex_hunter20)_
- [Hyperliquid manual borrows](https://x.com/HyperliquidX/status/2100838194317312446) — Official announcement that portfolio-margin users can supply HYPE or BTC and borrow USDC or USDT, with utilization-based interest. Rates, collateral rules and eligibility are time-sensitive. _(@HyperliquidX)_
- [March 2025 Hyperliquid margin-design response](https://x.com/chameleon_jeff/status/1900218435562578130) — Jeff Yan argues that address-based leverage tiers are Sybilable, banning unrealized-PnL withdrawals harms funding arbitrage, and global margin inputs undermine predictable liquidation prices. His transfer-aware 18.3% example is historical design rationale, not a current rule: the present [official margining documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining) describes remaining transfer margin as the greater of initial margin required and 10% of total position value, with separate tier and liquidation rules. _(@chameleon_jeff)_
- [HLP crash-profit pipeline research](https://x.com/RuizheJia/status/2020906838653604056) — Research collaboration tracing how HLP profited from two crashes, instead of repeating the usual ADL explanation. _(@RuizheJia)_
- [How liquidation volume is counted](https://x.com/udiWertheimer/status/2018176455113351441) — Concise explanation that liquidation statistics count position notional rather than posted collateral. _(@udiWertheimer)_
- [How auto-deleveraging works on Bybit](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL) — When liquidation losses breach defined insurance-fund conditions, Bybit can rank profitable or highly leveraged opposing positions and force-close them at the liquidated position's bankruptcy price. The original [X article](https://x.com/i/article/1916529294441938945) adds a MANEKI case based on anonymized, deliberately altered data; keep those exchange-conduct allegations separate and unverified. _(via @ltrd_)_
- [Tokenized-stock collateral under unified margin](https://x.com/nadoHQ/status/2064199751923318789) — Nado says its SPYx and QQQx wrappers can serve as collateral alongside spot and perpetual positions under one portfolio-margin system. These are venue-issued tokenized exposure rather than shares: funding can reverse, and custody, issuer, contract, oracle, liquidity, basis and liquidation risks remain. _(@nadoHQ, via @inkonchain)_

## Hyperliquid theses, HIP-3 and venue comparisons

Bull and bear arguments about Hyperliquid's structure, the HIP-3 builder-deployed markets, and comparisons with Lighter, centralized venues and other perpetual DEXs. See [[Hyperliquid]], [[TradeXYZ]], [[Exchange Microstructure]] and [[HIP-3 Silver Microstructure]].

- [Permissioned and permissionless HIP-3 market speculation](https://x.com/wassielawyer/status/2095556242701983881) — The author imagines regulated or KYC venues coexisting with unregulated markets and arbitrage connecting them. Market-structure speculation, not an announced Hyperliquid feature: current HIP-3 documentation describes permissionless builder-deployed perpetual markets and does not establish this compliance split. _(@wassielawyer)_
- [TradeXYZ and HYPE value-accrual question](https://x.com/dnapway/status/2093506822414147637) — Jordi Alexander asks what TradeXYZ's alignment with Hyperliquid means economically: whether fees from RWA growth accrue to HYPE holders, whether tokens are bought, burned or distributed, and what arrangements exist between the parties. TradeXYZ's [FAQ](https://docs.trade.xyz/support-and-faqs/faqs/trade-xyz-and-equities-xyz-markets) says Hyperliquid supplies the blockchain and that the XYZ HIP-3 DEX was deployed by independent, unaffiliated core contributors; it does not answer the fee-routing or token-accrual questions. Due-diligence questions, not an allegation, a confirmed relationship or a trading thesis. _(@dnapway)_
- [Discovery Bounds V2 for 24-7 perps](https://x.com/tradexyz/status/2032563867591520476) — Primary market-structure explanation of dynamic off-hours price bands. _(@tradexyz)_
- [Lighter versus Hyperliquid execution and trust trade-offs](https://x.com/moonshiesty/status/2074267353278496878) — Architecture comparison favouring continuous sequencing and an Ethereum escape hatch, paired with an important [counterpoint](https://x.com/davidtperk/status/2074288010753896846) about undetectable information leakage during Lighter's speed bump. _(@moonshiesty and @davidtperk)_
- [Hyperliquid retail-flow saturation bear case](https://x.com/defi_monk/status/1924139882181509471) — MONK argues that Hyperliquid may have captured much of the readily available on-chain retail taker flow, while gaining substantially more Binance-relative volume would require harder-to-win HFT and institutional flow plus further latency improvements. A May 2025 scenario thesis with stale share estimates, not a current volume measurement. _(@defi_monk)_
- [Hyperliquid product strength versus decentralization claims](https://x.com/hellojintao/status/2057508705969795563) — Polemical satire that uses the JELLY intervention to separate Hyperliquid's genuine product traction from its stronger decentralization and "all finance" claims. A skeptical counterweight, not a neutral protocol assessment. _(@hellojintao)_
- [March 2025 Hyperliquid thesis: Building a Financial Aggregator](https://www.syncracy.io/writing/hyperliquid-thesis) — Syncracy, which disclosed building a large HYPE position, frames Hyperliquid as a vertically integrated exchange and smart-contract platform whose shared interface, order flow, liquidity and developer ecosystem could reinforce one another. Its fee run rates, market shares, valuation, decentralization progress, bridge risks and addressable-market estimates are dated investor assumptions that need refreshing. _(@RyanWatkins_)_
- [ASXN cross-venue liquidity comparison](https://www.asxn.xyz/) — Dashboard comparing order-book depth, spreads and estimated slippage for Hyperliquid against major centralized and decentralized venues. The bookmark claims order-of-magnitude advantages for some contracts, including an S&P 500 perpetual; a time-, size-, methodology- and venue-specific observation, not a standing fact. Context: the [announcement](https://x.com/asxn_r/status/2085742057315094666) and the [bookmark context](https://x.com/chameleon_jeff/status/2087559428342215100) from Jeff. _(@asxn_r, via @chameleon_jeff)_
- [HypeFlows Hyperliquid-versus-CEX dashboard](https://hypeflows.com/) — Charts Hyperliquid perpetual volume and open interest against a site-defined aggregate of eight named centralized exchanges (Binance, Bybit, OKX, Huobi, Coinbase, Kraken, Bitfinex and Bitget) and offers pairwise ratios. That aggregate is not the whole global market, and the upstream feeds are not documented. _(via @karl_0x)_
- [Keep the trading hot path simple and measure bottlenecks](https://x.com/liquidated_hl/status/2104510929300037683) — The pictured March 2023 messages attributed to Jeff favour an in-memory order book, simple feed-to-strategy handling, and choosing Rust or C++ only when measured performance requires it. Separate network delay from computation; introduce shared memory or concurrency for a demonstrated need. Historical engineering advice; attribution and venue-specific performance unverified. _(@liquidated_hl)_
- [Arcus perpetuals](https://app.arcus.xyz/trade/spot/SHOP) — Trading venue saved for research; the URL opens its SHOP spot market.

## Hyperliquid tools, leaderboards and performance measurement

Entry points, fee and financials pages, exporters and leaderboards for Hyperliquid, plus the posts that explain what leaderboard PnL does and does not measure. Leaderboards mix protocol accounts, market makers, holders and directional traders; read [[Market Performance Measurement]] before interpreting displayed PnL. Leaderboard performance is not a recommendation, and exporter output needs validating before tax or accounting use.

- [Hyperliquid](https://hyperliquid.xyz/) — Canonical Hyperliquid entry point.
- [Hyperliquid Fees](https://fees.6is.dev/) — Fee reference; verify figures against the venue's official schedule before execution.
- [Hyperliquid financials](https://hl.eco/financials) — Protocol-financials view on hl.eco.
- [hl.eco relative performance](https://hl.eco/hype-relative-perf) — HYPE relative-performance view, kept beside the other hl.eco pages.
- [AQA v2 reserve-yield scenario model](https://hl.eco/stables) — hl.eco multiplies live Hyperliquid USDC supply by an adjustable reserve-yield assumption and the stated approximately 90% protocol share to estimate potential HYPE buying. The page labels the output illustrative, says the AQA rate lacks a public read path, and showed treasury routing had not begun. _(via @guru__hl)_
- [Liquid Terminal ecosystem directory](https://liquidterminal.xyz/ecosystem/project) — Hyperliquid ecosystem directory that overlaps with hl.eco but exposes a different research view.
- [Hyperliquid trades exporter](https://trade-export.hypedexer.com/?v=1) — Trade-export utility for Hyperliquid accounts.
- [View a Hyperliquid address without connecting](https://x.com/janklimo/status/2020024099498758451) — Frontend URL pattern that opens any Hyperliquid address directly without connecting a wallet. _(@janklimo)_
- [What Hyperliquid leaderboard PnL actually measures](https://x.com/alex_hunter20/status/2102003574331130349) — Quotes a detailed attempt to distinguish protocol contracts, market makers, token deployers, long-term holders and directional traders among the largest displayed accounts. Useful methodology; the account identities, holdings, hedges and PnL figures are unverified. _(@alex_hunter20 quoting @MarketsAlpha)_
- [Hyperliquid top-trader persistence analysis](https://x.com/chase_mew_/status/2079212386532139461) — Author-reported study of 935,000 wallets finding very weak month-to-month persistence among top-decile traders; a warning against naive copy-trading, with methodology still to verify. _(@chase_mew_)_
- [Hyperliquid priority-fee trader case study](https://x.com/VietnamPenguin/status/2073091585248514536) — Wallet-level observation linking unusually high priority-fee spend with strong reported P&L and a possible latency edge; a lead for replication, not proof of a durable strategy. _(@VietnamPenguin)_
- [Cherry-picked wallets can manufacture trader credibility](https://x.com/vvsmoe/status/1921243497635471837) — The classic split-signal scam applied to on-chain performance: launch or hedge many wallets, publicize the spectacular survivor, then monetize the appearance of skill. A diligence checklist (verify ownership, realized PnL, off-platform hedges, transfers, referral incentives and token promotion), not evidence that the named wallet used this scheme. _(@vvsmoe)_
- [Hyperdash copytraders](https://hyperdash.com/explore/copytraders) — Copy-trader research view.
- [Mirrorly leaderboard](https://portal.mirrorly.xyz/leaderboard) — A second performance leaderboard, kept for comparison with Hyperdash.

## Trading edge, process and psychology

Process principles and one-liners on where edge comes from, when to exit, how to behave after a big move, and how to stop a portfolio balance running your self-image. [[Evergreen Lessons from X - September 2026]] synthesises the edge, boredom, hot-path and prepayment entries with their evidence limits. See [[Trading Psychology]], [[Trading Philosophy]] and [[Behavioral Finance]].

- [Name the source of your trading edge](https://x.com/frankdegods/status/2103860364089708742) — Four prompts: informational advantage, better analysis, behavioural discipline, and quantitative or execution advantage. For each trade, name the proposed edge and the result that would disprove it. A journal heuristic; the categories overlap and do not establish positive returns. _(@frankdegods)_
- [Do not manufacture trades to relieve boredom](https://x.com/lobcrunchwave/status/2103836826729623943) — Judge a trade against the setup and process rather than the need for stimulation; if only your mood changed, record that before adding risk. A process principle from a post quoting [[jimtalbot]], not evidence that any particular strategy is profitable. _(@lobcrunchwave)_
- [Economic-service filter for trading systems](https://x.com/0xaporia/status/2069883507321573760) — Ask what economic service a strategy provides, as a first-principles filter for separating grounded edges from pattern noise. _(@0xaporia)_
- [Structural sources of retail trading edge](https://x.com/CryptoCred/status/1913485279706677328) — Five possible small-account advantages: low market impact, a flexible time horizon, tolerance for marked volatility, freedom to concentrate, and the option to stay in cash. These freedoms only create opportunity; they do not rescue weak selection, excessive leverage, concentration error or poor risk management. _(@CryptoCred)_
- [Trading as a business](https://x.com/TheFlowHorse/status/2024876407059263690) — Long-form piece on managing costs, profits and position additions as a professional process. _(@TheFlowHorse)_
- [Exit decisions must be forward-looking](https://x.com/0xaporia/status/2031360073700724823) — Why arbitrary profit-taking can destroy positive expectancy. _(@0xaporia)_
- [The psychological risk of selling the top](https://x.com/zhusu/status/2018225130003148870) — Perfectly timing an exit can create overconfidence and premature re-entry. _([[Zhu Su]], @zhusu)_
- [Profitable execution matters more than calling exact tops and bottoms](https://x.com/blknoiz06/status/2091151900729115029) — A correct turning-point call can still lose money through sizing, path, leverage or exit errors, while a mediocre entry can support an excellent trade. Treat public top-and-bottom predictions as a status game separate from a strategy with defined exposure, invalidation, costs and exits. The [original post](https://x.com/0xaporia/status/2091034462561706287) is by @0xaporia. _(@blknoiz06)_
- [Trading psychology after a large move](https://x.com/CryptoCred/status/2090201763987279967) — Warns against revenge shorts, oversized late entries, exact-retest narratives, binary exposure, paralysis and five-minute overtrading after missing or opposing a major move. The reset is to restate the signal, trade type and horizon, invalidation, volatility and position size with fresh eyes; process guidance, not a reason to copy the example trade. _(@CryptoCred)_
- [Leverage accelerates the deadline for being right](https://x.com/xydotdot/status/2091158742523863538) — Leverage compresses the time allowed to reach a financial target: raising it narrows the acceptable path and timing until being directionally right is no longer enough, and social feeds distort the perceived clock by overrepresenting fast outliers. Risk-process guidance, not a safe-leverage formula. _(@xydotdot)_
- [Do not index self-worth to a portfolio balance](https://x.com/umar_xbt/status/2050936145161208229) — Relays Flood's reflection that tying identity to a fluctuating number makes ownership psychologically controlling rather than useful. A personal lesson, not clinical evidence, but a durable reason to separate portfolio marking from self-evaluation. _(@umar_xbt)_
- [Ex-Goldman trader on trading and personal life](https://x.com/lyemcfly/status/2098904929599467823) — Clip relating trading behaviour to personal behaviour. Anecdotal perspective, not trading advice. _(@lyemcfly quoting @tradertheory)_
- [The wrong lesson from The Big Short](https://x.com/Evan_ss6/status/2067033343216984194) — Durable wealth usually comes from surviving drawdowns and participating in recoveries, not from romanticizing rare crash bets. _(@Evan_ss6)_
- [Druckenmiller's 60 million Frenchmen thread](https://x.com/MacroOps/status/1276205912013840384) — [[Stanley Druckenmiller]]'s market-feedback framework for knowing when to respect or fade price action. _(@MacroOps)_

## Risk, sizing, statistics and backtesting

Position-sizing arithmetic, Taleb-derived statistics for fat tails, prediction-market maths, and the ways backtests fool you. See [[Risk Analysis]], [[Leverage]] and [[Trading Evidence and Review Framework]].

- [Size notional from risk and stop distance](https://x.com/k0ifishfarmer/status/1895877387818041622) — The reusable relation is notional ≈ planned loss budget ÷ stop distance, which estimates risk only if the stop executes near its intended level. The source's $500 example risks 5% of the portfolio, an unusually aggressive per-trade budget; posted margin and leverage do not define loss, and simple 1÷leverage liquidation estimates ignore maintenance margin, fees, slippage, gaps, cross-margin effects and venue rules. _(@k0ifishfarmer)_
- [Psychology of position sizing](https://x.com/lord_fed/status/2023022762261098737) — Long-form resource on why size can matter more than entry, thesis or stop. _(@lord_fed)_
- [Insurance is chiefly protection against unaffordable variance](https://x.com/AlecTorelli/status/2089548439101362213) — Distinguishes positive expected value from acceptable risk: rejecting a small favourable bet can be irrational when the loss is affordable, while insurance can remain rational when a low-probability loss would be ruinous. Incomplete on its own: risk aversion, legal requirements, correlated losses, liquidity, insurer solvency, exclusions and peace of mind also matter. _(@AlecTorelli)_
- [Standard deviation versus mean absolute deviation](https://x.com/Dipper_pol/status/2069514655056400724) — Summary of [[Nassim Taleb]]'s distinction between mean absolute deviation and standard deviation: squaring observations gives rare extremes disproportionate weight. _(@Dipper_pol)_
- [Estimate tail exponents rather than means in power-law data](https://x.com/Dipper_pol/status/2061153987198398961) — Taleb's point that in sufficiently heavy-tailed power-law settings mean estimation may be unstable and the tail index α can be more useful; estimator behaviour depends on the model and assumptions. A pointer to the talk, not a substitute for the underlying statistics. _(@Dipper_pol)_
- [AI backtesting: remove clerical friction, preserve judgment](https://x.com/0xaporia/status/2092917529597321394) — Separates repetitive implementation work from the learning needed to recognise look-ahead bias, overfitting and path dependence. Removing losing weekdays after seeing the results, or repeatedly asking an agent to improve the same historical sample, can fit noise rather than find a robust edge: keep the evaluation protocol separate from parameter tuning, test on unseen periods and account for execution costs and risk. Complements the Stanford pairs-trading note below; the quoted profit screenshot is not evidence of a reproducible strategy. _(@0xaporia)_
- [Stanford pairs-trading study: window sensitivity and overfitting](https://web.stanford.edu/class/msande448/2020/Final_reports/gr1.pdf) — Student study of high-frequency mean reversion showing how changing the rolling window can flip results on the same stock and day. A negative-result and overfitting lesson, not the source post's "live trading playbook" framing; parameter sensitivity is something to test out of sample, not a guarantee of an edge. [Original bookmark](https://x.com/RuujSs/status/2081397093919236257). _(via @RuujSs)_
- [Funding-rate signals are weaker than the intuitive story](https://x.com/OctopusTakopi/status/2085776377366864050) — The linked research examined per-contract normalization, open interest, price action, cross-venue aggregation and carry portfolios. Raw funding was weak for daily price prediction; OI conditioning, high-funding-plus-falling-price tests, composites, cross-venue weighting, volatility sizing, hedging and settlement sniping did not add robust alpha, and the stronger carry results were fragile and concentrated in 2020–2021. Skeptical research rather than a strategy; the linked repository is currently unavailable. See [[Funding Rates]]. _(@OctopusTakopi)_
- [Math behind prediction-market arbitrage](https://x.com/RohOnChain/status/2018041418573623617) — Technical explainer linking arbitrage bots to fully-corrective Frank-Wolfe and Bregman projection. _(@RohOnChain)_
- [Stanford Bayes lecture for prediction markets](https://x.com/polydao/status/2037928641384894577) — Connects a free university lecture to Bayesian market-trading formulas. _(@polydao)_

## Flows, liquidity and microstructure

How order flow, open interest, MEV, forced sellers and listing mechanics move prices, plus two 2026 episodes read as market-structure hypotheses. See [[Exchange Microstructure]], [[Flow Analysis]], [[Positioning]] and [[Liquidations]].

- [Buy-the-dip flows can fatten the left tail](https://x.com/Cheshire_Cap/status/2040114149225648431) — Persistent shallow-dip demand can exhaust buyers before a deeper forced unwind. _(@Cheshire_Cap)_
- [Building a falsifiable forced-seller hypothesis](https://x.com/TheOtherParker_/status/2019587226871447687) — Case study combining spot and options volume, cross-asset behaviour, leverage clues and a future 13F check into a falsifiable market hypothesis. _(@TheOtherParker_)_
- [Open-interest interpretation beyond OI 101](https://x.com/TheFlowHorse/status/2029268485155455101) — Educational thread on the often-omitted details of crypto open interest. _(@TheFlowHorse)_
- [Separate liquidity rebounds from fundamental repricing](https://x.com/0x_Kun/status/1914916353745805788) — A sharp first move off a low-liquidity bottom can reflect a sentiment and positioning change rather than improved fundamentals. Use volume and market profile to distinguish a tradable reflex rally from durable outperformance, and remember that thin liquidity accelerates both directions. _(@0x_Kun)_
- [Anatomy of a record Ethereum MEV block](https://x.com/bh359/status/2032195231681241218) — Transaction-level accounting of order routing, backruns, builder fees and proposer rewards. _(@bh359)_
- [MEV landscape and JaredFromSubway interview](https://x.com/knveth/status/1926070323230765150) — Long-form reference on extraction games and niche strategy in crypto. _(@knveth)_
- [Prediction markets as public information leakage](https://x.com/Citrini7/status/2017058591128097270) — Informed trading can surface leaked information publicly instead of reserving it for a few funds. _(@Citrini7)_
- [Why a Nasdaq IPO may not trade at the opening bell](https://x.com/shadddowfax/status/2065394412109050137) — Nasdaq's [official process](https://www.nasdaq.com/solutions/listings/markets/americas/ways-to-list/nasdaq-ipo-execution) uses a minimum ten-minute Display-Only Period followed by an indeterminate pre-launch phase coordinated with the stabilization agent before the IPO Cross and continuous trading. The post's SpaceX framing and historical timestamps are unverified. _(@shadddowfax)_
- [Situational Awareness portfolio transfer and liquidity-risk hypothesis](https://x.com/ThinkingUSD/status/2082852745015419382) — After [Axios reported](https://www.axios.com/2026/07/30/ai-hedge-fund-situational-awareness-citadel) that the AI-focused fund sold its public-equity portfolio to Citadel following heavy losses, Flood sketched a scenario in which an informed liquidity provider could fund a concentrated momentum vehicle, sell into its buying, anticipate risk-limit liquidation and later repurchase the block. The portfolio transfer is reported; the setup is an unverified hypothetical. Nothing here shows that Citadel, or any unnamed firm, became an LP, engineered the pressure, knew the fund's limits or manipulated the liquidation. _(@ThinkingUSD)_
- [Claim that 2026 US market moves were orchestrated](https://x.com/solo_levelingx/status/2085006653649297702) — Links Nasdaq weakness, the Situational Awareness liquidation, repeated geopolitical headlines, oil reversals, Nvidia commentary and later equity rallies into a theory of coordinated market manipulation. A contemporaneous trader-sentiment hypothesis, not a finding: the post supplies no order-level evidence, causal identification, communications or proof that officials, market makers, Citadel, Nvidia or insiders coordinated the moves. _(@solo_levelingx)_

## Technical setups and chart reading

Chart-based heuristics: trend filters, relative strength, a stock setup and its postmortem, and cycle-position tells. Bias checks, not proof of persistent alpha. See [[Market Cycles]].

- [Market-cycle top-versus-bottom signals](https://x.com/himgajria/status/2080790028062724540) — Contrasts narrative dominance and unstable liquidity near tops with renewed attention to fundamentals and higher-conviction decisions near bottoms. _(@himgajria)_
- [Side-by-side relative-strength scanning](https://x.com/blknoiz06/status/2066744897659445318) — Compare altcoin and Bitcoin charts in parallel, looking for an asset that holds higher lows while Bitcoin makes lower lows; the divergence can identify potential leaders when broad weakness subsides. _(@blknoiz06)_
- [Trend filters and cross-sectional momentum](https://x.com/TheFlowHorse/status/2057791518593667170) — Horse argues that moving averages can be useful; the specific 50-day Bitcoin trend filter and cross-sectional momentum examples come from Ethan Kho quoting Leigh Drogen. Bias checks for avoiding mature downtrends and finding leaders, not proof of universal or persistent alpha. _(@TheFlowHorse)_
- [SNDK extension and ORB setup](https://x.com/LoneStockTrader/status/2017431346478780591) — Compact technical setup using ATR extension from the 50-day average plus an earnings gap and ORB entry. _(@LoneStockTrader)_
- [Why the SNDK earnings gap faded](https://x.com/Robleytrades/status/2017454600433910227) — Postmortem linking extreme trend extension, profit-taking liquidity and call-hedge unwinds. _(@Robleytrades)_
- [“Fixed the alt charts”](https://x.com/btc_charlie/status/2097781546157518904) — Visual market thesis whose meaning depends on the attached chart; a time-stamped opinion, not a signal or recommendation. _(@btc_charlie)_

## Screeners, charting and order-flow tools

Market-data utilities: screeners, chart overlays, footprint and DOM history, options Greeks, and brokerage or on-chain data for agents. Research tools; check data latency, contract mapping and calculation correctness before trusting a number for execution. See [[Markets - Tools]] and [[Flow Analysis]].

- [Orion Binance and Hyperliquid market screener](https://x.com/awawat/status/2094983005546881185) — [Orion](https://screener.orionterminal.com/) exposes exchange filters, open-interest spikes, large moves, funding, sorting and alerts. Useful for monitoring. _(@awawat)_
- [Cryexc Hyperliquid order overlays](https://x.com/josedonato__/status/2030683232975347787) — Market-data tool combining historical charts with limit, TP, stop and liquidation levels. _(@josedonato__)_
- [Cryexc](https://cryexc.josedonato.com/app) — The Cryexc app itself, from the same author as the overlay post above.
- [Free footprint and DOM history tool](https://x.com/josedonato__/status/2017626806828814589) — Trading utility that backfills order-flow history directly from Binance before a chart is opened. _(@josedonato__)_
- [Free multi-chart trading workspace](https://x.com/avgcryptoguy/status/2019857062101164528) — Practical alternative for viewing multiple charts without a paid TradingView subscription. _(@avgcryptoguy)_
- [TapeSurf multi-exchange order flow](https://x.com/cryptobing280/status/2024875322210922785) — Tool for viewing aggressive BTC buying and selling across exchanges. _(@cryptobing280)_
- [Key Levels MMT](https://app.mmt.gg/) — Market key-levels tool.
- [TradingView prices and strategy-backtesting tool](https://x.com/tom_doerr/status/2098946410079002681) — Tool lead claiming real-time TradingView prices, indicator values and automated strategy backtesting. _(@tom_doerr)_
- [Thalex combo Greeks](https://thalextech.github.io/combo-greeks/) — Options-combination Greeks calculator.
- [paste.trade](https://paste.trade/) — Trade-sharing utility; never paste credentials or private account data.
- [Public market data via MCP](https://github.com/PublicDotCom/publicdotcom-mcp-server) — Jason Luongo's [Grok Bot walkthrough](https://x.com/JasonL_Capital/status/2093130738371539046) connects a Public brokerage account to quotes, option chains, Greeks and multi-leg strategy quotes (see [[Grok Bot]]). The official server documents these read tools but also exposes order-placement and cancellation tools, so connecting it is not inherently read-only: keep credentials in secure configuration, limit tools to the intended scope and require separate approval for trades. [Public's quote endpoint](https://public.com/api/docs/resources/market-data/get-quotes) provides live market data; the thread's free-access claim may not apply to every account. _(@JasonL_Capital)_
- [Nansen CLI on-chain forensics for agents](https://x.com/ASvanevik/status/2022151285416636672) — Workflow for giving an agent access to Nansen's on-chain investigation tools. _(@ASvanevik)_
- [Paradigm prediction-market explorer](https://x.com/notnotstorm/status/2019111720325902820) — Tool for exploring Polymarket and Kalshi data across volume, open interest and time. _(@notnotstorm)_

## Dashboards, news and market utilities

General market dashboards, news and event monitors, session-hours and portfolio tools, and one stablecoin transfer interface.

- [t3rminal markets news](https://t3rminal.xyz/) — Markets-news dashboard.
- [World Monitor](https://www.worldmonitor.app/) — Global-event monitoring dashboard.
- [Custom geopolitical trading dashboard](https://x.com/ranyi1115/status/2030245125830676918) — Product reference joining maps, news, TV, economic events and market narrative. _(@ranyi1115)_
- [Global Market Hours](https://loris.tools/market-hours) — Market-session-hours utility. See [[Exchange Hours]].
- [Google Finance beta](https://www.google.com/finance/beta) — Broad market overview.
- [Fey](https://fey.com/) — Portfolio and market-research product.
- [Citrindex](https://www.citrindex.com/dashboard) — Project and markets dashboard.
- [STRC.live](https://strc.live/) — Dashboard focused on a single instrument, STRC.
- [The Everything Chart](https://levels.io/the-everything-chart) — Macro and product-thinking visualization from levels.io.
- [Circle's consumer USDC Bridge](https://bridge.usdc.com/) — Circle's non-custodial interface uses CCTP's native burn-and-mint mechanism rather than pooled wrapped liquidity and displays the quoted fee, time, recipient and received amount before wallet connection. Routes and fees are live inputs; check them and the recipient address before every transfer. _(@USDC)_

## AI cycle, semiconductors and valuation

Bull, bear and bubble-test arguments on AI infrastructure spending, chip and memory cycles, power constraints and what a slowdown would do to valuations. Scenarios and attributed theses; none is a verified forecast. See [[AI Infrastructure Economics]] and [[Equities]].

- [AI Semiconductor Endgame 2026 (III)](https://x.com/fi56622380/status/2093040177711329673) — Fin's essay argues that AI infrastructure demand has two drivers, adoption and rising token usage per user, and that the next growth leg is non-programmers using coding-agent infrastructure for ordinary knowledge work. It distinguishes visible compute commitments from uncertain future revenue, expects eventual overbuilding and margin pressure, and argues that open models can alter profit distribution without ending aggregate compute growth. Questions worth keeping: which workflows generate paid demand, where integration and verification bottlenecks remain, and whether cash generation can keep pace with capacity commitments. The company revenue, capex, market-share, acquisition and timing assertions are the author's claims, and the optimistic 2027–2028 conclusion is a scenario. [Jukan's recommendation](https://x.com/jukan05/status/2093147931453055355). _(@fi56622380, via @jukan05)_
- [AI boom without broad productivity gains](https://x.com/jeffreyleefunk/status/2074285956002402653) — Contrarian thesis that visible gains remain concentrated in hyperscalers and semiconductors; a repricing scenario, not settled evidence. _(@jeffreyleefunk)_
- [AI valuation sensitivity to slower model progress](https://x.com/quantian1/status/2074302524283134122) — Compact downside scenario: if frontier capability gains flatten sharply, current AI equity valuations may require a severe reset. _(@quantian1)_
- [AI hyperscaling and bond-market thesis](https://x.com/izakaminska/status/2098871673793478905) — Speculative argument that efficient models could force a shift away from hyperscaling and release liquidity toward US Treasuries. Macro commentary, not a verified forecast. _(@izakaminska)_
- [A broad AI-disappointment and on-chain-finance thesis](https://x.com/goodalexander/status/2089906200817066108) — Argues that AI spending may produce slower economic and corporate returns than valuations imply while accelerating hacking, addictive media, labour displacement and political conflict, then expects fiscal stress, capital flight, stablecoins, tokenized debt, FX and leveraged on-chain markets to benefit crypto infrastructure. A sprawling scenario map, not a forecast: many premises are speculative, politically loaded or unsupported, and each needs testing on its own (AI productivity, capex and margins, rates, regulation, security, tokenized-asset adoption, on-chain fee growth). _(@goodalexander)_
- [Bubble diagnosis needs a reflexive misconception](https://x.com/citrini/status/2052852449841393858) — Distinguishes expensive assets from a bubble in the Soros sense: a real trend and a misconception about it reinforce one another until perception and fundamentals cannot remain aligned. For an AI-infrastructure top call, the burden is to name the misconception and the catalyst that breaks it; a thesis test, not proof that current prices are justified. _(@citrini)_
- [Citrini's AI Phase 2 framework](https://www.citriniresearch.com/p/thematic-primer-artificial-intelligence) — The April 2025 primer shifts the investment question from scarce infrastructure toward application adoption and monetization, summarizing defensibility as data plus distribution → design → deployment. A historical thematic framework; the paid portfolio conclusions, company calls and assumptions about compute abundance need a current refresh. _(@citrini)_
- [Citrini hype-cycle framework](https://x.com/Citrini7/status/2022150778970845320) — Reusable model of how investors shift between present fundamentals and imagined future value across a technology cycle. _(@Citrini7)_
- [Agentic-utility public-equity basket](https://x.com/citrini/status/2039761620272873839) — Out-of-consensus research identifying infrastructure businesses that could benefit from agent-driven internet usage. _(@citrini)_
- [Memory equities can discount capacity before pricing peaks](https://x.com/jukan05/status/2078462124486283755) — Asks whether shares can peak three or four quarters before memory prices as announced fab capacity enters the horizon. SK hynix's [Yongin investment](https://news.skhynix.com/new-facility-investment-for-yongin-semiconductor-cluster/) and [June 2026 supply explanation](https://news.skhynix.com/fact-05/) support tracking the capacity response, not the post's market-timing conclusion. A watchlist scenario: follow capex, clean-room and wafer-start timing, product mix, utilization, contract-price revisions, and whether HBM's larger wafer requirements absorb nominal capacity. _(@jukan05)_
- [Power pricing and data-centre economics primer](https://power2026.ai/) — A former power-and-gas quant presents electricity generation, transmission, interconnection, congestion, contracts and regional pricing as central constraints on AI data-centre buildout. A practitioner primer rather than a neutral source. [Original bookmark](https://x.com/neelsomani/status/2084719248048529848). _(via @neelsomani)_

## Macro, geopolitics and sovereign debt

Treasury and gilt stress, geopolitical repricing, inflation measurement and wealth statistics. Attributed hypotheses and record-verification leads. See [[Macro Trading]], [[Rates]] and [[Economics]].

- [Bessent, Druckenmiller, and Treasury-market dispute](https://x.com/EpsilonTheory/status/2094764252976304294) — A reaction clip frames Scott Bessent as mocking investors who opposed bond-buyback policy and allegedly lost money shorting Treasuries. A policy-and-positioning lead; the clip does not establish the named firms' actual positions or losses. See [[Stanley Druckenmiller]]. _(@EpsilonTheory)_
- [UK long-gilt stress and bankruptcy rhetoric](https://x.com/philippilk/status/2094692355605516614) — Combines a high 30-year gilt yield with Britain's large holdings of US Treasuries and predicts an imminent blow-up. Keep the yield and cross-border balance-sheet questions as a macro watch item, but "bankruptcy" is unsupported rhetoric: sovereign financing risk depends on debt maturity, currency denomination, fiscal path, inflation, demand, central-bank policy and market functioning, not one screenshot. _(@philippilk)_
- [Geopolitical risk repricing through history](https://x.com/Citrini7/status/2030369170571857987) — Financial-history essay on markets ignoring geopolitical risk until the regime changes. _(@Citrini7)_
- [Ray Dalio on the post-1945 order](https://x.com/leshka_eth/status/2023007079687147534) — Pointer to a substantial macro essay on interpreting geopolitical headlines as market signals. _(@leshka_eth)_
- [The Strip vs the Strait cycle essay](https://x.com/abcampbell/status/2030697258614935831) — Historical-cycle framing for analysing energy shocks and possible market-cycle endings. See [[Oil]]. _(@abcampbell)_
- [Hidden inflation through quality dilution](https://x.com/levelsio/status/1923842778812887168) — Ingredient downgrades and cheaper service inputs as a form of lived inflation that can occur alongside higher sticker prices. Anecdotes, not a macro measure; prompts to examine quality adjustment, shrinkflation, service levels and substitution, not proof that official inflation data is false. _(@levelsio)_
- [Nominal wealth can rise while real purchasing power falls](https://x.com/0x_Kun/status/2091138535357370404) — Measure wealth and income against domestic prices, imported goods, exchange rates and opportunity costs rather than nominal currency alone. The post's stronger claims, that fiat crises necessarily end in hyperinflating asset highs and that crashes occur only in healthy markets, are unsupported generalizations; inflation, devaluation, recession, defaults, capital controls and asset-price declines can occur in different combinations. _(@0x_Kun)_
- [UK millionaire counts depend on the definition](https://x.com/PolitlcsUK/status/2082025707471855690) — Politics UK reports 442,000 millionaires in 2025, down from more than one million in 2021, with no methodology in the post. That conflicts with the [UBS Global Wealth Report 2026](https://www.ubs.com/content/dam/assets/wm/static/gwr/global-wealth-report-en-2026.pdf), which counts net wealth above USD 1 million, says the UK added more than 43,000 such people during 2025, and places its total above two million. Currency, household versus individual unit, residence, primary-home treatment, inflation adjustment and wealth threshold can completely change a "millionaire" series; do not use the 442,000 figure until its original definition and source are identified. _(@PolitlcsUK)_

## Credit, mortgages and property

Mortgage mechanics, a UK property-loss example, private-credit defaults and an unusual collateral case. See [[Credit]].

- [Misleading Bank of England mortgage explanation](https://x.com/TJiMTS/status/2095425688698290214) — Argues that a bank borrowed the mortgage principal from the Bank of England in 2021 and simply charges a higher rate in 2027. A prompt to understand refinancing pain, not the mechanics: commercial-bank lending creates a deposit, and mortgage pricing also reflects Bank Rate expectations, deposit and wholesale funding, hedging, capital, credit, term, competition and margin. _(@TJiMTS)_
- [Mortgage prepayment is an option with conditions](https://x.com/liensofnewyork/status/2104717103508967657) — The contractual ability to repay early lets a borrower refinance after rates fall while creating prepayment risk for the lender; its value depends on fees, penalties and the ability to qualify for a new loan. A [Federal Reserve staff paper](https://www.federalreserve.gov/pubs/feds/2012/201222/201222pap.pdf) explains the option in US fixed-rate conforming mortgages, and the [CFPB](https://www.consumerfinance.gov/ask-cfpb/what-is-a-prepayment-penalty-en-1957/) confirms some loans charge prepayment penalties. Keep the concept without the post's spread figures or a universal buy-now rule. _(@liensofnewyork)_
- [North London flat price-loss example](https://x.com/ukhpinfo/status/2095058545028780063) — A property bought for £2.36 million in June 2020 is said to have sold for £1.75 million in July 2026, a roughly 26% nominal loss. Rightmove supports the 2020 transaction; the 2026 figure is a property-record lead pending completion data and confirmation that the comparison is the same interest, condition and transaction type. _(@ukhpinfo)_
- [MFS and Atlas private-credit defaults](https://x.com/UnicusResearch/status/2027845811317465259) — Private-credit case study involving warehouse financing, alleged double pledging, defaults and litigation. _(@UnicusResearch)_
- [Parmigiano Reggiano as bank collateral](https://www.credem.it/content/credem/it/imprese-e-professionisti/sostenere-l-impresa/agricoltura/pegno-rotativo-formaggio.html) — Italian lenders use maturing PDO cheese wheels as collateral, matching credit to an inventory asset that needs a long ageing period before sale; the bank can monitor, maintain, value and sell standardized stock if a borrower defaults. A concrete asset-backed-lending case; the wheel counts, loan totals, advance rate and heat-risk figures in the [original bookmark](https://x.com/TrungTPhan/status/2086871039141908916) are point-in-time estimates rather than universal contract terms. _(via @TrungTPhan)_

## Crypto industry structure and narratives

Where crypto's speculative energy went, what institutionalization did to it, stablecoin and tokenization scenarios, and one policy primary source. See [[Crypto Trading]] and [[Markets]].

- [What went wrong with crypto](https://x.com/krugermacro/status/2019667263494975622) — Descriptive inventory of structural, flow, political, innovation, supply and narrative pressures. _(@krugermacro)_
- [Why speculation moved from crypto to AI](https://x.com/CryptoCred/status/2021553644764619217) — Industry essay on institutionalization, extraction, lost inefficiency and AI opportunity cost. _(@CryptoCred)_
- [Why crypto liquid funds struggle against venture funds](https://x.com/0xLouisT/status/1894798762704273761) — Attributes the imbalance to liquid volatility and bottom-timed redemptions, venture marks that conceal interim volatility, easier "tech VC" framing for allocation committees, paper TVPI that helps raise the next fund, and the difficulty of beating Bitcoin as a liquid benchmark. A practitioner thesis, not comparative performance evidence. _(@0xLouisT)_
- [Bitcoin adoption versus cypherpunk practice](https://x.com/BobLoukas/status/1909958006789267635) — Custodial exposure, paper claims and debt-funded corporate holdings can increase dependency even though the protocol remains open. A normative counterweight separating price adoption from self-custody and peer-to-peer resilience, not evidence that the protocol itself has changed. _(@BobLoukas)_
- [Executive order establishing the U.S. Strategic Bitcoin Reserve](https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/) — The March 2025 order separates a Bitcoin reserve from a broader digital-asset stockpile, initially capitalizes both with forfeited assets, directs that reserve BTC not be sold, and asks Treasury and Commerce to consider budget-neutral acquisition strategies. A policy primary source, not evidence of subsequent holdings, implementation or future purchases. _(via @balajis)_
- [Tokenization, stablecoins, CBDCs, privacy, and on-chain finance thesis](https://x.com/goodalexander/status/2100700327003467985) — Long speculative framework linking sovereign debt demand, stablecoin policy, tokenized assets, private settlement, ZK systems, institutional finance and agentic trading. Scenario analysis, not an investment forecast; many of its fiscal, regulatory, adoption, market and technical claims require primary data. _(@goodalexander)_
- [The Machinery of Modern Finance](https://x.com/brandonkumar/status/2022307085665374701) — Long-form thesis on why the next decade of financial innovation could exceed the previous fifty years. _(@brandonkumar)_
- [Ethena Pay stablecoin-based consumer-finance launch](https://x.com/ethena/status/2094757121959280641) — Ethena advertises free transfers and onramps, no FX markup, up to 5% card cashback and up to 6% rewards on dollar balances. Its own terms show that rates vary by tier and spend, rewards and eligibility can change, cashback exclusions apply, balances involve crypto and self-custody risks, and this is not equivalent to an insured bank deposit. _(@ethena)_
- [Zcash hindsight commentary](https://x.com/notcelon/status/2096555732543910320) — The author says the Zcash trade looked obvious in retrospect but was avoided because of its public associations. Market-culture ephemera, not an investment thesis. _(@notcelon)_

## Equity theses, sector watchlists and reading

Annual trade lists, valuation checklists, sector hypotheses and a trader reading list. Diligence seeds, not copyable portfolios. See [[Equities]], [[Sector Rotation]] and [[Traders Directory]].

- [Citrini 26 Trades for 2026](https://x.com/Citrini7/status/2026754330129248257) — Full annual market report from [[Citrini Research]]. _(@Citrini7)_
- [Framework for spotting contrarian value](https://x.com/goodalexander/status/2032143213344276528) — Valuation checklist spanning cash yields, peers, GARP, growth and margins. _(@goodalexander)_
- [From crypto narratives to thematic ETFs](https://x.com/get_truenorth/status/2059615153868480928) — Proposes transferring crypto traders' narrative and sector-rotation instincts to thematic ETFs rather than single-stock selection; the framework is reusable, but every cited fund's holdings, liquidity, valuation and performance figures are time-sensitive. _(@get_truenorth)_
- [Robotics component-exposure watchlist](https://x.com/aleabitoreddit/status/2071730699363881241) — Connects humanoid platforms with upstream exposure in harmonic drives and precision sensors; diligence seeds, not a copyable portfolio. _(@aleabitoreddit)_
- [GLP-1 adoption as an apparel-demand hypothesis](https://x.com/Geiger_Capital/status/2092269663983980730) — Attributes Victoria's Secret's claimed one-year share-price rise to a secondary effect of GLP-1 use: changing body sizes and shopping behaviour could affect apparel demand. The post supplies no attribution analysis, and share-price appreciation alone cannot separate that story from company execution, valuation changes, marketing or broader market moves. _(@Geiger_Capital)_
- [Lab-grown diamonds as a commoditization bear case](https://x.com/Saul_Sadka/status/2086495710568947830) — Argues that falling production costs and physical equivalence will keep compressing lab-grown prices and weaken the scarcity signal behind natural-diamond premiums. The attached series shows divergent 2020–2026 retail trends but combines different data methods, and future taste, natural provenance premiums, supply cuts, branding, resale liquidity and producer discipline remain uncertain; a market-structure scenario, not a price forecast or proof that natural diamonds become worthless. _(@Saul_Sadka)_
- [Next Market Wizards trader list](https://x.com/gfc4/status/2024578201369162155) — Reading and research list of the traders included in the forthcoming book. _(@gfc4)_

## Related

[[X-Bookmarks]] · [[Hyperliquid]] · [[Market Performance Measurement]] · [[Risk Analysis]] · [[AI Infrastructure Economics]] · [[goodalexander]] · [[Trading Psychology]] · [[Evergreen Lessons from X - September 2026]] · [[Credit]] · [[Developer Resources]] · [[Exchange Microstructure]] · [[Trading Evidence and Review Framework]] · [[Liquidations]] · [[Leverage]] · [[Funding Rates]] · [[Flow Analysis]] · [[Positioning]] · [[Market Cycles]] · [[Macro Trading]] · [[Equities]] · [[Crypto Trading]] · [[Markets - Tools]] · [[TradeXYZ]] · [[Citrini Research]] · [[CryptoCred]] · [[TheFlowHorse]] · [[0xaporia]] · [[Stanley Druckenmiller]] · [[Zhu Su]] · [[jimtalbot]] · [[Nassim Taleb]]
