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

`article-ready` não é autorização temporal permanente. A PR `ovigia-redacao#42`, no head `60ba615818598e7c12e7b0bcea48e5840555037b`, registra Multivaccination `draft-v12` e Sine `draft-v8` com **factual-integrity, source-provenance, reader-intent, attention-framing e headline-context-safety aprovados sobre os mesmos bytes**. A fila mais recente registra `eligible=2 · reviewed=2 · pass=2 · needs-work=0 · fail=0 · promoted=2 · blocked=0`. O próximo gate é `reader-usefulness`; o ciclo registra `article_published_count: 0`. O `ProjectProfile` do workspace continua no snapshot de 24/08 e esse drift permanece rastreado em `franklinbaldo/workspace#20`.

O publisher atual já projeta fontes OKF resolvidas, normaliza `datePublished` para formato machine-readable e não emite `Gatekeeper Editorial`, `Evaluation Passed (0 alucinações)` ou o rótulo `Matéria Factual Verificada`. Portanto o defeito atual está concentrado no artefato público legado, não no template canônico vigente.

**Gap [fato]:** a matéria pública antiga não representa essa fronteira e usa estado interno de pipeline como substituto de prova pública. A superfície fica epistemicamente mais forte que a maquinaria atualmente demonstrada.

## D3 — por conta própria

A superfície atualmente prova apenas HTML estático público licenciado em CC BY 4.0. Para a matéria revisada não há bundle de fonte/evidência público reconstruível nem `article-published` governado comprovado pelo repositório.

**Gap [fato]:** nenhum gap material de reutilização é contado nesta dimensão, porque o projeto ainda não prova ter publicado para essa matéria um dataset, API, bundle ou arquivo independente que a superfície esteja escondendo. Não confundir corpus privado ou gates intermediários com artefato público reutilizável.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-30`. `ovigialocal/ovigialocal.github.io` continua publicando a rota legada; o repo público permanece em `67eb821dcc1ae0c81913b87d14cfe91259ae5d74` e os bytes problemáticos permanecem presentes.
- **Deploy/publicação canônica** — `last_verified: 2026-08-30`. #42 avançou as duas matérias por cinco gates substantivos até `headline-context-safety`; a próxima fila é `reader-usefulness`, mas ainda não existe candidata corrente em `article-published` capaz de substituir o artefato legado.
- **Captura visual** — `last_verified: 2026-08-30`. Busca atual por `screenshot`, `capture` e `Playwright` não encontrou capacidade registrada no consumer; não há pixel proof corrente.
- **Smoke tests** — `last_verified: 2026-08-30`. GitHub Actions é explicitamente excluído da arquitetura operacional editorial; certificação determinística é local/pre-push via `scripts/ci-local.sh` quando exigida.
- **Preservação/Wayback** — `last_verified: 2026-08-30`. Nenhum checkpoint arquivado da rota foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Nenhum conceito novo foi registrado nesta rodada. O boundary editorial digest-bound, a revalidação temporal por gate e a separação entre provenance pública e estado interno são evidência operacional importante, mas ainda não possuem solução de superfície fechada com captura antes/depois.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — aplicado à leitura editorial e ritmo.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — permite variação editorial sem templates arbitrários.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — preserva a identidade jornalística local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — a matéria atual permanece **contraexemplo/negative evidence**, não prova positiva do pattern.

## Histórico

- 2026-08-30 — #42 head 60ba6158: v12/v8 têm cinco gates aprovados até headline-context-safety; próxima fila reader-usefulness; article_published_count=0.
- 2026-08-30 — #42 head 1906e47c: v12/v8 têm quatro gates aprovados até attention-framing; próxima fila headline-context-safety.
- 2026-08-30 — #42 head 5d3de1f4: digest canônico resolvido; v12/v8 têm factual-integrity + source-provenance aprovados; próxima fila reader-intent.
- 2026-08-30 — #42 head d66e55d8: v12/v8 têm pass substantivo de factual-integrity; ambas bloqueadas no source_digest canônico.
- 2026-08-30 — #42 avança Multivaccination para v12 e factual-integrity após nova fonte confirmar Shopping na campanha corrente.
