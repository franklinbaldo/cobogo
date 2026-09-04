Feature: Interactive Organisms Visual Governance
  As a design system architect
  I want all interactive organisms to be visually accountable
  So that their behavior and layout are strictly preserved across sessions

  Scenario: Adding remaining interactive organisms to visual governance
    Given the visual regression test suite in `e2e/visual-regression.spec.ts`
    And the Vitrine component documentation in `e2e/vitrine-remaining-components.spec.ts` or similar
    When I add `disclosure`, `tabs`, `date-picker`, and `time-picker` to the tracked components
    Then they should be checked for visual regressions at mobile, tablet, and desktop viewports
    And their Vitrine documentation pages should be asserted for accessibility and visibility
