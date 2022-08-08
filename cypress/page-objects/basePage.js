import mainPageCopy from "./pages/Main/mainPageCopy";
import MainPageSelectors from "./pages/Main/mainPageSelectors";

export default class BasePage {
	constructor() {
		this.url = '';
	}
	visitPage(url = '/') {
		try {
			cy.visit((this.url = url))
				.url()
				.should('include', this.url);
		} catch (ex) {
			console.log('Visit error with url: \n' + url + '\n' + ex);
		}
		return this;
	}
	verifyFooter() {
		cy.get(MainPageSelectors.download_webinspect_link).should('be.visible')
        cy.get(MainPageSelectors.terms_of_use_link).should('be.visible')
        cy.get(MainPageSelectors.contact_hp_link).should('be.visible')
        cy.get(MainPageSelectors.privacy_statement_link).should('be.visible')
		cy.get(MainPageSelectors.footer_text).contains(mainPageCopy.footer_text_copy)
		cy.get(MainPageSelectors.footer_link_1).should('have.attr', 'href', 'https://www.microfocus.com/about/legal/#privacy')
		cy.get(MainPageSelectors.footer_link_2).should('have.attr', 'href', 'https://www.microfocus.com/about/legal/#privacy')
	}
}
