describe('Menu', () => {
  it('should be accessible', () => {
    cy.visit('/about/');
    cy.get('.usa-menu-btn').click();
    cy.get('.usa-accordion__button').click();
    cy.checkA11yWithMultipleViewPorts();
  })
})