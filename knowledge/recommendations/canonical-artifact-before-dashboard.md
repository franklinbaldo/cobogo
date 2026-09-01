---
type: OpinionatedRecommendation
slug: canonical-artifact-before-dashboard
maturity: opinionated
problem: visualização pode se tornar a única forma prática de acessar dados que o projeto já possui como artifact reutilizável
validated_in: []
---

# Dashboard não substitui artifact canônico

## Posição

Quando o produto deriva de dataset/arquivo público reutilizável, o Cobogó recomenda preservar acesso ao artifact canônico além da visualização interativa. Dashboard é interpretação e ferramenta, não prisão do dado.

## Racional

Autonomia, auditoria e reuso exigem que pessoas possam sair da interface com o dado quando a redistribuição é apropriada.

## Contrato

UI aponta para artifact real com provenance/freshness; visualização pode oferecer valor adicional sem ser o único canal. Não inventar download se o projeto não publica artifact legítimo.

## Critério observável

Um leitor consegue obter o artifact que sustenta a experiência sem scraping da interface.

## Escape hatch

Dados que não podem ser redistribuídos ou cujo artifact bruto seria inseguro/enganoso ficam fora; oferecer API/consulta adequada quando essa for a fronteira legítima.

## Evidência

Casos de dados do portfólio motivam o default; baseline classificará adoções.

## Falsificação

Se artifact bruto não for uma unidade útil de reuso, definir outro contrato público apropriado em vez de download ritualístico.
