---
type: ConsumerCard
repo: franklinbaldo/intuit
site: https://franklinbaldo.github.io/intuit/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Intuit

## Identidade local

Preservar o chrome Apple-inspired, gradientes azul/roxo, light/dark theme, interação direta e compacta do workspace e a linguagem própria de ferramenta de visual testing. Cobogó não deve transformar Intuit em dashboard nem substituir sua estética local.

## D1 — no site

A pessoa pode editar/colar HTML, renderizar no preview, copiar link, atualizar a URL, limpar o editor, alternar scripts no sandbox e alternar tema. O preview é uma região nomeada e o iframe tem título acessível. Erros dinâmicos são uma região de alerta e `Editor actions` / `Preview settings` são grupos semânticos nomeados. Desde #27, os controles principais também exibem foco explícito para teclado e as transições/hover scaling relevantes respeitam `prefers-reduced-motion`.

Gap `[fato]`: nenhum material. O baseline de 2026-09-02 confirmou a tarefa principal também em viewport estreito.

## D2 — por trás

Conforme o `ProjectProfile`, Intuit é um renderer HTML/visual-testing client-side cujo valor é a relação imediata fonte/edit → preview renderizado, não virar IDE genérica. O default continua `sandbox=""`; scripts são opt-in; o preview usa `srcdoc`, sem depender de acesso parent-side ao documento de origem opaca. O estado pode vir de `?data=`, `?b64=` ou Gist.

Gap `[fato]`: nenhum material. A home explica a finalidade imediata; README/source sustentam a fronteira técnica. O inventário do workspace ainda precisa incorporar a capacidade de captura já devolvida em `workspace#27`.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. O README documenta exemplos dos parâmetros e o fluxo local. Não há GitHub Release publicada nem dataset/API autônoma adicional.

Gap `[fato]`: nenhum material; a ausência de release não esconde capacidade existente.

## Capacidades de superfície

- GitHub Pages — `last_verified: 2026-09-02`; merge #28 em `34a3102a61d3676e34597d20606ffe3a53bdfe3d`, deploy run `33593643062` concluído `success`.
- Gate de superfície — `last_verified: 2026-09-02`; PR #28 head `046f7330a417da385520f360c9d2d045a6ab2947` passou Test, Visual capture e GitGuardian antes do merge.
- Smoke/browser tests — `last_verified: 2026-09-02`; Playwright cobre editor → preview, URL/Base64/theme, semântica acessível, foco por teclado e reduced-motion.
- Captura visual versionada — `last_verified: 2026-09-02`; #28 ampliou a capacidade para `1440x900` + `390x844` no mesmo artifact, com provenance por SHA. After pós-merge: run `33593643021`, artifact `intuit-home-34a3102a61d3676e34597d20606ffe3a53bdfe3d` (id `9832628580`).
- Preservação — `last_verified: 2026-09-02`; estado transportável por URL/Gist; sem Save Page Now registrada.

## O que este consumer faz melhor que o Cobogó

Intuit demonstra uma forma particularmente barata de tornar avaliação visual causal: o mesmo workflow browser produz desktop e narrow, ligados ao SHA, sem alterar a identidade do produto. Foco explícito + reduced-motion também permanecem solução local comprovada. Uma evidência local pode validar uma opinião Cobogó; múltiplos consumers convergentes determinam maturidade `stable`, não permissão para formular a regra.

## Padrões do Cobogó em uso

- `visual-evidence-as-quality-gate` — aplicado pela capacidade de captura causal; #28 adicionou viewport estreito para que responsividade também seja observável.
- Nenhum componente compartilhado adotado como dependência; o consumer continua pressure test para editor/preview (`cobogo#277`).

## Histórico

- 2026-09-02 — #28 adicionou captura narrow no mesmo artifact causal; primeiro `SurfaceQualityAssessment` completo: 20/24, faixa boa; `gap_score: 0` preservado.
- 2026-09-01 — revalidação sem mudança de superfície; Pages/Test/Visual capture verdes; `workspace#27` segue aberto.
- 2026-08-31 — #27 fechou foco explícito por teclado + reduced-motion, com gates e after reproduzível.
- 2026-08-31 — #26 adicionou captura visual reproduzível com provenance por SHA.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
