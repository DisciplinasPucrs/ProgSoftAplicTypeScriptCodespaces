class Moeda {
    #valor: number;
    #nome: string;

    constructor(nome:string, valor:number) {
        this.#nome = nome;
        this.#valor = valor;
    }

    get valor() {
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }
}

class Cofrinho {
    #moedas: Moeda[] = [];

    adicionar(m:Moeda) {
        this.#moedas.push(m);
    }

    calcularTotal() {
        return this.#moedas
            .map(moeda => moeda.valor)
            .reduce((somatorio, valor) => somatorio + valor);
    }
}

const cofre = new Cofrinho();
cofre.adicionar(new Moeda("Um Real", 1));
cofre.adicionar(new Moeda("50 Centavos", 0.5));
console.log(cofre.calcularTotal());
