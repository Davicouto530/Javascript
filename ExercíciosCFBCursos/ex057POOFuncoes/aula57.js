"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 * Definição de um objeto utilizando função construtora
 */

// Função construtora para criar objetos do tipo Pessoa
function Pessoa(pnome, pidade) {
    // Propriedades do objeto
    this.nome = pnome;  // Define o nome da pessoa
    this.idade = pidade; // Define a idade da pessoa

    // Método para obter o nome da pessoa
    this.getNome = function() {
        return this.nome;
    };
    
    // Método para obter a idade da pessoa
    this.getIdade = function() {
        return this.idade;
    };
}

// Criando um objeto Pessoa
const pessoa1 = new Pessoa("João", 25);

// Exibindo informações no console
console.log("Nome: ", pessoa1.getNome());
console.log("Idade: ", pessoa1.getIdade());