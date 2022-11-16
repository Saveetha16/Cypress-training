// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Spreecom SignUp Application', function() {

    it('Visits the Spreecom Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    // cy.visit("https://demo.spreecommerce.org/login");
    cy.visit("https://demo.spreecommerce.org/signup");
    
   // Enter UserName and Password
//    cy.get('#account-button').click()
//    cy.get('#link-to-account > [href="/signup"]').click()
    // cy.get("input[placeholder='Email']").type('priya@gmail.com')
    cy.get('#spree_user_email').type('santhosh@gmail.com')
    cy.get("input[placeholder='Password']").type('santhosh123')
    cy.get('#spree_user_password_confirmation').type('santhosh123')
    cy.get(':nth-child(5) > .btn').click()
    //Verify Dashboard Tab
    
      
  })

  
  })