describe("try!", () => {
    it("do nothing", () => {
        expect(true).to.equal(true)
    })

    it.only("visit Dashbord Admin", () => {
        cy.visit("/Admin")
        cy.wait(3000) })

     it.only("Test inscription Center", () => {
         cy.visit("/ManageVaccines")

         cy.get('.ant-btn').click()
         cy.get('#control-ref_vaccine_type').type("Pfizer")
         cy.get('#control-ref_stock').type("200000")
         cy.get('#control-ref > .ant-btn').click()
         cy.get('.ant-modal-close-x > .anticon > svg').click()
         cy.wait(3000)
      
        //cy.get('[data-menu-id="rc-menu-uuid-76171-1-4"] > .ant-menu-title-content > a').click()
        //add
       
        

        //update
        cy.get(':nth-child(3) > .ant-btn').click()
        cy.get('#control-ref_stock').clear().type("500000000")
        cy.get('#control-ref > .ant-btn').click()
        cy.get('.ant-modal-close-x > .anticon > svg').click()

        cy.wait(2000)

        cy.get('.ant-btn').click({ force : true })
        cy.get('#control-ref_vaccine_type').type("Astrazeneca")
        cy.get('#control-ref_stock').type("200000")
        cy.get('#control-ref > .ant-btn').click()
        cy.get('.ant-modal-close-x > .anticon > svg').click()
       

        

    })
})