---
type: consumer
title: Astronauta
repository: https://github.com/franklinbaldo/astronauta
adoption_status: candidate
surface: generic human OKF administration and exploration
interaction_profile: high-density administration and exploration
runtime: Astro application over okf-parser capabilities
constraints:
  - okf-parser remains the semantic authority
  - Astronauta must not become a mandatory gateway for agents
  - dense information must remain keyboard and scan friendly
capabilities_used: []
unmet_needs:
  - compact density profile over shared foundations
  - data administration patterns for tables filters forms status relations and review
  - clear focus and interaction states
  - optional framework binding only after core semantics exist
integration_evidence:
  - https://github.com/franklinbaldo/astronauta/issues/24
  - https://github.com/franklinbaldo/astronauta/pull/25
  - https://github.com/franklinbaldo/astronauta/pull/28
  - https://github.com/franklinbaldo/astronauta/pull/29
  - https://github.com/franklinbaldo/astronauta/issues/30
local_identity: generic OKF admin and exploration product, not editorial publication skin
last_verified: 2026-08-15
---

# Astronauta

Astronauta tests Cobogó in a high-density operational context. Its current adoption state is **candidate**: it provides real requirements and a specimen, but does not yet consume the reconstructed Cobogó package surface.

## Visual needs

- clear hierarchy with high information density;
- states and relations that are quickly scannable;
- tables, filters and forms without ornament competing with the task;
- highly visible focus and keyboard navigation;
- composition able to alternate overview and detail.

## Grammar relationship

Astronauta uses [Vão antes de massa](../canon/vao-antes-de-massa.md) to avoid nested panels by reflex and [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) to recombine structures without making every screen identical.

It must obey [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md): it may share Cobogó family relationships with CausaGanha and O Vigia without inheriting their density, brand or publication structure.

Its concrete composition test is [Astronauta concept review](../specimens/astronauta-concept-review.md).

## Integration evidence

The first `cobogo-consumer-synergy` pass opened [Astronauta #24](https://github.com/franklinbaldo/astronauta/issues/24) to validate shared data-reading semantics under an administrative density profile. It deliberately tests shared semantics with different interaction density rather than copying CausaGanha styling.

[Astronauta #25](https://github.com/franklinbaldo/astronauta/pull/25) then mapped the product's existing dark, high-density theme onto Cobogó semantic foundation roles while preserving local values and composition. This remains adoption evidence at the semantic-mapping level, not proof that the product consumes a released Cobogó package surface.

A project-surface pass on 2026-08-14 found that the repository README still described the older generated admin panel without separating shipped behavior from the active live SSR/editor stack. [Astronauta #28](https://github.com/franklinbaldo/astronauta/pull/28) corrected that public entry surface: current `main` capabilities are now distinguished from unmerged development work, and the README makes the `okf-parser` authority boundary and Cobogó relationship explicit. This is documentation/public-surface evidence only; adoption status is unchanged.

A distribution pressure test on 2026-08-15 added stronger negative evidence. [Astronauta #29](https://github.com/franklinbaldo/astronauta/pull/29) builds and installs a wheel in a fresh consumer environment, removes Bun, leaves the source checkout, and tries to serve a real OKF fixture through the installed `astronauta PATH` command. The source/runtime path remains healthy (`build`, `gateway`, `live-ssr` passed), but the installed artifact failed because Astro's `entry.mjs` still imports the external Node package `piccolore`, which was not carried by the wheel. [Astronauta #30](https://github.com/franklinbaldo/astronauta/issues/30) now owns that distribution boundary. This is useful negative evidence: **a rendered/buildable SSR surface is not yet a distributable surface**. It does not change Cobogó adoption status and is not evidence for a shared Cobogó capability.

## Architectural role

Astronauta may explore, edit, review and project the corpus for humans. Agents work directly with `okf-parser`; this interface is never required for access to the knowledge.

Reusable needs should be promoted into Cobogó only when they belong to the shared design problem rather than Astronauta-specific product behavior.
