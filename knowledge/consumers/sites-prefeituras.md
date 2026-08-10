---
type: consumer
title: Sites Prefeituras
repository: https://github.com/franklinbaldo/sites_prefeituras
adoption_status: candidate
surface: public audit dashboard and documentation
interaction_profile: large municipal comparison, metrics, ranking and drill-down
runtime: MkDocs + Tabulator.js dashboard on GitHub Pages
constraints:
  - 5570-municipality scale
  - accessibility/performance metrics are domain content as well as UI concerns
  - dense tabular comparison must remain scan-friendly
capabilities_used: []
unmet_needs:
  - large-table comparison patterns
  - ranking/metric semantics
  - filter/status/freshness composition
last_verified: 2026-08-10
---

# Sites Prefeituras

Sites Prefeituras is a candidate consumer because it publishes a web dashboard for comparing PageSpeed/audit metrics across all Brazilian municipalities.

It strongly pressures Cobogó's data-reading work at larger table/ranking scale than CausaGanha, Ficha or Baliza Site.
