---
type: consumer
title: Ficha
repository: https://github.com/franklinbaldo/ficha
adoption_status: adopting
surface: live public data exploration web over a versioned CNPJ dataset
interaction_profile: company lookup, analytical filtering, provenance/freshness framing, temporal comparison and relationship exploration
runtime: Astro + Svelte 5 static frontend on GitHub Pages with DuckDB-WASM
constraints:
  - serverless public delivery
  - large analytical datasets in browser
  - preserve fast direct lookup and analytical modes
capabilities_used:
  - framework-agnostic core web foundations via immutable pinned snapshot
  - provenance and freshness
  - public artifact reuse
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
  - stable/package distribution path for future core upgrades
integration_evidence:
  - https://github.com/franklinbaldo/ficha/pull/143
  - https://github.com/franklinbaldo/ficha/pull/210
  - https://github.com/franklinbaldo/ficha/pull/214
  - https://github.com/franklinbaldo/ficha/pull/217
  - https://github.com/franklinbaldo/ficha/pull/218
  - https://github.com/franklinbaldo/ficha/issues/221
  - https://github.com/franklinbaldo/ficha/pull/222
last_verified: 2026-08-18
---

# Ficha

Ficha is now a proven Cobogó brownfield core adopter. It remains a distinct public CNPJ archive/search product: Astro/Svelte, DuckDB-WASM, Receita Federal snapshots, preservation through Internet Archive and a dated-public-archive information model all remain consumer authority.

The current relationship is deliberately layered:

```text
pinned Cobogó core snapshot
→ Ficha semantic mapping / theme values
→ Ficha local page and component CSS
```

This is adoption evidence, not a universal visual skin.

## Core adoption — verified 2026-08-18

[Ficha #222](https://github.com/franklinbaldo/ficha/pull/222) pressure-tested `cobogo/core` on the public home and merged as `50c38b17871b9c1ef00fe3dff196781c8f493aa5` after normal CI and the repository's Project Pages visual-capture gate passed.

Because no suitable package release was used for this pressure test, Ficha vendors the exact `src/styles/core.css` bytes from Cobogó commit `bca94e2da68c23ab36b79453607c3d25eb20100e`. `web/cobogo-core.pin.json` records the upstream repository, commit, path and Git blob SHA `afe206e4c0e82392ed4ee41dddee77e71acbb10e`; the normal Ficha test suite recomputes that Git blob hash and fails if the downstream copy drifts.

### Positive technical delta

The migration did not merely add `--cobogo-*` names. Across the two pre-existing surface files changed (`web/src/pages/index.astro` and `web/src/components/Header.svelte`), it produced a net **12-line reduction** while transferring generic foundation ownership upstream:

- document/body baseline and ordinary font inheritance move to core;
- the access-path link's local focus ring is removed in favor of the shared two-tone focus relation;
- the header's local focus outline is removed; the locally dark header declares `data-cobogo-inverted` so the same shared focus relation re-tones correctly;
- reduced-motion baseline is now inherited from the shared core without a parallel local contract.

Ficha deliberately retains concrete palette values, explicit light color scheme, dark-header appearance, page measure/composition, search/results, archive/provenance copy, DuckDB behavior and all domain-specific state. The mapping layer exists to keep those values local.

### Rendered evidence

The PR's visual-capture run built the real GitHub Project Pages path and captured the home at the same 1280×900 evidence scale used by the existing workflow.

Compared with the pre-adoption capture, the core version preserved the Ficha hierarchy, header identity, provenance/status information and dual access paths. Typography/leading became slightly more relaxed and the known remote-data error wrapped across more lines, but no information was clipped or hidden.

Both baseline and proposed captures were classified `remote-data-unavailable` because the CI browser environment could not fetch the Internet Archive `cnpjs.parquet`; both recorded zero page errors. This is deliberately preserved as negative evidence: the capture proves composition/error behavior under that environment, not deployed-data health.

This second materially different external adoption is the evidence that satisfies the Core Web API's original two-consumer stability gate. It does **not** imply that every consumer should adopt core; The Lab remains a valid measured rejection case when the technical delta is negative.

## Current public contract

The public manifest publishes a current dated snapshot backed by preserved Internet Archive assets and checksums. The search surface exposes provenance as recoverable structure:

- **Origem** — Receita Federal do Brasil;
- **Competência** — visible month/year plus machine-readable `<time datetime="YYYY-MM">`;
- **Preservação** — Internet Archive when supported by the manifest;
- **Verificação** — checksum claim derived from the loaded manifest contract;
- **Estado** — explicit textual current/stale state, with the stale explanation retained.

The home also distinguishes two real user jobs without generic card duplication:

- **Consultar aqui** — use the browser interface against the published competence;
- **Levar a base** — open the real `manifest.json`, which points to preserved snapshot assets.

The repository README likewise points to the public site and manifest and describes the current product/data contract rather than an obsolete model.

## Operational capabilities — verified 2026-08-18

These are repository capabilities, not extra design-system claims:

- **GitHub Pages deploy + published-site smoke test** — production is built and deployed from `main`.
- **Visual capture** — `.github/workflows/visual-capture.yml` builds with the real `/ficha/` base path, serves the artifact and captures Chromium evidence. It classifies `hydrated`, `remote-data-unavailable` or `incomplete` instead of treating every screenshot as hydrated proof.
- **Internet Archive upload and preservation** — ETL workflows use Actions secrets through the repository's secure mechanism; values are not represented in this corpus. The public manifest points to preserved snapshot assets and checksums.
- **External-source ETL** — the pipeline resolves/transforms Receita Federal snapshot data and can reuse IA-mirrored inputs.
- **Core authority ratchet** — normal web tests verify the immutable upstream CSS blob, layer order and the absence of generic local focus/document contracts that were transferred to Cobogó.

No Save Page Now checkpoint of the rendered Ficha UI is claimed here. Dataset preservation, CI screenshot capture and historical web archiving remain separate evidence classes.

## Accessibility state

Current verified behavior includes:

- explicit search labels;
- scoped status/live regions for lifecycle and query outcomes;
- provenance `dl/dt/dd` semantics;
- machine-readable competence time;
- textual stale/current state rather than color-only state;
- shared two-tone keyboard focus from Cobogó core, including the inverted header relation;
- reduced-motion baseline from Cobogó core;
- access paths understandable without color.

Do not reopen older mechanical findings without new counter-evidence.

## Evidence strength

Ficha now has current source, manifest evidence, CI, immutable core-pin verification, controlled browser capture infrastructure, Pages deployment and published-site smoke evidence. These classes remain distinct.

A `remote-data-unavailable` CI screenshot is rendered evidence of composition and the external-data failure state. It is not proof that production data is broken. A deployed-site smoke proves reachability, not pixels. A pinned core snapshot proves shared authority, not healthy upstream package distribution.

## What remains local or unresolved

- represent multiple published snapshots only when real temporal history supports a comparison surface;
- inspect dense result/detail surfaces before deriving shared table/filter grammar;
- obtain stronger hydrated browser evidence when the capture environment can reach the preserved data;
- move future core updates onto a stable package/release transport when available rather than treating vendored snapshots as the permanent distribution model.

Ficha should continue to look and behave like a **dated public archive**, not a CausaGanha clone or a generic Cobogó demo.

## Cross-consumer interpretation

Ficha and CausaGanha now independently prove the small shared foundation contract under materially different surfaces. The reusable result is not a common page skeleton: it is the authority boundary **shared semantic foundation → local mapping/theme → local product CSS**, with actual duplicate contracts removed and observable behavior preserved.

Ficha's categorical freshness state and CausaGanha's continuous coverage metrics remain deliberately different expressions. That negative evidence still argues against a universal status component while supporting narrower provenance, focus and non-colour invariants.