import LoginElements from "../elements/LoginElements"
const loginElements = new LoginElements();
const url = Cypress.config("baseUrl");

class LoginPage {

    acessar() {
        cy.visit(url);
    }

    preencherEmail(email) {
        cy.get(loginElements.campoEmail()).type(email);
    }

    preencherSenha(senha) {
        cy.get(loginElements.campoSenha()).type(senha);
    }

    clicarAcessar() {
        cy.contains('button', loginElements.botaoAcessar()).click();
    }
}

export default LoginPage;