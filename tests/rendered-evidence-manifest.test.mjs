import test from 'node:test';
import assert from 'node:assert/strict';
import { validateRenderedEvidence } from '../scripts/validate-rendered-evidence.mjs';

const HEAD = '1111111111111111111111111111111111111111';
const LANDING = '2222222222222222222222222222222222222222';

function validPullRequest() {
  return {
    version: 1,
    revision: HEAD,
    phase: 'pull_request',
    head_revision: HEAD,
    route: '/example',
    responsive: true,
    captures: [
      { viewport: { width: 390, height: 844 }, artifact: 'example-390x844.png' },
      { viewport: { width: 1280, height: 900 }, artifact: 'example-1280x900.png' }
    ]
  };
}

test('accepts responsive PR evidence bound to the real head', () => {
  assert.deepEqual(validateRenderedEvidence(validPullRequest()), []);
});

test('accepts landing evidence bound to published revision', () => {
  const manifest = validPullRequest();
  manifest.phase = 'main';
  manifest.revision = LANDING;
  delete manifest.head_revision;
  manifest.published_revision = LANDING;
  assert.deepEqual(validateRenderedEvidence(manifest), []);
});

test('rejects merge-ref style revision that differs from PR head', () => {
  const manifest = validPullRequest();
  manifest.revision = LANDING;
  assert.match(validateRenderedEvidence(manifest).join('\n'), /must equal head_revision/);
});

test('rejects main evidence not bound to published revision', () => {
  const manifest = validPullRequest();
  manifest.phase = 'main';
  delete manifest.head_revision;
  manifest.published_revision = LANDING;
  assert.match(validateRenderedEvidence(manifest).join('\n'), /must equal published_revision/);
});

test('rejects responsive evidence without narrow and desktop views', () => {
  const manifest = validPullRequest();
  manifest.captures = [{ viewport: { width: 1280, height: 900 }, artifact: 'desktop.png' }];
  assert.match(validateRenderedEvidence(manifest).join('\n'), /requires at least one narrow viewport/);
});

test('rejects duplicate viewports and missing artifact identity', () => {
  const manifest = validPullRequest();
  manifest.captures = [
    { viewport: { width: 390, height: 844 }, artifact: 'a.png' },
    { viewport: { width: 390, height: 844 }, artifact: '' },
    { viewport: { width: 1280, height: 900 }, artifact: 'desktop.png' }
  ];
  const errors = validateRenderedEvidence(manifest).join('\n');
  assert.match(errors, /duplicate viewport 390x844/);
  assert.match(errors, /artifact must be a non-empty string/);
});

test('rejects invalid SHA, empty route and missing viewport dimensions', () => {
  const manifest = validPullRequest();
  manifest.revision = 'abc';
  manifest.head_revision = 'abc';
  manifest.route = '   ';
  manifest.captures = [{ viewport: { width: 390 }, artifact: 'narrow.png' }];
  const errors = validateRenderedEvidence(manifest).join('\n');
  assert.match(errors, /revision must be a full 40-character Git SHA/);
  assert.match(errors, /must declare head_revision/);
  assert.match(errors, /route must be a non-empty string/);
  assert.match(errors, /positive integer width and height/);
});
