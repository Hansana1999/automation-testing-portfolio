// cypress/pages/HomePage.js

class HomePage {
  elements = {
    loginLink: () => cy.get('a[href="/login"]'),
    searchBox: () => cy.get('input#small-searchterms'),
    searchButton: () => cy.get('input.button-1.search-box-button')
  };

  visit() {
    cy.visit('/');
  }

  openLoginPage() {
    this.elements.loginLink().click();
  }

  searchForProduct(productName) {
    this.elements.searchBox().clear().type(productName);
    this.elements.searchButton().click();
  }
}

export default new HomePage();