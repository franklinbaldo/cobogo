---
type: foundation-api
status: experimental
title: Core Web CSS API
related_issue: https://github.com/franklinbaldo/cobogo/issues/266
---

# Core Web CSS API

The first implementation of the semantic foundations contract is available as the framework-agnostic package entrypoint:

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
- `data-cobogo-inverted` — a region whose background is inverted relative to the document (a dark hero or context band in a light page, or the reverse). It paints nothing and the consumer keeps owning the region's colours; it only re-derives the focus pair, which is otherwise chosen against the document canvas and fails silently inside such a region.
- `data-cobogo-theme="dark"` — explicit dark semantic mapping.

These are not component names and do not imply a framework.

## Compatibility boundary

`cobogo/styles` remains the legacy/site entrypoint. `cobogo/core` is additive and deliberately does not bless old paper/concrete, saturated palette, Pico, Svelte or component vocabulary as semantic core.

Adapters may map other systems into these roles later. They must remain downstream of this API.

## External adoption evidence

[CausaGanha #878](https://github.com/franklinbaldo/causaganha/pull/878) is the first real external brownfield adoption. Because no suitable current package release existed for that reconstructed core revision, CausaGanha consumes an **immutable byte-for-byte snapshot** of `src/styles/core.css`, pinned to Cobogó commit `12b08d124d717e0a38f74d98b628ce9af0540a7b` with the Git blob hash verified in CI.

The migration removed 24 lines of duplicated generic foundation behavior from the consumer, transferred generic data-font/focus/reduced-motion ownership to core, preserved product-local values and behavior, and produced deterministic before/after Chromium captures of the real `/stats` surface. This is adoption evidence, not merely an importability test.

The migration method is recorded in [Brownfield core adoption workflow](./brownfield-core-adoption.md).

## Experimental gate

Cobogó dogfoods the core and one materially real external surface now adopts it with positive measured delta. That is enough to satisfy the first-external-proof goal tracked by #266, but **not enough to stabilize the API**.

The core remains experimental until a second materially different external surface independently adopts it with real technical benefit. A consumer is allowed to decline core when the measured delta is negative; The Lab's earlier rejection remains useful counter-evidence rather than a failed migration.