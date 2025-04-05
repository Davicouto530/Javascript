"use strict";

/*
 * JSON (JavaScript Object Notation) é um formato usado para armazenar e 
 * trocar dados entre sistemas, como cliente e servidor.
 * Este código converte um objeto JavaScript para JSON e depois o reconverte.
 */

// Definição de um objeto chamado "pessoa" com algumas propriedades
const pessoa = {
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "JavaScript",

    // Objeto interno que representa as aulas
    aulas: {
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional" 
    }
};

// Converte o objeto "pessoa" para uma string no formato JSON
const sJsonPessoa = JSON.stringify(pessoa);

// Converte a string JSON de volta para um objeto JavaScript
const oJsonPessoa = JSON.parse(sJsonPessoa);

console.log(pessoa);
console.log(sJsonPessoa);
console.log(oJsonPessoa);
