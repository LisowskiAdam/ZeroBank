/// <reference types="cypress" />

import { loginPage } from "../page-objects/pages/Login/loginPage"
import { transferFunds } from "../page-objects/pages/TransferFunds/transferFunds"

describe('Pay Bills Tests', () => {
    before(() => {
        loginPage.visitPage()
        loginPage.login()
    })
    it('Should transfer funds between accounts', () => {
        transferFunds.transferMoney()
    })
})