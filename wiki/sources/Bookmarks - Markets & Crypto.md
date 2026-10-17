---
title: Bookmarks - Markets & Crypto
type: source
domain: markets
summary: "Saved markets and crypto links by theme: Hyperliquid mechanics, trading process and risk, market tools, microstructure, and macro, credit and AI-cycle theses."
tags: [bookmarks, markets, crypto]
related: [X-Bookmarks, Hyperliquid, Trading Psychology, Leverage and Liquidations, Macro Trading]
sources:
  - snapshots/1792255578171-5cc0ab0dbdd1/bookmarks/Markets & Crypto.md
  - snapshots/1790804551519-1de9816cb631/bookmarks/Markets & Crypto.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
  - snapshots/1790106580663-33c2f5b6597a/bookmarks/Markets & Crypto.md
created: '2026-09-22'
updated: '2026-10-17'
review_status: archive
---

# Bookmarks - Markets & Crypto

Saved markets and crypto links: Hyperliquid mechanics, trading process and risk, market tools, microstructure, and macro, credit and AI-cycle theses. Most are X posts.

Saved posts and tools, described from their notes; the claims are the authors' own.

## Margin, borrowing and liquidation mechanics

See [[Leverage and Liquidations]] and [[Hyperliquid]].

- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — How BLP, LTV and borrow interest can liquidate even a delta-neutral account. _(@alex_hunter20)_
- [HYPE spot-plus-perp funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) — A delta-neutral funding trade; the author's [own correction](https://x.com/alex_hunter20/status/2095155500119945541) shows margin, borrow and basis can still liquidate it. _(@alex_hunter20)_
- [Hyperliquid manual borrows](https://x.com/HyperliquidX/status/2100838194317312446) — Portfolio-margin users can supply HYPE or BTC and borrow USDC or USDT at utilization-based rates. _(@HyperliquidX)_
- [Jeff Yan on Hyperliquid margin design, March 2025](https://x.com/chameleon_jeff/status/1900218435562578130) — Why address-based tiers are Sybilable and global margin inputs break predictable liquidation prices. Current rules: [margining docs](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining). _(@chameleon_jeff)_
- [HLP crash-profit research](https://x.com/RuizheJia/status/2020906838653604056) — Traces how HLP profited from two crashes, beyond the usual ADL explanation. _(@RuizheJia)_
- [How liquidation volume is counted](https://x.com/udiWertheimer/status/2018176455113351441) — Liquidation statistics count position notional, not posted collateral. _(@udiWertheimer)_
- [Bybit auto-deleveraging](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL) — How Bybit ranks and force-closes opposing positions when liquidation losses exceed insurance-fund limits. The [X article](https://x.com/i/article/1916529294441938945) adds a disputed MANEKI case. _(via @ltrd_)_
- [Tokenized-stock collateral on Nado](https://x.com/nadoHQ/status/2064199751923318789) — SPYx and QQQx wrappers count as collateral under one portfolio-margin system; venue-issued exposure, not shares. _(@nadoHQ)_

## Hyperliquid theses, HIP-3 and venue comparisons

See [[Hyperliquid]] and [[Exchange Microstructure]].

- [Permissioned and permissionless HIP-3 markets](https://x.com/wassielawyer/status/2095556242701983881) — Speculation that KYC venues and unregulated markets could coexist, linked by arbitrage; not an announced feature. _(@wassielawyer)_
- [TradeXYZ and HYPE value accrual](https://x.com/dnapway/status/2093506822414147637) — Asks whether RWA fees on TradeXYZ accrue to HYPE holders. The [TradeXYZ FAQ](https://docs.trade.xyz/support-and-faqs/faqs/trade-xyz-and-equities-xyz-markets) does not answer it. _(@dnapway)_
- [Discovery Bounds V2 for 24/7 perps](https://x.com/tradexyz/status/2032563867591520476) — TradeXYZ's explanation of dynamic off-hours price bands. _(@tradexyz)_
- [Lighter versus Hyperliquid](https://x.com/moonshiesty/status/2074267353278496878) — Favours continuous sequencing and an Ethereum escape hatch; a [counterpoint](https://x.com/davidtperk/status/2074288010753896846) flags information leakage during Lighter's speed bump. _(@moonshiesty)_
- [Hyperliquid retail-flow saturation bear case](https://x.com/defi_monk/status/1924139882181509471) — May 2025 thesis: on-chain retail taker flow is mostly captured; more growth needs harder HFT and institutional flow. _(@defi_monk)_
- [Hyperliquid product versus decentralization claims](https://x.com/hellojintao/status/2057508705969795563) — Satire using the JELLY intervention to separate real product traction from decentralization claims. _(@hellojintao)_
- [Syncracy's Hyperliquid thesis, March 2025](https://www.syncracy.io/writing/hyperliquid-thesis) — Frames Hyperliquid as a vertically integrated exchange and platform; written by a disclosed large HYPE holder. _(@RyanWatkins_)_
- [ASXN cross-venue liquidity dashboard](https://www.asxn.xyz/) — Compares order-book depth, spreads and slippage for Hyperliquid against major venues. See the [announcement](https://x.com/asxn_r/status/2085742057315094666) and [Jeff's post](https://x.com/chameleon_jeff/status/2087559428342215100). _(@asxn_r)_
- [HypeFlows](https://hypeflows.com/) — Charts Hyperliquid perp volume and open interest against eight named centralized exchanges. _(via @karl_0x)_
- [Keep the trading hot path simple](https://x.com/liquidated_hl/status/2104510929300037683) — 2023 messages attributed to Jeff: in-memory order book, simple feed handling, Rust or C++ only when measurement demands it. _(@liquidated_hl)_
- [Arcus](https://app.arcus.xyz/trade/spot/SHOP) — Trading venue; the link opens its SHOP spot market.

## Hyperliquid tools and leaderboards

Leaderboards mix protocol accounts, market makers and traders; see [[Trading Evidence and Review Framework]] before reading displayed PnL.

- [Hyperliquid](https://hyperliquid.xyz/) — The exchange itself.
- [Hyperliquid Fees](https://fees.6is.dev/) — Fee reference.
- [hl.eco financials](https://hl.eco/financials) — Protocol financials.
- [hl.eco relative performance](https://hl.eco/hype-relative-perf) — HYPE relative-performance view.
- [hl.eco reserve-yield model](https://hl.eco/stables) — Estimates potential HYPE buying from USDC supply times an adjustable reserve yield; labelled illustrative. _(via @guru__hl)_
- [Liquid Terminal](https://liquidterminal.xyz/ecosystem/project) — Directory of Hyperliquid ecosystem projects.
- [Hyperliquid trades exporter](https://trade-export.hypedexer.com/?v=1) — Exports an account's trade history.
- [View any Hyperliquid address](https://x.com/janklimo/status/2020024099498758451) — URL pattern that opens an address without connecting a wallet. _(@janklimo)_
- [What Hyperliquid leaderboard PnL measures](https://x.com/alex_hunter20/status/2102003574331130349) — Separates protocol contracts, market makers, deployers, holders and directional traders among the top accounts. _(@alex_hunter20)_
- [Top-trader persistence](https://x.com/chase_mew_/status/2079212386532139461) — Study of 935,000 wallets: top-decile traders barely persist month to month, a warning against copy-trading. _(@chase_mew_)_
- [Priority-fee trader case study](https://x.com/VietnamPenguin/status/2073091585248514536) — Links one wallet's high priority-fee spend to strong P&L and a possible latency edge. _(@VietnamPenguin)_
- [Cherry-picked wallets fake credibility](https://x.com/vvsmoe/status/1921243497635471837) — The split-signal scam on-chain: run many wallets, publicize the survivor, sell the appearance of skill. _(@vvsmoe)_
- [Hyperdash copytraders](https://hyperdash.com/explore/copytraders) — Copy-trader research view.
- [Mirrorly leaderboard](https://portal.mirrorly.xyz/leaderboard) — A second leaderboard, for comparison with Hyperdash.

## Trading edge, process and psychology

See [[Trading Psychology]] and [[Trading Philosophy]].

- [Name your edge](https://x.com/frankdegods/status/2103860364089708742) — Four edge types: information, analysis, discipline, execution. For each trade, name the edge and what would disprove it. _(@frankdegods)_
- [Do not trade out of boredom](https://x.com/lobcrunchwave/status/2103836826729623943) — Judge a trade by the setup, not the need for stimulation. _(@lobcrunchwave)_
- [Economic-service filter](https://x.com/0xaporia/status/2069883507321573760) — Ask what economic service a strategy provides, to separate real edges from pattern noise. _(@0xaporia)_
- [Structural retail edges](https://x.com/CryptoCred/status/1913485279706677328) — Small accounts get low impact, flexible horizons, volatility tolerance, freedom to concentrate and the option of cash. _(@CryptoCred)_
- [Trading as a business](https://x.com/TheFlowHorse/status/2024876407059263690) — Managing costs, profits and position additions as a professional process. _(@TheFlowHorse)_
- [Exits must be forward-looking](https://x.com/0xaporia/status/2031360073700724823) — Arbitrary profit-taking can destroy positive expectancy. _(@0xaporia)_
- [The risk of selling the top](https://x.com/zhusu/status/2018225130003148870) — A perfect exit can breed overconfidence and premature re-entry. _(@zhusu)_
- [Execution beats calling tops](https://x.com/blknoiz06/status/2091151900729115029) — A right call can still lose through sizing, leverage or exits. The [original post](https://x.com/0xaporia/status/2091034462561706287) is by 0xaporia. _(@blknoiz06)_
- [Trading psychology after a big move](https://x.com/CryptoCred/status/2090201763987279967) — Avoid revenge shorts, late oversized entries and overtrading; restate signal, horizon, invalidation and size with fresh eyes. _(@CryptoCred)_
- [Leverage shortens the deadline](https://x.com/xydotdot/status/2091158742523863538) — Higher leverage narrows the acceptable path until being directionally right is not enough. _(@xydotdot)_
- [Do not index self-worth to a balance](https://x.com/umar_xbt/status/2050936145161208229) — Relays Flood: tying identity to a fluctuating number makes ownership controlling rather than useful. _(@umar_xbt)_
- [Ex-Goldman trader on trading and life](https://x.com/lyemcfly/status/2098904929599467823) — Clip relating trading behaviour to personal behaviour. _(@lyemcfly)_
- [The wrong lesson from The Big Short](https://x.com/Evan_ss6/status/2067033343216984194) — Wealth comes from surviving drawdowns and joining recoveries, not from romantic crash bets. _(@Evan_ss6)_
- [Druckenmiller's 60 million Frenchmen](https://x.com/MacroOps/status/1276205912013840384) — [[Stanley Druckenmiller]]'s rule for when to respect or fade price action. _(@MacroOps)_
- [Build skill, not one lucky month](https://x.com/follis_/status/2108450863673213432) — A Cobie passage: study, retry and build a process that works over years instead of needing a quick win. _(@follis_)_

## Risk, sizing, statistics and backtesting

See [[Trading Philosophy]] and [[Leverage and Liquidations]].

- [Size from risk and stop distance](https://x.com/k0ifishfarmer/status/1895877387818041622) — Notional ≈ loss budget ÷ stop distance; margin and leverage do not define the loss. _(@k0ifishfarmer)_
- [Psychology of position sizing](https://x.com/lord_fed/status/2023022762261098737) — Why size can matter more than entry, thesis or stop. _(@lord_fed)_
- [Insurance protects against unaffordable variance](https://x.com/AlecTorelli/status/2089548439101362213) — Positive expected value is not the same as acceptable risk; insure against ruinous losses. _(@AlecTorelli)_
- [Standard deviation versus mean absolute deviation](https://x.com/Dipper_pol/status/2069514655056400724) — [[Nassim Taleb]]'s point: squaring gives rare extremes too much weight. _(@Dipper_pol)_
- [Estimate tail exponents, not means](https://x.com/Dipper_pol/status/2061153987198398961) — Taleb: in heavy-tailed data the mean is unstable and the tail index α is more useful. _(@Dipper_pol)_
- [AI backtesting without fooling yourself](https://x.com/0xaporia/status/2092917529597321394) — Let agents do the clerical work; keep judgment on look-ahead bias, overfitting and out-of-sample tests. _(@0xaporia)_
- [Stanford pairs-trading study](https://web.stanford.edu/class/msande448/2020/Final_reports/gr1.pdf) — Changing the rolling window flips results on the same stock and day: an overfitting lesson. [Bookmark](https://x.com/RuujSs/status/2081397093919236257). _(via @RuujSs)_
- [Funding-rate signals are weak](https://x.com/OctopusTakopi/status/2085776377366864050) — Raw funding barely predicts daily price; conditioning, composites and carry added no robust alpha. _(@OctopusTakopi)_
- [Prediction-market arbitrage maths](https://x.com/RohOnChain/status/2018041418573623617) — Links arbitrage bots to Frank-Wolfe and Bregman projection. _(@RohOnChain)_
- [Stanford Bayes lecture for prediction markets](https://x.com/polydao/status/2037928641384894577) — Connects a free university lecture to Bayesian trading formulas. _(@polydao)_
- [Keep risk vetoes outside the model](https://x.com/RohOnChain/status/2101311813908652069) — Code computes state and limits, a model gives a bounded judgement, independent gates decide; test after fees against a simple baseline. _(@RohOnChain)_

## Flows, liquidity and microstructure

See [[Exchange Microstructure]] and [[Positioning and Sentiment]].

- [Buy-the-dip flows fatten the left tail](https://x.com/Cheshire_Cap/status/2040114149225648431) — Persistent shallow-dip buying can exhaust buyers before a deeper forced unwind. _(@Cheshire_Cap)_
- [A falsifiable forced-seller hypothesis](https://x.com/TheOtherParker_/status/2019587226871447687) — Combines spot and options volume, cross-asset moves and a future 13F check into a testable hypothesis. _(@TheOtherParker_)_
- [Open interest beyond OI 101](https://x.com/TheFlowHorse/status/2029268485155455101) — The often-omitted details of crypto open interest. _(@TheFlowHorse)_
- [Liquidity rebounds versus repricing](https://x.com/0x_Kun/status/1914916353745805788) — A sharp bounce off a thin bottom may be positioning, not fundamentals; check volume and market profile. _(@0x_Kun)_
- [Anatomy of a record Ethereum MEV block](https://x.com/bh359/status/2032195231681241218) — Transaction-level accounting of routing, backruns, builder fees and proposer rewards. _(@bh359)_
- [MEV landscape and JaredFromSubway interview](https://x.com/knveth/status/1926070323230765150) — Long-form reference on extraction games and niche crypto strategies. _(@knveth)_
- [Prediction markets leak information publicly](https://x.com/Citrini7/status/2017058591128097270) — Informed trading surfaces leaked information to everyone instead of a few funds. _(@Citrini7)_
- [Why a Nasdaq IPO may not open at the bell](https://x.com/shadddowfax/status/2065394412109050137) — The [official process](https://www.nasdaq.com/solutions/listings/markets/americas/ways-to-list/nasdaq-ipo-execution) runs a ten-minute display period and an open-ended pre-launch before the IPO Cross. _(@shadddowfax)_
- [Situational Awareness liquidity hypothesis](https://x.com/ThinkingUSD/status/2082852745015419382) — After [Axios reported](https://www.axios.com/2026/07/30/ai-hedge-fund-situational-awareness-citadel) the fund sold its portfolio to Citadel, Flood sketches how a liquidity provider could profit; hypothetical. _(@ThinkingUSD)_
- [Claim that 2026 US market moves were orchestrated](https://x.com/solo_levelingx/status/2085006653649297702) — A manipulation theory linking Nasdaq weakness, the fund's liquidation, headlines and rallies; no order-level evidence. _(@solo_levelingx)_

## Technical setups and chart reading

See [[Crypto Trading]].

- [Cycle top versus bottom signals](https://x.com/himgajria/status/2080790028062724540) — Narratives and unstable liquidity near tops; fundamentals and conviction near bottoms. _(@himgajria)_
- [Side-by-side relative strength](https://x.com/blknoiz06/status/2066744897659445318) — Find altcoins holding higher lows while Bitcoin makes lower lows; they may lead the recovery. _(@blknoiz06)_
- [Trend filters and cross-sectional momentum](https://x.com/TheFlowHorse/status/2057791518593667170) — Moving averages as bias checks: a 50-day Bitcoin trend filter and momentum examples via Ethan Kho. _(@TheFlowHorse)_
- [SNDK extension and ORB setup](https://x.com/LoneStockTrader/status/2017431346478780591) — ATR extension from the 50-day average plus an earnings gap and opening-range-breakout entry. _(@LoneStockTrader)_
- [Why the SNDK gap faded](https://x.com/Robleytrades/status/2017454600433910227) — Postmortem: extreme extension, profit-taking and call-hedge unwinds. _(@Robleytrades)_
- [“Fixed the alt charts”](https://x.com/btc_charlie/status/2097781546157518904) — A chart-only market view. _(@btc_charlie)_

## Screeners, charting and order-flow tools

See [[Markets - Trading]].

- [Orion screener](https://x.com/awawat/status/2094983005546881185) — [Orion](https://screener.orionterminal.com/) screens Binance and Hyperliquid for open-interest spikes, large moves and funding, with alerts. _(@awawat)_
- [Cryexc order overlays](https://x.com/josedonato__/status/2030683232975347787) — Historical charts with limit, take-profit, stop and liquidation levels for Hyperliquid. _(@josedonato__)_
- [Cryexc](https://cryexc.josedonato.com/app) — The Cryexc app.
- [Free footprint and DOM history](https://x.com/josedonato__/status/2017626806828814589) — Backfills order-flow history from Binance before a chart opens. _(@josedonato__)_
- [Free multi-chart workspace](https://x.com/avgcryptoguy/status/2019857062101164528) — Multiple charts without a paid TradingView subscription. _(@avgcryptoguy)_
- [TapeSurf](https://x.com/cryptobing280/status/2024875322210922785) — Aggressive BTC buying and selling across exchanges. _(@cryptobing280)_
- [Key Levels MMT](https://app.mmt.gg/) — Market key-levels tool.
- [TradingView prices and backtesting tool](https://x.com/tom_doerr/status/2098946410079002681) — Real-time TradingView prices, indicator values and automated strategy backtests. _(@tom_doerr)_
- [Thalex combo Greeks](https://thalextech.github.io/combo-greeks/) — Greeks calculator for options combinations.
- [paste.trade](https://paste.trade/) — Trade-sharing utility.
- [Public.com MCP server](https://github.com/PublicDotCom/publicdotcom-mcp-server) — Quotes, option chains and Greeks for agents; it can also place orders. [Walkthrough](https://x.com/JasonL_Capital/status/2093130738371539046), [quote endpoint](https://public.com/api/docs/resources/market-data/get-quotes). _(@JasonL_Capital)_
- [Nansen CLI for agents](https://x.com/ASvanevik/status/2022151285416636672) — Gives an agent Nansen's on-chain investigation tools. _(@ASvanevik)_
- [Paradigm prediction-market explorer](https://x.com/notnotstorm/status/2019111720325902820) — Polymarket and Kalshi volume and open interest over time. _(@notnotstorm)_

## Dashboards, news and utilities

- [t3rminal](https://t3rminal.xyz/) — Markets-news dashboard.
- [World Monitor](https://www.worldmonitor.app/) — Global-event monitoring dashboard.
- [Custom geopolitical trading dashboard](https://x.com/ranyi1115/status/2030245125830676918) — Maps, news, TV, economic events and market narrative on one screen. _(@ranyi1115)_
- [Global Market Hours](https://loris.tools/market-hours) — Trading-session hours by market.
- [Google Finance beta](https://www.google.com/finance/beta) — Broad market overview.
- [Fey](https://fey.com/) — Portfolio and market-research app.
- [Citrindex](https://www.citrindex.com/dashboard) — Project and markets dashboard.
- [STRC.live](https://strc.live/) — Dashboard for the STRC instrument.
- [The Everything Chart](https://levels.io/the-everything-chart) — Macro and product-thinking chart from levels.io.
- [Circle USDC Bridge](https://bridge.usdc.com/) — Circle's non-custodial bridge using CCTP burn-and-mint; shows fee, time and amount before you connect. _(@USDC)_

## AI cycle, semiconductors and valuation

See [[AI Infrastructure Economics]] and [[Equities]].

- [AI Semiconductor Endgame 2026 (III)](https://x.com/fi56622380/status/2093040177711329673) — Fin: the next AI demand leg is non-programmers using coding agents; expects eventual overbuilding. [Jukan's recommendation](https://x.com/jukan05/status/2093147931453055355). _(@fi56622380)_
- [AI boom without broad productivity](https://x.com/jeffreyleefunk/status/2074285956002402653) — Gains stay concentrated in hyperscalers and chips; a repricing scenario. _(@jeffreyleefunk)_
- [AI valuations if progress slows](https://x.com/quantian1/status/2074302524283134122) — If frontier gains flatten, AI equity valuations may need a severe reset. _(@quantian1)_
- [AI hyperscaling and bonds](https://x.com/izakaminska/status/2098871673793478905) — Efficient models could end hyperscaling and push liquidity toward US Treasuries. _(@izakaminska)_
- [AI disappointment and on-chain finance](https://x.com/goodalexander/status/2089906200817066108) — Slow AI returns plus fiscal stress could push capital into stablecoins, tokenized debt and crypto rails. _(@goodalexander)_
- [Bubbles need a reflexive misconception](https://x.com/citrini/status/2052852449841393858) — Expensive is not a bubble; name the misconception and the catalyst that breaks it. _(@citrini)_
- [Citrini's AI Phase 2 primer](https://www.citriniresearch.com/p/thematic-primer-artificial-intelligence) — April 2025: the question moves from scarce infrastructure to application adoption; data plus distribution → design → deployment. _(@citrini)_
- [Citrini hype-cycle framework](https://x.com/Citrini7/status/2022150778970845320) — How investors shift between present fundamentals and imagined future value across a technology cycle. _(@Citrini7)_
- [Agentic-utility equity basket](https://x.com/citrini/status/2039761620272873839) — Infrastructure businesses that could gain from agent-driven internet usage. _(@citrini)_
- [Memory equities can peak before memory prices](https://x.com/jukan05/status/2078462124486283755) — Shares may peak quarters early as new fab capacity nears; track SK hynix's [Yongin investment](https://news.skhynix.com/new-facility-investment-for-yongin-semiconductor-cluster/) and [supply note](https://news.skhynix.com/fact-05/). _(@jukan05)_
- [Power pricing and data-centre economics](https://power2026.ai/) — A former power-and-gas quant's primer on electricity as the constraint on AI buildout. [Bookmark](https://x.com/neelsomani/status/2084719248048529848). _(via @neelsomani)_

## Macro, geopolitics and sovereign debt

See [[Macro Trading]] and [[Rates and Credit]].

- [Bessent, Druckenmiller and Treasuries](https://x.com/EpsilonTheory/status/2094764252976304294) — Clip framing Bessent as mocking investors who shorted Treasuries against buyback policy. _(@EpsilonTheory)_
- [UK long-gilt stress](https://x.com/philippilk/status/2094692355605516614) — High 30-year gilt yields plus large US Treasury holdings; the "bankruptcy" prediction is rhetoric. _(@philippilk)_
- [Geopolitical risk repricing through history](https://x.com/Citrini7/status/2030369170571857987) — Markets ignore geopolitical risk until the regime changes. _(@Citrini7)_
- [Ray Dalio on the post-1945 order](https://x.com/leshka_eth/status/2023007079687147534) — Pointer to Dalio's essay on reading geopolitical headlines as market signals. _(@leshka_eth)_
- [The Strip vs the Strait](https://x.com/abcampbell/status/2030697258614935831) — Historical-cycle framing for energy shocks and market-cycle endings. _(@abcampbell)_
- [Hidden inflation through quality dilution](https://x.com/levelsio/status/1923842778812887168) — Cheaper ingredients and service inputs as lived inflation beyond sticker prices. _(@levelsio)_
- [Nominal versus real wealth](https://x.com/0x_Kun/status/2091138535357370404) — Measure wealth against prices, imports and exchange rates, not nominal currency. _(@0x_Kun)_
- [UK millionaire counts depend on definition](https://x.com/PolitlcsUK/status/2082025707471855690) — Reports 442,000 UK millionaires in 2025; the [UBS Global Wealth Report 2026](https://www.ubs.com/content/dam/assets/wm/static/gwr/global-wealth-report-en-2026.pdf) counts over two million. _(@PolitlcsUK)_

## Credit, mortgages and property

See [[Rates and Credit]].

- [Misleading Bank of England mortgage explanation](https://x.com/TJiMTS/status/2095425688698290214) — Says banks borrow mortgage principal from the BoE; in fact lending creates deposits and pricing has many inputs. _(@TJiMTS)_
- [Mortgage prepayment is an option](https://x.com/liensofnewyork/status/2104717103508967657) — Early repayment lets borrowers refinance when rates fall. See the [Fed paper](https://www.federalreserve.gov/pubs/feds/2012/201222/201222pap.pdf) and [CFPB on penalties](https://www.consumerfinance.gov/ask-cfpb/what-is-a-prepayment-penalty-en-1957/). _(@liensofnewyork)_
- [North London flat loss](https://x.com/ukhpinfo/status/2095058545028780063) — Bought for £2.36m in 2020, said to have sold for £1.75m in 2026: about 26% down. _(@ukhpinfo)_
- [MFS and Atlas private-credit defaults](https://x.com/UnicusResearch/status/2027845811317465259) — Case study in warehouse financing, alleged double pledging, defaults and litigation. _(@UnicusResearch)_
- [Parmigiano Reggiano as collateral](https://www.credem.it/content/credem/it/imprese-e-professionisti/sostenere-l-impresa/agricoltura/pegno-rotativo-formaggio.html) — Italian banks lend against ageing cheese wheels they can value and sell. [Bookmark](https://x.com/TrungTPhan/status/2086871039141908916). _(via @TrungTPhan)_

## Crypto industry and narratives

See [[Crypto Trading]].

- [What went wrong with crypto](https://x.com/krugermacro/status/2019667263494975622) — Inventory of structural, flow, political, supply and narrative pressures. _(@krugermacro)_
- [Why speculation moved from crypto to AI](https://x.com/CryptoCred/status/2021553644764619217) — Institutionalization, extraction, lost inefficiency and AI's opportunity cost. _(@CryptoCred)_
- [Why crypto liquid funds trail venture funds](https://x.com/0xLouisT/status/1894798762704273761) — Visible volatility, badly timed redemptions, smoothed venture marks and a hard Bitcoin benchmark. _(@0xLouisT)_
- [Bitcoin adoption versus cypherpunk practice](https://x.com/BobLoukas/status/1909958006789267635) — Custodial and paper exposure raise dependency even though the protocol stays open. _(@BobLoukas)_
- [US Strategic Bitcoin Reserve order](https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile/) — March 2025: a no-sell Bitcoin reserve and a digital-asset stockpile, funded with forfeited assets. _(via @balajis)_
- [Tokenization, stablecoins and on-chain finance](https://x.com/goodalexander/status/2100700327003467985) — Speculative framework linking sovereign debt, stablecoin policy, tokenized assets, ZK privacy and agentic trading. _(@goodalexander)_
- [The Machinery of Modern Finance](https://x.com/brandonkumar/status/2022307085665374701) — Why the next decade of financial innovation could exceed the previous fifty years. _(@brandonkumar)_
- [Ethena Pay](https://x.com/ethena/status/2094757121959280641) — Stablecoin consumer finance: free transfers, card cashback and rewards on dollar balances; not an insured deposit. _(@ethena)_
- [Zcash in hindsight](https://x.com/notcelon/status/2096555732543910320) — The trade looked obvious afterwards but was avoided for its associations. _(@notcelon)_

## Equity theses and reading

See [[Equities]] and [[Traders Directory]].

- [Citrini 26 Trades for 2026](https://x.com/Citrini7/status/2026754330129248257) — Citrini Research's annual market report. _(@Citrini7)_
- [Spotting contrarian value](https://x.com/goodalexander/status/2032143213344276528) — Valuation checklist: cash yields, peers, GARP, growth and margins. _(@goodalexander)_
- [From crypto narratives to thematic ETFs](https://x.com/get_truenorth/status/2059615153868480928) — Apply narrative and sector-rotation instincts to thematic ETFs instead of single stocks. _(@get_truenorth)_
- [Robotics component watchlist](https://x.com/aleabitoreddit/status/2071730699363881241) — Humanoid platforms and their upstream harmonic-drive and precision-sensor suppliers. _(@aleabitoreddit)_
- [GLP-1 and apparel demand](https://x.com/Geiger_Capital/status/2092269663983980730) — Credits Victoria's Secret's share rise to GLP-1 changing body sizes; no attribution analysis. _(@Geiger_Capital)_
- [Lab-grown diamonds bear case](https://x.com/Saul_Sadka/status/2086495710568947830) — Falling costs keep compressing lab-grown prices and weaken natural diamonds' scarcity premium. _(@Saul_Sadka)_
- [Next Market Wizards traders](https://x.com/gfc4/status/2024578201369162155) — The traders in the forthcoming book, as a reading list. _(@gfc4)_
