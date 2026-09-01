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

**Gap [fato]:** a PR `franklinbaldo/franklinbaldo.github.io#1640` já adicionou `Audiobooks` / `Audiolivros` à hierarquia secundária de Header e Footer e foi mergeada em `eebbe97af4e3aaf71b8a45b5752056dcf158122d`; a captura pós-merge no mesmo SHA mostra a nova entrada no Footer sem promoção a CTA principal. O gap D1 ainda não é marcado como fechado porque o run `Deploy to GitHub Pages` `33535970297` permanecia em `in_progress` na última verificação desta rodada. A conclusão exige Pages verde nesse merge SHA.

## D2 — por trás

O repositório prova Astro 7 + MDX + Pico.css, Pagefind, publicação em GitHub Pages e Hrönir como curadoria pairwise persistida e projetada no ranking público. O Colophon/Colofão explica progressivamente parte dessa maquinaria. A camada Audiobook Factory também está incorporada: catálogo derivado de manifests, páginas por obra/capítulo, geração de feed condicionada ao estado da obra e contratos OKF para produção/podcast.

**Gap [fato]:** nenhum gap D2 separado nesta rodada. A maquinaria de audiolivros é real, mas claims públicos devem respeitar o estado de cada obra; em particular, HPMOR mantém `podcast.enabled: false` no estado observado.

## D3 — por conta própria

O leitor pode consumir RSS EN/PT, usar arquivo/busca sem contexto adicional, inspecionar o source público e reproduzir o site a partir do checkout documentado. O ranking Hrönir projeta dados versionados no repositório para uma superfície pública de curadoria. A fábrica de audiolivros expõe estrutura reproduzível no source, mas feeds por obra só são publicados quando o manifest habilita podcast.

**Gap [fato]:** nenhum gap D3 material independente do problema de descoberta D1; não há base para anunciar feed HPMOR ativo.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-01`. Último deploy concluído previamente verificado: `main` em `b5492e69a2bc4298b2f1886521d234fb6b7f5f16`, run `33498944159` `success`. Para o merge `eebbe97af4e3aaf71b8a45b5752056dcf158122d`, o build do run `33535970297` passou, mas o job `deploy` ainda estava `in_progress` na última leitura; esse SHA ainda não conta como deploy verificado.
- **Captura visual** — `last_verified: 2026-09-01`. `scripts/screenshots.mjs` agora é executado pelo workflow `Visual evidence` em PR e push para `main`, com artifacts endereçados pelo SHA. Before: head `6503538c187bd6cb860252dd1865ef7bdb2199f5`, artifact `9806697863`; after em `main`: `eebbe97af4e3aaf71b8a45b5752056dcf158122d`, artifact `9811726761`. A home desktop foi capturada pelo mesmo método nas duas pontas.
- **Smoke/CI** — `last_verified: 2026-09-01`. No head exato `a03c3670ca95100ae9bc638e7633a0efa13f7088` da #1640, `Change cards` (`33535276185`), `Visual evidence` (`33535276198`) e `Check` (`33535276367`) concluíram `success` antes do squash merge.
- **Preservação** — `last_verified: 2026-08-31`. Nenhum Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [`commit-addressed-visual-evidence`](../concepts/commit-addressed-visual-evidence.md) — transforma o harness local de screenshots em artifacts de CI causalmente ligados ao head/merge SHA, permitindo before/after reproduzível mesmo sem runtime local disponível para a rotina.

## Padrões do Cobogó em uso

- Explicação progressiva da maquinaria sem transformar a superfície em README técnico.
- Claims públicos precisam permanecer compatíveis com o repo atual.
- Foco explícito e integrado à identidade local nas superfícies interativas de música.
- Configuração, execução, publicação e evidência visual permanecem classes separadas.

## Histórico

- 2026-09-01 — #1640 mergeada em `eebbe97a`: Header/Footer ganham audiolivros e evidência visual passa a ser artifact de CI; fechamento D1 aguarda Pages verde no merge SHA.
- 2026-09-01 — camada pública `/audiobooks/` reconciliada no card; gap de descoberta global registrado em #1637; `gap_score: 1`.
- 2026-08-31 — #1620 mergeada em `e55b0bdf`: Colophon/Colofão deixa de afirmar fontes do sistema e passa a refletir Fraunces/Inter; Pages verde no mesmo SHA.
- 2026-08-31 — ProjectProfile confirma política de merge reconciliada por #1618; antiga divergência merge-commit vs squash não é mais fato atual.
- 2026-08-18 — README passou a expor site e superfície real do produto, além de reconciliar Astro 7 / Node >=24.
