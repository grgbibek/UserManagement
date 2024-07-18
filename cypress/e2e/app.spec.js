describe('User Management Application', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the header with title and navigation links', () => {
      cy.get('header').should('have.class', 'bg-blue-500')
        .and('have.class', 'p-4');
    })
  });
  