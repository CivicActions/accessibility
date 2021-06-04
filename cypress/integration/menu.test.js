describe('Menu on mobile', () => {
  it('submenu should be accessible when active', () => {
    cy.viewport('iphone-6+')
    cy.visit('/about/')
    cy.get('.usa-menu-btn').click()
    cy.get('.usa-accordion__button').click()
    cy.checkA11yWithSingleViewPort()
  });

  it('submenu should be accessible when not active', () => {
    cy.viewport('iphone-6+')
    cy.visit('/calendar')
    cy.get('.usa-menu-btn').click()
    cy.get('.usa-accordion__button').click()
    cy.checkA11yWithSingleViewPort()
  })
})