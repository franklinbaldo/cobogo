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
  - internet-archive-upload
  - internet-archive-backed-snapshots
  - external-source-etl
unmet_needs:
  - data-reading patterns
  - analytical filters and comparison grammar
  - dataset discovery and dual access paths
  - multi-snapshot temporal comparison grammar
integration_evidence:
  - https://github.com/franklinbaldo/ficha/pull/143
  - https://github.com/franklinbaldo/ficha/pull/210
last_verified: 2026-08-14
---

# Ficha

Ficha is a high-confidence Cobogó consumer candidate. It has a real Astro/Svelte frontend deployed to GitHub Pages and mixes direct company lookup with in-browser analytical exploration over Parquet/DuckDB-WASM.

Its strongest current synergy is with CausaGanha: both are static public data-reading products that need tables, filters, metadata, status/freshness and comparison without becoming generic dashboards. Candidate status still does not imply `cobogo/core` adoption: the changes below are consumer-local implementation of grammar and accessibility relations, not a package dependency.

## Current public contract — verified 2026-08-14

The earlier 2026-08-11 state is no longer current. `web/public/manifest.json` now publishes `current: 2026-05`, with a real snapshot backed by Internet Archive URLs and per-file checksums. The public Pages workflow for Ficha #210 completed build, deploy and a smoke test successfully after merge.

The search surface now exposes a provenance band as a real definition list with the relation:

- **Origem** — Receita Federal do Brasil;
- **Competência** — visible month/year plus `<time datetime="YYYY-MM">`;
- **Preservação** — Internet Archive when supported by the loaded manifest;
- **Verificação** — checksum claim derived from the loaded manifest contract;
- **Estado** — explicit textual `Atual` / `Desatualizada`, with the explanatory stale warning preserved.

The competence correction landed in Ficha #210 as a one-line semantic change after Ficha #143 had already made provenance structural through `Faixa + Inscrição`. Both changes preserve the existing search behavior and local identity.

## Operational capabilities — verified 2026-08-14

These are repository capabilities, not claims of Cobogó adoption:

- **GitHub Pages deploy + published-site smoke test** — the deploy workflow is exercised on `main`; the post-merge run for Ficha #213 completed successfully for commit `330d6b8`.
- **Internet Archive upload** — `.github/workflows/etl-bootstrap.yml` wires the ETL pipeline to `IA_ACCESS_KEY` and `IA_SECRET_KEY` through GitHub Actions secrets and supports an explicit `skip_upload` dry-run. The secret values are neither needed nor recorded here.
- **Internet Archive-backed snapshots** — the current public manifest points to preserved snapshot assets and checksums, so preservation is part of the product's public data contract rather than an unused credential path.
- **External-source ETL** — the workflow resolves and transforms Receita Federal snapshot data and can reuse IA-mirrored raw ZIPs.

This makes Ficha a useful upstream operational specimen for Cobogó: before inventing a separate preservation mechanism for a Ficha UI/data checkpoint, prefer its existing Actions/Internet Archive path when it fits the artifact. The same technique may inform Cobogó or another consumer only after its assumptions are checked in that repository.

No Save Page Now checkpoint of the rendered Ficha UI is claimed by this entry yet. Internet Archive dataset preservation and rendered-page historical capture are distinct capabilities/evidence classes.

## Accessibility state

The mechanical gaps recorded on 2026-08-11 are also no longer current:

- search fields have explicit labels that remain in the accessibility tree;
- lifecycle/search-result changes use scoped `role="status"` / `aria-live` regions;
- provenance uses `dl/dt/dd` semantics;
- snapshot competence is machine-readable with `<time datetime>`;
- state remains textual rather than colour-only;
- global header links have an explicit non-colour `:focus-visible` treatment; Ficha #213 is merged and both post-merge CI and deploy completed successfully.

Do not reopen these as if they were current defects without new counter-evidence.

## Evidence strength

This update is supported by current source, manifest data, CI, Pages deploy and the deployed-site smoke test. No independent pixel recapture was produced in this verification pass, so do not treat it as new visual-composition evidence for the #267 pattern gate merely because deployment succeeded.

That distinction matters: Ficha now supplies strong implementation/deployment evidence for the provenance/freshness relation, but promotion of a shared Cobogó pattern still requires the independent rendered-consumer evidence required by #267.

## What remains local or unresolved

The Greenfield review in Ficha #141 still identifies consumer-local work beyond the completed provenance slice:

- expose the two real access paths — direct consultation and taking the dataset — without inventing navigation;
- represent multiple published snapshots when the product has enough real temporal history to justify the comparison surface;
- improve the generic card composition later through `Vão`, only after the higher-information-value slices are proven;
- inspect dense result/detail surfaces in rendered form before deriving shared table/filter patterns.

Ficha should continue to look like a **dated public archive**, not a CausaGanha clone or a generic Cobogó demo.

## Cross-consumer interpretation

The useful reusable signal is the relation, not the component: external-source data should keep source, relevant time, preservation/verifiability and state recoverable, with exact displayed time represented machine-readably when possible.

Ficha's categorical textual state and CausaGanha's continuous coverage metrics remain different expressions. That negative evidence still argues against a universal status component while supporting the narrower non-colour and provenance/freshness invariants.
