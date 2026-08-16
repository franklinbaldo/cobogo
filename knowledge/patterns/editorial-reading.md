---
type: pattern
status: experimental
title: Editorial reading and archive
related_issue: https://github.com/franklinbaldo/cobogo/issues/278
consumer_evidence:
  - ../consumers/o-vigia.md
  - ../consumers/franklin-blog.md
  - ../consumers/the-theater.md
---

# Editorial reading and archive

Cobogó consumers include materially different publication products: factual journalism, a personal blog/digital garden and collaborative fiction. They should not converge on one article template, typography family or metadata block. What can be shared is the relationship that helps a reader move through sustained text, understand where a publication sits in time/context and continue through an archive without turning prose into application chrome.

The reusable relation is:

```text
orient in the publication
  -> enter sustained reading
  -> recover publication context when needed
  -> continue through chronology / archive
```

This is reading grammar, not a CMS component library.

## Reading measure and rhythm

Long-form prose is the primary architecture. Body measure, paragraph rhythm, headings, pauses, images and quotations should create a readable sequence before cards, borders or navigation chrome are introduced.

Use `Vão` and `Ritmo` to separate changes of thought and narrative level, not to manufacture identical vertical spacing across publications. Editorial surfaces may be substantially more open than administrative/data-reading interfaces.

Consumer typography, ornament, imagery and density remain local. A factual story, a personal essay and a fictional episode may all satisfy the same reading relation while looking unmistakably different.

## Publication inscription

Metadata such as author, publication date, category, series, locality or status is orientation text: it explains where the text belongs without competing with the text itself.

Prefer a small legible inscription near the publication boundary over badge soup or a metadata wall. Only surface fields that genuinely help the reader interpret or navigate the publication.

Publication metadata is not automatically provenance. An author's name or category can orient a reader without carrying evidence semantics.

## Evidence and provenance stay task-specific

When evidence is part of the publication's truth contract, source and provenance must remain recoverable without forcing a monitoring-dashboard presentation into the reading flow.

O Vigia supplies the strong boundary case: source hierarchy and evidence matter, but pipeline/internal states should not dominate a journalistic story. A provenance detail may be secondary in composition while remaining semantically reachable.

The Franklin blog and The Theater are limiting evidence. They show that personal and fictional publications should not inherit journalism-specific evidence/status UI merely because all three are editorial surfaces.

## Chronology and archive

An editorial archive should make temporal or sequential position understandable enough to answer: where am I, what came before/after, and how do I continue?

The mechanism may be dates, episode numbers, series, tags, categories or archive groupings. Cobogó does not prescribe one taxonomy. These controls are navigation aids around reading, not generic filtering chrome.

When ordering is meaningful, preserve it explicitly. Do not make a reader reconstruct chronology from URL slugs or repository filenames.

## Continuation over enclosure

The next useful action after reading is usually continuation: older/newer publication, another episode, a related series/category or the archive itself. Prefer this reading continuation over surrounding the article with unrelated dashboard-like modules.

Secondary navigation should remain visually subordinate to the publication body and should not break the reading measure merely to reuse app-layout conventions.

## Expressive identity

Shared grammar must survive strong local identities.

- O Vigia may foreground factual voice, locality and evidence.
- Franklin blog may remain personal, bilingual and digitally garden-like.
- The Theater may use theatrical/narrative framing and episodic fiction cues.

If applying this pattern makes those products look like one skin, the abstraction is too large. The shared part is hierarchy, rhythm, orientation and continuation — not styling.

## Counterexamples and non-goals

Do not infer that every publication needs:

- the same article header;
- the same maximum text width;
- author/category badges;
- evidence/provenance panels;
- previous/next buttons in the same position;
- a common typography family;
- cards around paragraphs, sections or archive entries.

A publication with no meaningful sequence may legitimately omit previous/next navigation. A fictional episode may carry world/episode orientation that would be inappropriate in journalism. A personal essay may need almost no metadata beyond date/title.

## Evidence boundary

Three materially different consumers support the relation:

- **O Vigia** tests sustained factual reading where provenance is important but should not dashboard-ize the story.
- **Franklin blog** tests personal long-form reading and archive navigation with strong local identity and bilingual/product-specific concerns.
- **The Theater** tests episodic narrative reading where chronology and fictional-world orientation matter while automation provenance should stay behind the reader surface.

This is enough to name the relation as `experimental`, but not enough to standardize a component API. Future reviews should test whether archive/continuation and inscription remain useful in other publication surfaces such as automatically generated diaries or profile/chronology products.
