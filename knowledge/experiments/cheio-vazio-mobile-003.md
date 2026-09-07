---
type: VisualExperiment
id: experiments/cheio-vazio-mobile-003
title: "Vazio móvel 003"
study_id: studies/cheio-vazio-na-web
direction: "Explorar quanto vazio uma composição móvel suporta entre grupos semanticamente completos sem perder continuidade."
medium: "Astro + Panda CSS mobile-first editorial stack"
constraints:
  - "Usar o mesmo conteúdo e a mesma ordem DOM nas três variantes."
  - "Testar em 320px, 390px e 768px."
  - "Não esconder conteúdo nem mudar a ordem semântica."
procedure:
  - "Construir fluxo contínuo, pausa curta e pausa longa."
  - "Comparar ritmo, continuidade e custo vertical."
  - "Confirmar foco e ordem de leitura idênticos."
  - "Preservar juntas as três variações e registrar a crítica."
critique_prompts:
  - "A pausa curta dá respiração ou parece espaço desperdiçado?"
  - "Quando a pausa deixa de ser ritmo e vira ruptura?"
  - "A primeira dobra ainda orienta a continuidade?"
  - "Qual variação parece mais deliberada em 320px e 390px?"
warning_signs:
  - "O vazio parece erro de carregamento."
  - "A próxima informação exige rolagem exploratória sem pista."
  - "A direção perde sentido em telas estreitas."
skill_path: skills/experiments/cheio-vazio-mobile-003/SKILL.md
status: selected
outcome: "A observação das variações em 320×800 e 390×844 favoreceu B: uma pausa curta depois de um grupo completo mantém continuidade e acrescenta ritmo; C cria uma ruptura forte e desconecta o terceiro bloco. Os gates técnicos garantem integridade da interface, enquanto a escolha de B permanece uma decisão crítica de design."
---

# Exploração: Vazio móvel 003

A ausência não precisa desaparecer quando a grade colapsa. Entre as variações observadas, a pausa curta tem mais força; a longa dilui a continuidade. Em tela estreita, nosso taste favorece um orçamento menor de vazio, aplicado depois do fechamento semântico do grupo anterior.
