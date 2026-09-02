---
type: OpinionatedRecommendation
slug: copy-names-the-user-object
maturity: opinionated
problem: copy pode usar linguagem de implementação ou abstrações vagas em vez do objeto que o leitor reconhece
validated_in: []
---

# Copy deve nomear o objeto do leitor

## Posição

Rótulos, headings e ações devem preferir o vocabulário do domínio percebido pelo leitor a nomes de módulo, pipeline ou implementação interna.

## Racional

O usuário pensa em pessoa, processo, notícia, dado, arquivo ou consulta — não necessariamente no nome da collection, job ou componente que os implementa.

## Contrato

Copy é concreta, verbos descrevem efeito e termos internos aparecem apenas quando também são conceitos públicos necessários.

## Critério observável

Um leitor sem contexto consegue antecipar conteúdo/ação pelos rótulos sem conhecer arquitetura do repositório.

## Escape hatch

Termos técnicos são corretos quando o público-alvo os usa como vocabulário de domínio ou quando precisão exige apresentá-los com contexto.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se simplificar vocabulário remover precisão material, manter termo de domínio e explicar em vez de substituir por linguagem genérica.
