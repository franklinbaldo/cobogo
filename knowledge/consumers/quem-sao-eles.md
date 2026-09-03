---
type: ConsumerCard
repo: franklinbaldo/quem-sao-eles
site: https://franklinbaldo.github.io/quem-sao-eles/
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

# Quem São Eles?

## Identidade local

Catálogo jornalístico sóbrio de memória política, com preto/branco/cinza, leitura editorial e fontes arquivadas. Preservar a separação entre perfis/cronologia editoriais e a busca pública de PEP: são dois trabalhos distintos. Não converter a superfície em dashboard genérico nem confundir dataset público com perfil editorial.

## D1 — no site

[fato] A superfície pública oferece uma busca PEP client-side sobre o Parquet publicado. A rota identifica Portal da Transparência/CGU, mostra a competência, permite pesquisar e distingue estados de carregamento, erro, resultado e busca sem correspondência. A home torna essa busca descobrível e deixa explícito que ela é separada do catálogo editorial.

[fato] O catálogo de perfis/cronologia continua sem conteúdo editorial populado suficiente no repositório para constituir hoje uma experiência editorial real a ser avaliada. Isso é ausência de matéria publicada, não uma capacidade comprovada escondida pela superfície.

[fato] O gap de publicação registrado em #17 foi fechado: o landing `6d702973f7c640930a2a8a25d24fdcfaaf87c80f` contém `public/data/202607_pep.parquet`, Pages publicou esse estado e `/pep` anuncia competência julho de 2026 a partir do arquivo realmente construído.

**Gap D1 atual:** nenhum material demonstrado.

## D2 — por trás

[fato] O README e o `ProjectProfile` explicam a tese do projeto: memória política e transparência por perfis documentados, com fontes secundárias arquivadas, mais uma superfície distinta de consulta a dados PEP da CGU. O runtime PEP usa Svelte + DuckDB-WASM para consultar no navegador o snapshot Parquet versionado.

[fato] A correção do pipeline explicitou também a sequência operacional: commits produzidos pelo refresh via `GITHUB_TOKEN` não disparam outros workflows automaticamente; #19/#21 passaram a acionar deploy e captura de forma explícita quando há snapshot novo e mantêm uma via `force_publish` verificável.

**Gap D2 atual:** nenhum material demonstrado.

## D3 — por conta própria

[fato] Na rota PEP, a pessoa pode tanto consultar os dados no próprio site quanto abrir/baixar o snapshot Parquet exato usado pela consulta. A competência e a autoridade ficam adjacentes ao arquivo, permitindo reutilização independente sem transformar a página em console técnico. O repositório também documenta execução local do site Astro.

[fato] O arquivo publicado atualmente é `202607_pep.parquet`; a captura runtime pós-#24 chega a `search-ready` e executa consulta real no mesmo commit que contém a capacidade visual atual.

**Gap D3 atual:** nenhum material demonstrado.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-03`; run `33737031712` concluiu com sucesso no commit `f9d662964abdecfad1b329f3a65856b47cfcc32b`.
- **PEP refresh** — `last_verified: 2026-09-02`; #19/#21 fecham o loop refresh → dispatch explícito de deploy/capture quando há commit novo; run `33562767037` verificou o caminho com `force_publish=true`.
- **Build gate** — `last_verified: 2026-09-03`; a PR #24 passou build no commit atual da branch antes do merge e o deploy voltou a passar em `main`.
- **Captura visual/runtime** — `last_verified: 2026-09-03`; #24 foi incorporada como `f9d662964abdecfad1b329f3a65856b47cfcc32b`. O run `33737031729`, arquivo `9886155918`, produz `pep-1280x900.png`, `pep-390x844.png`, DOM e estado legível por máquina. O estado registra o commit real avaliado, distingue o commit sintético de teste em PR, chega a `search-ready`, executa consulta real, comprova ausência de estouro horizontal e mantém busca e proveniência visíveis nos dois tamanhos.
- **Preservação editorial** — `last_verified: 2026-08-31`; o README exige `archive_url` para notícias/fontes editoriais. Não foi produzida nova captura editorial porque não há corpus populado suficiente para essa superfície.

## Avaliação de qualidade

A primeira avaliação completa, em 2026-09-03, registra **23 de 24 pontos — faixa de referência**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 4, UI 3 e Confiança 4. A rota PEP é integralmente observável em desktop e celular e executa uma consulta real. UI permanece 3 porque não há evidência suficiente para transformar a apresentação ainda estreita da rota PEP em referência visual para a futura superfície editorial inteira.

## O que este consumer faz melhor que o Cobogó

- Demonstra concretamente `usar aqui ↔ levar o arquivo`: a mesma autoridade/competência sustenta uma consulta client-side e o Parquet diretamente reutilizável.
- Demonstra que captura de shell não basta para provar aplicação de dados: o gate espera o runtime, executa uma consulta real e preserva estado legível por máquina.
- Demonstra um loop de freshness em que refresh, publicação e captura são ligados explicitamente sem depender de um push recursivo implícito do GitHub Actions.
- Desde #24, demonstra também que a mesma prova pode verificar desktop e celular, identificar o commit real avaliado e tratar ausência de estouro horizontal como contrato observável.
- Esses aprendizados permanecem evidência/conceito; não promovem layout ou componente compartilhado por si sós.

## Padrões do Cobogó em uso

- `Provenance and freshness` — autoridade, competência e snapshot exato ficam recuperáveis sem afirmar freshness não provada.
- `Public artifact reuse` — consultar no site e reutilizar o arquivo são ações distintas sobre a mesma fonte.
- `visual-evidence-as-quality-gate` — aplicação completa em desktop e celular após #24; a recomendação permanece `stable`.
- `Parentesco sem uniformidade` — a identidade jornalística local e a separação catálogo/PEP permanecem próprias do projeto.

## Histórico

- 2026-09-03 — #24 merge `f9d66296`: captura PEP passa a cobrir `1280×900` e `390×844`, registrar commit real avaliado e verificar overflow/visibilidade; deploy `33737031712` e captura `33737031729` verdes em `main`; primeira avaliação completa: 23/24; #23 fechada.
- 2026-09-02 — #17 fechado após #19/#21: Pages run `33562803474` e captura runtime run `33562806014` verdes no head `6d702973...`, publicando competência julho/2026; `gap_score` volta a 0. A ausência de captura estreita vira dívida separada #23 e não é escondida pelo score D1–D3.
- 2026-09-01 — refresh mensal adicionou `202607_pep.parquet`, mas sem Pages/capture no novo SHA; gap de publicação registrado em #17; `gap_score: 1`.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas; ausência de conteúdo editorial reclassificada como falta de matéria publicada, não gap de superfície.
- 2026-08-17 — #14 removeu boilerplate do Astro; capture de `main` verde em `1fb2c8eb`.
- 2026-08-17 — #12 adicionou prova Chromium/runtime e corrigiu o base path do snapshot; Pages + capture verdes em `d411ea9b`.
- 2026-08-15 — #8 reconciliou competência/snapshot, provenance e build gate de PR.
