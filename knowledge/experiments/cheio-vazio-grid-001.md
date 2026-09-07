---
type: VisualExperiment
id: experiments/cheio-vazio-grid-001
title: "Grid vazado 001"
study_id: studies/cheio-vazio-na-web
direction: "Explorar vazios deliberados como ritmo e identidade em um grid editorial, sem depender de ornamentação figurativa."
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
  - "Selecionar a variante mais expressiva que preserve hierarquia e legibilidade."
  - "Publicar o specimen selecionado em /laboratorio/ e registrar a crítica."
critique_prompts:
  - "A composição parece intencional mesmo sem elementos decorativos adicionais?"
  - "Os vazios ajudam o ritmo e os níveis de informação?"
  - "No mobile, a composição relineariza sem buracos arbitrários ou perda de contexto?"
  - "Qual variante tem mais força sem perder clareza?"
warning_signs:
  - "O vazio parece erro de layout ou conteúdo faltando."
  - "A composição só funciona em uma largura específica."
  - "A técnica força ordem visual diferente da ordem semântica."
  - "O efeito depende de explicar a referência para parecer interessante."
skill_path: skills/experiments/cheio-vazio-grid-001/SKILL.md
status: selected
outcome: "Três variações com conteúdo idêntico foram comparadas e publicadas pela PR #599. A crítica selecionou B, o contrapeso diagonal: preserva melhor o ritmo e a relação entre massas; A é legível, mas pouco expressiva; C separa excessivamente blocos relacionados. Os gates técnicos confirmaram que a interface funciona em desktop e mobile; eles não são tratados como prova estética. A direção foi selecionada para novas explorações, sem ainda ser incorporada como princípio ou primitive."
---

# Exploração: Grid vazado 001

O laboratório expõe três distribuições estruturais com o mesmo conteúdo e preserva inclusive a variação que não queremos seguir. O aprendizado é de taste e composição: entre as alternativas exploradas, o vazio como contrapeso entre massas tem mais força do que o corredor central ou a simples margem lateral. A direção está `selected`; novas explorações podem descobrir se ela merece entrar na linguagem do Cobogó.
