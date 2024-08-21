describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get("#preferred-interface").select('JavaScript API')
    cy.get("#preferred-interface").should('have.value', 'JavaScript API')
  })
})