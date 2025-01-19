const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'enp3ct',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
