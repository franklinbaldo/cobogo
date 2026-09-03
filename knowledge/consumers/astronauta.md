---
type: ConsumerCard
repo: franklinbaldo/astronauta
site: https://github.com/franklinbaldo/astronauta
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

# Astronauta

## Identidade local

Admin/editor local de alta densidade para bundles OKF. Preservar o tema escuro e operacional, a leitura compacta, a analogia útil com Django Admin e a separação rígida entre interação humana e autoridade semântica. Astronauta não é skin editorial nem gateway obrigatório para agentes; `okf-parser` continua sendo a autoridade sobre OKF e mutação do filesystem.

## D1 — no site

[fato] A superfície executável permite abrir um bundle local, navegar dashboard e tipos, pesquisar/paginar conceitos, ler conceito e relações, inspecionar grafo e diagnósticos, editar body com preview/commit, executar Apply preview-first e importar/criar conceitos. Escritas só existem quando o processo nasce com `--write`; payload do browser não concede autoridade.

Problema material: nenhum nesta dimensão. A primeira avaliação completa atribui 4/4.

## D2 — por trás

[fato] O README torna explícita a cadeia Browser → Astro SSR/Actions → capability client → gateway local → serviços canônicos do `okf-parser` → bundle OKF. Também explicita que Astronauta possui apresentação/interação enquanto `okf-parser` possui semântica e escrita. O gateway memoriza o read adapter com invalidação por estado da árvore para preservar liveness em bundles grandes. Desde #37, import/create é review-bound por `preview_token` opaco parser-owned; #38 passou a documentar publicamente esse contrato e a preservar a autoridade process-owned de `--write`.

Problema material: nenhum nesta dimensão. A primeira avaliação completa atribui 4/4.

## D3 — por conta própria

[fato] O repositório público fornece a aplicação e uma receita reproduzível de execução a partir do source checkout. O CI atual também prova uma wheel com runtime Astro standalone instalada em ambiente consumidor fresco sem Bun/source checkout. A PR #40 reconciliou o README com esse estado: a wheel instalada carrega `_web/server/entry.mjs`, o gate `installed-artifact` prova execução sem Bun, source checkout ou build frontend prévio, e o contrato público permanece `astronauta PATH [--write]`. O README explicita ainda que esse estado do repo não implica GitHub Release ou PyPI publicada sem verificação independente.

Problema material: nenhum nesta dimensão. A primeira avaliação completa atribui 4/4.

## Capacidades de superfície

- CI principal — `last_verified: 2026-09-03`; `main` está em `55232223e695cb2d27611b750ec94748e99023a1`; build, gateway, live SSR e `installed-artifact` passaram novamente depois do merge da #42.
- Live editor / Apply / import gates — `last_verified: 2026-09-03`; os três workflows funcionais passaram no commit da PR #42 e novamente no commit que entrou em `main`.
- Runtime instalado — `last_verified: 2026-09-03`; o job `installed-artifact` continua provando a wheel em ambiente consumidor fresco sem Bun/source checkout/build frontend prévio.
- Pages/deploy público — `last_verified: 2026-09-03`; não aplicável ao produto atual, que é um admin SSR local servido em loopback. Para este produto, a verificação depois do merge é a execução do runtime real sobre o commit de `main`, não uma publicação Pages inexistente.
- Prova visual comparável — `last_verified: 2026-09-03`; a #42 entrou em `main` como `55232223e695cb2d27611b750ec94748e99023a1`. O workflow `Visual evidence` `33742274379` produziu o arquivo `9888212021`, identificado como `astronauta-rendered-evidence-55232223e695cb2d27611b750ec94748e99023a1`, com leitura e edição em `1280×900` e `390×844` e `evidence.json` ligado ao commit real observado.
- Preservação/Save Page Now — `last_verified: 2026-09-03`; não aplicável à superfície local atual.

## Primeira avaliação completa

Avaliação de qualidade: **20 de 24 pontos — faixa boa**.

- Clareza/D1: 4/4;
- Explicabilidade/D2: 4/4;
- Autonomia/D3: 4/4;
- UX: 3/4;
- UI: 2/4;
- Confiança: 3/4.

A maior dívida concreta é a #43. Em `390×844`, tanto `/types/Note` quanto `/concepts/edit/note-01` deixam o documento mais largo que a janela. A navegação fica cortada e a pessoa precisa rolar a página lateralmente. No desktop, a densidade e a hierarquia são boas e devem ser preservadas.

## O que este projeto faz melhor que o Cobogó

- [Astronauta concept review](../specimens/astronauta-concept-review.md) — prova de gramática sob densidade administrativa sem copiar projetos editoriais.
- A liveness de bundle grande com invalidação explícita do adapter é uma realização de produto local; não foi promovida a padrão visual compartilhado.
- A distinção entre autoridade de escrita do processo (`--write`) e identidade de revisão transportada pelo browser é especialmente forte e deve permanecer local ao domínio de edição segura.

## Padrões do Cobogó em uso

- `Vão antes de massa` e `Módulo sem monotonia` orientam a composição registrada no specimen.
- `Parentesco sem uniformidade` é a restrição de família: sem herdar densidade, marca ou skeleton de outros projetos.
- `visual-evidence-as-quality-gate` está `stable`, isto é, já funcionou de forma convergente em pelo menos dois projetos; a #42 demonstra que a regra também encontra defeitos reais numa interface administrativa local.
- `rendered-evidence-manifest` passa a ter aplicação real equivalente no Astronauta: `evidence.json` identifica commit real, fase do workflow, rota, viewport e arquivos. Isso sustenta a promoção da recomendação para `validated`, isto é, já funcionou em pelo menos um projeto real.
- PR #25 é registro histórico de mapeamento de roles semânticos; não prova consumo atual de um package Cobogó lançado.

## Histórico

- 2026-09-03 — #42 entrou em `main` como `55232223`; a execução visual de `main` `33742274379` produziu leitura/escrita em desktop e celular com identidade inequívoca do commit. A primeira avaliação completa fica em 20/24; a nova prova revelou a dívida responsiva #43.
- 2026-09-02 — revisão opinionada confirmou `gap_score: 0` em D1–D3, mas a avaliação completa ainda não podia ser feita sem observação visual reproduzível; aberta #41 com critério desktop+tela estreita, leitura/escrita e commit real.
- 2026-09-01 — #40 merge `664536ae`: README passou a descrever a wheel/runtime instalado como estado atual; D3 fechado e `gap_score` voltou a 0.
- 2026-09-01 — #38 merge `81a97820`: README passou a expor import/create preview-first e review-bound; D2 fechado; dívida D3 de packaging rastreada em #39.
- 2026-08-31 — #37 merge `aaa7c0ed`: import/create passou a ser review-bound por `preview_token` opaco; ProjectProfile reconciliado.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas.
- 2026-08-29 — cache do read adapter com aferição de frescor por árvore entrou em `main`, mantendo liveness.
