/// <reference types="cypress" />

import { accountSummary } from "../page-objects/pages/AccountSummary/accountSummary"
import { loginPage } from "../page-objects/pages/Login/loginPage"
import { transferFunds } from "../page-objects/pages/TransferFunds/transferFunds"

describe('Zero Bank tests', () => { 
    before(() => {
        loginPage.visitPage()
        loginPage.login()
    })
    it('Should verify data on Account Summary page', () => {
        accountSummary.checkCash()
        accountSummary.checkInvestments()
        accountSummary.checkCredit()
        accountSummary.checkLoan()
        transferFunds.transferMoney()
    })
})