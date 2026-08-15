---
type: consumer
title: CausaGanha
repository: https://github.com/franklinbaldo/causaganha
adoption_status: active
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
  - framework-agnostic core web foundations
  - consumer-owned semantic role mapping
  - shared focus visibility contract
  - shared reduced-motion contract
  - shared data typography and table foundations
  - semantic comparison-table accessibility
  - machine-readable temporal provenance
  - non-colour continuous-state redundancy
operational_capabilities:
  - github-pages-deploy
  - deterministic-before-after-visual-capture
  - archived-source-and-parquet-publication
  - sync-manifest-publication
  - internet-archive-preservation
  - reconstructible-sql-catalog
unmet_needs:
  - data-reading patterns for tables metadata provenance and status
  - current-version package distribution for core upgrades
integration_evidence:
  - https://github.com/franklinbaldo/causaganha/issues/861
  - https://github.com/franklinbaldo/causaganha/pull/878
  - https://github.com/franklinbaldo/causaganha/pull/865
  - https://github.com/franklinbaldo/causaganha/pull/871
  - https://github.com/franklinbaldo/causaganha/issues/872
  - https://github.com/franklinbaldo/causaganha/pull/873
  - https://github.com/franklinbaldo/causaganha/issues/874
  - https://github.com/franklinbaldo/causaganha/pull/875
local_identity: green/gold product identity, judicial-data purpose, existing typography and information architecture
last_verified: 2026-08-15
---

# CausaGanha

CausaGanha is the first **active external core consumer** of the reconstructed Cobogó implementation contract. It remains a strong brownfield reference because it has a functioning public web surface, its own design constitution, real data-reading workflows and a substantial local token/style layer.

Its frontend deliberately follows several product constraints that Cobogó must preserve rather than overwrite:

- HTML first, CSS second, JavaScript last;
- speed is part of aesthetics;
- reading tasks should not be appified without need;
- structure should be exposed through headings, tables and inline information instead of hidden behind interaction;
- deployment is static on GitHub Pages, with islands only where client reactivity is justified.

These are product constraints, not Cobogó rules. Cobogó provides shared implementation grammar without turning CausaGanha into Astronauta or another consumer.

## Existing local design knowledge

CausaGanha carries a large visual foundation in `web/src/styles/tokens.css`, including semantic Pico overrides, green/gold product values, spacing/typography/radii/shadows/state colors, dark-mode values, a Brazilian-modernist paper/concrete family and compatibility aliases for existing views.

That overlap remains brownfield evidence. Shared roles are reconciled through `cobogo-mapping.css`; concrete product values remain downstream.

## Cobogó relationship

CausaGanha exercises [Vão](../grammar/vao.md), [Ritmo](../grammar/ritmo.md), [Faixa](../grammar/faixa.md), [Inscrição](../grammar/inscricao.md), [Texto é arquitetura](../canon/texto-e-arquitetura.md), and [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md).

Its concrete composition test is [CausaGanha — data reading](../specimens/causaganha-data-reading.md).

Its first implementation adoption is the framework-agnostic core itself: document/link/table/data/focus/motion foundations are loaded from Cobogó, then rebound to CausaGanha values through the local mapping. This is deliberately narrower than claiming every Cobogó pattern or component is adopted.

## Historical measured state — 2026-08-11

Before real core adoption, `web/src/styles/cobogo-mapping.css` existed and was imported from `index.css`, but the core itself was not loaded. The bridge declared 30 `--cobogo-*` roles, with zero direct role uses outside the mapping and only four roles load-bearing through local aliases. It was correctly classified as **partial, largely nominal mapping**, not core adoption.

That historical state is important because it supplies the baseline for the later migration: the product already owned a semantic mapping and local identity before the shared implementation became authoritative.

## `/stats` semantic follow-up — verified 2026-08-14

CausaGanha #865 closed mechanical semantic gaps and was validated against a real rendered pipeline/build in Chromium:

- all 7 comparison headers carry `scope="col"`;
- the 96-row table has a descriptive visually hidden `<caption>`;
- `generated_at`, DJEN last attempt and DJEN last success render as `<time datetime>`;
- every tribunal coverage `<progress>` has an accessible name containing tribunal + percentage;
- the numeric percentage remains visible beside the color treatment;
- the weekly low is explicitly marked with the text `Menor`.

CausaGanha #871 extended the same provenance rule to per-tribunal archived-period bounds while preserving visible ISO dates.

This strengthens a reusable relation without proving a universal component: homogeneous cross-row comparison benefits from native table structure, and external-source freshness benefits from authority + exact recoverable time. Data-reading pattern promotion remains subject to independent consumer evidence.

## Public artifact reuse — verified 2026-08-15

CausaGanha #873 closed a project-surface gap on `/sobre`: the deployed page connects the human explanation to real archived source/data products, the canonical synchronization manifest and a reproducible reuse path while preserving the dashboard as the non-technical route.

The first implementation taught consumers to attach a remotely published `catalog.duckdb`. CausaGanha #874/#875 revised that boundary. The current contract is text/data first:

```text
archived ZIP / Parquet / manifest
  -> catalog.sql textual view contract
  -> consumer-local DuckDB materialization
  -> query
```

Future catalog publication excludes `*.duckdb`; the historical binary remains preserved as history. The #875 PR passed lint, TJRO tests and web lint/test/build before merge, and the post-merge Pages build/deploy succeeded.

This is independent evidence for [Public artifact reuse](../patterns/public-artifact-reuse.md) alongside Leizilla. It also supplies a non-rule: Cobogó should not standardize DuckDB, SQL or a storage engine. The reusable relation is reachable canonical artifact + recoverable provenance + reproducible handoff.

CausaGanha #872 remains open until the current `catalog.sql -> local DuckDB -> query` recipe has an independent execution recorded against the public artifact.

## Core adoption — verified 2026-08-15

CausaGanha #878 closed #861 and supplied the first external proof required by Cobogó #266/#270.

### Distribution and ownership

The production web now loads a **verbatim immutable snapshot** of Cobogó `src/styles/core.css` pinned to upstream commit `12b08d124d717e0a38f74d98b628ce9af0540a7b` and Git blob `afe206e4c0e82392ed4ee41dddee77e71acbb10e`. A CI ratchet recomputes the Git blob SHA and fails if the vendored file is locally edited.

This vendoring is a temporary distribution mechanism because the currently published Cobogó package predates the reconstructed core. It is not a new consumer-owned fork and is not promoted as the preferred long-term delivery method.

The cascade is explicit:

```text
CausaGanha tokens / Pico baseline
  -> pinned Cobogó core
  -> CausaGanha semantic mapping
  -> CausaGanha product/local CSS
```

Concrete product values therefore still belong to CausaGanha while shared role behavior comes from Cobogó.

### Positive implementation delta

The first adoption slice removed **24 lines of duplicated local CSS** from `base.css` rather than merely adding an import:

- generic `:focus-visible` ownership moved to the core;
- global reduced-motion behavior moved to the core;
- generic data/code typography ownership moved to `--cobogo-font-data` / core.

Intentional local behavior remained local, including skip-link focus treatment, product-specific `kbd` badges, editorial heading hierarchy, table density/hover, Pico compatibility, badges, touch targets and all green/gold/modernist product values.

### Rendered evidence

The strongest representative surface is `/stats`, which exercises headings, links/focus, tabular numeric data, provenance timestamps, state tones and responsive table reading.

Workflow run `31903091090` checked out both the PR base and head, generated the same deterministic stats fixture for each, built both static sites and captured full-page Chromium screenshots. The at-rest screenshots were **not pixel-identical**. That is positive evidence that the core is load-bearing rather than decorative. Inspection found no missing data, clipped content, overflow, broken table semantics or replacement of CausaGanha's identity; the visible convergence was chiefly shared link/accent, reading rhythm and table treatment, while keyboard focus also moved to the core ring + contrast-gap relation.

The PR passed normal lint, Python tests and web lint/test/build before merge. It was merged as `f0fe79096851c0ea7ac450841e8e76ada03e94cc`; post-merge `main` lint, TJRO tests and web build also passed, and the GitHub Pages build/deploy completed successfully.

### Upstream lesson

The reusable lesson is not “vendor Cobogó CSS.” It is the evidence-first brownfield sequence now documented in `docs/operations/brownfield-core-adoption.md`: choose a surface where shared rules can replace real duplication, preserve product constraints, make role ownership/cascade explicit, retire duplicated local contracts, ratchet the boundary, compare base/head against identical data, and only then update the registry.

## Review question

A successful integration should make it easier to read and compare judicial data while leaving CausaGanha recognizably itself.

If future adoption mainly changes colors, fonts, border radii or decorative motifs without buying a shared semantic/operational contract, it has failed the Cobogó model.
