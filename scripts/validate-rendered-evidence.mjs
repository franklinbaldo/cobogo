import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const SHA_RE = /^[0-9a-f]{40}$/i;
const RFC3339_DATE_TIME_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
const PHASES = new Set(['pull_request', 'main', 'published']);

function isPublicHttpUrl(value) {
  if (typeof value !== 'string' || value.trim() === '') return false;
  try {
    const url = new URL(value);
    return (url.protocol === 'http:' || url.protocol === 'https:') && Boolean(url.hostname);
  } catch {
    return false;
  }
}

function isValidObservedAt(value) {
  return typeof value === 'string'
    && RFC3339_DATE_TIME_RE.test(value)
    && Number.isFinite(Date.parse(value));
}

export function validateRenderedEvidence(manifest) {
  const errors = [];

  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    return ['manifest must be an object'];
  }

  if (manifest.version !== 1) errors.push('version must be 1');
  if (!SHA_RE.test(manifest.revision ?? '')) errors.push('revision must be a full 40-character Git SHA');
  if (!PHASES.has(manifest.phase)) errors.push('phase must be pull_request, main, or published');
  if (typeof manifest.route !== 'string' || manifest.route.trim() === '') errors.push('route must be a non-empty string');
  if (typeof manifest.responsive !== 'boolean') errors.push('responsive must be boolean');

  if (manifest.phase === 'pull_request') {
    if (!SHA_RE.test(manifest.head_revision ?? '')) errors.push('pull_request evidence must declare head_revision');
    else if (manifest.head_revision.toLowerCase() !== String(manifest.revision).toLowerCase()) {
      errors.push('pull_request revision must equal head_revision (merge refs are not equivalent)');
    }
  }

  if (manifest.phase === 'main' || manifest.phase === 'published') {
    if (!SHA_RE.test(manifest.published_revision ?? '')) {
      errors.push(`${manifest.phase} evidence must declare published_revision`);
    } else if (manifest.published_revision.toLowerCase() !== String(manifest.revision).toLowerCase()) {
      errors.push(`${manifest.phase} revision must equal published_revision`);
    }
  }

  if (manifest.phase === 'published') {
    if (!isPublicHttpUrl(manifest.public_url)) {
      errors.push('published evidence must declare an absolute public_url using http or https');
    }
    if (!isValidObservedAt(manifest.observed_at)) {
      errors.push('published evidence must declare a valid RFC 3339 observed_at timestamp');
    }
  }

  if (!Array.isArray(manifest.captures) || manifest.captures.length === 0) {
    errors.push('captures must contain at least one capture');
    return errors;
  }

  const seen = new Set();
  let hasNarrow = false;
  let hasDesktop = false;

  manifest.captures.forEach((capture, index) => {
    const width = capture?.viewport?.width;
    const height = capture?.viewport?.height;
    if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
      errors.push(`captures[${index}].viewport must have positive integer width and height`);
      return;
    }
    const key = `${width}x${height}`;
    if (seen.has(key)) errors.push(`duplicate viewport ${key}`);
    seen.add(key);
    if (width <= 480) hasNarrow = true;
    if (width >= 1024) hasDesktop = true;
    if (typeof capture.artifact !== 'string' || capture.artifact.trim() === '') {
      errors.push(`captures[${index}].artifact must be a non-empty string`);
    }
  });

  if (manifest.responsive === true && (!hasNarrow || !hasDesktop)) {
    errors.push('responsive evidence requires at least one narrow viewport (<=480px) and one desktop viewport (>=1024px)');
  }

  return errors;
}

export function assertRenderedEvidence(manifest) {
  const errors = validateRenderedEvidence(manifest);
  if (errors.length) throw new Error(errors.join('\n'));
  return manifest;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const path = process.argv[2];
  if (!path) {
    console.error('usage: node scripts/validate-rendered-evidence.mjs <manifest.json>');
    process.exit(2);
  }
  const manifest = JSON.parse(fs.readFileSync(path, 'utf8'));
  const errors = validateRenderedEvidence(manifest);
  if (errors.length) {
    for (const error of errors) console.error(`rendered-evidence: ${error}`);
    process.exit(1);
  }
  console.log(`rendered-evidence: valid (${manifest.phase} ${manifest.revision} ${manifest.route})`);
}
