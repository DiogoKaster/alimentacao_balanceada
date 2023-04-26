describe('quiz', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000/quiz')
    })

    it('should have a div inside a div with 3 img children', () => {
        cy.get('div')
            .should('have.length.at.least', 2) // ensure there are at least 2 divs
            .eq(0) // select the first div
            .within(() => {
                cy.get('div') // select all div elements
                    .should('have.length.at.least', 1) // ensure there is at least 1 nested div
                    .eq(0) // select the first nested div
                    .within(() => {
                        cy.get('img') // select all img elements
                            .should('have.length', 3) // ensure there are exactly 3 img elements
                    })
            })
    })

    it('show feedback', () => {

        cy.get('img').eq(0).click()

        cy.contains(/Muito bem! Você acertou! Vamos continuar! Pressione o botão Próximo|Não foi dessa vez....Tente novamente !/)
    });




})