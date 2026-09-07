---
type: VisualExploration
id: explorations/cheio-vazio-grid-001
title: "Grid vazado 001"
study_id: studies/cheio-vazio-na-web
direction: "Explorar vazios deliberados em um grid editorial como fonte de ritmo e identidade, sem depender de ornamentação figurativa."
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
  - "Selecionar a variante com mais força visual que preserve hierarquia e legibilidade."
  - "Publicar o specimen selecionado em /laboratorio/ e registrar a crítica."
qualities_to_seek:
  - "Intencionalidade mesmo sem elementos decorativos adicionais."
  - "Vazios que organizem ritmos e níveis de informação em desktop."
  - "Relinearização móvel sem buracos arbitrários ou perda de contexto."
  - "Leitura clara com zoom e navegação por teclado."
tensions_to_watch:
  - "O vazio parecer erro de layout ou conteúdo faltando."
  - "A composição depender de uma largura específica."
  - "A ordem visual divergir da ordem semântica."
  - "A referência precisar ser explicada para a composição parecer interessante."
skill_path: skills/explorations/cheio-vazio-grid-001/SKILL.md
status: concluded
result: selected
result_rationale: "B foi a tradução mais forte nesta comparação porque o vazio atua como contrapeso entre massas sem comprometer hierarquia, ordem semântica ou relinearização móvel; A permaneceu funcional mas pouco expressiva, e C separou demais blocos relacionados."
canonical_status: not_evaluated
canonical_rationale: null
canonical_targets: []
reflection: "Três variantes com conteúdo idêntico foram comparadas e publicadas pela PR #599. A variante B (contrapeso diagonal) tem mais força na relação entre massas; A é legível, mas pouco expressiva; C separa excessivamente blocos relacionados. No merge 7adf8bf803e0633ca9df1734bad369ba797ecf8b, os contratos OKF e builds passaram, o Deploy Pages #474 publicou a comparação e o gate pós-publicação verificou /laboratorio/ em 1600×1000 e 390×844 sem falhas estruturais ou overflow móvel. B foi selecionada dentro desta exploração; nenhuma adoção canônica foi avaliada."
---

# Exploração: Grid vazado 001

A comparação expõe três distribuições estruturais com o mesmo conteúdo. B foi selecionada dentro da exploração; isso registra um resultado local, não uma regra canônica do Cobogó.
