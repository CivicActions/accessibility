// ./pa11y-reporter-junit.js

// Copied from https://github.com/macieklewkowicz/pa11y-reporter-junit and modified it for pa11y-ci

const builder = require('junit-report-builder');
const fs = require('fs');

module.exports = function (options) {

  const fileName = options.fileName

  return {
    // add test results to the report
    results(results) {
      // Create a test suite
      const suite = builder.testSuite().name(results.pageUrl);

      if (results.issues.length > 0) {
        results.issues.forEach(issue => {
          suite.testCase()
            .className(issue.code)
            .name(`[${results.pageUrl}] ${issue.selector}`)
            .failure(`${issue.message}\n\nContext: ${issue.context}`);
        });
      } else {
        // Identify passing test for a given URL if there are no accessibility errors.
        suite.testCase()
          .className(results.pageUrl)
          .name('No accessibility errors');
      }
    },

    // also store errors
    error(error, url) {
    },

    // write to a file
    afterAll() {
      const data = builder.build();
      return fs.promises.writeFile(fileName, data, 'utf8');
    }
  }
};
