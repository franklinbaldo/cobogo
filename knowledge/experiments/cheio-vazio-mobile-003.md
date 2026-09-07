---
type: VisualExperiment
id: experiments/cheio-vazio-mobile-003
title: "Vazio móvel 003"
study_id: studies/cheio-vazio-na-web
hypothesis: "Em telas estreitas, um vazio curto e deliberado entre blocos já compreendidos pode criar ritmo sem parecer espaço desperdiçado, desde que não interrompa uma tarefa sequencial nem empurre informação crítica para fora da primeira dobra."
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
  - "Rejeitar qualquer pausa que pareça falha de carregamento ou que torne a próxima informação difícil de encontrar."
  - "Publicar as três variantes juntas no laboratório e registrar o resultado."
success_signals:
  - "Uma pausa curta torna os grupos mais legíveis sem parecer conteúdo ausente."
  - "A relação continua compreensível em 320px e 390px sem aumentar esforço de navegação."
  - "A primeira dobra ainda contém contexto suficiente para orientar a continuidade da página."
  - "A pausa funciona sem alteração de DOM ou de conteúdo."
failure_signals:
  - "O vazio parece espaço desperdiçado ou erro de carregamento."
  - "A próxima informação fica distante a ponto de exigir rolagem exploratória sem pista."
  - "A técnica só funciona em tablet e perde sentido em 320px ou 390px."
  - "A pausa precisa de ornamento, seta ou explicação para parecer intencional."
skill_path: skills/experiments/cheio-vazio-mobile-003/SKILL.md
status: running
outcome:
---

# Experimento: Vazio móvel 003

Os dois primeiros experimentos desligaram os vazios no mobile. Este experimento testa a pergunta ainda aberta do estudo: se a ausência pode continuar sendo estrutura em tela estreita, em vez de simplesmente desaparecer quando a grade colapsa.
