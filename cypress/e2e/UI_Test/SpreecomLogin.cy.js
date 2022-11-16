// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Spreecom Application', function() {

    it('Visits the Spreecom Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://demo.spreecommerce.org/login");
    
   // Enter UserName and Password
    
    cy.get("input[placeholder='Email']").type('spree@gmail.com')
    cy.get("input[placeholder='Password']").type('spree123')
    cy.get('#new_spree_user > .btn').click();
    })
    it('Visits the Spreecom Page and Perform Logout Action', function() {
    cy.get('#account-button').click()
    cy.get('#link-to-account > [data-method="get"]').click()
    cy.get('#existing-customer > .col-lg-11 > .spree-mb-large').should('have.text','Log in to continue');
    
    //Verify Dashboard Tab
    
      
  })

  
  })