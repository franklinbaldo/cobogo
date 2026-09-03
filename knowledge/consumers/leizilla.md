---
type: ConsumerCard
repo: franklinbaldo/leizilla
site: https://franklinbaldo.github.io/leizilla/
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

## Identidade local

Preservar nome e metáfora do Leizilla, a voz lúdica do dinossauro e a composição local Astro/Svelte. Cobogó pode informar hierarquia, proveniência, estados honestos e reutilização de arquivos públicos, mas não deve centralizar a identidade visual nem transformar o produto em outra superfície do portfólio.

## D1 — no site

O leitor pode pesquisar legislação, abrir uma lei, preservar o contexto da busca e navegar pelos dispositivos correspondentes, ler texto estruturado, versões e evidências, inspecionar cobertura e chegar aos dados da norma. A home apresenta a tarefa diretamente como `Leis públicas não deveriam desaparecer em PDFs.`.

Problema material observado em D1: nenhum.

## D2 — por trás

Conforme o `ProjectProfile`, o Leizilla preserva, estrutura e republica legislação brasileira como dados públicos auditáveis. A interface explica a cadeia de preservação, estruturação por dispositivo e trilha de evidência, e separa cobertura, dataset e estado operacional.

Problema material observado em D2: nenhum. A migração estrutural `data_publicacao -> data_ato` e a proveniência de vigência continuam pertencendo ao domínio/pipeline (#129/#156/#157), não a esta rotina.

## D3 — por conta própria

O projeto publica `versoes.parquet` e `dataset_meta.json` no Internet Archive e expõe um exemplo DuckDB sobre o mesmo arquivo consumido pelo portal. O leitor pode reutilizar o acervo fora do frontend sem depender de API inexistente.

Problema material observado em D3: nenhum.

## Capacidades de superfície

- GitHub Pages/deploy — presente; a árvore `web/**` publicada não foi alterada pela #160.
- Captura visual reproduzível — adicionada pela #160 e verificada em `main` no commit `dc761b8936a51ade164bcfaf0dcfc04756b7eea6`. O run `33726499150` gerou desktop `1280×900`, tela estreita `390×844` e `capture-state.json` no arquivo `9882181048`, identificado pelo mesmo commit.
- Smoke/tests — a #160 passou GitGuardian, Check Pipeline Credentials, Lint & Test e a nova captura no commit atual da branch antes do merge.
- Preservação — Internet Archive e metadados de publicação continuam expostos como partes do produto, não como marketing.

## O que este projeto faz melhor que o Cobogó

- Expõe o mesmo Parquet como dado do produto e como arquivo reutilizável por terceiros.
- Preserva o contexto busca → documento → dispositivo → volta aos resultados sem exigir um padrão visual compartilhado.
- Mantém cobertura explícita e separa ausência de estrutura de inexistência jurídica quando o dado está disponível.

## Padrões do Cobogó em uso

- `public-artifact-reuse` — Parquet + metadata + DuckDB como reutilização independente do frontend.
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos; a #160 aplica o contrato ao Leizilla sem copiar identidade visual.
- `recoverable-error-states` — **validated**, isto é, já funcionou em pelo menos um projeto; o Leizilla fornece evidência negativa importante porque uma mensagem amigável continua errada se atribuir uma causa não comprovada.

## Dívida de qualidade atual

A primeira avaliação completa é **19 de 24 pontos — faixa boa**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 2 e Confiança 2.

As duas dívidas concretas são:

- `leizilla#161`: quando o Parquet falha ao carregar, a interface afirma que Rondônia v0 ainda não foi publicado, embora o dataset público exista; isso mantém Confiança em 2/4.
- `leizilla#162`: em `390×844`, os filtros de ente e tipo de norma ficam estreitos a ponto de perder o texto que os diferencia; isso mantém UI em 2/4.

## Histórico

- 2026-09-03 — #160 incorporada como `dc761b8936...`; nova captura de `main` `33726499150` / arquivo `9882181048`; primeira avaliação completa 19/24; abertas #161 e #162.
- 2026-09-01 — revalidação distinguiu falha parcial de parse do sucesso do job ETL/release; `gap_score` permaneceu 0.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliados.
- 2026-08-30 — #155 preservou identidade DITEL apenas para descritores editoriais comprovados.
- 2026-08-17 — revisão de jornada confirmou busca → lei → versões/evidências/dados e separou `Data do ato` de publicação DOE.
- 2026-08-15 — dataset RO v0 publicado no Internet Archive; publicação não foi tratada como cobertura completa.
