describe('User Management App', () => {
    beforeEach(() => {
      cy.visit(Cypress.config().baseUrl);
    });
  
    it('should navigate to Create User page when Create User link is clicked', () => {
      cy.get('a[href="/user/create"]').click();
      
      cy.get('router-outlet').should('exist');
      cy.url().should('eq', Cypress.config().baseUrl + '/user/create');
    });
  
    it('should display the main container', () => {
      cy.get('main.container.mx-auto.mt-4').should('exist');
    });
  
  });
  