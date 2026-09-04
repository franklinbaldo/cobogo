import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("package exposes the framework-agnostic core entrypoint", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.exports["./core"], "./src/styles/core.css");
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

test("public documentation teaches core before legacy identity styles", () => {
  const readme = read("README.md");
  const tokens = read("src/styles/tokens.md");

  assert.match(readme, /@import "cobogo\/core";/);
  assert.match(readme, /`cobogo\/styles` continua exportado por compatibilidade/);
  assert.doesNotMatch(readme, /Migration in progress/i);
  assert.doesNotMatch(readme, /Pico CSS classless como base/);

  assert.match(tokens, /não são a API semântica compartilhada/i);
  assert.match(tokens, /`cobogo\/core`/);
  assert.match(tokens, /`--cobogo-\*`/);
});
