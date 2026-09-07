# Skill: executar Mapa vazado 002

Use esta skill somente para `experiments/cheio-vazio-mapa-002`.

## Objetivo

Testar se o contrapeso por vazio encontrado no experimento 001 continua útil em um mapa navegável de cinco destinos, onde sequência, foco e área clicável são parte do significado.

## Antes de mexer no código

Leia, nesta ordem:

1. `knowledge/references/cobogo-cheio-vazio.md`;
2. `knowledge/studies/cheio-vazio-na-web.md`;
3. `knowledge/experiments/cheio-vazio-grid-001.md`;
4. `knowledge/experiments/cheio-vazio-mapa-002.md`;
5. o mapa atual em `src/pages/index.astro`.

O experimento 001 é evidência anterior, não regra. A hipótese 002 deve poder falhar.

## Como executar

1. Use exatamente os mesmos cinco destinos, na ordem 01→05, em todas as variantes.
2. Compare três relações espaciais realmente distintas:
   - **A — fecho total:** pares regulares e o quinto item ocupando a largura inteira;
   - **B — contrapeso deslocado:** pares regulares e o quinto item deslocado, com vazio explícito no lado oposto;
   - **C — vazio intercalado:** introduza o vazio antes do fim da sequência para testar o limite de irregularidade.
3. Não use `order`, `tabindex` positivo ou duplicação de links para fabricar a composição. A ordem DOM deve continuar 01→05.
4. O vazio deve ser `aria-hidden` e desaparecer no breakpoint móvel.
5. Observe 390px, 768px e 1440px. Em cada largura, responda: a sequência está clara? o vazio parece erro? o item 05 parece fechamento?
6. Navegue por teclado; o foco deve seguir 01→05 sem saltos visuais surpreendentes.
7. Compare contra todos os sinais de sucesso e falha do `VisualExperiment`.
8. Publique as três variantes juntas em `/laboratorio/`; não esconda a variante rejeitada.
9. Atualize o `VisualExperiment` com `outcome` e estado. Atualize o `VisualSpecimen` para `published` somente depois da publicação verificada.

## Critério de interpretação

O resultado anterior só se repete se o vazio melhorar a relação **sem enfraquecer a tarefa de navegar**. Se a versão mais regular for melhor aqui, registre isso: a fronteira de aplicação é conhecimento valioso.

## Evidência mínima

- build verde;
- contrato OKF verde;
- comparação publicada;
- observação desktop/mobile;
- ordem de foco 01→05;
- decisão explícita sobre A, B e C;
- conclusão sobre repetição ou limite do achado do experimento 001.

## Saída para WikiSkill

Registre a fronteira aprendida, não apenas a variante vencedora. Se o contrapeso funcionar novamente, uma síntese futura pode considerar um princípio `validated`; se falhar, preserve que cheios/vazios têm tolerância diferente em superfícies navegacionais.
