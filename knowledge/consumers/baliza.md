---
type: consumer
title: Baliza
repository: https://github.com/franklinbaldo/baliza
adoption_status: candidate
surface: public procurement monitor over PNCP archives
interaction_profile: public data reading, municipal scope, pipeline status and SQL exploration
runtime: Astro static site with Svelte islands on GitHub Pages, DuckDB-WASM for client-side query
constraints:
  - archived public-procurement data must keep its source and coverage legible
  - municipal scoping is part of the reading task, not a filter afterthought
  - pipeline availability is itself information the reader needs
capabilities_used: []
unmet_needs:
  - machine-readable freshness for archived source data
  - coverage/comparison reading across publishing bodies
last_verified: 2026-08-11
---

# Baliza

Baliza is a live public-procurement monitor reading PNCP data archived on the Internet Archive.

## Registry correction — 2026-08-11

The registry previously carried `baliza-site` as the consumer. That repository's Pages deployment returns GitHub's generic *Site not found*. The live surface is **`franklinbaldo/baliza`**, at `/baliza/`, with routes `/`, `/atas`, `/dispensas`, `/status`, `/explorador`, `/busca`, `/pca`, `/arquivo`, `/publicacoes`.

## Captured 2026-08-11

Deployed artifact, mirrored locally with assets verified. Only webfonts failed.

**`/status` and `/` are server-rendered** and are the trustworthy evidence here.

- **status** — a pill reading *"🟢 Operacional"*: a coloured dot **plus the word**. Not colour-alone. The nature of the state is **availability/process** — is the pipeline running — which is neither Ficha's categorical registry state nor CausaGanha's threshold on a continuous metric.
- **provenance** — names the authority and the artefact explicitly: *"metadados públicos de `baliza-pncp-raw`"*, *"Fonte: PNCP & Internet Archive"*, and describes reading ZIP files, size, coverage and item update time.
- **comparison** — *"Cobertura de órgãos públicos"* compares who publishes on PNCP against who should publish, per the Receita Federal register.
- **`<time>` count is 0**, like both other consumers.

**`/atas` and `/dispensas` are `client="only"` islands.** Their entire `<main>` is a single `astro-island` rendered by Svelte at runtime against data this environment cannot fetch. Their inventory is **incomplete, not empty** — no claim is made here about their table semantics.
