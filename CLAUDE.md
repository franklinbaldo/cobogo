# COBOGÓ — Development Standards

Brazilian modernist design system built with Astro + Svelte 5 + Pico CSS v2 (classless).

---

## Project structure

```
src/
  components/       Svelte 5 + Astro components (no styles inside — see below)
  layouts/          BaseLayout.astro (Pico + global.css imported here)
  pages/            Astro routes
  styles/
    global.css      Single source of truth for all CSS
  content/docs/     MDX documentation
```

---

## CSS rules

### 1. All styles belong in `src/styles/global.css`

No `<style>` blocks in Svelte or Astro files (except decorative SVG components in
`src/components/decorative/` which have isolated animation concerns).

```svelte
<!-- ✗ Wrong -->
<style>
  .my-thing { color: red; }
</style>

<!-- ✓ Correct: add the rule to global.css -->
```

### 2. Customize Pico through CSS variables, never by overriding element rules

Pico v2 exposes every knob as a `--pico-*` variable. Override those, not the elements.

```css
/* ✗ Wrong — breaks on Pico upgrades */
button { padding: 0.25rem 0.75rem; }

/* ✓ Correct */
:root {
  --pico-form-element-spacing-vertical: 0.25rem;
  --pico-form-element-spacing-horizontal: 0.75rem;
}
```

All Pico variables are prefixed `--pico-` and won't collide with our own `--azul`, `--papel-*` etc.

### 3. We use the **classless** Pico variant

```js
import '@picocss/pico/css/pico.classless.css'; // BaseLayout.astro
```

This means: **no** `.container`, `.grid`, `.secondary` utility classes. Layout comes from
semantic HTML + `data-*` attributes + custom CSS. Do not add class-based layout helpers.

---

## Semantic HTML rules

Pico classless styles HTML elements directly — the more semantic the markup, the less
custom CSS you need.

### Landmark structure (every page)

```html
<body>
  <header>     <!-- site header, sticky nav -->
  <main>       <!-- one per page, sibling of header/footer -->
  <footer>     <!-- site footer -->
</body>
```

- Exactly **one `<main>`** per page.
- `<header>` and `<footer>` can also appear inside `<article>` as article metadata.
- `<nav>` only for **major navigation** (primary menu, TOC, breadcrumb, pagination). A list
  of social links in a footer is not `<nav>`.
- `<aside>` is for tangentially related content (sidebars, pull quotes). Not for layout.

### Interactive elements — use the native one

| Intent | Element |
|--------|---------|
| Perform action on current page | `<button type="button">` |
| Navigate to URL | `<a href="...">` |
| Submit form | `<button type="submit">` inside `<form>` |

Never `<div onClick>`. Never `<a href="#">` as a button. You lose keyboard activation,
focus ring, and correct screen-reader announcement.

### Headings are an outline, not a font-size menu

- One `<h1>` per page — the page title.
- Descend without skipping: `h2` under `h1`, `h3` under `h2`.
- Fix visual size with CSS, never by choosing a lower heading level.

### `<article>` vs `<section>` vs `<div>`

| Element | Use when |
|---------|----------|
| `<article>` | Independently distributable — card, post, comment, product |
| `<section>` | Thematic group **that has a heading** (`aria-labelledby` or visible `<h*>`) |
| `<div>` | Pure layout/styling, no semantic meaning |

### Forms

- Every `<input>`, `<select>`, `<textarea>` must have a `<label for="id">` or be wrapped
  in one. `placeholder` is **not** a label.
- Group related inputs in `<fieldset>` + `<legend>` (radio sets, address blocks).
- Use specific input types: `type="email"`, `type="tel"`, `type="number"`, etc.
- Error messages: `aria-describedby` pointing to the error element + `aria-invalid="true"`.
- Use the `FormField.svelte` component — it handles all of the above automatically.

### Tables

- `<caption>` describes the table.
- `<thead>` / `<tbody>` / `<tfoot>` for segmentation.
- `<th scope="col">` for column headers, `<th scope="row">` for row headers.

### Under-used elements worth reaching for

```html
<!-- Machine-readable date — always provide datetime in ISO 8601 -->
<time datetime="2026-05-12">12 de maio de 2026</time>

<!-- Image/chart/code block with caption -->
<figure>
  <img src="..." alt="..." />
  <figcaption>Description</figcaption>
</figure>

<!-- Native collapsible — no JS needed -->
<details>
  <summary>Show more</summary>
  <p>Hidden content</p>
</details>

<!-- Native modal — handles focus trap + Escape for free -->
<dialog>...</dialog>

<!-- Key-value pairs / glossary -->
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>

<!-- Button + input cluster (search bar, segmented buttons) — Pico v2 feature -->
<role="group">
  <input type="search" />
  <button type="submit">Buscar</button>
</div>
```

### ARIA is the patch, not the foundation

Use ARIA only when no native HTML element exists for the pattern. Wrong ARIA is worse
than no ARIA — it silently lies to assistive tech.

Good ARIA uses in this codebase:
- `aria-current="page"` on active nav links
- `aria-label` on icon-only buttons and unlabeled landmarks
- `aria-live` on status regions that update asynchronously
- `aria-labelledby` linking `<section>` to its heading
- `aria-invalid` / `aria-describedby` on form validation

### Common foot-guns

1. `<div onClick>` instead of `<button>` — inaccessible, untabbable
2. Heading levels chosen for visual size — use CSS for size, levels for structure
3. `<br><br>` for spacing — use `<p>` + margin
4. `placeholder` as label — disappears on type, fails contrast
5. `<a href="#">` for buttons — pollutes history, focus wrong
6. `<section>` without a heading — use `<div>` instead
7. Tables for layout — CSS Grid/Flexbox is always the right tool

---

## Pico v2 specifics

### Color scheme

```html
<!-- BaseLayout.astro <head> — already set -->
<meta name="color-scheme" content="light dark" />
```

Use `data-theme="dark"` / `"light"` only when you need a manual toggle. Do not write
custom dark-mode CSS — override `[data-theme="dark"]` Pico variables.

### Scale for app UIs

If UI elements feel too large, adjust these three variables (not element rules):

```css
:root {
  --pico-font-size: 87.5%;                        /* shrinks everything proportionally */
  --pico-form-element-spacing-vertical: 0.5rem;
  --pico-form-element-spacing-horizontal: 0.75rem;
}
```

### What changed in Pico v2 (common foot-guns)

- Buttons are **not** `width: 100%` by default. Only form buttons are full-width.
- Dropdowns now require `.dropdown` class (we don't use dropdowns).
- Grid columns collapse at `<768px` — don't expect mobile multi-column grids without a breakpoint.
- `role="group"` is the Pico v2 pattern for button+input clusters (search bars).

---

## Svelte 5 patterns

```svelte
<!-- Props -->
let { foo, bar = 'default' } = $props();

<!-- Reactive state -->
let count = $state(0);
let doubled = $derived(count * 2);

<!-- Side effects -->
$effect(() => { /* runs after mount and on dependency change */ });

<!-- Snippets (not slots) -->
{#snippet mySnippet(arg)}...{/snippet}
{@render mySnippet(value)}
```

---

## Component authoring checklist

- [ ] No `<style>` block — styles go in `global.css`
- [ ] Uses semantic HTML — `<article>` for cards, `<nav>` for navs, etc.
- [ ] Interactive elements use `<button>` or `<a>`, never `<div>`
- [ ] `<time>` elements include `datetime` in ISO 8601 (`YYYY-MM-DD`)
- [ ] Tables have `<caption>`, `<thead>`, and `scope="col"` on `<th>`
- [ ] All form inputs have associated `<label>` (use `FormField.svelte`)
- [ ] Decorative images have `alt=""`, informational images have descriptive alt
- [ ] ARIA used only when no native element exists
