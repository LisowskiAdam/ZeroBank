import BasePage from '../../basePage'
import OnlineBankingSelectors from './onlineBankingPageSelectors'
import MainPageSelectors from '../Main/mainPageSelectors'
import onlineBankingCopy from './onlineBankingCopy'

export class OnlineBankingPage extends BasePage {
    constructor() {
        super()
    }
    verifyInfoOnPage() {
        cy.get(MainPageSelectors.onlineBankingMenu).click()
        cy.get(MainPageSelectors.onlineBankingMenu).should('have.class', 'active')
        cy.get(OnlineBankingSelectors.hero_home).should('be.visible')
        cy.get(OnlineBankingSelectors.trust_header).should('be.visible').contains('Our Bank is trusted by over 1,000,000 customers world wide. Sign in now!')
        cy.get(OnlineBankingSelectors.trust_header_link).should('have.attr', 'href').and('include', 'login')
        cy.get(MainPageSelectors.features).children().each((element) => {
            cy.wrap(element).children().should('be.visible')            
        }).then(() => {
            cy.get(OnlineBankingSelectors.account_summary_link).contains(onlineBankingCopy.features_title_copy.account_summary)
            cy.get(OnlineBankingSelectors.account_activity_link).contains(onlineBankingCopy.features_title_copy.account_activity)
            cy.get(OnlineBankingSelectors.transfer_funds_link).contains(onlineBankingCopy.features_title_copy.transfer_funds)
            cy.get(OnlineBankingSelectors.pay_bills_link).contains(onlineBankingCopy.features_title_copy.pay_bills)
            cy.get(OnlineBankingSelectors.money_map_link).contains(onlineBankingCopy.features_title_copy.money_map)
            cy.get(OnlineBankingSelectors.online_statements_link).contains(onlineBankingCopy.features_title_copy.online_statements)

            cy.get(OnlineBankingSelectors.account_summary_link).parent().siblings().contains(onlineBankingCopy.features_desc_copy.account_summary_desc)
            cy.get(OnlineBankingSelectors.account_activity_link).parent().siblings().contains(onlineBankingCopy.features_desc_copy.account_activity_desc)
            cy.get(OnlineBankingSelectors.transfer_funds_link).parent().siblings().contains(onlineBankingCopy.features_desc_copy.transfer_funds_desc)
            cy.get(OnlineBankingSelectors.pay_bills_link).parent().siblings().contains(onlineBankingCopy.features_desc_copy.pay_bills_desc)
            cy.get(OnlineBankingSelectors.money_map_link).parent().siblings().contains(onlineBankingCopy.features_desc_copy.money_map_desc)
            cy.get(OnlineBankingSelectors.online_statements_link).parent().siblings().contains(onlineBankingCopy.features_desc_copy.online_statements_desc)
        })
    }
}

export const onlineBankingPage = new OnlineBankingPage()