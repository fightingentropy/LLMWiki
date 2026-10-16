---
title: Safe Isolation
type: topic
domain: electrics
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Electrical Safety
  - GS38
  - Continuity Testing
  - Test Equipment Standards
  - Inspection and Testing Fundamentals
  - Electrical Study Map
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - safe-isolation
  - procedure
  - voltage-indicator
  - lock-off
  - proving-dead
  - dead-testing
  - exam
summary: "The 13-step procedure for safely isolating a circuit or installation, with the prove, test, re-prove indicator routine, live-tail warnings and common errors."
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
reviewed: '2026-10-16'
review_status: partial
review_notes: "Isolation, locking-off, notice, proving-dead and indicator-proving steps were checked against HSE HSG85 and GS38, with Electrical Safety First's Best Practice Guide 2 and IET Wiring Matters for service-fuse withdrawal; the Electrician's Guide chapter reference, the on-load main-switch point and the GN3 bonding-disconnection practice need paid texts and remain unchecked."
---

# Safe Isolation

Safe isolation is the procedure for making an installation, circuit, area or piece of equipment dead, keeping it dead while you work, and proving it. The notes call it really important, critical for exams and practicals, and not clearly highlighted in GN3. It has to be done correctly every time. This page holds the full 13-step sequence, the voltage indicator routine that underpins it, the points where people get caught out, and the common errors.

The procedure comes from a webinar summary whose transcript can no longer be found. It does not cover every supply arrangement, and it does not prove that every source has been isolated. Check it against current guidance before relying on it at work.

References named in the notes:

- Electrician's Guide to the Building Regulations (Chapter 7 / 7.5)
- Best Practice Guide 2

## Before you touch anything

### 1. Identify what is to be isolated

Determine the scope:

- Entire installation?
- Specific circuit?
- Particular area?
- Specific equipment?

### 2. Inform and agree with the client or occupants

Before turning power off:

- Explain what you are doing.
- Get permission or agreement.
- Discuss the impact on occupants.

## The voltage indicator

The indicator is what lets you prove dead, so it has to be right before and after the test. The routine is prove, test, re-prove: steps 3 and 4 here, then step 12 after proving dead.

### 3. Use an approved voltage indicator (AVI)

Requirements:

- Approved and compliant with [[GS38]], the HSE guidance on test leads and probes.
- Appropriate for the voltage and frequency involved.
- In good condition: safe design, proper lead and probe condition, test leads intact and undamaged, and appropriate for the work.

### 4. Prove the voltage indicator works

Before isolation, either:

- test it on a known live source, or
- use a proving unit.

Critical reason: if the indicator does not work, you cannot prove dead safely.

## Isolating and securing

### 5. Isolate at the best point

Preferred approach:

- Use an external isolator if one is available (for whole-DB isolation).
- Otherwise use the main switch.
- Turn off outgoing circuits first, then operate the main switch. The main switch is an on-load switch, but switching the circuits off first is better practice.

### 6. Lock off the isolator or main switch

- Use the correct lock-off device.
- Fit it correctly. Incorrect fitting is a common error.
- This prevents accidental re-energisation.

### 7. Remove fuses if necessary

Where relevant:

- Remove fuses as an additional precaution.
- Keep them with you or in a controlled location.

### 8. Retain the key personally

- Keep the isolation key with you at all times.
- Do not hand it to anyone else.
- This prevents unauthorised re-energisation.

### 9. Apply warning labels and signage

- Use appropriate warning labels.
- Make it visible that work is in progress.
- Show that isolation is in effect.

## Proving dead and re-proving the indicator

### 10. Prove dead on the load side

Prove dead at the correct location:

- Prove on the load side of the isolator or main switch, not the supply side.
- Incoming tails remain live unless isolated upstream.
- Proof must be at the point of work, not just at the distribution board.

### 11. Use a consistent proving sequence

Standard sequence recommended:

1. Earth to line
2. Earth to neutral
3. Line to neutral

Reasoning: start from the least dangerous point first (for example the main earth terminal) and work towards the most dangerous.

Correction, 16 October 2026: HSE's [GS38](https://www.hse.gov.uk/pubns/priced/gs38.pdf) and [HSG85](https://www.hse.gov.uk/pubns/priced/hsg85.pdf) set no conductor-pair order. HSG85 (para 53) asks that all supply conductors be proved dead on three-phase or multi-supply equipment, and Electrical Safety First's [Best Practice Guide 2](https://select.org.uk/common/Uploaded%20files/Technical/FreeDownloads/Best_Practice_Guide_2.pdf), an industry guide, asks that all line, neutral and protective conductors be proved dead.

### 12. Re-prove the voltage indicator

After proving dead, test the indicator again on a known live source. This confirms the indicator still works and that it was functioning when you tested the circuit.

Critical: if the indicator does not re-prove on a known live source, the initial test result is questionable.

### Prove, test, re-prove

1. Prove the indicator works on a known live source before isolation.
2. Use the indicator to prove the circuit dead.
3. Prove the indicator works again on a known live source after testing.

This confirms three things:

- The indicator was working when you used it.
- The circuit is actually dead.
- The indicator is still working (it did not fail during use).

## Finishing at the board

### 13. Replace covers before leaving the DB

Before leaving the distribution board:

- Replace the covers properly.
- Remember that incoming tails may still be live.
- Covers protect against accidental contact.

## Critical safety points

### Incoming tails remain live

Unless isolated upstream of your working point, the incoming supply tails (from the meter or DNO) remain live:

- Never assume the whole DB is dead.
- Always work safely below the point of isolation.
- Replace covers to protect others.

### Do not withdraw DNO fuses

- DNO (Distribution Network Operator) fuses are not to be withdrawn without authorisation.
- They protect the utility side.
- Improper removal is dangerous and potentially illegal.

Correction, 16 October 2026: authorised routes exist. IET's [Wiring Matters, July 2025](https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/) says the DNO, the supplier's meter operator, Safe Isolation Providers under the Retail Energy Code, and anyone the DNO expressly permits may withdraw the cut-out fuse, and some DNOs let trade-association electricians do it under their own procedure. Check the local DNO's rules first.

### Test at the point of work

- Do not just test at the distribution board.
- Prove dead at the actual location of the work.
- This confirms safety for your specific work area.

### Elimination of parallel paths

When testing bonding conductors (see [[Continuity Testing]]):

- You may need to disconnect from the main earth terminal (MET).
- The purpose is to eliminate parallel paths that distort readings.
- This is a temporary measure during testing only.

## Common errors

| Error | Why it matters |
| --- | --- |
| Not proving the indicator first | You can't trust the dead proof. |
| Incorrect lock-off fitting | It doesn't prevent re-energisation. |
| Testing at the DB instead of the work point | It doesn't prove the work area is safe. |
| Assuming incoming tails are dead | They are live. |
| Not re-proving the voltage indicator | You can't confirm it still works. |
| Leaving DB covers off | It exposes live tails. |
| Withdrawing DNO fuses | Not authorised, and dangerous. |

## In practice

Safe isolation is:

- A deliberate, methodical process.
- Performed the same way every time.
- Critical for personal safety and site safety.
- A professional responsibility.
- Not a shortcut or a variable procedure.

## Links

- [HSE HSG85 (PDF)](https://www.hse.gov.uk/pubns/priced/hsg85.pdf) — HSE's safe working practices guidance; paras 46–55 set out identification, disconnection, locking off, notices and proving dead.
- [HSE GS38, fourth edition (PDF)](https://www.hse.gov.uk/pubns/priced/gs38.pdf) — HSE guidance on test probes, leads and voltage detectors; para 20 says to prove a detector before and after use, preferably on a proving unit.
- [Electrical Safety First — Best Practice Guide 2, Issue 4.2 (PDF)](https://select.org.uk/common/Uploaded%20files/Technical/FreeDownloads/Best_Practice_Guide_2.pdf) — industry guide to safe isolation on low voltage installations: isolation methods, lock-off kit, prohibition signs, proving dead and service-fuse withdrawal; copy hosted by SELECT.
- [IET Wiring Matters — Removing the distributor's cut-out fuse (July 2025)](https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/) — who may withdraw a DNO cut-out fuse, the Safe Isolation Provider route, and hazards of old cut-outs.

## Related

[[Electrical Safety]] · [[GS38]] · [[Continuity Testing]] · [[Test Equipment Standards]] · [[Inspection and Testing Fundamentals]] · [[Electrical Study Map]] · [[Electrical Evidence Review - October 2026]]
