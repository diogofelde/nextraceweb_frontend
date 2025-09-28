describe('Tela de Login', () => {
  it('realiza login com sucesso', () => {
    cy.visit('http://localhost:5173');
    cy.get('input').first().type('diogo@empresa.com');
    cy.get('input[type="password"]').type('senha123');
    cy.contains('Entrar').click();
    cy.contains('✅ Login realizado com sucesso!');
  });
});
