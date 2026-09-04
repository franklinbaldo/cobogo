---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-03
commit: 044ab1c205b30d6db96d33fccd27275a13fe0fec
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33824226715
capture: artifact:9919363546
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
trend: up
---

# Ficha — avaliação de qualidade da superfície

## Veredito

**22 de 24 pontos — faixa de referência.** Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 4 e Confiança 3.

A avaliação agora aponta para `044ab1c205b30d6db96d33fccd27275a13fe0fec`, commit que realmente entrou em `main` depois da #238. Nesse commit, CI `33824226664`, observação visual e semântica `33824226663` e deploy `33824226715` concluíram com sucesso.

## Clareza / D1

**4/4.** A página continua deixando evidente que a ação principal é consultar uma empresa brasileira e abrir sua ficha pública.

## Explicabilidade / D2

**4/4.** Receita Federal, competência, série histórica, preservação e estado da consulta continuam próximos do conteúdo que explicam.

## Autonomia / D3

**4/4.** `manifest.json` e os arquivos públicos permanecem um caminho reutilizável fora da interface.

## UX

**3/4.** A primeira dobra e o estado de indisponibilidade são coerentes em desktop e celular, mas a observação automatizada ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos.

## UI

**4/4.** A composição continua uma referência útil de identidade local construída por estrutura, título, inscrição, linhas e espaço, sem depender de um cartão genérico nem copiar outro projeto Cobogó.

## Confiança

**3/4.** A #238 acrescentou uma prova automatizada real de acessibilidade no navegador. No arquivo `9919363546`, `accessibility-evidence.json` registra `044ab1c...`, zero violações sérias ou críticas do axe, sete controles visíveis esperados e sete alcançados por `Tab`, nenhum controle não alcançado e zero passos sem indicador perceptível de foco.

O mesmo commit foi publicado pelo deploy `33824226715`. O passo posterior à publicação confirmou a home em HTTP 200, leu `manifest.json` e verificou os arquivos essenciais do snapshot público.

A nota permanece 3 por duas diferenças concretas. Primeiro, axe + teclado + foco são medidos no build servido pelo workflow visual, não novamente contra a URL já publicada. Segundo, a issue #228 ainda não está totalmente resolvida: no arquivo da PR `9917942074`, o nome do arquivo e `accessibility-evidence.json` usam corretamente o commit real da branch `565267e9...`, mas `visual-evidence/capture-state.json` ainda registra o commit temporário de teste `4ee7ad95...`.

## Recomendações Cobogó

- `semantic-accessibility-default` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais. A Ficha passa a executar o contrato em seu build de `main`, preservando sua própria identidade.
- `visual-evidence-as-quality-gate` — **stable**.
- `primary-action-viewport-containment` — **validated**.
- `recoverable-error-states` — **validated**.
- `content-hierarchy-before-decoration` — **validated**.

## Issues derivadas

- #228 — continua aberta parcialmente: falta o JSON da captura visual de PR identificar sem ambiguidade o commit real da branch.

## O que o Cobogó aprende desta aplicação

Um contrato de acessibilidade compartilhado pode atravessar uma página editorial de dados sem impor componentes ou aparência. O limite também ficou mais claro: passar o contrato no build e publicar o mesmo commit são duas provas fortes, mas não equivalem a medir novamente a semântica na URL publicada. Confiança 4 exige fechar essa diferença ou produzir evidência equivalente.
