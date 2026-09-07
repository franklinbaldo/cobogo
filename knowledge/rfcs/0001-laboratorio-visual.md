# RFC 0001 — Laboratório visual do Cobogó

- Status: **Accepted / initial implementation**
- Data: 2026-09-07
- Escopo: `knowledge/`, WikiSkill, contratos OKF e superfície pública `/laboratorio/`

## Resumo

O Laboratório é o mecanismo pelo qual o Cobogó investiga, compara, critica e eventualmente incorpora decisões visuais. Ele não é uma galeria de componentes nem uma fábrica de vencedores.

A unidade de trabalho é `VisualExploration`. Cada nova exploração parte de um problema observável no Cobogó, estabelece um baseline de dois prongs, introduz uma referência visual como fonte de tradução, materializa alternativas comparáveis, publica antes de julgar e separa explicitamente resultado experimental de adoção canônica.

O ciclo canônico é:

**problema → baseline Cobogó → estado da prática → referência → leitura → pergunta de tradução → A0 + traduções → publicação → crítica posterior → resultado → eventual adoção canônica**.

## Motivação

As primeiras explorações do laboratório revelaram quatro riscos estruturais:

1. variantes podiam parecer alternativas arbitrárias porque a referência e a lógica de tradução não estavam suficientemente expostas;
2. o agente tendia a construir e escolher na mesma rodada, favorecendo racionalização pós-hoc;
3. `selected` podia ser confundido com “virou Cobogó”, apesar de uma preferência local não demonstrar transferibilidade;
4. comparar apenas A/B/C não respondia à pergunta mais importante: **alguma alternativa é realmente melhor que o Cobogó atual?**

Além disso, uma exploração sem contexto do estado da prática pode reinventar soluções já maduras, ou tratar uma referência artística como único universo comparativo.

## Decisão

### 1. Baseline de dois prongs é obrigatório para novas explorações

#### Prong A — Cobogó atual

Antes de criar variantes, o agente identifica a superfície real equivalente no Cobogó atual e registra um `PracticeBaseline(kind: cobogo_current)`.

O registro contém:

- superfície/rota/artefato observado;
- data da observação;
- o que a solução atual faz bem;
- limitações relevantes à pergunta;
- achados;
- evidência reproduzível.

Essa solução é materializada no specimen como **A0 — Cobogó atual**. A0 é controle, não proposta.

#### Prong B — estado da prática

O agente pesquisa design systems maduros relevantes **para a classe de problema**, usando preferencialmente documentação e superfícies primárias. Não existe lista fixa nem ranking universal de “bons design systems”.

Cada sistema materialmente usado vira `PracticeBaseline(kind: design_system)`, registrando fonte, superfície, data, forças, limitações, achados e evidência. A síntese procura:

- convergências;
- divergências;
- trade-offs;
- soluções condicionadas pelo contexto.

O objetivo é conhecer o estado da prática, não copiar aparência nem usar popularidade como prova.

Os baselines são persistentes e reutilizáveis. Uma exploração futura pode reutilizar observações ainda atuais, registrando nova observação quando a superfície tiver mudado ou quando a pergunta exigir outro recorte.

### 2. A referência visual vem depois do baseline

`VisualReference` continua sendo repertório visual/cultural. Sua função é abrir possibilidades de tradução, não substituir análise do produto nem benchmark profissional.

A página pública deve mostrar a referência e a leitura feita dela antes das traduções. Quando a imagem não puder ser incorporada adequadamente, deve haver fonte navegável e descrição suficiente da observação; a ausência de imagem não autoriza fingir que ela foi observada.

### 3. Toda tradução tem racional em prosa

Cada variante deve explicar **por que aquela composição é uma tradução da referência para o problema identificado**. O racional deve mencionar relações visuais concretas; nomes como “A”, “B” e “C” não são justificativa.

Não há obrigação de exatamente três variantes. O número deve responder à pergunta da exploração.

### 4. Construir e julgar são rodadas diferentes

Uma rodada que cria A0 ou cria/altera substancialmente variantes termina `exploring` depois da publicação.

Uma rodada posterior pode avaliar apenas uma superfície que já estava publicada antes de começar. Isso cria distância entre autoria e julgamento e torna screenshot/superfície publicada evidência, não cerimônia de CI.

Explorações podem permanecer abertas indefinidamente ou terminar `abandoned`.

### 5. Estado, resultado e canonização são eixos diferentes

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

#### Canonização

É um eixo posterior: `not_evaluated`, `candidate`, `adopted`, `declined`.

Uma tradução selecionada **não** vira Cobogó automaticamente. `adopted` exige `canonical_rationale` que explique:

1. qual ganho demonstrou sobre A0;
2. por que o aprendizado é transferível além do specimen;
3. qual trade-off assume diante do estado da prática;
4. quais evidências sustentam a decisão;
5. onde a mudança entra no sistema (`canonical_targets`).

A página pública apresenta essa decisão em prosa como **“O que entrou no Cobogó — e por quê”**. Se não houve adoção, isso também é explícito.

### 6. Rejeição é conhecimento

O laboratório preserva explorações rejeitadas, inconclusivas e abandonadas. Uma exploração em que A0 continua melhor é bem-sucedida se produziu evidência útil. Isso reduz a pressão para fabricar novidade.

### 7. Ordem narrativa da página pública

Toda nova página de exploração segue, conceitualmente:

1. problema investigado;
2. **Cobogó hoje** — A0 e sua análise;
3. **Estado da prática** — design systems observados e síntese;
4. referência visual;
5. leitura da referência e pergunta de tradução;
6. A0 + variantes, cada uma com racional em prosa;
7. estado/crítica acumulada;
8. resultado, quando existir, incluindo comparação com A0;
9. decisão canônica, quando existir;
10. navegação entre explorações.

A ordem pode variar visualmente, mas não deve ocultar a cadeia de raciocínio.

## Modelo OKF

### `PracticeBaseline`

```text
id
title
kind: cobogo_current | design_system
source_url?
source_name
observed_surface
observed_at
strengths[]
limitations[]
findings[]
evidence[]
status: current | superseded | retired
```

### extensões de `VisualExploration`

```text
cobogo_baseline_id?
practice_baseline_ids[]?
baseline_question?
baseline_comparison?
```

Os campos são inicialmente opcionais para não falsificar baselines retroativos nas explorações 001–008. O RunSpec, e não uma migração inventada, torna-os obrigatórios operacionalmente para **novas** explorações. Uma rodada futura pode enriquecer explorações históricas quando houver evidência real.

## Contrato operacional WikiSkill

`run-specs/visual-exploration` v4 é a implementação normativa deste RFC. `session-types/visual-explorer` fornece os nudges operacionais.

O gate esperado para uma nova exploração deve conseguir demonstrar:

- existe exatamente um baseline `cobogo_current` aplicável e ele aparece como A0;
- existe pelo menos uma observação externa relevante, e quantidade maior é preferível quando acrescenta perspectivas materialmente distintas;
- fontes e superfícies foram realmente observadas;
- cada tradução possui racional em prosa;
- materialização não fecha a exploração na mesma rodada;
- avaliação posterior compara alternativas com A0;
- canonização, se houver, possui racional e targets.

A validação deve evoluir para automatizar o que é estruturalmente verificável sem tentar transformar julgamento visual em lint.

## Migração

### Agora

- adicionar `PracticeBaseline` ao schema OKF;
- adicionar vínculos de baseline e `baseline_comparison` a `VisualExploration`;
- atualizar RunSpec para v4;
- atualizar SessionType;
- adotar este RFC como fonte arquitetural do laboratório.

### Próxima exploração

A primeira exploração criada após este RFC deve ser o specimen de referência do novo processo completo. Ela não pode começar pelas variantes: começa registrando A0 e o estado da prática.

### Explorações 001–008

Permanecem como registro histórico válido. Não criar baselines retroativos por inferência. Elas podem ser enriquecidas posteriormente se uma rodada observar e documentar os controles de forma reproduzível.

## Alternativas rejeitadas

**Usar apenas a referência visual como baseline.** Rejeitado porque repertório cultural responde “que relações podemos traduzir?”, não “como o produto resolve hoje?” nem “qual é o estado da prática?”.

**Comparar apenas as variantes entre si.** Rejeitado porque sempre produz uma vencedora relativa mesmo quando todas são piores que a solução atual.

**Manter uma lista fixa de design systems de excelência.** Rejeitado porque relevância depende da pergunta e sistemas mudam. O contrato exige maturidade, pertinência e evidência, não marcas específicas.

**Canonizar automaticamente a variante selecionada.** Rejeitado porque vitória local não demonstra transferibilidade sistêmica.

**Exigir fechamento em toda rodada.** Rejeitado porque transforma exploração em produção de decisões e reduz a utilidade de resultados negativos/inconclusivos.

## Consequências

O laboratório fica mais lento por exploração e mais forte como mecanismo de decisão. Pesquisa de baseline passa a ser trabalho de primeira classe. Em troca, cada escolha futura pode responder três perguntas diferentes: **o que tínhamos**, **o que a prática profissional ensina** e **o que a referência nos permitiu imaginar**.

O resultado desejado não é mais “B venceu A e C”. É uma afirmação auditável do tipo: **“B melhora o Cobogó atual nesta relação observável, por estes motivos, assumindo estes trade-offs; ainda assim, isso só vira Cobogó canônico quando houver evidência de transferibilidade.”**
