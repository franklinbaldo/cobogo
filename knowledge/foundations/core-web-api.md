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
- `data-cobogo-theme="dark"` — explicit dark semantic mapping.

These are not component names and do not imply a framework.

## Compatibility boundary

`cobogo/styles` remains the legacy/site entrypoint. `cobogo/core` is additive and deliberately does not bless old paper/concrete, saturated palette, Pico, Svelte or component vocabulary as semantic core.

Adapters may map other systems into these roles later. They must remain downstream of this API.

## Experimental gate

This API stays experimental until it is dogfooded by Cobogó itself and adopted on at least two materially different external surfaces.