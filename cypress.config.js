const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // Re-enable if you want to see videos of the tests.
  video: false,
  videosFolder: 'cypress/results',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit.[hash].xml',
    toConsole: false,
  },
  screenshotsFolder: 'cypress/results/screenshots',
  // Disable Google Analytics, tag manager, translation services.
  blockHosts: [
    '*googletagmanager.com',
    '*googleapis.com'
  ],
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:4000',
  },
})
