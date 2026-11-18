import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"

// const personagemJose = new Personagem(
//     'José',
//     3,
//     'Arqueiro'
// )

const magoPedrinho = new Mago('Pedrinho', 5, 'Água', 2, 10)

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 3, 5)

const personagens = [magoPedrinho, magoAntonio]

new PersonagemView(personagens).render()