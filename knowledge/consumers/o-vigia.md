---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente de Porto Velho: texto e hierarquia editorial como estrutura principal, ritmo de leitura mais aberto que superfícies administrativas, voz jornalística própria e confiança apresentada em camadas. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

A home pública se apresenta como jornal local de Porto Velho e organiza notícia principal, destaques, próximos marcos, serviço e editorias sem esconder a ação básica de ler. Em 3 de setembro, a quarta rodada Ipanema consolidou o comportamento estreito: masthead reduzido, tagline removida no telefone e navegação que diferencia destinos editoriais de atalhos internos de módulo.

A busca textual deixou de fingir que consultava o acervo inteiro na própria capa: a home filtra apenas o que realmente está materializado ali e aponta explicitamente para a busca do arquivo. A hierarquia editorial continua local, com imagens condicionais por `media_url`, sem espaço vazio quando a matéria não possui mídia.

**Gap [fato]:** nenhum gap material de D1 observado na rodada. A tarefa editorial principal permanece evidente no desktop e no viewport estreito.

## D2 — por trás

O projeto é jornalismo cívico hiperlocal verificável. A própria superfície explica a proposta editorial (`Notícias da cidade, com a fonte à vista`) e expõe `Como apuramos`, correções e proveniência progressiva. A página de metodologia distingue fato, cálculo/derivação, inferência e incerteza e explica por que fonte oficial não é sinônimo de verdade automática.

O renderer público continua Astro SSG sobre o bundle editorial materializado. As rodadas visuais de 3 de setembro não alteraram conteúdo jornalístico nem a proveniência: reorganizaram a apresentação e reforçaram a separação entre identidade local e fundação compartilhada.

**Gap [fato]:** nenhum material. O leitor consegue entender por que o projeto existe e como trata evidência sem precisar conhecer a Redação privada.

## D3 — por conta própria

A superfície oferece RSS, arquivo, editorias e conteúdo sob CC BY 4.0. O repositório público preserva o estado canônico das matérias e projeções estáticas; a metodologia explicita que HTML, feed, sitemap e índices derivam do mesmo bundle público. Isso permite leitura, assinatura e reutilização editorial sem depender do pipeline privado.

**Gap [fato]:** nenhum material para o contrato publicado. O site não promete API/dataset de domínio e não há motivo para inventar um.

## Capacidades de superfície

- **Cobogó Core Web** — `last_verified: 2026-09-03`. `ovigialocal/ovigialocal.github.io` vendoriza `src/styles/core.css` com Git blob `afe206e4c0e82392ed4ee41dddee77e71acbb10e`, o mesmo blob estável usado pela Ficha. `check-cobogo-core.py` recomputa o hash, exige ordem `core → tema do Vigia → CSS editorial`, exige mapeamento explícito dos papéis compartilhados e proíbe que foco/reduced-motion genéricos retornem ao CSS local.
- **Pages/static surface** — `last_verified: 2026-09-03`. A superfície corrente inclui capa, matérias, institucional, temporal e impressão no renderer Astro.
- **Captura visual** — `last_verified: 2026-09-03`. Na PR pública #124, `Visual capture` run `33822076707` concluiu `success` após renderizar 16 vistas desktop/mobile; `Astro contract` run `33822076739` também concluiu `success`.
- **Smoke/contract tests** — `last_verified: 2026-09-03`. Além do contrato Astro, a fronteira Cobogó é verificada como parte do workflow visual antes do typecheck/build/captura.
- **Impressão documental** — `last_verified: 2026-09-03`. `print.css` mantém a matéria como documento, expõe proveniência/URLs no papel e remove cromo interativo.
- **Preservação/Wayback** — `last_verified: 2026-08-31`. Nenhum novo checkpoint Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [Hierarquia editorial de capa sem fixture pública](../concepts/editorial-cover-hierarchy.md) — notícia real variável continua cabendo numa capa editorial expressiva sem virar coleção homogênea de cards.
- [Leitura primeiro, confiança progressiva](../concepts/reading-first-article-trust.md) — fonte, proveniência, correções e metodologia permanecem alcançáveis sem competir com a leitura longa.
- **Priorização móvel por papel de navegação** — O Vigia distingue atalhos de módulo de destinos editoriais e usa affordance de continuação quando mantém uma fileira horizontal. Isso valida a relação compartilhada sem transformar a solução local em componente do core.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, medida e tipografia estruturam a leitura sem empilhar caixas.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — manchete, secundárias, briefs, agenda e editorias repetem relações sem repetirem o mesmo módulo visual.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local mesmo após adoção byte-for-byte do core.
- [Navegação primária perceptível em viewports estreitos](../recommendations/primary-navigation-perceptible-on-narrow-viewports.md) — segunda validação independente, por priorização semântica + affordance de continuação em vez do wrap usado pelo CausaGanha.

## Histórico

- 2026-09-03 — quatro rodadas Ipanema convergem matéria, capa, institucional, temporal, impressão e mobile; PR pública #124 fecha tokens/ownership e confirma o mesmo core estável com 16 capturas desktop/mobile.
- 2026-09-02 — cutover Astro consolidado; captura multi-rota desktop/mobile do novo renderer e primeiro `SurfaceQualityAssessment` opinionado.
- 2026-09-01 — publicação passa de caso unitário a sequência observável com Pages verde.
- 2026-08-31 — primeira matéria real materializada; publicação confirmada com Pages e captura visual verdes.
- 2026-08-31 — contrato do publicador independente integrado ao repo público.
- 2026-08-30 — template de matéria e confiança progressiva comprovados em desktop/mobile.
