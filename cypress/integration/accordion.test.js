describe('Accordion', () => {
    it('all expanded sections should be accessible', () => {
        cy.visit('/roles/procurement')
        cy.get('button').contains('Expand All').click()
        cy.checkA11yWithMultipleViewPorts()
    })

    it('single expanded section should be accessible', () => {
        cy.visit('/roles/procurement')
        cy.get('.accordion-heading').contains('Playbook').click()
        cy.checkA11yWithMultipleViewPorts()
    })

    it("can all be expanded and collapsed", () => {
        cy.visit('/roles/procurement')
        cy.get('button').contains('Expand All').click()
        cy.get('.accordion-body').should('not.have.attr', 'hidden')
        cy.get('button').contains('Collapse All').click()
        cy.get('.accordion-body').should('have.attr', 'hidden')
    });

    it('can be expanded individually', () => {
        cy.visit('/roles/procurement')
        cy.get('.accordion-heading').contains('Tools').focus().type('{enter}')
        cy.get('.accordion-body li').contains('WAVE Browser Extensions').should('be.visible')
        cy.get('.accordion-heading').contains('Tools').focus().type('{enter}')
        cy.get('.accordion-body li').contains('WAVE Browser Extensions').should('not.be.visible')
    })
})
