describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get("#tried-test-cafe").check()
    cy.contains('5').click()
  })
})