# Fluxo de evolução entre consumidores e Cobogó

Cobogó evolui a partir de necessidades reais dos projetos que o usam. O objetivo é acelerar a produção e evitar que aprendizados visuais úteis fiquem presos a um único consumidor.

## Produção primeiro

Cobogó **não é um gate de entrega**.

Se o consumidor já consegue usar uma solução existente do Cobogó, use-a. Se precisar criar algo local para entregar o produto, crie localmente sem esperar uma mudança upstream.

Quando a solução parecer reutilizável, considere promovê-la ao Cobogó na mesma rodada ou depois. A promoção é um mecanismo de aprendizado e compartilhamento, não uma pré-condição para produzir.

A pergunta útil é:

> Isto é específico deste produto ou existe aqui um aprendizado visual que outros consumidores poderiam aproveitar?

Se houver aprendizado reutilizável, uma PR no Cobogó é bem-vinda. Se não houver, a solução continua local sem problema.

## Heurística rápida

- **Cobogó já resolve?** Reuse se isso for o caminho mais simples.
- **Precisa entregar algo novo?** Implemente onde destrava o trabalho mais rápido.
- **Ficou reutilizável?** Considere extrair para o Cobogó.
- **É domínio puro?** Mantenha no consumidor.
- **Descobriu uma abstração melhor?** Quando conveniente, consolide ou deprecie a anterior em vez de acumular variantes.

Nenhuma dessas perguntas deve bloquear uma entrega que já pode avançar.

## O que pertence ao Cobogó

Pertence ao Cobogó conhecimento reutilizável sobre como apresentar informação e interação de forma coerente, acessível e reconhecível dentro da gramática visual do sistema.

Exemplos:

- relações de hierarquia, ritmo, densidade e composição;
- patterns para estados, metadados, provenance, leitura longa, tabelas e formulários;
- componentes necessários quando existe comportamento real a encapsular;
- defaults e decisões técnicas que tornam a implementação visual mais previsível para agentes;
- aprendizados reutilizáveis obtidos em consumidores reais.

## O que pertence ao consumidor

O domínio continua local.

Um projeto pode saber o que é CNPJ, sentença, matéria jornalística, processo, lead ou atleta. Cobogó não precisa conhecer esses conceitos para ensinar como apresentar identidade, atributos, relações, estados e alertas.

Uma abstração também pode permanecer local quando sua forma é inseparável de um fluxo ou conceito específico daquele produto.

## Promoção upstream

Quando uma solução local valer a pena compartilhar, a PR pode ser tão pequena quanto necessário. É útil explicar o problema visual, preservar a independência do domínio e reaproveitar a gramática existente, mas isso não deve virar ritual obrigatório.

Não é necessário provar adoção em vários consumidores, escrever uma RFC para cada extração ou aguardar a abstração perfeita. O Cobogó pode incorporar uma solução útil e refiná-la, modificá-la ou removê-la conforme aprende.

## Stack recomendada

Cobogó pode ser opinionado sobre implementação sem transformar tecnologia em identidade.

No estado atual, **Astro é o caminho recomendado para novos projetos web** porque é a stack em uso e sobre a qual o sistema acumula experiência operacional. Isso não cria obrigação de manter bindings equivalentes para todos os frameworks.

Se a experiência futura mostrar uma alternativa melhor, a recomendação muda. O conhecimento visual deve sobreviver à troca de stack; a experiência recomendada não precisa ser neutra.

## Versionamento e breaking changes

Compatibilidade não tem direito de veto sobre simplificação.

Quando uma abstração histórica é ruim, redundante ou contradiz a gramática atual, Cobogó pode removê-la em nova versão. Consumidores que não puderem migrar imediatamente podem permanecer fixados numa versão anterior.

O custo de migração deve ser explicado com clareza, sem transformar a migração em pré-condição para continuar produzindo no consumidor.

## Crescimento por aprendizado

Cobogó não cresce apenas por adição. Ele também consolida e esquece.

Quando houver tempo para generalizar uma solução, prefira capturar a classe de problema visual em vez de copiar exatamente o componente local. Quando não houver, entregue primeiro e deixe o aprendizado aparecer no ciclo seguinte.
