---
type: ConsumerCard
repo: franklinbaldo/astronauta
site: https://github.com/franklinbaldo/astronauta
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

# Astronauta

## Identidade local

Admin/editor local de alta densidade para bundles OKF. Preservar o tema escuro e operacional, a leitura compacta, a analogia útil com Django Admin e a separação rígida entre interação humana e autoridade semântica. Astronauta não é skin editorial nem gateway obrigatório para agentes; `okf-parser` continua sendo a autoridade sobre OKF e mutação do filesystem.

## D1 — no site

[fato] A superfície executável permite abrir um bundle local, navegar dashboard e tipos, pesquisar/paginar conceitos, ler conceito e relações, inspecionar grafo e diagnósticos, editar body com preview/commit, executar Apply preview-first e importar/criar conceitos. Escritas só existem quando o processo nasce com `--write`; payload do browser não concede autoridade.

Problema material: nenhum nesta dimensão. A avaliação atual atribui 4/4.

## D2 — por trás

[fato] O README torna explícita a cadeia Browser → Astro SSR/Actions → capability client → gateway local → serviços canônicos do `okf-parser` → bundle OKF. Também explicita que Astronauta possui apresentação/interação enquanto `okf-parser` possui semântica e escrita. O gateway memoriza o read adapter com invalidação por estado da árvore para preservar liveness em bundles grandes. Desde #37, import/create é review-bound por `preview_token` opaco parser-owned; #38 passou a documentar publicamente esse contrato e a preservar a autoridade process-owned de `--write`.

Problema material: nenhum nesta dimensão. A avaliação atual atribui 4/4.

## D3 — por conta própria

[fato] O repositório público fornece a aplicação e uma receita reproduzível de execução a partir do source checkout. O CI atual também prova uma wheel com runtime Astro standalone instalada em ambiente consumidor fresco sem Bun/source checkout. A PR #40 reconciliou o README com esse estado: a wheel instalada carrega `_web/server/entry.mjs`, o gate `installed-artifact` prova execução sem Bun, source checkout ou build frontend prévio, e o contrato público permanece `astronauta PATH [--write]`. O README explicita ainda que esse estado do repo não implica GitHub Release ou PyPI publicada sem verificação independente.

Problema material: nenhum nesta dimensão. A avaliação atual atribui 4/4.

## Capacidades de superfície

- CI principal — `last_verified: 2026-09-04`; `main` está em `2ee08c03e11aa7c9fec104ffe9db1403f4805c89`; CI e os workflows funcionais passaram depois do merge da #45.
- Live editor / Apply / import gates — `last_verified: 2026-09-04`; os três workflows funcionais passaram no commit final da branch da #45 e novamente no commit que entrou em `main`.
- Runtime instalado — `last_verified: 2026-09-04`; o job `installed-artifact` continua provando a wheel em ambiente consumidor fresco sem Bun/source checkout/build frontend prévio.
- Pages/deploy público — `last_verified: 2026-09-04`; não aplicável ao produto atual, que é um admin SSR local servido em loopback. Para este produto, a verificação depois do merge é a execução do runtime real sobre o commit de `main`, não uma publicação Pages inexistente.
- Prova visual comparável — `last_verified: 2026-09-04`; o workflow `Visual evidence` permaneceu verde na branch da #45 e novamente no commit `2ee08c03e11aa7c9fec104ffe9db1403f4805c89` de `main`, preservando as rotas de leitura e edição em desktop e 390 px.
- Prova semântica e de teclado — `last_verified: 2026-09-04`; a #45 adicionou o workflow `Semantic accessibility`. A execução de `main` `33843623459` produziu o arquivo `9925739036`, ligado ao commit `2ee08c03e11aa7c9fec104ffe9db1403f4805c89`: `/types/Note` ficou com axe 0, 25/25 controles alcançados e nenhuma falha de foco; `/concepts/edit/note-01` ficou com axe 0, 13/13 controles alcançados e nenhuma falha de foco.
- Preservação/Save Page Now — `last_verified: 2026-09-04`; não aplicável à superfície local atual.

## Avaliação atual

Avaliação de qualidade: **24 de 24 pontos — faixa de referência**.

- Clareza/D1: 4/4;
- Explicabilidade/D2: 4/4;
- Autonomia/D3: 4/4;
- UX: 4/4;
- UI: 4/4;
- Confiança: 4/4.

A #45 transformou a antiga falta de comprovação em um teste reproduzível. A primeira execução encontrou contraste insuficiente, um link distinguível apenas por cor e uma região horizontal rolável sem caminho de foco. O critério não foi reduzido: a interface foi corrigida. Depois do merge, o mesmo contrato passou no runtime real de `main`, com zero violações do axe nas duas rotas observadas, todos os controles visíveis e habilitados alcançados por teclado e nenhuma falha de foco.

24/24 descreve o escopo observado; não é uma afirmação de acessibilidade perfeita em todo estado futuro ou para toda tecnologia assistiva.

## O que este projeto faz melhor que o Cobogó

- [Astronauta concept review](../specimens/astronauta-concept-review.md) — prova de gramática sob densidade administrativa sem copiar projetos editoriais.
- A liveness de bundle grande com invalidação explícita do adapter é uma realização de produto local; não foi promovida a padrão visual compartilhado.
- A distinção entre autoridade de escrita do processo (`--write`) e identidade de revisão transportada pelo browser é especialmente forte e deve permanecer local ao domínio de edição segura.
- A #44 torna contenção responsiva uma propriedade executável da própria prova visual: tabelas densas podem continuar largas internamente, enquanto a largura global do documento passa a ser medida e protegida.
- A #45 faz o mesmo com acessibilidade no runtime real: o workflow preserva os defeitos encontrados em JSON mesmo quando reprova, o que permitiu corrigir a interface sem afrouxar a régua. A nova capacidade factual foi encaminhada ao workspace na issue #40.

## Padrões do Cobogó em uso

- `Vão antes de massa` e `Módulo sem monotonia` orientam a composição registrada no specimen.
- `Parentesco sem uniformidade` é a restrição de família: sem herdar densidade, marca ou skeleton de outros projetos.
- `visual-evidence-as-quality-gate` está `stable`, isto é, já funcionou de forma convergente em pelo menos dois projetos. No Astronauta, a #42 encontrou a dívida responsiva e a #44 fechou o ciclo transformando a largura observada em gate automático.
- `semantic-accessibility-default` está `stable`, isto é, já funcionou de forma convergente em pelo menos dois projetos. A #45 é uma terceira aplicação real, mantendo o tema e a densidade locais enquanto exige semântica, teclado e foco perceptível.
- `rendered-evidence-manifest` está `validated`, isto é, já funcionou em pelo menos um projeto real. Os pacotes de prova identificam o commit realmente executado e distinguem branch de PR e `main`.
- PR #25 é registro histórico de mapeamento de roles semânticos; não prova consumo atual de um package Cobogó lançado.

## Histórico

- 2026-09-04 — #45 entrou em `main` como `2ee08c03`; a execução semântica de `main` `33843623459`, arquivo `9925739036`, comprovou axe 0 nas duas rotas, 25/25 controles na leitura, 13/13 na edição e nenhuma falha de foco. A avaliação sobe para 24/24; a capacidade foi encaminhada ao workspace na #40.
- 2026-09-03 — #44 entrou em `main` como `99661b56`; a execução visual de `main` `33828611787`, arquivo `9920852733`, comprovou 390 px de largura de documento nas duas rotas estreitas, manteve tabelas densas localmente roláveis e preservou o desktop. A avaliação sobe para 23/24; #43 encerrada.
- 2026-09-03 — #42 entrou em `main` como `55232223`; a execução visual de `main` `33742274379` produziu leitura/escrita em desktop e celular com identidade inequívoca do commit. A primeira avaliação completa ficou em 20/24; a prova revelou a dívida responsiva #43.
- 2026-09-02 — revisão opinionada confirmou `gap_score: 0` em D1–D3, mas a avaliação completa ainda não podia ser feita sem observação visual reproduzível; aberta #41 com critério desktop+tela estreita, leitura/escrita e commit real.
- 2026-09-01 — #40 merge `664536ae`: README passou a descrever a wheel/runtime instalado como estado atual; D3 fechado e `gap_score` voltou a 0.
- 2026-09-01 — #38 merge `81a97820`: README passou a expor import/create preview-first e review-bound; D2 fechado; dívida D3 de packaging rastreada em #39.
- 2026-08-31 — #37 merge `aaa7c0ed`: import/create passou a ser review-bound por `preview_token` opaco; ProjectProfile reconciliado.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas.
- 2026-08-29 — cache do read adapter com aferição de frescor por árvore entrou em `main`, mantendo liveness.
