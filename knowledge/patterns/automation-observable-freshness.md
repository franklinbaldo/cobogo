---
type: pattern
status: experimental
title: Automation claim and observable freshness
related_issue: https://github.com/franklinbaldo/cobogo/issues/354
consumer_evidence:
  - ../consumers/the-theater.md
  - ../consumers/rationality-club-latam.md
---

# Automation claim and observable freshness

Some project surfaces make automation part of the product promise: a fiction world that advances on a cadence, a generated publication that says it updates daily, or an autonomous protocol that says it writes itself. Cobogó should not prescribe how those products look. It can preserve the narrower information relation that keeps such claims truthful.

The reusable relation is:

```text
configured capability
  -> observable execution evidence
  -> truthful public freshness / cadence claim
```

These three states are related but not interchangeable.

## Configured capability is not current execution

A workflow file, scheduler, documented pipeline or historical successful run proves that a project has or had an automation mechanism. It does not prove that the mechanism is currently healthy or still intended to run.

When the distinction matters to the product promise, keep capability language separate from evidence of current execution. A project may truthfully say that it is designed to generate daily while also saying that current generation is paused, unknown or failing.

## Execution evidence should be observable and appropriately scoped

Stronger current evidence can include a recent successful workflow run, a generated artifact timestamp, a content commit produced by the automation, a publication timestamp derived from the output, or another reproducible signal owned by the project.

Cobogó does not require exposing CI internals to readers. The evidence may remain behind progressive disclosure or be reduced to a reader-appropriate statement such as a last successful update when that is enough for the task.

Do not expose secrets, private logs or sensitive operational data merely to prove freshness.

## Public claims must not outrun the evidence

Present-tense cadence claims such as “every 15 minutes”, “published daily” or “writes itself every day” carry factual weight when they describe current behavior. If current execution is not demonstrated, qualify the claim rather than allowing configured automation to masquerade as observed freshness.

Absence of recent successful evidence does not itself prove a defect. Intentional pause, archival state, disabled operation or incomplete observability are legitimate possibilities. The surface should not invent a diagnosis it cannot support.

## Presentation stays local

The relation is semantic, not a shared status widget.

- a fiction publication can preserve narrative primacy and disclose automation status backstage;
- a generated community publication can derive freshness from published posts instead of exposing workflow jargon;
- a data product may legitimately expose timestamps, versions or run identifiers more explicitly;
- a README-first protocol can qualify operational claims in prose.

If applying this pattern turns all projects into operations dashboards, the abstraction is too large.

## Evidence classes must stay distinct

When reviewing a project surface, label evidence by what it actually proves:

- **source/configuration evidence** — automation exists or is configured;
- **workflow-history evidence** — an execution happened and has an observable result;
- **artifact/publication evidence** — an output was generated or published;
- **deploy evidence** — a surface version was deployed;
- **rendered-surface evidence** — the user-facing claim is actually visible in the resulting product.

One class must not silently substitute for another.

## Evidence boundary

Three materially different projects support the relation:

- **The Theater** is a registered Cobogó consumer. Its public premise says something happens every 15 minutes, while the inspected repository history did not support a current heartbeat. The local correction is tracked in [the-theater#278](https://github.com/franklinbaldo/the-theater/issues/278). This is source + workflow-history + surface-copy evidence, not proof that the production is broken.
- **Rationality Club LatAm** is a registered Cobogó consumer. Its generated-publication surface presents daily-generation/current-metrics language while the inspected generation history was stale/failing and the displayed metrics were hard-coded. The local correction is tracked in [rationality-club-latam#4](https://github.com/franklinbaldo/rationality-club-latam/issues/4). This is source + workflow-history evidence; current rendered proof remains weaker.
- **Hrönir** is adjacent evidence rather than a registered visual consumer: its present human surface is primarily README + CLI/data artifacts, not a Franklin-owned web application. Its README nevertheless makes autonomous daily generation part of the product premise while inspected scheduled runs were failures. The local correction is tracked in [hronir#112](https://github.com/franklinbaldo/hronir/issues/112). Keeping Hrönir adjacent prevents evidence gathering from inflating the consumer registry.

The three cases are sufficient to name this relation as `experimental` because they share the semantic problem despite very different products and surfaces. They are not enough to standardize a component API or mark the relation stable.

## Counterexamples and non-goals

Do not infer that every automated project needs:

- a status badge;
- a public GitHub Actions link;
- a “last run” timestamp in the hero;
- a health dashboard;
- a red error state when no recent success is visible;
- the same freshness vocabulary across editorial, artistic and data products.

Automation that is invisible to the product promise may remain entirely operational. This pattern applies when cadence, autonomous production, freshness or generated output materially affects what the public surface claims.

## Promotion pressure

Before considering stable promotion, look for stronger rendered/adoption evidence: at least two materially different consumers should demonstrate a truthful user-facing treatment backed by current observable execution or publication evidence, while retaining distinct presentation. Negative evidence remains useful if a project correctly chooses to suppress or qualify automation claims instead of exposing operational state.
