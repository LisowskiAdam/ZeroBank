import BasePage from '../../basePage'
import mainPageSelectors from '../Main/mainPageSelectors'
import PayBillsSelectors from './payBillsSelectors'

class PayBills extends BasePage {
    constructor() {
        super()
    }
    paySavedPayee() {
        cy.get(mainPageSelectors.pay_bills_tab).click()
        cy.contains('Make payments to your saved payees')

        cy.get(PayBillsSelectors.sp_payee).select('Apple').should('have.value', 'apple')
        cy.get(PayBillsSelectors.sp_account).select('Credit Card').should('have.value', '5')
        cy.get(PayBillsSelectors.sp_amount).type('100')
        cy.get(PayBillsSelectors.sp_date).type('2022-07-31 {enter}')
        cy.get(PayBillsSelectors.sp_description).type('QA Test Description')
        cy.get(PayBillsSelectors.submit_button).click()
        cy.isVisible(PayBillsSelectors.alert_content).then(() => {
            cy.get(PayBillsSelectors.alert_content).contains('The payment was successfully submitted.')
            cy.get(PayBillsSelectors.dismiss_button).click()
        })
    }
    addNewPayee() {
        cy.contains('Add New Payee').click()
        cy.contains('Who are you paying?')
        cy.url().should('include', 'pay-bills-saved-payee')
        cy.get(PayBillsSelectors.np_new_payee_name).type('QA Payee Name')
        cy.get(PayBillsSelectors.np_new_payee_address).type('QA Example Payee Address')
        cy.get(PayBillsSelectors.np_new_payee_account).type('QA Account')
        cy.get(PayBillsSelectors.np_new_payee_details).type('QA Payee Details')
        cy.get(PayBillsSelectors.submit_button).click()
        cy.url().should('include', 'pay-bills-new-payee')
        cy.isVisible(PayBillsSelectors.alert_content).then(() => {
            cy.get(PayBillsSelectors.alert_content).should('contain', 'The new payee QA Payee Name was successfully created.')
        })
    }
    purchaseForeignCurrency() {
        cy.contains('Purchase Foreign Currency').click()
        cy.contains('Purchase foreign currency cash')
        cy.get(PayBillsSelectors.pc_currency).select('Eurozone (euro)').should('have.value', 'EUR')
        cy.get(PayBillsSelectors.sp_sell_rate).should('contain', '1 euro (EUR) = 1.3862 U.S. dollar (USD)')
        cy.get(PayBillsSelectors.pc_amount).type('100')
        cy.get(PayBillsSelectors.pc_inDollars_true).click()
        cy.get(PayBillsSelectors.pc_calculate_costs).click()
        cy.get(PayBillsSelectors.pc_conversion_amount).should('contain', '72.14 euro (EUR) = 100.00 U.S. dollar (USD)')
        cy.get(PayBillsSelectors.submit_button).click()
        cy.url().should('include', 'pay-bills')
        cy.isVisible(PayBillsSelectors.alert_content).then(() => {
            cy.get(PayBillsSelectors.alert_content).should('contain', 'Foreign currency cash was successfully purchased.')
        })
    }
    displaySuccessMessage() {
        cy.isVisible(LoginPageSelectors.alert)
        cy.get(LoginPageSelectors.alert).contains('Login and/or password are wrong.')
    }
}

export const payBills = new PayBills()