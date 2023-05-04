import {gamificationMain} from "../support/02_app_Selection.cy"
import {login} from "../support/01_login_Feature.cy"
describe('App Selection(qa)', () => {
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
it('Verify Home page title',() => {
    gamificationMain.titleCheck()
            })
it('Verify app selection from the side panel', () => {
    gamificationMain.selectapp()
            })

})
