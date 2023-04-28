const { defineConfig } = require("cypress");
const { cloudPlugin } = require("cypress-cloud/plugin");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on:any, config:any) {
      // implement node event listeners here
      return cloudPlugin(on, config);
    },
    specPattern: 'cypress/e2e/**.{js,jsx,ts,tsx}',
        projectId: "Dashboard_Test",
        experimentalRunAllSpecs: true
    
  },

});
