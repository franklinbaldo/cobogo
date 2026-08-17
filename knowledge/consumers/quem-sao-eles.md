---
type: consumer
title: Quem São Eles?
repository: https://github.com/franklinbaldo/quem-sao-eles
adoption_status: candidate
surface: public editorial profile catalog plus public PEP data search
interaction_profile: profile reading, chronology, source archive, political memory and client-side public-data search
runtime: Astro static site on GitHub Pages + Svelte/DuckDB-WASM for PEP search
constraints:
  - preserve sober journalistic identity
  - sources must remain visible and archived
  - profiles and news need long-form reading rhythm
  - public datasets must not be conflated with editorial profiles
capabilities_used: []
operational_capabilities:
  - GitHub Pages build/deploy from main
  - monthly PEP refresh workflow writing YYYYMM_pep.parquet snapshots to public/data
  - client-side DuckDB-WASM query over the published PEP Parquet
  - reproducible Chromium capture that proves the current PEP snapshot is reachable and queryable
unmet_needs:
  - editorial provenance pattern
  - profile and chronology composition
  - source/archive inscription semantics
  - rendered evidence for populated editorial profiles
integration_evidence:
  - https://github.com/franklinbaldo/quem-sao-eles/issues/7
  - https://github.com/franklinbaldo/quem-sao-eles/pull/8
  - https://github.com/franklinbaldo/quem-sao-eles/issues/11
  - https://github.com/franklinbaldo/quem-sao-eles/issues/13
  - https://github.com/franklinbaldo/quem-sao-eles/pull/12
last_verified: 2026-08-17
---

# Quem São Eles?

Quem São Eles? is a high-confidence Cobogó consumer candidate because it combines an Astro-based editorial catalog with a real public-data product. Its strongest editorial synergy remains with O Vigia around provenance, source hierarchy, profiles, chronology and sustained reading, while the PEP route provides a separate data-reading pressure test. Cobogó should not erase its intentionally sober newspaper identity or treat those two jobs as one surface.

## Editorial surface — negative evidence still current

The 2026-08-11 inspection remains relevant for the editorial catalog itself: a fresh checkout builds, but the home has no populated politician/news collection to exercise the intended profile/chronology surface. Astro starter-template footer boilerplate also remains. This still means the editorial catalog is **not** ready to prove a shared editorial pattern merely from its source structure.

That negative evidence no longer justifies describing the whole project as lacking a real product surface, however. The repository contains a distinct PEP data product with committed Parquet snapshots and a DuckDB-WASM search route.

## Project-surface reconciliation — 2026-08-15

A review found a machinery/surface mismatch in the PEP product:

- `.github/workflows/pep.yml` runs a monthly Portal da Transparência PEP pipeline and commits `public/data/{YYYYMM}_pep.parquet`;
- the latest inspected successful scheduled run was 2026-08-01;
- `public/data/` contained snapshots through `202606_pep.parquet`;
- `PepSearch.svelte` nevertheless hard-coded `202602_pep.parquet` and `/pep` did not identify the queried competence.

Quem São Eles #7 tracked that gap and PR #8 corrected it. After #8, the build selects the greatest available `YYYYMM_pep.parquet`, the PEP page identifies Portal da Transparência/CGU as source, exposes competence with machine-readable `<time datetime="YYYY-MM">`, links the exact Parquet, and the home makes the PEP search discoverable while stating that it is separate from the editorial catalog. The search input also gained an explicit label/help relationship, focus treatment, and distinct loading/error/result semantics.

The same pass found that web changes had no causal pre-merge build gate. #9 was folded into #8: pull requests now execute the same `withastro/action` build used by Pages, while deployment is skipped on PRs. The first run correctly falsified the existing workflow because `withastro/action` defaulted to Node 20 while Astro 6 requires Node >=22.12.0; pinning the action to Node 22.12.0 made the next PR build pass. This is useful negative evidence: a deploy recipe existing in source was not equivalent to a currently executable build contract.

## Rendered search and artifact evidence — 2026-08-17

#11 / PR #12 added a browser gate around the same built artifact used by Project Pages. The first capture immediately falsified the visible handoff: the Parquet link rendered as `/quem-sao-elesdata/202606_pep.parquet`, and the same broken URL was being passed to DuckDB. #13 tracked that product bug; #12 normalized the base-path join and kept the test rather than hiding the failure.

The final PR gate then proved, in Chromium and without credentials:

- the page reached `search-ready` rather than merely rendering its shell;
- Portal da Transparência / CGU remained visible as authority;
- competence remained machine-readable;
- the exact snapshot link rendered as `/quem-sao-eles/data/202606_pep.parquet`;
- a deliberately unmatched query (`zzzxxy`) completed as `empty-success`, which exercises `read_parquet()` against the published snapshot rather than only proving DuckDB initialization;
- a full-page screenshot, rendered DOM and machine-readable `capture-state.json` were preserved as the run artifact.

After squash merge (`d411ea9b74fcdd3e334262e0fdf8618e454d071a`), both the PEP capture workflow (`32074662777`) and Pages build/deploy (`32074662763`) passed on `main`.

This gives Quem São Eles strong rendered evidence for a useful project-surface relation: a visitor can **use the published dataset in place** through the search and **take the exact underlying artifact** independently through the Parquet link, with source and competence kept adjacent. The two actions share provenance but remain distinct jobs.

## What this means upstream

This strengthens both `Provenance and freshness` and the existing `Public artifact reuse` pattern without requiring a new component. It is especially useful limiting evidence for artifact reuse: an interactive query can sit beside the exact reusable artifact without turning the page into a developer console.

It also gives #267 a second independent rendered implementation of the broad `use here ↔ take the artifact` relation alongside Ficha. The implementations remain materially different: Ficha separates **Consultar aqui** from **Levar a base** toward manifest/preserved assets, while Quem São Eles places client-side search next to the exact Parquet snapshot. The invariant is truthful reachability and context, not a shared button label or layout.

It still does **not** close the comparison-table relation in #267: PEP is a search/result-list task, not homogeneous cross-row comparison. It also does not stabilize the editorial reading pattern, because populated profile/chronology evidence is still absent. `adoption_status` remains `candidate` and `capabilities_used` remains empty.
