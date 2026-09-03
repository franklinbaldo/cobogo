---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, a composição compacta da home, o cabeçalho escuro, a paleta e a linguagem de competência/proveniência. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar a competência publicada diretamente no navegador. A home apresenta a tarefa como `Entenda uma empresa e suas conexões públicas`, com busca por CNPJ/Razão Social e caminhos explícitos de uso. Problema material observado: nenhum.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal, publica manifest multi-competência e usa Internet Archive como camada durável. A superfície expõe origem, competência, preservação, verificação e estado. Problema material observado: nenhum.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os arquivos indicados pelo contrato público. `Levar a base` torna esse caminho explícito na própria home. Problema material observado: nenhum.

## Capacidades de superfície

- GitHub Pages/deploy — verificado em 2026-09-02; a #234 entrou em `main` como `2824bf6107bcd622570dd6beb27f820980fe5dc5` e o deploy `33710502906` concluiu com sucesso nesse commit.
- Captura visual — verificada depois do merge; a execução `33710502919` produziu desktop `1280×900` e tela estreita `390×844` no arquivo `9876751870`, nomeado `ficha-home-visual-2824bf6107bcd622570dd6beb27f820980fe5dc5`.
- Smoke/tests — CI da PR e CI de `main` concluíram com sucesso; o CI de `main` foi a execução `33710502829`.
- Preservação — snapshots/datasets continuam usando Internet Archive e manifest público como contrato verificável.

## O que este projeto faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados.
- Mantém dois caminhos igualmente legítimos — interface e arquivo público reutilizável — sob o mesmo contrato factual.
- No estado de indisponibilidade, usa o próprio contrato público (`manifest.json`) como alternativa verdadeira, em vez de inventar retry.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222).
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real; a Ficha continua sendo uma aplicação comprovada.
- `recoverable-error-states` — **validated**, isto é, já funcionou em pelo menos um projeto real. A #234 substituiu a exceção técnica pública por mensagem simples e uma alternativa segura e foi comprovada depois do merge nos dois tamanhos previstos.

## Dívida de qualidade atual

A avaliação é **21 de 24 pontos**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 3 e Confiança 3.

A dívida que mantinha UX em 2 foi fechada pela #234. A issue #228 continua aberta como dívida separada de Confiança: as capturas de PR ainda precisam distinguir de forma inequívoca o commit real da branch do commit sintético de merge usado pelo GitHub. A captura de `main` desta rodada identifica corretamente `2824bf6107...`.

## Histórico

- 2026-09-02 — #234 mergeada; deploy `33710502906`, CI `33710502829` e captura `33710502919` passaram no commit `2824bf6107...`. UX sobe de 2/4 para 3/4, avaliação passa de 20 para 21/24 e `recoverable-error-states` passa a `validated`. #233 fechada.
- 2026-09-02 — #232 mergeada; captura automática de `main` rodou com sucesso no commit `06665f7610...`; UI subiu de 1/4 para 3/4 e avaliação passou de 18 para 20/24.
- 2026-09-02 — #229 mergeada; captura da PR corrigiu o corte do `Buscar`, e o conteúdo web foi publicado com deploy verde.
- 2026-09-02 — #226 mergeada; captura desktop+narrow revelou o corte do CTA `Buscar`; avaliação inicial 18/24 com UI 1/4.
- 2026-09-01 — `main` e contrato público revalidados sem mudança de superfície; `gap_score: 0` preservado.
