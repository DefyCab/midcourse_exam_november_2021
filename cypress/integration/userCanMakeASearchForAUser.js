describe('A user can search for a user on GitHub', () => {
  beforeEach(() => {
    cy.intercept('GET', '**api.github.com**', {
      fixture: 'userSearch',
    }).as('userIndex')
    cy.visit('/')
  })

  it('is expected to ta make a call a return status code 200', () => {
    cy.wait('@userIndex').its('response.statusCode').should('eq', 200)
  })
  it('is expected to return an array of data', () => {
    cy.get('[data-cy=search-return]').should('have.length', 1)
  })
})
