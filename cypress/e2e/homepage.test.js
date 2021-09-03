/// <reference types="Cypress" />
describe("Homepage tests", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("Has working call to action button", () => {
        cy.get('[data-test-id="cta-button"]').should('be.enabled')
    })
    it("Has correct link to constitution", () => {
        const constitutionBtn = cy.get('[data-test-id="constitution-button"]')
        constitutionBtn.scrollIntoView()
        constitutionBtn.should("have.attr", "href").and('include', 'constitution.pdf')
    })
})