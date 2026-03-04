it("페이지 이동 테스트", (): void => {
  cy.visit("http://localhost:3000/section33/33-06-cypress-e2e-test");
  cy.get("button").click();
  cy.url().should("include", "/section33/33-06-cypress-e2e-test-moved");
});
