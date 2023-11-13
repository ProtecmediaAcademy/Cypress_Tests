context('Adonline Test', () => {
  beforeEach(()=> {
    cy.viewport(1400,850)
    cy.login("juanp","juanp")

  })//beforeEach


describe('Create Order', () => {
  it('Gets, types and asserts', () => {
    
    cy.wait(14000);
    cy.OpenMenu();
    cy.wait(1000); 
    cy.NewOrder();
    cy.FillOrder();
    cy.NewClassified();
    cy.wait(2000); 
    cy.FillClassified();
    cy.FillMaterials();
    cy.FillParcla();
    cy.SaveOrder();
    

  })

})

})//context

