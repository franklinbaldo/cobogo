---
type: Spec
title: Type specification — oficina-icon
specifies_type: oficina-icon
status: normative
---

# `oficina-icon`

An experimental icon concept in the Cobogó Oficina. It records cultural research, semantic hypotheses and asset provenance before any downstream adoption or promotion.

## Required frontmatter

- `name`
- `slug`
- `status`
- `category`
- `cultural_relevance`
- `cultural_scope`
- `stereotype_risk`
- `semantic_candidates`
- `avoid_semantics`
- `research_status`

## Conditional asset contract

`svg`, `png_1x`, `png_2x` and `preview` MUST only be declared when those resources actually exist. From `status: drawn` onward, an SVG and at least one inspectable preview are expected.

## Lifecycle

`status` follows `proposed → researched → drawn → pressure-tested → adopted`, with `rejected` available when the hypothesis fails. `adopted` records downstream use; it does not promote the icon to `cobogo/core` or canon automatically.

## Boundary

Cultural relevance is not universal semantic meaning. Candidate interface metaphors remain hypotheses until pressure-tested in real consumers, and stereotype risk must remain recoverable alongside the drawing.
