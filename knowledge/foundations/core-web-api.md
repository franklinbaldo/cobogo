---
type: foundation-api
status: stable
title: Core Web CSS API
related_issue: https://github.com/franklinbaldo/cobogo/issues/266
---

# Core Web CSS API

The semantic foundations contract is available as the framework-agnostic package entrypoint:

```css
@import "cobogo/core";
```

It has no JavaScript runtime and no dependency on Svelte, Astro or Pico semantics.

## Public semantic custom properties

Color roles use `--cobogo-canvas`, `--cobogo-surface`, `--cobogo-surface-muted`, `--cobogo-text`, `--cobogo-text-muted`, `--cobogo-border`, `--cobogo-accent`, `--cobogo-focus`, `--cobogo-info`, `--cobogo-success`, `--cobogo-warning`, `--cobogo-danger`.

Focus is a **relation between two tones**, not a single colour: `--cobogo-focus` is the ring and `--cobogo-focus-contrast` fills the offset gap, so the ring always has something to separate from regardless of what sits behind it. `--cobogo-focus-inverted` and `--cobogo-focus-contrast-inverted` carry the same relation re-toned for inverted regions; both are derived from existing roles, so a retheme propagates and the pair flips by itself under a dark theme.

Typography roles use `--cobogo-font-body`, `--cobogo-font-display`, `--cobogo-font-inscription`, `--cobogo-font-data` and reading/leading roles.

Spatial relationships use `--cobogo-space-adjacent`, `--cobogo-space-group`, `--cobogo-space-section`, `--cobogo-space-pause`.

Geometry, layering and motion values remain overrideable defaults.

## Semantic attributes

The core intentionally keeps the surface small:

- `data-cobogo-data` — values/identifiers whose comparison benefits from data typography;
- `data-cobogo-inscription` — metadata/source/orientation text;
- `data-cobogo-surface[="muted"]` — explicit grouping surface when spacing is insufficient;
- `data-cobogo-state="info|success|warning|danger"` — state emphasis with structural border redundancy;
- `data-cobogo-stack` — grouped vertical rhythm;
- `data-cobogo-flow` — section rhythm;
- `data-cobogo-pause` — deliberate larger break;
- `data-cobogo-inverted` — a region whose background is inverted relative to the document. It paints nothing and the consumer keeps owning the region's colours; it only re-derives the focus pair;
- `data-cobogo-theme="dark"` — explicit dark semantic mapping.

These are not component names and do not imply a framework.

## Compatibility boundary

`cobogo/styles` remains the legacy/site entrypoint. `cobogo/core` is additive and deliberately does not bless old paper/concrete, saturated palette, Pico, Svelte or component vocabulary as semantic core.

Adapters may map other systems into these roles later. They must remain downstream of this API.

## External adoption evidence

### CausaGanha — dense analytical surface

[CausaGanha #878](https://github.com/franklinbaldo/causaganha/pull/878) is the first real external brownfield adoption. Because no suitable current package release existed for that reconstructed core revision, CausaGanha consumes an **immutable byte-for-byte snapshot** of `src/styles/core.css`, pinned to Cobogó commit `12b08d124d717e0a38f74d98b628ce9af0540a7b` with the Git blob hash verified in CI.

The migration removed 24 lines of duplicated generic foundation behavior from the consumer, transferred generic data-font/focus/reduced-motion ownership to core, preserved product-local values and behavior, and produced deterministic before/after Chromium captures of the real `/stats` surface.

### Ficha — public archive/search surface

[Ficha #222](https://github.com/franklinbaldo/ficha/pull/222) is the second independent external adoption and exercises a materially different surface: an Astro/Svelte public CNPJ archive/search home with provenance, dataset access paths and remote-data hydration.

Ficha also consumes an immutable byte-for-byte snapshot, pinned to Cobogó commit `bca94e2da68c23ab36b79453607c3d25eb20100e` and Git blob `afe206e4c0e82392ed4ee41dddee77e71acbb10e`. Its normal test suite recomputes the Git blob hash, enforces `core → Ficha mapping → local CSS` order and prevents transferred generic document/focus contracts from silently returning.

Across the two pre-existing surface files changed (`index.astro` and `Header.svelte`), the migration removed a net 12 lines while moving generic document baseline and focus ownership to core. Ficha keeps its concrete palette, light-only color scheme, dark header treatment, layout, data/archive copy, search/result behavior and domain state local. The header uses `data-cobogo-inverted` only to inherit the shared two-tone focus relation inside its locally owned dark region.

The PR's normal CI and Project Pages visual-capture gate passed. Controlled before/after review preserved the Ficha composition and information, while the capture remained honestly classified as `remote-data-unavailable` because the CI browser environment could not fetch the Internet Archive parquet; both before and after had zero page errors. That external-network limitation is not counted as a core regression or as proof of deployed-data failure.

The migration method is recorded in [Brownfield core adoption workflow](./brownfield-core-adoption.md).

## Stability evidence

The original experimental gate required **two materially different external surfaces** to adopt the core with real technical benefit. CausaGanha and Ficha now satisfy that gate independently:

- both transfer actual generic foundation authority upstream rather than merely importing CSS;
- both remove local duplicated contracts;
- both pin shared bytes immutably and ratchet that boundary in CI;
- both preserve distinct product identity and downstream theme/layout authority;
- both exercise the shared focus/reduced-motion/document foundation under different composition and runtime pressures;
- both have controlled rendered evidence, including negative evidence rather than green-check inflation.

The Core Web CSS API is therefore **stable as a small semantic foundations contract**. Stable does **not** mean mandatory or visually normative. The Lab's measured rejection remains valid counter-evidence: a consumer should decline core when adoption adds more contract than it removes. New roles or attributes still require their own evidence before joining the stable surface, and transport/distribution improvements remain separate from semantic stability.