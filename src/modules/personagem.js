export class Personagem {
    vida = 100
    mana = 100

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacável ${this.tipo}`
        }

        return `${this.tipo} iniciante`
    }
}