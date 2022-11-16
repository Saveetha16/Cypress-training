// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Fetching Data from Fixture file->Login.json', function() {
    
    //Use the cy.fixture() method to pull data from fixture file
before(function () {
  cy.fixture('login1').then(function (data) {
    this.data = data;
  })
})

  
  it('Visits the OrangeHRM Page and Perform Login Action', function() {
  //Visit the OrnageHRM Website
  cy.visit(this.data.URL);
  
  // Enter UserName and Password

  cy.get("input[placeholder='Username']").type(this.data.Uname)
  cy.get("input[placeholder='Password']").type(this.data.Upass)
  cy.get("button[type='submit']").click()
  //Verify Dashboard Tab
  cy.xpath("//span[text()='Dashboard']").contains('Dashboard')
  cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text','PIM')
  cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
  cy.xpath("//a[normalize-space()='Logout']").click()
  cy.url().should('include','web/index.php/auth/login')
 
})
})