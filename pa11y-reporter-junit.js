// ./pa11y-reporter-junit.js

const builder = require('junit-report-builder');
const fs = require('fs');

module.exports = function (options) {

  const fileName = options.fileName

  return {
    // add test results to the report
    results(results) {
      // Create a test suite
      const suite = builder.testSuite().name(results.pageUrl);

      results.issues.forEach(issue => {
        suite.testCase()
          .className(issue.code)
          .name(`[${results.pageUrl}] ${issue.selector}`)
          .failure(`${issue.message}\n\nContext: ${issue.context}`);
      });
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
