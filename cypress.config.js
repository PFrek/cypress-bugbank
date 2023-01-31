const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.0.178:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "reporter": "../node_modules/mochawesome/src/mochawesome.js",
  "reporterOptions": {
      "overwrite": false,
      "html": false,
      "json": true
  }
});


