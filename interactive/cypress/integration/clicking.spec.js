/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('Click on voteNow', () => {
    // cy.get('.positive-vote').click()
    // cy.get('.negative-vote').click()
    cy.contains('Vote Now').click();
    // cy.contains('Vote Again').click();
  });


  it('Register a vote', () => {
    cy.get('.positive-vote').click({ multiple: true })
    cy.contains('Vote Now').click();
  });

  it('Register a negative vote', () => {
    cy.get('.negative-vote').click({ multiple: true })
    cy.contains('Vote Now').click();
  });

  it('Register a vote and click in voteAgain', () => {
    cy.get('.positive-vote').click({ multiple: true })
    cy.contains('Vote Now').click();
    cy.contains('Vote Again').click();
  });

});
