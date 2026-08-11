---
type: consumer
title: Baliza Site
repository: https://github.com/franklinbaldo/baliza-site
adoption_status: candidate
surface: public contracts analysis web
interaction_profile: search, dashboard, tabular results, downloads and documentation
runtime: static Next.js site on GitHub Pages with DuckDB-WASM
constraints:
  - no backend runtime
  - analytical queries run in browser
  - preserve data density and export workflows
capabilities_used: []
unmet_needs:
  - data-reading patterns
  - filters search and result-table grammar
  - analytical status and provenance semantics
last_verified: 2026-08-11
---

# Baliza Site

Baliza Site is a high-confidence Cobogó consumer candidate: a static public frontend for searching and analyzing Brazilian public-contract data in the browser.

Its strongest synergy is with CausaGanha and Ficha around analytical reading, tables, filters, metadata and exports. Shared semantics should not force the products into one dashboard skin.

## Not the live surface — 2026-08-11

`https://franklinbaldo.github.io/baliza-site/` returns GitHub's generic *Site not found*: Pages is not serving this repository. The live public-contract surface is [Baliza](./baliza.md) (`franklinbaldo/baliza`), which is where the inspection evidence lives.

Keep this entry as the record of a repository that exists but does not currently own a deployed surface. Do not use it as data-reading evidence.

