---
type: VisualExperiment
id: experiments/cheio-vazio-grid-001
title: "Grid vazado 001"
study_id: studies/cheio-vazio-na-web
hypothesis: "Vazios deliberados em um grid editorial podem criar ritmo e identidade sem reduzir a legibilidade nem depender de ornamentação figurativa."
medium: "Astro + Panda CSS responsive grid"
constraints:
  - "Não desenhar blocos de cobogó nem reproduzir padrões arquitetônicos literais."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "A ordem de leitura no DOM deve permanecer lógica sem CSS."
  - "O vazio não pode separar rótulo, título e explicação que pertençam ao mesmo bloco semântico."
procedure:
  - "Produzir três composições com o mesmo conteúdo e diferentes distribuições de cheios e vazios."
  - "Comparar as três em 390px, 768px e 1440px."
  - "Testar navegação por teclado e leitura sem CSS para confirmar ordem semântica."
  - "Escolher a variante mais expressiva que preserve hierarquia e legibilidade."
  - "Publicar o specimen escolhido em /laboratorio/ e registrar o resultado no experimento."
success_signals:
  - "A composição parece intencional mesmo sem elementos decorativos adicionais."
  - "Os vazios ajudam a separar ritmos e níveis de informação em desktop."
  - "No mobile, a composição relineariza sem buracos arbitrários ou perda de contexto."
  - "A leitura permanece clara com zoom e navegação por teclado."
failure_signals:
  - "O vazio parece erro de layout ou conteúdo faltando."
  - "A composição só funciona em uma largura específica."
  - "A técnica força ordem visual diferente da ordem semântica."
  - "O efeito depende de explicar a referência para parecer interessante."
skill_path: skills/experiments/cheio-vazio-grid-001/SKILL.md
status: promising
outcome: "Três variantes com conteúdo idêntico foram comparadas e publicadas pela PR #599. A variante B (contrapeso diagonal) preserva melhor o ritmo e a relação entre massas; A é legível, mas pouco expressiva; C foi rejeitada por separar excessivamente blocos relacionados. No merge 7adf8bf803e0633ca9df1734bad369ba797ecf8b, os contratos OKF e builds passaram, o Deploy Pages #474 publicou a comparação e o gate pós-publicação verificou /laboratorio/ em 1600×1000 e 390×844 sem falhas estruturais ou overflow móvel. O resultado é promissor, mas ainda não justifica princípio ou primitive sem evidência em outro contexto."
---

# Experimento: Grid vazado 001

A comparação deixou de ser implícita: o laboratório expõe três distribuições estruturais com o mesmo conteúdo e registra inclusive a variante rejeitada. O achado desta rodada é relacional, não ornamental: o vazio funcionou melhor como contrapeso entre massas do que como corredor central ou simples margem lateral. A hipótese avançou para `promising`; uma sessão de síntese futura deve procurar repetição desse efeito antes de transformá-lo em recomendação durável.
