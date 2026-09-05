# RFC 0004 — Agent Skills públicas do Cobogó

Status: proposta

Issue: #565

## Resumo

Cobogó passa a publicar uma camada oficial de **Agent Skills instaláveis**, voltada a agentes que constroem, refatoram e migram interfaces em projetos consumidores.

A arquitetura segue uma ideia simples: o agente recebe uma intenção comum de trabalho e a skill traduz essa intenção para a gramática, os contratos e a experiência atual do Cobogó.

A primeira superfície pública terá três skills:

- `cobogo-builder` — construir páginas, componentes, estados e layouts novos;
- `cobogo-refactor` — revisar, simplificar e melhorar interfaces existentes;
- `cobogo-migrate` — atualizar consumidores entre versões e contratos do Cobogó.

As skills ficam em `skills/`, no mesmo formato instalável adotado pelo ecossistema Agent Skills. As rotinas em `.claude/skills/` continuam voltadas ao trabalho interno do próprio repositório.

## Motivação

A RFC 0003 definiu que Cobogó deve ser menor, orientado por problemas visuais e útil para agentes. Falta uma interface operacional que transforme essa direção em comportamento repetível dentro de qualquer consumidor.

Hoje um agente pode encontrar README, RFCs, `knowledge/`, CSS, componentes e skills internas. Esses artefatos são valiosos, mas pressupõem que o agente já saiba:

- qual evidência consultar primeiro;
- como distinguir domínio local de apresentação compartilhável;
- quando usar HTML semântico, `core`, `patterns` ou componente;
- como decidir entre reutilizar, compor, criar localmente ou propor algo ao Cobogó;
- como revisar uma interface sem transformar Cobogó em uma aparência única;
- como lidar com uma mudança incompatível de forma prática.

A skill pública concentra esse caminho de decisão sem transformar documentação em cerimônia.

## Referência de produto

A estrutura se inspira nas Agent Skills públicas da Chakra UI: skills separadas por intenção de trabalho, ativação por linguagem natural, inspeção inicial do projeto e referências carregadas sob demanda para decisões especializadas.

Cobogó adapta esse formato ao seu próprio contrato. O ponto de partida não é um catálogo de componentes. É o problema de apresentação e a relação que a interface precisa tornar perceptível.

## Decisão 1 — skills públicas em `skills/`

`skills/` é a superfície distribuível do Cobogó.

Estrutura inicial:

```text
skills/
  cobogo-builder/
    SKILL.md
    references/
  cobogo-refactor/
    SKILL.md
    references/
  cobogo-migrate/
    SKILL.md
    references/
```

O diretório `.claude/skills/` permanece como espaço para rotinas de manutenção, descoberta, revisão e coordenação do próprio repositório.

A distinção é de público:

- `skills/` ensina um agente consumidor a **usar Cobogó**;
- `.claude/skills/` ajuda agentes mantenedores a **evoluir Cobogó**.

## Decisão 2 — três intenções, uma gramática

### `cobogo-builder`

Ativa quando a tarefa é criar ou ampliar uma interface com Cobogó.

O fluxo começa pelo contexto real do projeto e segue para a menor superfície compartilhada capaz de resolver o problema:

```text
contexto do consumidor
→ trabalho do usuário
→ relação visual
→ HTML semântico
→ core/pattern existente
→ composição
→ componente comportamental quando necessário
→ implementação local quando específica
→ promoção ao Cobogó quando reutilizável
```

A skill não transforma todo problema em componente.

### `cobogo-refactor`

Ativa quando a tarefa é revisar, simplificar, converter ou melhorar uma interface existente.

A revisão cobre, em conjunto:

1. clareza do trabalho do usuário e hierarquia;
2. acessibilidade e semântica;
3. responsividade e densidade;
4. uso da API e contratos atuais do Cobogó;
5. reutilização de `core`, `patterns` e componentes;
6. excesso de containers, wrappers e abstrações;
7. duplicação visual ou CSS local generalizável;
8. identidade própria do consumidor;
9. manutenção e oportunidade de reduzir superfície.

Refatorar pode significar remover código e abstração. A skill privilegia a solução mais simples que melhora a experiência real.

### `cobogo-migrate`

Ativa quando o consumidor precisa acompanhar uma nova versão ou contrato do Cobogó.

A skill lê a versão realmente usada, identifica a superfície afetada, consulta o caminho de migração e aplica a mudança no consumidor. Breaking changes são tratados como evolução versionada, conforme a RFC 0003, e não como motivo para preservar indefinidamente abstrações fracas na versão atual.

## Decisão 3 — contexto antes de código

Cada skill começa descobrindo o estado real do consumidor.

A inspeção normal inclui, quando presentes:

- `package.json` e lockfile;
- versão ou referência Git do Cobogó;
- framework e estrutura de páginas/componentes;
- imports de `cobogo/core`, `cobogo/patterns`, `cobogo/styles` e raiz do pacote;
- estilos locais relacionados à tarefa;
- componentes e padrões já existentes;
- testes e checks relevantes;
- documentação local que expresse identidade ou restrições do produto.

A inspeção serve para agir melhor. Ela deve permanecer proporcional à mudança.

## Decisão 4 — árvore de decisão antes de ampliar API

Quando a implementação não tiver instrumento óbvio, a skill consulta uma árvore de decisão.

A ordem preferida é:

1. HTML semântico resolve o comportamento e a estrutura?
2. `cobogo/core` resolve fundações e semântica visual?
3. `cobogo/patterns` expressa a relação recorrente?
4. composição de primitives/patterns existentes resolve com clareza?
5. um componente público existente acrescenta comportamento ou acessibilidade mecânica útil?
6. a necessidade é específica do domínio e deve ficar local?
7. existe uma lacuna reutilizável que merece uma mudança no Cobogó?

A árvore reduz escolhas artificiais e reforça a política de simplicidade da RFC 0003.

## Decisão 5 — referências sob demanda

`SKILL.md` contém o caminho principal. Detalhes especializados ficam em `references/` e são lidos quando a decisão exigir.

Referências iniciais incluem:

- contexto e detecção do consumidor;
- árvore de decisão de apresentação;
- critérios de revisão/refatoração;
- fluxo de migração e breaking changes.

Conhecimento canônico mais amplo continua em `knowledge/`. A skill aponta para esse corpus quando uma decisão depende da gramática, de evidência de consumidores ou de aprendizado acumulado.

## Decisão 6 — parentesco sem uniformidade

As skills não são um gerador de “cara de Cobogó”.

Elas compartilham hierarquia, ritmo, relações tipográficas, estados, densidade, acessibilidade e outros conhecimentos de apresentação enquanto preservam conteúdo, voz, marca, arquitetura de informação e necessidades específicas do produto.

Dois consumidores podem usar os mesmos contratos e continuar parecendo produtos diferentes.

## Decisão 7 — `brazilian-web-design` complementa, não duplica

A skill `brazilian-web-design`, já usada no desenvolvimento do Cobogó, continua sendo a ferramenta para pesquisa e derivação de referências de design brasileiro.

As novas skills públicas operam **o Cobogó como design system**. Quando uma tarefa exige criar ou validar uma nova tese cultural/visual, o trabalho pode recorrer à skill de design brasileiro e depois incorporar o aprendizado reutilizável ao corpus do Cobogó.

## Experiência de instalação

O repositório deve oferecer instalação do conjunto inteiro ou de uma skill específica, seguindo o padrão do ecossistema:

```bash
npx skills add https://github.com/franklinbaldo/cobogo/tree/main/skills

npx skills add https://github.com/franklinbaldo/cobogo/tree/main/skills/cobogo-builder
npx skills add https://github.com/franklinbaldo/cobogo/tree/main/skills/cobogo-refactor
npx skills add https://github.com/franklinbaldo/cobogo/tree/main/skills/cobogo-migrate
```

A ativação é descrita por intenção. O usuário pode pedir “faça uma página”, “simplifique esse formulário” ou “atualize para o Cobogó atual” sem memorizar nomes internos.

## Experiência pública

O site do Cobogó terá uma página dedicada a agentes com:

- instalação;
- as três intenções;
- exemplos de pedidos que ativam cada skill;
- explicação curta do fluxo contexto → problema → pattern → implementação;
- ligação para o código das skills e para a documentação de início.

O README apontará para essa página.

## Consequências

Com essa arquitetura:

- documentação vira comportamento operacional reutilizável;
- consumidores recebem orientação atual sem copiar prompts longos;
- a política de simplicidade passa a atuar durante geração e refatoração;
- mudanças de versão ganham um caminho explícito de adoção;
- o conhecimento do Cobogó pode evoluir sem aumentar indefinidamente o `SKILL.md`;
- rotinas internas e experiência pública deixam de competir pelo mesmo espaço.

## Implementação

A implementação segue em pilha ligada à issue #565:

1. esta RFC;
2. três skills públicas e referências;
3. documentação pública, README e exemplos de instalação.
