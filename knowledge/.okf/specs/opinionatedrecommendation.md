---
type: Spec
title: Type specification — OpinionatedRecommendation
specifies_type: OpinionatedRecommendation
status: normative
---

# `OpinionatedRecommendation`

A falsifiable Cobogó design position that may exist before consumer adoption and whose maturity changes only with evidence.

## Current required frontmatter

- `maturity`
- `problem`
- `slug`
- `type`
- `validated_in`

## Current optional frontmatter

None.

## Invariants

- `type` MUST be exactly `OpinionatedRecommendation`.
- `slug` identifies the recommendation and SHOULD match the filename stem.
- `maturity` MUST be `opinionated`, `validated`, `stable`, or `retired`.
- `opinionated` MAY have an empty `validated_in`; lack of prior adoption is not a schema or governance failure.
- `validated` requires evidence of successful use in at least one consumer recorded in `validated_in` and in the recommendation body.
- `stable` requires convergent successful evidence in at least two consumers while preserving local identity.
- `retired` means evidence made the recommendation inappropriate as a current default; the body SHOULD preserve the falsifying evidence.
- The body MUST distinguish position, rationale, observable criterion, escape hatch, evidence, and falsification so the recommendation remains testable rather than dogmatic.
