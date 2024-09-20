import  {homePage} from '../../pageObjects/HomePage'
import  {resultsGridPage} from '../../pageObjects/ResultsGridPage'
import  {productDetailPage} from '../../pageObjects/ProductDetailPage'

describe('Modak Challenge - AliExpress Test', () => {
    before(() => {
        // Disable Cypress's default behavior of logging all XMLHttpRequests and fetches
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })
    beforeEach(() => {
        cy.visit('')
    })

    it('Should search product', () => {
        // Asserting page is correct
        cy.url().should('contain', 'https://es.aliexpress.com/')

        // Typing search words on textbox
        cy.get('#search-words')
            .should('be.visible')
            .type('instax mini')

        // Clicking on Submit button
        cy.get('.search--submit--2VTbd-T')
            .should('be.visible')
            .click()

        // Asserting search is correct
        cy.url().should('contain', 'instax-mini')

        // Closing image search pop-up
        cy.get('.esm--upload-close--1x0SREz')
            .click()

        // Clicking on next page
        cy.get('.comet-pagination-next > .comet-pagination-item-link')
            .scrollIntoView()
            .should('be.visible')
            .click()

        // Asserting results's page number is correct
        cy.url().should('contain', 'page=2')
        
        // ------------------ AT THIS POINT THE TEST IS STILL FLAKY ------------------

        // Blanking the target anc clicking to open page on same tab
        cy.get('#card-list > div:nth-child(2) > div > div > a')
            .scrollIntoView()
            .invoke('attr', 'target', '')
            .click()

        // Asserting that product stock is above 0
        cy.get('.quantity--info--jnoo_pD > :nth-child(1) > span').invoke('text').then(parseInt).should('be.gte', 1)
    })
})