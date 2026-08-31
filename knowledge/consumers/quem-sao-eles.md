---
type: ConsumerCard
repo: franklinbaldo/quem-sao-eles
site: https://franklinbaldo.github.io/quem-sao-eles/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Quem São Eles?

## Identidade local

Catálogo jornalístico sóbrio de memória política, com preto/branco/cinza, leitura editorial e fontes arquivadas. Preservar a separação entre perfis/cronologia editoriais e a busca pública de PEP: são dois trabalhos distintos. Não converter a superfície em dashboard genérico nem confundir dataset público com perfil editorial.

## D1 — no site

[fato] A superfície pública já oferece uma busca PEP client-side sobre o Parquet publicado. A rota identifica Portal da Transparência/CGU, mostra a competência, permite pesquisar e distingue estados de carregamento, erro, resultado e busca sem correspondência. A home torna essa busca descobrível e deixa explícito que ela é separada do catálogo editorial.

[fato] O catálogo de perfis/cronologia continua sem conteúdo editorial populado suficiente no repositório para constituir hoje uma experiência editorial real a ser avaliada. Isso é ausência de matéria publicada, não uma capacidade comprovada escondida pela superfície.

**Gap [fato]:** nenhum gap D1 material fechável com a evidência atual. Produzir cards/perfis fictícios apenas para criar uma intervenção violaria a fronteira editorial.

## D2 — por trás

[fato] O README e o `ProjectProfile` explicam a tese do projeto: memória política e transparência por perfis documentados, com fontes secundárias arquivadas, mais uma superfície distinta de consulta a dados PEP da CGU. O runtime PEP usa Svelte + DuckDB-WASM para consultar no navegador o snapshot Parquet versionado.

**Gap [fato]:** nenhum material. A razão de existir, a metodologia editorial e a separação entre catálogo e PEP estão recuperáveis no repositório; não há evidência atual que justifique inventar nova explicação de produto na superfície.

## D3 — por conta própria

[fato] Na rota PEP, a pessoa pode tanto consultar os dados no próprio site quanto abrir/baixar o snapshot Parquet exato usado pela consulta. A competência e a autoridade ficam adjacentes ao artefato, permitindo reutilização independente sem transformar a página em console técnico. O repositório também documenta execução local do site Astro.

**Gap [fato]:** nenhum material. O contrato `usar aqui ↔ levar o artefato` já foi provado por captura Chromium e consulta real ao Parquet publicado.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-08-31`; `main` observado em `1fb2c8eb55e577de07e274386b06ceec7a2bb50f`; o último conjunto de runs registrado para esse SHA inclui Pages verde.
- **PEP refresh** — `last_verified: 2026-08-31`; workflow mensal e snapshots versionados existem. O card não infere freshness futura a partir da configuração; a superfície expõe a competência efetivamente publicada.
- **Build gate** — `last_verified: 2026-08-31`; PRs usam o mesmo build Astro/Pages e a configuração já foi falsificada/corrigida anteriormente para Node 22.12+.
- **Captura visual/runtime** — `last_verified: 2026-08-31`; workflow `PEP visual capture` teve run `32075299012` verde em `1fb2c8eb55e577de07e274386b06ceec7a2bb50f`. A prova anterior inclui screenshot full-page, DOM, estado machine-readable e consulta deliberadamente sem resultado contra o Parquet.
- **Preservação editorial** — `last_verified: 2026-08-31`; o README exige `archive_url` para notícias/fontes editoriais. Não foi produzida nova captura editorial porque não há corpus populado suficiente para essa superfície.

## O que este consumer faz melhor que o Cobogó

- Demonstra concretamente `usar aqui ↔ levar o artefato`: a mesma autoridade/competência sustenta uma consulta client-side e o Parquet diretamente reutilizável.
- Demonstra que captura de shell não basta para provar aplicação de dados: o gate espera o runtime, executa uma consulta real e preserva estado machine-readable.
- Esses aprendizados permanecem evidência/conceito; não promovem layout ou componente compartilhado por si sós.

## Padrões do Cobogó em uso

- `Provenance and freshness` — autoridade, competência e snapshot exato ficam recuperáveis sem afirmar freshness não provada.
- `Public artifact reuse` — consultar no site e reutilizar o artefato são ações distintas sobre a mesma fonte.
- `Parentesco sem uniformidade` — a identidade jornalística local e a separação catálogo/PEP permanecem próprias do consumer.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas; `gap_score: 0`; ausência de conteúdo editorial reclassificada como falta de matéria publicada, não gap de superfície.
- 2026-08-17 — #14 removeu boilerplate do Astro; capture de `main` verde em `1fb2c8eb`.
- 2026-08-17 — #12 adicionou prova Chromium/runtime e corrigiu o base path do snapshot; Pages + capture verdes em `d411ea9b`.
- 2026-08-15 — #8 reconciliou competência/snapshot, provenance e build gate de PR.
