let id = 0;
describe("postToken", ()=> {
    before(() => {
      cy.postToken();
      cy.saveLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
    });
  
    it("should exist identity in localStorage", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token token", token);
      });
    });
    it("First Create an Address", () => {
      cy.getLocalStorage("access_token").should("exist");
      cy.getLocalStorage("access_token").then(token => {
        console.log("access_token", token);

        cy.request({
          method: 'POST',
          url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses',
          auth: {
              bearer: token
              
          },
          body :
          {
              "address": {
                firstname: "Sharon",
                lastname: "Zenith",
                address1: "BTM",
                address2: "2nd Floor",
                city: "Bethesda",
                phone: "3014445002",
                zipcode: "20814",
                state_name: "MD",
                country_iso: "US"
              }
      }}).then((response)=>{
      expect(response.status).to.equal(200);
       // response.body is automatically serialized into JSON
       cy.log(response.body);
       expect(response.body.data).to.have.property('type','address')
       id=response.body.data.id;
       cy.log(id);
       expect(response.body.data.attributes).to.have.property('address1','BTM')
       expect(response.body.data.attributes).to.have.property('firstname','Sharon')

  });
});
});
console.log(id)
it("Update an Address", () => {
    cy.getLocalStorage("access_token").should("exist");
    cy.getLocalStorage("access_token").then(token => {
      console.log("access_token", token);

      cy.request({
        method: 'PATCH',
        url: 'https://demo.spreecommerce.org/api/v2/storefront/account/addresses/'+id,
        auth: {
            bearer: token
            
        },
        body :
        {
            "address": {
              firstname: "Sharon",
              lastname: "Zenith",
              address1: "Gandhi nagar",
              address2: "2nd Floor",
              city: "Bethesda",
              phone: "3014445002",
              zipcode: "20814",
              state_name: "MD",
              country_iso: "US"
            }
    }}).then((response)=>{
    expect(response.status).to.equal(200);
     // response.body is automatically serialized into JSON
     cy.log(response.body);
     expect(response.body.data).to.have.property('type','address')
     expect(response.body.data.attributes).to.have.property('address1','Gandhi nagar')
     expect(response.body.data.attributes).to.have.property('firstname','Sharon')

});
});
});
});