---
type: pattern
status: experimental
title: Document and print surface
related_issue: https://github.com/franklinbaldo/cobogo/issues/276
consumer_evidence:
  - ../consumers/formato-legal.md
  - ../consumers/sisprev.md
  - ../consumers/adibaldo-blog.md
---

# Document and print surface

Some Cobogó consumers produce documents that must remain coherent both as an on-screen reading/review surface and as a paginated artifact that can circulate outside the application. Formato Legal turns authored legal text into an A4-oriented preview and export/print artifact; Sisprev projects the same validated legal-audit corpus into both a browser report and formally paginated PDFs reviewed before publication; Adi blog compiles a small personal archive into a continuous printable book from the same Astro content collection used by the site.

The shared relation is narrower than a legal-document template or a PDF engine:

```text
semantic source
  -> screen-readable document
  -> paginated projection
  -> review / circulation / citation
```

The document must preserve identity, hierarchy, provenance and reading order across that projection. Print-specific layout may add page mechanics, but it must not become a second competing content model.

## One semantic document, more than one projection

Screen and paginated output may use different chrome, margins and navigation affordances, but they should derive from the same semantic content whenever the product permits it.

Sisprev makes this boundary explicit: the Astro page builds the report content, and the PDF step only paginates that already-built HTML. The generator is deliberately not a second authoring pipeline. Formato Legal similarly renders one document body through screen preview and print/PDF output, while keeping export mechanics downstream of the authored content. Adi blog supplies a non-legal pressure test: `/livro` reads the same non-draft Astro collection as the publication, orders it chronologically and projects it as cover, summary and chapters rather than copying the prose into a separate book source.

If a consumer maintains separate prose, headings, status labels or provenance facts for the PDF and the browser, treat that duplication as a warning sign unless the difference is a real product requirement.

## Print mechanics belong after meaning

Pagination introduces concerns that do not exist in continuous scrolling:

- page size and margins;
- page breaks and orphan/widow control;
- repeated headers, footers or page numbers;
- tables or blocks that must split coherently;
- running context needed to cite a detached page;
- bookmarks or table-of-contents page references.

These are projection mechanics. They may change layout, but should not silently alter the semantic meaning or invent a second hierarchy.

Sisprev uses CSS Paged Media features such as running strings, page counters and PDF bookmarks because the report is cited and circulated by page. Formato Legal uses a simpler A4 projection and local theme margins. Adi blog uses browser-native A4 printing with cover/summary/chapter page breaks because the desired artifact is a readable personal compilation rather than a formally cited report. All three satisfy the relation without needing the same engine or page furniture.

## Provenance must survive detachment from the site

A paginated artifact can circulate as a file, printout or detached page. Context that was obvious in browser navigation may disappear.

When the artifact's correctness depends on a dataset, rule corpus, revision or build state, preserve enough provenance in the document itself to recover what was projected. The exact representation stays local to the consumer: commit identifiers, generation metadata, source labels or document version may be appropriate.

Sisprev supplies strong evidence for this: its printed report carries the commit-derived version because two otherwise similar printed reports from different catalog states must remain distinguishable outside the repository. Adi blog demonstrates a lighter boundary: its compilation date and chronological table of contents are useful detached-book context, while a commit SHA would be needless machinery for that product job. Do not universalize commit SHAs when a consumer has a more appropriate stable version identifier.

`Inscrição` is useful here when a short running label or provenance mark allows a page to remain intelligible outside its original navigation context. `Faixa` may organize repeated document context. `Ritmo` governs recurring section order across pages. `Texto é arquitetura` matters because headings and typographic hierarchy carry more structural weight once application chrome disappears.

## Reviewability is part of the artifact contract

When pagination defects can change the usefulness or meaning of the delivered artifact, the generated document deserves evidence before publication.

Sisprev demonstrates one implementation: PR builds generate the cycle PDFs as review artifacts, while `main` generates the complete set before Pages deploy. This separates **verify** from **publish** and makes page-break defects inspectable before a merge. Formato Legal's faster interactive preview is a different implementation of the same product relation: authored changes remain inspectable before print/export.

Adi blog currently supplies source/configuration evidence for a third product context, but this verification did not produce a rendered print/PDF capture. That is useful negative evidence for the maturity boundary: a source-level implementation can pressure-test the relation without automatically proving its pagination quality.

Cobogó does not require every PDF to be committed, snapshotted or pixel-diffed. The invariant is narrower: if pagination is material to the product job, there must be a realistic way to inspect the paginated consequence before treating it as ready.

## Screen-only and print-only affordances may differ

A browser document may need download controls, navigation, search or editor chrome that would be nonsense inside the printed artifact. A PDF may need page numbers or running headers that are redundant in the browser.

These differences are valid when ownership is explicit:

- screen-only controls disappear from print cleanly;
- print-only repeated context does not become noisy duplicate chrome on screen;
- removing application chrome must not remove essential provenance or status;
- accessibility of the screen source is not traded away merely because PDF is a downstream artifact.

The shared pattern does not require visual identity to converge. A Sisprev administrative report can remain restrained and audit-oriented, Formato Legal can preserve expressive theme variation, and Adi blog can remain a small personal publication with a book-like print surface.

## Accessibility and reading order

The semantic source should preserve logical headings, lists, tables and reading order before print-specific CSS is applied. CSS page breaks must not be used to repair a malformed document tree.

For the browser surface, keyboard access, focus, contrast and screen-reader semantics remain ordinary requirements. For generated PDFs, the consumer should preserve as much semantic structure as its chosen renderer/toolchain supports, but Cobogó does not prescribe one PDF accessibility engine from the current evidence.

When a renderer limitation forces a tradeoff, record it as a consumer constraint rather than weakening the semantic source for every surface.

## Evidence boundary

Three materially different consumers now support this relation:

- **Formato Legal** proves that A4/print can remain a local authoring concern with multiple visual themes, and that output should derive from the latest rendered document rather than stale source state.
- **Sisprev** proves a stricter formal-document case: browser report and PDF derive from the same built HTML; pagination uses dedicated Paged Media mechanics; PR CI publishes reviewable PDFs; and the deployed artifact carries version/provenance needed once it circulates outside the site.
- **Adi blog** proves that the same relation survives outside legal/document-production software: a lightweight personal archive can project its ordinary editorial corpus into a printable book with cover, contents and chapter pagination without creating a second prose source.

The difference between them is positive evidence. A universal legal template, fixed margins, one PDF engine, one footer or one typography stack would erase precisely the consumer-local decisions that the pattern is meant to preserve.

This third pressure test strengthens the relation but does **not** by itself justify promoting the pattern beyond `experimental`: the Adi evidence in this pass is source/configuration evidence, not a rendered print/PDF proof. Stabilization should require stronger evidence that the paginated consequence itself remains reviewable across these contexts, rather than merely counting consumers.

## Non-goals

This pattern does not define:

- a universal A4 template;
- Brazilian legal-document formatting rules;
- ABNT, CNJ, OAB or court-specific conventions;
- a PDF generation engine;
- one page-numbering scheme;
- one header/footer design;
- one screen-preview layout;
- a requirement that every consumer support print;
- consumer themes or brand styling;
- a second document model separate from the semantic source.
