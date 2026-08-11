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

## Confirmação independente

A regra foi derivada do hero navy do próprio website do Cobogó. Depois disso ela **previu** a mesma falha em [The Lab](../consumers/the-lab.md), um consumer que não a motivou: outra paleta, outro stack, outro autor e uma camada de acessibilidade já considerada — o produto tem skip link, tratamento de `prefers-reduced-motion` e um anel de foco deliberado.

O `.skip-link` do The Lab é o primeiro tab stop de 673 páginas. Ele é preenchido com `var(--accent-primary)` e o anel global usa `--focus-ring`, e os dois valores são o mesmo `#2d7d9a`:

| adjacência | medido |
|---|---|
| anel × elemento que ele cerca | 1,00:1 |
| anel × página atrás | 4,51:1 |

O indicador sobrevive por acidente — só porque o vão de 2px deixa aparecer o fundo da página. Não havia como aquele projeto expressar o segundo tom.

Isso move a regra de *uma observação em um consumer* para *uma relação confirmada em dois consumers independentes*, que é o limiar que o registry usa para tratar evidência como reutilizável e não como gosto local.

## Contraexemplo

Escolher "um azul com contraste maior" para o anel. Isso conserta uma adjacência e deixa a outra quebrada, e volta a quebrar assim que o consumer inverte uma faixa, um hero ou um banner.

## Limite

Isto é uma regra sobre a estrutura do indicador, não sobre sua expressão. Anel, espessura e geometria continuam sendo identidade local; o que não é local é precisar de dois tons.

O core inteiro é escrito em `:where()`, então o consumer sempre vence. Isso vale também para o segundo tom: uma regra local de `box-shadow` no mesmo elemento desloca o vão e sobra só o anel. Onde o anel sozinho já resolve — superfície normal — isso é degradação limpa e medida (5,38:1 claro, 11,08:1 escuro). Dentro de região invertida com controle claro, não é: ali o vão é justamente quem separa do controle, então componente com `box-shadow` próprio dentro de região invertida é ponto de verificação, não suposição.

A declaração da região é explícita, e CSS não tem como inferi-la: uma região invertida que esquecer de se declarar falha exatamente como antes, e falha em silêncio. O contrato torna a correção possível e barata, não automática. Vale tratar "faixa/hero/banner invertido sem declaração" como item de revisão quando um consumer introduzir uma superfície dessas.

## Evidência negativa

Duas hipóteses foram testadas e rejeitadas no mesmo loop:

- **faixa + inscrição no lugar do anel** — legível, mas transforma foco em layout: precisa reservar espaço, colide com conteúdo vizinho e não sobrevive em link inline no meio de um parágrafo;
- **anel + gesto geométrico localizado** — o gesto não carrega nenhuma informação que o anel já não carregue, colide nos cantos quando os alvos são adjacentes em grid, e multiplica em densidade. Ornamento que não trabalha.
