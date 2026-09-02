---
type: ConsumerCard
repo: franklinbaldo/baliza
site: https://franklinbaldo.github.io/baliza/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Baliza

## Identidade local

Preservar Baliza como produto de leitura e análise de contratações públicas, com entrada orientada por cidade, linguagem de monitoramento e a cadeia própria PCA → Publicações → Atas → Contratos. A identidade visual e a semântica de domínio pertencem ao consumer; Cobogó não deve transformar a superfície em um dashboard genérico nem centralizar a sua apresentação.

## D1 — no site

A home atual permite escolher/continuar uma cidade, monitorar contratações, entrar em publicações abertas, PCA, atas, busca/exploração, status e arquivo. A navegação oferece também a superfície de comparação, mas ela distingue explicitamente referências simuladas de municípios realmente observados.

**Gap [fato]: nenhum gap material comprovado nesta revisão.** A home já apresenta tarefas concretas e separa dado real, simulação e falha de hidratação onde isso é relevante.

## D2 — por trás

Conforme o `ProjectProfile`, Baliza preserva o acervo do PNCP como dados públicos reproduzíveis e citáveis e só então constrói análise sobre a mesma autoridade publicada. O Internet Archive é parte da arquitetura, não backup. A home torna essa relação perceptível: apresenta a cadeia de quatro recursos, identifica snapshots arquivados e liga o produto analítico ao arquivo preservado.

**Gap [fato]: nenhum gap material de superfície.** O problema operacional aberto do PNCP Doctor (#687 no estado factual do ProjectProfile) pertence ao pipeline/observabilidade e não deve ser corrigido por esta rotina de superfície.

## D3 — por conta própria

O leitor consegue chegar ao arquivo de snapshots, ao manifesto dos Parquets com URL/hash e à área para desenvolvedores. A própria home afirma, com suporte do repositório, uso dos dados via Python, R ou JavaScript sem chave de API, e mantém o explorador SQL client-side como caminho de consulta reproduzível.

**Gap [fato]: nenhum gap material comprovado.** Os artefatos reutilizáveis estão expostos como artefatos, não como promessa abstrata de API.

## Capacidades de superfície

- **Pages/deploy — `last_verified: 2026-09-02`.** `main` está em `5d1c9cfdeaa46a50b1b7d3031f5f2cf59ef0ff9b`; o commit só altera o workflow de refresh de órgãos públicos em relação ao SHA de superfície anterior. Deploy Pages run `33615483408` concluiu `success`.
- **Captura visual — `last_verified: 2026-09-02`.** O harness de #671/#674 continua canônico para `/publicacoes` e `/comparar`; `artifact:9250189303` foi reaberto nesta revisão e contém desktop + `390×844`, além dos estados factuais. A inspeção visual revelou dívida material de responsividade em `/publicacoes`, registrada em `baliza#692`.
- **Smoke/tests de superfície — `last_verified: 2026-09-02`.** O workflow visual atual roda em PR e também em push para `main` quando `web/**` ou o próprio workflow muda, além de `workflow_dispatch`; ele constrói o mesmo Project Pages artifact antes de capturar.
- **Preservação — `last_verified: 2026-09-02`.** A superfície continua ligando arquivo, snapshots e manifesto ao Internet Archive; autonomia sobre os artefatos permanece parte explícita da interface.

## O que este consumer faz melhor que o Cobogó

- Mantém uma taxonomia factual de evidência para superfícies client-side: renderizado não equivale a hidratado, e indisponibilidade remota é um estado de evidência, não ausência de produto.
- Em `/comparar`, explicita a fronteira entre dado observado e referência simulada em vez de preencher o vazio com peers inventados. Isso continua sendo evidência negativa útil para `Parentesco sem uniformidade`, mas ainda não é uma segunda implementação factual do pattern de comparação.

## Padrões do Cobogó em uso

- **Parentesco sem uniformidade** — Baliza preserva a sua linguagem de cidade, monitoramento e contratação pública.
- **Acessibilidade é forma** — skip link visível em foco, navegação disclosure nativa e combobox por `aria-activedescendant` foram incorporados em correções anteriores.
- **visual-evidence-as-quality-gate** — a captura desktop/mobile ligada ao SHA tornou observável a dívida de UI em `/publicacoes`; maturidade do pattern permanece `stable`.

## Histórico

- 2026-09-02 — baseline opinionado `21/24` (D1 4, D2 4, D3 4, UX 3, UI 2, confiança 4); `baliza#692` aberto para legibilidade responsiva de tabela e esquema em `/publicacoes`.
- 2026-09-01 — superfície revalidada sem gap D1–D3; removida do card a referência fossilizada ao pattern `provenance-freshness`.
- 2026-08-31 — #688 levou `main` a `3468dc1...` com limpeza de scripts e gates mypy/ruff; mudança behavior-neutral.
- 2026-08-24 — #686 alinhou a autoridade do artefato PCA ao upload real; `main` passou a `9a91fed...`.
- 2026-08-15 — #674 tornou explícita a simulação em `/comparar` e adicionou captura factual desse estado.
