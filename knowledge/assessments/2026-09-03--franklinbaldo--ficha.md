---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-03
commit: 3cefc459f1709b57ab4ca8c1d3e0a2bb4521fb3c
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33714054369
capture: artifact:9877891254
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 4
  trust: 3
total: 22
band: reference
blockers: []
trend: up
---

# Ficha — avaliação de qualidade da superfície

## Veredito

**22 de 24 pontos — referência, em melhora.** A mudança desde a avaliação anterior é exclusivamente visual: a PR #237 substituiu o esqueleto de cartão genérico por uma composição que faz a própria tese do produto — fichário público, competência, arquivo e proveniência — organizar a página.

A avaliação aponta para o commit `3cefc459f1709b57ab4ca8c1d3e0a2bb4521fb3c`, que realmente entrou em `main`. Nesse commit, CI `33714054363`, deploy `33714054369` e captura visual `33714054334` concluíram com sucesso. O arquivo `9877891254` contém as imagens em 1280×900 e 390×844 e identifica o mesmo commit publicado.

## Clareza / D1

**4/4.** A primeira dobra diz `Uma empresa brasileira, ficha por ficha.` e explica que a pessoa pode consultar CNPJ, sócios, endereços e atividades econômicas. A busca continua sendo a ação principal e aparece logo em seguida como `Abra uma ficha`.

## Explicabilidade / D2

**4/4.** Receita Federal, série mensal, competência, arquivo público e preservação continuam integrados ao discurso da página. A composição reforça, em vez de esconder, que a informação é um estado datado e verificável.

## Autonomia / D3

**4/4.** O caminho de dados abertos e `manifest.json` permanece disponível. A interface continua deixando claro que o arquivo público pode ser reutilizado fora da própria página.

## UX

**3/4 — boa.** No celular, a composição secundária do desktop é retirada para que a consulta entre na primeira tela; campo e botão permanecem inteiros. O estado `remote-data-unavailable` continua apresentando mensagem compreensível e alternativa verdadeira em `manifest.json`.

A nota não sobe para 4 porque a captura automatizada desta rodada observa apenas o estado em que a origem remota não carrega. Ela prova a qualidade desse estado e da primeira dobra, mas não uma jornada completa de pesquisa, abertura de resultado e exploração de vínculos.

## UI

**4/4 — referência.** Esta é a dimensão que muda.

No desktop, a página deixa de depender de um cartão central com sombra e passa a usar título, inscrição, linhas, contraste tipográfico e espaço para estabelecer hierarquia. A lateral `FICHA / ARQUIVO PÚBLICO` organiza `Procure`, `Leia` e `Leve` sem competir com a ação principal. O começo de `Abra uma ficha` permanece visível na mesma tela.

Em 390×844, a estrutura secundária é removida, não simplesmente comprimida. O título continua legível, a descrição preserva medida confortável e a busca entra na primeira tela com o campo e o botão sem corte horizontal. A solução preserva identidade local: não parece CausaGanha, O Vigia ou a própria página de referência do Cobogó.

A nota 4 se justifica porque a implementação agora é uma referência útil para o portfólio em uma questão específica: como derivar identidade visual da estrutura e da tese do produto, em vez de trocar um recipiente genérico por decoração superficial.

## Confiança

**3/4.** Proveniência, competência e caminhos públicos continuam fortes. A captura feita depois do merge identifica corretamente o commit de `main` e o arquivo `capture-state.json` registra `page_errors: []` nos dois tamanhos.

A nota não sobe porque a issue #228 continua aberta. Em capturas de PR, o nome do arquivo ainda pode refletir o commit sintético usado pelo GitHub para testar o merge, em vez do commit real da branch. Isso continua sendo uma dívida de rastreabilidade da evidência antes do merge.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — **stable**: funcionou de forma convergente em pelo menos dois projetos reais.
- `primary-action-viewport-containment` — **validated**: a Ficha continua mostrando que a ação principal pode permanecer inteira em tela estreita.
- `recoverable-error-states` — **validated**: a indisponibilidade continua compreensível e oferece uma alternativa pública verdadeira.
- `content-hierarchy-before-decoration` — passa a **validated**: a #237 demonstra em um projeto real que hierarquia por título, ordem, agrupamento e semântica pode substituir o cartão genérico sem perder clareza nem identidade.

## Issues derivadas

- #228 — continua aberta; é a dívida concreta que mantém Confiança em 3/4.
- #235 — encerrada pela #237; a nova composição foi publicada e verificada.

## O que o Cobogó deve aprender desta Ficha

A metáfora do produto pode ser matéria-prima de composição sem virar tema decorativo. No caso da Ficha, `arquivo`, `competência`, `ficha`, `inscrição` e `proveniência` produzem uma hierarquia própria. O aprendizado compartilhável é preservar a primazia da estrutura; a tipografia, paleta e materialidade concreta continuam locais e não devem ser copiadas para outros projetos.