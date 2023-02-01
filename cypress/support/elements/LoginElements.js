class LoginElements {
    constructor() {
        this._parent = 'div[class="card__login"]';
    }

    campoEmail() { return this._parent + ' input[name="email"]'};
    campoSenha() { return this._parent + ' input[name="password"]'};
    botaoAcessar() { return "Acessar" };
    botaoRegistrar() { return "Registrar" };
}

export default LoginElements