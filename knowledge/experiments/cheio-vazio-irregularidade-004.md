---
type: VisualExperiment
id: experiments/cheio-vazio-irregularidade-004
title: "Irregularidade 004"
study_id: studies/cheio-vazio-na-web
direction: "Explorar diferentes graus de irregularidade num grid editorial e observar quando ritmo, tensão e surpresa começam a competir com a hierarquia."
medium: "Astro + Panda CSS responsive editorial grid"
constraints:
  - "Usar exatamente os mesmos quatro blocos, conteúdo e ordem DOM nas três variantes."
  - "Variar somente distribuição espacial, spans e deslocamentos do grid."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "No mobile, preservar uma ordem linear idêntica entre variantes."
procedure:
  - "Construir três variações: regular, irregularidade moderada e irregularidade alta."
  - "Comparar primeiro em 1440px e 768px, depois observar 390px e 320px."
  - "Preservar a variação excessiva mesmo que a crítica não a favoreça."
  - "Publicar as três juntas e registrar a crítica somente depois de observação visual."
critique_prompts:
  - "Qual grau de irregularidade dá mais personalidade à composição?"
  - "Em que ponto a tensão visual começa a disputar atenção com a hierarquia?"
  - "A versão moderada parece deliberada ou apenas desalinhada?"
  - "A versão excessiva é realmente menos interessante ou apenas mais ousada?"
warning_signs:
  - "A sequência percebida deixa de ser clara."
  - "A composição depende de cor ou ornamento para recuperar hierarquia."
  - "O efeito só funciona em uma largura específica."
skill_path: skills/experiments/cheio-vazio-irregularidade-004/SKILL.md
status: partial
outcome: "As três variações estão publicadas e tecnicamente válidas, mas a sessão que as produziu não conseguiu recuperar as capturas para observação visual. Por isso o laboratório preserva `partial`: falta crítica perceptiva para decidir qual direção queremos seguir. Integridade técnica não decide taste."
---

# Exploração: Irregularidade 004

As variações A/B/C existem, mas ainda não há uma escolha estética registrada. O estado `partial` preserva corretamente a diferença entre uma interface que funciona e uma composição que queremos adotar. A próxima sessão deve olhar as variações e criticá-las, não tentar provar uma hipótese.
