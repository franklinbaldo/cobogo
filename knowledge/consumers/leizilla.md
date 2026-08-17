---
type: consumer
title: Leizilla
repository: https://github.com/franklinbaldo/leizilla
adoption_status: candidate
surface: public Brazilian legislation search, law detail, evidence and coverage portal
interaction_profile: public legal-data search, reading, provenance and coverage inspection
runtime: Astro + Svelte frontend over static/released legal datasets
constraints:
  - public claims must not outrun actually published datasets or verified coverage
  - official-source, capture, OCR/parse and release provenance must remain inspectable
  - legal-data uncertainty and missing coverage must be represented explicitly
  - local dinosaur identity belongs to Leizilla and must not be centralized into Cobogó
capabilities_used: []
operational_capabilities:
  - Astro/Svelte human-facing web application
  - GitHub Pages deployment workflow
  - pull-request Astro/Svelte build gate for web changes
  - automated discovery and harvest workflows
  - parse and dataset release workflow
  - Wayback Save Page Now preservation workflow
  - Internet Archive integration for captured and released artifacts
unmet_needs:
  - provenance and freshness semantics spanning source capture parse and dataset release
  - coverage/status patterns that distinguish known absence from pipeline incompleteness
  - data-reading patterns for search results law detail evidence and version history
integration_evidence:
  - https://github.com/franklinbaldo/cobogo/issues/323
  - https://github.com/franklinbaldo/cobogo/issues/325
  - https://github.com/franklinbaldo/leizilla/issues/103
  - https://github.com/franklinbaldo/leizilla/issues/143
  - https://github.com/franklinbaldo/leizilla/pull/144
  - https://github.com/franklinbaldo/leizilla/issues/145
  - https://github.com/franklinbaldo/leizilla/pull/146
  - https://github.com/franklinbaldo/leizilla/pull/147
  - https://github.com/franklinbaldo/leizilla/issues/148
  - https://github.com/franklinbaldo/leizilla/issues/129
  - https://github.com/franklinbaldo/leizilla/pull/150
local_identity: playful Leizilla dinosaur identity applied to a rigorous public legal-data product
last_verified: 2026-08-17
last_journey_review: 2026-08-17
---

# Leizilla

Leizilla is a **candidate** Cobogó consumer with a real human-facing surface and a substantial data/preservation pipeline behind it. It is no longer accurately described as merely technical infrastructure awaiting UI classification.

## Current public-surface evidence

The repository contains an Astro/Svelte application under `web/` with concrete surfaces for:

- searching laws;
- inspecting an individual law;
- preserving search context when moving from a matching result into a law, including the term, matching-device count, navigable matching devices and return to the original query;
- reading structured devices/data;
- inspecting evidence and version history;
- viewing coverage;
- representing the explicit unavailable-dataset state;
- reaching the released Parquet and release metadata;
- running a minimal DuckDB query against the public Parquet through a progressive disclosure on the home surface.

This is enough to establish a real human task and therefore a Cobogó consumer relationship. It does **not** establish active Cobogó package adoption.

Leizilla #147 closed a concrete continuity gap in that task. Search-result links now preserve `q` together with the first matching-device hash; the law page derives matching current devices from rows it already loads, exposes term + count + a textual navigation list, marks matching device blocks, and offers a return path that restores the query on the search surface. The implementation deliberately treats the published **device** as the highlight unit instead of reconstructing substring-level matching in the DOM.

## Journey review — 2026-08-17

The highest-value journey reviewed in this pass was a **reader arriving from search or an external link who needs to understand a norm, decide whether the displayed text is trustworthy, and leave with something citable or reusable**. This segment is derived from the product itself: public search, stable law URLs/hashes, structured legal text, URN-LEX identifiers, evidence links, version history and downloadable data all exist in the current surface.

The observed journey is:

```text
arrival / search
  -> identify the norm and matching device
  -> read the current structured text
  -> understand current/revoked state and compilation date
  -> inspect versions when chronology matters
  -> inspect evidence / preserved source when trust matters
  -> copy a stable identifier or deep link
  -> download this norm or reuse the full public dataset
```

The surface already supports most of this unusually well. In particular, search context survives the transition into the law, a direct section nav exposes `Texto / Versões / Evidências / Dados`, the evidence surface links the structured IA item/XML/parse metadata and per-device hashes, and the data surface exports the current law as JSON/CSV while also reaching the same Parquet used by the browser.

### Material journey finding: legal-date truthfulness

A trust-breaking semantic mismatch was found in the law header. The UI rendered the field `data_publicacao` as **“Publicada em”**, but Leizilla #129 documents that this value is currently derived from the representative date encoded in the URN-LEX and represents the act/signature-promulgation date, not necessarily publication in the Diário Oficial. The `Dados` section repeated the same assumption when explaining a missing URN.

That difference is material for a legal reader: two dates can differ, and the surface must not turn a schema naming debt into a stronger public legal claim. Leizilla #150 changes only the presentation boundary to **“Data do ato”** / **“data do ato desconhecida”** while leaving #129 open for the structural ETL/schema decision. This is a consumer-local truthfulness correction, not a new Cobogó component.

### Remaining journey gaps

- **Coverage before absence:** the law-not-found state correctly explains that missing S4 rows do not prove the norm does not exist and offers an IA evidence search. The broader coverage page is honest that S1–S3 counters are not yet exported. A future complete journey should make the boundary between `not in structured dataset` and `not captured` progressively more inspectable once those counters/artifacts exist; do not fake this before the pipeline exports it.
- **Publication date remains structurally unresolved:** the presentation fix prevents a false claim, but #129 still owns whether the dataset should rename `data_publicacao` to an act-date field or separately capture a true Diário Oficial publication date.
- **Evidence remains intentionally layered:** the reader can reach evidence from the page nav, but the raw source is not always a direct URL because source identifiers may live inside IA range buckets. This is a real architecture constraint, not a UI bug; avoid pretending every logical source id has a stable direct file URL.

No new shared journey pattern is promoted from this review. The useful cross-consumer lesson is already covered by Cobogó's existing provenance/freshness and public-artifact-reuse knowledge: a public surface must distinguish what the artifact proves from what its pipeline or schema merely intends.

## Project machinery behind the surface

Current repository workflows include web deployment, discovery/harvest, parse/release and Wayback Save Page Now. The project also integrates Internet Archive into its capture/release architecture. These are operational capabilities of Leizilla, not Cobogó capabilities used.

Leizilla #148 exposed and closed a surface-validation gap: prior to #147, `web/**` was first compiled by the Pages workflow only after reaching `main`. The same production Astro/Svelte build now runs on pull requests that touch the web app, while the deploy job is skipped for PR events. #147 itself proved the new gate, and merge `bb30f219f3c160336e30b8d472ae3132159cb3d3` then triggered `Deploy Leizilla Web` run `31916630398`, whose build and Pages deploy both succeeded.

The important project-surface relation is:

```text
official source
  -> discovered candidate
  -> preserved capture
  -> OCR / parsed legal structure
  -> dataset release
  -> public search / law / evidence / coverage surface
  -> reusable artifact
  -> reproducible query / metadata check
```

The first published reuse path was validated after Leizilla #144: merge `d6d5c31f4ce310cc9119af5d69d18653de11cf79` triggered `Deploy Leizilla Web` run `31878476589`, whose build and deploy jobs both succeeded. The emitted GitHub Pages artifact contains the rendered `Testar o dataset com DuckDB` disclosure, querying the public `versoes.parquet` and directing the reader to compare the result with `row_count` in `dataset_meta.json`.

## Honest-state constraint

Rondônia v0 is now a **published artifact**, not merely an implemented pipeline. The scheduled `Parse + ETL + Release Dataset` run `31869806760` completed on 2026-08-15 and published `leizilla-dataset-ro-v0` to the Internet Archive; the web deployment following #144 exposes a reproducible path from the public surface to that artifact.

This does **not** establish complete Rondônia coverage. Published artifact, observed coverage, pipeline state and verified freshness remain separate facts and should remain separately represented.

Leizilla #146 closed the remaining GitHub-entry surface gap after both PR workflows passed and merge `6990719d4acf6a790849aa7f4fcb83681a962859` landed on `main`. The README now links the portal, Internet Archive dataset, public Parquet and release metadata; describes the frontend and data pipeline as current capabilities; preserves the distinction between a published dataset and incomplete coverage; and includes the same minimal external DuckDB reuse path without claiming broader adoption or coverage.

## Shared pattern evidence

Leizilla is one of the independent rendered consumers supporting [Public artifact reuse](../patterns/public-artifact-reuse.md):

```text
understand project
  -> reach canonical artifact
  -> inspect provenance/freshness
  -> reuse reproducibly
```

The pattern is deliberately `experimental`. CausaGanha now supplies a second full rendered pressure case with a different materialization boundary, while Ficha supplies limiting evidence that a truthful **Levar a base** route can be sufficient without an inline technical query. This prevents the shared relation from collapsing into “show DuckDB SQL”.

Leizilla's use of DuckDB remains consumer-local implementation evidence. The shared contract is artifact reachability, provenance and a reproducible handoff; another consumer may satisfy it with a notebook, API, text schema or another real artifact path.

The #147 search-context work remains **consumer-local evidence**, not a new Cobogó pattern. It demonstrates that search → document continuity matters on this legal-reading surface, but one consumer is not enough to promote a shared navigation abstraction. A second independent rendered consumer with the same relation would be needed before considering generalization.

## Local identity

The dinosaur metaphor and playful voice are product identity. Cobogó may help with hierarchy, semantics, accessibility, data-reading and provenance without turning that identity into a family-wide visual motif.
