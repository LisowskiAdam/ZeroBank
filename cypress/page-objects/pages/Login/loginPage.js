import BasePage from '../../basePage'
import LoginPageSelectors from './loginPageSelectors'
import Navbar from '../../components/Navbar'

class LoginPage extends BasePage {
    constructor() {
        super()
    }
    login(username, password) {
        Navbar.clickSignIn()
        cy.get(LoginPageSelectors.user_remember_me).check()
        cy.login(username, password)
    }
    logout() {
        cy.get(LoginPageSelectors.logout).click({force: true})
    }
    resetPassword() {
        Navbar.clickSignIn()
        cy.get(LoginPageSelectors.forgot_password).click().then(() => {
            cy.url().should('include', 'forgot-password')
            cy.get(LoginPageSelectors.page_header).should('be.visible').contains('Forgotten Password')
            cy.get(LoginPageSelectors.page_header).siblings().contains('So you forgot your password? Give us your email address and we will email it to you.')
            cy.get(LoginPageSelectors.user_email).clear().type('test@test.com')
            cy.get(LoginPageSelectors.submit_button).click()
            cy.get(LoginPageSelectors.page_header).parent().contains('Your password will be sent to the following email: test@test.com')
            cy.url().should('include', 'forgotten-password-send')
        })
    }
    displayErrorMessage() {
        cy.isVisible(LoginPageSelectors.alert)
        cy.get(LoginPageSelectors.alert).contains('Login and/or password are wrong.')
    }
}

export const loginPage = new LoginPage()