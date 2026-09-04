---
type: ConsumerCard
repo: franklinbaldo/intuit
site: https://franklinbaldo.github.io/intuit/
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

# Intuit

## Identidade local

Preservar o chrome Apple-inspired, gradientes azul/roxo, light/dark theme, interação direta e compacta do workspace e a linguagem própria de ferramenta de visual testing. Cobogó não deve transformar Intuit em dashboard nem substituir sua estética local.

## D1 — no site

A pessoa pode editar/colar HTML, renderizar no preview, copiar link, atualizar a URL, limpar o editor, alternar scripts no sandbox e alternar tema. O preview é uma região nomeada e o iframe tem título acessível. Erros dinâmicos são uma região de alerta e `Editor actions` / `Preview settings` são grupos semânticos nomeados. Desde #27, os controles principais também exibem foco explícito para teclado e as transições/hover scaling relevantes respeitam `prefers-reduced-motion`.

Gap `[fato]`: nenhum material. A tarefa principal continua clara também em viewport estreito.

## D2 — por trás

Conforme o `ProjectProfile`, Intuit é um renderer HTML/visual-testing client-side cujo valor é a relação imediata fonte/edit → preview renderizado, não virar IDE genérica. O default continua `sandbox=""`; scripts são opt-in; o preview usa `srcdoc`, sem depender de acesso parent-side ao documento de origem opaca. O estado pode vir de `?data=`, `?b64=` ou Gist.

Desde #30, a própria interface explica antes da ativação que `Allow Scripts` deve ser usado apenas com HTML confiável porque reduz o isolamento do preview. O checkbox aponta semanticamente para essa explicação. O comportamento técnico continua o mesmo: ao optar por scripts, o iframe recebe `allow-scripts allow-same-origin allow-popups allow-forms`.

Gap `[fato]`: nenhum material novo; a profundidade pública continua adequada, mas ainda não é tratada como referência transversal.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. O README documenta exemplos dos parâmetros e o fluxo local. Não há GitHub Release publicada nem dataset/API autônoma adicional.

Gap `[fato]`: nenhum material; a ausência de release não esconde capacidade existente.

## Capacidades de superfície

- GitHub Pages — `last_verified: 2026-09-04`; #30 foi incorporada como `495e54b9841ba2e18fcd5f980e995a6072e92963` e o run `33835991124` publicou esse mesmo commit.
- Gate de superfície — `last_verified: 2026-09-04`; no commit final da branch #30, `03808f44fd0247ed41d7218fd805ba0380e56380`, GitGuardian, Test e Visual capture terminaram verdes antes do merge.
- Smoke/browser tests — `last_verified: 2026-09-04`; Playwright cobre editor → preview, URL/Base64/theme, semântica acessível, foco, reduced-motion e agora exige também a explicação de confiança associada a `Allow Scripts` e o sandbox antes/depois da ativação.
- Captura visual versionada — `last_verified: 2026-09-04`; além da captura de branch/main em `1440×900` + `390×844`, o workflow Pages agora abre a própria URL publicada depois do deploy. O arquivo `9923434999`, `intuit-published-495e54b9841ba2e18fcd5f980e995a6072e92963`, registra `phase=published`, commit, rota pública, as duas larguras e horário. As duas imagens foram inspecionadas e preservam composição/legibilidade local.
- Preservação — `last_verified: 2026-09-02`; estado transportável por URL/Gist; sem Save Page Now registrada.

## O que este consumer faz melhor que o Cobogó

Intuit demonstra uma forma barata de ligar revisão visual a um commit e agora também à página realmente publicada: o mesmo teste de screenshot pode apontar para o servidor local durante PR/main e para a URL Pages depois do deploy, sem criar uma segunda gramática visual.

A #30 também validou uma opinião nova do Cobogó: controles que reduzem proteção devem explicar a consequência antes da decisão. O aprendizado veio do mecanismo real do Intuit e foi aplicado sem importar aparência ou componente de outro projeto.

## Padrões do Cobogó em uso

- `visual-evidence-as-quality-gate` — aplicado pela capacidade de captura ligada ao commit; #28 adicionou viewport estreito e #30 estendeu a prova à URL publicada.
- `risk-changing-controls-explain-consequence` — `validated`: em português comum, já funcionou em pelo menos um projeto real, o Intuit, com teste, merge, publicação e captura posterior à publicação.
- Nenhum componente compartilhado adotado como dependência; o consumer continua preservando sua solução local.

## Histórico

- 2026-09-04 — #30 tornou explícita a consequência de `Allow Scripts`, adicionou teste de associação/comportamento e incorporou a captura da URL publicada ao workflow Pages. Merge `495e54b9`; run `33835991124`; arquivo publicado `9923434999` inspecionado em desktop e 390 px.
- 2026-09-02 — #28 adicionou captura narrow no mesmo arquivo de evidência; primeira avaliação completa: 20/24, faixa boa; `gap_score: 0` preservado.
- 2026-09-01 — revalidação sem mudança de superfície; Pages/Test/Visual capture verdes.
- 2026-08-31 — #27 fechou foco explícito por teclado + reduced-motion, com gates e verificação posterior reproduzível.
- 2026-08-31 — #26 adicionou captura visual reproduzível com proveniência por commit.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
