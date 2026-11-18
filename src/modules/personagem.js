export class Personagem {
    vida = 100
    mana = 100
    static descricao = 'Um formidável ser'
    static tipo = 'Plebeu'

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }

        return `${this.constructor.tipo} iniciante`
    }
}