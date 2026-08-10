---
type: consumer
title: Cobogó
repository: https://github.com/franklinbaldo/cobogo
adoption_status: evaluating
surface: design-system knowledge, documentation, specimens and future reference surfaces
interaction_profile: self-documentation, visual grammar demonstration, review and dogfood
runtime: repository-native documentation and framework-agnostic web surface as capabilities mature
constraints:
  - Cobogó must consume its own stable capabilities where they apply
  - self-use must not create a privileged private API unavailable to other consumers
  - knowledge remains canonical OKF; a showcase or docs UI is a projection
  - self-dogfood must preserve the distinction between normative grammar and one visual theme
  - framework-specific bindings remain optional
capabilities_used:
  - canonical OKF consumer registry
  - visual grammar knowledge
unmet_needs:
  - semantic foundations dogfood
  - framework-agnostic core web primitives
  - editorial/documentation patterns for its own knowledge surfaces
  - specimen presentation without turning specimens into templates
  - self-conformance checks for stable capabilities
local_identity: the reference design-system project itself; Brazilian visual grammar without collapsing into one branded skin
integration_evidence:
  - https://github.com/franklinbaldo/cobogo/issues/263
  - https://github.com/franklinbaldo/cobogo/issues/266
  - https://github.com/franklinbaldo/cobogo/issues/268
last_verified: 2026-08-10
---

# Cobogó

Cobogó is a consumer of Cobogó.

This is not circular decoration. A design system that only governs downstream examples can drift into rules that are never forced to coexist in a real product. Cobogó's own documentation, knowledge navigation, specimens, examples and future reference surfaces therefore form a permanent dogfood consumer.

Its current state is **evaluating**, not `active`: the reconstructed framework-agnostic implementation surface is still being derived. The repository already consumes the canonical OKF knowledge model and consumer registry, but it must not claim code-level adoption before that code exists.

## Stronger self-consumer rule

When a Cobogó capability becomes stable and is relevant to Cobogó's own human-facing surfaces, Cobogó should adopt it before treating the capability as comfortably proven for third parties.

Exceptions must be explicit. A capability may legitimately not apply to Cobogó itself — for example, a domain-specific data table or legal-document pattern — but the reason should be recorded rather than silently bypassing dogfood.

Self-use must never create a hidden privileged layer. If Cobogó requires a private token, component, framework hook or semantic rule that ordinary consumers cannot use, that is evidence that the public contract is incomplete or that the behavior is project-local.

## What should dogfood itself

As implementation matures, Cobogó should use its own:

- semantic foundation roles;
- framework-agnostic core web primitives;
- typography and spacing relations;
- focus/state/accessibility contract;
- documentation/editorial reading patterns where applicable;
- specimen presentation grammar;
- theming/override contract;
- deprecation and compatibility mechanisms;
- consumer registry and evidence loop.

## What must remain local

Cobogó still has a local product identity. Its reference/docs surface is allowed to have a particular theme and editorial voice. Those concrete choices are not automatically promoted into the design-system contract merely because the design-system itself uses them.

The self-consumer therefore exercises [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) against itself: the reference implementation may be recognizably Cobogó without defining what every Cobogó consumer must look like.

## Review question

A successful self-hosting path should make it possible to ask, for every stable capability: **"does Cobogó itself use this where it applies, and if not, why not?"**
