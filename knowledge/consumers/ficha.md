---
type: consumer
title: Ficha
repository: https://github.com/franklinbaldo/ficha
adoption_status: candidate
surface: live public data exploration web over a versioned CNPJ dataset
interaction_profile: company lookup, analytical filtering, provenance/freshness framing, temporal comparison and relationship exploration
runtime: Astro + Svelte 5 static frontend on GitHub Pages with DuckDB-WASM
constraints:
  - serverless public delivery
  - large analytical datasets in browser
  - preserve fast direct lookup and analytical modes
capabilities_used: []
operational_capabilities:
  - github-pages-deploy
  - published-site-smoke-test
  - visual-capture
  - internet-archive-upload
  - internet-archive-backed-snapshots
  - external-source-etl
unmet_needs:
  - data-reading patterns
  - analytical filters and comparison grammar
  - multi-snapshot temporal comparison grammar
integration_evidence:
  - https://github.com/franklinbaldo/ficha/pull/143
  - https://github.com/franklinbaldo/ficha/pull/210
  - https://github.com/franklinbaldo/ficha/pull/214
last_verified: 2026-08-14
---

# Ficha

Ficha is a high-confidence Cobogó consumer candidate. It has a real Astro/Svelte frontend deployed to GitHub Pages and mixes direct company lookup with in-browser analytical exploration over Parquet/DuckDB-WASM.

Its strongest current synergy is with CausaGanha: both are static public data-reading products that need tables, filters, metadata, status/freshness and comparison without becoming generic dashboards. Candidate status still does not imply `cobogo/core` adoption: the changes below are consumer-local implementation of grammar and accessibility relations, not a package dependency.

## Current public contract — verified 2026-08-14

The earlier 2026-08-11 state is no longer current. `web/public/manifest.json` now publishes `current: 2026-05`, with a real snapshot backed by Internet Archive URLs and per-file checksums.

The search surface exposes a provenance band as a real definition list with the relation:

- **Origem** — Receita Federal do Brasil;
- **Competência** — visible month/year plus `<time datetime="YYYY-MM">`;
- **Preservação** — Internet Archive when supported by the loaded manifest;
- **Verificação** — checksum claim derived from the loaded manifest contract;
- **Estado** — explicit textual `Atual` / `Desatualizada`, with the explanatory stale warning preserved.

Ficha #214 now also makes the product's two real access paths discoverable on the public home without inventing a `Dados` page or competing with the primary search: **Consultar aqui** keeps the interactive lookup as the main action, while **Levar a base** links to the real `manifest.json`, whose current snapshot points onward to preserved Internet Archive assets. The implementation uses spacing, inscription and hierarchy rather than two generic cards.

The competence correction landed in Ficha #210 as a one-line semantic change after Ficha #143 had already made provenance structural through `Faixa + Inscrição`. Ficha #214 then closes the next Greenfield slice from #141: dataset discovery / dual access paths. These changes preserve the existing search behavior and local identity.

## Operational capabilities — verified 2026-08-14

These are repository capabilities, not claims of Cobogó adoption:

- **GitHub Pages deploy + published-site smoke test** — the deploy workflow is exercised on `main`; after Ficha #214, build, Pages deployment and the deployed-site smoke test completed successfully for merge commit `6af77e9`.
- **Visual capture** — `.github/workflows/visual-capture.yml`, introduced by Ficha #214, builds the site with the real GitHub Project Pages base path, serves the built artifact in CI, captures the first fold at 1280×900 in Chromium and uploads it as a workflow artifact. The first implementation attempt exposed a false capture caused by the wrong base path; the workflow was corrected before merge, which is useful negative evidence about making capture conditions match deployment conditions.
- **Internet Archive upload** — `.github/workflows/etl-bootstrap.yml` wires the ETL pipeline to `IA_ACCESS_KEY` and `IA_SECRET_KEY` through GitHub Actions secrets and supports an explicit `skip_upload` dry-run. The secret values are neither needed nor recorded here.
- **Internet Archive-backed snapshots** — the current public manifest points to preserved snapshot assets and checksums, so preservation is part of the product's public data contract rather than an unused credential path.
- **External-source ETL** — the workflow resolves and transforms Receita Federal snapshot data and can reuse IA-mirrored raw ZIPs.

The visual-capture run for Ficha #214 produced a styled first-fold artifact after building with `BASE_PATH=/ficha/`. It visibly includes the provenance band and the new two-access-path relation. The capture environment could not load the remote Internet Archive parquet and therefore showed the real network-error state from that environment; that limitation is recorded rather than misread as evidence about the deployed data path.

This makes Ficha a useful upstream operational specimen for Cobogó: before inventing a separate browser-capture mechanism for a similar Astro/Pages consumer, inspect this workflow as evidence. Reuse still depends on the target repository's runtime and deployment assumptions; do not copy it as a universal CI recipe merely because it worked here.

No Save Page Now checkpoint of the rendered Ficha UI is claimed by this entry yet. Internet Archive dataset preservation, CI screenshot capture and rendered-page historical archiving remain distinct capabilities/evidence classes.

## Accessibility state

The mechanical gaps recorded on 2026-08-11 are no longer current:

- search fields have explicit labels that remain in the accessibility tree;
- lifecycle/search-result changes use scoped `role="status"` / `aria-live` regions;
- provenance uses `dl/dt/dd` semantics;
- snapshot competence is machine-readable with `<time datetime>`;
- state remains textual rather than colour-only;
- global header links have an explicit non-colour `:focus-visible` treatment;
- the new dataset link in #214 has explicit `:focus-visible` treatment and the access-path relation remains understandable without colour.

Do not reopen these as if they were current defects without new counter-evidence.

## Evidence strength

This update is supported by current source, manifest data, PR CI, a reproducible 1280×900 Chromium capture, `main`, Pages deployment and the deployed-site smoke test.

The screenshot is evidence of composition under the CI capture environment, not proof that remote Internet Archive data hydrated successfully there. Conversely, the deployed-site smoke test proves reachability of the published site but is not a visual substitute for the screenshot. Keep those evidence classes separate.

Ficha now supplies stronger rendered evidence for the provenance/freshness and discoverable-data-contract relations. Promotion of a shared Cobogó pattern still requires the independent rendered-consumer evidence required by #267; this single consumer implementation is not a universal component template.

## What remains local or unresolved

The Greenfield review in Ficha #141 still identifies consumer-local work beyond the completed provenance and dual-access slices:

- represent multiple published snapshots when the product has enough real temporal history to justify the comparison surface;
- improve the generic card composition later through `Vão`, only after the higher-information-value slices are proven;
- inspect dense result/detail surfaces in rendered form before deriving shared table/filter patterns.

Ficha should continue to look like a **dated public archive**, not a CausaGanha clone or a generic Cobogó demo.

## Cross-consumer interpretation

The useful reusable signal is the relation, not the component: external-source data should keep source, relevant time, preservation/verifiability and state recoverable, with exact displayed time represented machine-readably when possible. Ficha adds a second useful relation for research: a public data product can expose **use in place** and **take the dataset** as distinct access paths without turning them into duplicated card chrome or invented navigation.

Those relations should be compared against independent consumers before promotion. Ficha's categorical textual state and CausaGanha's continuous coverage metrics remain different expressions. That negative evidence still argues against a universal status component while supporting the narrower non-colour and provenance/freshness invariants.
