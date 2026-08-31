---
type: ConsumerCard
repo: franklinbaldo/baliza
site: https://franklinbaldo.github.io/baliza/
status: active
last_reviewed: 2026-08-30
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

- **Pages/deploy — `last_verified: 2026-08-30`.** `main` do consumer permanece em `9a91feddd4defdef1da7d24af2e5ce1b76d72c2d`; os workflows continuam executando sobre esse SHA e o site público permanece configurado em `/baliza/`.
- **Captura visual — `last_verified: 2026-08-30`.** O harness introduzido em #671/#674 continua sendo a evidência canônica para `/publicacoes` e `/comparar`, incluindo estados `hydrated`, `remote-data-unavailable`, `incomplete` e `hydrated-with-explicit-simulation` quando aplicável.
- **Smoke/tests de superfície — `last_verified: 2026-08-30`.** O repositório mantém gates de build/web e captura; nenhum novo defeito de superfície foi observado nesta rodada.
- **Preservação — `last_verified: 2026-08-30`.** A home continua ligando arquivo, snapshots e manifesto ao Internet Archive; a tese preservação-primeiro do ProjectProfile continua compatível com a superfície.

## O que este consumer faz melhor que o Cobogó

- Mantém uma taxonomia factual de evidência para superfícies client-side: renderizado não equivale a hidratado, e indisponibilidade remota é um estado de evidência, não ausência de produto.
- Em `/comparar`, explicita a fronteira entre dado observado e referência simulada em vez de preencher o vazio com peers inventados. Isso continua sendo evidência negativa útil para `Parentesco sem uniformidade`, mas ainda não é uma segunda implementação factual do pattern de comparação.

## Padrões do Cobogó em uso

- **Proveniência/freshness** — timestamps e arquivo permanecem recuperáveis e semanticamente subordinados à tarefa.
- **Parentesco sem uniformidade** — Baliza preserva a sua linguagem de cidade, monitoramento e contratação pública.
- **Acessibilidade é forma** — skip link visível em foco, navegação disclosure nativa e combobox por `aria-activedescendant` foram incorporados em correções anteriores.

## Histórico

- 2026-08-30 — card reconciliado ao schema `ConsumerCard`; D1/D2/D3 reavaliados contra home, ProjectProfile e estado atual de `main`; `gap_score: 0`.
- 2026-08-24 — #686 alinhou a autoridade do artefato PCA ao upload real; `main` passou a `9a91fed...`.
- 2026-08-15 — #674 tornou explícita a simulação em `/comparar` e adicionou captura factual desse estado.
- 2026-08-15 — #671 provou hidratação real de `/publicacoes` e consolidou a distinção renderizado ≠ hidratado.
- 2026-08-12 — série #649–#658 corrigiu semântica, foco, proveniência e continuidade de cidade sem descaracterizar o produto.
