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

**Gap [fato]: nenhum gap material de superfície.** Problemas operacionais do pipeline pertencem ao repo dono e não devem ser corrigidos por esta rotina de superfície.

## D3 — por conta própria

O leitor consegue chegar ao arquivo de snapshots, ao manifesto dos Parquets com URL/hash e à área para desenvolvedores. A própria home afirma, com suporte do repositório, uso dos dados via Python, R ou JavaScript sem chave de API, e mantém o explorador SQL client-side como caminho de consulta reproduzível.

**Gap [fato]: nenhum gap material comprovado.** Os artefatos reutilizáveis estão expostos como artefatos, não como promessa abstrata de API.

## Capacidades de superfície

- **Pages/deploy — `last_verified: 2026-09-02`.** A #693 foi squash-mergeada em `8e324011bdc46a27b5c0ea2826288d4673b9faed`, mas o `Deploy to GitHub Pages` do landing (run `33670722066`) falhou antes do build/deploy porque `npm audit --omit=dev --audit-level=high` encontrou vulnerabilidade `high` em `fast-uri`. O blocker operacional está em `baliza#694`; portanto o landing com a correção de `/publicacoes` ainda não foi provado como publicado.
- **Captura visual — `last_verified: 2026-09-02`.** O head real da #693, `97fed00aed829f432e39ac6bb91fcf64037a14e3`, passou `Visual capture — data surfaces` e Test; a implementação reflowa o esquema no narrow e torna a região tabular rolável/focável de forma deliberada. Como o deploy do landing falhou, essa evidência de head não substitui o AFTER da superfície publicada. `baliza#692` foi reaberta até existir deploy + recaptura pós-deploy.
- **Smoke/tests de superfície — `last_verified: 2026-09-02`.** O workflow visual roda em PR e em push para `main` quando a superfície muda; o head da #693 passou. A identidade do artifact de PR ainda carrega merge-ref sintético no nome, embora o run esteja causalmente ligado ao head real; isso não conta como adoção do `rendered-evidence-manifest`.
- **Preservação — `last_verified: 2026-09-02`.** A superfície continua ligando arquivo, snapshots e manifesto ao Internet Archive; autonomia sobre os artefatos permanece parte explícita da interface.

## O que este consumer faz melhor que o Cobogó

- Mantém uma taxonomia factual de evidência para superfícies client-side: renderizado não equivale a hidratado, e indisponibilidade remota é um estado de evidência, não ausência de produto.
- Em `/comparar`, explicita a fronteira entre dado observado e referência simulada em vez de preencher o vazio com peers inventados. Isso continua sendo evidência negativa útil para `Parentesco sem uniformidade`, mas ainda não é uma segunda implementação factual do pattern de comparação.

## Padrões do Cobogó em uso

- **Parentesco sem uniformidade** — Baliza preserva a sua linguagem de cidade, monitoramento e contratação pública.
- **Acessibilidade é forma** — skip link visível em foco, navegação disclosure nativa e combobox por `aria-activedescendant` foram incorporados em correções anteriores.
- **visual-evidence-as-quality-gate** — a captura desktop/mobile ligada ao SHA tornou observável a dívida de UI em `/publicacoes`; a mesma regra impede considerar #693 fechada antes de deploy + AFTER. Maturidade permanece `stable`.
- **rendered-evidence-manifest** — aplicável como default para identidade causal de artifact, mas ainda não adotado pelo Baliza; maturidade permanece `opinionated`.

## Histórico

- 2026-09-02 — #693 implementou a remediação responsiva de `baliza#692` e foi mergeada em `8e324011...`; deploy do landing falhou por `fast-uri`/`npm audit` (`baliza#694`), então #692 foi reaberta e o assessment permanece 21/24 (UI 2) até AFTER publicado.
- 2026-09-02 — baseline opinionado `21/24` (D1 4, D2 4, D3 4, UX 3, UI 2, confiança 4); `baliza#692` aberto para legibilidade responsiva de tabela e esquema em `/publicacoes`.
- 2026-09-01 — superfície revalidada sem gap D1–D3; removida do card a referência fossilizada ao pattern `provenance-freshness`.
- 2026-08-31 — #688 levou `main` a `3468dc1...` com limpeza de scripts e gates mypy/ruff; mudança behavior-neutral.
- 2026-08-24 — #686 alinhou a autoridade do artefato PCA ao upload real; `main` passou a `9a91fed...`.
- 2026-08-15 — #674 tornou explícita a simulação em `/comparar` e adicionou captura factual desse estado.
