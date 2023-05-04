import { Highlight_class as CustomHighlight } from "../pom_file/createhighlight";
import data from "../fixtures/example.json"
import { any } from "cypress/types/bluebird";
let obj=new CustomHighlight() 
export const custom_highlight = {
    highlight_group_display():any{
        cy.wait(2000)
        cy.mRestoreLocalStorage();
        cy.wait(5000)
        cy.visit(Cypress.env("CreateHight"))
        cy.wait(2000)
        obj.highlightgroup().click({force: true})
        cy.wait(3000)
        obj.highlightgrouplist().each(function($ele2){
        cy.log($ele2.text())
    })
    },
    highlight_group_select():any{
        cy.wait(5000)
        obj.highlightgroup().click({force: true})
        cy.wait(2000)
        obj.highlightgrouplist().each(function($ele2){
        if($ele2.text()=="Nutrition"){
            obj.highlightgrouplist().contains("Nutrition").click()
            cy.log("Nutrition Selected Successfully") 
            }
    })        
    },
    data_lose_alert():any{
        cy.wait(2000)
        cy.mRestoreLocalStorage();
        cy.wait(5000)
        cy.visit(Cypress.env("CreateHight"))
        this.highlight_group_select()
        obj.back().click
        cy.wait(2000)
        cy.on("window:Cancel", (t):any => {
            //verify text on pop-up
            expect(t).to.equal("Are you sure you want to navigate to this page?");
            obj.cancel().click()
        })
    },
    create_highlight():any
    {
        cy.wait(2000)
        cy.mRestoreLocalStorage();
        cy.wait(5000)
        cy.visit(Cypress.env("CreateHight"))
        this.highlight_group_select()
        cy.wait(2000)
        obj.highlighttitle().type('MyHighlight1');
        obj.wallcardtext().type('SampleText');

    }
    
}