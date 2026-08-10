---
type: foundation-test
status: proposed
title: Cobogó self-dogfood pressure test
consumer: ../consumers/cobogo.md
related_issues:
  - https://github.com/franklinbaldo/cobogo/issues/263
  - https://github.com/franklinbaldo/cobogo/issues/266
  - https://github.com/franklinbaldo/cobogo/issues/281
---

# Cobogó self-dogfood pressure test

Cobogó is not exempt from its own foundation contract.

As soon as #263/#266 yield an applicable implementation surface, one Cobogó-owned human-facing surface should consume the same public semantic roles and framework-agnostic primitives offered to external consumers.

## What self-dogfood must prove

### Public contract completeness

Cobogó should not need a private semantic role, private token namespace or privileged component API merely to present its own documentation/specimens.

If it does, classify the need explicitly as either:

- missing shared capability; or
- local Cobogó theme/product behavior.

Do not silently expand core from self-preference alone.

### Theme is not contract

The Cobogó reference surface may have a recognizable visual identity. Its concrete palette, typography, geometry and ornament remain a consumer theme unless cross-consumer evidence promotes them.

Self-hosting must therefore demonstrate [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md), not erase it.

### Documentation as a real surface

Cobogó's knowledge is read, reviewed and navigated by humans. Its documentation/reference surface should therefore pressure:

- `body`, `display`, `inscription` and `data` typography roles;
- `adjacent`, `group`, `section` and `pause` spacing relations;
- focus and navigation states;
- code/example/specimen boundaries;
- light/dark or other theme mappings when supported;
- readable provenance/status for proposed versus stable knowledge.

### Specimens must not become templates

A specimen displayed by Cobogó should demonstrate a grammar relation without implying that consumers should copy its exact visual arrangement. Self-dogfood should make the distinction between normative rule, example and local reference styling visible.

## First slice

After the first framework-agnostic core exists, choose one existing Cobogó documentation/reference surface and migrate it incrementally:

1. map existing values to semantic foundation roles without appearance churn;
2. consume the public core primitives;
3. verify keyboard/focus/readability behavior;
4. record which local values remain theme-specific;
5. feed any missing public capability back into the relevant issue;
6. record the result as `integration_evidence` on the Cobogó consumer concept.

## Promotion rule

An applicable capability should not be described as broadly comfortable while Cobogó itself bypasses it without a recorded reason.

Self-dogfood is strong evidence, but it is not sufficient evidence by itself for cross-consumer promotion. Cobogó remains one consumer among many when deciding what belongs in shared core.
