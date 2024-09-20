export class HomePage {
    constructor() {
        this.searchInput = '#search-words';
        this.submitSearchButton = '.search--submit--2VTbd-T';
        this.imageSearchCloseButton = '.esm--upload-close--1x0SREz';
    }
    
    // Navigating to given URL
    navigateToPage(url) {
        cy.visit(`${url}`);
    };

    // Asserting page is correct
    verifyHomePageUrl(url) {
        cy.url().should('contain', `${url}`);
    };

    // Typing search words on textbox
    searchProduct(product) {
        cy.get(this.searchInput)
            .should('be.visible')
            .type(product);

        cy.get(this.submitSearchButton)
            .should('be.visible')
            .click();
    };

    // Closing image search modal
    closeImageSearchModal() {
        cy.get(this.imageSearchCloseButton)
            .should('be.visible')
            .click();
    };
};

export const homePage = new HomePage();
