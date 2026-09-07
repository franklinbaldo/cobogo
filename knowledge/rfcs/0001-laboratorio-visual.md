---
type: RFC
id: rfcs/0001-laboratorio-visual
title: "Laboratório visual do Cobogó"
status: accepted
date: "2026-09-07"
scope:
  - knowledge
  - wikiskill
  - okf
  - laboratorio-publico
---

# RFC 0001 — Laboratório visual do Cobogó

## Resumo

O Laboratório é o mecanismo pelo qual o Cobogó investiga, compara, critica e eventualmente incorpora decisões visuais. Ele não é uma galeria de componentes nem uma fábrica de vencedores.

Uma referência visual não corresponde a uma única exploração. Ela pode sugerir vários pontos de consequência no Cobogó — tipografia, composição, cor, bordas, densidade, escala, navegação ou qualquer outra relação concreta — e cada um desses pontos pode ser investigado, rejeitado ou deixado em aberto independentemente.

A arquitetura canônica passa a ser:

**VisualReference → TranslationDirection → VisualExploration → resultado → eventual adoção canônica**.

O ciclo de uma exploração é:

**referência → leitura → direções prováveis → escolher uma direção → problema → baseline Cobogó → estado da prática → A0 + traduções → publicação → crítica posterior → resultado → eventual adoção canônica**.

## Motivação

As primeiras explorações do laboratório revelaram cinco riscos estruturais:

1. variantes podiam parecer alternativas arbitrárias porque a referência e a lógica de tradução não estavam suficientemente expostas;
2. o agente tendia a construir e escolher na mesma rodada, favorecendo racionalização pós-hoc;
3. `selected` podia ser confundido com “virou Cobogó”, apesar de uma preferência local não demonstrar transferibilidade;
4. comparar apenas A/B/C não respondia à pergunta mais importante: **alguma alternativa é realmente melhor que o Cobogó atual?**;
5. tratar uma referência como se ela tivesse uma única consequência desperdiça seu repertório: a mesma leitura pode chamar atenção para várias relações diferentes no sistema.

O extremo oposto também é ruim. Não faz sentido cruzar cada referência com todas as variáveis possíveis do design system. O espaço de decisões do Cobogó é grande demais, e esse procedimento transformaria julgamento visual em burocracia combinatória.

O laboratório precisa preservar **seleção por feeling informado**: observar a referência, reconhecer os poucos lugares em que ela parece ter maior potência de tradução e investigar esses lugares separadamente.

## Decisão

### 1. Referência gera direções de tradução, não uma exploração única

`VisualReference` é repertório visual/cultural. Depois de observar a referência, o agente identifica um pequeno conjunto de `TranslationDirection`.

Uma `TranslationDirection` registra:

- `reference_id`: a referência de origem;
- `target`: o aspecto concreto do Cobogó que pode ser afetado;
- `reading`: qual relação da referência está sendo lida;
- `why_it_might_matter`: por que essa leitura parece promissora para aquele alvo;
- `scope[]`: superfícies, componentes ou classes de decisão potencialmente atingidas;
- `status`: `candidate`, `active`, `explored`, `rejected` ou `retired`;
- `rationale`: prosa opcional para explicar mudança de estado, rejeição ou encerramento.

O `target` não é uma enumeração fechada. Exemplos possíveis são `typography/scale`, `color/contrast`, `layout/field-relation`, `component/card-boundary` ou descrições igualmente concretas. O modelo não deve pretender listar todas as dimensões do design.

### 2. A curadoria de consequências é deliberadamente não exaustiva

Ao curar uma referência, o agente normalmente deve registrar **os 2–4 pontos de consequência mais promissores**. Esse número é orientação de foco, não limite normativo: uma referência pode produzir uma única direção forte ou mais de quatro quando houver justificativa real.

A pergunta é:

> “Olhando para esta referência, onde ela parece querer mexer no Cobogó?”

Não é:

> “Quais de todas as variáveis do Cobogó esta referência afeta?”

Ausência de uma direção não significa que a referência não possa inspirar aquele aspecto no futuro. Significa apenas que ele não foi selecionado como promissor nesta leitura.

### 3. Cada direção tem vida independente

Uma referência pode gerar, por exemplo:

- uma direção sobre hierarquia tipográfica;
- outra sobre relação entre massas;
- outra sobre contraste de campos;
- outra sobre bordas estruturais.

Cada direção pode:

- nunca chegar a uma exploração;
- ser rejeitada ainda na leitura;
- abrir uma ou várias `VisualExploration` ao longo do tempo;
- produzir resultado `selected`, `rejected` ou `inconclusive` em cada exploração;
- eventualmente contribuir para uma decisão canônica.

Rejeitar uma direção **não rejeita a referência**. Selecionar uma exploração **não valida todas as outras direções da referência**.

### 4. A/B/C pertencem à exploração, não à referência

As letras A/B/C são apenas identificadores locais de traduções dentro de uma `VisualExploration`. Não existe um conjunto global de variantes por referência.

Se uma referência gerar três direções, pode haver algo como:

```text
Referência X
├─ Direção: tipografia / escala
│  └─ Exploração 009: A0 + A + B + C
├─ Direção: composição / massas
│  └─ Exploração 010: A0 + A + B
└─ Direção: cor / contraste
   └─ rejeitada antes de materialização
```

Também não há obrigação de exatamente três traduções. A exploração produz quantas alternativas forem úteis para discriminar sua pergunta.

### 5. Baseline de dois prongs é obrigatório por exploração

Uma `TranslationDirection` indica **onde olhar**. A `VisualExploration` é que formula um problema testável e estabelece baseline.

#### Prong A — Cobogó atual

Antes de criar traduções, a exploração identifica a superfície real equivalente no Cobogó atual e registra um `PracticeBaseline(kind: cobogo_current)`.

Essa solução é materializada no specimen como **A0 — Cobogó atual**. A0 é controle, não proposta.

#### Prong B — estado da prática

A exploração pesquisa design systems maduros relevantes **para aquela direção e problema**, usando preferencialmente documentação e superfícies primárias. Não existe lista fixa de marcas.

Cada sistema materialmente usado vira `PracticeBaseline(kind: design_system)`. A síntese procura convergências, divergências e trade-offs. O objetivo é conhecer o estado da prática, não copiar aparência nem usar popularidade como prova.

Baselines são persistentes e reutilizáveis quando continuam atuais e pertinentes.

### 6. A referência continua visível dentro da exploração

Mesmo quando uma direção já foi criada, a exploração deve tornar visível a referência de origem e explicar a cadeia:

**o que foi observado → qual direção foi extraída → por que esta exploração investiga essa direção → como cada tradução responde a ela**.

A referência não substitui o baseline profissional nem a análise do Cobogó atual.

### 7. Toda tradução tem racional em prosa

Cada variante explica por que aquela composição traduz a direção escolhida para o problema identificado.

O racional deve mencionar relações visuais concretas. “A”, “B”, “C”, “mais ousada” ou “mais moderna” não constituem justificativa suficiente sem explicar o que mudou perceptualmente.

### 8. Construir e julgar são rodadas diferentes

Uma rodada que cria A0 ou cria/altera substancialmente variantes termina `exploring` depois da publicação.

Uma rodada posterior pode avaliar apenas uma superfície que já estava publicada antes de começar. Isso cria distância entre autoria e julgamento.

Explorações podem permanecer abertas indefinidamente ou terminar `abandoned`.

### 9. Estado, resultado e canonização são eixos diferentes

#### Estado do trabalho

- `rough`: investigação ainda insuficientemente materializada;
- `exploring`: alternativas/baseline materializados, crítica ainda aberta;
- `concluded`: avaliação encerrada;
- `abandoned`: trabalho interrompido sem necessidade de conclusão.

#### Resultado

Quando `concluded`:

- `selected`: uma tradução respondeu melhor à pergunta e demonstrou ganho defensável sobre A0;
- `rejected`: nenhuma tradução justificou substituir A0;
- `inconclusive`: a evidência não discrimina suficientemente.

A avaliação registra `result_rationale` e `baseline_comparison` em prosa.

O resultado pertence à exploração específica. Uma mesma `TranslationDirection` pode acumular mais de uma exploração ao longo do tempo.

#### Canonização

É um eixo posterior: `not_evaluated`, `candidate`, `adopted`, `declined`.

Uma tradução selecionada **não** vira Cobogó automaticamente. `adopted` exige `canonical_rationale` que explique:

1. qual ganho demonstrou sobre A0;
2. por que o aprendizado é transferível além do specimen;
3. qual trade-off assume diante do estado da prática;
4. quais evidências sustentam a decisão;
5. onde a mudança entra no sistema (`canonical_targets`).

### 10. Rejeição é conhecimento em todos os níveis

O laboratório preserva:

- direções candidatas que não foram perseguidas;
- direções explicitamente rejeitadas;
- explorações rejeitadas;
- explorações inconclusivas;
- explorações abandonadas.

Uma referência continua útil mesmo que várias de suas direções sejam rejeitadas. Uma exploração em que A0 continua melhor é bem-sucedida se produziu evidência útil.

## Ordem narrativa pública

### Página/repertório da referência

Quando houver superfície pública própria para a referência, ela deve permitir entender:

1. a referência observada;
2. a leitura geral;
3. **onde ela talvez possa mexer no Cobogó**;
4. as `TranslationDirection` identificadas e seus estados;
5. links para explorações relacionadas.

Isso transforma a referência em um nó de repertório, não em uma página subordinada a uma única experiência.

### Página da exploração

Toda nova página de exploração segue, conceitualmente:

1. referência de origem;
2. direção de tradução escolhida;
3. problema investigado;
4. **Cobogó hoje** — A0 e sua análise;
5. **Estado da prática** — design systems observados e síntese;
6. leitura específica e pergunta de tradução;
7. A0 + variantes, cada uma com racional em prosa;
8. estado/crítica acumulada;
9. resultado, quando existir, incluindo comparação com A0;
10. decisão canônica, quando existir;
11. navegação para a referência, direções irmãs e outras explorações.

## Modelo OKF

### `TranslationDirection`

```text
id
title
reference_id -> VisualReference
target
reading
why_it_might_matter
scope[]
status: candidate | active | explored | rejected | retired
rationale?
```

### `VisualExploration`

Ganha `direction_id -> TranslationDirection`.

O campo textual histórico `direction` permanece por compatibilidade e para registrar o enunciado específico da exploração. Para novas explorações, `direction_id` é operacionalmente obrigatório no RunSpec.

Os campos `direction_id`, `cobogo_baseline_id`, `practice_baseline_ids` e `baseline_question` permanecem opcionais no schema para não falsificar relações retroativas nas explorações 001–008. O contrato operacional torna-os obrigatórios para novas explorações.

## Contrato operacional WikiSkill

`run-specs/visual-exploration` v5 é a implementação normativa deste RFC. `session-types/visual-explorer` fornece os nudges operacionais.

Antes de abrir uma nova exploração, a sessão deve conseguir responder:

- qual referência a inspirou;
- quais direções promissoras já foram identificadas nessa referência;
- qual direção específica esta exploração investiga;
- por que essa direção merece trabalho agora;
- qual superfície atual do Cobogó será A0;
- qual estado da prática é relevante para esse recorte.

O gate estrutural futuro deve conseguir demonstrar:

- nova exploração possui `direction_id` válido;
- a direção pertence à mesma referência estudada pela exploração;
- existe exatamente um baseline `cobogo_current` aplicável e ele aparece como A0;
- existe pelo menos uma observação externa relevante;
- cada tradução possui racional em prosa;
- materialização não fecha a exploração na mesma rodada;
- avaliação posterior compara alternativas com A0;
- canonização, se houver, possui racional e targets.

A validação automatiza o que é estruturalmente verificável sem tentar transformar julgamento visual em lint.

## Migração

### Agora

- adicionar `TranslationDirection` ao schema OKF;
- adicionar `direction_id` a `VisualExploration`;
- atualizar RunSpec para v5;
- atualizar SessionType;
- atualizar este RFC como fonte arquitetural do laboratório.

### Próximas referências

Toda nova referência curada deve registrar explicitamente os poucos pontos de consequência mais promissores antes de o agente começar a produzir variantes.

### Próxima exploração

A primeira exploração criada após esta revisão deve partir de uma `TranslationDirection` explícita e usar o processo completo de baseline de dois prongs.

### Explorações 001–008

Permanecem como registro histórico válido. Não criar `TranslationDirection` retroativas por inferência automática. Elas podem ser enriquecidas posteriormente quando uma rodada reler a referência e documentar a direção com evidência real.

## Alternativas rejeitadas

**Uma referência = uma exploração.** Rejeitado porque uma mesma referência pode alterar o olhar sobre várias relações do sistema.

**Matriz referência × todas as variáveis do Cobogó.** Rejeitado porque é impraticável e transforma feeling visual em cobertura burocrática.

**A/B/C globais por referência.** Rejeitado porque alternativas só fazem sentido dentro de uma pergunta concreta e um baseline específico.

**Usar apenas a referência visual como baseline.** Rejeitado porque repertório cultural responde “que relações podemos traduzir?”, não “como o produto resolve hoje?” nem “qual é o estado da prática?”.

**Comparar apenas as variantes entre si.** Rejeitado porque pode produzir uma vencedora relativa mesmo quando todas são piores que A0.

**Manter uma lista fixa de design systems de excelência.** Rejeitado porque relevância depende da pergunta e sistemas mudam.

**Canonizar automaticamente a variante selecionada.** Rejeitado porque vitória local não demonstra transferibilidade sistêmica.

## Consequências

O laboratório passa a preservar melhor a natureza do repertório visual: **uma referência amplia o olhar em vários lugares; cada lugar vira uma direção; cada direção pode ou não merecer exploração; e cada exploração precisa demonstrar ganho real antes de qualquer canonização**.

Isso também evita que o agente “gaste” uma referência inteira numa única experiência. Referências fortes podem continuar produzindo trabalho útil ao longo do tempo, sem obrigação de exaurir todas as suas possíveis interpretações.
