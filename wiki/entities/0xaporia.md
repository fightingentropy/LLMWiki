---
title: 0xaporia
type: entity
domain: markets
sources:
  - misc/CT.md
  - markets/Articles.md
  - misc/X-Bookmarks.md
  - bookmarks/Markets & Crypto.md
  - bookmarks/Culture & Ideas.md
related:
  - Traders Directory
  - Crypto Takes
  - Trading Psychology
  - Trading Philosophy
  - Crypto Trading
  - Behavioral Finance
  - Decision-Making
  - Satoshi Nakamoto
  - thiccythot
  - X-Bookmarks
  - Markets - Articles
  - Bookmarks - Markets & Crypto
  - Bookmarks - Culture & Ideas
created: 2026-04-18T00:00:00.000Z
updated: '2026-10-15'
tags:
  - trader
  - twitter
  - crypto
  - philosophy
  - systems
  - variance
  - backtesting
  - profit-taking
summary: "Crypto trader @0xaporia on variance, strategy hopping, forward-looking exits and backtesting hygiene, with the losing-streak table and his saved posts."
---

# 0xaporia

Crypto trader on X (@0xaporia), known for rigorous, systems-oriented writing on variance, strategy hopping and poker-style discipline. Erlin's notes quote him in [[CT]], [[X-Bookmarks]] and the bookmark notes, and [[Markets - Articles]] lists one of his articles. He also posted Satoshi's 2010 production-cost passage, which opens a price-discovery thread in [[CT]].

## Key ideas

### Poker players accept variance

Poker players treat variance as part of the game, so they can fold. Novice traders confuse activity with progress (from [[CT]]):

> Poker players grasp that they’re dealt a fixed hand and operate in a controlled environment, so they accept variance as part of the game.
>
> It allows them to fold strategically and avoid the trap of forcing action when odds or context are unfavorable. That restraint—knowing you don’t need to play every hand—is a massive advantage over people who start out with trading. Novice traders often conflate constant activity with progress. Poker players know this not to be true.

### Strategy hopping and losing streaks

The central thesis: traders flee the grueling phase where progress happens by hopping between strategies, and they misread noise as signal (from [[CT]]):

> Strategy hopping is one of the most under discussed issues on CT imo. It's mostly a flight from the grueling, nonlinear phase where most progress happens.
>
> All strategies, even brilliant ones, operate in a landscape of randomness and friction. When people encounter a losing streak, they interpret it as proof that their strategy is flawed, rather than recognizing that noise is part of the system.

The thread backs this with streak math. Probability of a losing streak of at least N trades somewhere in 100 trades:

| Losing streak of | 50% win rate ("a coin flip") | 40% win rate ("closer to reality") |
| --- | --- | --- |
| 5 or more | approx. 80% | approx. 98% |
| 6 or more | approx. 55% | approx. 87% |
| 7 or more | approx. 32% | approx. 69% |
| 8 or more | approx. 17% | approx. 49% |

> Losing streaks are not rare events. Yet, humans are terrible at internalizing this. We intuitively expect outcomes to balance out quickly, not grasping that streaks are inherent to randomness.
>
> A surgeon with a 95% success rate will eventually lose multiple patients in a row. A poker player should focus on whether they made mathematically optimal decisions, not whether they won the hand.

Principle, which closes the thread: **Decouple Process from Outcome.** The streak point recurs in [[Trading Psychology]], [[Behavioral Finance]] and [[Decision-Making]].

### Price discovery and the production-cost passage

@0xaporia posted Satoshi's passage on production cost on 4 November 2025 (from [[X-Bookmarks]]):

> "The price of any commodity tends to gravitate toward the production cost. If the price is below cost, then production slows down. If the price is above cost, profit can be made by generating and selling more. At the same time, the increased production would increase the difficulty, pushing the cost of generating towards the price."
>
> — Satoshi Nakamoto (2010)

In [[CT]] the passage sits under the @0xaporia handle. The commentary that follows, on oil and crypto, is signed @thiccythØt:

> its interesting how price discovery moves from blunt proxies to more precise expressions with each wave  
> first wave -> buy any oil -> wti  
> outperforms brent be its the default proxy  
> second wave -> better read on mechanics of the supply shock -> brent cleaner expression than wti  
> you see it with crypto too with each cycle becoming more selective with asset quality  
> ...  
> it's so cool to witness adaptiveness of the system, feels like modern art

Read together: price discovery moves from blunt proxies (WTI) to more precise expressions (Brent), and crypto does the same each cycle by becoming more selective on asset quality. See [[Satoshi Nakamoto]] and [[thiccythot]].

### Profit-taking can be self-sabotage

The post argues that "no one ever went broke taking profits" is a fallacy for any strategy that does not win most of the time (from [[X-Bookmarks]]):

> The adage "no one ever went broke taking profits" is a (potentially) dangerous fallacy because it centers the exit decision on your entry price. It treats profit-taking as a psychological reward rather than a strategic forecast. For any strategy that doesn't win the majority of the time, outsized winners are the essential engine that funds your inevitable losses. By "locking in" a gain simply because your P&L is green, you are systematically underfunding the very outliers required for your survival.
>
> An exit must be forward-looking, based on what the price is likely to do next rather than where you happened to buy. The market has no memory of your cost basis, and anchoring your decisions to it is a form of self-sabotage. In the end, it is not the frequency of your profits that matters, but whether their magnitude is allowed to fulfill its primary function: paying for your risk. Easier said than done, but it is what it is.

@Cheshire_Cap followed with the arithmetic "for my less mathematically inclined friends": you lose 50% on 80% of the coins you buy and make 5x on the other 20%, so EV is +40%. Take profit aggressively at 2x and EV flips to -20%: "you literally will go broke taking profits if you continue playing this game". The same point is made in [[Crypto Trading]].

### Economic-service filter

Before trusting a statistical pattern, ask what economic service the strategy provides. This does not prove an edge, but it is a first-principles filter for separating a plausible market mechanism from pattern noise (from [[Bookmarks - Markets & Crypto]]).

### AI-assisted backtesting

Use agents to remove repetitive implementation work without outsourcing the judgment needed to detect look-ahead bias, overfitting and path dependence. Removing losing weekdays after seeing the results, or repeatedly optimizing the same historical sample, can fit noise. Freeze the evaluation protocol, reserve unseen periods, and include execution costs and risk before treating a result as evidence. The post quotes a profit screenshot; that is not evidence of a reproducible strategy (from [[Bookmarks - Markets & Crypto]]).

### Calls versus execution

Calling an exact top or bottom is a different activity from running a profitable strategy. Sizing, path, leverage, costs, invalidation and exits can turn a correct directional call into a losing trade, and a mediocre entry can support an excellent trade (from [[Bookmarks - Markets & Crypto]]). The saved post is by @blknoiz06; the note links @0xaporia's original post alongside it.

### Curiosity, first principles and optimism

- **Curiosity (12 March 2026).** "I’ve come to believe that curiosity is more important than most other traits." He says he values being corrected, and that the most useful feedback he has had "rarely came from experts, but other curious autodidacts."
- **Markets as training** (from [[Bookmarks - Culture & Ideas]]). A reflective essay arguing that investing can train self-accountability, explicit assumptions, hypothesis revision, problem definition, systems thinking and attention to trade-offs, and that the habits transfer to other domains. It is not evidence that investors become wiser; keep the practices and discard the universal claims.
- **Optimism (23 February 2026).** In his words: "Life is fucking electric bro. Don’t fall for the doomer shit. That’s for losers and normies scared of their own shadows. Walk around like God sent you and smile at everyone you see. Spread light and abundance. Build things and take chances. This is the best time in history!"

## Links

- [Poker players and variance](https://x.com/0xaporia/status/1894332130093629551) — Post on poker players accepting variance and folding, against novice traders who confuse constant activity with progress. Quoted in [[CT]].
- [Strategy hopping thread](https://x.com/0xaporia/status/1894297482500141122) — Thread on strategy hopping as flight from the nonlinear phase, with the losing-streak probabilities at 50% and 40% win rates. Quoted in [[CT]].
- [Satoshi's production-cost passage](https://x.com/0xaporia/status/1985758486186049808) — Post of 4 November 2025 quoting Satoshi Nakamoto (2010) on price gravitating toward production cost.
- [Exit decisions must be forward-looking](https://x.com/0xaporia/status/2031360073700724823) — Post of 10 March 2026 arguing that arbitrary profit-taking can destroy positive expectancy because it anchors the exit to the entry price.
- [Cheshire Capital's EV math](https://x.com/Cheshire_Cap/status/2031362490219503757) — @Cheshire_Cap's follow-up to the profit-taking post: 80% losers at -50% and 20% winners at 5x is EV +40%, and taking profit at 2x makes it EV -20%.
- [Economic-service filter for trading systems](https://x.com/0xaporia/status/2069883507321573760) — Proposes asking what economic service a trading strategy provides, as a first-principles filter between grounded edges and pattern noise.
- [AI backtesting: remove clerical friction, preserve judgment](https://x.com/0xaporia/status/2092917529597321394) — Separates repetitive implementation work from the learning needed to spot look-ahead bias, overfitting and path dependence; keep the evaluation protocol apart from parameter tuning.
- [Profitable execution matters more than calling exact tops and bottoms](https://x.com/blknoiz06/status/2091151900729115029) — @blknoiz06's post: a correct turning-point call can still lose money through sizing, path, leverage or exit errors.
- [Original post on calls versus execution](https://x.com/0xaporia/status/2091034462561706287) — @0xaporia's original post, linked next to the @blknoiz06 post above.
- [Markets as training in first-principles thinking](https://x.com/0xaporia/status/1896237754985414745) — Reflective essay on what investing teaches: self-accountability, explicit assumptions, hypothesis revision, systems thinking and trade-offs.
- [Curiosity and corrective feedback](https://x.com/0xaporia/status/2032146903945666731) — Post of 12 March 2026 on curiosity, intellectual humility and feedback from other autodidacts.
- ["Life is electric"](https://x.com/0xaporia/status/2025968176886890587) — Post of 23 February 2026 telling readers not to fall for the doomer narrative and to build things and take chances.
- [How to build systems that actually work](https://x.com/0xaporia/status/2011776046085857560) — X post under that title, listed in [[Markets - Articles]]. Saved without a note.

## Related

[[Traders Directory]] · [[Crypto Takes]] · [[Trading Psychology]] · [[Trading Philosophy]] · [[Crypto Trading]] · [[Behavioral Finance]] · [[Decision-Making]] · [[Satoshi Nakamoto]] · [[thiccythot]] · [[X-Bookmarks]] · [[Markets - Articles]] · [[Bookmarks - Markets & Crypto]] · [[Bookmarks - Culture & Ideas]]
