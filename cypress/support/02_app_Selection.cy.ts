///<reference types="cypress"/>
import { Gamification_class as Gami_Main } from "../pom_file/gamification_MainPage";
import data from "../fixtures/example.json"
let obj=new Gami_Main()
export const gamificationMain = {

titleCheck():any{
    cy.wait(5000)
    cy.mRestoreLocalStorage();
    cy.visit(Cypress.env("Dashboard"))
    cy.title().should('eq', 'Skylab Command Center')
    cy.wait(2000).then(()=>{   
    })
},
selectapp() :any {
    cy.wait(5000)
    cy.mRestoreLocalStorage();
    cy.visit(Cypress.env("Dashboard"))
    cy.wait(2000).then(()=>{   
    })
    var applist = [];
    let i=0
       obj.applist_dropdown().should('be.visible').click()
       cy.screenshot("Applist");
       obj.applist().each(function($ele:any){
        applist[i]= $ele.text()
        if($ele.text()==data.appname){
        obj.selected_app().contains(data.appname).last().click()
        cy.log(data.appname +" Selected Successfully") 
        }
        i++;
    })
    cy.task("log",data.appname + " Application Selected")
}
}

    