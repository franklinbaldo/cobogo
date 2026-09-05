import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("package exposes the framework-agnostic core entrypoint", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.exports["./core"], "./src/styles/core.css");
});

test("root JavaScript API does not publish a fixed color palette", () => {
  const entrypoint = read("src/index.ts");
  const core = read("src/styles/core.css");

  assert.doesNotMatch(entrypoint, /export const tokens\s*=/);
  assert.match(core, /--cobogo-canvas:/);
  assert.match(core, /--cobogo-surface:/);
  assert.match(core, /--cobogo-text:/);
  assert.match(core, /--cobogo-accent:/);
});

test("grid layout is a framework-neutral pattern, not component wrappers", () => {
  const entrypoint = read("src/index.ts");
  const patterns = read("src/styles/patterns.css");

  assert.doesNotMatch(entrypoint, /default as Grid/);
  assert.doesNotMatch(entrypoint, /default as Column/);
  assert.match(patterns, /data-cobogo-pattern="grid"/);
  assert.match(patterns, /--cobogo-grid-columns/);
  assert.match(patterns, /--cobogo-grid-span-md/);
  assert.match(patterns, /--cobogo-grid-span-lg/);
});

test("entity identity is a domain-neutral pattern, not ProfileCard", () => {
  const entrypoint = read("src/index.ts");
  const patterns = read("src/styles/patterns.css");

  assert.doesNotMatch(entrypoint, /ProfileCard/);
  assert.match(patterns, /data-cobogo-pattern="identity"/);
  assert.match(patterns, /data-cobogo-identity-mark/);
  assert.match(patterns, /data-cobogo-identity-name/);
});

test("core owns generic focus and reduced-motion contracts", () => {
  const core = read("src/styles/core.css");
  assert.match(core, /:where\(:focus-visible\)/);
  assert.match(core, /--cobogo-focus-contrast:/);
  assert.match(core, /\[data-cobogo-inverted\]/);
  assert.match(core, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(core, /--cobogo-motion-state: 0ms/);
  assert.match(core, /--cobogo-motion-spatial: 0ms/);
});

test("public package documentation keeps core ahead of legacy identity styles", () => {
  const readme = read("README.md");
  const tokens = read("src/styles/tokens.md");

  assert.match(readme, /@import "cobogo\/core";/);
  assert.match(readme, /`cobogo\/styles`[\s\S]{0,160}compatibilidade/i);
  assert.doesNotMatch(readme, /Migration in progress/i);
  assert.doesNotMatch(readme, /Pico CSS classless como base/);

  assert.match(tokens, /não são a API semântica compartilhada/i);
  assert.match(tokens, /`cobogo\/core`/);
  assert.match(tokens, /`--cobogo-\*`/);
});
