---
type: foundation-api
status: stable
title: Brownfield core adoption workflow
related_issue: https://github.com/franklinbaldo/cobogo/issues/270
---

# Brownfield core adoption workflow

This workflow was first derived from the external `cobogo/core` adoption in [CausaGanha #878](https://github.com/franklinbaldo/causaganha/pull/878) and independently pressure-tested by [Ficha #222](https://github.com/franklinbaldo/ficha/pull/222). It is a record of migrations that happened, not a theoretical sequence invented before use.

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

For CausaGanha this classification existed before adoption in [CausaGanha token reconciliation](./causaganha-token-reconciliation.md). Ficha independently classified document baseline/focus/reduced-motion as shared while keeping its archive identity, palette, layout and data behavior local.

**Reversible point:** no runtime or visual change yet. A failed classification can be discarded without touching production behavior.

### 2. Choose one real surface with enough pressure

Prefer one existing surface that exercises several relevant contracts and is already important to the product. CausaGanha used `/stats`; Ficha used its public CNPJ archive/search home, including a locally dark header, provenance, dataset access paths and a remote-data error state.

Do not choose a demo page merely because it is easier to migrate.

**Reversible point:** the chosen surface can be abandoned without changing the rest of the site.

### 3. Pin the exact shared authority

Use a released package when a suitable release exists. When it does not, pin an immutable upstream revision rather than copying and editing Cobogó locally.

Both proven consumers vendor exact upstream `core.css` bytes and record repository, commit, path and Git blob SHA. Their CI recomputes the Git blob SHA, so consumer-local edits to the vendored core fail.

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

A second useful lesson from Ficha is that consumer platform policy can remain local too: core advertises `color-scheme: light dark`, while Ficha explicitly maps itself back to `color-scheme: light` because its actual surface is light-only. Semantic adoption must not accidentally opt a product into a visual mode it does not support.

### 5. Remove only duplication that the core actually replaces

Count deletion, not renaming. CausaGanha removed 24 lines of local generic foundation behavior after the core became authoritative, including generic code-font ownership, the generic `:focus-visible` ring and global reduced-motion handling.

Ficha produced a net 12-line reduction across the two existing surface files it migrated, transferring document baseline and generic focus ownership to core. It used `data-cobogo-inverted` for the focus relation inside its locally dark header rather than recreating a local ring.

Both deliberately retained their product-specific hierarchy, density, branding/theme and domain semantics.

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

CausaGanha #878 captured base and proposed `/stats` states with the same deterministic fixture. Ficha #222 reused its established Project Pages Chromium workflow and compared against the prior baseline capture.

Ficha adds an important evidence lesson: both baseline and proposed captures reached the same `remote-data-unavailable` state because the CI environment could not fetch the Internet Archive parquet, and both had zero page errors. The correct review compares like state with like state and preserves that limitation; a green screenshot job must not be promoted to “hydrated data proof”.

A visual difference is not automatically a regression. A pixel-identical result is not automatically success either.

### 8. Record what remains local

Every migration must state the non-shared remainder. For CausaGanha that includes judicial-data purpose, green/gold identity, static Astro/Pages delivery, typographic choices, table density, brand styling and domain semantics. For Ficha it includes the dated-public-archive identity, palette, light-only scheme, dark header, page composition, DuckDB/search behavior, provenance copy and domain states.

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

Two independent adoptions still support a deliberately small check set:

1. shared artifact is immutable/pinned;
2. import/layer order is deterministic;
3. duplication explicitly transferred to core cannot silently return;
4. the real adopted surface still builds and passes its normal accessibility/behavior gates.

Do not grow this into a universal Cobogó linter without a repeated failure that the extra machinery would prevent.

## What the two migrations prove — and do not prove

CausaGanha and Ficha are materially different public-data products, and both obtain positive technical/accessibility delta from the same small foundations boundary. Together they are enough evidence to stabilize the **existing Core Web CSS API contract**.

They do **not** prove that every consumer should adopt core, that vendoring is the permanent distribution mechanism, that a shared theme/page skeleton is desirable, or that new roles can enter stable core without their own evidence. The Lab's earlier rejection remains useful counter-evidence: declining core can be the correct outcome when it adds more contract than it removes.