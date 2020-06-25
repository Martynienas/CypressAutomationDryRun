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

it("should genereate unique password", () => {
    cy.visit("www.duckduckgo.com")
    cy.get('#search_form_homepage').type("is devbridge.com down")
    cy.get('#search_button_homepage').click();
    cy.get(".c-base__title").contains("devbridge.com seems up")
})

describe('should generate secure passwords', () => {
    [8, 32, 64].forEach((passwordLenght) => {
        it('generates password with length: ' + passwordLenght, () => {
            cy.visit("www.duckduckgo.com")
            cy.get('#search_form_homepage').type("password " + passwordLenght)
            cy.get('#search_button_homepage').click();
            cy.get('.c-base__title').then(($title) => {
                cy.get($title).invoke('text').its('length').should('be.eq', passwordLenght)
            })
        })
    })
})

describe('should ignore generating secure passwords', () => {
    [1, 7, 65, 512].forEach((event) => {
        it('triggers event: ' + event, () => {

            cy.visit("www.duckduckgo.com")
            cy.get('#search_form_homepage').type("password " + event)
            cy.get('#search_button_homepage').click();
            cy.get('.c-base__title').should('not.exist');
        })
    })
})