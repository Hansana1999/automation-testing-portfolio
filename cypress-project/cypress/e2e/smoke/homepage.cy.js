// cypress/e2e/smoke/homepage.cy.js

describe('Demo Web Shop - Smoke Tests', () => {
  it('loads the homepage and displays core elements', () => {
    cy.visit('/');
    
    cy.get('a[href="/login"]').should('be.visible');
    
    cy.get('input#small-searchterms').should('be.visible');
    cy.contains('Welcome to our store').should('be.visible');
  });
});