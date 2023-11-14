context('Adonline Test', () => {
  beforeEach(()=> {
    
  })//beforeEach


describe('Order search', () => {
  it('Gets, types and asserts', () => {
    
cy.visit('https://10.15.8.35/aolweb/#/');
cy.get('#mat-input-0').click();
cy.get('.divFormLogin:nth-child(1) > .div-divFormLogin').click();
cy.get('#mat-input-1').type('juanp');
cy.get('.mat-button-wrapper').click();
cy.get('.pulse').click();
cy.get('.icon path:nth-child(3)').click();
cy.get('#mat-input-384').type('2023');
cy.get('#\-1000 .buttonLink').click();
cy.get('#mat-tab-label-7-4 .ng-star-inserted').click();
cy.get('#\32 023_11_14T14_58_13_225Z .datatable-body-cell:nth-child(2) .ctrl-tableGral:nth-child(1)').click();

    

  })

})

})//context