---
type: consumer
title: Cobogó
repository: https://github.com/franklinbaldo/cobogo
adoption_status: adopting
surface: design-system knowledge, documentation, specimens and reference surfaces
interaction_profile: self-documentation, visual grammar demonstration, review and dogfood
runtime: repository-native Astro reference site over the same framework-agnostic core exported to consumers
constraints:
  - Cobogó must consume its own stable capabilities where they apply
  - self-use must not create a privileged private API unavailable to other consumers
  - knowledge remains canonical OKF; a showcase or docs UI is a projection
  - self-dogfood must preserve the distinction between normative grammar and one visual theme
  - framework-specific bindings remain optional
capabilities_used:
  - canonical OKF consumer registry
  - visual grammar knowledge
  - semantic foundations
  - framework-agnostic core web CSS
  - public semantic theme mapping
unmet_needs:
  - editorial/documentation patterns for its own knowledge surfaces
  - specimen presentation without turning specimens into templates
  - self-conformance checks for stable capabilities
local_identity: the reference design-system project itself; Brazilian visual grammar without collapsing into one branded skin
integration_evidence:
  - https://github.com/franklinbaldo/cobogo/issues/263
  - https://github.com/franklinbaldo/cobogo/issues/266
  - https://github.com/franklinbaldo/cobogo/issues/281
last_verified: 2026-08-10
---

# Cobogó

Cobogó is a consumer of Cobogó.

Its current state is **adopting**: the reference site imports the same `core.css` public surface exported as `cobogo/core`, then maps its existing local paper/concrete, accent and typography choices onto public semantic roles in a downstream `self-dogfood.css`. There is no privileged self-only foundation API.

The existing legacy site vocabulary remains temporarily available, but its high-level semantic aliases (`--bg`, `--fg`, `--border`, `--focus-ring`, `--accent`) now resolve through the public core roles. That makes compatibility debt observable while avoiding a visual big-bang migration.

## Stronger self-consumer rule

When a Cobogó capability becomes stable and is relevant to Cobogó's own human-facing surfaces, Cobogó should adopt it before treating the capability as comfortably proven for third parties.

Exceptions must be explicit. A capability may legitimately not apply to Cobogó itself, but the reason should be recorded rather than silently bypassing dogfood.

Self-use must never create a hidden privileged layer. If Cobogó requires a private token, component, framework hook or semantic rule that ordinary consumers cannot use, that is evidence that the public contract is incomplete or that the behavior is project-local.

## Local theme is not core

Cobogó's reference/docs surface keeps a particular local identity. Its paper/concrete palette, display typography and legacy visual vocabulary are consumer-side mappings, not additional evidence that those concrete values belong in core.

The self-consumer therefore exercises [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) against itself: the reference implementation may be recognizably Cobogó without defining what every Cobogó consumer must look like.

## Next dogfood

The next self-conformance slice should use shared editorial/documentation patterns and specimen presentation once those patterns are proven across external consumers.