---
type: SurfaceQualityAssessment
repo: franklinbaldo/intuit
date: 2026-09-05
commit: 988296675b1384a7c86a7ec4887e0835c2310bb2
deploy: https://github.com/franklinbaldo/intuit/actions/runs/33952214058
capture: artifact:9965193464
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

A nota total não sobe só porque um problema concreto foi corrigido. A #33 melhorou uma família real de estados de erro do caminho `?gist=`, mas D2, D3, UX e UI ainda têm escopo observado insuficiente para virar referência inteira.

## Clareza / D1

**4/4.** Editor, ações e preview continuam formando uma sequência direta. Quando a página é aberta por `?gist=`, a região de alerta agora explica a falha sem misturar situações diferentes.

Não apareceu problema material de Clareza no escopo observado.

## Explicabilidade / D2

**3/4.** A home explica a finalidade básica da ferramenta e a consequência de habilitar scripts, mas a lógica mais ampla de URL, Base64, Gist e `srcdoc` ainda depende parcialmente do repositório para entendimento profundo. A #33 melhora mensagens operacionais, não essa camada de explicação de fundo.

## Autonomia / D3

**3/4.** URL, Base64 e Gist continuam sendo caminhos públicos reais para transportar estado. A #33 melhora especificamente Gist: sucesso com `.html` continua preenchendo editor e preview; Gist válido sem HTML, resposta HTTP da API, falha ao carregar o arquivo bruto e falha de requisição agora produzem mensagens distintas e não fabricam conteúdo.

Isso torna um caminho existente mais recuperável e confiável, mas não amplia por si só a família de saídas reutilizáveis a ponto de justificar 4/4.

## UX

**3/4.** Antes da #33, falhas materialmente diferentes do caminho Gist terminavam na mesma mensagem `Failed to load Gist content.`. Agora o estado apresentado acompanha o que foi realmente observado: status HTTP da API, ausência de `.html`, falha no arquivo HTML ou indisponibilidade da requisição.

O novo teste Playwright intercepta API e arquivo bruto sem depender da rede real e cobre cinco cenários, inclusive sucesso. A prova de UX continua concentrada na home e em famílias específicas de estado; 3/4 permanece mais fiel que 4/4.

## UI

**3/4.** A correção reutiliza a região de alerta existente e não cria um novo componente nem altera a composição principal. O Pages e as observações posterior ao merge preservaram a home nas larguras já adotadas pela rotina. Não houve base suficiente para elevar UI.

## Confiança

**4/4.** O comportamento está ligado a testes e à versão publicada. A PR #33 foi incorporada como `988296675b1384a7c86a7ec4887e0835c2310bb2`. No commit atual da branch antes do merge, `c299c07e692073c4bda671f31fc99a34a52f0fed`, Test e Visual capture passaram. Depois do merge, Test `33952214057`, Visual capture `33952214063` e Pages `33952214058` terminaram com sucesso no commit incorporado.

O workflow de Pages abriu a página efetivamente publicada, produziu o pacote `9965193464`, `intuit-published-988296675b1384a7c86a7ec4887e0835c2310bb2`, e concluiu com sucesso a captura posterior à publicação. Isso comprova o estado observado; não é uma afirmação de perfeição universal.

## Impedimentos objetivos

Nenhum para o problema escolhido.

## Recomendações Cobogó

- `feedback-near-action` passa a `validated`: em português comum, agora há uma aplicação real bem-sucedida reconciliada. No Intuit, a região de alerta comunica o resultado do carregamento Gist no próprio fluxo, distingue estados observáveis e oferece recuperação quando possível.
- `url-state-when-shareable` continua `validated`, isto é, já funcionou em pelo menos um projeto real. Esta rodada melhora Gist dentro do mesmo projeto e não fornece uma segunda aplicação independente para torná-la `stable`.
- `visual-evidence-as-quality-gate` continua aplicável: a versão incorporada foi observada novamente depois da publicação.

## O que o Cobogó deve aprender deste projeto

Feedback útil não é apenas estar perto da ação: ele precisa preservar a diferença entre estados que levam a decisões diferentes. “Não há arquivo HTML”, “GitHub respondeu com erro” e “a requisição falhou” não devem ser achatados numa mensagem genérica quando o sistema conhece a distinção. Ao mesmo tempo, o texto não deve inventar causa além do que foi observado.
