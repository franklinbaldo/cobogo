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
  - decide and restore/document the real EC113 refresh policy; the daily workflow is currently disabled by inactivity (tracked in https://github.com/franklinbaldo/tambaqui/issues/6)
last_verified: 2026-08-17
---

# Tambaqui

Tambaqui is a candidate consumer because it owns a real public human-facing calculator at `https://franklinbaldo.github.io/tambaqui/`. GitHub Pages is configured from `main`/root.

The project has a useful PROJECT-SURFACE split. Behind the page, `gerar_tabelas.py` reads the TJSP EC 113/2021 PDF and materializes `tabela_de_atualizacao_ec113.json` and CSV. The human task is narrower: choose dates and a value, then inspect the updated amount and totals. The reusable relation is therefore `official/source table -> versioned factors -> calculation -> inspectable result`.

The 2026-08-17 review first found that the public `index.html` was not actually using that machinery: `fetchFactor()` returned a constant placeholder `1.1`, while the page presented a generic English/USD finance tracker. Its meta CSP also declared only `default-src 'self'` while depending on inline script/style and a CDN stylesheet, so the declared policy was incompatible with the page implementation. `tambaqui#4` / PR `#5` reconnected the surface to the versioned JSON, exposed missing-data failures, made the purpose/source visible, kept the existing formula boundary unchanged, and added the first minimal pre-merge static surface gate.

A later provenance pass found that merely naming the local JSON still left two user-relevant facts hard to recover: the upstream TJSP authority and the actual temporal coverage of the factor data. `tambaqui#7` / PR `#8` therefore made both the upstream TJSP PDF and the exact JSON dataset directly recoverable from the public surface, and derives the first/last available factor month from the loaded dataset instead of hard-coding a freshness claim. The current versioned dataset spans `1964-10` through `2023-10`; the displayed interval uses machine-readable `<time datetime="YYYY-MM">` values. The static surface gate asserts this provenance/coverage contract.

PR `tambaqui#9` adds a separate controlled-browser evidence class instead of inferring rendering from source. Workflow run `32044104176` served the real static application in Chromium, loaded the real versioned JSON, asserted a valid `2023-10` calculation, asserted the announced missing-factor error for `2024-01`, and uploaded full-page screenshots as the `tambaqui-browser-proof` artifact. The inspected screenshots visibly preserve the source/dataset links and the `10/1964 a 10/2023` coverage line in both states; the error state is a textual block rather than a color-only signal. The same browser/static workflow passed again on `main` after merge in run `32044147192` at commit `fbe0c07db8cee6967967796a6e4a5531890985f1`.

Evidence strength is now Pages configuration/deploy history + source + static CI + controlled rendered Chromium proof of the exact application/data contract. Keep this distinct from freshness evidence: the configured `daily_script_run.yml` was created in 2023, has zero recorded runs in the inspected workflow history, and GitHub currently reports the workflow itself as `disabled_inactivity`; the newer static-surface and Pages workflows are active. `tambaqui#6` tracks the product/operations decision: either re-enable the daily refresh and prove a current run, or document a different truthful freshness policy. Treat `dataset present`, `scheduled workflow configured`, `fresh automated update`, `browser-rendered behavior`, and `deployed Pages` as separate evidence classes.

This materially strengthens the candidate `provenance/freshness relation` with a calculator context: the rendered surface makes upstream authority, exact public artifact and temporal coverage recoverable while explicitly refusing to equate artifact availability with updater health. It also shows that a missing external-data value is visibly distinguishable from a legitimate calculation. Do not promote a shared Cobogó pattern from Tambaqui alone; compare this rendered relation against Ficha or another independent external-source product under #267.
