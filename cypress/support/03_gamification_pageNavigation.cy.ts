import { Gamification_class as Gami_Main } from "../pom_file/gamification_MainPage";
import data from "../fixtures/example.json"
let obj=new Gami_Main()
export const Gamificationmodule = {
gamification_module():any{
    //Create Highlight Page Navigation
    //Navigating App Manger 
    cy.wait(5000)
    cy.visit(Cypress.env("Dashboard"))
    obj.AppManager().should('be.visible')
    obj.AppManager().xpath("./div[5]").click()
    //Clicking Gamification 
    cy.wait(5000)
    obj.gamification().contains("Gamification").click()
    //Clicking Create Highlight
    cy.wait(3000)
    cy.screenshot("Create Highlight");
    obj.CreateHighlight().click({force: true})
    //*[@id="menu-"]/div[3]/ul
    //cy.get('[style="width: 250px;"] > [data-testid="dropid"] > #custom-dropdown-select').should('be.visible').click()
    }
}