describe('drag-and-drop', () => {


    beforeEach(() => {
        cy.visit('http://localhost:3000/drag-and-drop')
    })

    it('should have a div inside a div with 6 img children', () => {
        cy.get('div')
            .should('have.length.at.least', 2) // ensure there are at least 2 divs
            .eq(0) // select the first div
            .within(() => {
                cy.get('div') // select all div elements
                    .should('have.length.at.least', 1) // ensure there is at least 1 nested div
                    .eq(0) // select the first nested div
                    .within(() => {
                        cy.get('img') // select all img elements
                            .should('have.length', 6) // ensure there are exactly 6 img elements
                    })
            })
    })

    it('show feedback', () => {

        for (let j = 0; j < 3; j++)
            dragFoodToPlate(j)

        cy.contains(/Muito bem! Você acertou! Vamos continuar! Pressione o botão Próximo|Não foi dessa vez....Tente novamente !/)
    });




})

function dragFoodToPlate(idx: number) {
    const randomDraggableFood = cy.get('img[alt="Comida"]')
        .eq(idx)

    const plate = cy.get('img')
        .should('have.attr', 'alt', 'Prato')

    plate.then((outerElement) => {
        // Get the inner element
        randomDraggableFood.then((innerElement) => {
            // Get the dimensions and position of the outer element
            const outerElementRect = outerElement[0].getBoundingClientRect();
            // Get the dimensions and position of the inner element
            const innerElementRect = innerElement[0].getBoundingClientRect();

            // Calculate the new position of the inner element
            const newLeft = outerElementRect.left + (outerElementRect.width / 2) - (innerElementRect.width / 2);
            const newTop = outerElementRect.top + (outerElementRect.height / 2) - (innerElementRect.height / 2);

            // Move the inner element to the new position
            innerElement.css('position', 'absolute').css('left', `${newLeft}px`).css('top', `${newTop}px`);

            // Simulate a mouse drag operation on the inner element
            const startPosition = { clientX: innerElementRect.left, clientY: innerElementRect.top };
            const endPosition = { clientX: innerElementRect.left + 50, clientY: innerElementRect.top + 50 };
            cy.wrap(innerElement).trigger('mousedown', { which: 1, clientX: startPosition.clientX, clientY: startPosition.clientY })
                .trigger('mousemove', { which: 1, clientX: endPosition.clientX, clientY: endPosition.clientY })
                .trigger('mouseup');
        });
    });
}