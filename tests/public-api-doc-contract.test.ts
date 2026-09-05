import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const publicRoots = [
  path.join(root, 'src', 'content', 'docs'),
  path.join(root, 'src', 'pages'),
];

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(?:astro|md|mdx|svelte)$/.test(entry.name) ? [full] : [];
  });
}

function currentPublicFiles(): string[] {
  return publicRoots.flatMap(walk);
}

function exportedNames(): Set<string> {
  const source = fs.readFileSync(path.join(root, 'src', 'index.ts'), 'utf8');
  return new Set(
    [...source.matchAll(/export\s+\{\s+default\s+as\s+(\w+)\s+\}/g)].map(
      (match) => match[1],
    ),
  );
}

describe('public API taught by the reference site', () => {
  it('does not expose the component directory through a wildcard', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
    expect(pkg.exports).not.toHaveProperty('./components/*');
  });

  it('does not teach deep component imports in current public pages', () => {
    const offenders = currentPublicFiles().filter((file) => {
      const source = fs.readFileSync(file, 'utf8');
      return /\bfrom\s+['"]cobogo\/components(?:\/[^'"]*)?['"]/.test(source);
    });

    expect(offenders.map((file) => path.relative(root, file))).toEqual([]);
  });

  it('exports every named root symbol taught by current public pages', () => {
    const exports = exportedNames();
    const missing: string[] = [];

    for (const file of currentPublicFiles()) {
      const source = fs.readFileSync(file, 'utf8');
      for (const match of source.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]cobogo['"]/g)) {
        for (const rawName of match[1].split(',')) {
          const name = rawName.trim().split(/\s+as\s+/)[0];
          if (name && !exports.has(name)) {
            missing.push(`${path.relative(root, file)}: ${name}`);
          }
        }
      }
    }

    expect(missing).toEqual([]);
  });
});
