---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-04
commit: 05aa359f63718ebf5e0a8bd4920c189c24d73813
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33853865948
capture: artifact:9929398297
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 4
  trust: 3
total: 22
band: reference
blockers: []
trend: flat
---

# Ficha — avaliação de qualidade da interface pública

## Veredito

**22 de 24 pontos — faixa de referência.** Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 4 e Confiança 3.

A rodada resolveu uma inconsistência concreta da prova visual: em pull requests, o pacote produzido e o JSON de acessibilidade já identificavam o commit real da branch, mas `capture-state.json` podia registrar o commit temporário criado pelo GitHub para testar o merge. A #239 corrigiu essa diferença e a própria execução da PR comprovou o contrato. A nota permanece 22/24 porque ainda existe outra diferença independente em Confiança: axe, teclado e foco são medidos no build, não novamente na URL pública depois da publicação.

## Clareza / D1

**4/4.** A página continua deixando evidente que a ação principal é consultar uma empresa brasileira e abrir sua ficha pública. Não houve mudança de interface nesta rodada.

Problema material observado: nenhum.

## Explicabilidade / D2

**4/4.** Receita Federal, competência, série histórica, preservação e estado da consulta continuam próximos do conteúdo que explicam. A correção desta rodada não altera tese nem linguagem pública.

Problema material observado: nenhum.

## Autonomia / D3

**4/4.** `manifest.json` e os arquivos públicos continuam oferecendo caminho reutilizável fora da interface.

Problema material observado: nenhum.

## UX

**3/4.** A primeira dobra e o estado de indisponibilidade continuam coerentes em desktop e celular, mas a observação automatizada ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos. A rodada não produziu fato novo suficiente para alterar esta nota.

## UI

**4/4.** A composição permanece uma referência útil de identidade local construída por título, ordem, linhas, inscrições e espaço. Não houve mudança visual; a execução de `main` continuou produzindo as duas larguras previstas sem regressão observada.

## Confiança

**3/4.** A #239 entrou em `main` como `05aa359f63718ebf5e0a8bd4920c189c24d73813`. Antes do merge, o commit real da branch era `301de4efea1188101b992708ec3fb374f1d20dd2`: CI, GitGuardian e o workflow `Visual capture` ficaram verdes nesse mesmo commit. O pacote da PR foi nomeado com `301de4ef...`, e a inspeção de `visual-evidence/capture-state.json` e `accessibility-evidence.json` mostrou os dois registrando exatamente esse mesmo commit.

Depois do merge, CI `33853865906`, observação visual `33853865990` e publicação `33853865948` terminaram com sucesso em `05aa359f...`. O pacote `9929398297`, produzido por `main`, registra o mesmo commit tanto no JSON visual quanto no JSON de acessibilidade. A auditoria de build permaneceu verde: zero violações sérias ou críticas do axe, sete de sete controles visíveis alcançados por teclado, nenhum controle ausente e nenhum passo sem indicador perceptível de foco.

A #228 foi encerrada porque sua condição objetiva foi cumprida. Confiança não sobe para 4: a #240 registra a diferença restante entre provar o build e executar o mesmo contrato semântico diretamente contra `https://franklinbaldo.github.io/ficha/` depois do deploy.

## Impedimentos objetivos

nenhum para a mudança desta rodada.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais. A aplicação na Ficha reforça que o arquivo produzido precisa identificar sem ambiguidade o commit realmente avaliado.
- `semantic-accessibility-default` — **stable**. O contrato continua verde no build real em Chromium; a #240 explicita o que falta para provar a mesma coisa na página publicada.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real.
- `recoverable-error-states` — **validated**.
- `content-hierarchy-before-decoration` — **validated**.

## Issues derivadas

- #228 — encerrada pela #239: pacote, JSON visual e JSON de acessibilidade passaram a concordar sobre o commit real avaliado.
- #240 — aberta: repetir axe, teclado e foco contra a URL publicada depois do deploy.

## O que o Cobogó deve aprender deste projeto

Uma prova pode ser tecnicamente rica e ainda ficar ambígua se os arquivos dentro do mesmo pacote nomearem revisões diferentes. A identidade da revisão observada faz parte do contrato de qualidade, não é mero detalhe de CI. Ao mesmo tempo, corrigir proveniência não autoriza elevar a nota de Confiança quando outra pergunta factual continua sem resposta.