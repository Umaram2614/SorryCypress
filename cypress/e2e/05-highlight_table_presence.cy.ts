import {custom_highlight} from "../support/04_createhighlight.cy"
import {login} from "../support/01_login_Feature.cy"
describe('Highlight Table validation(qa)', () => {
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
    it('Verify highlight creation with valid inputs',function(){
    
    })

    
    })
    