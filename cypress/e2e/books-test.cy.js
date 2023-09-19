/// <reference types="cypress" />

describe("Books service tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.login("bropet@mail.ru", "123");
  });

  it("displays start page", () => {
    cy.get(".text-light > .ml-2").should("be.visible");
    cy.get(".ml-auto > .ml-2").should("be.visible");
  });

  it("login test", () => {
    cy.contains("Log out").click();
    cy.login("bropet@mail.ru", "123");
    cy.get(".pt-2").should("have.text", "Добро пожаловать bropet@mail.ru");
  });

  it("add new book test", () => {
    cy.addNewBook(
      "Гарри Поттер и философский камень",
      "Книга про знаменитого волшебника",
      "Джоа́н Ро́улинг"
    );
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
    cy.contains("Джоа́н Ро́улинг").should("be.visible");
  });

  it("add HP book to favorites test", () => {
    cy.contains("Add to favorite").first().click();
    cy.get("h4").click();
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
  });

  it("open HP book from favorites page test", () => {
    cy.get("h4").click();
    cy.contains("Гарри Поттер и философский камень").click();
    cy.get(".col-md-7 > :nth-child(3)").should("have.text", "Джоа́н Ро́улинг");
  });

  it("delete HP book from favorites test", () => {
    cy.get("h4").click();
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
    cy.get(".card-footer > .btn").first().click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
