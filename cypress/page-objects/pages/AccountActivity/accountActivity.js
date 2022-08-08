import BasePage from '../../basePage'
import AccountActivitySelectors from './accountActivitySelectors'

class AccountActivity extends BasePage {
    constructor() {
        super()
    }
    showTransactions() {
        cy.get(AccountActivitySelectors.show_transactions_navbar).should('have.class', 'ui-state-active')
        cy.get(AccountActivitySelectors.board_header).contains('Show Transactions')
        cy.get(AccountActivitySelectors.desc).contains('Choose an account to view.')
        cy.get(AccountActivitySelectors.savings_date_1).contains('2012-09-06')
        cy.get(AccountActivitySelectors.savings_date_2).contains('2012-09-05')
        cy.get(AccountActivitySelectors.savings_date_3).contains('2012-09-01')
        cy.get(AccountActivitySelectors.savings_desc_1).contains('ONLINE TRANSFER REF #UKKSDRQG6L')
        cy.get(AccountActivitySelectors.savings_desc_2).contains('OFFICE SUPPLY')
        cy.get(AccountActivitySelectors.savings_desc_3).contains('ONLINE TRANSFER REF #UKKSDRQG6L')
        cy.get(AccountActivitySelectors.savings_deposit_1).contains('984.3')
        cy.get(AccountActivitySelectors.savings_withdrawal_2).contains('50')
        cy.get(AccountActivitySelectors.savings_deposit_3).contains('1000')
    }
    findTransactions() {
        cy.get(AccountActivitySelectors.find_transactions_navbar).click()
        cy.get(AccountActivitySelectors.find_transactions_navbar).should('have.class', 'ui-state-active')
        cy.get(AccountActivitySelectors.board_header2).contains('Find Transactions')
        cy.get(AccountActivitySelectors.desc2).contains('Complete at least one field below and click Find')
        cy.get(AccountActivitySelectors.aa_fromDate).type('2012-09-05')
        cy.get(AccountActivitySelectors.aa_toDate).type('2012-09-05')
        cy.get(AccountActivitySelectors.submit_button).click()
        cy.get(AccountActivitySelectors.savings_date_2).contains('2012-09-05')
        cy.get(AccountActivitySelectors.savings_desc_2).contains('OFFICE SUPPLY')
        cy.get(AccountActivitySelectors.savings_withdrawal_2).contains('50')
    }
    emptyState() {
        cy.get(AccountActivitySelectors.aa_accountId).should('have.value', '6')
        cy.get(AccountActivitySelectors.all_transactions_for_account).children().contains('No results.')
    }
}

export const accountActivity = new AccountActivity()