class Homepage {
    searchButton = '#search_button_homepage';


    getsearchButton() {
        return cy.get('#search_button_homepage');
    }
}

export default Homepage

