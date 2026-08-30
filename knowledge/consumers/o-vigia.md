---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-08-30
gap_score: 2
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente: texto como estrutura narrativa principal, ritmo editorial mais aberto que superfícies administrativas, voz jornalística própria, hierarquia entre matéria/evidência/contexto e leitura static-first. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

O leitor pode abrir matérias estáticas, ler título, texto e bloco de proveniência e voltar à home.

**Gap [fato] — `/porto-velho/2026/07/novo-registro-alimentos-nova-porto-velho/`:** a página continua se apresentando como `Matéria Factual Verificada` apesar de expor CNPJ de fixture, SHA-256 do conteúdo vazio e `Evaluation Passed (0 alucinações)` como se fossem evidência factual. O repo público permanece no commit `67eb821dcc1ae0c81913b87d14cfe91259ae5d74`; `ovigia-redacao#29` rastreia a remediação pelo boundary canônico de publicação.

## D2 — por trás

O Vigia é uma redação privada de jornalismo cívico hiperlocal verificável. O boundary normativo no repo permanece:

```text
fonte/lead
→ reporter/researcher + producer skills
→ article-draft + editorial_self_review
→ gates independentes ligados ao digest
→ article-ready
→ publication-editor
→ article-published + evidência pública
```

`article-ready` não é autorização temporal permanente. A PR `ovigia-redacao#42`, no head `79a17f27256a0bc7c319b6d246fa08edcfecd24a`, registra o estado corrente: Sine `draft-v8` mantém pass substantivo de factual-integrity, mas a promoção downstream continua bloqueada porque o runtime não obteve o `source_digest` canônico do `okf-parser`; nenhum hash paralelo foi fabricado. Multivaccination avançou para `draft-v11`: reporter/researcher passou e promoveu os novos bytes para a fila de factual-integrity após remover a afirmação não sustentada de que apenas 31/08 e 01/09 restavam e preservar como não confirmado o horário de domingo no Porto Velho Shopping. Nenhuma candidata corrente está em `article-published`. O `ProjectProfile` do workspace ainda descreve o estado anterior e esse drift permanece rastreado em `franklinbaldo/workspace#20`.

O publisher atual já projeta fontes OKF resolvidas, normaliza `datePublished` para formato machine-readable e não emite `Gatekeeper Editorial`, `Evaluation Passed (0 alucinações)` ou o rótulo `Matéria Factual Verificada`. Portanto o defeito atual está concentrado no artefato público legado, não no template canônico vigente.

**Gap [fato]:** a matéria pública antiga não representa essa fronteira e usa estado interno de pipeline como substituto de prova pública. A superfície fica epistemicamente mais forte que a maquinaria atualmente demonstrada.

## D3 — por conta própria

A superfície atualmente prova apenas HTML estático público licenciado em CC BY 4.0. Para a matéria revisada não há bundle de fonte/evidência público reconstruível nem `article-published` governado comprovado pelo repositório.

**Gap [fato]:** nenhum gap material de reutilização é contado nesta dimensão, porque o projeto ainda não prova ter publicado para essa matéria um dataset, API, bundle ou arquivo independente que a superfície esteja escondendo. Não confundir corpus privado ou `article-ready` histórico com artefato público reutilizável.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-30`. `ovigialocal/ovigialocal.github.io` continua publicando a rota legada; o repo público permanece em `67eb821dcc1ae0c81913b87d14cfe91259ae5d74` e os bytes problemáticos permanecem presentes.
- **Deploy/publicação canônica** — `last_verified: 2026-08-30`. `scripts/materialize_article_ready.py` materializa somente depois de `_require_article_ready_gates()` e o renderer atual usa provenance OKF + data machine-readable; #42 ainda não possui candidata corrente em `article-published` capaz de substituir o artefato legado.
- **Captura visual** — `last_verified: 2026-08-30`. Nenhuma capacidade Playwright/screenshot/capture foi encontrada no repo; não há pixel proof corrente registrado.
- **Smoke tests** — `last_verified: 2026-08-30`. GitHub Actions é explicitamente excluído da arquitetura operacional; certificação determinística é local/pre-push via `scripts/ci-local.sh` quando exigida.
- **Preservação/Wayback** — `last_verified: 2026-08-30`. Nenhum checkpoint arquivado da rota foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Nenhum conceito novo foi registrado nesta rodada. O boundary editorial digest-bound, a revalidação de freshness e a separação entre provenance pública e estado interno são evidência operacional importante, mas ainda não possuem solução de superfície fechada com captura antes/depois.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — aplicado à leitura editorial e ritmo.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — permite variação editorial sem templates arbitrários.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — preserva a identidade jornalística local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — a matéria atual permanece **contraexemplo/negative evidence**, não prova positiva do pattern.

## Histórico

- 2026-08-30 — #42 avança Multivaccination para v11 e fila de factual-integrity; Sine v8 segue bloqueada no `source_digest`; nenhuma candidata é `article-published`.
- 2026-08-30 — Sine v8 factual-integrity PASS e Multivaccination v10 precisa revisão; artefato público legado continua intacto.
- 2026-08-30 — publisher atual revalidado: novas materializações já evitam gate-state público e normalizam provenance/data; workspace#20 registra drift do ProjectProfile.
- 2026-08-29 — card migrado para D1/D2/D3; gap público de verificação revalidado; `gap_score: 2`.
- 2026-08-17 — superfície pública ainda mostrava fixture como `Matéria Factual Verificada`; #29 permaneceu aberta.
