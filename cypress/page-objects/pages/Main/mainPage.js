import BasePage from '../../basePage'
import Navbar from '../../components/Navbar'
import MainPageSelectors from './mainPageSelectors'

export class MainPage extends BasePage {
    constructor() {
        super()
    }
    verifyInfoOnPage() {
        cy.get(MainPageSelectors.homeMenu).should('have.class', 'active')
        // Carousel
        cy.get(MainPageSelectors.carousel).children().each((element) => {
            cy.wrap(element).should('be.visible')
        })
        cy.get(MainPageSelectors.carousel_inner).each((element) => {
            cy.wrap(element).should('be.visible')
        })
        // Features
        cy.get(MainPageSelectors.features).children().each((element) => {
            cy.wrap(element).should('be.visible')
        })
        // Footer
        cy.get(MainPageSelectors.download_webinspect_link).should('be.visible')
        cy.get(MainPageSelectors.terms_of_use_link).should('be.visible')
        cy.get(MainPageSelectors.contact_hp_link).should('be.visible')
        cy.get(MainPageSelectors.privacy_statement_link).should('be.visible')
    }
    search() {
        Navbar.search('online')
        cy.get(MainPageSelectors.search_results).contains('Search Results: The following pages were found for the query: online')
        cy.get(MainPageSelectors.search_ul).children().should('have.length', 2)
    }
    sendFeedback() {
        Navbar.proceedToFeedbackPage()
        cy.url().should('include', 'feedback')
        cy.isVisible(MainPageSelectors.form_inputs)
        cy.get(MainPageSelectors.name).type('QA Name')
        cy.get(MainPageSelectors.email).type('test@test.com')
        cy.get(MainPageSelectors.subject).type('QA Subject')
        cy.get(MainPageSelectors.comment).type('QA Test Comment')
        cy.get(MainPageSelectors.submit_button).click()
        cy.url().should('include', 'sendFeedback')
        cy.get(MainPageSelectors.brand_link).click()
        cy.url().should('include', 'index.html')
    }
    helpPage() {
        Navbar.proceedToHelpPage()
        cy.url().should('include', 'help')
        cy.get(MainPageSelectors.help_topic_1).should('have.attr', 'href', '/help.html?topic=/help/topic1.html').and('contain', 'How do I log into my account?')
        cy.get(MainPageSelectors.help_topic_header).contains('How do I log into my account?')
        cy.get(MainPageSelectors.help_topic_content).contains('From the top of the home page, click the Signin button. Then login using your username and password.')
        cy.get(MainPageSelectors.help_topic_2).should('have.attr', 'href', '/help.html?topic=/help/topic2.html').and('contain', 'How do I transfer funds?')
        cy.get(MainPageSelectors.help_topic_2).click()
        cy.get(MainPageSelectors.help_topic_header).contains('How do I transfer funds?')
        cy.get(MainPageSelectors.help_topic_content).contains('From the bank home page, click Transfer Funds. Select the account from which you want to transfer money. Select the account to which you want transfer money. Enter the amount and an optional description of the transaction. Click Continue.')
        cy.get(MainPageSelectors.help_topic_3).should('have.attr', 'href', '/help.html?topic=/help/topic3.html').and('contain', 'How do I pay bills?')
        cy.get(MainPageSelectors.help_topic_3).click()
        cy.get(MainPageSelectors.help_topic_header).contains('How do I pay bills?')
        cy.get(MainPageSelectors.help_topic_content).contains('From the bank home page, click Pay Bills. Select an existing payee from the first dropdown menu. Select the account from which you want to pull funds. Enter the amount and click the Pay button. Add a new payee to pay the bill.')
    }
}

export const mainPage = new MainPage()