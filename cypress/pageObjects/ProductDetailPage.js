export class ProductDetailPage {
    constructor() {
        this.productStock = '.quantity--info--jnoo_pD > :nth-child(1) > span';
    };

    verifyStock(requiredStock) {
        cy.get(this.productStock)
            .invoke('text').then(parseInt).should('be.gte', requiredStock);
    };
};

export const productDetailPage = new ProductDetailPage();
