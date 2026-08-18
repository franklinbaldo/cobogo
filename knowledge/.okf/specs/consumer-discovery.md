---
type: Spec
title: Type specification — consumer-discovery
specifies_type: consumer-discovery
status: normative
---

# `consumer-discovery`

A dated portfolio-discovery/reconciliation record used to decide which repositories are consumers, adjacent producers, or non-consumers.

## Current required frontmatter

- `last_verified`
- `related_issue`
- `status`
- `title`

## Current optional frontmatter

- `description`

## Boundary

Discovery records are evidence about classification, not adoption claims. Changes in repository reality must supersede stale conclusions.
