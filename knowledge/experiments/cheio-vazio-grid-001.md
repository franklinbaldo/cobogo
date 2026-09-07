---
type: VisualExperiment
id: experiments/cheio-vazio-grid-001
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
  - "Selecionar a variante que tenha mais força visual preservando hierarquia e legibilidade."
  - "Publicar o specimen escolhido em /laboratorio/ e registrar a crítica da exploração."
selection_signals:
  - "A composição parece intencional mesmo sem elementos decorativos adicionais."
  - "Os vazios ajudam a separar ritmos e níveis de informação em desktop."
  - "No mobile, a composição relineariza sem buracos arbitrários ou perda de contexto."
  - "A leitura permanece clara com zoom e navegação por teclado."
abandonment_signals:
  - "O vazio parece erro de layout ou conteúdo faltando."
  - "A composição só funciona em uma largura específica."
  - "A técnica força ordem visual diferente da ordem semântica."
  - "O efeito depende de explicar a referência para parecer interessante."
skill_path: skills/experiments/cheio-vazio-grid-001/SKILL.md
status: selected
critique: "Três variantes com conteúdo idêntico foram comparadas e publicadas pela PR #599. A variante B (contrapeso diagonal) tem mais força na relação entre massas; A é legível, mas pouco expressiva; C foi abandonada por separar excessivamente blocos relacionados. O merge 7adf8bf803e0633ca9df1734bad369ba797ecf8b passou contratos OKF e builds, e a superfície publicada foi verificada em desktop e mobile. A direção foi selecionada para novas explorações, não provada como regra estética."
---

# Exploração: Grid vazado 001

A comparação expõe três distribuições estruturais com o mesmo conteúdo e preserva inclusive a variante abandonada. O julgamento desta exploração é relacional e de taste: o contrapeso diagonal tem mais força que o corredor central ou a simples margem lateral. A direção foi `selected`; novas aplicações podem mostrar se ela merece ser incorporada à linguagem do Cobogó.
