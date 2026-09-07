---
type: VisualExperiment
id: experiments/cheio-vazio-irregularidade-004
title: "Irregularidade 004"
study_id: studies/cheio-vazio-na-web
direction: "Explorar graus de irregularidade num grid editorial e formar julgamento sobre quando deslocamentos e mudanças de largura acrescentam ritmo ou começam a competir com a hierarquia."
medium: "Astro + Panda CSS responsive editorial grid"
constraints:
  - "Usar exatamente os mesmos quatro blocos, conteúdo e ordem DOM nas três variantes."
  - "Variar somente distribuição espacial, spans e deslocamentos do grid."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "No mobile, preservar uma ordem linear idêntica entre variantes."
  - "Não usar ícones, setas, ornamento ou cor adicional para compensar hierarquia fraca."
procedure:
  - "Construir três variantes: regular, irregularidade moderada e irregularidade alta."
  - "Comparar primeiro em 1440px e 768px, depois confirmar colapso em 390px e 320px."
  - "Observar se título, apoio, evidência e ação continuam formando uma sequência visual inequívoca."
  - "Preservar a variante excessiva como parte da crítica mesmo que seja abandonada."
  - "Publicar as três variantes juntas em /laboratorio/irregularidade-004/ e registrar o julgamento depois da observação visual."
selection_signals:
  - "A variante moderada produz ritmo perceptível sem exigir releitura para descobrir a sequência."
  - "O bloco principal continua claramente dominante e a ação permanece fácil de localizar."
  - "A composição relineariza em 320px e 390px sem lacunas arbitrárias."
  - "A diferença entre moderada e excessiva ajuda a formar um gosto mais preciso sobre irregularidade."
abandonment_signals:
  - "A variante moderada já parece desorganizada ou muda a sequência percebida."
  - "As variantes não produzem diferença perceptiva suficiente para orientar uma escolha."
  - "A composição depende de cor, ornamento ou explicação para recuperar hierarquia."
  - "O efeito só funciona em uma largura específica."
skill_path: skills/experiments/cheio-vazio-irregularidade-004/SKILL.md
status: partial
critique: "A PR #609 publicou as três variantes e os gates técnicos passaram, mas a sessão que registrou o resultado não conseguiu recuperar as capturas para inspeção visual. Portanto ainda não existe crítica perceptiva suficiente para escolher entre B e C. O estado partial significa exatamente isso: a exploração existe e é tecnicamente íntegra, mas falta olhar para ela antes de formar gosto ou selecionar uma direção."
---

# Exploração: Irregularidade 004

A pergunta visual ganhou A/B/C publicado, mas ainda não ganhou julgamento. A comparação existe e passou pelos gates; falta observação visual recuperável para dizer qual composição queremos levar adiante. `partial` preserva a diferença entre integridade técnica e crítica de design.
