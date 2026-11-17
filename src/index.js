import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"

const personagemJose = new Personagem(
    'José',
    3,
    'Arqueiro'
)

const personagemPedrinho = new Personagem(
    'Pedrinho',
    5,
    'Mago'
)

const personagens = [personagemJose, personagemPedrinho]

new PersonagemView(personagens).render()