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
        const { faker } = require('@faker-js/faker')
        const users = Cypress._.range(1,20).map((_, k)=>{
            return {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                id: k
            }  
        })

        const uma = faker.internet.findName()
        console.log(users)
        cy.log(uma)
    })
})
    