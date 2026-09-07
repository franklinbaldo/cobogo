---
type: VisualExperiment
id: experiments/cheio-vazio-irregularidade-004
title: "Irregularidade 004"
study_id: studies/cheio-vazio-na-web
hypothesis: "Uma irregularidade moderada em um grid editorial pode aumentar ritmo e identidade sem comprometer hierarquia; acima desse limiar, deslocamentos e mudanças de largura passam a competir com a ordem de leitura."
medium: "Astro + Panda CSS responsive editorial grid"
constraints:
  - "Usar exatamente os mesmos quatro blocos, conteúdo e ordem DOM nas três variantes."
  - "Variar somente distribuição espacial, spans e deslocamentos do grid."
  - "Funcionar de 320px a 1440px sem rolagem horizontal."
  - "No mobile, preservar uma ordem linear idêntica entre variantes."
  - "Não usar ícones, setas, ornamento ou cor adicional para compensar hierarquia fraca."
procedure:
  - "Construir três variantes: regular, irregularidade moderada e irregularidade alta."
  - "Comparar primeiro em 1440px e 768px, depois confirmar colapso em 390px e 320px."
  - "Observar se título, apoio, evidência e ação continuam formando uma sequência visual inequívoca."
  - "Preservar a variante excessiva como evidência mesmo que falhe."
  - "Publicar as três variantes juntas em /laboratorio/irregularidade-004/ e registrar o resultado depois da verificação publicada."
success_signals:
  - "A variante moderada produz ritmo perceptível sem exigir releitura para descobrir a sequência."
  - "O bloco principal continua claramente dominante e a ação permanece fácil de localizar."
  - "A composição relineariza em 320px e 390px sem lacunas arbitrárias."
  - "A diferença entre moderada e excessiva torna visível um limite de irregularidade útil."
failure_signals:
  - "A variante moderada já parece desorganizada ou muda a sequência percebida."
  - "A variante excessiva não é perceptivelmente pior, indicando que a hipótese está subespecificada."
  - "A técnica depende de cor, ornamento ou explicação para recuperar hierarquia."
  - "O efeito só funciona em uma largura específica."
skill_path: skills/experiments/cheio-vazio-irregularidade-004/SKILL.md
status: partial
outcome: "A PR #609 publicou as três variantes no merge b53d58da2c3ec5649bfe3dc0a3c10eaeaa6d9f7b. O Deploy Pages #484 concluiu build, deploy e verify-published-surface com sucesso, e o gate capturou as rotas públicas depois do deploy sem registrar falha estrutural ou de superfície. Nesta sessão, porém, o artefato de screenshots gerado pelo workflow não ficou recuperável para inspeção visual pelo agente; por isso não há evidência suficiente para afirmar que B preserva a hierarquia enquanto C cruza o limiar. O experimento termina partial: A/B/C estão publicadas e tecnicamente válidas, mas a hipótese visual sobre o limiar continua sem decisão."
---

# Experimento: Irregularidade 004

A terceira pergunta do estudo agora tem um teste publicado, mas não uma conclusão fabricada. A comparação A/B/C existe e passou pelos gates; falta uma observação visual recuperável das capturas para decidir onde o ritmo vira ruído. O estado `partial` preserva essa diferença entre integridade técnica e evidência perceptiva.
