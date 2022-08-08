import MainPageSelectors from '../pages/Main/mainPageSelectors'

export default class Navbar {
  static clickOnLogo() {
    cy.get('.brand').click()
  }

  static search(text) {
    cy.get('#searchTerm').type(`${text} {enter}`)
  }

  static clickSignIn() {
    cy.get('#signin_button').click()
  }

  static proceedToHelpPage() {
    cy.get(MainPageSelectors.settings_button).click().then(() => {
      cy.get(MainPageSelectors.help_link).click()
    })
  }

  static proceedToFeedbackPage() {
    cy.get(MainPageSelectors.feedback).click()
  }
}
