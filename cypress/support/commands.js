Cypress.Commands.add("login", (email, password) => {
  cy.get(".ml-auto > .ml-2").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.get("form > .ml-2").click();
});

Cypress.Commands.add("addNewBook", (book, description, author) => {
  cy.contains("Add new").click();
  cy.get("#title").type(book);
  cy.get("#description").type(description);
  cy.get("#authors").type(author);
  cy.get("form > .ml-2").click();
});
