---
type: OpinionatedRecommendation
slug: responsive-by-contract
maturity: opinionated
problem: uma superfície pode estar correta em desktop e degradar hierarquia, legibilidade ou ação em viewport estreito
validated_in: []
---

# Responsividade é parte do contrato de qualidade

## Posição

Uma superfície pública deve preservar tarefa, hierarquia, legibilidade e acesso à navegação em viewport estreito; mobile não é uma versão decorativamente comprimida do desktop.

## Racional

A experiência pública não pode depender de uma classe específica de dispositivo. Problemas responsivos também expõem hierarquias frágeis que desktop espaçoso mascara.

## Contrato

Capturas/validação visual material devem incluir pelo menos um viewport estreito quando a superfície é destinada a browser geral. Tabelas, navegação e ações precisam de comportamento deliberado.

## Critério observável

No viewport estreito, a tarefa principal continua utilizável, conteúdo não exige scroll horizontal acidental e controles essenciais permanecem alcançáveis.

## Escape hatch

Ferramentas explicitamente destinadas a telas grandes por requisito de domínio devem declarar essa limitação em vez de fingir suporte responsivo.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Viewports e estratégias específicas podem evoluir; o contrato permanece preservar a tarefa nos ambientes declaradamente suportados.
