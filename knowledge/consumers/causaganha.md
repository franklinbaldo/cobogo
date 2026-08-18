---
type: consumer
title: CausaGanha
repository: https://github.com/franklinbaldo/causaganha
adoption_status: adopting
surface: public data-reading web
interaction_profile: judicial data reading, comparison, provenance and status
runtime: Astro static SSG on GitHub Pages with selective Svelte islands and Pico baseline
constraints:
  - HTML first, CSS second, JavaScript last
  - preserve static GitHub Pages deployment
  - avoid appifying reading tasks
  - expose structure instead of hiding it behind interaction
  - speed is part of aesthetics
capabilities_used:
  - framework-agnostic core web foundations via immutable pinned snapshot
  - semantic comparison-table accessibility
  - machine-readable temporal provenance
  - non-colour continuous-state redundancy
  - public artifact reuse
operational_capabilities:
  - github-pages-deploy
  - archived-source-and-parquet-publication
  - sync-manifest-publication
  - internet-archive-preservation
  - reconstructible-sql-catalog
  - deterministic-core-before-after-capture
unmet_needs:
  - data-reading comparison grammar needs another independent rendered comparison consumer
  - stable/package distribution path for future core upgrades
integration_evidence:
  - https://github.com/franklinbaldo/causaganha/issues/861
  - https://github.com/franklinbaldo/causaganha/pull/878
  - https://github.com/franklinbaldo/causaganha/pull/865
  - https://github.com/franklinbaldo/causaganha/pull/871
  - https://github.com/franklinbaldo/causaganha/issues/872
  - https://github.com/franklinbaldo/causaganha/pull/873
  - https://github.com/franklinbaldo/causaganha/issues/874
  - https://github.com/franklinbaldo/causaganha/pull/875
  - https://github.com/franklinbaldo/causaganha/issues/879
  - https://github.com/franklinbaldo/causaganha/pull/880
  - https://github.com/franklinbaldo/causaganha/pull/882
local_identity: green/gold product identity, judicial-data purpose, existing typography and information architecture
last_verified: 2026-08-18
---

# CausaGanha

CausaGanha is Cobogó's first proven external brownfield `core` adopter. It remains recognizably a judicial-data product: green/gold identity, Astro static delivery, Pico compatibility, dense public-data surfaces and product-specific information architecture stay downstream and local.

Its current status is **adopting**, not merely evaluating and not yet a claim of universal/stable Cobogó adoption. Production now renders through an immutable pinned snapshot of the shared framework-agnostic core, while the core API itself remains experimental pending evidence from another materially different external surface.

## Product and project surface

The public site exposes three related dimensions:

1. **use in place** — dashboards, tribunal comparison, status/provenance and client-side exploration;
2. **project machinery** — DJEN archive/consolidation plus TJRO JURIS, STJ Acórdãos and DataJud pipelines with different roles and coverage/publication boundaries;
3. **reuse outside the site** — archived ZIP/Parquet products, synchronization manifest and a textual `catalog.sql` contract intended for consumer-local DuckDB materialization.

Pipeline existence is not treated as complete coverage or equivalent public availability. The site keeps methodology/source explanation separate from the reusable-artifact path.

## Core adoption — verified 2026-08-18

[CausaGanha #878](https://github.com/franklinbaldo/causaganha/pull/878) supersedes the earlier 2026-08-11 finding that `cobogo-mapping.css` was a largely nominal bridge.

The production CSS now loads:

```text
pinned Cobogó core snapshot
→ CausaGanha semantic mapping/theme values
→ CausaGanha local CSS
```

The shared snapshot is the exact `src/styles/core.css` blob from Cobogó commit `12b08d124d717e0a38f74d98b628ce9af0540a7b`. `cobogo-core.pin.json` records repository, commit, path and Git blob SHA, and repository tests recompute the blob hash so the downstream copy cannot silently become a fork.

### Positive maintenance/accessibility delta

The migration removed **24 lines** of generic local foundation behavior rather than merely renaming selectors:

- generic code/data-font ownership moved to core;
- generic `:focus-visible` ring ownership moved to core;
- global reduced-motion behavior moved to core.

CausaGanha deliberately retained heading hierarchy, Pico adapter behavior, table density/hover, badges, touch targets, branding/marketing CSS and all concrete theme values.

That is the authority boundary Cobogó wants: shared semantics/foundations upstream, product values and domain presentation downstream.

### Rendered proof

The strongest adoption surface is `/stats`. #878 built the base and proposed states from the **same deterministic data fixture** and captured both at the same 1280×900 viewport in run `31903091090`, artifact `cobogo-core-stats-before-after`.

The resting screenshots were intentionally different, proving that core was exercised rather than decoratively imported. Review found no lost data, clipped content, broken table semantics, overflow or identity replacement. Keyboard focus moved to the core's thicker ring + contrast-gap contract.

The consumer also ratchets the boundary in CI:

- pinned upstream bytes are verified;
- import order is enforced;
- removed generic focus/reduced-motion duplicates are forbidden locally;
- normal lint/tests/build remain authoritative.

This is the empirical basis for [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md). It satisfies the first-external-adoption evidence required by Cobogó #266/#270 without claiming that all consumers should adopt core.

## Data-reading semantics

`/stats` is a real cross-tribunal comparison surface. Current verified semantics include:

- 7/7 comparison headers with `scope="col"`;
- a descriptive table `<caption>`;
- machine-readable `<time datetime>` for generated/freshness timestamps and archived-period bounds;
- accessible names for tribunal coverage progress values;
- visible numeric redundancy beside color treatment;
- explicit textual marking of the weekly low.

This supports Cobogó's provenance/freshness and state-redundancy knowledge. It does **not** by itself close the comparison-table derivation gate: that still needs another independent rendered consumer exercising the same comparison task.

## Public artifact reuse

The distributed contract is intentionally text/data first:

```text
archived ZIP / Parquet / manifest
→ catalog.sql textual view contract
→ consumer-local DuckDB materialization
→ query
```

The historical remote `.duckdb` artifact is retained as history, but it is no longer the semantic authority. Cobogó should not standardize DuckDB or SQL from this evidence; the reusable relation is reachable canonical artifact + recoverable provenance + reproducible handoff.

CausaGanha #882 added an independent, secret-free public-catalog smoke path after #872 exposed real drift between published SQL and the public manifest. Until the post-publication smoke is observed green against the corrected Internet Archive artifact, publication and independent reuse remain separate evidence classes.

## Local identity and non-goals

CausaGanha should not inherit a universal Cobogó skin. Its judicial-data purpose, green/gold identity, static delivery model, typography, density and domain terminology remain product authority.

A successful Cobogó relationship reduces duplicated foundation contracts and strengthens reading/accessibility while leaving the product obviously CausaGanha. Importing shared CSS without deleting real duplication, or changing appearance without a semantic/maintenance gain, would not count as adoption evidence.