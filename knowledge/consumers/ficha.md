---
type: consumer
title: Ficha
repository: https://github.com/franklinbaldo/ficha
adoption_status: candidate
surface: public data exploration web
interaction_profile: company lookup, analytical filtering, temporal comparison and relationship exploration
runtime: Astro + Svelte 5 static frontend on GitHub Pages with DuckDB-WASM
constraints:
  - serverless public delivery
  - large analytical datasets in browser
  - preserve fast direct lookup and analytical modes
capabilities_used: []
unmet_needs:
  - data-reading patterns
  - analytical filters and comparison grammar
  - provenance and snapshot freshness presentation
last_verified: 2026-08-11
---

# Ficha

Ficha is a high-confidence Cobogó consumer candidate. It has a real Astro/Svelte frontend deployed to GitHub Pages and mixes direct company lookup with in-browser analytical exploration over Parquet/DuckDB-WASM.

Its strongest likely synergy is with CausaGanha: both are static public data-reading products that need tables, filters, metadata, status/freshness and comparison without becoming generic dashboards.

Candidate status does not imply adoption. Before opening an integration PR, inspect the current Ficha web surface and determine which needs are truly shared versus domain-specific.

## Real surfaces — captured 2026-08-11

Captured from the deployed artifact via local mirror, assets verified (one 404 on `manifest.json` remains; the stylesheet and both Svelte bundles are present).

**The data-reading surface does not exist in production yet.** `/` renders a search shell whose body reads *"Os dados ainda não foram publicados. Volte em breve."* That is the real deployed state, not a mirror artefact. Only two routes exist: `/` and `/sobre`.

Rendered inventory of what is live:

| axis | `/` | `/sobre` |
|---|---|---|
| tables / th / caption | 0 / 0 / 0 | 0 / 0 / 0 |
| inputs | 1 | 0 |
| `<label>` | **0** | 0 |
| live region (`aria-live`/`role=status`) | **0** | 0 |
| `<time>` | 0 | 0 |
| `<dl>` | 0 | 0 |
| focusables | 4 | 3 |

## Intended surface, read from source

`EmpresaFicha.svelte` (668 lines) is the unpublished data surface. Its markup vocabulary is 41 `<span>`, 36 `<div>`, 3 `<h4>`, 1 `<h2>`, 3 `<button>` — and **zero** `<table>`, `<dl>`, `<dt>`, `<time>`, `<ul>` or `<li>`. Records render as `div.list-item` with an `item-header` and an `item-meta` line of spans separated by `·`.

This is source evidence, not rendered evidence, and is weaker for that reason.

## What Ficha already does better than CausaGanha

Status is **not colour-alone by construction**. The badge carries the status word as its text content (`badge-sit-{situacao}` with `{f.situacao_cadastral}` inside), with a distinct palette per state — ativa, baixada, suspensa, inapta, nula. A user who cannot separate the greens and reds still reads the word.

CausaGanha, by contrast, tints coverage percentages green/red. Ficha's approach satisfies the non-colour-redundancy rule that CausaGanha's does not obviously satisfy.

## Local gaps found, deliberately not fixed here

Recorded as evidence; authority and a separate PR come later, so as not to contaminate pattern derivation:

- the search input is labelled by `placeholder` only — no `<label>`, no `aria-label`;
- there is no live region, so search results and the empty state are not announced;
- `<time>` is absent, so publication/freshness state is prose only.

