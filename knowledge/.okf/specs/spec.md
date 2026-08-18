---
type: Spec
title: Type specification — Spec
specifies_type: Spec
status: normative
---

# `Spec`

A specification document for one producer-defined OKF type used in the Cobogó knowledge bundle.

## Required frontmatter

- `title`
- `specifies_type`
- `status`

## Invariants

- `type` MUST be exactly `Spec`.
- `specifies_type` names the producer-defined type whose semantics this document governs.
- `status: normative` means changes to the governed type's meaning should update its spec in the same change.
- A spec documents semantic intent; generated JSON Schema, Zod, Pydantic, DuckDB and inferred `.schema.sql` outputs remain projections unless separately committed as explicit contracts.
