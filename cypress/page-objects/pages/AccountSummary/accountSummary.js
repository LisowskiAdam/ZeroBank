import BasePage from '../../basePage'
import { accountActivity } from '../AccountActivity/accountActivity'
import AccountActivitySelectors from '../AccountActivity/accountActivitySelectors'
import MainPageSelectors from '../Main/mainPageSelectors'
import AccountSummarySelectors from './accountSummarySelectors'

class AccountSummary extends BasePage {
    constructor() {
        super()
    }
    mainPage() {
        cy.get(MainPageSelectors.account_summary_tab).click()
    }
    checkCash() {
        cy.get(MainPageSelectors.account_summary_tab).should('have.class', 'active').children().should('have.attr', 'href').and('include', 'account-summary').then(() => {
            cy.contains('Cash Accounts').should('be.visible')
            cy.contains('Investment Accounts').should('be.visible')
            cy.contains('Credit Accounts').should('be.visible')
            cy.contains('Loan Accounts').should('be.visible')
        })
        cy.get(AccountSummarySelectors.savings1_link).click().then(() => {
            cy.get(MainPageSelectors.account_activity_tab).should('have.class', 'active')
            cy.url().should('include', 'account-activity')
            accountActivity.showTransactions()
            accountActivity.findTransactions()
        })
        this.mainPage()
    }
    checkInvestments() {
        cy.get(AccountSummarySelectors.brokerage_link).click().then(() => {
            cy.get(MainPageSelectors.account_activity_tab).should('have.class', 'active')
            cy.url().should('include', 'account-activity')
            accountActivity.emptyState()
            cy.get(AccountActivitySelectors.find_transactions_navbar).click()
            accountActivity.emptyState()
        })
        this.mainPage()
    }
    checkCredit() {
        cy.get(AccountSummarySelectors.credit_account_1).contains('VISA 4485-5368-3381-1879')
        cy.get(AccountSummarySelectors.credit_account_2).contains('VISA 4716-9811-6719-3943')
        cy.get(AccountSummarySelectors.credit_account_balance_1).contains('$-500.2')
        cy.get(AccountSummarySelectors.credit_account_balance_2).contains('$-265')
        cy.get(AccountSummarySelectors.checking_link).click().then(() => {
            cy.get(AccountActivitySelectors.show_transactions_navbar).should('have.class', 'ui-state-active')
            cy.get(AccountActivitySelectors.board_header).contains('Show Transactions')
            cy.get(AccountActivitySelectors.desc).contains('Choose an account to view.')
            cy.get(AccountActivitySelectors.savings_date_1).contains('2012-09-06')
            cy.get(AccountActivitySelectors.savings_date_2).contains('2012-09-05')
            cy.get(AccountActivitySelectors.savings_date_3).contains('2012-09-01')
            cy.get(AccountActivitySelectors.savings_desc_1).contains('CHECK DEPOSIT')
            cy.get(AccountActivitySelectors.savings_desc_2).contains('TELECOM')
            cy.get(AccountActivitySelectors.savings_desc_3).contains('CAR PAYMENT')
            cy.get(AccountActivitySelectors.savings_deposit_1).contains('186.7')
            cy.get(AccountActivitySelectors.savings_withdrawal_2).contains('99.6')
            cy.get(AccountActivitySelectors.savings_withdrawal_3).contains('1548')
        })
        this.mainPage()
    }
    checkLoan() {
        cy.get(AccountSummarySelectors.loan_link).click().then(() => {
            cy.get(AccountActivitySelectors.show_transactions_navbar).should('have.class', 'ui-state-active')
            cy.get(AccountActivitySelectors.board_header).contains('Show Transactions')
            cy.get(AccountActivitySelectors.desc).contains('Choose an account to view.')
            cy.get(AccountActivitySelectors.aa_accountId).should('have.value', '4')
            cy.get(AccountActivitySelectors.savings_date_1).contains('2012-09-05')
            cy.get(AccountActivitySelectors.savings_date_2).contains('2012-09-01')
            cy.get(AccountActivitySelectors.savings_desc_1).contains('RENT')
            cy.get(AccountActivitySelectors.savings_desc_2).contains('RENT')
            cy.get(AccountActivitySelectors.savings_withdrawal_1).contains('770')
            cy.get(AccountActivitySelectors.savings_withdrawal_2).contains('2000')
        })
        this.mainPage()
    }
}

export const accountSummary = new AccountSummary()