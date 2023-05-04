import {custom_highlight} from "../support/04_createhighlight.cy"
import {login} from "../support/01_login_Feature.cy"
describe('Create Highlight(qa)', () => {
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
    it('Verify Highlight Group list ',function(){
        custom_highlight.highlight_group_display();
        custom_highlight.highlight_group_select();
    })
    it('Verify data lose alert confirmation ',function(){
        custom_highlight.data_lose_alert();
    })
    
    it('Verify create highlight ',function(){
        custom_highlight.create_highlight();
    })
    
})