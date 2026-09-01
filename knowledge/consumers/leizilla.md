---
type: ConsumerCard
repo: franklinbaldo/leizilla
site: https://franklinbaldo.github.io/leizilla/
status: active
last_reviewed: 2026-09-01
gap_score: 0
---

## Identidade local

Preservar nome e metáfora do Leizilla, a voz lúdica do dinossauro e a composição local Astro/Svelte. Cobogó pode informar hierarquia, proveniência, estados honestos e reutilização de artefatos, mas não deve centralizar a identidade visual nem transformar o produto em outra superfície do portfólio.

## D1 — no site

O leitor pode pesquisar legislação, abrir uma lei, preservar o contexto da busca e navegar pelos dispositivos correspondentes, ler texto estruturado, versões e evidências, inspecionar cobertura e chegar aos dados da norma.

A superfície já representa ausência de dataset e ausência de cobertura sem transformar falta de linha estruturada em prova de inexistência jurídica. A correção anterior para **Data do ato** impede que o campo legado `data_publicacao` seja apresentado como prova de publicação em Diário Oficial.

Gap `[fato]`: nenhum material observado. O trabalho estrutural de `data_publicacao -> data_ato` pertence ao domínio/pipeline (#129/#156); a apresentação incorporada já evita a alegação jurídica incorreta e a PR permanece draft, portanto não é tratada como capacidade publicada.

## D2 — por trás

Conforme o `ProjectProfile`, o Leizilla preserva, estrutura e republica legislação brasileira como dados públicos auditáveis. A cadeia observável é:

`fonte oficial -> descoberta/coleta -> preservação/evidência -> parse + ETL -> dataset versionado no Internet Archive -> Parquet + metadata -> portal estático / DuckDB-WASM`.

O README e as superfícies de evidência/cobertura tornam perceptível que dataset publicado, cobertura, pipeline e freshness são fatos distintos. O pipeline atual inclui discovery/harvest, Wayback + Internet Archive, OCR/parsing, consolidação Parquet e release.

Gap `[fato]`: nenhum material de superfície. O run agendado `33393407511` de 2026-08-31 terminou globalmente em `failure` porque `parse-casacivil-lei` falhou, mas `parse-assembleia`, `parse-casacivil-lc` e o job `etl` — inclusive `Release dataset → IA` — concluíram com sucesso. A falha parcial já continua rastreada pela issue operacional #114; a superfície não afirma que todo run atual está saudável nem usa o status do workflow como prova de cobertura/freshness.

## D3 — por conta própria

O projeto publica `versoes.parquet` e `dataset_meta.json` no Internet Archive, ambos ligados pelo README e pela superfície de dados. Há uma consulta DuckDB reproduzível sobre o mesmo Parquet consumido pelo portal, e a página da lei também oferece exportações estruturadas quando disponíveis.

Exemplo reproduzível existente:

```sql
SELECT count(*)
FROM read_parquet(
  'https://archive.org/download/leizilla-dataset-ro-v0/versoes.parquet'
);
```

O leitor pode comparar o resultado e demais propriedades da release com `dataset_meta.json`.

Gap `[fato]`: nenhum material. A reutilização não depende do frontend nem exige inventar uma API inexistente.

## Capacidades de superfície

- GitHub Pages/deploy — presente; `last_verified: 2026-08-31`. O `main` continua `631f62af2ff423d0842b91ed8c8410431160b53a`; não houve commit de superfície posterior à última verificação, e o repo mantém workflow dedicado de deploy web.
- build/smoke de superfície em PR — presente; `last_verified: 2026-09-01`. A #156 continua draft e não é capacidade publicada, mas o seu `Deploy Leizilla Web` permanece verde no head `c9d13d205585a70ae62488d89c8e00b4feeff78b`; `Lint & Test` segue vermelho, portanto nenhum merge foi promovido.
- preservação — presente; `last_verified: 2026-09-01`. No run agendado `33393407511`, o job `etl` concluiu com sucesso a etapa `Release dataset → IA` apesar da falha parcial anterior em `parse-casacivil-lei`.
- captura visual comparável — não localizada como capacidade canônica dedicada; `last_verified: 2026-09-01`. Não foi necessária captura nova porque esta rodada não alterou pixels.

## O que este consumer faz melhor que o Cobogó

- [Public artifact reuse](../patterns/public-artifact-reuse.md) — evidencia um handoff em que o mesmo artefato Parquet alimenta o produto e permanece reutilizável fora dele.
- Search -> documento com contexto preservado permanece evidência local útil: termo, dispositivo correspondente e retorno à busca sobrevivem à transição sem depender de um padrão compartilhado ainda não provado em dois consumers.

## Padrões do Cobogó em uso

- `public-artifact-reuse` — evidência independente já registrada; apresentação local via Parquet + metadata + DuckDB.
- Proveniência/freshness como fatos separados — aplicado na distinção entre artefato publicado, cobertura e estado do pipeline.

## Histórico

- 2026-09-01 — revalidação distingue falha parcial de parse do sucesso do job ETL/release; #114 já rastreia a dívida operacional e `gap_score` permanece 0.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliados, `gap_score: 0`.
- 2026-08-30 — #155 preservou identidade DITEL apenas para descritores editoriais comprovados; `main` em `631f62af...`.
- 2026-08-17 — revisão de jornada confirmou busca -> lei -> versões/evidências/dados e separou `Data do ato` de publicação DOE.
- 2026-08-15 — dataset RO v0 publicado no Internet Archive; publicação não foi tratada como cobertura completa.
