---
type: OpinionatedRecommendation
slug: risk-changing-controls-explain-consequence
maturity: opinionated
problem: controles que reduzem proteção podem parecer ajustes neutros quando a consequência real depende de conhecimento técnico que o leitor não deveria precisar ter
validated_in: []
---

# Controles que reduzem proteção precisam explicar a consequência

## Posição

O Cobogó recomenda que qualquer controle público que reduza isolamento, privacidade, proteção ou outra garantia relevante explique a consequência no próprio ponto de decisão, antes da ativação. `opinionated` significa que o Cobogó considera esta recomendação correta e quer testá-la em projetos reais; ela não depende de uma aplicação anterior para existir.

## Racional

Rótulos curtos como “permitir scripts”, “modo avançado” ou “confiar” podem esconder uma mudança material no modelo de proteção. A pessoa não deve precisar conhecer detalhes de sandbox, origem, permissões ou implementação para perceber que está assumindo risco adicional.

## Contrato

O estado mais protegido deve permanecer compreensível e, quando razoável, ser o padrão. Antes de uma ação que reduza proteção, a interface deve explicar em linguagem comum o que passa a ser permitido, o que deixa de estar isolado ou qual responsabilidade muda para a pessoa. A explicação precisa estar associada ao controle e disponível antes da decisão, não apenas em documentação externa ou depois da ativação.

## Critério observável

Uma pessoa que encontre o controle na interface consegue perceber, antes de ativá-lo, a consequência material da redução de proteção sem precisar conhecer a tecnologia interna. Testes devem verificar tanto a presença/associação dessa explicação quanto o comportamento técnico correspondente ao estado escolhido.

## Escape hatch

Se a implementação preservar proteção equivalente apesar de habilitar a capacidade adicional, a advertência pode ser desnecessária. Nesse caso, o projeto deve demonstrar tecnicamente a equivalência no comportamento relevante em vez de apenas alegá-la na interface.

## Evidência

Ainda não há aplicação real concluída. A primeira prova será `franklinbaldo/intuit#29`, onde o controle “Allow Scripts” altera o sandbox do preview e hoje não explica, na própria interface, que o conteúdo passa a ser tratado como confiável e com isolamento reduzido.

## Falsificação

A recomendação deve ser revista se aplicações reais mostrarem que a explicação no ponto de decisão piora compreensão sem aumentar decisão informada, ou se a plataforma fornecer uma proteção nativa equivalente que torne a consequência descrita inexistente.