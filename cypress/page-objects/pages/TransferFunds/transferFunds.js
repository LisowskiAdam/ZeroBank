import BasePage from '../../basePage'
import MainPageSelectors from '../Main/mainPageSelectors'
import TransferFundsSelectors from './transferFundsSelectors'

class TransferFunds extends BasePage {
    constructor() {
        super()
    }
    transferMoney() {
        cy.get(MainPageSelectors.transfer_funds_tab).click().then(() => {
            cy.get(MainPageSelectors.transfer_funds_tab).should('have.class', 'active').children().should('have.attr', 'href').and('include', 'transfer-funds')
            cy.get(TransferFundsSelectors.board_header).contains('Transfer Money & Make Payments')
            cy.get(TransferFundsSelectors.tf_fromAccountId).select('Savings(Avail. balance = $ 1548)').should('have.value', '3')
            cy.get(TransferFundsSelectors.tf_toAccountId).select('Brokerage(Avail. balance = $ 197)').should('have.value', '6')
            cy.get(TransferFundsSelectors.tf_amount).type('1000')
            cy.get(TransferFundsSelectors.tf_description).type('QA Description')
            cy.get(TransferFundsSelectors.desc_copy).contains('Descriptions appear for checking, savings, money market or market rate accounts only.')
            cy.get(TransferFundsSelectors.submit_button).click()
            cy.get(TransferFundsSelectors.board_header).contains('Transfer Money & Make Payments - Verify')
            cy.get(TransferFundsSelectors.tf_fromAccountId).should('be.disabled').and('have.value', 'Savings')
            cy.get(TransferFundsSelectors.tf_toAccountId).should('be.disabled').and('have.value', 'Brokerage')
            cy.get(TransferFundsSelectors.tf_amount).should('be.disabled').and('have.value', '1000')
            cy.get(TransferFundsSelectors.tf_description).should('be.disabled').and('have.value', 'QA Description')
            cy.get(TransferFundsSelectors.submit_button).click()
            cy.get(TransferFundsSelectors.alert_success).contains('You successfully submitted your transaction.')
            cy.get(TransferFundsSelectors.confirm_page_header).contains('Transfer Money & Make Payments - Confirm')
            cy.get(TransferFundsSelectors.confirm_page_from_account).contains('Savings')
            cy.get(TransferFundsSelectors.confirm_page_to_account).contains('Brokerage')
            cy.get(TransferFundsSelectors.confirm_page_ammount).contains('$ 1000')
            cy.get(TransferFundsSelectors.confirm_page_link).should('have.attr', 'href', '/bank/transfer-funds.html').and('contain', 'View transfers or make another transfer')
        })
    }
}

export const transferFunds = new TransferFunds()