---
type: VisualExploration
id: experiments/cheio-vazio-mapa-002
title: "Mapa vazado 002"
study_id: studies/cheio-vazio-na-web
direction: "Explorar o vazio como contrapeso no fechamento de um mapa de navegação ímpar, preservando sequência, área clicável e sensação de conjunto."
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
  - "Publicar a comparação em /laboratorio/ e registrar a crítica."
qualities_to_seek:
  - "Pausa ou contrapeso que não pareça cartão ausente."
  - "Cinco destinos escaneáveis como uma única família."
  - "Ordem 01→05 evidente e coincidente com DOM e foco."
  - "Fluxo móvel contínuo sem lacunas artificiais."
tensions_to_watch:
  - "O vazio parecer destino que não carregou."
  - "O deslocamento do item 05 enfraquecer o encerramento da sequência."
  - "A técnica diminuir área clicável ou exigir reordenar o DOM."
  - "A composição só parecer intencional depois de ler sua explicação."
skill_path: skills/experiments/cheio-vazio-mapa-002/SKILL.md
status: selected
reflection: "A comparação foi publicada pela PR #601 no merge d9ad7ac22d1630ccb1720eac44d119cea78b5ac5. A variante A é previsível; B preserva DOM, área clicável e sequência 01→05 e usa o vazio como contrapeso do fechamento; C fragmenta a varredura entre 03 e 04. Build, OKF e publicação foram verificados. B foi selecionada porque a crítica visual favoreceu essa direção neste contexto, não porque o laboratório tenha provado uma lei sobre composição."
---

# Exploração: Mapa vazado 002

A segunda exploração estreitou a direção anterior. O vazio depois de uma sequência já compreensível tem mais força como contrapeso do fechamento; no meio da navegação, cobra um custo de escaneabilidade maior. É repertório crítico acumulado, não uma regra demonstrada.
