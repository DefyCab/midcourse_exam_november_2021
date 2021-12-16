describe('A user can search for a user on GitHub', () => {
  beforeEach(() => {
    cy.intercept('GET', '**api.github.com/search/**', {
      fixture: './userSearch.json',
    }).as('User.index')
    cy.visit('/')
  })

  it('is expected to ta make a call a return status code 200', () => {
    cy.wait('@User.index').its('response.Statuscode').should('eq', 200)
  })
})
