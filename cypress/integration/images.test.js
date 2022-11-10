const path = require('path');

describe('Images', () => {
  it('alt text is tracked', () => {
    const filename = 'cypress/results/accessibility.civicactions.com-images-and-alt-texts.csv'
    cy.writeFile(filename, 'URL,SRC,ALT\n')
    cy.getSitemapLocations().then(pages => {
      pages.forEach(page => {
        if (path.extname(page[0]) !== '.pdf') {
          cy.visit(page[0])
          cy.get('body', {log: false}).then($body => {
            if ($body.find('img').length > 0) {
              cy.url({log: false}).then(url => {
                cy.get('img', {log: false}).each(($image, index, $list) => {
                  const imageDetails = url + ',' + $image.prop('src') + ',' + $image.attr('alt') + '\n';
                  cy.writeFile(filename, imageDetails, {flag: 'a+', log: false})
                })
              })
            }
          })
        }
      })
    })
  })
})
