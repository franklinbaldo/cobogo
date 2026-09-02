---
type: ConsumerCard
repo: franklinbaldo/quem-sao-eles
site: https://franklinbaldo.github.io/quem-sao-eles/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Quem São Eles?

## Identidade local

Catálogo jornalístico sóbrio de memória política, com preto/branco/cinza, leitura editorial e fontes arquivadas. Preservar a separação entre perfis/cronologia editoriais e a busca pública de PEP: são dois trabalhos distintos. Não converter a superfície em dashboard genérico nem confundir dataset público com perfil editorial.

## D1 — no site

[fato] A superfície pública oferece uma busca PEP client-side sobre o Parquet publicado. A rota identifica Portal da Transparência/CGU, mostra a competência, permite pesquisar e distingue estados de carregamento, erro, resultado e busca sem correspondência. A home torna essa busca descobrível e deixa explícito que ela é separada do catálogo editorial.

[fato] O catálogo de perfis/cronologia continua sem conteúdo editorial populado suficiente no repositório para constituir hoje uma experiência editorial real a ser avaliada. Isso é ausência de matéria publicada, não uma capacidade comprovada escondida pela superfície.

[fato] O gap de publicação registrado em #17 foi fechado: o landing `6d702973f7c640930a2a8a25d24fdcfaaf87c80f` contém `public/data/202607_pep.parquet`, Pages publicou esse estado e `/pep` anuncia competência julho de 2026 a partir do artifact realmente construído.

**Gap D1 atual:** nenhum material demonstrado.

## D2 — por trás

[fato] O README e o `ProjectProfile` explicam a tese do projeto: memória política e transparência por perfis documentados, com fontes secundárias arquivadas, mais uma superfície distinta de consulta a dados PEP da CGU. O runtime PEP usa Svelte + DuckDB-WASM para consultar no navegador o snapshot Parquet versionado.

[fato] A correção do pipeline explicitou também a causalidade operacional: commits produzidos pelo refresh via `GITHUB_TOKEN` não disparam outros workflows automaticamente; #19/#21 passaram a acionar deploy e captura de forma explícita quando há snapshot novo e mantêm uma via `force_publish` verificável.

**Gap D2 atual:** nenhum material demonstrado.

## D3 — por conta própria

[fato] Na rota PEP, a pessoa pode tanto consultar os dados no próprio site quanto abrir/baixar o snapshot Parquet exato usado pela consulta. A competência e a autoridade ficam adjacentes ao artefato, permitindo reutilização independente sem transformar a página em console técnico. O repositório também documenta execução local do site Astro.

[fato] O artifact publicado atualmente é `202607_pep.parquet`; a captura runtime pós-correção chegou a `search-ready` e executou consulta real no mesmo head que contém esse Parquet.

**Gap D3 atual:** nenhum material demonstrado.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-02`; run `33562803474` concluiu `success` no head `6d702973f7c640930a2a8a25d24fdcfaaf87c80f`, que contém `202607_pep.parquet`.
- **PEP refresh** — `last_verified: 2026-09-02`; #19/#21 fecham o loop refresh → dispatch explícito de deploy/capture quando há commit novo; run `33562767037` verificou o caminho com `force_publish=true`.
- **Build gate** — `last_verified: 2026-09-02`; o deploy do landing atual passou no mesmo head da competência julho/2026.
- **Captura visual/runtime** — `last_verified: 2026-09-02`; run `33562806014`, artifact `9821925549`, head `6d702973f7c640930a2a8a25d24fdcfaaf87c80f`, contém screenshot desktop `1280×900`, DOM e estado machine-readable após consulta real. A cobertura estreita ainda não existe e está rastreada em #23 como dívida de UI/UX/confiança fora do `gap_score` D1–D3.
- **Preservação editorial** — `last_verified: 2026-08-31`; o README exige `archive_url` para notícias/fontes editoriais. Não foi produzida nova captura editorial porque não há corpus populado suficiente para essa superfície.

## O que este consumer faz melhor que o Cobogó

- Demonstra concretamente `usar aqui ↔ levar o artefato`: a mesma autoridade/competência sustenta uma consulta client-side e o Parquet diretamente reutilizável.
- Demonstra que captura de shell não basta para provar aplicação de dados: o gate espera o runtime, executa uma consulta real e preserva estado machine-readable.
- Demonstra um loop de freshness em que refresh, publicação e captura são causalmente ligados sem depender de um push recursivo implícito do GitHub Actions.
- Esses aprendizados permanecem evidência/conceito; não promovem layout ou componente compartilhado por si sós.

## Padrões do Cobogó em uso

- `Provenance and freshness` — autoridade, competência e snapshot exato ficam recuperáveis sem afirmar freshness não provada.
- `Public artifact reuse` — consultar no site e reutilizar o artefato são ações distintas sobre a mesma fonte.
- `visual-evidence-as-quality-gate` — validado para runtime desktop; #23 pede completar a cobertura estreita exigida pelo contrato estável.
- `Parentesco sem uniformidade` — a identidade jornalística local e a separação catálogo/PEP permanecem próprias do consumer.

## Histórico

- 2026-09-02 — #17 fechado após #19/#21: Pages run `33562803474` e captura runtime run `33562806014` verdes no head `6d702973...`, publicando competência julho/2026; `gap_score` volta a 0. A ausência de captura estreita vira dívida separada #23 e não é escondida pelo score D1–D3.
- 2026-09-01 — refresh mensal adicionou `202607_pep.parquet`, mas sem Pages/capture no novo SHA; gap de publicação registrado em #17; `gap_score: 1`.
- 2026-08-31 — card migrado para `ConsumerCard`; D1/D2/D3 reavaliadas; ausência de conteúdo editorial reclassificada como falta de matéria publicada, não gap de superfície.
- 2026-08-17 — #14 removeu boilerplate do Astro; capture de `main` verde em `1fb2c8eb`.
- 2026-08-17 — #12 adicionou prova Chromium/runtime e corrigiu o base path do snapshot; Pages + capture verdes em `d411ea9b`.
- 2026-08-15 — #8 reconciliou competência/snapshot, provenance e build gate de PR.
