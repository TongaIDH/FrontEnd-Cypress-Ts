export class ResultsGridPage extends HomePage {
    constructor(props) {
        super(props);
        this.paginatorNextPage = '.comet-pagination-next > .comet-pagination-item-link';
        this.secondProduct = '#card-list > div:nth-child(2) > div > div > a';
    };

    goToNextPage() {
        cy.get(this.paginatorNextPage)
            .scrollIntoView()
            .should('be.visible')
            .click();
    };

    viewProductDetails() {
        cy.get(this.secondProduct)
            .scrollIntoView()
            .should('be.visible')
            .invoke('attr', 'target', '')
            .click();
    };

    verifyCorrectSearch(product) {
        cy.url().should('contain', `${product}`);
    };

    verifyCorrectPage(pageNumber) {
        cy.url().should('contain', `page=${pageNumber}`);
    };
};

export const resultsGridPage = new ResultsGridPage();
