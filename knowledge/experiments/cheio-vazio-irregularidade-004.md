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
status: selected
reflection: "A captura publicada do SHA b86b9129ba1352bb6deb6711c20796179bf622d9 foi recuperada do Deploy Pages #487 e permitiu comparar A/B/C diretamente em 1600×1000, 390×844 e 320×800. A é clara e robusta, mas sua simetria 2×2 é genérica e pouco acrescenta ao repertório. B é a direção com mais força: o bloco dominante continua inequívoco, a explicação se encaixa como contrapeso à direita e evidência/ação recompõem uma base sem perder a ordem percebida. C ultrapassa o ponto útil: os blocos passam a flutuar em ilhas, surgem vazios grandes demais e a geometria começa a competir com a sequência. No mobile, as três relinearizam para a mesma pilha sem penalidade estrutural, então a escolha é deliberadamente de linguagem no desktop. B fica `selected`; a exploração ensina que irregularidade funciona melhor como contrapeso localizado do que como dispersão geral."
---

# Exploração: Irregularidade 004

A crítica visual finalmente pôde acontecer sobre a superfície publicada. A variante B foi selecionada porque introduz assimetria suficiente para dar caráter sem desmontar a hierarquia; A serve como referência segura, mas banal, e C deixa o deslocamento virar assunto demais. O aprendizado não é um limiar numérico: é uma preferência de composição — irregularidade localizada como contrapeso, não dispersão uniforme de atenção.
