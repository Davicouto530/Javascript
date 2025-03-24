"use strict";

/**
 * Iteradores
 * 
 * // O iterador permite percorrer os elementos de um array ou string passo a passo usando next().
 */

// Criando um array e um iterador para ele
const valores = [10, 8, 9, 2];

// Criando um iterador para o array usando Symbol.iterator
const itValores = valores[Symbol.iterator]();

console.log(valores); // Exibe o array
console.log(itValores.next().value); // 10
console.log(itValores.next().value); // 8
console.log(itValores.next().value); // 9
console.log(itValores.next().value); // 2
console.log(itValores.next().value); // undefined (fim da iteração)

// Criando uma string e um iterador para ela
const texto = "Youtube";

// Criando um iterador para o array usando Symbol.iterator
const itTexto = texto[Symbol.iterator]();

console.log(texto); // Exibe a string
console.log(itTexto.next()); // { value: 'Y', done: false }
console.log(itTexto.next()); // { value: 'o', done: false }
console.log(itTexto.next()); // { value: 'u', done: false }
console.log(itTexto.next()); // { value: 't', done: false }
console.log(itTexto.next()); // { value: 'u', done: false }
console.log(itTexto.next()); // { value: 'b', done: false }
console.log(itTexto.next()); // { value: 'e', done: false }
console.log(itTexto.next()); // { value: undefined, done: true } (fim da iteração)
