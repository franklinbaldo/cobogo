---
type: Spec
title: Type specification — SurfaceQualityAssessment
specifies_type: SurfaceQualityAssessment
status: normative
---

# `SurfaceQualityAssessment`

A versioned evidence-backed assessment of one consumer's public surface across D1/D2/D3, UX, UI and trust.

## Current required frontmatter

- `band`
- `blockers`
- `capture`
- `commit`
- `date`
- `deploy`
- `repo`
- `scores`
- `total`
- `trend`
- `type`

## Current optional frontmatter

None.

## Invariants

- `type` MUST be exactly `SurfaceQualityAssessment`.
- `scores` MUST contain `clarity`, `explainability`, `autonomy`, `ux`, `ui`, and `trust`, each scored from 0 through 4 and backed by observable evidence in the body.
- `total` MUST equal the sum of the six scores.
- Base bands are `critical` for 0–7, `weak` for 8–12, `average` for 13–17, `good` for 18–21, and `reference` for 22–24.
- Any dimension scored `0` is a blocker and caps the final band at `critical`; aggregate score MUST NOT hide a broken dimension.
- `trend` MUST be `down`, `flat`, or `up` relative to the previous comparable assessment; the first baseline SHOULD use `flat` unless evidence supports another value.
- `capture`, `commit`, and `deploy` bind the judgment to the observed public state. Unknown or unavailable evidence MUST be stated rather than invented.
- Assessment measures quality, not visual similarity to Cobogó. A consumer-local solution may score higher than a shared default and should feed learning back into the corpus.
