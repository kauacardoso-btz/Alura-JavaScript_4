export class Personagem {
    vida = 100
    mana = 100

    constructor(nome, level, tipo, descricao) {
        this.nome = nome
        this.level = level
        this.tipo = tipo 
        this.descricao = descricao
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacável ${this.tipo}`
        }

        return `${this.tipo} iniciante`
    }
}