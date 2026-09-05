---
type: SurfaceQualityAssessment
repo: franklinbaldo/intuit
date: 2026-09-05
commit: 98a53004f32ab7f89163fa8abbacd2863dcefdb1
deploy: https://github.com/franklinbaldo/intuit/actions/runs/33955841991
capture: artifact:9966339875
scores:
  clarity: 4
  explainability: 4
  autonomy: 3
  ux: 3
  ui: 3
  trust: 4
total: 21
band: good
blockers: []
trend: up
---

# Intuit — avaliação de qualidade

## Veredito

**Avaliação de qualidade: 21 de 24 pontos — faixa boa.** Clareza 4/4, Explicabilidade 4/4, Autonomia 3/4, UX 3/4, UI 3/4 e Confiança 4/4.

A #35 fecha um problema específico de entendimento: a home agora explica o modelo operacional essencial sem exigir que o visitante leia o repositório. As demais dimensões não sobem por associação; Autonomia, UX e UI permanecem em 3/4.

## Clareza / D1

**4/4.** Editor, ações e preview continuam formando uma sequência direta. A nova frase de explicação fica acima do editor e não cria uma segunda ação principal, painel ou navegação concorrente.

A captura posterior à publicação em 1440×900 e 390×844 preserva editor e ações legíveis. Não apareceu problema material de Clareza no escopo observado.

## Explicabilidade / D2

**4/4.** A home já explicava a finalidade da ferramenta e a consequência de habilitar scripts. Desde #35, também explicita que o preview acontece localmente no navegador, que o Intuit não possui backend próprio de renderização e que o estado pode ser compartilhado por URL ou Gist.

Para um produto deliberadamente pequeno e de propósito único, isso é o modelo mental proporcional que um visitante precisa: o que fazer, onde a transformação acontece e como transportar o resultado/estado. Base64 e detalhes de `srcdoc` continuam corretamente na camada técnica do repositório; exigir esses detalhes na entrada pública adicionaria volume sem melhorar a compreensão da tarefa.

## Autonomia / D3

**3/4.** URL, Base64 e Gist continuam sendo caminhos públicos reais para transportar estado, e agora a home torna URL/Gist explícitos para quem chega de fora. A #35 melhora descoberta e compreensão desses caminhos, mas não cria uma nova saída reutilizável ou um contrato público mais amplo; 3/4 permanece mais fiel.

## UX

**3/4.** A frase nova é curta, fica próxima da introdução e não interrompe o fluxo editor → ações → preview. No mobile, ela quebra em poucas linhas sem rolagem horizontal e sem esconder a entrada principal; os controles permanecem acionáveis.

A prova de UX continua concentrada na home e em famílias específicas de estado já exercitadas. A rodada não percorreu uma variedade maior de jornadas que justificasse 4/4.

## UI

**3/4.** A mudança usa a hierarquia existente, com texto menor e secundário, sem novo card, ícone ou massa visual. As capturas de 1440×900 e 390×844 mostram que a identidade, o espaço em branco e a composição do editor continuam coerentes.

Isso resolve a necessidade desta rodada sem fornecer base suficiente para declarar a UI inteira como referência.

## Confiança

**4/4.** A afirmação nova corresponde ao código e ao `ProjectProfile`: renderização client-side, sem backend próprio de renderização, com URL/Gist como meios de transporte de estado. O teste `project-explanation.spec.js` protege esses três fatos e também exige que editor e botão Render permaneçam visíveis.

No commit atual da branch antes do merge, `c2519a4c5186e16991e2be929cf5cdea22243b38`, Test, Visual capture e GitGuardian passaram. A PR #35 foi incorporada como `98a53004f32ab7f89163fa8abbacd2863dcefdb1`. Depois do merge, Test `33955841985`, Visual capture `33955841993` e Pages `33955841991` terminaram com sucesso no mesmo commit.

O workflow de Pages abriu a página efetivamente publicada e produziu o pacote `9966339875`, `intuit-published-98a53004f32ab7f89163fa8abbacd2863dcefdb1`. O pacote registra `https://franklinbaldo.github.io/intuit/` em 1440×900 e 390×844, capturado em `2026-09-05T08:39:55Z`.

## Impedimentos objetivos

Nenhum para o problema escolhido.

## Recomendações Cobogó

- `reader-first-project-explanation` passa a `validated`: em português comum, a recomendação que o Cobogó queria testar agora funcionou em pelo menos um projeto real. No Intuit, uma explicação compacta foi suficiente para fechar D2 sem competir com a tarefa principal.
- `feedback-near-action` continua `validated`: já há uma aplicação real bem-sucedida reconciliada no fluxo Gist.
- `url-state-when-shareable` continua `validated`: já funcionou em pelo menos um projeto real; a #35 melhora a explicação do caminho, mas não constitui um segundo projeto independente.
- `visual-evidence-as-quality-gate` continua aplicável: a versão incorporada foi observada novamente depois da publicação.

## O que o Cobogó deve aprender deste projeto

Explicar “como funciona” não exige expor toda a engenharia. Em uma ferramenta estreita, uma frase factual pode ser suficiente quando cobre a fronteira que muda o modelo mental do leitor: execução local versus serviço remoto e os meios reais de transportar estado. A explicação deve parar antes de virar documentação técnica e manter a tarefa principal dominante.
