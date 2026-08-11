---
type: canon-rule
title: Foco tem dois vizinhos
status: proposed
review_question: O indicador de foco continua legível tanto contra o controle quanto contra a superfície em que o controle está?
---

# Foco tem dois vizinhos

Um indicador de foco nunca toca uma cor só. Ele fica entre o controle que envolve e a superfície sobre a qual esse controle está. Por isso foco é uma **relação entre dois tons**, não um valor: um tom sozinho só consegue satisfazer uma das duas adjacências.

O vão entre o controle e o anel não é espaço vazio — é o segundo tom fazendo trabalho de acessibilidade.

## Consequência visível

O contrato de foco expõe um par (`--cobogo-focus` para o anel, `--cobogo-focus-contrast` para o vão) e um par equivalente para regiões invertidas. Uma região cujo fundo é invertido em relação ao documento se declara e re-deriva o par; ela não reescreve a cor à mão.

## Evidência

Medido no próprio website do Cobogó, no botão primário claro dentro do hero navy, em captura real de navegador:

| adjacência | um tom só | dois tons |
|---|---|---|
| anel × superfície da região | 2,03:1 | 13,51:1 |
| anel × preenchimento do controle | 1,0:1 | 1,0:1 |
| vão × preenchimento do controle | — | 15,81:1 |

Com um tom só, o anel falhava contra a superfície e era idêntico ao controle ao mesmo tempo. Com dois tons, cada tom carrega exatamente uma adjacência: o anel separa da superfície, o vão separa do controle. O par claro/papel não mudou (6,03:1 antes e depois), então a correção não custou nada onde já funcionava.

## Contraexemplo

Escolher "um azul com contraste maior" para o anel. Isso conserta uma adjacência e deixa a outra quebrada, e volta a quebrar assim que o consumer inverte uma faixa, um hero ou um banner.

## Limite

Isto é uma regra sobre a estrutura do indicador, não sobre sua expressão. Anel, espessura e geometria continuam sendo identidade local; o que não é local é precisar de dois tons.

## Evidência negativa

Duas hipóteses foram testadas e rejeitadas no mesmo loop:

- **faixa + inscrição no lugar do anel** — legível, mas transforma foco em layout: precisa reservar espaço, colide com conteúdo vizinho e não sobrevive em link inline no meio de um parágrafo;
- **anel + gesto geométrico localizado** — o gesto não carrega nenhuma informação que o anel já não carregue, colide nos cantos quando os alvos são adjacentes em grid, e multiplica em densidade. Ornamento que não trabalha.
