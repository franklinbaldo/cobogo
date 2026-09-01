---
type: ConsumerCard
repo: franklinbaldo/astronauta
site: https://github.com/franklinbaldo/astronauta
status: active
last_reviewed: 2026-09-01
gap_score: 1
---

# Astronauta

## Identidade local

Admin/editor local de alta densidade para bundles OKF. Preservar o tema escuro e operacional, a leitura compacta, a analogia útil com Django Admin e a separação rígida entre interação humana e autoridade semântica. Astronauta não é skin editorial nem gateway obrigatório para agentes; `okf-parser` continua sendo a autoridade sobre OKF e mutação do filesystem.

## D1 — no site

[fato] A superfície executável permite abrir um bundle local, navegar dashboard e tipos, pesquisar/paginar conceitos, ler conceito e relações, inspecionar grafo e diagnósticos, editar body com preview/commit, executar Apply preview-first e importar/criar conceitos. Escritas só existem quando o processo nasce com `--write`; payload do browser não concede autoridade.

Gap: nenhum material. A PR #38 passou a deixar import/create explícitos também na entrada pública do repositório, alinhando README e superfície executável.

## D2 — por trás

[fato] O README torna explícita a cadeia Browser → Astro SSR/Actions → capability client → gateway local → serviços canônicos do `okf-parser` → bundle OKF. Também explicita que Astronauta possui apresentação/interação enquanto `okf-parser` possui semântica e escrita. O gateway memoriza o read adapter com invalidação por estado da árvore para preservar liveness em bundles grandes. Desde #37, import/create é review-bound por `preview_token` opaco parser-owned; #38 passou a documentar publicamente esse contrato e a preservar a autoridade process-owned de `--write`.

Gap: nenhum material nessa dimensão. A razão de existir, a fronteira de autoridade e as três classes atuais de mutação preview-first estão perceptíveis na entrada pública do projeto.

## D3 — por conta própria

[fato] O repositório público fornece a aplicação e uma receita reproduzível de execução a partir do source checkout. O CI atual também prova uma wheel com runtime Astro standalone instalada em ambiente consumidor fresco sem Bun/source checkout. Não há GitHub Release publicada atualmente, e nenhuma release inexistente deve ser apresentada como disponível.

Gap [fato]: o README ainda descreve o runtime empacotado como uma “next distribution slice”, embora o job `installed-artifact` já prove esse estado incorporado. Correção rastreada em `franklinbaldo/astronauta#39`. Até isso ser reconciliado, o leitor de fora recebe uma descrição de distribuição defasada.

## Capacidades de superfície

- CI principal — `last_verified: 2026-09-01`; #38 passou no head exato `9f8aab4c2afa186334b78747a4387c160f3e5321` com CI, Live editor, Live apply e Live import verdes antes do merge.
- Live editor / Apply / import gates — `last_verified: 2026-09-01`; os três workflows concluíram `success` no head da #38.
- Runtime instalado — `last_verified: 2026-09-01`; o job `installed-artifact` do CI constrói a wheel com runtime web staged, instala em ambiente consumidor fresco e prova execução sem Bun/source checkout.
- Pages/deploy público — `last_verified: 2026-09-01`; não aplicável ao produto atual, que é um admin SSR local servido em loopback. A superfície pública de documentação é o próprio README do repositório.
- Captura visual comparável — `last_verified: 2026-09-01`; nenhuma capacidade canônica de screenshot foi localizada e #38 foi estritamente editorial, sem mudança visual do admin.
- Preservação/Save Page Now — `last_verified: 2026-09-01`; não aplicável à superfície local atual.

## O que este consumer faz melhor que o Cobogó

- [Astronauta concept review](../specimens/astronauta-concept-review.md) — evidência de gramática sob densidade administrativa sem copiar consumers editoriais.
- A liveness de bundle grande com invalidação explícita do adapter é uma realização de produto local; não foi promovida a pattern visual compartilhado.

## Padrões do Cobogó em uso

- `Vão antes de massa` e `Módulo sem monotonia` orientam a composição registrada no specimen.
- `Parentesco sem uniformidade` é a restrição de família: sem herdar densidade, marca ou skeleton de outros consumers.
- PR #25 é evidência histórica de mapeamento de roles semânticos; não prova consumo atual de um package Cobogó lançado.

## Histórico

- 2026-09-01 — #38 merge `81a97820`: README passa a expor import/create preview-first e review-bound; D2 fechado. Identificado gap D3 de packaging obsoleto, rastreado em #39.
- 2026-08-31 — #37 merge `aaa7c0ed`: import/create passou a ser review-bound por `preview_token` opaco; ProjectProfile reconciliado.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas.
- 2026-08-29 — cache do read adapter com aferição de frescor por árvore entrou em `main`, mantendo liveness.
- 2026-08-14 — README reconciliado pela #28 com o live SSR/editor e a fronteira `okf-parser`/Astronauta.
