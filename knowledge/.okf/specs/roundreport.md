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
- `outcome` MUST be one of `closed`, `complete`, `partial`, `not-closed`, `blocked` or `inspection-only`.
- The pre-registered reader perception/problem/criterion MUST be written before intervention and MUST NOT be rewritten after seeing the result.
- A visually material intervention MUST record before and after captures; absence of an after capture means the visual loop is not closed.
- A PR MUST NOT be recorded as merged unless every required check was green on its exact head SHA before merge.
- Deleted repositories may appear in historical RoundReports as historical facts, but historical reports MUST NOT make them members of the current consumer rotation or current promotion evidence.
- New reports MUST answer in plain language what was wrong or missing, what was done, what was proved, what still remains, and why the next round should or should not return to the same project. Technical vocabulary is allowed, but it MUST NOT be the only explanation of the operational state.
- The reference validator `scripts/validate-round-report-clarity.mjs` checks that those five answers exist as substantive sections. It intentionally does not try to score prose quality automatically.

## Reference section names for new reports

- `## O que estava errado ou faltando`
- `## O que foi feito`
- `## O que ficou comprovado`
- `## O que ainda falta`
- `## Por que a próxima rodada deve ou não voltar`

Equivalent headings may be accepted by future tooling when they preserve the same five questions explicitly; the reference validator currently recognizes headings beginning with the names above.
