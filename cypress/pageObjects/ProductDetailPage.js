import { HomePage } from "./HomePage";
export class ProductDetailPage extends HomePage {
    constructor(props) {
        super(props);
        this.productStock = '.quantity--info--jnoo_pD > :nth-child(1) > span';
    };

    // Asserting that product stock is equal or greater than the required amount
    verifyStock(requiredStock) {
        cy.get(this.productStock)
            .invoke('text').then(parseInt).should('be.gte', requiredStock);
    };
};

export const productDetailPage = new ProductDetailPage();
