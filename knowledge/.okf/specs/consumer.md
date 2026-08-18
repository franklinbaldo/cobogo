---
type: Spec
title: Type specification — consumer
specifies_type: consumer
status: normative
---

# `consumer`

A real product or project surface observed by Cobogó, with adoption and evidence state kept separate.

## Current required frontmatter

- `adoption_status`
- `capabilities_used`
- `constraints`
- `interaction_profile`
- `last_verified`
- `repository`
- `runtime`
- `surface`
- `title`
- `unmet_needs`

## Current optional frontmatter

- `description`
- `integration_evidence`
- `last_journey_review`
- `local_identity`
- `operational_capabilities`

## Invariants

`title` and `repository` are stable natural identities in the current bundle and are UNIQUE in `okf.schema.sql`. `adoption_status`, operational capability, execution evidence, deploy evidence and rendered evidence are distinct facts and MUST NOT be silently collapsed.
