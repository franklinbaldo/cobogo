type KnowledgeEntry = {
  path: string;
  slug: string;
  title: string;
  status?: string;
};

const canon = import.meta.glob('/knowledge/canon/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const grammar = import.meta.glob('/knowledge/grammar/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const consumers = import.meta.glob('/knowledge/consumers/*.md', {
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

function project(source: Record<string, string>): KnowledgeEntry[] {
  return Object.entries(source)
    .map(([path, raw]) => ({
      path,
      slug: path.split('/').pop()?.replace(/\.md$/, '') ?? path,
      title: titleFrom(raw, path),
      status: scalar(raw, 'adoption_status') ?? scalar(raw, 'status'),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
}

export const canonEntries = project(canon);
export const grammarEntries = project(grammar);
export const consumerEntries = project(consumers);
