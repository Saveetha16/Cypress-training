// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('WebOrders Application', function() {

    it('Visits the Web orders Page and Perform Login Action', function() {
    //Visit the Website
    cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx")
    
   // Enter UserName and Password
    
    cy.get('#ctl00_MainContent_username').type('Tester')
    cy.get('#ctl00_MainContent_password').type('test')
    cy.get('#ctl00_MainContent_login_button').click()
    cy.get('h1').should('have.text','Web Orders')
    cy.get('#ctl00_menu > :nth-child(3) > a').click()
    

    //Order page
    cy.get('[colspan="2"] > :nth-child(2)').should('have.text','Product Information')
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type('3')
    cy.get('#ctl00_MainContent_fmwOrder_txtUnitPrice').type('200')
    cy.get('#ctl00_MainContent_fmwOrder_txtDiscount').type('10')
    cy.get(':nth-child(5) > .btn_dark').click()
    
    cy.get('#ctl00_MainContent_fmwOrder_txtName').type('Priya')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type('Rajiv gandhi street')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type('Chennai')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox4').type('Tamilnadu')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type('6000342')

    cy.get('#ctl00_MainContent_fmwOrder_cardList_0').click()
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type('6098787689877878')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type('12/35')
    cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()
    cy.get('strong').should('have.text', '\n                    New order has been successfully added.\n                ')
    
    //Checking whether the user is added
    cy.get('#ctl00_menu > :nth-child(1) > a').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','Priya')
 
    //Logout
    cy.get('#ctl00_logout').click()
    cy.get('#ctl00_MainContent_login_button').should('have.value','Login')
  
  })})