import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { Mago } from "./modules/mago.js"

// const personagemJose = new Personagem(
//     'José',
//     3,
//     'Arqueiro'
// )

const magoPedrinho = new Mago('Pedrinho', 5, 'Água', 2, 10)
const magoAntonio = new Mago('Antonio', 4, 'Fogo', 3, 5)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoLucas = new ArqueiroMago('Lucas', 10, 7, 'Ar', 6, 10)


const personagens = [magoPedrinho, magoAntonio, arqueiroBruno, arqueiroMagoLucas]

new PersonagemView(personagens).render()