---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-08-29
gap_score: 2
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente: texto como estrutura narrativa principal, ritmo editorial mais aberto que superfícies administrativas, voz jornalística própria, hierarquia entre matéria/evidência/contexto e leitura static-first. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

O leitor pode abrir matérias estáticas, ler título, texto e bloco de proveniência e voltar à home.

**Gap [fato] — `/porto-velho/2026/07/novo-registro-alimentos-nova-porto-velho/`:** a página ainda se apresenta como `Matéria Factual Verificada` apesar de expor CNPJ de fixture, SHA-256 do conteúdo vazio e `Evaluation Passed (0 alucinações)` como se fossem evidência factual. `ovigia-redacao#29` rastreia a correção pelo publisher canônico.

## D2 — por trás

Conforme o `ProjectProfile` vigente no workspace, O Vigia é uma redação privada de jornalismo cívico hiperlocal verificável. O boundary atual é:

```text
fonte/lead
→ reporter/researcher + producer skills
→ article-draft + editorial_self_review
→ gates independentes ligados ao digest
→ article-ready
→ publication-editor
→ article-published + evidência pública
```

`article-ready` não é autorização temporal permanente. A PR `ovigia-redacao#42` registrou em 2026-08-29 que freshness review devolveu os readies de Sine e Dia D à apuração; nenhuma das duas matérias está atualmente autorizada para publicação.

**Gap [fato]:** a matéria pública antiga não explica essa fronteira e usa estado interno de pipeline como substituto de prova pública. A superfície fica epistemicamente mais forte que a maquinaria realmente demonstrada.

## D3 — por conta própria

A superfície atualmente prova apenas HTML estático público licenciado em CC BY 4.0. Para a matéria revisada não há bundle de fonte/evidência público reconstruível nem `article-published` governado comprovado pelo repositório.

**Gap [fato]:** nenhum gap material de reutilização é contado nesta dimensão, porque o projeto ainda não prova ter publicado para essa matéria um dataset, API, bundle ou arquivo independente que a superfície esteja escondendo. Não confundir corpus privado ou `article-ready` com artefato público reutilizável.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-29`. O README aponta `ovigialocal.github.io` como superfície pública e os bytes da matéria estão versionados em `ovigialocal/ovigialocal.github.io`.
- **Deploy/publicação canônica** — `last_verified: 2026-08-29`. O repo define publicação static-first por `publication-editor → article-published + evidência pública`; a #42 confirma que os readies correntes foram devolvidos antes da publicação.
- **Captura visual** — `last_verified: 2026-08-29`. Nenhuma capacidade Playwright/screenshot/capture foi encontrada no repo durante esta rodada; não há pixel proof corrente registrado.
- **Smoke tests** — `last_verified: 2026-08-29`. GitHub Actions é explicitamente excluído da arquitetura operacional; certificação determinística é local/pre-push via `scripts/ci-local.sh` quando exigida.
- **Preservação/Wayback** — `last_verified: 2026-08-29`. Nenhum checkpoint arquivado da rota foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Nenhum conceito novo foi registrado nesta rodada. O boundary editorial digest-bound e a revalidação de freshness são evidência operacional importante, mas não foram promovidos a conceito de design sem uma solução de superfície fechada e proveniência visual antes/depois.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — aplicado à leitura editorial e ritmo.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — permite variação editorial sem templates arbitrários.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — preserva a identidade jornalística local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — a matéria atual permanece **contraexemplo/negative evidence**, não prova positiva do pattern.

## Histórico

- 2026-08-29 — card migrado para D1/D2/D3; gap público de verificação revalidado; `gap_score: 2`.
- 2026-08-29 — #42 devolve Sine e Dia D à apuração após freshness review; `article-ready` não autoriza publicação expirável.
- 2026-08-17 — superfície pública ainda mostrava fixture como `Matéria Factual Verificada`; #29 permaneceu aberta.
- 2026-08-16 — #29 registrada para alinhar fixture/proveniência sintética ao publisher canônico.