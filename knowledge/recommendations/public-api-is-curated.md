---
type: OpinionatedRecommendation
slug: public-api-is-curated
maturity: opinionated
problem: bibliotecas podem transformar a organização interna de arquivos em contrato público e obrigar consumidores a escolher detalhes que o sistema não recomenda
validated_in: []
---

# A API pública deve ser curada, não refletir a árvore interna

## Posição

Quando o Cobogó publica componentes, padrões ou primitives, cada entrada pública deve existir por decisão explícita. Organização interna de arquivos não deve virar API apenas porque é conveniente exportá-la por wildcard.

`opinionated` quer dizer que o Cobogó considera esta recomendação correta e quer testá-la; ela ainda não foi comprovada por uma aplicação real reconciliada.

## Racional

Uma API pública ampla demais transfere para quem consome a biblioteca decisões que deveriam ser do próprio design system: qual abstração é recomendada, qual é histórica, quais símbolos pertencem a uma mesma família e quais detalhes são internos. Também transforma refactors internos em quebras públicas sem ganho para o leitor ou para o produto.

Curadoria reduz escolha acidental e permite que a documentação comece pelo problema visual, não pelo nome de um arquivo.

## Contrato

- exports públicos são deliberados e pequenos;
- componentes internos não se tornam públicos apenas por wildcard de diretório;
- famílias de baixo nível podem continuar públicas quando o consumidor realmente precisa compô-las e a acessibilidade exige esse contrato;
- remover ou renomear arquivo interno que nunca foi deliberadamente público não deve criar obrigação artificial de compatibilidade;
- a documentação deve distinguir padrão recomendado, implementação pública e detalhe interno;
- **a documentação e os exemplos públicos devem ser migrados antes de remover um entrypoint que ainda ensinam**;
- uma mudança de export só está pronta quando uma verificação automatizada confirma que a documentação não aponta para caminhos removidos.

## Critério observável

Uma pessoa ou agente deve conseguir listar a API pública recomendada sem enumerar a árvore interna de componentes. Adicionar um arquivo interno novo não deve torná-lo importável publicamente sem mudança explícita do contrato do pacote.

Além disso, nenhum exemplo oficial pode ensinar um import que o `package.json` não exporta. Fechar uma rota pública de importação sem migrar primeiro os exemplos que a recomendam não conta como aplicação bem-sucedida desta recomendação.

## Escape hatch

Um ecossistema deliberadamente extensível pode publicar imports profundos ou namespaces amplos quando essa extensibilidade é parte assumida do produto, documentada e versionada como contrato. Nesse caso, a amplitude é uma escolha explícita, não vazamento da organização interna.

## Evidência atual

A auditoria `docs/audits/public-surface-simplification-2026-09.md` encontrou no Cobogó um caso concreto: `./components/*` publica a árvore empacotada apesar de `src/index.ts` tentar representar uma curadoria menor. A mesma auditoria identifica ainda uma lista root plana e uma paleta fixa pública que aumentam o custo de escolha.

Na rodada de 2026-09-04, a #498 removeu `./components/*` e passou em CI, validação de conhecimento, observação em navegador e GitGuardian. A verificação posterior, porém, encontrou `src/content/docs/getting-started.mdx` e várias páginas de componentes ensinando imports como `cobogo/components/Button`, `cobogo/components/Dialog` e `cobogo/components/Disclosure`. A remoção faria a documentação oficial ensinar código que o pacote não aceitaria.

A #499 reverteu a remoção. O aprendizado é de sequência: **primeiro migrar documentação e usos profundos reais, depois fechar o wildcard, e manter um teste que impeça contrato e documentação de divergirem novamente**.

Isso não valida nem aposenta a recomendação. Ela permanece `opinionated`: a posição continua sustentada, mas a primeira aplicação foi revertida e portanto não conta como experiência bem-sucedida em projeto real.

## Falsificação

Se fechar exports reduzir de forma material a capacidade de composição, acessibilidade ou extensão de consumidores reais sem oferecer um caminho menor equivalente, a curadoria proposta está estreita demais e deve ser revista. Se usos reais mostrarem que imports profundos são intencionalmente parte do produto, eles devem ser promovidos a contrato explícito em vez de proibidos por princípio.

Se a migração dos exemplos exigir uma API root tão ampla quanto o wildcard ou tornar o caminho recomendado materialmente pior, isso também é evidência contra a forma atual da recomendação e deve provocar revisão, não uma remoção cerimonial do export.
