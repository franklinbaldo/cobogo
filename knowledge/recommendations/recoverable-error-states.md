---
type: OpinionatedRecommendation
slug: recoverable-error-states
maturity: validated
problem: mensagens de erro podem informar falha sem permitir que o leitor entenda o próximo passo
validated_in:
  - franklinbaldo/ficha
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

Primeira validação real: `franklinbaldo/ficha#234`. Antes da mudança, a captura de `main` `33677384208`, commit `06665f7610af9d8e493fc03bb5862954bd3e8551`, mostrava no estado `remote-data-unavailable` detalhes como `NetworkError`, `XMLHttpRequest`, nome de arquivo e URL de transporte, sem próximo passo útil.

A #234 preservou a identidade local da Ficha e substituiu a mensagem pública por `A consulta está temporariamente indisponível.`, oferecendo `manifest.json` como alternativa pública que já fazia parte do produto. O diagnóstico técnico permaneceu no console; nenhum retry foi inventado.

No commit atual da branch da PR, `b98fc8f6e9c71880b0ff295f6140a23792e23c35`, GitGuardian, CI e captura visual passaram. Depois do merge, o commit `2824bf6107bcd622570dd6beb27f820980fe5dc5` teve deploy `33710502906`, CI `33710502829` e captura visual `33710502919` concluídos com sucesso. O arquivo `9876751870`, `ficha-home-visual-2824bf6107bcd622570dd6beb27f820980fe5dc5`, comprova desktop `1280×900` e tela estreita `390×844`: mensagem compreensível, alternativa real e ausência de erro técnico como texto público.

A recomendação agora é **validated**, isto é, já funcionou em pelo menos um projeto real com evidência completa. Ainda não é `stable`; isso exige convergência bem-sucedida em pelo menos um segundo projeto, preservando outra identidade local.

## Falsificação

A quantidade de detalhe deve diminuir quando mensagens técnicas confundirem mais do que ajudarem; ação e significado vêm antes de diagnóstico interno. A recomendação deve ser revista ou aposentada se aplicações reais mostrarem que ocultar detalhe do texto principal impede uma tarefa legítima do leitor ou se a alternativa oferecida for menos segura do que simplesmente explicar a indisponibilidade.
