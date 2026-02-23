class Personagem {
    nome;
    poderDeAtaque;
    #vida;
    constructor(nome, poderDeAtaque, vida) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        this.#vida = vida;
    }

    receberDano(valor) {
        if (this.#vida <= 0) {
            return `${this.nome} recebeu este valor de dano e morreu`;
        } else {
            return `${this.nome} recebeu este valor de dano: ${valor}`;
        }
    }

    exibirStatus() {
        this.#vida ? 'true' : 'false'
    }

}
