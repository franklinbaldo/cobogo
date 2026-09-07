---
type: VisualExperiment
id: experiments/cheio-vazio-mapa-002
title: "Mapa vazado 002"
study_id: studies/cheio-vazio-na-web
direction: "Explorar o vazio como contrapeso no fechamento de um mapa de navegação com cardinalidade ímpar, sem esconder sequência nem reduzir área clicável."
medium: "Astro + Panda CSS responsive navigation grid"
constraints:
  - "Usar os mesmos cinco destinos e o mesmo texto nas três variantes."
  - "Preservar ordem DOM 01→05 e áreas clicáveis completas."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "No mobile, remover vazios e voltar ao fluxo linear."
  - "O vazio não pode interromper a relação entre número, título e descrição de um destino."
procedure:
  - "Reproduzir no laboratório o mapa de cinco destinos da home sem alterar o conteúdo."
  - "Comparar três distribuições: fecho total, contrapeso deslocado e vazio intercalado."
  - "Observar em 390px, 768px e 1440px e verificar se a sequência 01→05 continua imediatamente compreensível."
  - "Navegar por teclado e confirmar que a ordem de foco coincide com a ordem semântica."
  - "Selecionar a variante mais expressiva que continue parecendo um mapa navegável sem explicação da referência."
selection_signals:
  - "O vazio cria pausa ou contrapeso sem parecer cartão ausente."
  - "Os cinco destinos continuam escaneáveis como uma única família."
  - "A ordem 01→05 permanece evidente e coincide com DOM e foco."
  - "No mobile, a composição vira uma lista contínua sem lacunas artificiais."
abandonment_signals:
  - "O visitante pode interpretar o vazio como destino que não carregou."
  - "O deslocamento do item 05 dificulta perceber que ele encerra a sequência."
  - "A técnica diminui área clicável ou exige reordenar o DOM."
  - "A variante só parece intencional depois de ler a explicação da exploração."
skill_path: skills/experiments/cheio-vazio-mapa-002/SKILL.md
status: selected
critique: "A variante A é previsível e regular. A variante B preserva DOM, área clicável e sequência 01→05 e usa o vazio como contrapeso do fechamento; é a direção selecionada. A variante C fragmenta a varredura entre 03 e 04 e faz o intervalo parecer conteúdo ausente, portanto foi abandonada. A repetição do gesto em outro specimen aumenta nosso interesse por essa direção, mas não a transforma em verdade estética."
---

# Exploração: Mapa vazado 002

A segunda aplicação refinou o gosto do laboratório: o vazio interessa mais quando aparece depois de uma sequência já compreensível e atua como contrapeso do fechamento; no meio de uma tarefa de navegação, cobra escaneabilidade demais. É uma direção selecionada, não uma regra provada.
