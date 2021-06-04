describe('Search', () => {
  it('should be accessible', () => {
    cy.visit('/search')
    cy.get('#search-input').type('accessibility')
    cy.checkA11yWithMultipleViewPorts()
  })
})