/// <reference types="cypress" />

describe("Books service tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays start page", () => {
    cy.get(".text-light > .ml-2").should("be.visible");
    cy.get(".ml-auto > .ml-2").should("be.visible");
  });

  it("login test", () => {
    cy.login("bropet@mail.ru", "123");
    cy.get(".pt-2").should("have.text", "Добро пожаловать bropet@mail.ru");
  });

  //   it("add new book test", () => {                                // Тест полчился одноразовый, так как нет функции удалить книгу
  //     cy.login("bropet@mail.ru", "123");
  //     cy.contains("Add new").click();
  //     cy.get("#title").type("Война и мир");
  //     cy.get("#description").type("Знаменитый русский роман");
  //     cy.get("#authors").type("Лев Толстой");
  //     cy.get("#favorite").click();
  //     cy.contains("Submit").click();
  //     cy.contains("Война и мир").should("be.visible");
  //     cy.contains("Лев Толстой").should("be.visible");
  //   });

  it("add HP book to favorites test", () => {
    cy.addToFavorites("Гарри Поттер и философский камень");
    cy.get("h4").click();
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
  });

  it("delete HP book from favorites test", () => {
    cy.login("bropet@mail.ru", "123");
    cy.get("h4").click();
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
    cy.get(".card-footer > .btn").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });

  it("open HP book from favorites page test", () => {
    cy.contains("Гарри Поттер и философский камень").should("be.visible");
    cy.addToFavorites("Гарри Поттер и философский камень");
    cy.get("h4").click();
    cy.contains("Гарри Поттер и философский камень").click();
    cy.get(".col-md-7 > :nth-child(3)").should("have.text", "Джоа́н Ро́улинг");
    cy.get("h4").click();
    cy.get(".card-footer > .btn").click();
  });
});
