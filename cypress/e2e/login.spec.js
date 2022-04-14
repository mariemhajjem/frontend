
describe("try!", () => {
    it("do nothing", () => {
        expect(true).to.equal(true)
    })

    it.only("visit", () => {
        cy.visit("/Home")
        cy.wait(3000)
        //cy.get('a > .MuiButtonBase-root').click()
        cy.get('[data-menu-id="rc-menu-uuid-91288-3-Espace Citoyen"]').click()
        //cy.get('[data-menu-id="rc-menu-uuid-67161-2-Espace Citoyen"] > .ant-menu-title-content > a').click() 
        cy.wait(2000)
        //cy.visit("/login-page")
        cy.url().should("include","/citoyenSpace")
        cy.get('.makeStyles-cardBody-220 > :nth-child(1)').type("admin")
        cy.get('.makeStyles-cardBody-220 > :nth-child(2)').type("admin")
        cy.wait(4000)
        cy.url().should("include","/Admin")




    })
    it.only("successfully login", ()=>{

        cy.url().should("include","/citoyenSpace")
        cy.wait(4000)

        cy.get('.makeStyles-cardBody-220 > :nth-child(1)').clear().type("admin")
        cy.wait(1000)
        cy.get('.makeStyles-cardBody-220 > :nth-child(2)').clear().type("admin")
        
        cy.get('.makeStyles-cardFooter-222 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.url().should("include","/Admin") 
        cy.wait(3000)
        //cy.get(':nth-child(3) > .makeStyles-navLinkAdmin-24 > .MuiListItemIcon-root').click(
         cy.get(':nth-child(3) > .makeStyles-navLinkAdmin-285').click()
         //cy.url().should("include","/admin")

        //cy.visit("admin")
        //cy.get(':nth-child(1) > :nth-child(7) > .MuiSwitch-root > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-77').click({ force : true })
        //cy.get(':nth-child(17) > :nth-child(7) > .MuiSwitch-root > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input-351').click({force : ture})
        
        cy.wait(4000)


       // cy.visit("admin")
    })

  



})
