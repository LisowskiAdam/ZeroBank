/// <reference types="cypress" />

import { loginPage } from "../page-objects/pages/Login/loginPage"
import { mainPage } from "../page-objects/pages/Main/mainPage"
import { onlineBankingPage } from "../page-objects/pages/OnlineBanking/onlineBankingPage"

describe('Main Page Tests', () => { 
    before(() => {
        loginPage.visitPage()
    })
    it('Should verify content on Main Page', () => {
        mainPage.verifyInfoOnPage()
    })
    it('Should verify content on Online Banking Page', () => {
        onlineBankingPage.verifyInfoOnPage()
    })
    it('Should verify content in Footer', () => {
        mainPage.verifyFooter()
    })
    it('Should send Feedback form', () => {
        mainPage.sendFeedback()
    })
    it('Should search query', () => {
        mainPage.search()
    })
    it('Should test Help page', () => {
        loginPage.login()
        mainPage.helpPage()
    })
})