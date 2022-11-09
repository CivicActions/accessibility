describe('Images', () => {
  it('alt text is tracked', () => {
    cy.visit('/')
    cy.writeFile('cypress/results/alttexts.csv', 'URL,Src,Alt\n')
    cy.url().then(url => {
      cy.get('img').each(($image, index, $list) => {
        const imageDetails = url + ',' + $image.prop('src') + ',' + $image.attr('alt') + '\n';
        cy.writeFile('cypress/results/alttexts.csv', imageDetails, { flag: 'a+'})
        cy.log(imageDetails)
      })
    })
  })
})
