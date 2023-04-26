describe('home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have loaded the page', () => {
    cy.contains('Alimentação balanceada')

    cy.get('div')
      .should('have.length.at.least', 2) // ensure there are at least 2 divs
      .eq(0) // select the first div
      .within(() => {
        cy.get('div') // select all div elements
          .should('have.length.at.least', 1) // ensure there is at least 1 nested div
          .eq(0) // select the first nested div
          .within(() => {
            cy.get('img') // select all img elements
              .should('have.length', 4) // ensure there are exactly 4 img elements
          })
      })

    cy.get('button')

  })
})