---
title: X Bookmark Cleanup - 30 September 2026
type: source
domain: personal
sources:
  - snapshots/2026-09-30-x-evergreen-cleanup/receipt.md
  - snapshots/1790805107293-1d59d21b8449/bookmarks/Index.md
related:
  - Evergreen Lessons from X - September 2026
  - X Bookmark Review - 30 September 2026
  - Live X Bookmark Inventory - 30 September 2026
  - X-Bookmarks
  - Personal Knowledge Management
  - Bookmarks - AI & Agents
  - Bookmarks - Culture & Ideas
  - Bookmarks - Design & Frontend
  - Bookmarks - Developer Tools
  - Bookmarks - Markets & Crypto
  - Bookmarks - Personal & Life
  - Bookmarks - Reference & Utilities
created: '2026-09-30'
updated: '2026-10-15'
tags: [bookmarks, cleanup, bird, account-state, operation-receipt, x, evergreen]
summary: "Record of clearing all seventy X bookmarks on 30 September 2026: what was kept first, the removal timings, and how the empty list was verified."
reviewed: '2026-09-30'
review_status: archive
review_notes: The seventy successful removal IDs were reconciled with the complete pre-removal inventory and the reloaded empty Bookmarks view; the record says nothing about the account's later state.
---

# X Bookmark Cleanup - 30 September 2026

On 30 September 2026 all 70 bookmarks on the X account @entropyholdings were removed. Before that, the lasting knowledge in them was kept as fourteen entries in Erlin's bookmark notes. Bird, the tool used to read and remove the bookmarks, reported success for every removal. Its own follow-up read failed, so a freshly loaded and reloaded X web page gave the final check: the Bookmarks list was empty.

The lessons themselves are in [[Evergreen Lessons from X - September 2026]]. The verdict on each of the seventy posts is in [[X Bookmark Review - 30 September 2026]], and the list as it stood before removal is in [[Live X Bookmark Inventory - 30 September 2026]].

## What was kept before clearing

Erlin's instruction was to keep only evergreen knowledge, then clear every X bookmark.

- **Starting list:** 70 unique saved posts, read through to the last page. It still matched the reviewed set before anything was removed.
- **Kept:** 14 entries distilled from 15 posts. The two privacy posts were merged into one entry.
- **Where they went:** seven bookmark categories — [[Bookmarks - AI & Agents]], [[Bookmarks - Culture & Ideas]], [[Bookmarks - Design & Frontend]], [[Bookmarks - Developer Tools]], [[Bookmarks - Markets & Crypto]], [[Bookmarks - Personal & Life]] and [[Bookmarks - Reference & Utilities]].
- **Subjects kept:** reasoning, trading process, engineering, privacy, AI-data provenance, voice for administration, interactive explanation, ingredient literacy, and planning a deliberate night out.
- **Dropped:** release news, product hype, forecasts, rumours, humour, entertainment queues and unverified clinical claims.

The two September clears before this one, on 17 and 22 September 2026, kept every live bookmark as an attributed entry before removing it. The 30 September clear replaced that keep-all rule with an evergreen-only one for these seventy posts. Entries kept under the older rule stay in the notes unchanged.

## Removal

| Step | Time (UTC) | Result |
| --- | --- | --- |
| Removal started | 2026-09-30T21:46:30.874514+00:00 | Bird began removing the seventy IDs in seven batches of ten. |
| Removal requests completed | 2026-09-30T21:48:03.384380+00:00 | 70 successful removal messages; every batch exited 0. |
| Bird follow-up read | — | Failed: "No client bundles discovered; x.com layout may have changed." |
| Web interface check | 2026-09-30T21:51:47.209378+00:00 | Bookmarks list empty after a fresh load and an independent reload. |

## How the empty list was verified

Bird could not refresh X's client bundles after the removal, so it could not confirm the result itself. The check was made in the X web interface instead, through computer use.

- **Account:** signed in as @entropyholdings.
- **Page:** the X history page with the Bookmarks tab selected, loaded fresh and then reloaded. Loading had finished.
- **Empty state shown:** "Save posts for later Bookmark posts to easily find them again in the future."
- **Remaining bookmarks:** 0.
- **Pre-removal response SHA-256:** `f861f8b7a0235d832d77556081eb20a9458dff738a6f600248fa3178b6e32afa`
- **After-removal response SHA-256:** `dedee0164fdadb39b887213506ff24046ec68b215fcb1eb088b024c5f955b9df`

These are dated facts about the account on 30 September 2026. They say nothing about bookmarks saved later, and they are separate from the evidence limits on the lessons, which [[Evergreen Lessons from X - September 2026]] sets out.

## What the cleanup did not remove

The cleanup removed bookmark markers on X and nothing else. The evergreen entries, their original attribution, the older bookmark notes in [[X-Bookmarks]] and the category pages, and the raw source files all remain available locally. For how the bookmark notes fit into the wider note system, see [[Personal Knowledge Management]].

## Removed post IDs

The seventy X post IDs whose bookmarks were removed, in the order of the record:

```text
2105326261069295711  2105124827145355591  2105240431193989582  2105266419331899756  2105335831888072981
2105092170998743134  2104984504133918973  2104815339846721845  2104618178974245029  2104594527797330352
2104760418602463742  2104514885673443709  2104717103508967657  2104622481080525138  2104638750022402356
2104758444368769253  2104622416383369303  2104572127617994917  2104612093668548776  2104510929300037683
2104323759339655446  2103674669392183654  2104254223517106349  2103928802242179120  2103928811192541443
2103805052817453255  2103760572835938540  2103807409395233170  1953630076496728493  2103860364089708742
2102591147927654847  2103263150221234471  2103901914375045526  2103869801898844321  2103600616694051018
2103571004543193098  2103775182506631522  2103814550198059296  2103757218621653040  2099636310692835673
2100000461009158533  2100362346145501450  2103804906356224076  2103836826729623943  2103411123424768349
2103475624010760685  2103503259650707609  2103599870275649891  2103665365968658809  2103543472330342835
2103517099511451940  2103150600753950923  2103340252668760111  2103315922098470926  2103300207857353043
2103330591189979274  2102827785811333410  2103061202641264797  2102747612600271198  2102869344438911310
2102715010309095779  2102841453550395418  2102862042231439645  2102822521510789146  2102836288541913351
2102718346357551248  2102540461131063358  2102483547080765642  2102519291589669061  2039652368443158804
```

## Links

- [X history page, Bookmarks tab](https://x.com/i/history) — The X web page where, with the Bookmarks tab selected, the empty list was observed after removal.

## Related

[[Evergreen Lessons from X - September 2026]] · [[X Bookmark Review - 30 September 2026]] · [[Live X Bookmark Inventory - 30 September 2026]] · [[X-Bookmarks]] · [[Personal Knowledge Management]]
