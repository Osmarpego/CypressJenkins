describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get("#developer-name").type("Mike")
    cy.get("#tried-test-cafe").check()
    cy.get("#submit-button").click()
    cy.get("#article-header").contains('Thank you')
  })
})