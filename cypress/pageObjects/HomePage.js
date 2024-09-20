export class HomePage {
    constructor() {
        this.searchInput = '#search-words'
        this.submitSearchButton = '.search--submit--2VTbd-T'
        this.imageSearchCloseButton = 'esm--upload-close--1x0SREz'
    }
    navigateToPage(url) {
        cy.visit(`${url}`)
    }

    verifyHomePageUrl(url) {
        cy.url().should('contain', `${url}`)
    }

    searchProduct(product) {
        cy.get(this.searchInput)
            .should('be.visible')
            .type(product)

        cy.get(this.submitSearchButton)
            .should('be.visible')
            .click()
    }

    closeImageSearchModal() {
        cy.get(this.imageSearchCloseButton)
            .should('be.visible')
            .click()
    }
}

export const homePage = new HomePage();
