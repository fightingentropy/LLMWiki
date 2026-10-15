---
title: Trading Evidence and Review Framework
type: analysis
domain: markets
sources:
  - markets/Brief.md
  - markets/Articles.md
  - markets/Trading.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
related:
  - Risk Analysis
  - Market Performance Measurement
  - Trading Philosophy
  - Trading Psychology
  - Markets - Brief
  - Bookmarks - Markets & Crypto
  - Markets - Articles
  - Markets - Trading
  - CryptoCred
  - Citrini Research
  - Citadel Securities
  - Hyperliquid
  - X Bookmark Review - 30 September 2026
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - markets
  - synthesis
  - study
  - journaling
  - risk
summary: "A checklist for turning a saved trading claim into something testable: record it, state its assumptions and triggers, then review the result honestly."
reviewed: '2026-09-22'
review_status: reviewed
review_notes: >-
  A synthesis of the cited notes; the product and market claims in the linked
  posts keep their original evidence limits and were not independently checked.
---

# Trading Evidence and Review Framework

**Conclusion:** make a claim inspectable before judging its result. Write down what was claimed, what it assumes and what would change the view. Afterwards, add the result beside the original thesis, never over it. This is the common lesson in [[Risk Analysis]], [[Market Performance Measurement]] and [[Trading Philosophy]].

This is a research and journaling framework. It does not select a trade, a position size or current market exposure.

## A worked example: the corrected funding trade

The corrected funding-trade bookmark shows why the correction has to stay attached to the initial story. Alex (@alex_hunter20) posted a [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156), then the author's own [mathematical correction](https://x.com/alex_hunter20/status/2095155500119945541). Portfolio-margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis behaviour make the apparently delta-neutral trade capable of liquidation and loss. An earlier [note on Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) explains why a delta-neutral account can still liquidate. Read together, the original setup and the correction are a model-risk lesson, not a playbook. (from [[Bookmarks - Markets & Crypto]]; see [[Hyperliquid]])

## Before drawing a conclusion

Record the original claim, its date, the instrument, the stated horizon and the evidence cited. Separate observations from forecasts.

A hypothetical scenario in [[Markets - Articles]] remains a scenario even when its numbers are precise. The note saves [Citrini's 2028 crash scenario](https://x.com/Citrini7/status/2025653614430023864), which opens "JUNE 2028. The S&P is down 38% from its highs.", next to [Citadel Securities' rebuttal](https://www.citadelsecurities.com/news-and-insights/2026-global-intelligence-crisis/). Keep both, and keep the scenario labelled as one. (See [[Citrini Research]] and [[Citadel Securities]].)

Write down the assumptions that matter:

- pricing basis
- liquidity
- fees
- financing
- collateral
- off-venue positions
- data coverage

Mark unknown values as unknown. Do not quietly substitute zero.

## What would change the view

Use the [[Markets - Brief]] habit of observable triggers. The brief's template asks, for each regime shift, "What is changing", "Why it matters" and "Observable confirmation signal", and for each risk, "Explicit trigger levels/events where possible".

Apply the same to any saved thesis. State what observation would support it, what would weaken it and when it will be reassessed. If those conditions cannot be stated, the item is still a research lead.

## Afterward

Preserve the original thesis and add the result separately. Then decide which of these happened:

- the thesis was wrong;
- the execution differed from the plan;
- the measurement was incomplete;
- chance dominated the chosen period.

Include drawdowns, costs and cash flows when comparing outcomes. Headline PnL alone cannot resolve skill.

A bad stretch is not automatically a broken system. [[CryptoCred]]'s note that [every trading system pays a characteristic cost](https://x.com/CryptoCred/status/2079138151528890777) applies here: trend-following pays through false starts, momentum through late entries, and mean reversion through occasional outsized moves. Mistaking that expected cost for evidence the system has failed is a recurring error. (from [[Markets - Trading]])

For the journal itself, the [four categories of trading edge](https://x.com/frankdegods/status/2103860364089708742) (informational, analytical, behavioural, and quantitative or execution) make a useful prompt: for each trade, name the proposed edge and the result that would disprove it. The four-way split is a heuristic, not proof that an edge exists. (from [[X Bookmark Review - 30 September 2026]])

## Questions for a saved chart or leaderboard

- Who produced it?
- What is included and excluded?
- Are account identities established?
- What period is measured?
- Are the returns comparable?
- Where is the underlying data?

A [breakdown of what Hyperliquid leaderboard PnL measures](https://x.com/alex_hunter20/status/2102003574331130349) shows why these matter. It tries to separate protocol contracts, market makers, token deployers, long-term holders and directional traders among the largest accounts. The identities, holdings, cost bases, hedges and PnL it calculates still need on-chain and counterparty verification. The same questions apply to copy-trader leaderboards and backtesting tools.

See [[Market Performance Measurement]] for the account-role questions and [[Trading Psychology]] for the temptation to turn a persuasive story into conviction.

## Resources

Linked posts and tools are leads; their claims are the authors'.

- [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) — The original delta-neutral funding setup, before the correction. _(@alex_hunter20)_
- [Correction to the funding strategy](https://x.com/alex_hunter20/status/2095155500119945541) — The author's own maths showing how the trade can liquidate and lose money. _(@alex_hunter20)_
- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — Detailed risk note on BLP, LTV, borrow interest and why a delta-neutral account can still liquidate. _(@alex_hunter20)_
- [What Hyperliquid leaderboard PnL actually measures](https://x.com/alex_hunter20/status/2102003574331130349) — Quotes an attempt to classify the largest leaderboard accounts by role; useful method, unverified identities. _(@alex_hunter20, quoting @MarketsAlpha)_
- [Citrini's June 2028 scenario](https://x.com/Citrini7/status/2025653614430023864) — A hypothetical crash narrative in which AI exceeds expectations and markets still fall. _(@Citrini7)_
- [Citadel Securities rebuttal](https://www.citadelsecurities.com/news-and-insights/2026-global-intelligence-crisis/) — Citadel Securities' response to the Citrini scenario, per the note.
- [Every trading system pays a characteristic cost](https://x.com/CryptoCred/status/2079138151528890777) — Why trend, momentum and mean-reversion systems each have an expected pain profile. _(@CryptoCred)_
- [Four categories of trading edge](https://x.com/frankdegods/status/2103860364089708742) — Graphic splitting edge into informational, analytical, behavioural and quantitative or execution advantages. _(@frankdegods)_
- [Hyperdash copytraders](https://hyperdash.com/explore/copytraders) — Copy-trader research view; leaderboard performance is not a recommendation.
- [Mirrorly leaderboard](https://portal.mirrorly.xyz/leaderboard) — A second performance leaderboard for comparison.
- [TradingView prices and strategy-backtesting tool](https://x.com/tom_doerr/status/2098946410079002681) — Tool lead claiming real-time TradingView prices, indicator values and automated backtesting; check calculation correctness and reproducibility before trusting results. _(@tom_doerr)_

## Related

[[Risk Analysis]] · [[Market Performance Measurement]] · [[Trading Philosophy]] · [[Trading Psychology]] · [[Markets - Brief]] · [[Markets - Articles]] · [[Markets - Trading]] · [[Bookmarks - Markets & Crypto]] · [[CryptoCred]] · [[Hyperliquid]] · [[X Bookmark Review - 30 September 2026]]
