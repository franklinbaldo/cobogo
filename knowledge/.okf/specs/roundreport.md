---
type: Spec
title: Type specification — RoundReport
specifies_type: RoundReport
status: normative
---

# `RoundReport`

An immutable operational record of one Cobogó surface-review round, including its pre-registered reader gap, evidence, gates and outcome.

## Current required frontmatter

- `blocked`
- `candidates`
- `captures`
- `date`
- `focus`
- `merged`
- `outcome`
- `prs`
- `routine`
- `type`

## Current optional frontmatter

None.

## Invariants

- `type` MUST be exactly `RoundReport`.
- `routine` MUST be `cobogo` for this corpus.
- `outcome` MUST be one of `closed`, `partial`, `not-closed`, `blocked` or `inspection-only`.
- The pre-registered `Leitor de fora — antes` and `Gap escolhido e critério` sections MUST be written before intervention and MUST NOT be rewritten after seeing the result.
- A visually material intervention MUST record before and after captures; absence of an after capture means the visual loop is not closed.
- A PR MUST NOT be recorded as merged unless every required check was green on its exact head SHA before merge.
- Deleted repositories may appear in historical RoundReports as historical facts, but historical reports MUST NOT make them members of the current consumer rotation or current promotion evidence.
