---
type: pattern
status: experimental
title: Public artifact reuse
related_issue: https://github.com/franklinbaldo/cobogo/issues/325
consumer_evidence:
  - ../consumers/causaganha.md
  - ../consumers/leizilla.md
  - ../consumers/ficha.md
  - ../consumers/quem-sao-eles.md
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

## Use here and take the artifact are distinct jobs

A public data product may legitimately support both an in-place task and an independent artifact handoff. These should share source/snapshot context without being collapsed into one action.

Ficha demonstrates one end of that relation by separating **Consultar aqui** from **Levar a base** toward the manifest and preserved snapshot assets. Quem São Eles demonstrates another: the same PEP page provides client-side search over the current Parquet and a direct link to that exact Parquet, with authority and competence adjacent. Its reproducible browser gate also proves that the in-place search actually reads the linked snapshot.

Do not standardize those labels or layouts. The reusable relation is **use the product here ↔ take the canonical product with you**, with enough shared context to understand that both refer to the same evidence boundary.

## Negative / limiting evidence

Ficha demonstrates that external reuse does not always need an inline technical query. Its public surface distinguishes **Consultar aqui** from **Levar a base**, with the latter leading to the real manifest and preserved snapshot assets. That is enough for its current product job; forcing a DuckDB recipe into the same surface would over-specify the pattern.

Quem São Eles adds a different limit: even where an interactive DuckDB path exists, the reusable artifact should remain directly reachable rather than being hidden behind the application. The browser gate first exposed a broken Project Pages join in that direct link; preserving the failed capture as evidence prevented the interface from claiming a handoff that did not actually resolve.

CausaGanha adds a separate evidence limit: a rendered public recipe is not the same thing as independently proving that the current published artifact still satisfies that recipe. Its first public catalog smoke reached the real `catalog.sql` and found schema drift. Until franklinbaldo/causaganha#872 records a green post-republication smoke, treat the rendered handoff as positive project-surface evidence but not as a completed independent-reuse proof.

These limits are part of the pattern: the invariant is discoverable, truthful handoff and reproducible use where supported, not mandatory query chrome or an assumption that documentation alone proves the external contract.

## Evidence boundary

Leizilla exercises the full relation on a rendered public surface: it exposes the released Parquet, metadata/provenance and a minimal reproducible query while keeping published-artifact status separate from coverage completeness.

CausaGanha independently exercises the rendered project-surface relation — archived source/data products, canonical manifest, `catalog.sql`, a reconstruction recipe and a path back to the dashboard — and #874/#875 establish the textual catalog contract versus consumer-local DuckDB materialization. The final independent-reuse gate remains open in franklinbaldo/causaganha#872 because the first public smoke found real schema drift and a green post-fix smoke has not yet been recorded. Do not count that pending verification as failure of the surface, but do not describe it as completed proof either.

Ficha provides another intentionally narrower implementation and prevents overfitting the relation to DuckDB or inline SQL.

Quem São Eles adds rendered browser evidence from another interaction model: the PEP route exposes the exact monthly Parquet alongside a client-side search, and its capture gate reaches `search-ready` and completes a deliberately empty query against that published snapshot. This strengthens the pattern without changing its abstraction level.

The pattern remains `experimental`: consumer evidence is strong enough to name the semantic relation, but continued use should test other artifact types and whether the same hierarchy remains useful outside public-data products.
