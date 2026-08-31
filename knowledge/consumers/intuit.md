---
type: ConsumerCard
repo: franklinbaldo/intuit
site: https://franklinbaldo.github.io/intuit/
status: active
last_reviewed: 2026-08-31
gap_score: 1
---

# Intuit

## Identidade local

Preservar o chrome Apple-inspired, gradientes azul/roxo, light/dark theme, interação direta e compacta do workspace e a linguagem própria de ferramenta de visual testing. Cobogó não deve transformar Intuit em dashboard nem substituir sua estética local.

## D1 — no site

A pessoa pode editar/colar HTML, renderizar no preview, copiar link, atualizar a URL, limpar o editor, alternar scripts no sandbox e alternar tema. O preview é uma região nomeada e o iframe tem título acessível. Desde #24, erros dinâmicos são uma região de alerta e `Editor actions` / `Preview settings` são grupos semânticos nomeados.

Gap `[fato]`: `franklinbaldo/intuit#14` ainda registra foco visual explícito e `prefers-reduced-motion` como trabalho residual de acessibilidade. A #24 fechou apenas a fatia semântica e deliberadamente não alterou pixels/animação.

## D2 — por trás

Conforme o `ProjectProfile`, Intuit é um renderer HTML/visual-testing client-side cujo valor é a relação imediata fonte/edit → preview renderizado, não virar IDE genérica. O default continua `sandbox=""`; scripts são opt-in; o preview usa `srcdoc`, sem depender de acesso parent-side ao documento de origem opaca. O estado pode vir de `?data=`, `?b64=` ou Gist.

Gap `[fato]`: nenhum material. README, source e `ProjectProfile` concordam com a finalidade e com a fronteira de segurança atual.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. O README documenta exemplos dos parâmetros e o fluxo local. Não há GitHub Release publicada nem dataset/API autônoma adicional.

Gap `[fato]`: nenhum material estabelecido; a ausência de release não esconde uma capacidade existente nem é apresentada como distribuição pronta.

## Capacidades de superfície

- GitHub Pages — `last_verified: 2026-08-31`; deploy do merge #24 (`65f0decbb225d78a1277265023634133abf98322`) verde.
- Gate de superfície — `last_verified: 2026-08-31`; PR #24 head `3789c9c5e7d97f2239ec3f12448eca63e7fb9630` passou workflow `Test` completo antes do merge, incluindo unit + Playwright Chromium.
- Smoke/browser tests — `last_verified: 2026-08-31`; Playwright cobre editor → preview, URL/Base64/theme e semântica acessível; #24 acrescentou proteção explícita de `sandbox=""` + `srcdoc`.
- Captura visual versionada — `last_verified: 2026-08-31`; ausente. CI/Pages verdes não são screenshot e não contam como evidência de promoção visual.
- Preservação — `last_verified: 2026-08-31`; estado transportável por URL/Gist, sem capacidade de Save Page Now registrada no repo.

## O que este consumer faz melhor que o Cobogó

Nenhuma entrada nova promovida nesta rodada. Intuit continua evidência local forte para a relação editor → preview e para `Parentesco sem uniformidade`, mas sem captura before/after não aumenta o gate de promoção compartilhada.

## Padrões do Cobogó em uso

Nenhum pattern compartilhado adotado como dependência. O consumer funciona como pressure test para a investigação editor/preview (`cobogo#277`), sem implicar adoção de código Cobogó.

## Histórico

- 2026-08-31 — #24 reaplicou sobre `main` apenas o residual semântico de #14: alert + grupos nomeados + testes, preservando `sandbox=""`/`srcdoc`; #15 foi encerrada como supersedida.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
- 2026-08-16 — card registrava Intuit como candidate/pressure test, sem adoção Cobogó.
