---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-01
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, a composição compacta da home, o cabeçalho escuro, a paleta e a linguagem de competência/proveniência. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar a competência publicada diretamente no navegador. A busca atual oferece modos de empresa, pessoa/sócio, endereço e CNAE quando os artefatos correspondentes estão disponíveis no snapshot, usando DuckDB-WASM sobre os dados publicados.

Gap: nenhum gap material observado na superfície atual. A home deixa claro o caminho **Consultar aqui** e não promete modalidades que o snapshot não sustenta.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal, publica um manifest multi-competência e usa o Internet Archive como camada durável. O frontend é serverless e consulta os artefatos no navegador; o pipeline mensal, checksums públicos, Parquets e a camada `companies` shardada compõem o contrato operacional atual.

Gap: nenhum gap material observado. A superfície expõe competência, origem, preservação, verificação/estado e liga o uso interativo ao contrato público. Comparação temporal entre múltiplas competências continua condicionada a histórico real suficiente; isso é direção futura, não promessa faltante da interface atual.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os artefatos indicados pelo contrato público. O manifesto publica snapshots e URLs preservadas, com tamanho e digests quando disponíveis; os formatos públicos incluem Parquet e protobuf/ZIP. O README também documenta esse caminho de uso independente.

Gap: nenhum gap material observado. **Levar a base** é um caminho explícito da home e não depende do frontend do Ficha.

## Capacidades de superfície

- GitHub Pages/deploy — `last_verified: 2026-09-01`; `main` permanece em `65bcd9a052459984d6500dcc1380635b0fe19dfa`; CI de push `33298511254` concluiu `success` nesse SHA.
- Captura visual — `last_verified: 2026-09-01`; `.github/workflows/visual-capture.yml` continua sendo a capacidade canônica registrada para construir o Project Pages real em `/ficha/` e capturar Chromium; não houve mudança visual nova a recapturar nesta rodada.
- Smoke tests — `last_verified: 2026-09-01`; run agendado `ETL — upstream + mirror smoke check` `33396841333` concluiu `success` no mesmo `main`.
- Preservação — `last_verified: 2026-09-01`; snapshots/datasets continuam usando Internet Archive e o manifest público como contrato verificável. Não há Save Page Now do HTML renderizado reivindicado pelo corpus.

## O que este consumer faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados, sem transformar essas informações em decoração de design system.
- Mantém dois caminhos igualmente legítimos — interface e artefato público — sob o mesmo contrato factual.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222), com blob upstream verificável em teste.
- Foco em dois tons, baseline de documento e reduced motion delegados ao core; identidade, tema, composição, busca, resultados e estados permanecem locais.
- Relação de autoridade: fundação semântica compartilhada → mapping/theme local → CSS local de produto.

## Histórico

- 2026-09-01 — `main` e contrato público revalidados sem mudança de superfície; CI e smoke upstream recentes verdes; `gap_score: 0` preservado.
- 2026-08-31 — card reconciliado ao schema `ConsumerCard`; D1/D2/D3 reavaliados contra `main` e `ProjectProfile`; `gap_score: 0`.
- 2026-08-30 — `main` avançou para #225 sem mudança de composição pública; snapshot verificado 2026-07 permanece no contrato multi-competência.
- 2026-08-18 — #222 adotou o core pinado do Cobogó na home, preservando a identidade do Ficha e reduzindo contratos genéricos locais.
- 2026-08-18 — captura da #222 registrou estado `remote-data-unavailable` no ambiente CI sem confundi-lo com saúde do deploy público.
