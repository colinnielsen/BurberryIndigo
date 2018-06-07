describe('Test Burberry site', () =>{
    it('site should work', () =>{   
        cy.visit('/')
        cy.get('button').should('contain','Enter').click()
        cy.contains('A man of contrasts')
        cy.contains('With laid-back')
        cy.get('.birdOn')
        // cy.get('.scroller.animated.fadeIn').should('have.class','.scroller.animated.fadeIn')
        cy.get('span').should('contain', 'continue')
        // cy.get('a').click()
        cy.viewport(2999, 2999)

    })
})