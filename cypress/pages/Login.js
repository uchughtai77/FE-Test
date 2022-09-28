import { loginPageFields } from "../utilities/helper"
import { DashboardPageFields } from "../utilities/helper"
export class Login{
    navigate(){
        cy.visit('/')
    }
    validateHomePage(title){
        cy.get(loginPageFields.title).should('have.text',title)
    }
    loginUser(username,password){
        cy.get(loginPageFields.username).type(username)
        cy.get(loginPageFields.password).type(password)
        cy.get(loginPageFields.loginButton).click()
        cy.wait(10000)
        // cy.get(DashboardPageFields.searchBar,{timeout:30000}).should(($x) => {
        //     expect($x).to.be.visible;
        // })
        cy.get(DashboardPageFields.navToggle).click()
    }
}