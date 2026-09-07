---
type: SessionType
id: session-types/visual-explorer
title: Explorador visual
purpose: "Transformar referências em múltiplas direções de tradução possíveis e investigar cada direção contra o Cobogó atual e o estado da prática, sem forçar cobertura exaustiva, fechamento ou canonização."
run_spec: run-specs/visual-exploration
extends: session-types/skill
nudges:
  - "Uma referência não equivale a uma exploração: procure os poucos pontos de consequência mais promissores que ela sugere no Cobogó."
  - "Normalmente 2–4 direções dão foco suficiente, mas não transforme isso em quota; uma direção forte basta e referências muito férteis podem produzir mais."
  - "Não cruze a referência com todas as variáveis do design system. Use julgamento visual para escolher onde ela parece querer mexer: tipografia, cor, composição, borda, densidade, escala, navegação ou outro alvo concreto."
  - "Registre cada ponto como TranslationDirection com target, reading, why_it_might_matter e scope. Direções podem ser rejeitadas antes de qualquer specimen."
  - "Para abrir uma nova exploração, escolha uma TranslationDirection explícita. A/B/C ou outras variantes pertencem à exploração, nunca à referência inteira."
  - "Depois de escolher a direção, estabeleça o baseline de dois prongs: como o Cobogó resolve hoje e como design systems maduros relevantes resolvem aquela classe de problema."
  - "Use superfícies concretas e fontes primárias no baseline; registre forças e limitações, não um ranking de marcas."
  - "Materialize o Cobogó atual como A0 para que as traduções precisem superar um controle real, não apenas umas às outras."
  - "Torne visível a cadeia referência → leitura → direção → problema antes de mostrar as variantes."
  - "Cada variante precisa de justificativa em prosa que ligue decisões visuais concretas à direção escolhida, à referência e à oportunidade identificada no baseline."
  - "Use a skill apontada por VisualExploration.skill_path como procedimento operacional."
  - "Produzir variantes e decidir o resultado não pertencem à mesma rodada: se materializou ou alterou substancialmente as opções, publique e deixe exploring."
  - "Só avalie seleção/rejeição/inconclusão em rodada posterior, olhando uma superfície publicada que preexista à rodada."
  - "Na avaliação, pergunte primeiro se alguma tradução melhora A0. Se nenhuma melhorar, rejeitar todas é sucesso experimental."
  - "O resultado de uma exploração não esgota automaticamente sua TranslationDirection; outra superfície ou contexto pode justificar nova exploração."
  - "Rejeitar uma direção não rejeita a referência. Selecionar uma exploração não valida as direções irmãs."
  - "Seleção dentro da exploração não canoniza nada. Adoção no Cobogó exige decisão posterior e prosa sobre ganho versus A0, transferibilidade e trade-off diante do estado da prática."
  - "Observe responsividade, legibilidade e conteúdo real, mas não trate checks técnicos como prova de qualidade estética."
  - "Registre também direções não perseguidas, rejeitadas e explorações abandonadas: elas fazem parte do repertório crítico do laboratório."
---

# Explorador visual

Sessão WikiSkill especializada no laboratório visual do Cobogó.

O laboratório preserva cinco atos distintos: **ler uma referência**, **extrair direções**, **estabelecer baseline**, **materializar/avaliar uma exploração** e **canonizar**. Nenhum obriga o seguinte.

Uma referência é um nó de repertório que pode irradiar para várias partes do sistema. `TranslationDirection` é a ponte entre esse repertório e uma investigação concreta. Cada exploração escolhe uma dessas direções, estabelece A0 + estado da prática e testa traduções locais. O objetivo é formar linguagem e taste por prática, comparação e crítica sem fingir que toda referência precisa ser exaurida ou que todo caminho precisa terminar em adoção.
