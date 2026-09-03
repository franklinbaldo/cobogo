---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, o cabeçalho escuro, a linguagem de competência/proveniência e a composição editorial própria. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar empresas e vínculos públicos diretamente no navegador. A home apresenta a tarefa como `Uma empresa brasileira, ficha por ficha.` e mantém `Abra uma ficha` como ação principal. Problema material observado: nenhum.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal, publica manifest multi-competência e usa Internet Archive como camada durável. A superfície expõe origem, competência, preservação, verificação e estado. Problema material observado: nenhum.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os arquivos indicados pelo contrato público. O caminho de dados abertos continua explícito na própria home. Problema material observado: nenhum.

## Capacidades de superfície

- GitHub Pages/deploy — verificado em 2026-09-03; a #237 entrou em `main` como `3cefc459f1709b57ab4ca8c1d3e0a2bb4521fb3c` e o deploy `33714054369` concluiu com sucesso nesse commit.
- Captura visual — verificada depois do merge; a execução `33714054334` produziu desktop `1280×900` e tela estreita `390×844` no arquivo `9877891254`, nomeado `ficha-home-visual-3cefc459f1709b57ab4ca8c1d3e0a2bb4521fb3c`.
- Smoke/tests — CI de `main` `33714054363` concluiu com sucesso no mesmo commit.
- Preservação — snapshots/datasets continuam usando Internet Archive e manifest público como contrato verificável.

## O que este projeto faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados.
- Mantém dois caminhos legítimos — interface e arquivo público reutilizável — sob o mesmo contrato factual.
- No estado de indisponibilidade, usa o próprio contrato público (`manifest.json`) como alternativa verdadeira, em vez de inventar retry.
- Deriva a identidade visual da própria tese de produto — ficha, arquivo, competência, inscrição e proveniência — sem transformar a fundação Cobogó em uma aparência uniforme.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222).
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real; a busca da Ficha continua inteira no celular.
- `recoverable-error-states` — **validated**, isto é, já funcionou em pelo menos um projeto real. A indisponibilidade continua em linguagem comum e oferece `manifest.json` como alternativa segura.
- `content-hierarchy-before-decoration` — **validated** em 2026-09-03: a #237 substituiu o cartão genérico por hierarquia construída com título, ordem, linhas, inscrições e espaço, comprovada depois da publicação em desktop e celular.

## Dívida de qualidade atual

A avaliação é **22 de 24 pontos — referência**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 4 e Confiança 3.

UI sobe de 3 para 4 porque a #237 tornou a composição uma referência útil de identidade local estruturada: a página permanece clara sem depender de cartão central ou decoração superficial e adapta a primeira dobra no celular sem sacrificar a consulta.

A issue #228 continua aberta como dívida separada de Confiança: capturas de PR ainda precisam distinguir de forma inequívoca o commit real da branch do commit sintético de merge usado pelo GitHub. A captura de `main` identifica corretamente `3cefc459f170...`.

## Histórico

- 2026-09-03 — #237 mergeada; deploy `33714054369`, CI `33714054363` e captura `33714054334` passaram no commit `3cefc459f170...`. UI sobe de 3/4 para 4/4, avaliação passa de 21 para 22/24 e `content-hierarchy-before-decoration` passa a `validated`.
- 2026-09-02 — #234 mergeada; deploy `33710502906`, CI `33710502829` e captura `33710502919` passaram no commit `2824bf6107...`. UX sobe de 2/4 para 3/4, avaliação passa de 20 para 21/24 e `recoverable-error-states` passa a `validated`. #233 fechada.
- 2026-09-02 — #232 mergeada; captura automática de `main` rodou com sucesso no commit `06665f7610...`; UI subiu de 1/4 para 3/4 e avaliação passou de 18 para 20/24.
- 2026-09-02 — #229 mergeada; captura da PR corrigiu o corte do `Buscar`, e o conteúdo web foi publicado com deploy verde.
- 2026-09-02 — #226 mergeada; captura desktop+narrow revelou o corte do CTA `Buscar`; avaliação inicial 18/24 com UI 1/4.
- 2026-09-01 — `main` e contrato público revalidados sem mudança de superfície; `gap_score: 0` preservado.
