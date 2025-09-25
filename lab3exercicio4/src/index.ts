abstract class Cliente {
    #nome:string;

    constructor(nome:string) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    abstract get mensalidade():number;
}

class ClienteJuridico extends Cliente {
    #mensalidade:number;

    constructor(nome:string, mensalidade:number) {
        super(nome);
        this.#mensalidade = mensalidade;
    }

    get mensalidade() {
        return this.#mensalidade;
    }

    set mensalidade(valor) {
        this.#mensalidade = valor;
    }
}
