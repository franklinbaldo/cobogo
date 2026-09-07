---
type: VisualExperiment
id: experiments/cheio-vazio-mapa-002
title: "Mapa vazado 002"
study_id: studies/cheio-vazio-na-web
hypothesis: "Em um mapa de navegação com cardinalidade ímpar, um vazio deliberado pode contrapesar o último item e dar ritmo à composição sem esconder sequência, reduzir a área clicável ou parecer conteúdo faltando."
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
  - "Escolher a variante mais expressiva que continue parecendo um mapa navegável sem explicação da referência."
  - "Publicar a comparação em /laboratorio/ e registrar o resultado."
success_signals:
  - "O vazio cria pausa ou contrapeso sem parecer cartão ausente."
  - "Os cinco destinos continuam escaneáveis como uma única família."
  - "A ordem 01→05 permanece evidente e coincide com DOM e foco."
  - "No mobile, a composição vira uma lista contínua sem lacunas artificiais."
failure_signals:
  - "O visitante pode interpretar o vazio como destino que não carregou."
  - "O deslocamento do item 05 dificulta perceber que ele encerra a sequência."
  - "A técnica diminui área clicável ou exige reordenar o DOM."
  - "A variante só parece intencional depois de ler a explicação do experimento."
skill_path: skills/experiments/cheio-vazio-mapa-002/SKILL.md
status: running
---

# Experimento: Mapa vazado 002

Segunda aplicação do estudo de cheio e vazio. O primeiro experimento encontrou um resultado promissor em blocos editoriais; este muda o contexto para navegação real e testa se o mesmo tipo de contrapeso sobrevive quando sequência e affordance clicável importam mais que composição editorial.
