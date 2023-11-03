// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (user, password) => { 

    cy.visit('https://10.15.8.35/aolweb')
    cy.get('#mat-input-0').type(user);
    cy.get('#mat-input-1').type(password);
    cy.get('.btConectar').click();


 })

 Cypress.Commands.add('OpenMenu', () => { 
    cy.contains('menu').click();
 })

 Cypress.Commands.add('NewOrder', () => { 
    cy.get('.mat-button-wrapper .mat-24 path:nth-child(3)').click();
    cy.wait(1000);
    cy.contains('Orden comercial').click();
 })

 Cypress.Commands.add('FillOrder', () => { 
    cy.get('#mat-input-4').type('SA0007');
    cy.wait(1000);
    cy.contains('Clase de orden').click();
 })

 Cypress.Commands.add('NewClassified', () => { 
    cy.get('.buttonGrid .mat-button-wrapper .mat-24:first').click();
   
 })
 
 Cypress.Commands.add('FillClassified', () => { 
    cy.contains('[Sin tipo de pedido]').click();
    cy.contains(' Clasificados ').click();
    cy.get('#mat-input-8').type('00', { force: true });
    cy.get('#mat-select-7').click();
    cy.contains('El Nuevo Diario').click();
    cy.get('#mat-input-9').type('3', { force: true });
    cy.get('#mat-input-10').type('23', { force: true });
    cy.get('#mat-select-9').click();
    cy.contains('Palabras').click();
    cy.get('#mat-input-11').type('1201', { force: true });
    cy.get('#mat-select-11').click({ force: true });
    cy.contains('Tipo de original').click({ force: true });
    cy.contains('02-Pal. Cla. Mod. Edi.').click({ force: true });
   
    //Cerrar busqueda
    cy.get('.icon-section-drch #btBuscar:nth-child(3n)').click();
    //Click Materiales
    cy.contains('Materiales *').click();
   
 })

 Cypress.Commands.add('FillMaterials', () => { 
   
   //Click Materiales
   cy.contains('Materiales *').click();
   //Seleccionar Modelo
   cy.contains('[Sin modelo]').click();
   cy.contains('Clasificados normales con anexos').click();
    
   //Click Parcla
   cy.get('.btParcla').click();
   
  
})

Cypress.Commands.add('FillParcla', () => { 
   cy.wait(2000)
   cy.get('[placeholder="Alfabético"]').type('00');
   cy.wait(2000)
   cy.contains('Barrios de Madrid').click();
   cy.wait(2000)
   cy.contains('Barrios de Madrid').click();
   cy.wait(2000)
   cy.contains(' Moratalaz ').click();
   cy.get('[placeholder="Precio"]').click();
   cy.get('[placeholder="Precio"]').type('10');
   cy.contains('Rango de precios').click({ force: true });
   cy.wait(2000)
   cy.contains('Rango de precios').click({ force: true });
   cy.contains(' Hasta 100.000 ').click();
   cy.get('[placeholder="Zonas"]').click();
   cy.get('[placeholder="Zonas"]').type('Sur');
  
    //Click Parcla
    cy.get('.btParcla').click();
    cy.get('.btParcla').click();
   
  
})

Cypress.Commands.add('SaveOrder', () => { 
  
   cy.get('.mat-card-subtitulo-buttons .close-icon-sub-dlg:first').click();
  
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })