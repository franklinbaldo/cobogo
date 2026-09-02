---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-02
commit: 06665f7610af9d8e493fc03bb5862954bd3e8551
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33606723991
capture: artifact:9864898516
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 2
  ui: 3
  trust: 3
total: 20
band: good
blockers: []
trend: up
---

# Ficha — avaliação de qualidade da superfície

## Veredito

**20 de 24 pontos — boa, em melhora.** A nova captura automática de `main` comprova que a correção do botão `Buscar` chegou ao estado atual do repositório e continua correta em tela estreita e desktop. A nota de UI sobe de 1/4 para 3/4. A UX permanece em 2/4 porque a própria nova captura revelou uma dívida independente: quando a base remota não carrega, a página mostra uma exceção técnica longa e não oferece ao leitor um próximo passo claro.

O site publicado pela #229 foi implantado com sucesso. Entre o commit publicado pela #229 (`2e2adfa7c57cc5b80f504d1a9d0aa657abf94317`) e o commit atual (`06665f7610af9d8e493fc03bb5862954bd3e8551`), só mudaram workflows e teste de ETL; nenhum arquivo de `web/**` mudou. Assim, a nova captura recompila exatamente o mesmo conteúdo web já publicado, agora com a identidade do commit atual de `main` registrada automaticamente.

## Clareza / D1

**4/4.** A página inicial diz diretamente `Entenda uma empresa e suas conexões públicas`, explica que os dados são de CNPJ da Receita Federal e apresenta a busca como ação principal.

Problema material observado: nenhum.

## Explicabilidade / D2

**4/4.** A própria página mostra origem, competência, preservação, verificação e estado dos dados. O leitor consegue entender de onde a informação vem e por que ela é verificável.

Problema material observado: nenhum.

## Autonomia / D3

**4/4.** `Levar a base` e `Abrir manifest.json` deixam explícito que os dados podem ser reutilizados fora da interface. Snapshots preservados e checksums sustentam esse uso independente.

Problema material observado: nenhum.

## UX

**2/4 — adequada, mas com problema material.** O fluxo principal é curto, a busca é fácil de localizar e a arquitetura de informação é boa. O antigo corte do botão em tela estreita foi corrigido.

A dívida que mantém a nota em 2/4 aparece claramente na captura do estado `remote-data-unavailable`: o leitor recebe texto bruto de falha como `NetworkError`, `XMLHttpRequest`, nome interno de arquivo e URL de transporte. A mensagem informa que algo falhou, mas não explica em linguagem comum o que a pessoa pode fazer em seguida. A issue `franklinbaldo/ficha#233` registra esse problema com critério de conclusão.

## UI

**3/4 — boa.** Na nova captura de `390×844`, o campo de busca e o botão `Buscar` ficam inteiramente dentro da área visível, com boa hierarquia e sem corte horizontal. Em `1280×900`, a composição continua estável e legível. A correção preserva a identidade visual local da Ficha: cabeçalho escuro, cartão principal compacto, hierarquia tipográfica e organização de metadados continuam coerentes.

A nota não sobe para 4/4 porque a apresentação do estado de erro ainda domina visualmente parte da primeira tela com texto técnico em vermelho, o que impede tratar o conjunto como referência.

## Confiança

**3/4.** Proveniência, competência, preservação e integridade continuam fortes. A #232 fechou a ausência de captura automática depois do merge: o workflow `Visual capture` rodou sozinho no commit atual de `main`, execução `33677384208`, e produziu o arquivo de evidência `9864898516`, cujo nome inclui o SHA real `06665f7610af9d8e493fc03bb5862954bd3e8551`.

A nota permanece 3/4 porque a issue #228 ainda registra uma dívida diferente nas capturas de PR: distinguir de forma inequívoca o commit real da branch de um commit sintético usado pelo GitHub para testar o merge.

## Impedimentos

Nenhuma dimensão está em 0 e não há impedimento para considerar a correção visual da #229 encerrada. A #230 foi fechada pela #232 e a nova captura pós-merge existe de forma automática.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais.
- `primary-action-viewport-containment` — passa a **validated**, isto é, já funcionou em pelo menos um projeto real com evidência completa. A Ficha é a primeira validação: #229 corrigiu o corte e a captura automática de `main` produzida após #232 confirmou a ação principal inteira em 390×844 e o desktop sem regressão.
- `recoverable-error-states` — permanece **opinionated**, isto é, uma recomendação que o Cobogó considera correta e agora quer testar na Ficha por meio da #233.

## Issues derivadas

- `franklinbaldo/ficha#227` — fechada pela #229; correção comprovada na nova captura de `main`.
- `franklinbaldo/ficha#228` — continua aberta para melhorar a identidade do commit nas capturas de PR.
- `franklinbaldo/ficha#230` — fechada pela #232; captura automática de `main` comprovada.
- `franklinbaldo/ficha#233` — aberta nesta rodada para transformar a falha remota em um estado compreensível e com próximo passo útil ao leitor.

## O que o Cobogó deve aprender desta Ficha

Captura de PR e captura depois do merge respondem perguntas diferentes. A primeira diz se a mudança proposta renderiza corretamente; a segunda confirma o estado que ficou em `main`. A Ficha agora automatiza as duas sem exigir que a rotina trate commits diferentes como se fossem a mesma coisa.

A nova evidência também mostrou por que uma correção não deve encerrar a crítica: resolver o corte do botão revelou com mais nitidez o próximo problema relevante, que é a qualidade do estado de erro remoto.
