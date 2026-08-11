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

## Tentativa de confirmação independente — falhou, e o erro é instrutivo

Uma primeira análise afirmou que [The Lab](../consumers/the-lab.md) reproduzia esta regra. **Estava errada.** A correção fica registrada porque o modo de errar é reutilizável.

A medição usou `getComputedStyle` para comparar a cor do anel com o `background-color` do elemento e obteve 1,00:1 — o anel e o `.skip-link` usam o mesmo `#2d7d9a`. Parecia o mesmo defeito.

A captura de pixels desmentiu. Varredura horizontal na borda do skip link em foco:

```text
teal(45,125,154) ×6 │ claro(250,251,249) ×2 │ anel teal ×2 │ página(250,250,250)
```

Com `outline-offset: 2px` e o elemento sobre a página, **o vão já revelava a página**. O vizinho do anel nunca foi o preenchimento do controle; era o vão claro, a 4,3:1 dos dois lados. O anel do The Lab sempre foi perceptível.

A lição metodológica: `cor-do-anel × background-do-elemento` **não é uma adjacência** quando há offset e o elemento está sobre um fundo contrastante. A adjacência real é com o que o vão expõe. O caso do Cobogó era genuíno justamente porque ali o vão expunha a própria região navy — navy dos dois lados do anel.

Isto estreita o alcance da regra, e é bom que estreite: o defeito exige **elemento dentro de uma região invertida**, não apenas um controle preenchido com a cor de destaque. Um controle accent sobre página clara já resolve sozinho.

A regra permanece confirmada em um consumer. Não promova para evidência multi-consumer até que outra região invertida real apareça.

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
