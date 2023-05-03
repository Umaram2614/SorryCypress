const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");
module.exports = defineConfig({
  env: {
    BaseUrl: "https://cmsweb-new-qa2.skylab.world/",
    Dashboard: "https://cmsweb-new-qa2.skylab.world/home"
    
  },
  e2e: {
    watchForFileChanges: false, //cltest will not run after immediate change in the script 
    defaultCommandTimeout: 5000, //execution will be delayed for mentioned millisecond if any failure occurs in the command 
    videoUploadOnPasses: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
      return cloudPlugin(on, config);
    },
    specPattern: 'cypress/e2e/**.{js,jsx,ts,tsx}',
        projectId: "gkjk12",
        experimentalRunAllSpecs: true
    
  },

});
