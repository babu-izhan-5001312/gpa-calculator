describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.screenshot('homepage');
  })
})