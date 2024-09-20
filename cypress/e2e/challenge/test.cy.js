import  {homePage} from '../../pageObjects/HomePage';
import  {resultsGridPage} from '../../pageObjects/ResultsGridPage';
import  {productDetailPage} from '../../pageObjects/ProductDetailPage';

describe('Modak Challenge - AliExpress Test', () => {
    before(() => {
        // Disable Cypress's default behavior of logging all XMLHttpRequests and fetches
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })
    beforeEach(() => {
        homePage.navigateToPage('');
    })

    it('Should search product', () => {
        
        homePage.verifyHomePageUrl('https://es.aliexpress.com/');

        homePage.searchProduct('instax mini');

        resultsGridPage.verifyCorrectSearch('instax-mini');

        resultsGridPage.closeImageSearchModal();

        resultsGridPage.goToNextPage();

        resultsGridPage.verifyCorrectPage(2);

        resultsGridPage.viewProductDetails();

        productDetailPage.verifyStock(1);
    })
})