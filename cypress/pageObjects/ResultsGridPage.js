import { HomePage } from "./HomePage";
export class ResultsGridPage extends HomePage {
    constructor(props) {
        super(props);
        this.paginatorNextPage = '.comet-pagination-next > .comet-pagination-item-link';
        this.secondProduct = '#card-list > div:nth-child(2) > div > div > a';
    };

    // Clicking on next page
    goToNextPage() {
        cy.get(this.paginatorNextPage)
            .scrollIntoView()
            .should('be.visible')
            .click();
    };

    // Asserting search is correct
    verifyCorrectSearch(product) {
        cy.url().should('contain', `${product}`);
    };

    // Asserting page number is correct
    verifyCorrectPage(pageNumber) {
        cy.url().should('contain', `page=${pageNumber}`);
    };

    // Blanking the target anc clicking to open page on same tab to view product details
    viewProductDetails() {
        cy.get(this.secondProduct)
            .scrollIntoView()
            .should('be.visible')
            .invoke('attr', 'target', '')
            .click();
    };
};

export const resultsGridPage = new ResultsGridPage();
