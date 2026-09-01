# Rotina opinionada de superfície

Esta rotina substitui a postura puramente emergente: o Cobogó pode recomendar uma solução antes de dois consumers a terem inventado.

## Ordem operacional

1. Resolver urgência e follow-up causal.
2. Atualizar sinais dos consumers ativos.
3. Usar a última `SurfaceQualityAssessment`; se não existir, fazer baseline antes de ranquear o consumer.
4. Escolher foco pelo problema material de maior impacto, considerando nota, antiguidade e aprendizado esperado.
5. Testar leitor de fora e capturar before.
6. Decidir se a resposta é:
   - remediação local;
   - aplicação de uma `OpinionatedRecommendation` existente;
   - formulação de nova recomendação Cobogó.
7. Para aplicação local: PR no consumer, gates, merge, deploy e after.
8. Reavaliar as dimensões afetadas sem inflar dimensões não observadas.
9. Abrir issues adicionais apenas quando forem concretas e reproduzíveis; não criar backlog genérico por nota.
10. Atualizar assessment, ranking, consumer card e maturidade das recomendações.

## Regra de issues

Uma avaliação `média` ou `fraca` não gera issue automaticamente. O Cobogó abre issue para gaps concretos com evidência e critério de conclusão. Uma única avaliação pode produzir várias issues ao longo de rodadas, mas o orçamento de implementação continua protegendo foco.

## Regra de patterns

- Cobogó pode implementar `opinionated` diretamente.
- Um consumer bem-sucedido torna a recomendação elegível a `validated`.
- Dois consumers convergentes tornam-na elegível a `stable`.
- Evidência contrária pode rebaixar, revisar ou `retire` a recomendação.

## Não uniformização

A avaliação mede qualidade funcional e comunicacional. Não existe nota por “parecer com Cobogó”. Solução local equivalente ou superior é válida e deve voltar ao knowledge.
