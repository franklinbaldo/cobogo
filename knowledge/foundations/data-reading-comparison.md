---
type: comparison
status: proposed
title: CausaGanha × Ficha — data-reading relations
related_issues:
  - https://github.com/franklinbaldo/cobogo/issues/267
  - https://github.com/franklinbaldo/cobogo/issues/271
last_verified: 2026-08-11
---

# CausaGanha × Ficha — data-reading relations

Both consumers were captured from their deployed artifacts. This compares them relation by relation, looking for differences as much as for agreement.

## Capture asymmetry, which limits everything below

[CausaGanha](../consumers/causaganha.md) has a **live, server-rendered** data-reading surface. [Ficha](../consumers/ficha.md) does **not**: its deployed site says *"Os dados ainda não foram publicados"*, and its record surface exists only in source.

So this is a comparison of one rendered surface against one intended surface. That asymmetry is the single most important fact here.

## 1. Same relation, same structural need

- **External-source provenance and freshness.** Both read from a public authority — DJEN, Receita Federal — and both must state where data came from and how current it is. CausaGanha does this genuinely well in prose, separating *last attempt* from *last success*. Ficha's whole empty state is a publication-status statement. Both render it with **zero `<time>`**, so freshness is human-readable but not machine-readable in either.
- **Record plus qualifying metadata.** Both attach secondary attributes to an identified record — CausaGanha per tribunal, Ficha per establishment — and both flatten that into a visual line rather than a semantic pairing.

## 2. Looks alike, different need

- **Tabular display.** CausaGanha's 96 homogeneous rows exist to be *compared across* — that is a table, and it needs headers, scope and a caption. Ficha's lists are heterogeneous per-entity records where cross-row comparison is not the task. Imposing a table contract on Ficha would damage it. Same visual family, different relation.
- **The input above the data.** CausaGanha filters a dataset for exploration. Ficha looks a single entity up by identifier. Filtering and lookup produce similar-looking controls and completely different states: a filter has a result count and an empty result, a lookup has *not found* and *ambiguous match*.

## 3. Present in only one

- aggregate metrics and top-N comparison — CausaGanha only;
- entity relationship reading, partners and branches — Ficha only.

## 4. Counter-evidence

**Status is not a shared visual pattern to standardise.** Ficha's badge carries the status word as text with a per-state palette; CausaGanha tints percentages by colour. Ficha's is better and satisfies the non-colour-redundancy rule Cobogó already has in canon.

What generalises is the existing **rule**, not a component. Extracting a shared "status badge" from these two would export Ficha's presentation to a consumer whose status is a threshold on a continuous metric, not a categorical registry state.

## Conclusion for #267

**Nothing is promoted yet.** Group 1 holds two candidates — source provenance/freshness, and record-plus-metadata — but both rest on one rendered surface plus one read from source. That is the same single-consumer threshold the registry already refuses to treat as generalisable.

The blocker is factual and cheap to name: #267 becomes derivable when Ficha publishes data, or when a third consumer with a live data-reading surface is inspected. Deriving now would produce a catalogue of plausible candidates, which is exactly what that issue was narrowed to avoid.
