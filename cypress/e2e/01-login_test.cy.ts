import {login} from "../support/01_login_Feature.cy"
describe('Login Feature(qa)', () => {
afterEach(function onAfterEach() {
    if (this.currentTest?.state === "failed") {
      cy.setCookie('shouldSkip', 'true');
      //set cookie to skip tests for further specs
      //Cypress.runner.stop();
      //this will skip tests only for current spec
    }
  });
before(() => {
    cy.beforetest();
  });
 
beforeEach( () => {
    login.visit()
  
    })
it('Verify unsuccessful login with Invalid inputs', () => {
 debugger;
  login.login("Invalid") 
})
it('Verify unsuccessful login with Blank inputs',() => {
  debugger;
  login.login("Blank") 
})
it('Verify successful login with valid inputs', () => {
  login.login("valid") 
  debugger;
  cy.task("log","Logged Successfully")
})

  })
describe('Login Feature 2 (stg)', () => {
  it('Verify successful login with valid inputs', () => {
    cy.task("log","Logged Successfully")
  })
  })
