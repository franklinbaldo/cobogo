---
type: foundation-api
status: experimental
title: Brownfield core adoption workflow
related_issue: https://github.com/franklinbaldo/cobogo/issues/270
---

# Brownfield core adoption workflow

This workflow is derived from the first real external `cobogo/core` adoption in [CausaGanha #878](https://github.com/franklinbaldo/causaganha/pull/878). It is intentionally a record of a migration that happened, not a theoretical sequence invented before use.

The goal is not to make a consumer look like Cobogó. The goal is to move genuinely shared foundation authority upstream while preserving product identity, domain semantics, runtime architecture and consumer-local values.

## The proven sequence

### 1. Classify authority before importing core

Inventory the consumer's existing foundations first. Separate:

- shared semantic roles that Cobogó can own;
- product theme values that must remain local;
- framework adapters;
- domain-specific components/states;
- compatibility aliases;
- historical or deletable duplication.

For CausaGanha this classification existed before adoption in [CausaGanha token reconciliation](./causaganha-token-reconciliation.md). The first measured bridge was deliberately kept even when most declarations were not load-bearing; adoption was not scored by how many `--cobogo-*` names existed.

**Reversible point:** no runtime or visual change yet. A failed classification can be discarded without touching production behavior.

### 2. Choose one real surface with enough pressure

Prefer one existing surface that exercises several relevant contracts and is already important to the product. CausaGanha used `/stats`, which exercises headings, links/focus, tabular data, numeric/data typography, provenance timestamps, state tones and responsive table behavior.

Do not choose a demo page merely because it is easier to migrate.

**Reversible point:** the chosen surface can be abandoned without changing the rest of the site.

### 3. Pin the exact shared authority

Use a released package when a suitable release exists. When it does not, pin an immutable upstream revision rather than copying and editing Cobogó locally.

CausaGanha vendors the exact upstream `core.css` blob from a specific Cobogó commit and stores repository, commit, path and Git blob SHA in `cobogo-core.pin.json`. CI recomputes the blob SHA, so consumer-local edits to the vendored core fail.

The rule is:

> a pinned snapshot may be transported downstream; shared core semantics may not be forked downstream.

**Reversible point:** removing the import and pin returns authority to the previous local CSS.

### 4. Order the layers explicitly

The proven order is:

```text
shared Cobogó core
→ consumer semantic mapping/theme values
→ consumer-local CSS/components
```

Shared defaults load first. Product values and legitimate local behavior remain downstream and can override them normally. This keeps `Parentesco sem uniformidade` structural: the same core contract does not imply the same theme, density, typography or page skeleton.

### 5. Remove only duplication that the core actually replaces

Count deletion, not renaming. CausaGanha removed 24 lines of local generic foundation behavior after the core became authoritative, including generic code-font ownership, the generic `:focus-visible` ring and global reduced-motion handling.

It deliberately retained heading hierarchy, Pico adapter behavior, table density/hover, badges, touch targets, brand/marketing styling and all concrete theme values.

A migration with no meaningful local contract removed is an importability test, not adoption evidence.

### 6. Ratchet the authority boundary in CI

Make the migration observable:

- verify the pinned upstream bytes/revision;
- enforce import order;
- forbid the specific local duplicate contracts that were removed;
- keep normal repository tests/builds green.

Do not build a generic conformance engine before there is repeated evidence for one. The first ratchets should encode only the boundary that the migration actually proved.

### 7. Compare the same real surface before and after

Use identical data/fixtures and controlled capture conditions. Record accessibility and information behavior, not only resting pixels.

CausaGanha #878 built base and proposed states from the same deterministic `/stats` fixture and captured both at the same viewport. The resulting pixels were intentionally different: this proved the core was exercised rather than imported decoratively. Review found no clipped content, lost data, broken table semantics, overflow or identity replacement; keyboard focus moved to the shared thicker ring + contrast-gap contract.

A visual difference is not automatically a regression. A pixel-identical result is not automatically success either.

### 8. Record what remains local

Every migration must state the non-shared remainder. For CausaGanha that includes judicial-data purpose, green/gold identity, static Astro/Pages delivery, typographic choices, table density, brand styling and domain semantics.

If the migration makes consumers converge on the same visual identity without a task reason, the shared contract is too large.

### 9. Update the canonical consumer record

After merge, update the Cobogó consumer card with:

- exact adoption status;
- capabilities actually used;
- adopted surface(s);
- immutable integration evidence;
- remaining unmet needs;
- `last_verified` when useful.

Issues and PRs are execution history; the consumer card is current reusable state.

## Compatibility debt

Compatibility aliases are allowed while they carry real consumers. They are not permanent entitlement.

For each alias or bridge keep enough evidence to answer:

- which live surface still depends on it;
- what shared role it maps to;
- whether removing it would change behavior;
- what event permits deletion.

Do not set a calendar-based deprecation lifetime before there is a real migration path. Remove compatibility only when current usage reaches zero and the relevant consumer gates stay green.

## Updating the pin

A Cobogó update should be an explicit consumer change:

1. choose the new upstream commit/release;
2. replace the vendored snapshot byte-for-byte or update the package pin;
3. advance the recorded revision/hash;
4. run the authority ratchets;
5. rebuild and recapture the adopted surface when the shared CSS changed materially;
6. review accepted visual/accessibility delta before merge.

Never patch the vendored copy to make a consumer pass. A needed shared fix belongs upstream in Cobogó; a product-specific override belongs downstream after the shared import.

## Smallest useful conformance check

The first migration suggests four checks are enough until stronger evidence demands more:

1. shared artifact is immutable/pinned;
2. import/layer order is deterministic;
3. duplication explicitly transferred to core cannot silently return;
4. the real adopted surface still builds and passes its normal accessibility/behavior gates.

This is deliberately smaller than a universal Cobogó linter.

## What this workflow does not prove

CausaGanha is one brownfield data-reading product. Its success proves that the framework-agnostic core can carry a real external surface with positive maintenance/accessibility delta. It does **not** prove that every consumer should adopt core, that vendoring is the permanent distribution mechanism, or that the core API is stable.

The core remains experimental until materially different external surfaces provide independent adoption evidence.