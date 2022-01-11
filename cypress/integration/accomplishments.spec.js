/// <reference types="cypress" />

describe("Accomplishment Dashboard", ()=>{

    beforeEach(()=>{
        cy.visit("/accomplishments")
    })

    it("should showcase error if informationg is missing", ()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My base accomplishment!")
        cy.get("[data-cy='accomplishment-input").type("I made 10 in a row")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue")
        .should("be.visible")
    })

    it("should display validation component if all information is input",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My base accomplishment!")
        cy.get("[data-cy='accomplishment-input").type("I made 10 in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("should return back to accomplishment with empty inputs when 'Go back button is clicked' ",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My base accomplishment!")
        cy.get("[data-cy='accomplishment-input").type("I made 10 in a row")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2","Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input").should("have.value","")
        cy.get("[type='checkbox']").should("not.be.checked")
    })

})