Feature: Evidência renderizada do site público do Cobogó
  Como mantenedor do Cobogó
  Quero observar as rotas públicas principais em desktop e celular
  Para que avaliações de UI e UX sejam ligadas ao commit realmente observado

  Scenario: rotas principais cabem em tela estreita
    Given o site foi compilado no commit avaliado
    When home, grammar, core, patterns, consumers e knowledge são abertas em 390 por 844
    Then cada resposta deve ser HTTP 200
    And a largura do documento não deve exceder a largura da janela
    And uma imagem de cada rota deve ser preservada

  Scenario: a observação declara sua origem
    Given a execução ocorre em pull request ou em main
    When o arquivo evidence.json é produzido
    Then ele deve registrar o commit real avaliado
    And deve registrar separadamente a referência sintética de pull request quando existir
    And deve registrar rota, viewport, status HTTP e largura do documento para cada imagem

  Scenario: reduced-motion continua sendo contrato
    Given a nova observação responsiva foi adicionada
    When o gate visual é executado
    Then a verificação existente de prefers-reduced-motion deve continuar passando
