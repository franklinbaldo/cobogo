---
type: SurfaceQualityAssessment
repo: franklinbaldo/intuit
date: 2026-09-04
commit: 20f96cfbbd41715bb270f6eecaa71e7bb4d91f67
deploy: https://github.com/franklinbaldo/intuit/actions/runs/33909370435
capture: artifact:9950763192
scores:
  clarity: 4
  explainability: 3
  autonomy: 3
  ux: 3
  ui: 3
  trust: 4
total: 20
band: good
blockers: []
trend: flat
---

# Intuit — avaliação de qualidade

## Veredito

**Avaliação de qualidade: 20 de 24 pontos — faixa boa.** Clareza 4/4, Explicabilidade 3/4, Autonomia 3/4, UX 3/4, UI 3/4 e Confiança 4/4.

A nota total não muda nesta rodada. O que mudou foi um problema concreto dentro de UX e Autonomia: `Copy Link` e `Update URL` deixaram de afirmar que qualquer volume de HTML cabe de forma confiável em um endereço compartilhável. A correção melhora o comportamento sem, por si só, transformar as dimensões 3/4 em referência.

## Clareza / D1

**4/4.** Editor, ações e preview continuam formando uma sequência direta. A nova mensagem só aparece quando a pessoa tenta transformar conteúdo excessivamente grande em link e explica a limitação no ponto da ação.

Não há problema material de Clareza demonstrado no escopo observado.

## Explicabilidade / D2

**3/4.** A home continua explicando a finalidade básica da ferramenta e a consequência de habilitar scripts. A lógica mais ampla de URL, Base64, Gist e `srcdoc` ainda depende em parte do repositório para explicação profunda; esta rodada não tentou transformar isso em documentação de referência dentro da página.

Não surgiu novo problema concreto de Explicabilidade nesta rodada.

## Autonomia / D3

**3/4.** URL, Base64 e Gist continuam oferecendo caminhos de transporte do estado. A #31 melhora a honestidade desse contrato: conteúdo pequeno continua cabendo em `?data=`, enquanto um endereço que ultrapassaria o orçamento conservador de 8.000 caracteres é recusado antes de ser apresentado como compartilhável, com Gist oferecido como alternativa real já existente no produto.

Isso melhora uma fronteira de autonomia, mas não adiciona um novo formato reutilizável nem amplia a família de saídas públicas a ponto de justificar 4/4.

## UX

**3/4.** Antes da #31, `Copy Link` escrevia qualquer URL na área de transferência e confirmava `Copied!`; `Update URL` fazia o mesmo estado entrar no endereço atual, sem considerar tamanho. Agora ambos usam o mesmo contrato. Se o endereço projetado excede 8.000 caracteres, a ação é recusada, o editor é preservado e a região de alerta explica que o HTML é grande demais para um link confiável e sugere manter o conteúdo no editor ou usar Gist.

Os testes Playwright exercitam três casos: link normal continua funcionando; uma cópia excessiva não altera a área de transferência nem confirma sucesso; e uma atualização excessiva não altera a URL. A prova de UX continua concentrada na home e numa família limitada de estados, portanto 3/4 permanece uma nota mais fiel que 4/4.

## UI

**3/4.** A mudança reutiliza a região de alerta existente e não cria uma nova camada visual. O workflow de observação passou novamente em `main` e o pacote posterior à publicação preserva a composição em 1440×900 e 390×844. Não houve base suficiente nesta rodada para elevar UI.

## Confiança

**4/4.** O limite é um contrato explícito e testado, não uma promessa textual desacoplada do comportamento. A #31 foi incorporada como `20f96cfbbd41715bb270f6eecaa71e7bb4d91f67`; `Test` `33909370588`, `Visual capture` `33909370422` e Pages `33909370435` terminaram com sucesso nesse mesmo commit.

Depois da publicação, o pacote `9950763192`, chamado `intuit-published-20f96cfbbd41715bb270f6eecaa71e7bb4d91f67`, registrou `phase=published`, a rota `https://franklinbaldo.github.io/intuit/`, larguras 1440×900 e 390×844 e horário `2026-09-04T19:06:56Z`.

Isso comprova a revisão publicada e os estados testados; não é uma afirmação de perfeição universal.

## Impedimentos objetivos

Nenhum para o problema escolhido.

## Recomendações Cobogó

- `url-state-when-shareable` passa a `validated`: em português comum, já funcionou em pelo menos um projeto real. O Intuit preserva estado por URL no caso normal e recusa explicitamente o caso excessivamente grande, em vez de produzir um endereço que a própria interface chama de compartilhável sem garantia suficiente.
- `feedback-near-action` continua aplicável: a recusa usa a região de alerta da própria ferramenta e acontece imediatamente após a ação.
- `visual-evidence-as-quality-gate` continua aplicável: a revisão foi observada novamente depois da publicação.

## O que o Cobogó deve aprender deste projeto

“Estado na URL” precisa ter uma fronteira de tamanho. Uma recomendação de compartilhamento fica mais forte quando também diz quando recusar a serialização e aponta uma alternativa real. O limite numérico pode variar por produto; o invariante importante é não confirmar como compartilhável um endereço que excede o orçamento de confiabilidade escolhido pelo projeto.
