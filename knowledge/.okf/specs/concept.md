---
type: Spec
title: Type specification — Concept
specifies_type: Concept
status: normative
---

# `Concept`

A design concept observed in one or more live consumers and retained below the shared-pattern promotion gate.

## Current required frontmatter

- `observed_in`
- `provenance`
- `status`
- `type`

## Current optional frontmatter

None.

## Invariants

- `type` MUST be exactly `Concept`.
- `status` MUST be one of `concept`, `candidate` or `promoted`.
- `observed_in` MUST name repositories in which the concept was actually observed; deleted repositories do not count as live evidence.
- Every provenance entry MUST identify the repository, commit, route and capture supporting the observation.
- A concept MUST NOT be treated as a shared Cobogó pattern merely because it has been observed once. Promotion requires the independent multi-consumer evidence gate defined by the Cobogó routine.
- Historical evidence may explain origin, but only live, resolvable consumers may support current promotion counts.
