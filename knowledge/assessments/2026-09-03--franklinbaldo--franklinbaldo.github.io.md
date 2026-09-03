---
type: SurfaceQualityAssessment
repo: franklinbaldo/franklinbaldo.github.io
date: 2026-09-03
commit: aad33f3c78281295376da4e9278d79e87a2e64c7
deploy: https://franklinbaldo.github.io/
capture: artifact:9880072226
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 4
  ui: 4
  trust: 3
total: 23
band: reference
blockers: []
trend: baseline
---

# Franklin blog — primeira avaliação completa da superfície

## Veredito

**23 de 24 pontos — faixa de referência.** Esta é a primeira avaliação completa que serve de referência para comparações futuras. O blog é forte porque a identidade editorial, a navegação e os caminhos de recuperação continuam legíveis em telas estreitas sem virar uma aparência genérica do Cobogó.

A avaliação usa o `main` atual `aad33f3c78281295376da4e9278d79e87a2e64c7`. O workflow `Visual evidence` terminou com sucesso na execução `33720285374` e produziu o arquivo `9880072226`, nomeado `visual-evidence-aad33f3c78281295376da4e9278d79e87a2e64c7`. Foram examinadas, entre outras, a home e a página 404 em desktop e celular.

## Clareza / D1

**4/4.** A home deixa claro que se trata do espaço autoral de Franklin Baldo para ensaios, código e música. O ensaio mais recente, arquivo, caminhos de leitura e navegação secundária aparecem como ações reais e compreensíveis, sem exigir conhecimento da arquitetura do site.

## Explicabilidade / D2

**4/4.** Colofão, source público e organização editorial explicam progressivamente como a publicação funciona. O site não transforma implementação em propaganda e mantém capacidades planejadas separadas das realmente publicadas.

## Autonomia / D3

**4/4.** RSS em inglês e português, arquivo, busca, tags, source público e superfícies derivadas como Hrönir oferecem caminhos reais de consumo e reutilização sem depender de contexto privado.

## UX

**4/4.** A navegação principal e secundária preserva orientação em desktop e celular. A página 404 observada no mesmo conjunto de imagens oferece busca, cinco textos recentes e caminhos para home, arquivo e tags em ordem de leitura clara. O trabalho da PR #1663 sobreviveu às mudanças posteriores do site: o estado de erro não vira beco sem saída nem comprime as opções de recuperação.

## UI

**4/4.** A composição editorial tem hierarquia própria, tipografia legível e adaptação consistente entre desktop e celular. Na home estreita, o ensaio principal, lista de textos, caminhos de leitura, bloco autoral e rodapé permanecem distintos sem depender de uma grade rígida. Na 404 estreita, `Recently published` e os cinco títulos aparecem em fluxo vertical legível. A mudança posterior da #1667 também corrige a quebra da marca em larguras intermediárias sem sacrificar o comportamento abaixo do menu móvel.

## Confiança

**3/4 — boa.** A versão de `main` tem arquivo visual ligado explicitamente ao commit real e a publicação mantém source, RSS e proveniência observáveis. A nota não sobe para 4 porque `franklinbaldo.github.io#1664` continua aberta: em execuções de PR, o nome do arquivo visual ainda pode usar o commit sintético criado pelo GitHub para testar o merge, em vez do commit real da branch. O metadado da execução preserva o commit correto, mas a identidade exposta pelo nome ainda é ambígua.

## Recomendação Cobogó relacionada

`recovery-options-preserve-readable-flow` passa a **validated**: em linguagem comum, a recomendação já funcionou em pelo menos um projeto real. A PR #1663 foi incorporada e a captura atual de `main`, já depois de outras mudanças do blog, mostra que a 404 móvel continua oferecendo conteúdo alternativo legível e acionável. Ainda não é `stable`; para isso, a mesma regra precisa convergir com sucesso em pelo menos outro projeto preservando sua identidade local.

## Dívida concreta

A única dívida que impede 24/24 nesta avaliação é `franklinbaldo.github.io#1664`, sobre identificar sem ambiguidade o commit real da branch nas evidências visuais produzidas em PR. Não foi aberta nova issue apenas para aumentar a nota.