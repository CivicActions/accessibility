describe('Home', () => {
  it('should be accessible', () => {
    cy.visit('/')
    cy.checkA11yWithMultipleViewPorts()
  })
})