---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, a composição compacta da home, o cabeçalho escuro, a paleta e a linguagem de competência/proveniência. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar a competência publicada diretamente no navegador. A home apresenta a tarefa como `Entenda uma empresa e suas conexões públicas`, com busca por CNPJ/Razão Social e caminhos explícitos de uso.

Problema material observado: nenhum de clareza factual. A dívida atual está no tratamento do estado de erro remoto, não em D1.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal, publica manifest multi-competência e usa Internet Archive como camada durável. A superfície expõe origem, competência, preservação, verificação e estado.

Problema material observado: nenhum.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os arquivos indicados pelo contrato público. `Levar a base` torna esse caminho explícito na própria home.

Problema material observado: nenhum.

## Capacidades de superfície

- GitHub Pages/deploy — verificado em 2026-09-02; a #229 publicou com sucesso o conteúdo web corrigido no commit `2e2adfa7c57cc5b80f504d1a9d0aa657abf94317`, execução `33606723991`. Os dois commits posteriores até `06665f7610af9d8e493fc03bb5862954bd3e8551` alteraram apenas workflows/teste de ETL, sem mudança em `web/**`.
- Captura visual — verificada em 2026-09-02; a #232 fez o mesmo workflow rodar automaticamente depois do merge. A execução `33677384208`, no commit atual de `main` `06665f7610af9d8e493fc03bb5862954bd3e8551`, produziu desktop `1280×900` e tela estreita `390×844`. O botão `Buscar` está inteiro em 390 px e o desktop não regrediu. A issue #228 continua aberta para melhorar a identidade do commit em capturas de PR.
- Smoke/tests — verificados em 2026-09-02; CI da #232 e CI de `main` concluíram com sucesso.
- Preservação — verificada em 2026-09-02; snapshots/datasets continuam usando Internet Archive e manifest público como contrato verificável.

## O que este projeto faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados.
- Mantém dois caminhos igualmente legítimos — interface e arquivo público reutilizável — sob o mesmo contrato factual.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222).
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais; #226/#229/#232 tornaram a diferença entre captura de PR e captura de `main` verificável.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real; #229 corrigiu o corte da ação principal e #232 permitiu comprovar automaticamente o resultado em `main`.
- `recoverable-error-states` — **opinionated**, isto é, uma recomendação que o Cobogó considera correta e quer testar; a #234 contém a primeira implementação, mas ainda não conta como validação porque a captura visual do commit atual da PR não chegou a executar.

## Dívida de qualidade atual

A avaliação continua em 20 de 24 pontos: Clareza 4, Explicabilidade 4, Autonomia 4, UX 2, UI 3 e Confiança 3.

O problema concreto de UX está no estado `remote-data-unavailable`: a primeira tela mostra texto técnico de `NetworkError`/`XMLHttpRequest` e não dá ao leitor orientação clara sobre o que fazer. A #234 implementa uma mensagem simples e oferece `manifest.json` como alternativa real, mas a mudança ainda não foi considerada concluída porque o workflow de captura visual da PR está parado na fila, sem máquina do GitHub atribuída e sem executar qualquer etapa. O commit atual da branch é `b98fc8f6e9c71880b0ff295f6140a23792e23c35`; a execução de captura é `33710308508`.

A condição objetiva para retomar esse trabalho é a execução `33710308508`, ou uma execução posterior do mesmo commit, conseguir iniciar e comprovar os dois tamanhos previstos. Se a captura ficar verde e a PR continuar atualizada e mergeável, a #234 pode seguir para merge, publicação e nova captura já sobre o commit que entrar em `main`.

## Histórico

- 2026-09-02 — #234 aberta para tornar o erro remoto compreensível. GitGuardian passou no commit `b98fc8f6e9c...`; CI e captura visual ficaram na fila sem runner atribuído, então não houve merge nem mudança de nota.
- 2026-09-02 — #232 mergeada; captura automática de `main` rodou com sucesso no commit `06665f7610...` e produziu evidência desktop+narrow. UI sobe de 1/4 para 3/4; avaliação passa de 18 para 20/24. `primary-action-viewport-containment` passa a `validated`. #233 aberta para o estado de erro remoto.
- 2026-09-02 — #229 mergeada; captura da PR corrigiu o corte do `Buscar`, e o conteúdo web foi publicado com deploy verde.
- 2026-09-02 — #226 mergeada; captura desktop+narrow revelou o corte do CTA `Buscar`; avaliação inicial 18/24 com UI 1/4; issue #227 aberta.
- 2026-09-01 — `main` e contrato público revalidados sem mudança de superfície; `gap_score: 0` preservado.
- 2026-08-31 — card reconciliado ao schema `ConsumerCard`; D1/D2/D3 reavaliados; `gap_score: 0`.
- 2026-08-30 — `main` avançou para #225 sem mudança de composição pública; snapshot 2026-07 permaneceu publicado.
