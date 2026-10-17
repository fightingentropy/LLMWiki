---
title: Safe Isolation
type: topic
domain: electrics
summary: "The 13-step procedure for safely isolating a circuit or installation, the prove-test-re-prove routine, live-tail and DNO-fuse points, and common errors."
tags: [electrics]
related: ["Electrical Safety", "Test Equipment Standards", "Continuity Testing", "Electrical Study Map"]
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: partial
review_notes: "Isolation, lock-off, notice and proving steps were checked against HSE HSG85 and GS38; the Electrician's Guide reference and the on-load main-switch point were not."
source_gaps:
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md"
---

# Safe Isolation

Safe isolation makes a circuit, area or piece of equipment dead, keeps it dead while you work, and proves it. Do it the same way every time; it is examined in the theory and the practical. The course takes the steps from the Electrician's Guide to the Building Regulations (7.5) and Best Practice Guide 2, because GN3 does not set them out clearly. HSE's [HSG85](https://www.hse.gov.uk/pubns/priced/hsg85.pdf) (paras 46–55) gives the same core: identify, disconnect, lock off, keep removed fuses, post notices, and prove dead at the point of work with a detector proved before and after use, not a multimeter or non-contact tester.

## The procedure

1. **Identify** what is to be isolated: the whole installation, a circuit, an area or one item.
2. **Inform and agree** with the client or occupants before switching off, and discuss the impact.
3. **Use an approved voltage indicator (AVI)** to GS38 ([[Test Equipment Standards]]), suited to the voltage, with leads and probes in good condition.
4. **Prove the indicator** on a proving unit or a known live source. If it does not work, you cannot prove dead.
5. **Isolate at the best point:** an external isolator for a whole board if there is one, otherwise the main switch. Switch the outgoing circuits off first; the main switch is on-load rated, but this is better practice.
6. **Lock off** the isolator or main switch with the correct device, fitted correctly. Poor fitting is a common error.
7. **Remove fuses** where relevant and keep them under your control.
8. **Keep the key** on you and hand it to no one.
9. **Post warning labels** showing that isolation is in effect and work is under way.
10. **Prove dead** on the load side of the isolator, at the point of work, not just at the board.
11. **Use a consistent sequence.** The course teaches earth–line, earth–neutral, line–neutral, starting from the least dangerous point such as the main earthing terminal.
12. **Re-prove the indicator** on the known live source. If it fails now, the dead reading cannot be trusted.
13. **Replace covers** before leaving the board: the incoming tails may still be live.

Correction, 16 October 2026: GS38 and HSG85 set no conductor-pair order. HSG85 (para 53) asks that all supply conductors be proved dead on three-phase or multi-supply equipment, and Electrical Safety First's [Best Practice Guide 2](https://select.org.uk/common/Uploaded%20files/Technical/FreeDownloads/Best_Practice_Guide_2.pdf) that all line, neutral and protective conductors be proved dead.

## Prove, test, re-prove

Steps 4, 10 and 12 together show three things: the indicator worked when you used it, the circuit is dead, and the indicator did not fail during the test. [GS38](https://www.hse.gov.uk/pubns/priced/gs38.pdf) (para 20) prefers a proving unit.

## Points that catch people out

- **Incoming tails stay live** unless isolated upstream. Never assume the whole board is dead; work below the point of isolation and put covers back.
- **Test at the point of work**, not only at the distribution board.
- **The DNO cut-out fuse** protects the network side and is not yours to pull by default.
- **Bonding tests** can mean disconnecting a conductor from the main earthing terminal; see [[Continuity Testing]] for the open-PEN hazard.

Correction, 16 October 2026: "never withdraw the DNO fuse" was too absolute. The [IET](https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/) lists authorised routes: the DNO, the supplier's meter operator, Safe Isolation Providers under the Retail Energy Code, and anyone the DNO expressly permits; some DNOs, such as SSEN, allow trade-association electricians. Follow the local DNO's procedure.

## Common errors

|Error|Why it matters|
|---|---|
|Not proving the indicator first|The dead reading cannot be trusted|
|Lock-off fitted wrongly|It does not stop re-energisation|
|Testing at the board, not the work point|The work area is not proved dead|
|Assuming incoming tails are dead|They are live|
|Not re-proving the indicator|You cannot show it still worked|
|Leaving board covers off|Live tails are exposed|
|Pulling the DNO fuse without authority|Dangerous and not permitted|
