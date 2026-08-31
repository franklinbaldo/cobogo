---
type: ConsumerCard
repo: franklinbaldo/franklinbaldo.github.io
site: https://franklinbaldo.github.io/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Franklin blog

## Identidade local

Blog pessoal e jardim digital: preservar a voz editorial, leitura longa, rotas bilíngues, Fraunces/Inter, arquivo e superfícies autorais como Hrönir, música e livros. Cobogó pode fornecer relações e critérios, mas não deve transformar a publicação numa interface editorial genérica.

## D1 — no site

O leitor pode ler ensaios e caminhos de leitura, navegar arquivo, tags e busca, alternar entre rotas EN/PT, explorar projetos, ranking Hrönir, música, livros e changelog e assinar RSS.

**Gap [fato]:** nenhum gap D1 material comprovado nesta rodada. Existem pressões UX/a11y locais, mas não foram confundidas com ausência da capacidade pública.

## D2 — por trás

O repositório prova Astro 7 + MDX + Pico.css, Pagefind, publicação em GitHub Pages e Hrönir como curadoria pairwise persistida e projetada no ranking público. O Colophon/Colofão explica progressivamente parte dessa maquinaria. Em 2026-08-31 a #1620 corrigiu o claim obsoleto de `system fonts` / `fontes do sistema` para a tipografia realmente embarcada: Fraunces no corpo e Inter na UI.

**Gap [fato]:** nenhum gap D2 material restante após #1620; o artefato Pages foi construído e implantado com sucesso no merge `e55b0bdf3af846f658b6c9f22825ce1d1c7ed916`.

## D3 — por conta própria

O leitor pode consumir RSS EN/PT, usar arquivo/busca sem contexto adicional, inspecionar o source público e reproduzir o site a partir do checkout documentado. O ranking Hrönir projeta dados versionados no repositório para uma superfície pública de curadoria.

**Gap [fato]:** nenhum gap D3 material comprovado nesta rodada.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-08-31`. #1620 foi mergeada em `e55b0bdf3af846f658b6c9f22825ce1d1c7ed916`; Deploy to GitHub Pages run `33405038353` concluiu build, upload do artefato e deploy com sucesso no mesmo SHA.
- **Captura visual** — `last_verified: 2026-08-31`. O repo mantém `scripts/screenshots.mjs` com Playwright. As rotas `/about/` e `/pt/about/` não fazem parte do conjunto atual de screenshots; a #1620 é estritamente editorial, sem CSS, geometria, estado, motion ou estrutura de componente, e não conta como evidência visual para promoção de pattern.
- **Smoke/CI** — `last_verified: 2026-08-31`. #1620 passou integralmente o workflow `Check` run `33404379245` no head exato `0c6ce0d420fc15000d9519958e4ae6ac313fa29a`, incluindo lint, unit tests, Hrönir doctor, links, traduções, Astro type check, build e Lighthouse.
- **Preservação** — `last_verified: 2026-08-31`. Nenhum Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

A combinação entre Colophon curto, publicação pessoal e superfícies autorais mostra uma boa forma local de explicar maquinaria sem deslocar a leitura para documentação técnica. Nesta rodada isso exigiu apenas correção factual; não há novo conceito com evidência suficiente para registrar ou promover.

## Padrões do Cobogó em uso

- Explicação progressiva da maquinaria sem transformar a superfície em README técnico.
- Claims públicos precisam permanecer compatíveis com o repo atual.
- Foco explícito e integrado à identidade local nas superfícies interativas de música.
- Configuração, execução, publicação e evidência visual permanecem classes separadas.

## Histórico

- 2026-08-31 — #1620 mergeada em `e55b0bdf`: Colophon/Colofão deixa de afirmar fontes do sistema e passa a refletir Fraunces/Inter; Pages verde no mesmo SHA.
- 2026-08-31 — ProjectProfile confirma política de merge reconciliada por #1618; antiga divergência merge-commit vs squash não é mais fato atual.
- 2026-08-18 — README passou a expor site e superfície real do produto, além de reconciliar Astro 7 / Node >=24.
- 2026-08-15 — #1547 adicionou foco visível aos thumbnails interativos de Favorites/Recently played sem alterar geometria.
