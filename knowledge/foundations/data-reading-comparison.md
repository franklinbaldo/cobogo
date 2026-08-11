---
type: comparison
status: proposed
title: Data-reading relations across CausaGanha, Ficha and Baliza
related_issues:
  - https://github.com/franklinbaldo/cobogo/issues/267
  - https://github.com/franklinbaldo/cobogo/issues/271
last_verified: 2026-08-11
---

# Data-reading relations across CausaGanha, Ficha and Baliza

Three consumers, each captured from its deployed artifact. Evidence hierarchy applied throughout: **rendered surface > partially hydrated behaviour > source**.

## What was actually observable

| | rendered data surface | notes |
|---|---|---|
| [CausaGanha](../consumers/causaganha.md) | **yes** — `/stats` server-rendered | `/explorador` is client DuckDB-WASM, incomplete |
| [Ficha](../consumers/ficha.md) | **no** — *"Os dados ainda não foram publicados"* | record surface read from source only |
| [Baliza](../consumers/baliza.md) | **yes** — `/status` and `/` server-rendered | `/atas`, `/dispensas` are `client="only"`, incomplete |

Two independently rendered data surfaces exist: CausaGanha `/stats` and Baliza `/status`.

## 1. Provenance and freshness of an external source — **survives**

All three read from a named public authority and all three must say how current the data is.

- CausaGanha: *"Fonte DJEN: Atrasado — última tentativa … · último sucesso …"*, distinguishing attempt from success;
- Baliza: *"Fonte: PNCP & Internet Archive"*, naming the archived item `baliza-pncp-raw` and reporting its update time;
- Ficha: names the Receita Federal open data, and its entire empty state is a publication-status statement.

The structural need is identical: **a reader cannot judge this data without knowing where it came from and how stale it is.** Each product expresses it differently, and each is right to.

They also share the same gap, and this is what makes it a contract rather than a coincidence: **`<time>` count is 0 in all three**. Baliza's source confirms the mechanism — `RawArchiveStatus.svelte` renders timestamps through `toLocaleString`, producing text a human reads and a machine cannot. Freshness is presented and simultaneously unavailable to any assistive technology, feed reader or automated freshness check.

This relation is observed in **two independently rendered surfaces**, which is the bar for derivation.

## 2. Record plus qualifying metadata — does not survive yet

CausaGanha flattens qualifiers into a visual line; Ficha's `item-meta` spans separated by `·` do the same. But Ficha's is source-only, and Baliza's equivalent views (`AtasView`, `DispensasView`) are client-only and unobservable — source shows they carry no `<dl>` either. One rendered surface plus two unrendered is not enough.

## 3. Status — **counter-evidence, now stronger**

Three consumers, three genuinely different kinds of state:

| consumer | state | nature | colour-alone? |
|---|---|---|---|
| CausaGanha | coverage percentage tinted green/red | **threshold on a continuous metric** | apparently yes |
| Ficha | ativa / baixada / suspensa / inapta / nula | **categorical registry state** | no — word inside the badge |
| Baliza | *"🟢 Operacional"* | **availability of a process** | no — dot plus word |

A shared status component would have to unify a threshold, a category and an availability signal. It should not. What generalises is the canon rule Cobogó already has — state must not depend on colour alone — and two of three consumers already satisfy it without any shared code.

Extracting a component here would export one consumer's presentation to two products whose state means something else.

## 4. Tabular comparison — does not survive

Only CausaGanha has a real table, and it earns it: 96 homogeneous rows whose task is comparison across tribunals. Ficha's records are heterogeneous per-entity. Baliza's `AtasView` and `DispensasView` contain no `<table>` at all in source. Table semantics remain a **CausaGanha-specific** need on current evidence.

## 5. Search, filter and lookup — three different relations

CausaGanha filters a dataset for exploration; Ficha looks one entity up by identifier; Baliza offers both a municipal scope and a SQL explorer. Their empty and error states differ accordingly — *no results* versus *not found* / *ambiguous match* versus *query error*. Similar-looking controls, different relations.

## Conclusion

Exactly **one** relation survives as a structural need across two independently rendered surfaces: **provenance and freshness of an external source, with machine-readable time as the shared missing piece.**

Everything else stays unpromoted, and the status axis is preserved as explicit counter-evidence against component extraction.
