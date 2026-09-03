---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-02
commit: 2824bf6107bcd622570dd6beb27f820980fe5dc5
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33710502906
capture: artifact:9876751870
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 3
  trust: 3
total: 21
band: good
blockers: []
trend: up
---

# Ficha — avaliação de qualidade da superfície

## Veredito

**21 de 24 pontos — boa, em melhora.** A #234 corrigiu o problema material que mantinha UX em 2/4: no estado em que a base remota não está disponível, a pessoa agora recebe uma mensagem curta e compreensível e pode seguir para o `manifest.json`, em vez de receber a exceção técnica do navegador como mensagem principal.

A mudança foi verificada depois do merge no commit `2824bf6107bcd622570dd6beb27f820980fe5dc5`. Deploy `33710502906`, CI `33710502829` e captura visual `33710502919` concluíram com sucesso. O arquivo produzido pela captura de `main`, `9876751870`, identifica o mesmo commit.

## Clareza / D1

**4/4.** A página inicial continua dizendo diretamente `Entenda uma empresa e suas conexões públicas`, explica a origem dos dados e mantém a busca como ação principal. Nenhum problema material novo foi observado.

## Explicabilidade / D2

**4/4.** Origem, competência, preservação, verificação e estado permanecem visíveis na própria página. O leitor consegue entender de onde a informação vem e por que ela é verificável.

## Autonomia / D3

**4/4.** `Levar a base` e `manifest.json` continuam expondo um caminho público real de reutilização independente da interface.

## UX

**3/4 — boa.** No estado `remote-data-unavailable`, a página agora diz `A consulta está temporariamente indisponível.` e oferece `manifest.json` como alternativa segura já existente. Em `390×844` e `1280×900`, a mensagem fica próxima da busca, não domina a primeira tela com detalhes técnicos e não cria uma ação falsa de retry.

O teste de navegador também rejeita a execução se `Erro:`, `NetworkError` ou `XMLHttpRequest` vazarem para o texto público desse estado. Os detalhes técnicos continuam no console para diagnóstico, o que não impede o leitor de compreender a página.

A nota fica em 3/4, não 4/4, porque esta é uma solução boa e comprovada para a falha observada, mas não há base para classificá-la como referência de experiência de erro entre os projetos.

## UI

**3/4 — boa.** A nova captura mantém o cabeçalho, o cartão principal, o campo e o botão `Buscar` inteiros, sem corte em 390 px. A nova orientação se integra à hierarquia existente e o desktop permanece estável. Não surgiu dívida visual material nova, mas também não há evidência para tratar o conjunto como referência 4/4.

## Confiança

**3/4.** Proveniência, competência, preservação e integridade continuam fortes. A captura depois do merge identifica corretamente o commit real de `main`: `ficha-home-visual-2824bf6107bcd622570dd6beb27f820980fe5dc5`.

A nota permanece 3/4 porque a issue #228 continua registrando uma dívida diferente nas capturas de PR: distinguir de forma inequívoca o commit real da branch de um commit sintético usado pelo GitHub para testar o merge. A rodada atual não piorou nem resolveu esse ponto.

## Impedimentos

Nenhuma dimensão está em 0. A #234 foi incorporada, publicada e comprovada nos dois tamanhos previstos.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — **stable**: já funcionou de forma convergente em pelo menos dois projetos reais.
- `primary-action-viewport-containment` — **validated**: já funcionou em pelo menos um projeto real; a Ficha continua sendo uma aplicação comprovada.
- `recoverable-error-states` — passa a **validated**: a #234 é a primeira aplicação real comprovada, com deploy e captura depois do merge. Ainda não é `stable`, pois falta um segundo projeto independente.

## Issues derivadas

- #227 — fechada pela #229.
- #228 — aberta; dívida distinta sobre identidade do commit nas capturas de PR.
- #230 — fechada pela #232.
- #233 — fechada pela #234; critério de erro compreensível e próximo passo seguro comprovado depois do merge.

## O que o Cobogó deve aprender desta Ficha

Uma mensagem de erro melhor não precisa inventar recuperação que o produto não possui. A Ficha preserva agência oferecendo uma alternativa pública que já faz parte de sua própria tese — o manifesto da base — e mantém o diagnóstico técnico fora da mensagem principal. Isso valida o princípio sem padronizar aparência nem texto entre projetos.
