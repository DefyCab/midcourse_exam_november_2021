/* eslint-disable no-undef */
describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to contain title', () => {
    cy.get("section[name='title']").should('contain', 'GitHub Search engine')
  })

  it('is expected to see header', () => {
    cy.get('[data-cy=title-header').should('be.visible')
  })

  it('is expected to see a search bar', () => {
    cy.get('[data-cy=search-input]').should('be.visible')
  })

  it('is expected to see a search button', () => {
    cy.get('[data-cy=search-button').should('be.visible')
  })
})
