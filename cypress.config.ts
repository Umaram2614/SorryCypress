const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");

module.exports = defineConfig({
  env: {
    BaseUrl: "https://cmsweb-new-qa2.skylab.world/",
    Dashboard:"https://cmsweb-new-qa2.skylab.world/home",
    CreateHight:"https://cmsweb-new-qa2.skylab.world/appmanager/gamification/createhighlight"
    
  },
  e2e: {
    watchForFileChanges: false, //cltest will not run after immediate change in the script 
    defaultCommandTimeout: 5000, //execution will be delayed for mentioned millisecond if any failure occurs in the command 
    videoUploadOnPasses: true,
    setupNodeEvents(on:any, config:any) {
      // implement node event listeners here
      on('task', {
        log(message:any) {
          console.log(message)
          return null
        },
      })
      require('@cypress/grep/src/plugin')(config);
      return cloudPlugin(on, config);
      
    },


    specPattern: 'cypress/e2e/**.{js,jsx,ts,tsx}',
        projectId: "gkjk12",
        experimentalRunAllSpecs: true
  }
 
});
module.exports = (on:any, config:any) => {
  require('@cypress/code-coverage/task')(on, config)

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
