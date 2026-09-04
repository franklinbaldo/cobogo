---
type: SurfaceQualityAssessment
repo: franklinbaldo/baliza
date: 2026-09-04
commit: 8e324011bdc46a27b5c0ea2826288d4673b9faed
deploy: https://github.com/franklinbaldo/baliza/actions/runs/33749265187
capture: https://github.com/franklinbaldo/baliza/actions/runs/33670722002
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 2
  trust: 3
total: 20
band: good
blockers:
  - GitHub Pages não publicou o commit avaliado; #694 permanece aberta.
trend: down
---

# Baliza — avaliação de qualidade da interface pública

## Veredito

**20 de 24 pontos — faixa boa.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 3/4, UI 2/4 e Confiança 3/4.

A mudança principal desde a avaliação de 2 de setembro não é uma regressão visual comprovada. A #693 corrigiu no código o problema estreito de `/publicacoes`, e a observação em navegador de `main` passou. O problema novo é que o GitHub Pages não conseguiu publicar esse `main`: o deploy falhou no merge e voltou a falhar na tentativa agendada seguinte. Por isso UI não pode subir antes de observar a rota publicada, e Confiança cai de 4 para 3 enquanto a página pública não acompanha o repositório.

## Clareza / D1

**4/4.** A interface continua organizada por cidade e por tarefas concretas: monitoramento, Publicações, PCA, Atas, Contratos, comparação, arquivo, status e exploração. Nenhum problema material novo de Clareza foi observado.

## Explicabilidade / D2

**4/4.** O produto continua explicando a cadeia do PNCP e a estratégia de preservar antes de analisar. A interface liga a análise aos registros arquivados e não transforma a origem dos dados em caixa-preta. Nenhum problema material novo de Explicabilidade foi observado.

## Autonomia / D3

**4/4.** Registros públicos, catálogo do Internet Archive, manifesto de Parquet com URL/hash, explorador SQL no navegador e caminhos reutilizáveis para Python/R/JS continuam oferecendo uso independente sem chave de API. Nenhum problema material novo de Autonomia foi observado.

## UX

**3/4.** Os estados de carregamento, falha remota e simulação continuam honestos e distinguíveis, e a navegação preserva bons caminhos para arquivo e exploração. A nota não muda nesta rodada: a correção de `/publicacoes` melhora o código observado, mas ainda não existe comprovação pós-publicação suficiente para reavaliar o fluxo real que a pessoa recebe.

## UI

**2/4.** O código de `main` em `8e324011bdc46a27b5c0ea2826288d4673b9faed` contém a correção da #693, e a execução visual `33670722002` passou depois do merge. Isso mostra que a reorganização estreita funciona no runtime do workflow. Porém, em um projeto com GitHub Pages, uma imagem do build não substitui a página publicada. Como as execuções de publicação `33670722066` e `33749265187` falharam antes do deploy, ainda não existe a observação exigida da `/publicacoes` pública corrigida. UI permanece em 2 até essa prova existir.

Problema concreto relacionado: `franklinbaldo/baliza#692`, que continua aberta.

## Confiança

**3/4.** O Baliza continua forte em origem dos dados, preservação e distinção entre dado observado, simulação e falha remota. O ponto perdido é atualização pública: o último deploy bem-sucedido visível no histórico consultado é `33624526005`, no commit anterior `5d1c9cfdeaa46a50b1b7d3031f5f2cf59ef0ff9b`, enquanto `main` já está em `8e324011...`. A publicação do merge falhou e a tentativa agendada seguinte falhou de novo. Isso é uma diferença material entre o estado do repositório e o que pode ser comprovado como publicado, portanto Confiança 4 deixaria de representar a situação observada.

Problema operacional relacionado: `franklinbaldo/baliza#694`. A correção pertence ao próprio Baliza, não a esta rotina.

## Impedimento objetivo

O GitHub Pages não consegue chegar à etapa de publicação porque a auditoria de dependências de execução reprova por uma vulnerabilidade de severidade alta envolvendo `fast-uri`. O Cobogó não deve contornar nem esconder essa falha para obter resultado verde.

A avaliação pode ser revista quando um deploy de `main` que contenha `8e324011...` ou descendente terminar com sucesso e `/publicacoes` for aberta novamente na URL pública, inclusive em largura próxima de 390 px.

## Recomendação Cobogó

- `visual-evidence-as-quality-gate` está `stable`: em português comum, já funcionou de forma convergente em pelo menos dois projetos reais. Nesta rodada, sua utilidade é impedir que uma correção comprovada apenas no build seja confundida com uma correção entregue ao leitor.

## Issues relacionadas

- `franklinbaldo/baliza#692` — continua aberta até a observação da rota pública depois de uma publicação bem-sucedida.
- `franklinbaldo/baliza#694` — registra e delimita a falha operacional que impede o Pages de publicar o `main` atual.
