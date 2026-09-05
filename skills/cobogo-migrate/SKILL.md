---
name: cobogo-migrate
description: >-
  Migrate a consumer to a newer Cobogó version or current Cobogó contracts. Use when a user
  asks to upgrade Cobogó, replace legacy cobogo/styles usage, adapt to breaking changes,
  remove deprecated patterns/components, or fix a consumer after a Cobogó update. Inspect the
  installed version and affected source first, map old contracts to current core/patterns/
  components, apply the migration in small coherent steps, and verify the real surface.
---

# Migrate a Cobogó consumer

Cobogó uses versioning so the current design system can become smaller and clearer over time. Migration translates a consumer from the contract it actually uses to the best current contract for the same product job.

## Establish the real starting point

Read:

- `package.json` and lockfile;
- the exact package version or Git reference for Cobogó;
- imports/usages of `cobogo`, `cobogo/core`, `cobogo/patterns`, and `cobogo/styles`;
- the source files for the affected surface;
- repository migration notes, release notes, or pinned compatibility guidance when present;
- relevant tests/checks.

Identify whether the consumer is moving between released versions, Git revisions, or from the historical compatibility surface toward the current public contract.

## Map the migration by product relation

Read [`references/migration-workflow.md`](references/migration-workflow.md) for the detailed sequence.

For each affected piece, describe what it was doing for the user before choosing its replacement.

Classify it as:

- semantic HTML/foundation;
- recurring visual pattern;
- coordinated behavior;
- product-specific domain/UI;
- historical compatibility code with no current value.

Then map it to the current smallest contract.

## Prefer the current architecture

The normal target is:

```text
semantic HTML + cobogo/core + cobogo/patterns
```

Use public behavioral components where interaction or accessibility mechanics benefit from them.

`cobogo/styles` is a historical compatibility layer. A migration is an opportunity to replace broad legacy styling with the narrower current contracts when doing so improves clarity or reduces coupling.

## Treat breaking changes as design-system evolution

A removed or changed abstraction is a prompt to re-evaluate the presentation relation rather than mechanically recreate the previous API.

Good migration choices can include:

- replacing a removed wrapper with semantic HTML + pattern classes;
- consolidating several old variants into one current primitive/pattern;
- moving product-specific behavior back into the consumer;
- adopting a newer shared behavioral component;
- deleting compatibility CSS that no longer has a job.

Preserve user-facing behavior and product meaning that remain intentional. Improve the structure when the new Cobogó contract enables a simpler implementation.

## Keep migrations reviewable

Group changes by coherent contract or surface. When a broad migration is needed, complete one understandable slice, verify it, and continue with the next slice.

Update nearby docs/tests/examples when they encode the old public contract.

## Verify the result

Run the consumer's normal checks. For visual changes, inspect representative narrow and wide layouts and the important interaction states.

Compare the migrated surface by user job, hierarchy, accessibility, responsiveness, and identity—not by pixel equivalence with the old implementation.

Summarize:

- starting Cobogó contract/version;
- current contract adopted;
- obsolete surface removed or simplified;
- any reusable migration gap that should be documented upstream in Cobogó.
