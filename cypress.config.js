const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome", 
  reporterOptions:{
        "reportDir": "cypress/results/mochawesome",
        "overwrite": false,
        "html": false,
        "json": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: false,
    // excludeSpecPattern: 'cypress/e2e/examples/2-advanced-examples'
  },
});
