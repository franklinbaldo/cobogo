---
type: Spec
title: Type specification — ConsumerCard
specifies_type: ConsumerCard
status: normative
---

# `ConsumerCard`

The canonical current record for one Cobogó consumer surface.

## Current required frontmatter

- `gap_score`
- `last_reviewed`
- `repo`
- `site`
- `status`
- `type`

## Current optional frontmatter

None.

## Invariants

- `type` MUST be exactly `ConsumerCard`.
- `repo` is the canonical repository identity and MUST be unique in `okf.schema.sql`.
- `status` MUST be `active` or `dormant`.
- `gap_score` MUST represent the number of D1/D2/D3 dimensions with a material reader-of-outside gap and therefore MUST be between 0 and 3.
- `last_reviewed` records the latest factual review date of the card.
- The card describes the live consumer only. If the repository is confirmed nonexistent, the card MUST be removed from the current corpus rather than retained as active or dormant documentation.
- Repository renames MUST be reconciled to the live canonical repository identity instead of being treated as deletion when GitHub proves continuity.
