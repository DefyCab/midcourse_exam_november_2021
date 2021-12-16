describe('A user can search for a user on GitHub', () => {
  beforeEach(() => {
    cy.intercept('GET', '**api.github.com/search/users?q=Barack', {
      fixture: 'userSearch',
    }).as('userIndex')
    cy.visit('/')
  })

  it('is expected to ta make a call a return status code 200', () => {
    cy.wait('@userIndex').its('response.statusCode').should('eq', 200)
  })
})
