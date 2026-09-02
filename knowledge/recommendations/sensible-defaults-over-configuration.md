---
type: OpinionatedRecommendation
slug: sensible-defaults-over-configuration
maturity: opinionated
problem: framework pode empurrar decisões repetitivas para cada consumer e transformar adoção em configuração extensa
validated_in: []
---

# Default sensato antes de configuração

## Posição

Para decisões transversais que o Cobogó já tomou, a implementação compartilhada deve funcionar bem sem configuração. Configuração existe para domínio/identidade, não para obrigar cada consumer a redesenhar o default.

## Racional

Ser opinionado reduz decisões repetitivas. Um design system com dezenas de knobs sem posição apenas desloca trabalho.

## Contrato

Primitive/pattern possui comportamento padrão acessível e responsivo; opções expõem variação legítima, não cada detalhe interno. Escape hatch permanece possível.

## Critério observável

Um consumer consegue adotar o pattern recomendado com pouca ou nenhuma configuração e recebe o contrato de qualidade básico automaticamente.

## Escape hatch

Componentes altamente contextuais podem exigir dados/slots essenciais; evitar configuração cosmética obrigatória.

## Evidência

Princípio normativo para a próxima fase de implementação do framework.

## Falsificação

Se default não servir à maioria dos contexts-alvo, dividir o pattern ou torná-lo mais estrutural em vez de adicionar configuração infinita.
