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
last_verified: 2026-08-10
---

# Ficha

Ficha is a high-confidence Cobogó consumer candidate. It has a real Astro/Svelte frontend deployed to GitHub Pages and mixes direct company lookup with in-browser analytical exploration over Parquet/DuckDB-WASM.

Its strongest likely synergy is with CausaGanha: both are static public data-reading products that need tables, filters, metadata, status/freshness and comparison without becoming generic dashboards.

Candidate status does not imply adoption. Before opening an integration PR, inspect the current Ficha web surface and determine which needs are truly shared versus domain-specific.
