export type KnowledgeEntry = {
  path: string;
  slug: string;
  title: string;
  type: string;
  status?: string;
};

const knowledge = import.meta.glob('/knowledge/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function titleFrom(raw: string, path: string) {
  const heading = raw.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (heading) return heading;
  return path.split('/').pop()?.replace(/\.md$/, '').replaceAll('-', ' ') ?? path;
}

function scalar(raw: string, key: string) {
  return raw.match(new RegExp(`^${key}:\\s*([^\\n]+)$`, 'm'))?.[1]?.trim().replace(/^['"]|['"]$/g, '');
}

export const knowledgeEntries: KnowledgeEntry[] = Object.entries(knowledge)
  .flatMap(([path, raw]) => {
    const type = scalar(raw, 'type');
    if (!type) return [];

    const status = scalar(raw, 'adoption_status') ?? scalar(raw, 'status');
    const entry: KnowledgeEntry = {
      path,
      slug: path.split('/').pop()?.replace(/\.md$/, '') ?? path,
      title: titleFrom(raw, path),
      type,
      ...(status ? { status } : {}),
    };

    return [entry];
  })
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

function byType(type: string) {
  return knowledgeEntries.filter((entry) => entry.type === type);
}

export const canonEntries = byType('canon-rule');
export const grammarEntries = byType('design-grammar');
export const consumerEntries = byType('consumer');
export const patternEntries = byType('pattern');
