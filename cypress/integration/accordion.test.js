describe('Accordion', () => {
    it('all expanded sections should be accessible', () => {
        cy.visit('/roles/procurement')
        cy.get('button').contains('Expand/Collapse All').click()
        cy.checkA11yWithMultipleViewPorts()
    })

    it('single expanded section should be accessible', () => {
        cy.visit('/roles/procurement')
        cy.get('.accordion-heading').contains('Playbook').click()
        cy.checkA11yWithMultipleViewPorts()
    })
}) 