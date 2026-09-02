---
type: OpinionatedRecommendation
slug: recoverable-error-states
maturity: opinionated
problem: mensagens de erro podem informar falha sem permitir que o leitor entenda o próximo passo
validated_in: []
---

# Erro deve preservar agência

## Posição

Quando uma tarefa pública falha de forma recuperável, a superfície deve dizer o que aconteceu no nível útil ao leitor e oferecer próximo passo possível, sem despejar detalhe interno desnecessário.

## Racional

Feedback que apenas declara “erro” encerra a agência do usuário. UX robusta trata falha como estado do fluxo, não exceção visual.

## Contrato

Erro material é distinguível de vazio/loading, possui mensagem compreensível e, quando existe ação segura, retry, alternativa ou caminho de retorno.

## Critério observável

Após uma falha recuperável, um leitor consegue decidir o que fazer em seguida sem abrir console ou recarregar às cegas.

## Escape hatch

Falhas não recuperáveis podem apenas explicar o estado e preservar navegação segura; não inventar retry quando ele não existe.

## Evidência

Primeira aplicação proposta: `franklinbaldo/ficha#233`. A captura automática de `main`, execução `33677384208`, commit `06665f7610af9d8e493fc03bb5862954bd3e8551`, arquivo `9864898516`, mostra o estado `remote-data-unavailable` em `390×844` e `1280×900`. A mensagem principal expõe `NetworkError`, `XMLHttpRequest`, nome de arquivo e URL de transporte, sem explicar ao leitor comum um próximo passo. A issue fixa o resultado desejado e deixa a Ficha livre para escolher texto e composição próprios.

A recomendação continua **opinionated**, isto é, o Cobogó considera a posição correta e agora a está testando em um projeto real. Abrir a issue e observar o problema não contam como validação. Ela só poderá passar a `validated` quando uma implementação real satisfizer o critério com evidência.

## Falsificação

A quantidade de detalhe deve diminuir quando mensagens técnicas confundirem mais do que ajudarem; ação e significado vêm antes de diagnóstico interno.
