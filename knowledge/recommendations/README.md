# Recomendações opinionadas do Cobogó

O Cobogó pode formular um default antes de sua adoção ampla. Maturidade registra evidência, não permissão para existir.

## Recomendações iniciais

- `evidence-does-not-veto-opinion` — evidência valida e falsifica defaults; não é autorização prévia para formulá-los.
- `defaults-must-have-escape-hatches` — default forte declara quando não se aplica e o resultado que uma solução local deve preservar.
- `design-system-implements-opinions` — opinião transversal recorrente deve ganhar primitive/pattern/validator de referência quando útil.
- `consumer-can-outperform-cobogo` — solução local superior deve poder mudar o framework, não ser penalizada por divergência.
- `consumer-surface-contract` — Cobogó é contrato de qualidade; importar componentes não determina score.
- `quality-assessment-is-versioned` — score pertence a commit/deploy/captura identificáveis e preserva histórico.
- `quality-debt-is-visible` — gaps materiais continuam rastreáveis até resolução, aceitação ou perda de aplicabilidade.
- `design-critique-is-specific` — crítica formal nomeia mecanismo observável, não gosto genérico.
- `portfolio-quality-bar` — cada dimensão aplicável deve aspirar a pelo menos 3/4; média não esconde dimensão crítica.
- `score-does-not-hide-blockers` — dimensão quebrada não é compensada silenciosamente pela soma.
- `quality-ranking-is-diagnostic` — ranking prioriza gaps; posição ordinal não é objetivo.
- `no-dark-patterns` — agência e compreensão antes de conversão/manipulação.
- `browser-native-before-custom` — plataforma nativa antes de widget customizado quando a tarefa permite.
- `semantic-headings-and-landmarks` — estrutura visual e semântica devem concordar.
- `copy-names-the-user-object` — copy usa vocabulário do leitor/domínio antes de nomes internos de implementação.
- `public-surface-does-not-leak-internals` — transparência explica método/estado sem despejar implementação irrelevante ou sensível.
- `reader-first-project-explanation` — explicar ação, maquinaria e autonomia para leitor sem contexto.
- `surface-task-first` — tarefa pública antes de autoexplicação ou decoração.
- `default-is-the-common-case` — primeira camada otimiza o caso comum comprovado; exceções continuam alcançáveis.
- `primary-action-focus` — hierarquia deve declarar prioridade quando há ação principal.
- `direct-manipulation-when-possible` — ação direta antes de cerimônia quando o risco permite.
- `destructive-actions-are-explicit` — ação irreversível declara consequência e usa guardrail proporcional.
- `feedback-near-action` — progresso/resultado/erro aparecem no contexto causal da ação quando possível.
- `performance-is-ux-when-visible` — espera e hidratação perceptíveis fazem parte do fluxo e precisam ser tratadas como UX.
- `content-hierarchy-before-decoration` — estrutura e significado vêm antes de ornamentação/componentização.
- `readable-density` — densidade serve à tarefa; whitespace não é objetivo universal.
- `contrast-is-functional` — identidade de cor não pode comprometer leitura, foco ou distinção de estados.
- `focus-is-visible` — foco de teclado é estado funcional e nunca desaparece.
- `capability-discoverability` — capacidades públicas reais precisam de caminho de descoberta proporcional.
- `public-capability-needs-entry-point` — rota pública útil entra na arquitetura de informação; URL órfã não conta como descoberta.
- `navigation-information-scent` — navegação deve antecipar destinos para quem não conhece a arquitetura interna.
- `links-are-contracts` — navegação/download/fonte são comportamento e precisam resolver corretamente.
- `search-is-a-product-state` — busca principal é fluxo com escopo, estados e interpretação, não apenas input.
- `filter-state-is-visible` — subconjunto filtrado deve ser perceptível e reversível.
- `url-state-when-shareable` — estado público útil e não sensível deve ser reproduzível por URL quando aplicável.
- `forms-minimize-interpretation` — label, contrato, erro e efeito da submissão devem ser claros no contexto.
- `tables-need-reading-strategy` — tabela serve comparação e precisa de estratégia responsiva deliberada.
- `downloads-name-what-you-get` — download identifica artifact, formato/competência quando material.
- `artifact-autonomy` — artifacts reutilizáveis devem ser encontráveis e leváveis para fora da UI.
- `canonical-artifact-before-dashboard` — visualização não aprisiona dataset/artifact reutilizável quando ele pode ser publicado legitimamente.
- `public-artifact-preservation` — artifacts importantes para auditabilidade/reuso precisam de estratégia de preservação adequada.
- `automation-must-close-publication-loop` — geração automática de artifact precisa chegar causalmente à superfície publicada.
- `reproducible-public-state` — captura/deploy/artifact material devem ser reconciliáveis quando versão muda interpretação.
- `one-source-of-truth-per-state` — metadata factual da superfície deriva do estado/artifact canônico ou possui gate contra divergência.
- `provenance-freshness-visible` — fonte, competência e artifact real fazem parte da UX de dados.
- `source-near-claim` — provenance fica no contexto mínimo que deixa claro qual fonte sustenta qual informação.
- `metadata-is-progressive` — metadata essencial fica visível e detalhe de auditoria aprofunda por camadas.
- `uncertainty-is-visible` — cobertura parcial, desconhecido e inferência material não fingem certeza completa.
- `status-language-is-literal` — estados públicos descrevem condição real sem eufemismo ou certeza não provada.
- `data-state-legibility` — loading, vazio, erro, sucesso e stale não podem colapsar semanticamente.
- `empty-state-explains-system` — vazio legítimo deve ser distinguível de falha e explicar ação real quando houver.
- `recoverable-error-states` — falhas recuperáveis devem preservar agência e próximo passo.
- `progressive-disclosure` — transparência em camadas sem transformar a home em README.
- `semantic-accessibility-default` — semântica, teclado e foco são contrato básico.
- `responsive-by-contract` — tarefa e hierarquia precisam sobreviver a viewport estreito.
- `mobile-keeps-primary-task` — mobile preserva tarefa e ordem de leitura, não geometria desktop.
- `reduced-motion-respected` — motion funcional, não obrigatório, e preferência reduzida respeitada.
- `visual-evidence-as-quality-gate` — UI material precisa de evidência renderizada ligada ao SHA.
- `visual-regression-is-not-only-pixels` — captura deve provar significado/estado quando pixels sozinhos não bastam.
- `quality-issues-are-actionable` — nota baixa não basta; issue precisa de gap e critério verificáveis.
- `no-unproven-marketing` — superfície explica capacidade real sem inflar promessa.
- `local-identity-over-uniformity` — barra comum de qualidade sem aparência comum.

Consulte cada arquivo para posição, racional, contrato, escape hatch, evidência e condição de falsificação.
