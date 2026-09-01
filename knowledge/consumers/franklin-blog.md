---
type: ConsumerCard
repo: franklinbaldo/franklinbaldo.github.io
site: https://franklinbaldo.github.io/
status: active
last_reviewed: 2026-09-01
gap_score: 1
---

# Franklin blog

## Identidade local

Blog pessoal e jardim digital: preservar a voz editorial, leitura longa, rotas bilíngues, Fraunces/Inter, arquivo e superfícies autorais como Hrönir, música, livros e audiolivros. Cobogó pode fornecer relações e critérios, mas não deve transformar a publicação numa interface editorial genérica.

## D1 — no site

O leitor pode ler ensaios e caminhos de leitura, navegar arquivo, tags e busca, alternar entre rotas EN/PT, explorar projetos, ranking Hrönir, música, livros e changelog, assinar RSS e acessar diretamente o catálogo `/audiobooks/`, que lista obras e seus estados de preparação/publicação.

**Gap [fato]:** `/audiobooks/` já existe em `main`, mas `Header.astro` e `Footer.astro` não oferecem caminho global para essa superfície. O gap de descoberta está rastreado em `franklinbaldo/franklinbaldo.github.io#1637` e exige before/after visual antes de merge.

## D2 — por trás

O repositório prova Astro 7 + MDX + Pico.css, Pagefind, publicação em GitHub Pages e Hrönir como curadoria pairwise persistida e projetada no ranking público. O Colophon/Colofão explica progressivamente parte dessa maquinaria. A camada Audiobook Factory também está incorporada: catálogo derivado de manifests, páginas por obra/capítulo, geração de feed condicionada ao estado da obra e contratos OKF para produção/podcast.

**Gap [fato]:** nenhum gap D2 separado nesta rodada. A maquinaria de audiolivros é real, mas claims públicos devem respeitar o estado de cada obra; em particular, HPMOR mantém `podcast.enabled: false` no estado observado.

## D3 — por conta própria

O leitor pode consumir RSS EN/PT, usar arquivo/busca sem contexto adicional, inspecionar o source público e reproduzir o site a partir do checkout documentado. O ranking Hrönir projeta dados versionados no repositório para uma superfície pública de curadoria. A fábrica de audiolivros expõe estrutura reproduzível no source, mas feeds por obra só são publicados quando o manifest habilita podcast.

**Gap [fato]:** nenhum gap D3 material independente do problema de descoberta D1; não há base para anunciar feed HPMOR ativo.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-01`. `main` observado em `b5492e69a2bc4298b2f1886521d234fb6b7f5f16`; Deploy to GitHub Pages run `33498944159` concluiu `success` no mesmo SHA.
- **Captura visual** — `last_verified: 2026-08-31`. O repo mantém `scripts/screenshots.mjs` com Playwright e captura a home em desktop/mobile. Nesta rodada a capacidade não pôde ser executada antes da intervenção, portanto a mudança de navegação não virou PR e permanece gate explícito em #1637.
- **Smoke/CI** — `last_verified: 2026-08-31`. A última revisão substantiva de superfície registrada passou integralmente o workflow `Check`; nesta rodada não houve PR nova para produzir novo head de CI.
- **Preservação** — `last_verified: 2026-08-31`. Nenhum Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

A combinação entre Colophon curto, publicação pessoal e superfícies autorais mostra uma boa forma local de explicar maquinaria sem deslocar a leitura para documentação técnica. A Audiobook Factory reforça a mesma ideia, mas ainda não há segunda evidência convergente nem before/after fechado que permita promover novo conceito/pattern nesta rodada.

## Padrões do Cobogó em uso

- Explicação progressiva da maquinaria sem transformar a superfície em README técnico.
- Claims públicos precisam permanecer compatíveis com o repo atual.
- Foco explícito e integrado à identidade local nas superfícies interativas de música.
- Configuração, execução, publicação e evidência visual permanecem classes separadas.

## Histórico

- 2026-09-01 — camada pública `/audiobooks/` reconciliada no card; gap de descoberta global registrado em #1637; `gap_score: 1`.
- 2026-08-31 — #1620 mergeada em `e55b0bdf`: Colophon/Colofão deixa de afirmar fontes do sistema e passa a refletir Fraunces/Inter; Pages verde no mesmo SHA.
- 2026-08-31 — ProjectProfile confirma política de merge reconciliada por #1618; antiga divergência merge-commit vs squash não é mais fato atual.
- 2026-08-18 — README passou a expor site e superfície real do produto, além de reconciliar Astro 7 / Node >=24.
- 2026-08-15 — #1547 adicionou foco visível aos thumbnails interativos de Favorites/Recently played sem alterar geometria.
