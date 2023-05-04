///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import data from "../fixtures/selector.json"
export class Gamification_class {
    applist_dropdown(){
        return cy.get(data.selectapp.app_drodown,{timeout:5000});
    }
    applist(){
        return cy.xpath(data.selectapp.applist,{timeout:5000});
    }
    selected_app(){
        return cy.xpath(data.selectapp.selected_app,{timeout:5000});
    }
    AppManager()
    {
        return cy.xpath(data.gamification.Appmanger)
    }
    gamification()
    {
        return cy.xpath(data.gamification.Gamification)
    }
    CreateHighlight()
    {
    return cy.contains(data.gamification.Createhighlight)
    }
  }