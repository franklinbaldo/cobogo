---
type: OpinionatedRecommendation
slug: reader-first-project-explanation
maturity: validated
problem: superfícies frequentemente pressupõem que o visitante já conhece a tese e a maquinaria do projeto
validated_in: [franklinbaldo/intuit]
---

# A superfície deve explicar o projeto para quem chegou de fora

## Posição

A entrada pública de um consumer deve permitir que alguém sem contexto forme rapidamente um modelo mental verdadeiro de três coisas: o que pode fazer agora, o que o projeto faz por trás e o que pode reutilizar por conta própria.

## Racional

README não substitui interface pública. Projetos do portfólio frequentemente possuem pipelines, artifacts e capacidades muito mais ricos do que a home revela. Explicação progressiva reduz essa distância sem transformar a página em documentação técnica.

## Contrato

A superfície organiza explicação em camadas: ação imediata primeiro; tese/maquinaria suficiente para interpretar a ação; provenance, artifacts e detalhes reproduzíveis acessíveis conforme o leitor aprofunda.

## Critério observável

No teste do leitor de fora, D1, D2 e D3 podem ser respondidas a partir da superfície pública sem depender de conhecimento prévio do repositório.

## Escape hatch

Consumers deliberadamente single-purpose podem ter D2/D3 extremamente compactas. O contrato exige entendimento proporcional ao produto, não quantidade de texto.

## Evidência

`franklinbaldo/intuit` validou a recomendação na #35. A home passou a dizer, em uma única frase próxima da introdução, que o preview acontece localmente no navegador, que o Intuit não possui backend próprio de renderização e que o estado pode ser compartilhado por URL ou Gist.

A solução preservou a tarefa principal e a identidade local, ganhou teste Playwright para esses fatos e foi publicada no commit `98a53004f32ab7f89163fa8abbacd2863dcefdb1`. O pacote posterior à publicação `9966339875` registrou a mesma rota em 1440×900 e 390×844 e mostrou a explicação sem criar painel ou deslocar materialmente o editor.

Isso promove a recomendação para `validated`: em português comum, ela já funcionou em pelo menos um projeto real. Ainda não é `stable`; esse estado exige convergência bem-sucedida em pelo menos dois projetos distintos.

## Falsificação

Se uma camada explicativa competir com a tarefa principal, ela deve ser movida para progressive disclosure; o Cobogó não recomenda hero text ou documentação por obrigação.
