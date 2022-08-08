/// <reference types="cypress" />

import { loginPage } from "../page-objects/pages/Login/loginPage"
import { payBills } from "../page-objects/pages/PayBills/payBills"

describe('Pay Bills Tests', () => {
    before(() => {
        loginPage.visitPage()
        loginPage.login()
    })
    it('Should try to Pay Saved Payee, Add New Payee and Purchase Foreign Currency', () => {
        payBills.paySavedPayee()
        payBills.addNewPayee()
        payBills.purchaseForeignCurrency()
    })
})