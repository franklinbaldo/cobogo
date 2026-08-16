---
type: pattern
status: experimental
title: Editor and preview workspace
related_issue: https://github.com/franklinbaldo/cobogo/issues/277
consumer_evidence:
  - ../consumers/intuit.md
  - ../consumers/formato-legal.md
---

# Editor and preview workspace

Cobogó consumers include authoring tools where a person changes source material and must understand the rendered consequence. Intuit renders arbitrary HTML in an isolated preview; Formato Legal renders Markdown as a themed legal document that can be printed or exported. Their editors, runtimes and visual identities are deliberately different. The reusable relation is narrower:

```text
source / input
  -> render consequence
  -> inspect rendered artifact
  -> revise source
```

Controls that change interpretation of the source — theme, sandbox policy, preview mode — must make clear whether they affect the authoring surface, the rendering process or the rendered artifact.

## Preserve the relation, not the split pane

Simultaneous editor and preview panes are useful when width permits and comparison cost is low, but simultaneity is not the pattern. The pattern is preserving orientation between source and consequence.

On narrow screens, switching between editor and preview is valid when the active surface is explicit and returning to the other side is cheap. Formato Legal already supplies this counterexample to a mandatory miniature split pane through its editor/preview tabs.

Do not require a particular pane ratio, splitter library, toolbar position or framework component.

## Pane ownership and inscription

Use explicit headings, labels or tabs so source and rendered artifact remain named surfaces. Controls should sit close enough to the surface they govern that ownership is legible without relying on color or iconography alone.

`Faixa` may group controls that govern the whole transformation. `Vão` should separate authoring, transformation controls and rendered output when their ownership would otherwise blur. `Inscrição` should name consequential modes such as sandbox permission, theme or output format in language appropriate to the consumer.

The preview boundary must remain perceptible even when its content has a strong local visual identity. The boundary says “this is the artifact produced by the source”; it should not force the preview to inherit editor chrome.

## Rendering state belongs to the transformation

Loading, rendering failure, stale preview and successful output are states of the source-to-artifact relation. Do not present a rendering error as if it were merely an editor validation error or as content inside the rendered artifact unless that is genuinely where the failure occurs.

When rendering is asynchronous, avoid implying that an export or print action uses the latest source until the latest render has landed. Formato Legal explicitly waits for its latest render before printing; this is useful operational evidence for the relation, not a requirement to copy its implementation.

## Focus and keyboard movement

Keyboard focus should make the same ownership model perceptible:

- source editing remains a normal text-editing context;
- transformation controls are reachable without trapping focus in the editor;
- the preview has an accessible name and a deliberate focus boundary when it is interactive;
- switching editor/preview on narrow screens must expose selected state programmatically;
- focus indication remains visible in both light and dark/local themes.

A preview iframe or document viewport may require product-specific focus behavior. Cobogó does not prescribe iframe use or a universal shortcut set.

## Local security and domain semantics stay local

Intuit's sandbox policy is a product/security boundary. Formato Legal's A4 semantics, legal themes, print/export behavior and local-only privacy promise are document-product boundaries. Neither should be generalized merely because both products have previews.

Likewise, HTML, Markdown, ASTs and document models are implementation/domain choices. The shared pattern begins after there is an authored input and ends at a rendered consequence that can be inspected.

## Expressive identity

The same relation must survive visibly different products:

- Intuit can remain a fast visual-testing scratchpad with its own developer-tool chrome and strict sandbox default.
- Formato Legal can remain a legal-document workspace with A4 paper semantics, theme presets, print/export and Brazilian legal voice.

If applying this pattern makes both products look like one IDE, the abstraction is too large.

## Evidence boundary

Two independent consumers currently support the relation:

- **Intuit** proves that the rendered preview itself needs a semantic name and that preview execution/security can differ from editor state. Its current Playwright gate exercises the real editor -> preview consequence before merge.
- **Formato Legal** proves that simultaneous panes are not mandatory: narrow screens switch between semantic editor/preview tabs, while desktop keeps the relation visible side by side. It also shows that print/export may depend on the latest rendered state.

This is sufficient to name the relation as `experimental`, not to stabilize a component API. A third materially different authoring/preview consumer should pressure-test the pattern before stronger promotion.

## Non-goals

This pattern does not define:

- a code editor component;
- a universal toolbar;
- a split-pane JavaScript package;
- iframe policy;
- source language or document model;
- theme tokens for consumer chrome;
- print/A4 rules, which remain a separate document-surface concern;
- automatic preview-on-every-keystroke behavior.
