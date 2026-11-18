import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";


export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMagico
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor das lanças e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMagico = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMagico.obterInsignia()}`
    }
}