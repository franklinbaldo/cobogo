---
type: agent-skill
title: Cobogó Consumer Synergy
name: cobogo-consumer-synergy
source_repository: https://github.com/franklinbaldo/skills
source_path: cobogo-consumer-synergy/SKILL.md
source_pr: https://github.com/franklinbaldo/skills/pull/82
status: proposed
installation: npx skills add franklinbaldo/skills --skill cobogo-consumer-synergy
---

# Cobogó Consumer Synergy

Cobogó registers this skill as the operational protocol for agents that analyze the canonical consumer registry, inspect real consumer repositories, detect cross-repository synergies, route authority between Cobogó and consumers, open coordinated issues/PRs, and feed factual adoption evidence back into OKF.

The skill source is hosted in `franklinbaldo/skills`; Cobogó must not duplicate its instructions locally.

## Why Cobogó depends on it

The consumer registry is useful only if agents actively turn it into evidence-driven roadmap and adoption work. This skill defines that loop while preserving `Parentesco sem uniformidade` and preventing consumer repositories from becoming speculative Cobogó sandboxes.

It operationalizes the workflow tracked by [issue #271](https://github.com/franklinbaldo/cobogo/issues/271) and the consumer registry introduced by [issue #268](https://github.com/franklinbaldo/cobogo/issues/268).

## Distribution boundary

Install through the canonical `skills` CLI rather than vendoring the skill into Cobogó:

```bash
npx skills add franklinbaldo/skills --skill cobogo-consumer-synergy
```

Cobogó should commit the `skills-lock.json` produced by `npx skills` once installation is executed against the published/mergeable source revision. The lock is dependency metadata; the normative skill instructions remain in `franklinbaldo/skills`.
