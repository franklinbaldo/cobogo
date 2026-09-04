---
type: OpinionatedRecommendation
slug: risk-changing-controls-explain-consequence
maturity: validated
problem: controles que reduzem proteção podem parecer ajustes neutros quando a consequência real depende de conhecimento técnico que o leitor não deveria precisar ter
validated_in:
  - franklinbaldo/intuit
---

# Controles que reduzem proteção precisam explicar a consequência

## Posição

O Cobogó recomenda que qualquer controle público que reduza isolamento, privacidade, proteção ou outra garantia relevante explique a consequência no próprio ponto de decisão, antes da ativação. A recomendação está `validated`: em português comum, isso significa que já funcionou em pelo menos um projeto real com prova ligada ao que foi efetivamente publicado.

## Racional

Rótulos curtos como “permitir scripts”, “modo avançado” ou “confiar” podem esconder uma mudança material no modelo de proteção. A pessoa não deve precisar conhecer detalhes de sandbox, origem, permissões ou implementação para perceber que está assumindo risco adicional.

## Contrato

O estado mais protegido deve permanecer compreensível e, quando razoável, ser o padrão. Antes de uma ação que reduza proteção, a interface deve explicar em linguagem comum o que passa a ser permitido, o que deixa de estar isolado ou qual responsabilidade muda para a pessoa. A explicação precisa estar associada ao controle e disponível antes da decisão, não apenas em documentação externa ou depois da ativação.

## Critério observável

Uma pessoa que encontre o controle na interface consegue perceber, antes de ativá-lo, a consequência material da redução de proteção sem precisar conhecer a tecnologia interna. Testes devem verificar tanto a presença/associação dessa explicação quanto o comportamento técnico correspondente ao estado escolhido.

## Escape hatch

Se a implementação preservar proteção equivalente apesar de habilitar a capacidade adicional, a advertência pode ser desnecessária. Nesse caso, o projeto deve demonstrar tecnicamente a equivalência no comportamento relevante em vez de apenas alegá-la na interface.

## Evidência

A primeira aplicação concluída foi `franklinbaldo/intuit#30`, derivada da issue #29. Antes da mudança, `Allow Scripts` trocava o iframe de `sandbox=""` para `allow-scripts allow-same-origin allow-popups allow-forms` sem explicar na própria interface que o HTML precisava ser confiável e que o isolamento seria reduzido.

A PR preservou o comportamento técnico e acrescentou a explicação antes do controle, associada por `aria-describedby`. Um teste Playwright passou a exigir o texto, a associação semântica, o sandbox estrito antes da ativação e as permissões efetivas depois dela.

No commit final da branch `03808f44fd0247ed41d7218fd805ba0380e56380`, GitGuardian, Test e Visual capture terminaram verdes e a PR estava mergeável. Ela foi incorporada por squash como `495e54b9841ba2e18fcd5f980e995a6072e92963`.

O workflow Pages `33835991124` publicou esse commit e depois abriu novamente `https://franklinbaldo.github.io/intuit/` em navegador real. A etapa `Capture the page that was actually published` terminou verde e o pacote `9923434999`, `intuit-published-495e54b9841ba2e18fcd5f980e995a6072e92963`, registrou `phase=published`, o mesmo commit, a rota pública, `1440×900` e `390×844`, com horário `2026-09-04T04:21:05Z`. As duas imagens mostram a explicação legível antes de `Allow Scripts`; no viewport de 390 px ela quebra em linhas sem truncamento ou rolagem horizontal global aparente.

Esta evidência sustenta `validated`, não `stable`. `stable` exigirá convergência bem-sucedida em pelo menos um segundo projeto real, preservando sua identidade local.

## Falsificação

A recomendação deve ser revista se aplicações reais mostrarem que a explicação no ponto de decisão piora compreensão sem aumentar decisão informada, ou se a plataforma fornecer uma proteção nativa equivalente que torne a consequência descrita inexistente.