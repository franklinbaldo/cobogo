---
type: ConsumerCard
repo: franklinbaldo/intuit
site: https://franklinbaldo.github.io/intuit/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Intuit

## Identidade local

Preservar o chrome Apple-inspired, gradientes azul/roxo, light/dark theme, interação direta e compacta do workspace e a linguagem própria de ferramenta de visual testing. Cobogó não deve transformar Intuit em dashboard nem substituir sua estética local.

## D1 — no site

A pessoa pode editar/colar HTML, renderizar no preview, copiar link, atualizar a URL, limpar o editor, alternar scripts no sandbox e alternar tema. O preview é uma região nomeada e o iframe tem título acessível. Erros dinâmicos são uma região de alerta e `Editor actions` / `Preview settings` são grupos semânticos nomeados. Desde #27, os controles principais também exibem foco explícito para teclado e as transições/hover scaling relevantes respeitam `prefers-reduced-motion`.

Gap `[fato]`: nenhum material após #27. O residual de `franklinbaldo/intuit#14` foi fechado e provado por Playwright + captura visual reproduzível no mesmo fluxo de CI.

## D2 — por trás

Conforme o `ProjectProfile`, Intuit é um renderer HTML/visual-testing client-side cujo valor é a relação imediata fonte/edit → preview renderizado, não virar IDE genérica. O default continua `sandbox=""`; scripts são opt-in; o preview usa `srcdoc`, sem depender de acesso parent-side ao documento de origem opaca. O estado pode vir de `?data=`, `?b64=` ou Gist.

Gap `[fato]`: nenhum material. README, source e `ProjectProfile` concordam com a finalidade e com a fronteira de segurança atual; o inventário do workspace ainda precisa incorporar a nova capacidade de captura, já devolvida em `workspace#27`.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. O README documenta exemplos dos parâmetros e o fluxo local. Não há GitHub Release publicada nem dataset/API autônoma adicional.

Gap `[fato]`: nenhum material estabelecido; a ausência de release não esconde uma capacidade existente nem é apresentada como distribuição pronta.

## Capacidades de superfície

- GitHub Pages — `last_verified: 2026-08-31`; deploy do merge #27 (`8178f348600f231e567589e45174f4fc507f6986`) verde no run `33417946679`.
- Gate de superfície — `last_verified: 2026-08-31`; PR #27 head `27674167e4210949508098213da65a57e554c62b` passou `Test` run `33417741517` e `Visual capture` run `33417741529` antes do merge; `main` passou novamente em `Test` run `33417946657`.
- Smoke/browser tests — `last_verified: 2026-08-31`; Playwright cobre editor → preview, URL/Base64/theme, semântica acessível, foco por teclado e reduced-motion; #24 protege `sandbox=""` + `srcdoc`.
- Captura visual versionada — `last_verified: 2026-08-31`; workflow usa viewport `1440x900` e provenance por SHA. Before: run `33413210167`, artifact `intuit-home-2bbf3376e2b7f461ddd7e90e1a1a8cb791ac0d06` (id `9765969339`). After pós-merge: run `33417946698`, artifact `intuit-home-8178f348600f231e567589e45174f4fc507f6986` (id `9767763311`).
- Preservação — `last_verified: 2026-08-31`; estado transportável por URL/Gist; sem capacidade de Save Page Now registrada no repo.

## O que este consumer faz melhor que o Cobogó

Nenhuma entrada nova promovida nesta rodada. Intuit continua evidência local forte para a relação editor → preview e para `Parentesco sem uniformidade`. A combinação foco explícito + reduced-motion é uma solução local comprovada, mas não satisfaz sozinha o gate multi-consumer para promoção compartilhada.

## Padrões do Cobogó em uso

Nenhum pattern compartilhado adotado como dependência. O consumer funciona como pressure test para a investigação editor/preview (`cobogo#277`), sem implicar adoção de código Cobogó.

## Histórico

- 2026-08-31 — #27 fechou o residual D1: foco explícito por teclado + reduced-motion, com Test/Pages/Visual capture verdes em `8178f348` e after reproduzível.
- 2026-08-31 — #26 adicionou captura visual reproduzível da home com provenance por SHA e artifact de CI; Pages/Test/Visual capture verdes em `2bbf3376`.
- 2026-08-31 — #24 reaplicou sobre `main` apenas o residual semântico de #14: alert + grupos nomeados + testes, preservando `sandbox=""`/`srcdoc`; #15 foi encerrada como supersedida.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
- 2026-08-16 — card registrava Intuit como candidate/pressure test, sem adoção Cobogó.
