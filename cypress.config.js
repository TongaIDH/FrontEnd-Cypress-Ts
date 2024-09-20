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
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://aliexpress.com",
    experimentalRunAllSpecs: false,
    excludeSpecPattern: 'cypress/e2e/examples/**'
  },
});
