---
type: Spec
title: Type specification — comparison
specifies_type: comparison
status: normative
---

# `comparison`

A cross-consumer comparison record that preserves a dated, evidence-bounded conclusion.

## Identity

- `type` MUST be exactly `comparison`.
- The Markdown concept is authority; generated projections are disposable.

## Current required frontmatter

- `last_verified`
- `related_issues`
- `status`
- `title`

## Current optional frontmatter

- `description`

## Evolution

A comparison must keep evidence date and scope recoverable. Physical schemas are introduced only when they buy a stable invariant.
