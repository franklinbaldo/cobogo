---
type: ConsumerCard
repo: franklinbaldo/quem-sao-eles
site: https://franklinbaldo.github.io/quem-sao-eles/
status: active
last_reviewed: 2026-09-01
gap_score: 1
---

# Quem São Eles?

## Identidade local

Catálogo jornalístico sóbrio de memória política, com preto/branco/cinza, leitura editorial e fontes arquivadas. Preservar a separação entre perfis/cronologia editoriais e a busca pública de PEP: são dois trabalhos distintos. Não converter a superfície em dashboard genérico nem confundir dataset público com perfil editorial.

## D1 — no site

[fato] A superfície pública oferece uma busca PEP client-side sobre o Parquet publicado. A rota identifica Portal da Transparência/CGU, mostra a competência, permite pesquisar e distingue estados de carregamento, erro, resultado e busca sem correspondência. A home torna essa busca descobrível e deixa explícito que ela é separada do catálogo editorial.

[fato] O catálogo de perfis/cronologia continua sem conteúdo editorial populado suficiente no repositório para constituir hoje uma experiência editorial real a ser avaliada. Isso é ausência de matéria publicada, não uma capacidade comprovada escondida pela superfície.

**Gap [fato]:** o refresh mensal de 2026-09-01 adicionou `public/data/202607_pep.parquet` em `main` (`356071a66aeab08052de03c3c671f3e6e7f14870`), mas nenhum workflow run está associado a esse novo SHA. Como `/pep` escolhe o maior snapshot no build, a superfície publicada não tem prova de ter incorporado a competência nova. O gap está rastreado em `franklinbaldo/quem-sao-eles#17` e é de publicação, não de layout.

## D2 — por trás

[fato] O README e o `ProjectProfile` explicam a tese do projeto: memória política e transparência por perfis documentados, com fontes secundárias arquivadas, mais uma superfície distinta de consulta a dados PEP da CGU. O runtime PEP usa Svelte + DuckDB-WASM para consultar no navegador o snapshot Parquet versionado.

**Gap [fato]:** nenhum material independente do gap D1 de publicação. O pipeline de refresh produziu um snapshot novo; a falha observada é não materializá-lo automaticamente na superfície, não falta de explicação do mecanismo.

## D3 — por conta própria

[fato] Na rota PEP, a pessoa pode tanto consultar os dados no próprio site quanto abrir/baixar o snapshot Parquet exato usado pela consulta. A competência e a autoridade ficam adjacentes ao artefato, permitindo reutilização independente sem transformar a página em console técnico. O repositório também documenta execução local do site Astro.

**Gap [fato]:** parcial pelo mesmo motivo de D1: o repositório já contém `202607_pep.parquet`, mas não há evidência de Pages/capture no SHA que o adicionou. O contrato `usar aqui ↔ levar o artefato` permanece correto para o artifact efetivamente publicado, mas a publicação está atrás de `main`.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-01`; nenhum run associado ao head `356071a66aeab08052de03c3c671f3e6e7f14870`; último Pages/capture conhecido continua no estado anterior.
- **PEP refresh** — `last_verified: 2026-09-01`; workflow `Update PEP Data` run `33494134838` concluiu `success` e gerou o commit `356071a66aeab08052de03c3c671f3e6e7f14870`, adicionando `public/data/202607_pep.parquet`.
- **Build gate** — `last_verified: 2026-08-31`; PRs usam o mesmo build Astro/Pages e a configuração já foi falsificada/corrigida anteriormente para Node 22.12+.
- **Captura visual/runtime** — `last_verified: 2026-09-01`; não houve capture novo no SHA do snapshot 202607. O último `PEP visual capture` conhecido é `32075299012` em `1fb2c8eb55e577de07e274386b06ceec7a2bb50f`, com screenshot full-page, DOM, estado machine-readable e consulta deliberadamente sem resultado contra o Parquet.
- **Preservação editorial** — `last_verified: 2026-08-31`; o README exige `archive_url` para notícias/fontes editoriais. Não foi produzida nova captura editorial porque não há corpus populado suficiente para essa superfície.

## O que este consumer faz melhor que o Cobogó

- Demonstra concretamente `usar aqui ↔ levar o artefato`: a mesma autoridade/competência sustenta uma consulta client-side e o Parquet diretamente reutilizável.
- Demonstra que captura de shell não basta para provar aplicação de dados: o gate espera o runtime, executa uma consulta real e preserva estado machine-readable.
- Esses aprendizados permanecem evidência/conceito; não promovem layout ou componente compartilhado por si sós.

## Padrões do Cobogó em uso

- `Provenance and freshness` — autoridade, competência e snapshot exato ficam recuperáveis sem afirmar freshness não provada.
- `Public artifact reuse` — consultar no site e reutilizar o artefato são ações distintas sobre a mesma fonte.
- `Parentesco sem uniformidade` — a identidade jornalística local e a separação catálogo/PEP permanecem próprias do consumer.

## Histórico

- 2026-09-01 — refresh mensal adicionou `202607_pep.parquet`, mas sem Pages/capture no novo SHA; gap de publicação registrado em #17; `gap_score: 1`.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas; ausência de conteúdo editorial reclassificada como falta de matéria publicada, não gap de superfície.
- 2026-08-17 — #14 removeu boilerplate do Astro; capture de `main` verde em `1fb2c8eb`.
- 2026-08-17 — #12 adicionou prova Chromium/runtime e corrigiu o base path do snapshot; Pages + capture verdes em `d411ea9b`.
- 2026-08-15 — #8 reconciliou competência/snapshot, provenance e build gate de PR.
