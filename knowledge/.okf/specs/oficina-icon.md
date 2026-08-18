---
type: Spec
title: Type specification — oficina-icon
specifies_type: oficina-icon
status: normative
---

# `oficina-icon`

An experimental icon concept in the Cobogó Oficina. The Markdown concept is semantic authority; SVG, PNG and previews are resources derived from it.

## Core invariants

1. `slug` is stable even when the drawing evolves.
2. `status` describes maturity of the hypothesis, not perceived aesthetic quality.
3. `cultural_relevance` does not replace `cultural_scope`: familiarity in Brazil does not make a reference universally Brazilian.
4. `stereotype_risk` stays recoverable so brasilidade does not collapse into exotic decoration.
5. `semantic_candidates` are hypotheses to pressure-test; they are not universal meanings or accessible names.
6. Asset fields only appear when those resources really exist.
7. From `drawn` onward, `svg` and at least one inspectable raster preview must resolve.
8. Downstream adoption does not automatically promote an icon to `cobogo/core` or canon.

## Frontmatter by lifecycle state

### `proposed`

- `type: oficina-icon`
- `name`
- `slug`
- `status`
- `category`
- `cultural_relevance`
- `cultural_scope`
- `stereotype_risk`
- `research_status`
- `semantic_candidates`
- `avoid_semantics`

### `researched`

Everything in `proposed`, plus sourced cultural context in the body and `source_links`.

### `drawn`

Everything in `researched`, plus `visual_family`, `license`, `svg` and `preview`. PNG/WebP variants remain optional.

### `pressure-tested`

Everything in `drawn`, plus downstream evidence naming the consumer/specimen, task, state and observed result — including confusion or rejection.

### `adopted`

Requires real downstream adoption evidence. It still does not imply shared-core promotion.

### `rejected`

Preserve why the hypothesis failed and the evidence that falsified it instead of deleting the concept.

## Asset convention

Suggested path once drawings exist:

```text
knowledge/oficina/icons/assets/<slug>/
  icon.svg
  icon@1x.png
  icon@2x.png
  preview.png
```

If formal variants such as outline/filled/duotone become real, version them explicitly instead of silently overwriting the visual contract.

## Accessibility

An icon asset does not determine its accessible semantics. A consumer may use the same asset decoratively, informatively or interactively and must provide text/accessible naming according to the task.
