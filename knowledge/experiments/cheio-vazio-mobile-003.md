---
type: VisualExperiment
id: experiments/cheio-vazio-mobile-003
title: "Vazio móvel 003"
study_id: studies/cheio-vazio-na-web
direction: "Explorar pausas de vazio em telas estreitas entre grupos semanticamente completos, procurando ritmo sem transformar espaço em ruptura ou desperdício."
medium: "Astro + Panda CSS mobile-first editorial stack"
constraints:
  - "Usar o mesmo conteúdo e a mesma ordem DOM nas três variantes."
  - "Testar a propriedade em 320px, 390px e 768px."
  - "Não esconder conteúdo, mudar a ordem semântica nem usar o vazio como decoração figurativa."
  - "Preservar landmarks, contraste, leitura por teclado e ausência de rolagem horizontal."
  - "O vazio deve aparecer apenas entre grupos semanticamente completos, nunca dentro de título, texto ou ação."
procedure:
  - "Construir três pilhas móveis com os mesmos três blocos editoriais: fluxo contínuo, pausa curta e pausa longa."
  - "Comparar ritmo, continuidade e custo vertical nas três larguras definidas."
  - "Confirmar que o foco e a ordem de leitura permanecem idênticos nas variantes."
  - "Abandonar qualquer pausa que pareça falha de carregamento ou torne a próxima informação difícil de encontrar."
  - "Publicar as três variantes juntas no laboratório e registrar a crítica."
selection_signals:
  - "Uma pausa curta torna os grupos mais legíveis sem parecer conteúdo ausente."
  - "A relação continua compreensível em 320px e 390px sem aumentar esforço de navegação."
  - "A primeira dobra ainda contém contexto suficiente para orientar a continuidade da página."
  - "A pausa funciona sem alteração de DOM ou de conteúdo."
abandonment_signals:
  - "O vazio parece espaço desperdiçado ou erro de carregamento."
  - "A próxima informação fica distante a ponto de exigir rolagem exploratória sem pista."
  - "A técnica só funciona em tablet e perde sentido em 320px ou 390px."
  - "A pausa precisa de ornamento, seta ou explicação para parecer intencional."
skill_path: skills/experiments/cheio-vazio-mobile-003/SKILL.md
status: selected
critique: "Nas superfícies publicadas em 320×800 e 390×844, a variante B mantém continuidade e cria uma pausa perceptível depois de um grupo semanticamente completo; a variante C cria ruptura vertical forte demais e faz o terceiro bloco parecer desconectado. A pausa curta foi selecionada como direção interessante para o repertório móvel; a pausa longa foi abandonada. Os gates técnicos confirmam que a exploração é utilizável, não que seu gosto esteja objetivamente correto."
---

# Exploração: Vazio móvel 003

A ausência não precisa desaparecer quando a grade colapsa. Neste specimen, preferimos a pausa curta: ela mantém ritmo em 320px e 390px. A pausa longa perde continuidade. O resultado registra uma escolha de design e seus limites, não uma hipótese confirmada.
