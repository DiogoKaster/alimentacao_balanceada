describe('login', () => {

    let email: string, password: string

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    before(() => {
        const time = new Date().getTime()
        email = `${time}@gmail.com`
        password = `${time}`
    })

    it('should be able to register', () => {
        cy.get('button').contains('Registrar').click()

        cy.url().should('include', '/sign-up')
    });

    it('should be able to login', () => {
        cy.get('input[type="text"')
            .clear()
            .type('cacazinho99@gmail.com')

        cy.get('input[type="password"')
            .clear()
            .type('123')

        cy.get('button')
            .contains('Login')
            .click()

        cy.url()
            .should('include', '/menu')
    })

})