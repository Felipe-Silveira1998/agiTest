class HomePage {
    
    go() {
        cy.visit('/')
    }
    
    clickSearchIcon() {
        cy.get(pageObjects.searchIcon)
        .should('be.visible')
        .click({force: true})
    }

    searchForNews(information) {
        cy.get(pageObjects.fieldSearchForNews)
        .type(information)
    }

    clickSearch() {
        cy.get(pageObjects.searchButton)
        .click()
    }

    newsViewed(information) {
        cy.get(pageObjects.newsInformation)
        .should('be.visible')
        .contains(information)    
    }
}

const pageObjects = {
    searchIcon: 'button[id="search-open"]',
    fieldSearchForNews: 'div[class="desktop-search"] input[type="search"]',
    searchButton: 'div[class="desktop-search"] input[class="search-submit"]',
    newsInformation: 'div[class="entry-main"]'
}

export default new HomePage;