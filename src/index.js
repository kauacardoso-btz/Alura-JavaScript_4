import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { Guerreiro } from "./modules/guerreiro.js"
import { Mago } from "./modules/mago.js"
import { Personagem } from "./modules/personagem.js"

const magoPedrinho = new Mago('Pedrinho', 'Água', 2, 10)
const magoAntonio = new Mago('Antonio', 'Fogo', 3, 5)
const arqueiroBruno = new Arqueiro('Bruno', 8)
const arqueiroMagoLucas = new ArqueiroMago('Lucas', 7, 'Ar', 6, 10)
const guerreiroMarcos = new Guerreiro('Marcos', 5)

const personagens = [magoPedrinho, magoAntonio, arqueiroBruno, arqueiroMagoLucas, guerreiroMarcos]

new PersonagemView(personagens).render()

