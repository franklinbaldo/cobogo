---
type: consumer
title: Sites Prefeituras
repository: https://github.com/franklinbaldo/sites_prefeituras
adoption_status: candidate
surface: public audit dashboard and documentation
interaction_profile: large municipal comparison, metrics, ranking, search and filters
runtime: MkDocs + Tabulator.js dashboard intended for GitHub Pages
constraints:
  - 5570-municipality scale
  - accessibility/performance metrics are domain content as well as UI concerns
  - dense tabular comparison must remain scan-friendly
  - deployed artifact is primary evidence; source inspection remains weaker while Pages is blocked
capabilities_used:
  - consumer-side design quality governance
  - persistent control labeling
  - native search and navigation interaction semantics
  - machine-readable temporal freshness
  - keyboard focus visibility
unmet_needs:
  - restore main deployment through github-pages environment policy
  - distinguish data-load failure from legitimate empty data
  - inspect the rendered Tabulator ranking before deriving shared comparison relations
last_verified: 2026-08-12
---

# Sites Prefeituras

Sites Prefeituras is a data-reading consumer candidate: a MkDocs + Tabulator dashboard for comparing PageSpeed/audit metrics across Brazilian municipalities.

## Evidence tier

The source and docs build are inspectable, but the deployed dashboard is **not currently live evidence**. The latest main deployment built the docs successfully and then GitHub rejected the deployment before runner execution because `main` is not allowed by the `github-pages` environment protection policy. `sites_prefeituras#69` tracks the repository-setting fix.

Until that setting is repaired and the resulting artifact is captured, this consumer remains source-tier for Cobogó derivation. Source evidence may justify clear local design corrections; it does not satisfy #267's independent rendered-consumer threshold.

## Consumer corrections — 2026-08-12

The first Cobogó quality pass produced four consumer PRs:

- **#66** — merged as `68aeef4`: removed the full nested HTML document and duplicate Tabulator/script ownership from `docs/index.md`; MkDocs now owns the page shell and shared assets, with the existing fonts preserved through the canonical stylesheet.
- **#67** — merged as `d9aa5ae`: replaced duplicate inline/click/keypress search activation with one native form-submit path and replaced the clickable scroll `<div>` with a real anchor to the panorama section.
- **#68** — merged as `bfa5c71`: added a real search label, visible labels for state and municipality-size filters, and preserved `summary.generated_at` as native `<time datetime>` while keeping the localized visible timestamp.
- **#72** — merged as `e2c6452`: restored explicit `:focus-visible` rings for the search input and filters instead of relying on subtle background/border changes after suppressing the native outline.

These are consumer quality corrections, not a shared component extraction.

## Negative and incomplete evidence

The current source has a real state-design gap: ranking-load failure is caught and converted to `[]`, while summary-load failure becomes `null`; the UI can therefore resemble legitimate empty/zero data when transport or data loading actually failed. `sites_prefeituras#73` tracks the correction separately.

The repository also has a pre-existing Python CI failure (`storage.py` F402) unrelated to the dashboard changes, tracked in #70. Build Docs for #66 was green; base debt was not folded into the design PR.

## Relation to #267

This consumer strongly pressures ranking, filters, freshness and large-table reading, but it **must not yet promote #267**. The Tabulator comparison surface has not been captured as a healthy deployed artifact in this campaign.

Once `main` can deploy again, capture the real dashboard, verify ranking/table semantics and failure/empty states, then compare its actual user task against CausaGanha rather than promoting relations from source/tag similarity.
