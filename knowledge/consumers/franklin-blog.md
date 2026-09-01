---
type: ConsumerCard
repo: franklinbaldo/franklinbaldo.github.io
site: https://franklinbaldo.github.io/
status: active
last_reviewed: 2026-09-01
gap_score: 0
---

# Franklin blog

## Identidade local

Blog pessoal e jardim digital: preservar a voz editorial, leitura longa, rotas bilíngues, Fraunces/Inter, arquivo e superfícies autorais como Hrönir, música, livros e audiolivros. Cobogó pode fornecer relações e critérios, mas não deve transformar a publicação numa interface editorial genérica.

## D1 — no site

O leitor pode ler ensaios e caminhos de leitura, navegar arquivo, tags e busca, alternar entre rotas EN/PT, explorar projetos, ranking Hrönir, música, livros, audiolivros e changelog, assinar RSS e acessar o catálogo `/audiobooks/` pela navegação global secundária.

**Gap [fato]:** nenhum gap D1 material nesta rodada. A #1640 adicionou `Audiobooks` / `Audiolivros` à hierarquia secundária de Header e Footer; o merge `eebbe97af4e3aaf71b8a45b5752056dcf158122d` tem before/after pelo mesmo harness, o rerun do Pages `33535970297` concluiu `success` e a home pública verificada mostra `Audiobooks` tanto no grupo `More` quanto no Footer.

## D2 — por trás

O repositório prova Astro 7 + MDX + Pico.css, Pagefind, publicação em GitHub Pages e Hrönir como curadoria pairwise persistida e projetada no ranking público. O Colophon/Colofão explica progressivamente parte dessa maquinaria. A camada Audiobook Factory também está incorporada: catálogo derivado de manifests, páginas por obra/capítulo, geração de feed condicionada ao estado da obra e contratos OKF para produção/podcast.

**Gap [fato]:** nenhum gap D2 separado nesta rodada. A maquinaria de audiolivros é real, mas claims públicos devem respeitar o estado de cada obra; em particular, HPMOR mantém `podcast.enabled: false` no estado observado.

## D3 — por conta própria

O leitor pode consumir RSS EN/PT, usar arquivo/busca sem contexto adicional, inspecionar o source público e reproduzir o site a partir do checkout documentado. O ranking Hrönir projeta dados versionados no repositório para uma superfície pública de curadoria. A fábrica de audiolivros expõe estrutura reproduzível no source, mas feeds por obra só são publicados quando o manifest habilita podcast.

**Gap [fato]:** nenhum gap D3 material; não há base para anunciar feed HPMOR ativo.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-01`. Merge `eebbe97af4e3aaf71b8a45b5752056dcf158122d`, run `33535970297`: tentativa 1 falhou em `actions/deploy-pages` após build verde; tentativa 2 concluiu `success` no mesmo SHA. A home pública foi verificada depois e já expõe `Audiobooks` no Header/More e no Footer.
- **Captura visual** — `last_verified: 2026-09-01`. `scripts/screenshots.mjs` é executado pelo workflow `Visual evidence` em PR e push para `main`, com artifacts endereçados pelo SHA. Before: head `6503538c187bd6cb860252dd1865ef7bdb2199f5`, artifact `9806697863`; after em `main`: `eebbe97af4e3aaf71b8a45b5752056dcf158122d`, artifact `9811726761`.
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

- 2026-09-01 — rerun do Pages `33535970297` ficou verde no merge #1640; home publicada confirmou `Audiobooks` no Header/More e Footer; #1637/#1645 fechadas e `gap_score: 0`.
- 2026-09-01 — deploy do merge #1640 falhou após build verde; #1645 abriu o bloqueio operacional sem reverter a superfície.
- 2026-09-01 — #1640 mergeada em `eebbe97a`: Header/Footer ganham audiolivros e evidência visual passa a ser artifact de CI.
- 2026-09-01 — camada pública `/audiobooks/` reconciliada no card; gap de descoberta global registrado em #1637.
- 2026-08-31 — #1620 mergeada em `e55b0bdf`: Colophon/Colofão deixa de afirmar fontes do sistema e passa a refletir Fraunces/Inter; Pages verde no mesmo SHA.
