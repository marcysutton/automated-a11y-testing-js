context("App page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234')

        cy.injectAxe()
        cy.wait(100)
    })
    it('has no accessibility violations on load', () => {
        cy.checkA11y()
    })
    it('has a notification banner that can be accessibly removed', () => {
        cy.get('[aria-label="Close banner"]').focus().click()

        cy.focused().should('have.attr', 'data-testid', 'h1Heading')
    })
})