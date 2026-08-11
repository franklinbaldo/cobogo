/** Factual projection of the public `cobogo/core` contract.
 *
 * Counts the semantic role tokens the core actually declares, so the website can state a
 * verifiable number instead of a marketing claim. Reads the real stylesheet at build time;
 * the number moves when the contract moves.
 */
const core = import.meta.glob('/src/styles/core.css', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const rootBlock = Object.values(core)[0]?.match(/:root\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';

export const coreRoleTokens: string[] = [
  ...new Set(rootBlock.match(/--cobogo-[\w-]+(?=\s*:)/g) ?? []),
];
