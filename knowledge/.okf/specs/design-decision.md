---
type: Spec
title: Type specification — design-decision
specifies_type: design-decision
status: normative
---

# `design-decision`

A bounded decision that records why a concrete consumer/design-system choice was made and its maturity.

## Current required frontmatter

- `consumer`
- `status`
- `title`

## Current optional frontmatter

- `description`

## Invariants

`consumer` references an existing `consumer.title` through `okf.schema.sql`. A decision records authority and rationale; it does not itself prove downstream adoption.
