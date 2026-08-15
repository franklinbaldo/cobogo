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
  - https://github.com/franklinbaldo/ficha/pull/217
  - https://github.com/franklinbaldo/ficha/pull/218
last_verified: 2026-08-15
---

# Ficha

Ficha is a high-confidence Cobogó consumer candidate. It has a real Astro/Svelte frontend deployed to GitHub Pages and mixes direct company lookup with in-browser analytical exploration over Parquet/DuckDB-WASM.

Its strongest current synergy is with CausaGanha: both are static public data-reading products that need tables, filters, metadata, status/freshness and comparison without becoming generic dashboards. Candidate status still does not imply `cobogo/core` adoption: the changes below are consumer-local implementation of grammar and accessibility relations, not a package dependency.

## Current public contract — verified 2026-08-15

The earlier 2026-08-11 state is no longer current. `web/public/manifest.json` now publishes `current: 2026-06`, with a real snapshot backed by Internet Archive URLs and per-file checksums.

The search surface exposes a provenance band as a real definition list with the relation:

- **Origem** — Receita Federal do Brasil;
- **Competência** — visible month/year plus `<time datetime="YYYY-MM">`;
- **Preservação** — Internet Archive when supported by the loaded manifest;
- **Verificação** — checksum claim derived from the loaded manifest contract;
- **Estado** — explicit textual `Atual` / `Desatualizada`, with the explanatory stale warning preserved.

Ficha #214 now also makes the product's two real access paths discoverable on the public home without inventing a `Dados` page or competing with the primary search: **Consultar aqui** keeps the interactive lookup as the main action, while **Levar a base** links to the real `manifest.json`, whose current snapshot points onward to preserved Internet Archive assets. The implementation uses spacing, inscription and hierarchy rather than two generic cards.

Ficha #217 extends that project-surface correction to the repository entrance itself. The README now points directly to the public site and manifest, summarizes the real company/person/address/CNAE search modes, distinguishes use-in-place from dataset reuse, and describes the current sharded `companies` contract instead of presenting the older product model as current. This is public-surface maintenance, not evidence of a new Cobogó capability.

The competence correction landed in Ficha #210 as a one-line semantic change after Ficha #143 had already made provenance structural through `Faixa + Inscrição`. Ficha #214 then closes the next Greenfield slice from #141: dataset discovery / dual access paths. These changes preserve the existing search behavior and local identity.

## Operational capabilities — verified 2026-08-15

These are repository capabilities, not claims of Cobogó adoption:

- **GitHub Pages deploy + published-site smoke test** — the deploy workflow is exercised on `main`; after Ficha #214, build, Pages deployment and the deployed-site smoke test completed successfully for merge commit `6af77e9`.
- **Visual capture** — `.github/workflows/visual-capture.yml`, introduced by Ficha #214 and hardened by Ficha #218, builds the site with the real GitHub Project Pages base path, serves the built artifact in CI and captures the first fold at 1280×900 in Chromium. The capture now waits for a semantic hydration outcome instead of a fixed delay, emits `capture-state.json`, and names the screenshot `home-hydrated-*`, `home-remote-data-unavailable-*` or `home-incomplete-*` according to the observed state. A screenshot is therefore only labelled hydrated when the UI actually reaches `Pronto para consultas`.
- **Internet Archive upload** — `.github/workflows/etl-bootstrap.yml` wires the ETL pipeline to `IA_ACCESS_KEY` and `IA_SECRET_KEY` through GitHub Actions secrets and supports an explicit `skip_upload` dry-run. The secret values are neither needed nor recorded here.
- **Internet Archive-backed snapshots** — the current public manifest points to preserved snapshot assets and checksums, so preservation is part of the product's public data contract rather than an unused credential path.
- **External-source ETL** — the workflow resolves and transforms Receita Federal snapshot data and can reuse IA-mirrored raw ZIPs.

The first capture implementation exposed two useful negative-evidence cases rather than hiding them. The #214 iteration first revealed a wrong Project Pages base-path assumption, which was corrected before merge. Later, the CI environment could render the Ficha surface but could not load the remote Internet Archive Parquet. Ficha #218 turns that second limitation into machine-recoverable evidence: its validation run classified the state as `remote-data-unavailable`, named the screenshot accordingly and persisted the screenshot plus `capture-state.json`, while the status identified the failed request to the current snapshot's `cnpjs.parquet`. The visual-capture job still passed because its job is to capture and classify reality, not to pretend external network availability.

This makes Ficha a useful upstream operational specimen for Cobogó: before inventing a separate browser-capture mechanism for a similar Astro/Pages consumer, inspect this workflow as evidence. The reusable relation is **capture + explicit semantic readiness classification**, not this exact Playwright script or these status strings. Reuse still depends on the target repository's runtime and deployment assumptions; do not copy it as a universal CI recipe merely because it worked here.

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

This update is supported by current source, manifest data, PR CI, reproducible Chromium capture infrastructure, `main`, Pages deployment and the deployed-site smoke test. The README reconciliation in #217 was verified against current `SearchCNPJ.svelte` and `manifest.json`, and its repository CI completed successfully before merge. Ficha #218 adds a stronger distinction inside rendered evidence itself: a screenshot now carries an explicit machine-readable hydration classification rather than relying on a reviewer to infer readiness from pixels.

A `remote-data-unavailable` screenshot is evidence of composition and error behavior under the CI capture environment, not proof that the deployed data path is broken. A future `hydrated` screenshot would be stronger evidence that the same rendered capture environment reached the intended data-ready state. Conversely, the deployed-site smoke test proves reachability of the published site but is not a visual substitute for either screenshot class. Keep those evidence classes separate.

Ficha now supplies stronger rendered evidence for the provenance/freshness and discoverable-data-contract relations, and stronger operational evidence for honest capture-state classification. Promotion of a shared Cobogó pattern still requires the independent rendered-consumer evidence required by #267; this single consumer implementation is not a universal component or CI template.

## What remains local or unresolved

The Greenfield review in Ficha #141 still identifies consumer-local work beyond the completed provenance and dual-access slices:

- represent multiple published snapshots when the product has enough real temporal history to justify the comparison surface;
- improve the generic card composition later through `Vão`, only after the higher-information-value slices are proven;
- inspect dense result/detail surfaces in rendered form before deriving shared table/filter patterns.

Ficha should continue to look like a **dated public archive**, not a CausaGanha clone or a generic Cobogó demo.

## Cross-consumer interpretation

The useful reusable signal is the relation, not the component: external-source data should keep source, relevant time, preservation/verifiability and state recoverable, with exact displayed time represented machine-readably when possible. Ficha adds a second useful relation for research: a public data product can expose **use in place** and **take the dataset** as distinct access paths without turning them into duplicated card chrome or invented navigation.

The README review adds a narrower project-surface observation: when a repository is itself a common public entry point, its README should not describe an obsolete product state that contradicts the current rendered surface. Keep this as operational evidence for now; it does not yet justify a Cobogó pattern or component.

The #218 capture result adds another operational candidate relation: when a surface depends on remote hydration, visual evidence should preserve the distinction between **rendered**, **hydrated**, and **external-data-unavailable** rather than allowing one green screenshot job to collapse those states. This is evidence from one consumer and should remain an operational concept until another real consumer demonstrates the same need.

Those relations should be compared against independent consumers before promotion. Ficha's categorical textual state and CausaGanha's continuous coverage metrics remain different expressions. That negative evidence still argues against a universal status component while supporting the narrower non-colour and provenance/freshness invariants.
