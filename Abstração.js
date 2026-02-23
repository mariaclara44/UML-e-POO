class Personagem {
    nome;
    poderDeAtaque;

    constructor(nome, poderDeAtaque) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque
    }

    receberDano(valor) {
        return `${this.nome} recebeu este valor de dano: ${valor}`
    }
}
