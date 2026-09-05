---
type: OpinionatedRecommendation
slug: public-api-is-curated
maturity: validated
problem: bibliotecas podem transformar a organização interna de arquivos em contrato público e obrigar consumidores a escolher detalhes que o sistema não recomenda
validated_in: [franklinbaldo/cobogo]
---

# A API pública deve ser curada, não refletir a árvore interna

## Posição

Quando o Cobogó publica componentes, padrões ou primitives, cada entrada pública deve existir por decisão explícita. Organização interna de arquivos não deve virar API apenas porque é conveniente exportá-la por wildcard.

`validated` quer dizer que esta recomendação **já funcionou em pelo menos um projeto real**. Ela foi aplicada no próprio Cobogó pela #505. Ainda não é `stable`: para isso, a mesma ideia precisa funcionar de forma convergente em pelo menos dois projetos reais, preservando suas identidades e necessidades locais.

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

Além disso, nenhum exemplo oficial pode ensinar um import que o pacote não sustenta. Fechar uma rota pública de importação sem migrar primeiro os exemplos que a recomendam não conta como aplicação bem-sucedida desta recomendação.

## Escape hatch

Um ecossistema deliberadamente extensível pode publicar imports profundos ou namespaces amplos quando essa extensibilidade é parte assumida do produto, documentada e versionada como contrato. Nesse caso, a amplitude é uma escolha explícita, não vazamento da organização interna.

## Evidência atual

A auditoria `docs/audits/public-surface-simplification-2026-09.md` encontrou no Cobogó um caso concreto: `./components/*` publicava a árvore empacotada apesar de `src/index.ts` tentar representar uma curadoria menor.

Na rodada de 2026-09-04, a #498 removeu `./components/*` cedo demais. Mesmo com CI, validação de conhecimento, observação em navegador e GitGuardian verdes, a leitura posterior encontrou exemplos oficiais ensinando caminhos que deixariam de existir. A #499 reverteu a remoção. Esse resultado negativo corrigiu a sequência da recomendação: primeiro migrar documentação e usos reais conhecidos, depois fechar o wildcard, e manter uma verificação que impeça contrato e documentação de divergirem novamente.

Na rodada de 2026-09-05, a #505 executou essa sequência completa. A busca nos repositórios acessíveis não encontrou uso conhecido de `cobogo/components/*` fora do próprio Cobogó; os exemplos públicos correntes foram migrados para imports nomeados do entrypoint `cobogo`; `src/index.ts` passou a exportar deliberadamente os símbolos que a própria documentação ensina; `./components/*` foi removido; e `tests/public-api-doc-contract.test.ts` passou a reprovar se o wildcard voltar, se uma página pública voltar a ensinar deep import ou se um exemplo importar do root um símbolo que não está exportado. No commit atual da PR #505, `722c1251ccd428d3e9cdca7ec350620ba7a009a4`, CI/Vitest/build, validação do conhecimento, observação em navegador e GitGuardian ficaram verdes antes do merge. A mudança entrou em `main` como `4c8982b8f42bb70268c201171a761d26b05277a4`.

Isso conta como a primeira aplicação bem-sucedida e muda a recomendação para `validated`.

Ainda em 2026-09-05, a #517 exercitou a mesma curadoria dentro do próprio Cobogó: `DataTable` deixou de ser export público porque o wrapper interpretava rótulos de domínio como `Concluído`, `Pendente` e `Cancelado` para escolher estados visuais. O pattern CSS `data-table` permaneceu disponível, deixando o projeto consumidor responsável por escrever a tabela semântica e decidir o significado de seus próprios estados. Essa segunda decisão no mesmo repositório reforça a aplicação, mas **não** muda a maturidade: continua sendo experiência de um único projeto real, portanto ainda não satisfaz o critério de `stable`.

## Falsificação

Se fechar exports reduzir de forma material a capacidade de composição, acessibilidade ou extensão de consumidores reais sem oferecer um caminho menor equivalente, a curadoria proposta está estreita demais e deve ser revista. Se usos reais mostrarem que imports profundos são intencionalmente parte do produto, eles devem ser promovidos a contrato explícito em vez de proibidos por princípio.

Se a migração dos exemplos exigir uma API root tão ampla quanto o wildcard ou tornar o caminho recomendado materialmente pior, isso também é evidência contra a forma atual da recomendação e deve provocar revisão, não uma remoção cerimonial do export.
