describe('Test de navegació', () => {
  
  it('Comprova que es pot accedir a projectes.html', () => {
      cy.visit('http://a23ikedelgra.dam.inspedralbes.cat/index.html'); 
      cy.contains('a', 'Veure els meus projectes').should('be.visible').click();
      cy.url().should('include', '/projectes.html');
  });

  it('Comprova que els enllaços de projectes.html apunten als repositoris', () => {
      cy.visit('http://a23ikedelgra.dam.inspedralbes.cat/projectes.html');
      cy.get('a[href*="github.com"]').should('have.length.at.least', 1); 
  });

});
