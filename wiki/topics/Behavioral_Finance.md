---
title: Behavioral Finance
type: topic
domain: markets
sources:
  - misc/Bizz & Finance.md
  - misc/Psychology.md
  - misc/CT.md
  - bookmarks/Markets & Crypto.md
  - misc/X-Bookmarks.md
related:
  - Trading Psychology
  - Decision-Making
  - Markets
  - Psychology & Behavior
  - Capital Allocation Timing
  - Repeated Games
  - Genius and Madness
  - Crypto Takes
  - Business & Finance
  - Market Cycles
  - Sentiment
  - Risk Analysis
  - Trading Evidence and Review Framework
  - 0xaporia
  - CryptoCred
  - Pentosh1
  - CL207
  - Rewkang
  - GCRClassic
created: 2026-04-18T00:00:00.000Z
updated: '2026-10-15'
tags:
  - behavioral-finance
  - decision-making
  - cognitive-bias
  - market-psychology
  - variance
  - overfitting
summary: "How predictable biases distort trading and add up to market patterns: the capital-speed asymmetry, variance blindness, narrative, cycle greed, overfitting and ruin."
---

# Behavioral Finance

Behavioral finance studies how cognitive and emotional biases distort financial decisions and add up to observable market patterns. Classical finance assumes a rational actor; behavioral finance assumes the actor is predictably irrational. In this wiki it is not a standalone thesis. It is the layer under the trader-level observations collected in [[CT]] and tagged on [[Trading_Psychology]], where named patterns such as bag-holding, variance-driven strategy hopping and reflexive pumps play out.

## Speed and capital

- **The capital-allocation asymmetry.** "You act too quickly when you are trying to grow capital, and you act too slowly when you are trying to protect capital" (from [[Bizz_and_Finance]]). In [[CT]] the line appears in a [reply](https://x.com/cobie/status/1566556438092201984) saved under @cobie's handle, recalling an old tweet: "it rly changed my life tbh." [[Capital_Allocation_Timing]] treats it as the one asymmetry behind most losses, with panic selling and hesitant buying as two faces of the same timing error.
- **Tiny deltas compound.** A post in [[Psychology & Behavior]], saved with @kelxyz_'s handle, notes that most people do not blow up with one catastrophic -100%. Losses come from small choices: "Have a trading plan, but feeling like fomo blasting something from twitter? It's only one trade you say. But like, our life is just an accumulation of these tiny deltas." See [[Decision-Making]].

## Randomness, variance and outcome

- **Decision and outcome are decoupled.** Market outcome is not the quality of the decision. Randomness masks poor reasoning and luck masks bad strategy; only the long run separates signal from noise ([[Trading_Psychology]]).
- **Variance blindness.** [[0xaporia]] calls [strategy hopping](https://x.com/0xaporia/status/1894297482500141122) "one of the most under discussed issues on CT", a "flight from the grueling, nonlinear phase where most progress happens." Traders read a losing streak as proof the strategy is broken rather than as noise. Even a 40% win-rate strategy has about a 49% chance of an 8+ losing streak over 100 trades (from [[CT]]).

| Losing streak over 100 trades | 50% win rate | 40% win rate |
| --- | --- | --- |
| 5 or more | ~80% | ~98% |
| 6 or more | ~55% | ~87% |
| 7 or more | ~32% | ~69% |
| 8 or more | ~17% | ~49% |

- **Decouple process from outcome.** "A surgeon with a 95% success rate will eventually lose multiple patients in a row. A poker player should focus on whether they made mathematically optimal decisions, not whether they won the hand." (0xaporia, from [[CT]])
- **Folding is an edge.** [Poker players](https://x.com/0xaporia/status/1894332130093629551) accept variance and fold when odds or context are poor; "Novice traders often conflate constant activity with progress." (0xaporia, from [[CT]])

## Narrative and reflexivity

- **Narrative after the fact.** Asked "whats the next narrative", [[CL207]] replies: "my trader in christ anytime price moves 10% we will literally hallucinate a story up for it" (from [[CT]]). Narrative follows price, not the other way round.
- **Reflexivity at all-time highs.** A passage linked to a [[Rewkang]] post: "People sell because they see it's always rejected and then more people follow when it actually [happens](https://twitter.com/Rewkang/status/1765075321181929840)." Short-term flows from day traders overwhelm passive ETF buying for a while; "Eventually, passive flows win out." (from [[Bizz_and_Finance]])
- **Self-deception about edge.** One answer to "Why do you trade?" in [[Psychology & Behavior]]: "cuz i lie to myself and cognitive dissonance tells me i have an edge / sometimes my bank account even reflects it".

## Cycles: optimism, greed and dilution

- **First-cycle optimism flips.** [[CryptoCred]]: "First cycle participants make money because they're open-minded, optimistic, and think 'What if I'm right?' instead of 'What if I'm wrong?' They lose most of their gains for the same reasons." Navigating cycles means switching between "childlike idealism and sagely cynicism" (from [[CT]]).
- **Bear-market habits.** CryptoCred again: "Fading breakouts, rotating too quickly and being unable to hold a position, unbridled cynicism etc. are all hard to unlearn" — an argument for trading less when markets are bad (from [[CT]]).
- **Greed peaks late; dilution kills bulls.** [[Pentosh1]]: "[The largest gains](https://twitter.com/Pentosh1/status/1779586050597249472) come in the back half of the bull run as greed completely takes over." The cycle ends when "the dilution exceeds the amount of capital inflows" (from [[CT]]). See [[Market Cycles]].
- **Take life-changing money out.** Pentosh1 in a [separate post](https://x.com/Pentosh1/status/1740042952108388405): "If you make life changing money. Take it out of the market. Many of you will make life changing money, but few will keep it." (from [[CT]])
- **Lottery-ticket investors.** [[GCRClassic]] quotes a description of "generation moonshot": young investors "inclined to treat them like lottery tickets — probably worthless, but still worth the gamble on a life-changing payout." The same handle's advice: "Front run the lottery tickets" (from [[CT]]). See [[Sentiment]].

## Holding losers

- **Bag-holding.** CryptoCred's test after a drawdown: "If I didn't have a position, would I want the exposure I have now?" Yes, you're fine; no, do something about it. "Active positions cost mental capital, which is a scarce resource." (from [[CT]])

## Research and prediction traps

- **Backtest overfitting.** Repeatedly improving one historical sample turns researcher discretion into hidden parameters. Aporia's examples: removing losing weekdays after seeing the results, or asking an agent again and again to improve the same sample. Reserve unseen periods, keep protocol selection separate from evaluation, and count costs and risk. A Stanford student study shows a changed rolling window flipping results on the same stock and day (from [[Bookmarks - Markets & Crypto]]). See [[Trading Evidence and Review Framework]].
- **The prediction-status game.** Calling an exact turning point can still lose money through sizing, path, leverage or exits; a less impressive call with disciplined sizing and exits can make money. Public accuracy and portfolio execution are different objectives (from [[Bookmarks - Markets & Crypto]]).

## Ruin and expected value

- **Ruin dominates expected value.** A small favourable bet and insurance against an unaffordable loss can both be rational, because utility and survival are not linear. Alec Torelli frames insurance as protection against unaffordable variance; risk aversion, correlated losses, liquidity and insurer solvency also matter (from [[Bookmarks - Markets & Crypto]]). See [[Repeated Games]] and [[Risk Analysis]].

## Resources

- [You act too quickly to grow capital, too slowly to protect it](https://x.com/cobie/status/1566556438092201984) — Cobie's reply recalling the old tweet behind the capital-allocation asymmetry: "it rly changed my life tbh." _(@cobie)_
- [Strategy hopping and losing-streak odds](https://x.com/0xaporia/status/1894297482500141122) — 0xaporia's thread with the streak table above and the case for judging process over outcome. _(@0xaporia)_
- [Poker players and variance](https://x.com/0xaporia/status/1894332130093629551) — Why accepting variance and folding bad spots beats constant activity. _(@0xaporia)_
- [Reflexivity around ATH corrections](https://twitter.com/Rewkang/status/1765075321181929840) — The Rewkang post linked from the note's passage on selling into expected rejections, and acute versus passive flows. _(@Rewkang)_
- [The largest gains come in the back half](https://twitter.com/Pentosh1/status/1779586050597249472) — Pentosh1 on greed late in the bull run and dilution as the bull-market killer. _(@Pentosh1)_
- [Take life-changing money out](https://x.com/Pentosh1/status/1740042952108388405) — Pentosh1's 2,500-days-straight post on securing gains before the music stops. _(@Pentosh1)_
- [AI backtesting: remove clerical friction, preserve judgment](https://x.com/0xaporia/status/2092917529597321394) — Aporia separates repetitive implementation from the judgment needed to spot look-ahead bias, overfitting and path dependence; a quoted profit screenshot is not evidence of a reproducible strategy. _(@0xaporia)_
- [Stanford pairs-trading study: window sensitivity and overfitting](https://web.stanford.edu/class/msande448/2020/Final_reports/gr1.pdf) — Student study of high-frequency mean reversion; a negative-result lesson in parameter sensitivity, not a trading playbook. Found via Ruuj's [original bookmark](https://x.com/RuujSs/status/2081397093919236257).
- [Profitable execution matters more than calling exact tops and bottoms](https://x.com/blknoiz06/status/2091151900729115029) — Why a right call can lose and a mediocre entry can win; top-and-bottom calls as a status game. Saved alongside an [original post](https://x.com/0xaporia/status/2091034462561706287) by 0xaporia. _(@blknoiz06)_
- [Insurance is chiefly protection against unaffordable variance](https://x.com/AlecTorelli/status/2089548439101362213) — Alec Torelli on positive expected value versus acceptable risk. _(@AlecTorelli)_

## Related

[[Trading_Psychology]] · [[Decision-Making]] · [[Markets]] · [[Capital_Allocation_Timing]] · [[Genius_and_Madness]] · [[Repeated Games]] · [[CT]] · [[Bizz_and_Finance]] · [[Psychology & Behavior]] · [[Market Cycles]] · [[Sentiment]] · [[Risk Analysis]] · [[Trading Evidence and Review Framework]]
