---
type: consumer
title: Tambaqui
repository: https://github.com/franklinbaldo/tambaqui
adoption_status: candidate
surface: public EC 113/2021 monetary-update calculator backed by versioned TJSP factor data
interaction_profile: choose initial/final dates, describe an amount, calculate and compare updated totals
runtime: zero-build client-side GitHub Pages application
constraints:
  - preserve the existing legal/calculation formula boundary unless domain evidence changes it
  - distinguish versioned factor data from evidence that the scheduled updater is currently healthy
  - errors for missing data must be visible and must not silently fall back to placeholder factors
  - do not infer Cobogó code adoption from this review
capabilities_used: []
unmet_needs:
  - obtain reproducible browser capture of successful and missing-factor states
  - decide and restore/document the real EC113 refresh policy; the daily workflow is currently disabled by inactivity (tracked in https://github.com/franklinbaldo/tambaqui/issues/6)
last_verified: 2026-08-17
---

# Tambaqui

Tambaqui is a candidate consumer because it owns a real public human-facing calculator at `https://franklinbaldo.github.io/tambaqui/`. GitHub Pages is configured from `main`/root and reports the site as `built`.

The project has a useful PROJECT-SURFACE split. Behind the page, `gerar_tabelas.py` reads the TJSP EC 113/2021 PDF and materializes `tabela_de_atualizacao_ec113.json` and CSV. The human task is narrower: choose dates and a value, then inspect the updated amount and totals. The reusable relation is therefore `official/source table -> versioned factors -> calculation -> inspectable result`.

The 2026-08-17 review found that the public `index.html` was not actually using that machinery: `fetchFactor()` returned a constant placeholder `1.1`, while the page presented a generic English/USD finance tracker. Its meta CSP also declared only `default-src 'self'` while depending on inline script/style and a CDN stylesheet, so the declared policy was incompatible with the page implementation. `tambaqui#4` / PR `#5` reconnect the surface to the versioned JSON, expose missing-data failures, make the purpose/source visible, keep the existing formula boundary unchanged, and add the first minimal pre-merge static surface gate.

Evidence strength is Pages configuration + source + workflow/CI. This pass does **not** claim controlled browser/pixel proof. The configured `daily_script_run.yml` was created in 2023, has zero recorded runs in the inspected workflow history, and GitHub currently reports the workflow itself as `disabled_inactivity`; the newer static-surface and Pages workflows are active. `tambaqui#6` tracks the product/operations decision: either re-enable the daily refresh and prove a current run, or document a different truthful freshness policy. Treat `dataset present`, `scheduled workflow configured`, and `fresh automated update` as separate evidence classes.

A useful future pressure test is to capture the successful-calculation and missing-factor states against the deployed page, then verify the selected refresh policy independently. Keep legal methodology and factor-source policy downstream unless explicit domain evidence supports a shared abstraction.
