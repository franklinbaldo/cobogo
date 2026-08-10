---
type: knowledge-policy
title: Cobogó consumer registry
status: proposed
---

# Cobogó consumer registry

Cobogó keeps real consumers in the canonical OKF corpus so product demand, adoption evidence, constraints and missing capabilities remain queryable knowledge rather than scattered project lore.

A `consumer` is a real project or product. It is not a persona, template, target market or screenshot specimen.

## Common shape

Consumer concepts should record, when known:

- `repository`: canonical project repository;
- `adoption_status`: `candidate`, `evaluating`, `adopting`, `active`, `legacy`, or `retired`;
- `surface`: the principal interface surface;
- `interaction_profile`: the dominant reading/interaction context;
- `runtime`: relevant runtime/framework constraints;
- `constraints`: product constraints Cobogó must preserve;
- `capabilities_used`: Cobogó capabilities actually adopted, not merely desired;
- `unmet_needs`: reusable capabilities missing from Cobogó;
- `local_identity`: product-specific identity that must not be centralized;
- `last_verified`: date of the latest brownfield verification when useful.

Free-form Markdown explains nuance and links the consumer to canon, grammar, specimens, decisions and capability issues. We deliberately use ordinary Markdown links so `okf-parser` remains the relationship/graph engine.

## Factual adoption states

`active` means the product actually consumes a Cobogó implementation contract. Being used as a specimen or benchmark does not make a project an active dependency.

During reconstruction, CausaGanha is an `evaluating` brownfield reference: it drives requirements but has not yet adopted the reconstructed package surface. Astronauta and O Vigia are `candidate` consumers until concrete integration exists.

## Product loop

The intended trace is:

```text
consumer
  -> unmet need
  -> reusable Cobogó capability / issue
  -> implementation
  -> integration evidence
  -> capability proven across consumers
```

A need should stay local only when it is genuinely product-specific. If the same need appears across consumers, that is evidence for promotion into Cobogó.

See [consumer contract issue #265](https://github.com/franklinbaldo/cobogo/issues/265), [core web issue #266](https://github.com/franklinbaldo/cobogo/issues/266), [data-reading patterns issue #267](https://github.com/franklinbaldo/cobogo/issues/267), and [consumer registry issue #268](https://github.com/franklinbaldo/cobogo/issues/268).
