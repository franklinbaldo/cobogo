---
type: VisualExperiment
id: experiments/cheio-vazio-mapa-002
title: "Mapa vazado 002"
study_id: studies/cheio-vazio-na-web
direction: "Explorar o vazio como contrapeso do fechamento de um mapa de navegação com cardinalidade ímpar."
medium: "Astro + Panda CSS responsive navigation grid"
constraints:
  - "Usar os mesmos cinco destinos e o mesmo texto nas três variantes."
  - "Preservar ordem DOM 01→05 e áreas clicáveis completas."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "No mobile, remover vazios e voltar ao fluxo linear."
procedure:
  - "Comparar fecho total, contrapeso deslocado e vazio intercalado."
  - "Observar em 390px, 768px e 1440px."
  - "Navegar por teclado e confirmar ordem de foco."
  - "Selecionar a composição com mais força que continue parecendo um mapa navegável."
critique_prompts:
  - "O vazio cria pausa ou contrapeso sem parecer cartão ausente?"
  - "Os cinco destinos ainda parecem uma única família?"
  - "Onde o vazio acrescenta tensão e onde fragmenta a leitura?"
  - "Qual fechamento parece mais intencional?"
warning_signs:
  - "O vazio parece destino que não carregou."
  - "O deslocamento dificulta perceber o fim da sequência."
  - "A técnica diminui área clicável ou exige reordenar o DOM."
skill_path: skills/experiments/cheio-vazio-mapa-002/SKILL.md
status: selected
outcome: "A comparação publicada na PR #601 mostrou três direções. A crítica selecionou B: ela preserva sequência, DOM e área clicável enquanto usa o vazio como contrapeso do fechamento. C fragmenta a varredura ao inserir a pausa no meio da tarefa. A repetição do gosto observado em 001 torna essa direção interessante para novas aplicações, mas não a converte automaticamente em regra."
---

# Exploração: Mapa vazado 002

A segunda aplicação refinou o gosto: o vazio tem mais força quando aparece depois de uma sequência já compreensível e atua como contrapeso do fechamento. Inserido no meio da navegação, cobra escaneabilidade demais. É uma direção selecionada, não uma hipótese provada.
