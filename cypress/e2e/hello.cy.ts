describe("Home Page", () => {
  it("loads successfully", () => {
    cy.visit("/");
    cy.contains("Home").should("be.visible");
  });
});