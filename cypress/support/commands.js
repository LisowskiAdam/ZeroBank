Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add('clickSignInButton', selector => {
    cy.get(selector).click()
})

Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})