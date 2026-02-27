class Personagem {
    nome;
    poderDeAtaque;
    #vida;

    constructor(nome, poderDeAtaque) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque
    }


    // ENCAPSULAMENTO 

  receberDano(valor) {
    if (valor <= 0) {
        return "O dano precisa ser maior que zero.";
    }

    if (this.#vida === 0) {
        return `${this.nome} foi derrotado`
    }
     this.#vida -= valor;

     if (this.#vida < 0) {
        this.#vida = 0;
     }

    return `${this.nome} recebeu ${valor} de dano`;
 }

    exibirStatus() {
       if (this.#vida > 0) {
        return `${this.nome} está vivo com ${this.#vida}`
    } else {
        return `O personagem ${this.nome} foi derrotado`
    }
    }

}

const heroi = new Personagem ("Artemis", 20);

console.log(heroi.exibirStatus());

console.log(heroi.receberDano(30));
console.log(heroi.exibirStatus());
console.log(heroi.receberDano(50));
console.log(heroi.exibirStatus());

// HERANÇA 
// GUERREIRO

class guerreiro extends Personagem{
    forcaFisica;
    
    constructor (nome, poderDeAtaque, forcaFisica) {
        super(nome, poderDeAtaque);
        this.forcaFisica = forcaFisica;
    }

    atacar(alvo) {
        const dano = this.poderDeAtaque + this.forcaFisica 
        console.log(`${this.nome} desferiu um golpe`);
        console.log(alvo.receberDano(dano));
    }
}    
class mago extends Personagem{
    forcaFisica;
    
    constructor (nome, poderDeAtaque, forcaFisica) {
        super(nome, poderDeAtaque);
        this.poderMagico = (this.poderMagico * 2);
    }

    atacar(alvo) {
        const dano = this.poderDeAtaque + this.poderMagico
        console.log(`${this.nome} lançou uma poderosa magia`);
        console.log(alvo.receberDano(dano));
    }

}    

const Guerreiro = new guerreiro ("Apolo", 30, 40);
const Mago = new mago ("Dedálo", 40, 20);

console.log(Guerreiro.exibirStatus());
console.log(Mago.exibirStatus());

console.log(Guerreiro.receberDano(40));
console.log(Guerreiro.exibirStatus());

//Console de polimorfismo


// Ataques 
Guerreiro.atacar(Mago);
Mago.atacar(Guerreiro);

console.log(Guerreiro.exibirStatus());
console.log(Mago.exibirStatus())


