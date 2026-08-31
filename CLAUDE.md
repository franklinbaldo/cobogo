# COBOGÓ — Agent & Development Guide

Cobogó is a **Brazilian visual grammar + reusable design knowledge system** for software.
It is not one shared look, one framework, or a component catalog.

The governing architecture is:

```text
Brazilian/reference evidence
  → canonical OKF knowledge
  → canon + grammar
  → semantic foundations
  → framework-agnostic core + patterns
  → consumer-local identity
```

Consumers should be recognizably related without becoming clones: **parentesco sem uniformidade**.

## Canonical authority

`knowledge/` is the canonical knowledge corpus. Use the current `okf-parser` directly for
validation, inventory, graph/query and typed projection. Do not create a second knowledge
registry/database/graph because the website or an agent wants a more convenient projection.

The website is a **consumer of Cobogó**, not a privileged authority over it. `src/pages/**`
projects the canonical knowledge and uses the same public core contract available to other
consumers.

### Consumer membership is live and fail-closed

A file under `knowledge/consumers/`, an old `RoundReport`, a screenshot, a historical issue, a
workspace profile, or a repository remembered from an earlier round is **evidence/history, not
proof that the repository is still a consumer**. Directory placement is not ontology.

At the start of every portfolio round, before follow-up, discovery, scoring, pressure, or focus
selection:

1. project the current canonical consumer relations from the typed OKF corpus;
2. resolve each projected repository against GitHub **now**;
3. exclude from the rotation any repository that no longer resolves, was deleted, was explicitly
   excluded from the portfolio, or is no longer related as a current consumer by the canonical
   corpus;
4. treat stale cards/reports for those repositories as historical records only. They must not
   contribute `gap_score`, `last_reviewed`, urgency, follow-up, candidate ordering, or next-round
   pressure;
5. if the corpus/card still presents a deleted or excluded repository as current, repair Cobogó's
   consumer documentation in that round. Do not inspect the dead repository and do not create
   surface work for it.

A GitHub repository merely existing is also insufficient: existence proves existence, not current
portfolio membership. Conversely, a `404`/unresolvable repository must never be interpreted as a
consumer that needs attention. Membership must be positively established from the **current typed
corpus plus a live repository resolution**. When those disagree or membership is ambiguous, fail
closed: leave the repository out of the rotation and record the corpus drift for repair.

This liveness/membership gate runs again before following pressure copied from a previous
`RoundReport`; pressure never overrides it.

## Required project skills

The Cobogó-specific skills are installed in project scope for Claude Code and committed under
`.claude/skills/`. Their installation provenance is recorded by the CLI-generated
`skills-lock.json`.

Canonical install/update command:

```bash
npx skills add franklinbaldo/skills \
  --skill brazilian-web-design \
  --skill cobogo-design-review \
  --skill cobogo-consumer-synergy \
  --agent claude-code \
  --copy \
  --yes
```

Use the installed skills as follows:

- **`cobogo-design-review`** — default method for material visual work on a website, page,
  section, pattern, component, or UI state. It owns the speculative visual-gap loop.
- **`brazilian-web-design`** — use when the work needs a new Brazilian visual/cultural
  reference or a new derived grammar claim not already supported by the Cobogó corpus.
- **`cobogo-consumer-synergy`** — use when a design-system decision depends on comparing real
  consumers, routing authority across repositories, extracting shared capability, or feeding
  adoption/negative evidence back into the registry.

Do **not** hand-edit installed skill copies or `skills-lock.json` to simulate an update. Re-run
`npx skills add ...` and commit the real CLI output.

## Mandatory visual design loop

For any **material visual decision**, do not stop at static code review.

Choose the smallest useful review scale:

- whole website;
- page;
- section;
- pattern;
- component;
- one meaningful component/interaction state.

Then run:

```text
product job
→ canonical Cobogó evidence
→ Brazilian-grammar imagination brief
→ concept image
→ real rendered capture
→ semantic gap comparison
→ smallest useful convergence
→ recapture
→ reusable learning
```

### 1. State the job before styling

Name the relation the surface must make perceptible or actionable. Do not begin from
"make it more Brazilian" or from a desired component type.

### 2. Imagine through Brazilian grammar, not skin

Consult `knowledge/` and choose normally **2–4 operative ideas**. Examples:

- `Vão` / vão antes de massa;
- `Faixa`;
- `Inscrição`;
- `Ritmo`;
- módulo sem monotonia;
- texto é arquitetura;
- estrutura explícita + gesto localizado;
- ornamento deve trabalhar;
- acessibilidade é forma;
- parentesco sem uniformidade.

The imagination stage should ask what makes the design structurally differentiated, not how to
add Brazilian colors, azulejo/cobogó motifs, concrete texture, xilogravura, or famous-designer
references after the fact.

If a new cultural reference is needed, route through `brazilian-web-design` and persist the
reference/evidence before treating it as design authority.

### 3. Generate a concept image when image generation is available

The concept is a **speculative probe**, not a target screenshot and never factual authority.
It may invent composition, hierarchy, rhythm, geometry and materiality. It must not be used as
evidence for adoption, users, metrics, partners, logos, history, product capabilities or other
facts that were not independently verified.

For component work, generate the component at component scale and include only relevant states
(default/focus/selected/error/empty/dense/overflow, etc.). Do not redesign an entire page merely
because component capture is inconvenient.

### 4. Capture reality in pixels

Prefer a real browser capture:

1. deployed artifact when judging what users see;
2. branch preview before deploy;
3. isolated component harness only when product context cannot provide a reliable capture.

Keep viewport, color scheme, font loading, fixture/data and state stable enough for comparison.

### 5. Compare semantically, not by pixel similarity

Useful gap classes include:

- preserve real;
- concept insight;
- bug/regression;
- information-architecture gap;
- grammar gap;
- generic-design gap;
- over-abstracted concept;
- invented-authority rejection;
- negative evidence.

The goal is **not** to make reality match the generated image. Preserve what the real product
does better and implement only the concept insights that improve the actual product job.

### 6. Recapture and learn

After implementation, compare:

```text
real-before
speculative-concept
real-after
```

Persist only reusable learning in the appropriate layer: reference, canon/grammar, specimen,
pattern evidence, core contract, consumer registry, skill, test/spec, or negative evidence.

## Public core and local identity

`cobogo/core` is framework-agnostic CSS. Shared contracts should express semantic roles and
relations before framework/component APIs.

Consumers own their concrete identity: palette, typography choices, density, voice,
materiality, domain-specific states and product workflows unless cross-consumer evidence
supports promotion upstream.

Do not turn Pico, Astro, Svelte, React, Tailwind or another consumer's implementation into
Cobogó semantics.

The current Greenfield reference website deliberately uses Cobogó's public core plus a local
paper/navy editorial theme. The historical first home remains available as legacy/history
evidence; it is not the template for new work.
