# RFC 0002 — Cobogó como sistema opinionado de qualidade de superfície

Status: aceita
Data: 2026-09-01

> Esta RFC está adotada operacionalmente. O README, a rotina em `docs/operations/opinionated-surface-routine.md` e o modelo aceito em `knowledge/surface-quality-model.md` já implementam esta governança. O status anterior `proposta` era documentação desatualizada.

## Resumo

O Cobogó deixa de ser apenas um sistema que observa padrões emergirem nos consumers e passa a exercer uma opinião explícita sobre a qualidade de suas superfícies públicas.

A evidência de uso continua importante, mas deixa de ser autorização para pensar. O Cobogó pode formular e implementar uma solução recomendada antes de ela aparecer espontaneamente em dois consumers. Evidência posterior serve para validar, ajustar, estabilizar ou retirar a tese.

O objetivo não é uniformizar os projetos. É fornecer uma barra de qualidade comum para UI, UX, legibilidade para leitores sem contexto, provenance, freshness, acessibilidade e autonomia sobre artefatos públicos, preservando a identidade visual e editorial de cada consumer.

## Problema

A política atual é excessivamente conservadora: um pattern compartilhado só pode nascer depois de evidência convergente em pelo menos dois consumers. Isso faz o Cobogó aprender, mas dificulta que ele lidere.

Na prática, problemas que já entendemos suficientemente bem precisam ser resolvidos repetidamente em consumers antes de o design system poder oferecer uma resposta. Isso inverte a relação desejável: o Cobogó deveria sintetizar conhecimento do portfólio, oferecer defaults fortes e usar os consumers como campo de validação.

## Nova tese operacional

O ciclo passa de:

`consumer inventa → outro consumer repete → Cobogó promove`

para:

`Cobogó formula tese → implementa referência → recomenda/aplica nos consumers → mede → valida, ajusta ou retira`

O Cobogó é simultaneamente:

1. design system;
2. framework de qualidade de superfície;
3. corpus de conhecimento de UI/UX do portfólio;
4. avaliador opinionado dos consumers;
5. mecanismo de melhoria contínua por issues e PRs verificáveis.

## Maturidade de padrões

Patterns e recomendações passam a ter três níveis.

### Opinionated

Uma posição recomendada pelo Cobogó porque há racional suficiente para considerá-la o melhor default atual. Não exige adoção prévia por dois consumers.

Requisitos:

- problema explícito;
- princípio/racional explícito;
- implementação ou contrato de referência quando aplicável;
- critério de sucesso observável;
- escape hatch: consumer pode divergir quando sua identidade ou domínio justificar.

### Validated

A posição foi aplicada a pelo menos um consumer real e a evidência pós-mudança sustenta o critério declarado.

### Stable

A solução convergiu em pelo menos dois consumers reais sem apagar suas identidades locais e possui evidência antes/depois reproduzível.

Portanto, o antigo gate de dois consumers não desaparece: ele passa a ser gate de `stable`, não gate de existência.

## Avaliação de qualidade dos consumers

Cada consumer ativo recebe uma avaliação periódica de superfície. O ranking não mede valor do projeto nem qualidade do backend; mede somente a experiência pública observável.

A avaliação tem seis dimensões, cada uma de 0 a 4:

1. **Clareza (D1)** — um leitor sem contexto entende rapidamente o que pode fazer no site.
2. **Explicabilidade (D2)** — a superfície explica o que o projeto faz por trás e por que existe, sem marketing não provado.
3. **Autonomia (D3)** — artefatos públicos, dados, APIs, arquivos e caminhos reproduzíveis permitem uso independente quando o repo os oferece.
4. **UX** — navegação, arquitetura de informação, feedback, estados vazios/erro/loading, fluxo de tarefa e progressão de informação.
5. **UI** — hierarquia visual, composição, legibilidade, responsividade, consistência e preservação da identidade local.
6. **Confiança** — acessibilidade, provenance, freshness, estado dos dados e correspondência entre afirmações públicas e artifacts reais.

### Escala

- `0 — quebrado`: impede ou engana o uso principal.
- `1 — fraco`: funcionalidade existe, mas é difícil de descobrir/compreender/usar.
- `2 — adequado`: cumpre o básico, com gaps materiais.
- `3 — bom`: experiência clara e confiável; problemas restantes são localizados.
- `4 — excelente`: solução de referência para o portfólio naquela dimensão.

A nota total é `0–24`. Para comunicação rápida:

- `0–7`: crítica
- `8–12`: fraca
- `13–17`: média
- `18–21`: boa
- `22–24`: referência

A classificação nunca substitui as seis notas nem a evidência que as sustenta.

## Ranking

O Cobogó mantém um ranking derivado das avaliações mais recentes dos consumers ativos.

O ranking deve mostrar:

- nota total e por dimensão;
- data e commit/deploy avaliados;
- captura usada como evidência;
- tendência desde a avaliação anterior;
- gaps materiais abertos;
- recomendações Cobogó adotadas, divergentes ou pendentes.

O ranking é um instrumento de priorização, não competição estética. Consumers com propósitos diferentes não precisam parecer iguais.

## Issues opinionadas

A rotina pode abrir issues diretamente nos consumers quando uma avaliação identificar uma oportunidade concreta de qualidade.

Toda issue deve conter:

- dimensão e nota afetada;
- evidência observável;
- posição/recomendação do Cobogó;
- por que o default é recomendado;
- critério verificável de conclusão;
- indicação se existe pattern/componente Cobogó reutilizável;
- liberdade explícita para solução local equivalente quando identidade/domínio justificar.

Não abrir issue genérica como “melhorar UX”. A issue deve apontar uma falha ou oportunidade reproduzível.

## Autoridade do Cobogó

O Cobogó pode, sem esperar repetição prévia em consumers:

- criar patterns `opinionated`;
- implementar componentes e contratos de referência;
- definir defaults de UI/UX e acessibilidade;
- definir contratos de provenance/freshness e estados de dados para a superfície;
- definir infraestrutura de captura e avaliação visual;
- avaliar e ranquear consumers;
- abrir issues recomendando adoção;
- levar uma recomendação até PR no consumer quando estiver dentro da autoridade de superfície.

Continua fora de escopo inventar capacidades, corrigir dados, alterar a tese do projeto ou assumir autoridade operacional pertencente ao workspace/consumer.

## Relação com identidade local

Opinionated não significa uniforme.

O Cobogó deve ser rígido sobre qualidade e flexível sobre expressão. Clareza, foco visível, semântica, estados compreensíveis, provenance e navegação coerente podem ter defaults fortes. Paleta, tipografia, densidade, tom editorial, composição característica e elementos próprios permanecem locais.

Um consumer pode superar o Cobogó. Nesse caso, a solução local deve alimentar o knowledge e pode substituir a recomendação compartilhada.

## Novo ciclo da rotina

Cada rodada passa a poder escolher entre três tipos de trabalho:

1. **remediação** — fechar um gap observado em consumer;
2. **aplicação** — levar uma recomendação opinionated do Cobogó a um consumer adequado;
3. **formulação** — quando o portfólio já oferece informação suficiente, criar no Cobogó uma tese/pattern de referência antes da adoção.

Urgências e follow-ups continuam tendo prioridade operacional. Fora disso, a priorização considera nota de qualidade, gravidade do gap, antiguidade da avaliação e valor de aprendizado para uma tese opinionated.

## Evidência

Evidência continua obrigatória para afirmações factuais e para declarar sucesso de uma mudança. O que deixa de existir é a exigência de evidência prévia em dois consumers para o Cobogó formular uma opinião.

- `opinionated`: racional + critério.
- `validated`: evidência real em ≥1 consumer.
- `stable`: convergência e evidência em ≥2 consumers.

Uma tese que falha na prática deve ser alterada ou retirada. Ser opinionado inclui admitir falsificação.

## Migração

1. Atualizar o schema de concepts/patterns para maturidade `opinionated | validated | stable | retired`.
2. Adicionar `SurfaceQualityAssessment` ao knowledge do Cobogó.
3. Estender ConsumerCard com última avaliação, notas e tendência.
4. Gerar ranking dos consumers ativos a partir das avaliações versionadas.
5. Atualizar as três skills da rotina para usar o novo modelo.
6. Converter concepts existentes para a maturidade adequada sem promover automaticamente nenhum a `stable`.
7. Fazer uma avaliação baseline de todos os consumers ativos.
8. A partir do baseline, abrir issues concretas nos consumers e começar a aplicar as recomendações de maior impacto.

## Critério de conclusão desta RFC

A mudança estará implantada quando:

- o Cobogó puder registrar uma recomendação `opinionated` sem exigir dois consumers;
- existir schema versionado de avaliação com as seis dimensões;
- existir ranking reproduzível dos consumers ativos;
- pelo menos uma avaliação baseline tiver produzido uma issue concreta em um consumer;
- a rotina distinguir explicitamente `opinionated`, `validated` e `stable`;
- nenhuma dessas mudanças permitir inventar capacidade ou apagar identidade local.
