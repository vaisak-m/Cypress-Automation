describe('My Test Suite', () => {
    it('Get, Assert and Type', () => {

        // navigate to page
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        // assert whether entered correct page
        cy.get('div[class=elementor-widget-container] h2 a strong span').should('have.text', 'Find out how to automate these controls without XPath')
        // Enter username
        cy.get('#userId').type('vaisak@gmail.com', {force:true})
        //  type password
        cy.get('#pass').type('password')
        // type company name 
        cy.get('.element-companyId > .form-group > .input-group > [name="company"]').type('Experion')
        //  type mobile number
        cy.get('.element-companyId > .form-group > .input-group > [name="mobile number"]').type('9755627645')
        // click submit
        cy.contains('Submit').click()
    })

    it('Basic Web Controls', () => {

        cy.visit('https://selectorshub.com/xpath-practice-page/')
        // Checkboxes
        cy.get('#ohrmList_chkSelectAll').check()

        cy.get('#ohrmList_chkSelectRecord_25').should('not.be.checked')

        cy.get('#ohrmList_chkSelectRecord_16').check()
        // dropdown
        cy.get('#cars').select('Saab').should('have.value', 'saab')



    })

})