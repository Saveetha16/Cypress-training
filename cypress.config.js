const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'bk96p2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})