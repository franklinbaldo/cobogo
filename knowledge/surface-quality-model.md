---
type: knowledge-policy
title: Surface Quality Model
status: accepted
---

# Surface Quality Model

O Cobogó avalia a qualidade pública de cada consumer sem confundir essa avaliação com valor do projeto, qualidade de backend ou preferência estética.

## Dimensões

Cada dimensão recebe nota inteira de 0 a 4, sempre acompanhada de evidência.

| Dimensão | Pergunta |
|---|---|
| Clareza / D1 | Um leitor de fora entende o que pode fazer aqui? |
| Explicabilidade / D2 | Entende o que o projeto faz por trás e por que existe? |
| Autonomia / D3 | Consegue reutilizar sozinho os artefatos que o projeto publica? |
| UX | Os caminhos, estados e feedback tornam as tarefas compreensíveis? |
| UI | Hierarquia, composição, legibilidade e responsividade sustentam o uso? |
| Confiança | Provenance, freshness, acessibilidade e estado dos dados são perceptíveis e verdadeiros? |

## Escala

- 0: quebrado
- 1: fraco
- 2: adequado
- 3: bom
- 4: excelente / referência

Total: 0–24.

Faixas: crítica 0–7; fraca 8–12; média 13–17; boa 18–21; referência 22–24.

## Regras

1. Nota sem evidência não existe.
2. A avaliação aponta commit/deploy e captura.
3. Identidade local não é penalizada por divergir visualmente do Cobogó.
4. Divergência de um default Cobogó é penalizada apenas se produzir um problema observável de qualidade.
5. Uma nota 4 é também um sinal de aprendizado: a solução deve ser examinada como possível melhoria do próprio Cobogó.
6. O ranking serve para priorizar melhoria, não para premiar homogeneidade.

## Maturidade das recomendações

- `opinionated`: Cobogó recomenda por princípio e racional explícitos.
- `validated`: evidência bem-sucedida em pelo menos um consumer.
- `stable`: convergência bem-sucedida em pelo menos dois consumers.
- `retired`: evidência ou evolução do sistema tornou a recomendação inadequada.
