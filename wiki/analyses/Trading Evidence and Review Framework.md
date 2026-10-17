---
title: Trading Evidence and Review Framework
type: analysis
domain: markets
summary: "How to turn a trading claim, backtest or leaderboard into something testable: record it, state assumptions and triggers, then review the result honestly."
tags: [trading, markets]
related: [Trading Philosophy, Trading Psychology, Hyperliquid, Leverage and Liquidations, Markets - Brief]
aliases: ["Market Performance Measurement"]
sources:
  - markets/Brief.md
  - markets/Articles.md
  - markets/Trading.md
  - misc/CT.md
  - clippings/bookmark-updates-2026-09-22/Markets & Crypto.md
created: '2026-09-22'
updated: '2026-10-17'
reviewed: '2026-09-22'
review_status: reviewed
---

# Trading Evidence and Review Framework

**Conclusion:** make a claim inspectable before judging its result. Write down what was claimed, what it assumes and what would change the view. Afterwards, add the result beside the original thesis, never over it. A displayed PnL or a smooth backtest describes a calculation, not proof of skill.

## A worked example: the corrected funding trade

Alex Hunter (@alex_hunter20) posted a HYPE spot-plus-perpetual funding strategy on [[Hyperliquid]], then his own mathematical correction. Portfolio-margin ratio, loan-to-value, rebalancing, funding, borrow cost and basis make the "delta-neutral" trade capable of liquidation and loss. His earlier note on portfolio-margin liquidations explains why a hedged account can still be closed out, and Hyperliquid's portfolio-margin docs set out the maintenance, borrowing and carry risks behind it.

The lesson is to keep the correction attached to the original payoff story. Financing, collateral rules and price drift are part of the exposure, even when a position looks hedged. The mechanics are on [[Leverage and Liquidations]].

## Before drawing a conclusion

Record the claim, its date, the instrument, the horizon and the evidence cited. Separate observations from forecasts. A scenario stays a scenario however precise its numbers: Citrini's crash piece opens "JUNE 2028. The S&P is down 38% from its highs. Unemployment just printed 10.2%." It sits beside Citadel Securities' rebuttal in [[Markets - Articles]]; keep both, and keep the scenario labelled as one.

Write down the assumptions that matter: pricing basis, liquidity, fees, financing, collateral, positions on other venues, and data coverage. Mark unknown values as unknown rather than quietly using zero.

## What would change the view

Borrow the [[Markets - Brief]] habit of observable triggers. For each regime shift it asks "What is changing", "Why it matters" and "Observable confirmation signal"; for each risk, "Explicit trigger levels/events where possible".

Apply the same to any saved thesis. State what would support it, what would weaken it and when to reassess. If those conditions cannot be stated, the item is still a research lead.

## Testing a strategy

- **Hold data back.** Repeatedly improving one historical sample turns the researcher's choices into hidden parameters. Deleting losing weekdays after seeing results, or asking an agent again and again to improve the same backtest, fits noise. Reserve unseen periods and keep protocol choice apart from evaluation.
- **Test sensitivity.** A Stanford student study of pairs trading showed one changed rolling window flipping the result on the same stock and day.
- **Count everything.** Include fees, slippage, latency, financing, cash flows and drawdowns. Headline PnL alone cannot show skill.
- **Name the edge.** For each trade, name the proposed edge (informational, analytical, behavioural, or quantitative and execution) and the result that would disprove it.

## Reading leaderboards

The largest accounts on a public leaderboard may be protocol contracts, market makers, token deployers, long-term holders or directional traders, each with different exposures, cost bases and hedges. Ask of any displayed account:

- What role does it play, and is its ownership established or only inferred from wallet activity?
- What period, starting capital, deposits, withdrawals and transfers enter the number?
- Are gains realised, marked to market, or inferred from incomplete cost bases?
- Do hedges, inventory, financing, fees or positions on another venue change the result?
- What drawdowns and liquidation risk came with the gain?

Past rank predicts little. A study of 935,000 Hyperliquid wallets found weak month-to-month persistence among top-decile traders. Copy-trader sites and backtesting tools deserve the same questions.

## Afterwards

Keep the original thesis and add the result separately. Then decide which of these happened:

- the thesis was wrong;
- the execution differed from the plan;
- the measurement was incomplete;
- chance dominated the period.

A bad stretch is not automatically a broken system. Trend-following pays through false starts, momentum through late entries and mean reversion through outsized moves; mistaking that cost for failure is a common error. See [[Trading Philosophy]] for process over outcome and [[Trading Psychology]] for the pull of a persuasive story.

## Resources

- [Hyperliquid portfolio-margin documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/portfolio-margin) — Official docs on borrowing, account-level maintenance and carry-trade risk under portfolio margin.
