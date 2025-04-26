"use strict";

/* 
 *  Funções para Strings
 */

//Instanciando uma classe String com o valor "bruno"
let nome = new String("Bruno Pinho Campos");
let nome2 = new String("Bruno Pinho Campos");
let canal = new String("CFBCursos");

console.log(nome);
console.log(typeof(nome));

//O "charAt" serve para indicar a posição 
//da letra que você quer ver
console.log(nome.charAt(0));

//O "charCodeAt" serve para indicar a posição 
//da letra que você quer ver o código
console.log(nome.charCodeAt(0));

//O "concat" serve para juntar duas strings, concatenar
console.log(nome.concat(canal));

//O "indexOf" percorre a string e retorna a posição do primeiro que ele 
//achar do que foi passado nos parenteses, se não tiver, retorna "-1"
console.log(nome.indexOf("o"));

//O "lastIndexOf" percorre a string e retorna a posição do ultimo que ele
//achar do que foi passado nos parenteses, se não tiver, retorna "-1"
console.log(nome.lastIndexOf("o"));

//O "localeCompare" serve para comparar strings, se forem
//iguais, ele retorna true, se não, retorna false
console.log(nome.localeCompare(nome2));