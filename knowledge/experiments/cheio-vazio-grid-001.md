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
status: running
outcome: "Três variantes foram implementadas com conteúdo idêntico. A variante B (contrapeso diagonal) é a candidata: A preserva leitura mas produz pouco ritmo; C cria separação excessiva entre blocos relacionados. O build da primeira versão comparativa passou; promoção aguarda os checks finais e observação da superfície publicada."
---

# Experimento: Grid vazado 001

A comparação deixou de ser implícita: o laboratório agora expõe três distribuições estruturais com o mesmo conteúdo e registra inclusive a variante rejeitada. O achado provisório é relacional, não ornamental: o vazio parece mais útil como contrapeso entre massas do que como corredor central ou simples margem lateral.
