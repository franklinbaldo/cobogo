---
type: pattern
status: experimental
title: Public artifact reuse
related_issue: https://github.com/franklinbaldo/cobogo/issues/325
consumer_evidence:
  - ../consumers/causaganha.md
  - ../consumers/leizilla.md
  - ../consumers/ficha.md
---

# Public artifact reuse

Some Cobogó consumers do more than present information in a website: they publish datasets, preserved source material, manifests or other artifacts that a person can reuse independently of the site.

The reusable relation is:

```text
understand the project
  -> reach a canonical public artifact
  -> recover source / provenance / freshness
  -> reuse the artifact with a small reproducible path
```

This is a project-surface relation, not a download-card component and not a requirement to expose a technical console on every home page.

## Artifact reachability

When reuse is part of the real product, a public surface should provide a truthful route from the human explanation to the canonical artifact. Do not require a person to reverse-engineer repository workflows or guess an Internet Archive identifier that the project already knows.

The artifact may be a Parquet file, manifest, archive item, textual schema/query contract, notebook, API endpoint or another published product. Cobogó does not prescribe the transport or storage technology.

## Provenance before convenience

The reuse path should preserve enough context to answer what the artifact is, where it came from, which version/snapshot it represents and what limitation matters to interpretation.

A convenient query that hides whether the dataset is partial, stale or derived is weaker than a slightly longer path that keeps those facts recoverable.

## Reproducible handoff

When a project already supports external reuse, prefer a small executable handoff over prose such as “the data can be queried”. The handoff may be a `read_parquet(...)` query, a text schema applied to a local engine, a notebook or another minimal recipe that exercises the real published artifact.

Do not make one engine part of the semantic pattern. Current evidence includes DuckDB, but the shared contract is **published artifact + reconstructible/reproducible use**, not DuckDB itself.

## Materialization boundary

Prefer publishing durable source/data artifacts and transparent textual contracts over distributing unnecessary engine-local state when consumers can reconstruct that state cheaply.

CausaGanha is a useful boundary case: after #874/#875, its public contract is `catalog.sql` plus manifests/Parquets; a `.duckdb` database may exist as local/ephemeral materialization, but it is no longer the distributed canonical artifact. This keeps the project surface inspectable and avoids making a binary database snapshot the semantic authority.

This is evidence about the boundary, not a universal prohibition on binary artifacts. A binary remains appropriate when it is itself the intended product and cannot be equivalently reconstructed from the published contract.

## Progressive disclosure

Keep the primary product task primary. A technical reuse path can live behind an explicit secondary action or disclosure when most visitors only need the interactive site.

Do not turn a public home into a README, duplicate the same information in generic cards or manufacture a “developer” destination that does not exist.

## Negative / limiting evidence

Ficha demonstrates that external reuse does not always need an inline technical query. Its public surface distinguishes **Consultar aqui** from **Levar a base**, with the latter leading to the real manifest and preserved snapshot assets. That is enough for its current product job; forcing a DuckDB recipe into the same surface would over-specify the pattern.

This limiting evidence is part of the pattern: the invariant is discoverable and truthful handoff, not mandatory query chrome.

## Evidence boundary

Leizilla and CausaGanha independently exercise the full relation on rendered public surfaces:

- Leizilla exposes the released Parquet, metadata/provenance and a minimal reproducible query while keeping published-artifact status separate from coverage completeness.
- CausaGanha exposes archived source/data products and a reuse path from its project surface; #874/#875 further separate the textual catalog contract from consumer-local DuckDB materialization.

Ficha provides a third, intentionally narrower implementation and prevents overfitting the relation to DuckDB or inline SQL.

The pattern remains `experimental`: consumer evidence is strong enough to name the semantic relation, but continued use should test other artifact types and whether the same hierarchy remains useful outside public-data products.
