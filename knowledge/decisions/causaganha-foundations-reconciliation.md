---
type: design-decision
title: CausaGanha foundations reconciliation as first brownfield test
status: proposed
consumer: franklinbaldo/causaganha
---

# CausaGanha foundations reconciliation as first brownfield test

CausaGanha becomes the first real brownfield consumer used to derive the reconciled Cobogó Foundations layer.

The reason is not that it is visually closest to Cobogó. It is useful because it already has a functioning public site and carries overlapping design-system history that can be classified against the blank-sheet model.

## Existing foundation families to classify

In `franklinbaldo/causaganha/web/src/styles/tokens.css`:

1. Pico semantic overrides and green/gold brand values.
2. Product semantic aliases (`--color-primary`, surfaces, content, state colors).
3. Generic typography and spacing scales.
4. Rounded control/field geometry and shadow families.
5. Dark-theme equivalents.
6. A later "Brazilian Modernism Design System" family with paper/concrete neutrals, modernist saturated colors, Archivo/Piazzolla-related typography and legacy aliases.

These must not be treated as one coherent source merely because they coexist in one file.

## Blank-sheet classification questions

For each family or token, assign one primary bucket:

- ideal forgot a real constraint;
- existing carries necessary knowledge;
- existing is only history;
- existing duplicates another source;
- existing preserves a superseded decision;
- existing is fixed by contract;
- ideal is a genuine improvement.

## Expected examples to investigate, not prejudge

- CausaGanha's green/gold may be legitimate local brand identity rather than Cobogó core.
- Pico variables are likely adapter-level mappings even when their semantic role is useful.
- paper/concrete values may be duplicated Cobogó history rather than CausaGanha-owned identity.
- spacing/type roles may contain generic reusable knowledge even when exact values stay local.
- rounded fields/buttons may encode interaction affordance, but `Curva & Concreto` cannot be used as circular justification.
- legacy aliases may be required temporarily by shipped pages while still being historical debt.

## Test surfaces

Use at least:

- homepage/status overview;
- statistics/data-comparison view;
- tribunal/publication detail;
- navigation and filtering controls;
- dark mode where supported.

## Exit condition

The reconciliation is successful only when it can state, for each retained family, whether the source of authority is:

- Cobogó canon/grammar;
- Cobogó foundation role;
- CausaGanha local theme/product identity;
- Pico implementation adapter;
- temporary compatibility alias.

That authority map should drive the later package/API design. It is more important than making token names match.
