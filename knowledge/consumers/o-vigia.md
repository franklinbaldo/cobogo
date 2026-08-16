---
type: consumer
title: O Vigia
repository: https://github.com/franklinbaldo/ovigia-redacao
adoption_status: candidate
surface: editorial reading, archive and provenance
interaction_profile: editorial reading and browsing
runtime: product-specific publication pipeline and public static surface
constraints:
  - text remains the primary narrative structure
  - provenance and source hierarchy must stay visible
  - editorial rhythm may be more open than administrative/data surfaces
capabilities_used: []
unmet_needs:
  - editorial typography and rhythm profile over shared foundations
  - provenance and evidence patterns
  - long-form reading patterns
  - image and archive composition guidance
  - distinguish fixture/demo publication from factual verified publication
integration_evidence:
  - https://github.com/franklinbaldo/ovigia-redacao/issues/26
  - https://github.com/franklinbaldo/ovigia-redacao/issues/29
local_identity: independent local-journal identity and narrative voice
last_verified: 2026-08-16
---

# O Vigia

O Vigia tests Cobogó in an editorial reading and narrative context. Its current adoption state is **candidate**: it contributes requirements and evidence, but does not yet consume the reconstructed Cobogó implementation surface.

## Visual needs

- text as primary structure, not filler inside cards;
- more open rhythm than administrative interfaces;
- hierarchy among story, evidence, source, context and archive;
- images able to participate in narrative without competing with readability;
- independent editorial identity.

## Grammar relationship

It uses [Vão antes de massa](../canon/vao-antes-de-massa.md) to create hierarchy through rhythm and breathing room and [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) to permit editorial variety without becoming a collection of arbitrary templates.

It must obey [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md): sharing grammar with Astronauta and CausaGanha does not imply sharing their density, components or visual skin.

Its current specimen is [O Vigia story surface](../specimens/vigia-story-surface.md).

## Integration evidence

The first `cobogo-consumer-synergy` pass opened [O Vigia #26](https://github.com/franklinbaldo/ovigia-redacao/issues/26) to test a shared provenance/freshness relation against an editorial surface. The test explicitly forbids turning editorial output into a monitoring dashboard.

A 2026-08-16 PROJECT-SURFACE REVIEW inspected both the newsroom repository and the public static repository `ovigialocal/ovigialocal.github.io`. The newsroom README still describes `article-ready → article-published` as an unfinished real/auditable boundary. The public repository nevertheless contains a prototype story labelled **“Matéria Factual Verificada”** whose provenance block exposes a fixture-looking CNPJ, the SHA-256 of empty content, and internal pipeline copy (`Evaluation Passed (0 alucinações)`) as reader-facing evidence; its `NewsArticle.datePublished` is also human-formatted instead of ISO 8601. This is actionable **negative evidence**, tracked in [O Vigia #29](https://github.com/franklinbaldo/ovigia-redacao/issues/29).

Therefore the current public story must **not** be counted as positive rendered proof of the shared provenance/freshness relation. It is instead a counterexample showing that provenance UI must preserve the distinction between source evidence and pipeline confidence, and between fixture/demo state and factual publication. The surface remains useful as editorial-composition evidence, but provenance promotion should wait for a real `article-published` artifact with reconstructible evidence.

Reusable editorial needs may become Cobogó patterns only after the corpus has enough evidence to distinguish a shared grammar from O Vigia-specific publication choices.
