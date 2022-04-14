describe("try!", () => {
    it("do nothing", () => {
        expect(true).to.equal(true)
    })

    it.only("visit Admin dashboard ", () => {
        cy.visit("/Admin")
        cy.wait(3000) })

    

    it.only("Test Add Center", () => {
        cy.get('.ant-menu-item-selected > .ant-menu-title-content > a').click({force: true})
         cy.visit("/ManageCenter")
         cy.get('.ant-btn > span').click()
         cy.get('#control-ref_name').type("centre Bardo")
         cy.get(':nth-child(2) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
         cy.wait(2000)
       cy.get('[title="Ariana"] > .ant-select-item-option-content').click()
       cy.get('#control-ref_city').click()
       cy.wait(2000)
       cy.get('[title="Soukra"] > .ant-select-item-option-content').click()
       cy.get('#control-ref_capacity').type("2000")
       cy.get('#control-ref > .ant-btn').click()


    })


})