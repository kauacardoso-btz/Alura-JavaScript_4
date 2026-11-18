# Alura JavaScript 4

Repositório de estudos e projeto prático do curso **JavaScript: classes e heranças no desenvolvimento de aplicações com orientação a objetos**, da Alura.

## Propósito

Este repositório registra a construção de uma aplicação de cartas de personagens para duelos, usando JavaScript para praticar os principais fundamentos da programação orientada a objetos.

O projeto reúne personagens com diferentes habilidades, permite alterar seus níveis, selecionar dois personagens e exibir o resultado de um duelo em uma interface renderizada no navegador.

## Aprendizados

- criação e instanciação de classes com `new`;
- comunicação entre arquivos JavaScript com `import` e `export`;
- uso de `constructor` e `this` para inicializar atributos;
- herança de classes com `extends` e `super`;
- sobrescrita de métodos e aplicação de polimorfismo;
- composição de classes com a criação de instâncias internas;
- propriedades e métodos estáticos com `static`;
- encapsulamento de atributos com campos privados (`#`), `get` e `set`;
- renderização dinâmica de elementos HTML com template literals;
- interação com o DOM por meio de eventos e manipulação de classes CSS;
- organização de uma aplicação usando módulos JavaScript.

## Organização dos exemplos

| Arquivo | Conceito principal |
| --- | --- |
| `index.html` | estrutura da aplicação, lista de personagens e modal de resultado |
| `src/index.js` | criação dos personagens e inicialização da interface |
| `src/modules/personagem.js` | classe base, encapsulamento do nível e verificação do vencedor |
| `src/modules/mago.js` | herança e especialização de personagens magos |
| `src/modules/arqueiro.js` | sobrescrita de método e regra de insignia do arqueiro |
| `src/modules/guerreiro.js` | especialização de personagem e regra de insignia do guerreiro |
| `src/modules/arqueiro-mago.js` | composição de classes com arqueiro e mago |
| `src/components/personagem-view.js` | renderização dos personagens, seleção e eventos de duelo |
| `src/components/modal.js` | abertura e fechamento do modal com mensagens ao usuário |
| `src/assets/css/style.css`, `modal.css` e `reset.css` | estilos da aplicação, das cartas e do modal |
| `src/assets/img/` | imagens usadas na identidade visual e nas cartas dos personagens |

## Como executar

Na raiz do repositório, inicie um servidor local:

```bash
python3 -m http.server 8000
```

Depois, acesse [`http://localhost:8000`](http://localhost:8000) no navegador e selecione dois personagens para realizar um duelo.
