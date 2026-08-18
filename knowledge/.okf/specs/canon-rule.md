---
type: Spec
title: Type specification — canon-rule
specifies_type: canon-rule
status: normative
---

# `canon-rule`

A stable Cobogó design principle promoted from reference evidence and used to review downstream decisions.

## Identity

- `type` MUST be exactly `canon-rule` for concepts governed by this specification.
- The Markdown concept remains the semantic authority; generated schemas/databases are projections.

## Current required frontmatter

These fields are required by the current authored Cobogó convention:

- `status`
- `title`

## Current optional frontmatter

- `description`
- `review_criterion`
- `review_question`

## Evolution

Changing the meaning of this type requires updating this specification in the same change. New fields may be introduced without a physical schema declaration; a `.schema.sql` should be added only when a stable physical type buys a real invariant.
