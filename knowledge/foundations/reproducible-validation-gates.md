---
type: operational-practice
status: proposed
title: Consumer design work requires reproducible validation gates
related_issues:
  - https://github.com/franklinbaldo/cobogo/issues/271
last_verified: 2026-08-11
---

# Consumer design work requires reproducible validation gates

This is **operational knowledge, not visual grammar**. It says nothing about composition, and it must not become canon or a pattern. It is a practice that makes consumer design work possible at all.

## The observation

Design corrections in a consumer are delivered as pull requests, and a pull request is judged by its checks. When the checks are red for reasons unrelated to the change, every design PR inherits an unwinnable state: it cannot be merged, and the reviewer cannot separate "this change broke something" from "this repository was already broken".

Observed in three independent repositories on the same day.

### CausaGanha

`ruff.toml` used `select = ["ALL"]`, `pyproject.toml` floored ruff at `>=0.12.0`, and `uv.lock` was gitignored. CI resolved whatever ruff was newest. Measured on the pristine base branch:

| ruff | result |
|---|---|
| 0.16.2 | **269 errors** — 260 `CPY001`, 5 `ISC004`, 3 `LOG004`, 1 `S310`, 1 `RUF100` |
| 0.15.22 | **All checks passed** |

No one changed the code. A release stabilised rules and they became policy overnight. The formatting half had the same cause: 0.15.x does not process markdown at all, so three `.md` files only became "unformatted" when 0.16 added markdown code-block formatting.

### Baliza

`ruff>=0.1.0` with `uv.lock` gitignored; base branch already failing with 8 ruff errors, plus a `npm audit` gate failing on 9 dependency advisories. Less exposed than CausaGanha because its rule set is explicit (`["E", "F", "I", "UP", "B", "PL"]`) rather than `ALL`, but the version still floats.

The Baliza table-semantics correction exposed a second failure mode in the validation protocol itself. `npm audit` ran before lint, tests and build in the web job, so the pre-existing dependency failure caused every delta-relevant step after it to be skipped. The PR could not satisfy a literal requirement that "relevant CI checks pass" because the broken base gate prevented those checks from running at all. The missing evidence was recovered by reproducing the skipped commands locally at the exact PR head: lint clean, full check clean across 1323 files, 655 tests passing, and production build within budget. That evidence was recorded in the PR thread before merge.

### Cobogó

The same shape appears here as an accepted trade-off rather than a defect: `scripts/check-reduced-motion.mjs` is a gate, and the browser it runs against is installed fresh in CI. It starts green and is pinned only by the workflow's own `playwright install` step.

## The practice

- **A checker used as a merge gate should be pinned or locked.** An open version range on a tool that enforces policy means the policy changes without a decision. Committing the lockfile achieves the same thing.
- **A design PR should not absorb base-branch debt to go green.** Fixing 260 files' copyright headers inside a table-semantics change hides a repository-wide policy decision inside an accessibility fix, and makes both unreviewable.
- **Separating a regression from a pre-existing failure is part of review.** The check is cheap: does the failure reproduce on the base branch with no changes applied? Record the answer in the thread either way.
- **Relevant evidence must exist and be verifiable.** CI is the preferred source. When a pre-existing red gate prevents downstream delta-relevant checks from running, reproduce the skipped validation locally against the exact PR head, record the commands/results in the thread, and treat that as fallback evidence. This is not permission to ignore a failing relevant check: it applies only when the check never ran because an unrelated upstream gate blocked it.
- **Adopting a newer checker is a migration, not an upgrade.** It should be its own change that decides deliberately which newly stabilised rules belong in the policy.

### Controlled exception for a pre-existing red gate

A design PR may proceed despite a red repository check only when all of these are true:

1. the red failure reproduces on the untouched base branch;
2. the PR does not touch the causal surface of that failure;
3. evidence relevant to the PR delta exists and is verifiable — from CI when it runs, or from a documented local reproduction at the exact PR head when the red gate itself skips the relevant CI steps;
4. the base debt is tracked separately;
5. there is no evidence that the PR introduced a regression.

If a relevant CI check actually runs and fails, local reproduction does not override it. Investigate the discrepancy instead.

## Limit

This does not generalise into a Cobogó-owned CI framework, a shared workflow, or a required toolchain. Each consumer keeps authority over its own build and its own rule set. What Cobogó has standing to say is narrower: **if we are going to correct design in a consumer, that consumer needs a gate whose red means something.**

The local-reproduction fallback is equally narrow. It exists to recover evidence that CI could not produce because an unrelated pre-existing gate short-circuited the job. It is not a substitute for CI when CI is available, and it is not a way to reinterpret a genuine regression as base debt.

## Negative evidence

Two things were deliberately not done, and the reasons are the durable part:

- **260 copyright headers were not added.** Which notice, which holder, which years, and whether tests carry one at all is a domain decision belonging to the repository owner, not a design-quality decision.
- **Dependency advisories were not resolved alongside a design change.** An advisory fix may require version upgrades with real behavioural consequences, so it needs its own evaluation.
