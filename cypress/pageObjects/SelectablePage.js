import BasePage from "./BasePage";

class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get clickOnText() {
        return cy.get(".list-group-item");
    }

    static get gridTab() {
        return cy.get("#demo-tab-grid");
    }

    static get firstRow() {
        return cy.get("#row1");
    }

    static get secondRow() {
        return cy.get("#row2");
    }

    static get thirdRow() {
        return cy.get("#row3");
    }
}

export default SelectablePage;
