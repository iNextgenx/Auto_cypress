Cypress.Commands.add("login", (email, password) => {
  cy.get(".ml-auto > .ml-2").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.get("form > .ml-2").click();
});

Cypress.Commands.add("addToFavorites", (bookName) => {
  cy.login("bropet@mail.ru", "123");
  cy.contains(bookName).should("be.visible");
  cy.get(
    '[href="book/2fb96b99-cf9b-45af-81ff-169a3b3c9068"] > .h-100 > .card-footer > .btn'
  ).click();
});
