describe('Menu on mobile', () => {
  it('submenu should be accessible when active', () => {
    cy.viewport('iphone-6+')
    cy.visit('/about/')
    cy.get('.usa-menu-btn').click()
    cy.get('.usa-accordion__button').click()
    cy.checkA11yWithSingleViewPort()
  })

  it('submenu should be accessible when not active', () => {
    cy.viewport('iphone-6+')
    cy.visit('/calendar')
    cy.get('.usa-menu-btn').click()
    cy.get('.usa-accordion__button').click()
    cy.checkA11yWithSingleViewPort()
  })
})

describe('Submenu is reachable', () => {
  it('by using enter key', () => {
    cy.visit('/')
    cy.get('.usa-menu-btn').type('{enter}')
    cy.get('.usa-accordion__button').contains('About').type('{enter}')
    cy.get('.usa-nav__submenu-item').should('be.visible')
  })

  it('by using the tab key', () => {
    cy.visit('/')
    cy.window().focus()
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Tab')
    cy.realPress('Enter')
    cy.realPress('Tab')
    cy.realPress('Enter')
    cy.get('.usa-nav__submenu-item').should('be.visible')
  })
})
