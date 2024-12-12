import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
component: {
  supportFile: "cypress/support/component.ts",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    indexHtmlFile: "cypress/support/component-index.html",
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },
});
