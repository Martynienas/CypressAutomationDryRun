/// <reference types="cypress" />;

it("Loads the duckduckgo website", () => {
    cy.visit("www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.");
});

it("should cintain search criteria in search results title", () => {
    cy.visit("www.duckduckgo.com")
    cy.get('#search_form_homepage').type("intitle:panda")
    cy.get('#search_button_homepage').click();
    cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false }) })
})

it("should should redirect to first result", () => {
    cy.visit("www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki")
    cy.get('#search_button_homepage').click();
    cy.title().should('eq', 'Wikipedia, the free encyclopedia')
})

it("should seach on wikipedia", () => {
    cy.visit("www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!w lithuania")
    cy.get('#search_button_homepage').click();
    cy.title().should('eq', 'Lithuania - Wikipedia')
    cy.get("#firstHeading").contains("Lithuania")
})

it("should seach on wikipedia", () => {
    cy.visit("www.duckduckgo.com")
    cy.get('#search_form_homepage').type("is devbridge.com down")
    cy.get('#search_button_homepage').click();
    cy.get(".c-base__title").contains("devbridge.com seems up")
})