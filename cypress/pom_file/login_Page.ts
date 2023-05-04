///<reference types="cypress"/>
import data from "../fixtures/selector.json"
export class LoginPage_class{
  getUserName() {
      return cy.get(data.login.user_name);
  }
  getPassword(){
      return cy.get(data.login.pass_word);
  }
  getLoginButton(){
      return cy.get(data.login.login_button);
  }
  snackbar(){
    return cy.contains("Invalid E-mail ID");
  }
  snackbar_2(){
    return cy.contains("Password required");
  }
}