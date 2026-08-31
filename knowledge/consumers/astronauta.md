---
type: ConsumerCard
repo: franklinbaldo/astronauta
site: https://github.com/franklinbaldo/astronauta
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Astronauta

## Identidade local

Admin/editor local de alta densidade para bundles OKF. Preservar o tema escuro e operacional, a leitura compacta, a analogia útil com Django Admin e a separação rígida entre interação humana e autoridade semântica. Astronauta não é skin editorial nem gateway obrigatório para agentes; `okf-parser` continua sendo a autoridade sobre OKF e mutação do filesystem.

## D1 — no site

[fato] A superfície executável permite abrir um bundle local, navegar dashboard e tipos, pesquisar/paginar conceitos, ler conceito e relações, inspecionar grafo e diagnósticos, editar body com preview/commit, executar Apply preview-first e importar/criar conceitos. Escritas só existem quando o processo nasce com `--write`; payload do browser não concede autoridade.

Gap: nenhum material. As necessidades legadas de densidade, tabelas, filtros, forms, status e foco descrevem requisitos do produto/design system, não capacidades ausentes da superfície atual.

## D2 — por trás

[fato] O README torna explícita a cadeia Browser → Astro SSR/Actions → capability client → gateway local → serviços canônicos do `okf-parser` → bundle OKF. Também explicita que Astronauta possui apresentação/interação enquanto `okf-parser` possui semântica e escrita. O gateway atual memoriza o read adapter com invalidação por estado da árvore para preservar liveness em bundles grandes.

Gap: nenhum material. A razão de existir e a fronteira de autoridade estão perceptíveis na entrada pública do projeto.

## D3 — por conta própria

[fato] O repositório público fornece a aplicação e uma receita reproduzível de execução a partir do source checkout (`uv sync --frozen`, `bun install --frozen-lockfile`, `bun run build`, `uv run astronauta /path/to/bundle`). O contrato local de leitura e `--write` está documentado. Não há GitHub Release publicada atualmente, e o README não apresenta uma release inexistente como disponível.

Gap: nenhum material. A ausência de uma release empacotada é estado de distribuição/capacidade, não um gap entre capacidade já provada e superfície que a esconderia.

## Capacidades de superfície

- CI principal — `last_verified: 2026-08-31`; último `main` observado `8b356e93a5012c0edd10edaee4c677016e77c7e9`, run CI `33231518179` verde.
- Live editor / Apply / import gates — `last_verified: 2026-08-31`; workflows dedicados existem e permanecem parte do contrato do repo.
- Pages/deploy público — `last_verified: 2026-08-31`; não aplicável ao produto atual, que é um admin SSR local servido em loopback.
- Captura visual comparável — `last_verified: 2026-08-31`; nenhuma capacidade canônica de screenshot foi localizada no repo nesta rodada.
- Preservação/Save Page Now — `last_verified: 2026-08-31`; não aplicável à superfície local atual.

## O que este consumer faz melhor que o Cobogó

- [Astronauta concept review](../specimens/astronauta-concept-review.md) — evidência de gramática sob densidade administrativa sem copiar consumers editoriais.
- A liveness de bundle grande com invalidação explícita do adapter é uma realização de produto local; não foi promovida a pattern visual compartilhado.

## Padrões do Cobogó em uso

- `Vão antes de massa` e `Módulo sem monotonia` orientam a composição registrada no specimen.
- `Parentesco sem uniformidade` é a restrição de família: sem herdar densidade, marca ou skeleton de outros consumers.
- PR #25 é evidência histórica de mapeamento de roles semânticos; não prova consumo atual de um package Cobogó lançado.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas, `gap_score: 0`.
- 2026-08-31 — observado `okf-parser[graphql]==0.45.1`; ProjectProfile ainda descrevia 0.43.0, reportado ao workspace #23.
- 2026-08-29 — cache do read adapter com aferição de frescor por árvore entrou em `main`, mantendo liveness.
- 2026-08-14 — README reconciliado pela #28 com o live SSR/editor e a fronteira `okf-parser`/Astronauta.
- 2026-08-14 — PR #25 registrou mapeamento semântico inicial sem uniformizar a identidade local.
