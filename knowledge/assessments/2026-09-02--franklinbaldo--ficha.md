---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-02
commit: ca67d1c15fd60e02e574d6a429a5686b0bded7d4
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33601434385
capture: artifact:9833746642
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 2
  ui: 1
  trust: 3
total: 18
band: good
blockers: []
trend: flat
---

# Ficha — Surface Quality Assessment

## Veredito

**18/24 — boa; baseline canônico mantido até a recaptura pós-merge.** O assessment de referência ainda aponta para o landing/captura que revelou o defeito estreito. A #229 já corrigiu o clipping no artifact do head e foi publicada com deploy verde, mas o workflow atual não produz uma captura de `main` após o merge. Pela regra de evidência do Cobogó, o score não é reescrito com base apenas em equivalência de código: a nova nota depende do after pós-merge.

## Clareza / D1

**4/4.** A home diz diretamente `Entenda uma empresa e suas conexões públicas`, explica a origem CNPJ/Receita Federal e coloca a busca como ação principal.

Gap: nenhum de conteúdo.

## Explicabilidade / D2

**4/4.** A própria superfície expõe origem, competência, preservação, verificação e estado. O leitor consegue perceber que o site consulta dados públicos preservados e verificáveis, em vez de uma base opaca do frontend.

Gap: nenhum material observado.

## Autonomia / D3

**4/4.** `Levar a base` e `Abrir manifest.json` tornam o contrato reutilizável fora da interface; snapshots preservados e checksums públicos sustentam o caminho independente.

Gap: nenhum material observado.

## UX

**2/4 no baseline canônico.** O fluxo é curto e a arquitetura de informação é boa, mas a captura de referência em `390×844` ainda é a que mostra a ação primária parcialmente cortada. No artifact do head da #229 (`9837261361`), a ação passa a reflowar e fica integralmente visível; esse ganho permanece provisório para scoring até a recaptura do landing `2e2adfa…`.

Gap residual independente: no estado `remote-data-unavailable`, a superfície mostra uma mensagem técnica longa de transporte e pouca orientação de recuperação para leitor comum.

## UI

**1/4 no baseline canônico.** A evidência que sustenta a nota continua sendo artifact `9833746642`, onde `Buscar` aparece cortado em 390×844. A #229 alterou somente o mapeamento CSS local e seu artifact `9837261361` mostra o input + CTA contidos no viewport estreito e desktop sem regressão. Como a mudança é visualmente material e ainda não existe after de `main`, o Cobogó não promove a nota nesta rodada.

Critério pendente: recapturar `/ficha/` em `390×844` e `1280×900` no landing SHA `2e2adfa7c57cc5b80f504d1a9d0aa657abf94317` pelo mesmo método Playwright/Chromium.

## Confiança

**3/4.** Proveniência e integridade continuam fortes. CI e Deploy site do landing da #229 concluíram `success`. A confiança não sobe porque a cadeia visual ainda tem duas dívidas factuais: #228 corrige a identidade do head em eventos `pull_request`, e #230 exige recaptura automática do SHA de `main` depois do merge.

## Blockers

Nenhuma dimensão 0. Para atualizar este assessment após #229, o blocker de evidência é #230: não há after pós-merge ligado ao landing SHA.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — `stable`.
- `primary-action-viewport-containment` — permanece `opinionated`: #229 é uma aplicação tecnicamente e visualmente bem-sucedida no head, mas a validação completa exige o after do conteúdo efetivamente mergeado/publicado.

## Issues derivadas

- `franklinbaldo/ficha#227` — fechada pela #229; implementação presente em `main`.
- `franklinbaldo/ficha#228` — registrar head SHA real, não merge-ref, em captura de PR.
- `franklinbaldo/ficha#230` — executar a mesma captura em `main` após merge para fechar causalmente mudanças visuais.

## O que o Cobogó deve aprender deste consumer

A evidência de PR pode ser forte o bastante para decidir merge, mas não substitui a recaptura do landing quando o contrato da rotina exige before/after pós-deploy. Cobogó deve manter separadas três identidades: head da PR, merge-ref de teste e landing SHA em `main`.
