"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 */

class Pessoa { // Define uma classe chamada "Pessoa"
    constructor(pnome) { 
        // O constructor é um método especial chamado automaticamente quando um objeto da classe é criado.
        // Ele serve para inicializar as propriedades do objeto.

        this.nome = pnome; 
        // O "this" se refere ao próprio objeto que está sendo criado.
        // "this.nome" define uma propriedade chamada "nome" para cada objeto.
    }
}

// "new" cria um novo objeto baseado na classe Pessoa
let p1 = new Pessoa("Bruno"); // p1.nome será "Bruno"
let p2 = new Pessoa("Davi"); // p2.nome será "Davi"
let p3 = new Pessoa("Fernando"); // p3.nome será "Fernando"

// Exibe os nomes dos objetos criados
console.log(p1.nome); // Saída: Bruno
console.log(p2.nome); // Saída: Davi
console.log(p3.nome); // Saída: Fernando
