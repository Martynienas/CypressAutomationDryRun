/// <reference types="cypress" />;

it("Loads the duckduckgo website", () => {
    cy.visit("www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.");
});

