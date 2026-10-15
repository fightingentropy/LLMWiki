---
title: Market Performance Measurement
type: topic
domain: markets
sources:
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
  - misc/CT.md
related:
  - Bookmarks - Markets & Crypto
  - Hyperliquid
  - Risk Analysis
  - Trading Psychology
  - Funding Rates
  - Trading Evidence and Review Framework
  - Leverage
  - Liquidations
  - Crypto Takes
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - pnl
  - performance
  - leaderboards
  - risk
  - hyperliquid
  - portfolio-margin
summary: "How to read trading leaderboards and PnL claims: what a displayed return measures, and why a 'delta-neutral' funding trade can still liquidate."
---

# Market Performance Measurement

A leaderboard is an observation about accounts under a particular calculation, not automatically a ranking of comparable trading skill. This page collects the questions to ask before reading a PnL number as skill, a corrected Hyperliquid funding trade that shows how a smooth-looking return can hide liquidation risk, and the leaderboard and trade-export tools in Erlin's bookmarks. The material comes from [[Bookmarks - Markets & Crypto]] and centres on [[Hyperliquid]].

## What a leaderboard measures

A post by Alex Hunter, quoting @MarketsAlpha, asks what the largest displayed accounts on the Hyperliquid leaderboard actually represent. It tries to separate protocol contracts, market makers, token deployers, long-term holders and directional traders (from [[Bookmarks - Markets & Crypto]]). It is a methodology lead: it does not verify named account identities, holdings, cost bases, hedges or returns.

Questions to ask of any displayed account:

- Is the account a protocol contract, market maker, token deployer, long-term holder, or directional trader?
- What period, starting capital, deposits, withdrawals, and transfers enter the calculation?
- Are gains realised, marked to market, or inferred from incomplete cost bases?
- Do hedges, inventory, financing, fees, or positions on another venue change the result?
- Are account labels and ownership established, or inferred from wallet activity?
- What drawdowns and liquidation exposure accompanied the displayed gain?

These questions push against a line in the crypto note, a reply calling trading the "Best computer game ever. Pure PvP where the leaderboard is your P&L." (from [[CT|Crypto Takes]]).

## The corrected funding-trade example

Alex Hunter posted a HYPE spot-plus-perpetual funding setup, then his own mathematical correction. Portfolio-margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis behaviour make the apparently delta-neutral trade capable of liquidation and loss. The correction belongs with the original thesis: read the two together as a model-risk lesson, not a playbook. His earlier note on portfolio-margin liquidation mechanics covers BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate (from [[Bookmarks - Markets & Crypto]]).

The official [portfolio-margin documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin), as read on 22 September 2026, describes borrowing, account-level maintenance requirements, and carry-trade exposure to funding, interest, and spot/perpetual price drift. Hyperliquid's manual-borrows announcement lets portfolio-margin users supply HYPE or BTC and borrow USDC or USDT at utilization-based interest. Rates and collateral rules change; check current documentation before use.

That is a reason to evaluate [[Risk Analysis]] alongside returns. It is not a tested strategy or a source of current account-specific borrowing terms. [[Trading_Psychology|Trading Psychology]] connects this to the gap between a convincing public narrative and measured results. The mechanics also sit in [[Funding Rates]], [[Leverage]] and [[Liquidations]]; for reviewing your own record, see [[Trading Evidence and Review Framework]].

## Resources

- [What Hyperliquid leaderboard PnL actually measures](https://x.com/alex_hunter20/status/2102003574331130349) — The methodology post that sorts the largest leaderboard accounts by what they are, not by displayed PnL. _(@alex_hunter20)_
- [Hyperliquid portfolio-margin liquidation mechanics](https://x.com/alex_hunter20/status/2031304222994739308) — Detailed risk note on BLP, LTV, borrow interest, and why a delta-neutral account can still liquidate. _(@alex_hunter20)_
- [HYPE spot-plus-perpetual funding strategy](https://x.com/alex_hunter20/status/2094630462857900156) — The original funding-trade setup; read it with the correction below. _(@alex_hunter20)_
- [Mathematical correction to the funding strategy](https://x.com/alex_hunter20/status/2095155500119945541) — The author's own correction showing how the trade can liquidate and lose. _(@alex_hunter20)_
- [Hyperliquid portfolio-margin documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin) — Official docs on borrowing, maintenance requirements and carry-trade exposure.
- [Hyperliquid manual borrows](https://x.com/HyperliquidX/status/2100838194317312446) — Official announcement of supplying HYPE or BTC to borrow USDC or USDT under portfolio margin. _(@HyperliquidX)_
- [Hyperdash copytraders](https://hyperdash.com/explore/copytraders) — Copy-trader research view; leaderboard performance is not a recommendation.
- [Mirrorly leaderboard](https://portal.mirrorly.xyz/leaderboard) — A separate performance leaderboard, kept for comparison.
- [hl.eco relative performance](https://hl.eco/hype-relative-perf) — hl.eco's HYPE relative-performance view.
- [Hyperliquid trades exporter](https://trade-export.hypedexer.com/?v=1) — Trade-export utility for Hyperliquid trades; validate the output before using it for tax or accounting.

## Related

[[Bookmarks - Markets & Crypto]] · [[Hyperliquid]] · [[Risk Analysis]] · [[Trading_Psychology|Trading Psychology]] · [[Funding Rates]] · [[Leverage]] · [[Liquidations]] · [[Trading Evidence and Review Framework]]
