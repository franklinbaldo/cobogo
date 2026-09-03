---
type: SurfaceQualityAssessment
repo: franklinbaldo/cobogo
date: 2026-09-03
commit: 9d656e45d7a596e4bf4a6b7628583db32882c81e
deploy: https://github.com/franklinbaldo/cobogo/actions/runs/33799935642
capture: artifact:9910703829
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 4
  ui: 4
  trust: 4
total: 24
band: reference
blockers: []
trend: up
---

# Cobogó — avaliação após contrato de acessibilidade

## Veredito

**24 de 24 pontos — faixa de referência.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 4/4, UI 4/4 e Confiança 4/4.

A nota não significa perfeição universal. Significa que, nas seis rotas públicas e nos estados observados nesta rodada, não resta problema material comprovado nas dimensões do modelo. A diferença que mantinha Confiança em 3/4 era falta de comprovação ampla de teclado, foco, contraste e semântica automatizável; a #454 tornou essa comprovação reproduzível e repetiu o teste depois do merge.

A avaliação aponta para `9d656e45d7a596e4bf4a6b7628583db32882c81e`, commit que realmente entrou em `main` depois da PR #454. O GitHub Pages publicou esse mesmo commit na execução `33799935642`. O job posterior à publicação abriu novamente as seis rotas públicas e produziu o arquivo `9910703829`, ligado ao mesmo commit.

## Clareza / D1

**4/4 — referência.** Home, Grammar, Core, Patterns, Consumers e Knowledge continuam deixando claro o que o sistema oferece e como uma pessoa pode avançar da tese para regras, aplicações e conhecimento reutilizável.

## Explicabilidade / D2

**4/4 — referência.** A superfície e o corpus continuam explicando por que as decisões existem, separando gramática compartilhada de aparência uniforme e distinguindo documentação, implementação e conhecimento canônico.

## Autonomia / D3

**4/4 — referência.** CSS, componentes, exemplos, entry points e corpus permanecem reutilizáveis sem depender de uma sessão interna. A página Knowledge continua expondo comandos reais para consultar o corpus.

## UX

**4/4 — referência.** As seis rotas mantêm navegação previsível, leitura contínua, responsividade e comportamento compatível com movimento reduzido. A nova verificação também percorre os controles sequencialmente com `Tab`, em vez de inferir navegabilidade apenas pela marcação.

## UI

**4/4 — referência.** A identidade própria do site continua preservada, com hierarquia e composição consistentes em desktop e celular. A correção responsiva anterior de `/knowledge/` permanece comprovada depois da publicação.

## Confiança

**4/4 — referência nas rotas e estados observados.** A #454 adicionou uma verificação reproduzível que combina axe com navegação real por `Tab` e inspeção do elemento que realmente recebe foco. O critério reprova violações sérias/críticas, controles esperados que não sejam alcançados e foco sem indicador perceptível.

No commit da branch `8910488990415d0c4c0d78517b9b83a876a1bf3b`, a etapa `Semantic accessibility contract` passou e o arquivo `9908482256` registrou, nas seis rotas, HTTP 200, nenhuma violação séria/crítica do axe e nenhuma falha de teclado/foco. Depois do merge, a execução `33799935728` repetiu o mesmo contrato em `main` sobre `9d656e45...` e produziu `9910687966`, novamente sem falhas. O Pages `33799935642` publicou o mesmo commit e a observação posterior à publicação também passou, produzindo `9910703829`.

A nota 4 não transforma automação em substituto de testes com tecnologias assistivas reais. Ela registra que o conjunto de acessibilidade, proveniência, correspondência entre afirmação e arquivo público, responsividade e publicação atingiu nível de referência no escopo observado. Um problema assistivo concreto futuro deve reabrir a dimensão.

## Recomendações Cobogó relacionadas

- `semantic-accessibility-default` — passa a **validated**, isto é, já funcionou em pelo menos um projeto real. Ainda não é `stable`, porque falta convergência em um segundo projeto preservando sua implementação local.
- `visual-evidence-as-quality-gate` — permanece **stable**; a prova continua ligada ao commit realmente observado.
- `responsive-by-contract` — permanece **stable**; as seis rotas continuam sem alargar a página em tela estreita.

## Dívida concreta restante

Nenhuma dívida material foi encontrada nas seis rotas e estados avaliados que justifique uma issue nova nesta rodada. Isso não congela a nota: uma falha real de teclado, contraste, semântica, publicação, navegação ou responsividade deve reduzi-la quando aparecer.
