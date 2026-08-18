---
type: pattern
status: experimental
title: Provenance and freshness
related_issue: https://github.com/franklinbaldo/cobogo/issues/267
consumer_evidence:
  - ../consumers/ficha.md
  - ../consumers/tambaqui.md
---

# Provenance and freshness

When a public product depends on an external or versioned source, the reading surface should let a person recover **what authority the data came from, which artifact or snapshot is being used, what time/coverage that artifact represents, and what is actually known about update health**.

The reusable relation is:

`source authority -> exact artifact/snapshot -> factual coverage or competence -> refresh evidence/policy -> rendered state`

These links are related, but they are not interchangeable evidence.

## Evidence

### Ficha

Ficha is a dated public CNPJ archive. Its rendered provenance band exposes Receita Federal as origin, snapshot competence as machine-readable time, Internet Archive preservation when present, verification from the manifest contract, and explicit textual current/stale state. It also exposes the real manifest so the public data contract remains recoverable outside the interactive lookup.

### Tambaqui

Tambaqui is a monetary-update calculator, not an archive browser. Its controlled Chromium proof shows the upstream TJSP table, the exact JSON factor artifact and the dataset coverage (`1964-10` through `2023-10`) on the rendered calculation surface. It deliberately does **not** call that coverage an update timestamp: the configured daily updater is currently disabled by inactivity, so artifact coverage and refresh health are visibly separate facts.

These products differ in task, framework, density and presentation. The shared evidence is therefore the information relation rather than a provenance component.

## Rules

- Keep the upstream authority recoverable when it is material to interpreting the result.
- Identify the exact public artifact, snapshot or manifest when users can inspect or reuse it.
- Represent displayed dates/competences machine-readably when the underlying value is exact enough to support it.
- Describe **coverage** as coverage and **freshness/update health** as freshness/update health. Do not substitute one for the other.
- Do not infer a healthy refresh from the existence of a scheduled workflow, a recent deploy, or a versioned dataset.
- Preserve failure as failure: missing external data must not silently become a legitimate empty value, zero, stale fallback or placeholder.
- Keep state meaning textual or otherwise non-colour-dependent; visual treatment is consumer-local.
- A provenance-looking block must not elevate fixture values, synthetic identifiers, or internal pipeline verdicts into public factual evidence.

## What remains local

Cobogó does not prescribe a universal provenance band, badge, card, timestamp format, archive provider, ETL design or status vocabulary.

Ficha owns its archive language, manifest, preservation model and categorical current/stale state. Tambaqui owns its calculator flow, TJSP domain wording, coverage presentation and calculation boundary. Other consumers may need different ordering or progressive disclosure depending on whether provenance is primary reading context or supporting detail.

## Counter-evidence and boundaries

- A published artifact can be old while a workflow is healthy; a recent artifact can exist while an updater is disabled. Therefore artifact date alone is not operational health.
- A deploy timestamp describes deployment, not necessarily source-data freshness.
- Ficha's categorical state and Tambaqui's dataset coverage are different kinds of information. Their visual treatment should not be unified merely because both concern time.
- Browser rendering proves that the relation is perceptible in a tested state; it does not by itself prove that an upstream pipeline is currently healthy.
- [O Vigia](../consumers/o-vigia.md) is current negative evidence for another failure mode: its public prototype story still presents fixture-looking values and internal pipeline state inside a factual-provenance treatment. A polished provenance surface cannot substitute for recoverable source evidence or a publication boundary that has actually been proved.

## Evidence boundary

This pattern is experimental because two independent rendered products now exercise the same recoverability relation: Ficha provides a published external-source archive contract with reproducible capture/deploy evidence, while Tambaqui provides controlled Chromium proof of source, exact artifact, coverage and missing-data behavior in a calculator context.

Stabilization should require downstream use/maintenance evidence beyond these derivation cases, and should test whether the relation remains useful without forcing their different presentations to converge.
