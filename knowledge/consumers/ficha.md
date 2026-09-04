---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, o cabeçalho escuro, a linguagem de competência/proveniência e a composição editorial própria. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar empresas e vínculos públicos diretamente no navegador. A home apresenta a tarefa como `Uma empresa brasileira, ficha por ficha.` e mantém `Abra uma ficha` como ação principal. Problema material observado: nenhum.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal, publica manifest multi-competência e usa Internet Archive como camada durável. A interface expõe origem, competência, preservação, verificação e estado. Problema material observado: nenhum.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os arquivos indicados pelo contrato público. O caminho de dados abertos continua explícito na própria home. Problema material observado: nenhum.

## Capacidades da interface pública

- GitHub Pages — verificado em 2026-09-04; a #239 entrou em `main` como `05aa359f63718ebf5e0a8bd4920c189c24d73813` e a publicação `33853865948` terminou com sucesso nesse commit.
- Observação visual — a execução de `main` `33853865990` produziu desktop `1280×900` e tela estreita `390×844` no pacote `9929398297`, nomeado `ficha-home-visual-05aa359f63718ebf5e0a8bd4920c189c24d73813`.
- Identidade da prova visual — corrigida pela #239. Em pull request, o nome do pacote, `capture-state.json` e `accessibility-evidence.json` passaram a registrar o mesmo commit real da branch. Em `main`, os dois JSONs registram o commit realmente incorporado.
- Acessibilidade semântica em navegador — verificada no build de `main`: zero violações sérias/críticas do axe, sete de sete controles visíveis alcançados por `Tab` e zero passos sem indicador perceptível de foco.
- CI — `33853865906` terminou com sucesso no mesmo commit de `main`.
- Preservação — snapshots/datasets continuam usando Internet Archive e manifest público como contrato verificável.

## O que este projeto faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados.
- Mantém dois caminhos legítimos — interface e arquivo público reutilizável — sob o mesmo contrato factual.
- No estado de indisponibilidade, usa o próprio contrato público (`manifest.json`) como alternativa verdadeira, em vez de inventar retry.
- Deriva a identidade visual da própria tese de produto — ficha, arquivo, competência, inscrição e proveniência — sem transformar a fundação Cobogó em uma aparência uniforme.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222).
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais. A #239 reforça o contrato: os arquivos de uma mesma prova precisam concordar sobre o commit realmente avaliado.
- `semantic-accessibility-default` — **stable**. A Ficha executa axe, teclado e foco no build real em Chromium. A página publicada ainda não recebe essa mesma auditoria completa depois do deploy; a #240 registra essa dívida separadamente.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real; a busca da Ficha continua inteira no celular.
- `recoverable-error-states` — **validated**; a indisponibilidade continua em linguagem comum e oferece `manifest.json` como alternativa segura.
- `content-hierarchy-before-decoration` — **validated**; a composição continua baseada em título, ordem, linhas, inscrições e espaço.

## Dívida de qualidade atual

A avaliação permanece **22 de 24 pontos — referência**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 4 e Confiança 3.

A #228 está encerrada: a #239 fez o pacote, o JSON visual e o JSON de acessibilidade concordarem sobre o commit real da revisão observada, tanto na própria PR quanto depois da incorporação em `main`.

Confiança continua em 3 por uma questão diferente, agora registrada na #240: axe, teclado e foco ainda são executados contra o build servido pelo workflow, não novamente contra a URL pública depois que o GitHub Pages publica o commit. UX continua em 3 porque a observação automatizada ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos.

## Histórico

- 2026-09-04 — #239 incorporada como `05aa359f637...`; CI `33853865906`, observação `33853865990` e publicação `33853865948` passaram. Na PR e em `main`, nome do pacote, JSON visual e JSON de acessibilidade passaram a concordar sobre o commit real observado. #228 encerrada. Avaliação permanece 22/24; #240 registra a auditoria semântica ainda ausente na URL publicada.
- 2026-09-03 — #238 incorporada como `044ab1c205...`; CI, observação e publicação passaram. Axe encontrou zero violações sérias/críticas, teclado alcançou sete de sete controles visíveis e nenhum foco ficou sem indicador perceptível.
- 2026-09-03 — #237 incorporada; UI subiu para 4/4 e avaliação passou para 22/24.
- 2026-09-02 — #234 incorporada; UX subiu de 2/4 para 3/4 e avaliação passou para 21/24.
- 2026-09-02 — #232 incorporada; UI subiu de 1/4 para 3/4 e avaliação passou para 20/24.
- 2026-09-02 — #229 incorporada; a observação da PR corrigiu o corte do `Buscar` e o conteúdo web foi publicado.
- 2026-09-02 — #226 incorporada; desktop+tela estreita revelaram o corte do CTA `Buscar`; avaliação inicial 18/24 com UI 1/4.
- 2026-09-01 — `main` e contrato público revalidados sem mudança de interface; `gap_score: 0` preservado.
