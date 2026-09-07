# Skill — campos interligados 007

## Objetivo

Materializar e criticar uma composição editorial em que campos distintos formem continuidade por contato, contraste e deslocamento, sem copiar contornos paisagísticos nem transformar irregularidade em ornamento.

## Leitura obrigatória

Leia:

- `knowledge/references/burle-marx-campos-interligados.md`;
- `knowledge/studies/campos-interligados-na-web.md`;
- `knowledge/explorations/campos-interligados-007.md`.

A referência alimenta o olhar. O contrato operacional é o `VisualExploration`.

## Procedimento operacional

1. Use exatamente as mesmas quatro zonas, conteúdo e ordem DOM nas três variações.
2. Variação A separa as zonas com respiro suficiente para que cada uma pareça autônoma.
3. Variação B encosta zonas e alterna largura/deslocamento de maneira coordenada; a composição deve ganhar direção sem embaralhar a sequência.
4. Variação C aumenta deslocamento e sobreposição o bastante para tornar visível quando relação vira competição.
5. Não use `order`, `tabindex` positivo, conteúdo duplicado ou posicionamento absoluto que altere a sequência percebida.
6. Não use curvas, blobs ou `clip-path` orgânico. O aprendizado precisa sobreviver sem uma caricatura formal de Burle Marx.
7. Observe primeiro 1440px/768px e depois 390px/320px. No mobile, avalie se contato e alternância ainda criam continuidade quando a geometria relineariza.
8. Compare A/B/C por parentesco entre campos, direção de leitura, contraste, movimento e ruído. Não presuma que B seja a melhor só por ser intermediária.
9. Depois do deploy, recupere o artefato `cobogo-published-preview-*` quando disponível e faça a crítica sobre a superfície publicada.
10. Atualize `reflection`, estado da exploração e `VisualSpecimen` somente depois da observação visual recuperável. Checks técnicos sustentam integridade; não decidem taste.
11. Compare contato e deslocamento separadamente. Uma peça pode estar mais deslocada e ainda assim produzir menos movimento se perder a passagem perceptível para as massas vizinhas.
12. Se duas variações colapsarem para a mesma geometria no mobile, registre isso explicitamente: o empate móvel pode isolar onde a relação visual realmente nasce, em vez de invalidar a exploração.

## Critério de crítica

Pergunte se a composição parece uma só superfície ou uma coleção de componentes. **Deslocar não é interligar.** Movimento visual aparece quando uma massa conduz, toca ou entrega a leitura a outra; deslocamento sem contato tende a produzir ilhas. Contato só conta como continuidade quando melhora parentesco, sequência ou passagem. Se remover o contato não muda a leitura do conjunto, ele era apenas arranjo.

## Evidência mínima

Build, contrato OKF, verificação de acessibilidade/superfície, capturas desktop/mobile, comparação explícita A/B/C e crítica registrada no `VisualExploration` e no specimen.

## Saída para WikiSkill

Registre o vocabulário que realmente explicar a escolha. Evite concluir em termos de quantidade de irregularidade; prefira relações como massa, contato, passagem, direção, continuidade, fronteira e competição. Quando a crítica revelar uma diferença entre `posição` e `relação`, preserve essa distinção: ela é mais reutilizável que a geometria específica do specimen.