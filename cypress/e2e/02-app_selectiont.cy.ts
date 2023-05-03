import {gamificationMain} from "../support/gamificationMain_Feature.cy"
import {login} from "../support/login_feature.cy"
describe('Login Feature', () => {
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
it('Verify the app selection from the side panel', () => {
    gamificationMain.selectapp()
            })
it('Verify the create highlight page navigation', () => {
    gamificationMain.createhighlight()
    })
    
})
