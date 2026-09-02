# Rotina opinionada de superfície

Esta rotina substitui a postura puramente emergente: o Cobogó pode recomendar uma solução antes de dois consumers a terem inventado.

## Ordem operacional

1. Resolver urgência e retomar trabalho anterior quando surgir um fato novo verificável que permita avançar.
2. Atualizar sinais dos consumers ativos.
3. Usar a última `SurfaceQualityAssessment`; se não existir, fazer a primeira avaliação completa antes de ranquear o consumer.
4. Escolher foco pelo problema material de maior impacto, considerando nota, antiguidade e aprendizado esperado.
5. Testar leitor de fora e capturar o estado anterior quando a mudança for visual.
6. Decidir se a resposta é:
   - remediação local;
   - aplicação de uma `OpinionatedRecommendation` existente;
   - formulação de nova recomendação Cobogó.
7. Para aplicação local: PR no consumer, checks exigidos no commit atual da branch, merge, publicação e nova captura do estado publicado.
8. Reavaliar as dimensões afetadas sem inflar dimensões não observadas.
9. Abrir issues adicionais apenas quando forem concretas e reproduzíveis; não criar backlog genérico por nota.
10. Atualizar avaliação, ranking, ConsumerCard e maturidade das recomendações.

## Linguagem dos RoundReports

O relatório precisa funcionar para uma pessoa que não acompanhou as rodadas anteriores. Termos técnicos podem aparecer, mas não podem substituir a explicação comum do estado do trabalho.

Todo RoundReport novo responde explicitamente:

1. o que estava errado ou faltando;
2. o que foi feito;
3. o que ficou comprovado;
4. o que ainda falta;
5. por que a próxima rodada deve ou não voltar ao mesmo projeto.

Exemplos: prefira “o commit atual da branch da PR, para o qual os checks precisam estar verdes” antes de `head SHA`; “o commit que realmente entrou em main depois do merge” antes de `landing`; e “só retomar quando surgir um fato novo que permita avançar” antes de expressões como “mudança causal”.

A recomendação `operational-logs-explain-state-transitions` define o contrato completo. O validator de referência `scripts/validate-round-report-clarity.mjs` verifica a presença das cinco respostas, mas não tenta substituir revisão humana da clareza da prosa.

## Regra de issues

Uma avaliação `média` ou `fraca` não gera issue automaticamente. O Cobogó abre issue para problemas concretos com evidência e critério de conclusão. Uma única avaliação pode produzir várias issues ao longo de rodadas, mas o orçamento de implementação continua protegendo foco.

## Regra de patterns

- Cobogó pode implementar `opinionated` diretamente.
- Um consumer bem-sucedido torna a recomendação elegível a `validated`.
- Dois consumers convergentes tornam-na elegível a `stable`.
- Evidência contrária pode rebaixar, revisar ou `retire` a recomendação.

## Não uniformização

A avaliação mede qualidade funcional e comunicacional. Não existe nota por “parecer com Cobogó”. Solução local equivalente ou superior é válida e deve voltar ao knowledge.
