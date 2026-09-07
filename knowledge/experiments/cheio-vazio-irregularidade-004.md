---
type: VisualExploration
id: experiments/cheio-vazio-irregularidade-004
title: "Irregularidade 004"
study_id: studies/cheio-vazio-na-web
direction: "Explorar graus de irregularidade num grid editorial e perceber quando o ritmo ganha personalidade ou começa a competir com a hierarquia."
medium: "Astro + Panda CSS responsive editorial grid"
constraints:
  - "Usar exatamente os mesmos quatro blocos, conteúdo e ordem DOM nas três variantes."
  - "Variar somente distribuição espacial, spans e deslocamentos do grid."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "No mobile, preservar uma ordem linear idêntica entre variantes."
  - "Não usar ícones, setas, ornamento ou cor adicional para compensar hierarquia fraca."
procedure:
  - "Construir três variantes: regular, irregularidade moderada e irregularidade alta."
  - "Comparar primeiro em 1440px e 768px, depois observar o colapso em 390px e 320px."
  - "Observar se título, apoio, evidência e ação continuam formando uma sequência visual inequívoca."
  - "Preservar a variante excessiva como parte da exploração."
  - "Publicar as três variantes juntas em /laboratorio/irregularidade-004/ e registrar a crítica visual quando as capturas puderem ser observadas."
qualities_to_seek:
  - "Irregularidade com personalidade sem aumentar esforço de leitura."
  - "Bloco principal claramente dominante e ação fácil de localizar."
  - "Relinearização em 320px e 390px sem lacunas arbitrárias."
  - "Diferenças entre A/B/C suficientemente perceptíveis para sustentar uma escolha crítica."
tensions_to_watch:
  - "Irregularidade moderada já parecer desorganizada ou mudar a sequência percebida."
  - "B e C não serem perceptivelmente diferentes."
  - "A geometria depender de cor, ornamento ou explicação para recuperar hierarquia."
  - "O efeito só funcionar em uma largura específica."
skill_path: skills/experiments/cheio-vazio-irregularidade-004/SKILL.md
status: exploring
reflection: "A PR #609 publicou A/B/C no merge b53d58da2c3ec5649bfe3dc0a3c10eaeaa6d9f7b e a publicação passou pelos gates técnicos. As capturas, porém, não ficaram recuperáveis para inspeção visual na sessão anterior. A exploração permanece `exploring`: não porque uma hipótese esteja indecidida, mas porque ainda falta a crítica perceptiva necessária para escolher, continuar ou abandonar esta direção."
---

# Exploração: Irregularidade 004

As três variações estão publicadas e tecnicamente íntegras. O trabalho pendente é olhar, comparar e exercer crítica visual. O laboratório não precisa fingir uma decisão científica onde existe uma escolha de linguagem ainda não amadurecida.
