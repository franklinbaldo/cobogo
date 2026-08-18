---
type: Spec
title: Type specification — foundation-reconciliation
specifies_type: foundation-reconciliation
status: normative
---

# `foundation-reconciliation`

A brownfield mapping between a consumer’s existing design primitives and Cobogó authority layers.

## Current required frontmatter

- `consumer`
- `related_issue`
- `status`
- `title`

## Current optional frontmatter

- `description`

## Boundary

`consumer` may be a corpus link rather than a natural-key title; this type is therefore intentionally not covered by the current consumer foreign-key contract. Reconciliation classifies authority, not adoption by itself.
