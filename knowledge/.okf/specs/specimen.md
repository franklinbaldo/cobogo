---
type: Spec
title: Type specification — specimen
specifies_type: specimen
status: normative
---

# `specimen`

A concrete composition/interaction probe tied to a real consumer and product job; a specimen is evidence, not automatic canon.

## Current required frontmatter

- `consumer`
- `purpose`
- `title`

## Current optional frontmatter

- `description`
- `status`
- `uses_grammar`

## Invariants

`consumer` references an existing `consumer.title` through `okf.schema.sql`. A specimen may pressure-test a hypothesis; it MUST NOT be treated as proof of adoption or stable core by existence alone.
