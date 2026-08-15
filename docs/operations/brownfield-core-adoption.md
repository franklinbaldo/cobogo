# Brownfield core adoption — evidence-first workflow

This workflow was derived **after** the first external Cobogó core migration, not designed in advance. The reference case is CausaGanha #878 on `/stats`, merged on 2026-08-15.

The goal is not to make a consumer look like Cobogó. The goal is to move genuinely shared implementation contracts upstream while preserving the consumer's product identity, runtime and domain semantics.

## 1. Choose a surface where the core can pay rent

Start from an existing public surface with stable product semantics and enough structure to exercise shared roles: headings, links/focus, tabular or numeric data, status/provenance, reading rhythm or form controls.

Do not adopt the core merely to increase a coverage number. Before editing, identify local rules that are genuinely generic and could disappear if the shared contract becomes authoritative.

In the first case, CausaGanha `/stats` already had semantic tables, provenance timestamps, status tones and a mature Astro/Pico surface. Its local CSS also duplicated generic focus-visible, reduced-motion and data-font contracts.

## 2. Preserve consumer constraints before changing CSS

Record what must remain local: framework/runtime, deployment model, interaction model, typography hierarchy, brand values, density, domain-specific semantics and deliberate accessibility overrides.

For CausaGanha that meant keeping static GitHub Pages, HTML-first architecture, Pico as a baseline, green/gold identity, editorial headings, table density/hover behavior, badges, touch targets and all concrete theme values.

## 3. Consume one immutable upstream contract

Prefer a released package when the current core is available through the project's normal package channel.

When the published package is stale but a real integration must be tested, an acceptable temporary distribution mechanism is an **immutable vendored snapshot**:

- pin upstream repository, commit, path and Git blob SHA;
- keep the vendored file byte-for-byte identical to upstream;
- enforce that identity in CI;
- never patch the vendored core inside the consumer;
- upgrading means replacing the file from upstream and advancing the pin.

This proves implementation consumption without pretending that package distribution has already been solved.

CausaGanha pinned Cobogó commit `12b08d124d717e0a38f74d98b628ce9af0540a7b`, `src/styles/core.css`, blob `afe206e4c0e82392ed4ee41dddee77e71acbb10e`.

## 4. Make ownership order explicit

A useful brownfield cascade is:

```text
consumer raw tokens / framework baseline
  -> Cobogó core defaults
  -> consumer semantic mapping
  -> consumer product/local CSS
```

The core owns shared relations and defaults. The mapping binds those roles to product values. Local CSS remains free to specialize product semantics and composition.

A consumer should not need to fork the core to keep its identity.

## 5. Remove duplication in the same change

An import alone is not adoption evidence. Move a small set of real contracts to shared ownership and delete the local duplicates.

CausaGanha #878 moved generic focus-visible, global reduced-motion and generic data/code typography authority to the core and removed 24 lines from local `base.css`. Product-specific `kbd`, skip-link focus, table hover/density and other local rules remained local.

The meaningful metric is not total CSS reduced; it is whether duplicated contracts disappeared and future behavior now comes from the shared implementation.

## 6. Ratchet the boundary

Add tests that make the ownership boundary executable. Depending on the delivery mechanism, verify things such as:

- upstream snapshot identity or package version;
- import order;
- absence of the local duplicates that were intentionally retired;
- build/runtime compatibility.

The CausaGanha ratchet recomputes the Git blob SHA of the vendored core and fails if the local copy diverges.

## 7. Compare rendered evidence against the same data

Before/after visual evidence is only useful when data/freshness differences are controlled.

For CausaGanha, CI built both the PR base and head from the **same deterministic `/stats` fixture**, served both builds and captured full-page Chromium screenshots. The screenshots were not pixel-identical — which is useful evidence that the core was actually load-bearing — but inspection found no missing data, clipping, overflow, broken table semantics or identity replacement.

Do not add local overrides merely to manufacture pixel equality. A visual delta is acceptable when it is an intentional shared-contract convergence and does not introduce accessibility or usability harm.

## 8. Validate, merge, then verify production

Require the consumer's normal causal gates before merge. After merge, verify `main`, deployment and the relevant public surface separately.

For CausaGanha #878, lint, Python tests, web lint/test/build and deterministic before/after capture passed before merge. The post-merge `main` CI also passed and GitHub Pages rebuilt/deployed the change.

## 9. Update the registry with exact adoption, not a halo

After production evidence exists, update the consumer card with:

- the exact shared capabilities now exercised;
- the concrete surface(s) that prove them;
- local identity that remains owned downstream;
- integration PR/run/deploy evidence;
- remaining unmet needs.

Do not mark unrelated patterns or components as adopted merely because the core is loaded globally.

## 10. Keep rollback and upgrade boring

A good brownfield slice remains reversible. Reverting the integration should mean restoring the deleted local contracts and removing/reverting the core import/pin, not untangling a whole-site rewrite.

An upgrade should be similarly explicit: advance package version or immutable snapshot, run the same consumer gates and recapture a representative surface.

## What the first case does **not** prove

The CausaGanha migration proves that the framework-agnostic core can replace real duplicated contracts in an external brownfield product while preserving local identity. It does **not** prove:

- that vendoring is the preferred long-term distribution mechanism;
- that every Cobogó role should be exercised by every consumer;
- that data-reading patterns beyond the core have satisfied multi-consumer promotion gates;
- that CausaGanha should inherit a universal Cobogó skin;
- that visual convergence is automatically desirable when no shared contract is being purchased.

## Evidence

- CausaGanha adoption issue: https://github.com/franklinbaldo/causaganha/issues/861
- CausaGanha implementation: https://github.com/franklinbaldo/causaganha/pull/878
- Before/after capture run: https://github.com/franklinbaldo/causaganha/actions/runs/31903091090
- Cobogó core proof issue: https://github.com/franklinbaldo/cobogo/issues/266
- Brownfield workflow issue: https://github.com/franklinbaldo/cobogo/issues/270
