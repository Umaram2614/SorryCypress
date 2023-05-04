import {Gamificationmodule} from "../support/03_gamification_pageNavigation.cy"
import {login} from "../support/01_login_Feature.cy"
describe('Gamification Module Selection(qa) ', () => {
    before(()=>{
        login.visit()
        login.login("valid")      
    });
    afterEach(()=>{
        cy.mSaveLocalStorage()
    });
    beforeEach(()=>{
        cy.mRestoreLocalStorage();
    });
    it.only('Verify the create highlight page navigation', () => {
      Gamificationmodule.gamification_module();
      })
      
  })