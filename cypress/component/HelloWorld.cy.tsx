import HelloWorld from "../../src/components/HelloWorld";

describe("HelloWorld Component", () => {
  it("renders correctly", () => {
    cy.mount(<HelloWorld />);
    cy.contains("Hello World!").should("be.visible");
  });
});