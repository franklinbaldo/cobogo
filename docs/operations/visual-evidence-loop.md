# Visual evidence loop

Cobogó evolves its own reference website with a repeatable visual-evidence loop. The goal is not pixel-perfect regression against one canonical mockup. The goal is to keep reducing the gap between what Cobogó is, what its public website communicates, and what a stronger visual hypothesis can reveal.

## Loop

1. **Imagine** — generate a speculative concept image from the current architecture, canon, grammar, constraints and known consumer evidence.
2. **Capture** — render the real deployed website in a real browser at a fixed viewport.
3. **Compare** — inspect concept and reality side by side.
4. **Classify** — mark each meaningful difference as `preserve`, `bug/regression`, `information-architecture gap`, `useful speculative insight`, or `over-abstracted/fabricated concept`.
5. **Implement** — turn only evidence-backed insights into a small PR or stack.
6. **Preview** — build the branch and capture the resulting routes in Chromium before merge.
7. **Recompare** — compare the branch preview with both the speculative concept and the deployed baseline.
8. **Deploy and verify** — after merge, capture the deployed Pages surface again and verify the intended result.

Then repeat.

## The speculative image is not evidence of fact

An imagined concept may invent plausible-looking content. That content must never become product truth merely because the image is convincing.

Before adopting anything from a speculative image, separate **composition insight** from **factual claim**.

Safe examples:

- stronger information hierarchy;
- a better relationship between text and specimen;
- denser or clearer navigation;
- making grammar visible instead of merely describing it;
- exposing real counts that already exist in canonical knowledge.

Unsafe without independent evidence:

- company logos presented as consumers;
- adoption counts;
- years of history;
- collaborator or reference counts;
- testimonials;
- search, newsletter or community features that do not exist;
- invented canon, terminology or product capabilities.

The generated image is a **probe**, never a source of authority.

## Preserve what reality does better

The comparison is not a request to make the real website resemble the generated image. If the deployed website has stronger local identity, typography, accessibility, editorial rhythm or fidelity to the corpus, keep those qualities.

Cobogó should converge toward a better expression of its current knowledge, not toward a generic design-system aesthetic.

## Dogfood rule

The Cobogó website is a normal consumer of the public Cobogó contract. Visual improvements must not depend on private tokens, private components or a second copy of canonical knowledge.

When the site needs factual data such as canon, grammar, pattern or consumer counts, project it from the canonical `knowledge/` corpus rather than hand-authoring duplicate numbers.

## Current evidence modes

- **Speculative comparison** — generated concept vs deployed screenshot.
- **Branch comparison** — proposed implementation vs deployed baseline.
- **Deployment verification** — approved branch preview vs post-merge Pages capture.

These modes answer different questions. A deployment can be pixel-identical to its preview and still be conceptually weak; speculative comparison exists to keep challenging that complacency.
