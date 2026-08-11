---
type: consumer
title: Baliza Site
repository: https://github.com/franklinbaldo/baliza-site
adoption_status: candidate
surface: public contracts analysis web
interaction_profile: search, dashboard, tabular results, downloads and documentation
runtime: static Next.js site intended for GitHub Pages with DuckDB-WASM; build artifact healthy, production deploy blocked by github-pages environment branch policy as of 2026-08-11
constraints:
  - no backend runtime
  - analytical queries run in browser
  - preserve data density and export workflows
capabilities_used: []
unmet_needs:
  - data-reading patterns
  - filters search and result-table grammar
  - analytical status and provenance semantics
  - restore production deployment from main before treating the surface as live visual evidence
last_verified: 2026-08-11
---

# Baliza Site

Baliza Site is a high-confidence Cobogó consumer candidate: a static public frontend for searching and analyzing Brazilian public-contract data in the browser.

Its strongest synergy is with CausaGanha and Ficha around analytical reading, tables, filters, metadata and exports. Shared semantics should not force the products into one dashboard skin.

Candidate status does not imply adoption, and source inspection does not make Baliza a live pressure test yet.

## Deployment evidence — 2026-08-11

The historical GitHub Pages workflow had two failed deployments. A minimal operational repair in `baliza-site#5` added the official `actions/configure-pages` step. On the resulting `main` run:

- Pages configuration passed;
- dependency installation passed;
- the static Next.js build passed;
- the Pages artifact upload passed;
- the `deploy` job failed before executing any step.

The blocker is repository configuration, not the web artifact: the `github-pages` environment uses custom deployment branch policies and permits only the stale historical branch `claude/build-baliza-site-011CUfJrXTXDqr2QffxdqFNh`, while the maintained workflow deploys from `main`. `baliza-site#6` records the required settings change.

Until a `main` deployment succeeds and its rendered artifact is inspected, Baliza does **not** count as the second live data-reading consumer required to derive #267.

## Source-only data-reading observations

These are useful hypotheses and local gaps, but weaker than rendered evidence.

`components/DataTable.tsx` uses native `<table>`, `<thead>`, `<th>`, `<tbody>` and `<td>` semantics, but currently:

- provides no `<caption>`;
- provides no `scope` on header cells;
- puts sorting on a clickable `<div>` inside `<th>` rather than a keyboard-native control;
- distinguishes an empty result with the text `Nenhum dado encontrado`.

`app/busca/page.tsx` distinguishes the initial prompt, loading state, zero results and successful results, and provides CSV export. Query errors are logged and collapsed to an empty result in the current source, so the user-facing distinction between `no results` and `query failure` is not preserved.

These observations are intentionally **not** promoted into shared Cobogó patterns until the deployed surface exists and is captured.
