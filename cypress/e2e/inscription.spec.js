describe("try!", () => {
    it("do nothing", () => {
        expect(true).to.equal(true)
    })

    it.only("visit Home ", () => {
        cy.visit("/Home")
        cy.wait(3000) })

    

    it.only("Test inscription Center", () => {
         cy.get('[style="opacity: 1; order: 2;"] > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.wait(3000)
         cy.visit("/inscriptionInCenter")
        cy.get('#control-ref_cin').type("123456")
        cy.wait(2000)
        cy.get('#control-ref_firstname').type("Ines")
        cy.wait(2000)

        cy.get('#control-ref_lastname').type('Mansour')
        cy.wait(2000)
        cy.log("country name - ")
        cy.get('#control-ref_email').type('mansourines121@gmail.com')
        cy.wait(2000)
   
       cy.get(':nth-child(6) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()

       cy.wait(2000)
       cy.get('[title="Ariana"] > .ant-select-item-option-content').click()

       cy.get(':nth-child(7) > .ant-col-14 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
       cy.wait(2000)
       cy.get('[title="Soukra"] > .ant-select-item-option-content').click()
       cy.get('#control-ref_birthday').type('25')

       cy.wait(2000)
       cy.get('#control-ref > .ant-btn').click()



    })


})