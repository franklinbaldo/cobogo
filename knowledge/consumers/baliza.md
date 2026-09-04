---
type: ConsumerCard
repo: franklinbaldo/baliza
site: https://franklinbaldo.github.io/baliza/
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

# Baliza

## Identidade local

Preservar Baliza como produto de leitura e análise de contratações públicas, com entrada orientada por cidade, linguagem de monitoramento e a cadeia própria PCA → Publicações → Atas → Contratos. A identidade visual e a semântica de domínio pertencem ao projeto; Cobogó não deve transformar a interface pública em um painel genérico nem centralizar a sua apresentação.

## D1 — no site

A home atual permite escolher/continuar uma cidade, monitorar contratações, entrar em publicações abertas, PCA, atas, busca/exploração, status e arquivo. A navegação oferece também a área de comparação, mas ela distingue explicitamente referências simuladas de municípios realmente observados.

**Problema factual de Clareza: nenhum problema material comprovado nesta revisão.** A home já apresenta tarefas concretas e separa dado real, simulação e falha de hidratação onde isso é relevante.

## D2 — por trás

Conforme o `ProjectProfile`, Baliza preserva o acervo do PNCP como dados públicos reproduzíveis e citáveis e só então constrói análise sobre a mesma autoridade publicada. O Internet Archive é parte da arquitetura, não simples cópia de segurança. A home torna essa relação perceptível: apresenta a cadeia de quatro recursos, identifica registros arquivados e liga o produto analítico ao arquivo preservado.

**Problema factual de Explicabilidade: nenhum problema material na interface.** Problemas operacionais do pipeline pertencem ao repositório dono e não devem ser corrigidos por esta rotina de qualidade pública.

## D3 — por conta própria

O leitor consegue chegar ao arquivo de registros históricos, ao manifesto dos Parquets com URL/hash e à área para desenvolvedores. A própria home afirma, com suporte do repositório, uso dos dados via Python, R ou JavaScript sem chave de API, e mantém o explorador SQL no navegador como caminho de consulta reproduzível.

**Problema factual de Autonomia: nenhum problema material comprovado.** Os arquivos reutilizáveis estão expostos como arquivos reais, não como promessa abstrata de API.

## Capacidades da interface pública

- **Publicação — `last_verified: 2026-09-04`.** A #693 entrou em `main` como `8e324011bdc46a27b5c0ea2826288d4673b9faed`. A publicação do GitHub Pages falhou na execução `33670722066` e voltou a falhar na tentativa agendada `33749265187`, ambas antes do deploy durante a auditoria de dependências. O último deploy bem-sucedido visível no histórico consultado é `33624526005`, ainda no commit anterior `5d1c9cfdeaa46a50b1b7d3031f5f2cf59ef0ff9b`. A causa operacional está registrada em `baliza#694`; por isso a correção de `/publicacoes` ainda não foi comprovada na página que o leitor recebe.
- **Observação visual — `last_verified: 2026-09-04`.** A branch da #693 passou a verificação visual antes do merge, e a observação de `main` também passou depois. A implementação reorganiza o esquema em tela estreita e torna a região tabular rolável e alcançável por teclado de forma deliberada. Isso comprova o código e o runtime do workflow, mas não substitui abrir a URL pública depois de uma publicação bem-sucedida. `baliza#692` continua aberta até essa última etapa existir.
- **Testes da interface — `last_verified: 2026-09-04`.** O workflow visual roda em PR e em push para `main` quando a interface muda. A identificação dos arquivos produzidos em PR ainda pode carregar a referência temporária que o GitHub cria para testar o merge; o Baliza ainda não adotou o contrato `rendered-evidence-manifest` para tornar essa identidade inequívoca.
- **Preservação — `last_verified: 2026-09-04`.** A interface continua ligando arquivo, registros históricos e manifesto ao Internet Archive; autonomia sobre os arquivos públicos permanece parte explícita do produto.

## O que este projeto faz melhor que o Cobogó

- Mantém uma taxonomia factual para interfaces que carregam dados no navegador: uma página desenhada não significa que os dados foram carregados com sucesso, e indisponibilidade remota é um estado observável, não ausência de produto.
- Em `/comparar`, explicita a fronteira entre dado observado e referência simulada em vez de preencher o vazio com comparações inventadas. Isso continua sendo um aprendizado útil para `Parentesco sem uniformidade`, mas ainda não é uma segunda implementação factual do padrão de comparação.

## Recomendações do Cobogó em uso

- **Parentesco sem uniformidade** — Baliza preserva a sua linguagem de cidade, monitoramento e contratação pública.
- **Acessibilidade é forma** — link de salto visível quando recebe foco, navegação disclosure nativa e combobox por `aria-activedescendant` foram incorporados em correções anteriores.
- **visual-evidence-as-quality-gate** — a observação desktop/mobile ligada ao commit tornou visível a dívida de UI em `/publicacoes`; a mesma regra impede considerar #693 encerrada antes de publicação + nova observação da URL pública. A recomendação continua `stable`, isto é, já funcionou de forma convergente em pelo menos dois projetos reais.
- **rendered-evidence-manifest** — aplicável como recomendação para identificar sem ambiguidade qual commit foi observado, mas ainda não adotado pelo Baliza. Continua `opinionated`, isto é, uma posição que o Cobogó considera correta e quer testar.

## Histórico

- 2026-09-04 — a publicação continua quebrada em `8e324011...`: `Deploy to GitHub Pages` falhou em `33670722066` e novamente em `33749265187`; o último deploy bem-sucedido visível permanece no commit anterior `5d1c9cf...`. A avaliação passa provisoriamente a 20/24 porque Confiança cai de 4 para 3 enquanto a página pública não acompanha `main`; UI permanece 2 até a correção ser observada depois da publicação.
- 2026-09-02 — #693 implementou a correção responsiva de `baliza#692` e entrou em `main` como `8e324011...`; a primeira publicação falhou por `fast-uri`/`npm audit` (`baliza#694`), então #692 foi reaberta.
- 2026-09-02 — primeira avaliação completa: 21/24 (D1 4, D2 4, D3 4, UX 3, UI 2, Confiança 4); `baliza#692` aberta para legibilidade responsiva de tabela e esquema em `/publicacoes`.
- 2026-09-01 — interface revalidada sem problema material em D1–D3; removida do card a referência desatualizada ao padrão `provenance-freshness`.
- 2026-08-31 — #688 levou `main` a `3468dc1...` com limpeza de scripts e verificações mypy/ruff; mudança sem efeito perceptível na interface.
- 2026-08-24 — #686 alinhou a autoridade do arquivo PCA ao upload real; `main` passou a `9a91fed...`.
- 2026-08-15 — #674 tornou explícita a simulação em `/comparar` e adicionou observação factual desse estado.
