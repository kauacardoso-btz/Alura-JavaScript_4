export class Personagem {
    vida = 100
    mana = 100
    #level = 0
    static descricao = 'Um formidável ser'
    static tipo = 'Plebeu'

    constructor(nome) {
        this.nome = nome
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }

        return `${this.constructor.tipo} iniciante`
    }

    aumentarLevel() {
        this.#level ++
    }

    diminuirLevel() {
        this.#level --
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level)
            return `Empate!`
        else if (personagem1.level > personagem2.level)
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        else
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
    }

    get level() {
        return this.#level
    }
}