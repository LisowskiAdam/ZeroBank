/// <reference types="cypress" />

import { loginPage } from "../page-objects/pages/Login/loginPage"

describe('Unsuccessfull Login Tests', () => {
    before(() => {
        loginPage.visitPage()
    })
    it('Should try to login with invalid credentials', () => {
        loginPage.login('inv_username', 'inv_password')
        loginPage.displayErrorMessage()
    })
})

describe('Successfull Login Tests', () => {
    before(() => {
        loginPage.visitPage()
    })
    it('Should successfully login and log out', () => {
        loginPage.login(Cypress.env('username'), Cypress.env('password'))
        loginPage.logout()
    })
    it('Should send reset password link', () => {
        loginPage.resetPassword()
    })
})