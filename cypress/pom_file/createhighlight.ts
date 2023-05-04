///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
import data from "../fixtures/selector.json"
export class Highlight_class {
   
        highlightgroup() {
            return cy.get(data.createhight.highlightgroup,{timeout:2000});
        }
        highlightgrouplist(){
            return cy.xpath(data.createhight.highlightgrouplist,{timeout:5000});
        }
        back(){
            return cy.get(data.createhight.back);
        }
        cancel(){
            return cy.xpath(data.createhight.cancel);
        }
        highlighttitle(){
            return cy.xpath(data.createhight.highlighttitle,{timeout:5000});
        }
        wallcardtext(){
            return cy.xpath(data.createhight.wallcardtext,{timeout:5000});
        }
       /* icon(){
            return cy.get(data.createhight.);
        }
        preview(){
            return cy.get(data.createhight.);
        }
        uploadimage(){
            return cy.get(data.createhight.);
        }       
        uploadcoverimage(){
            return cy.get(data.createhight.);
        }
        externalLink(){
            return cy.get(data.createhight.);
        }
        customURL(){
            return cy.get(data.createhight.);
        }
        save(){
            return cy.get(data.createhight.);
        } */ 
    
    }

