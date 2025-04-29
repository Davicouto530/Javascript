"use strict";

/* 
 *  Funções para Strings ES6
 */

//Instanciando uma classe String com o valor "bruno"
let nome = new String("Bruno Pinho Campos");

//O "startsWith" verifica se a string começa com a palavra 
//colocada dentro dos parenteses, e retorna true, ou false
console.log(nome.startsWith("Pinho"));

//O "endsWith" verifica se a string termina com a palavra 
//colocada dentro dos parenteses, e retorna true, ou false
console.log(nome.endsWith("mpos"));

//O "includes" serve para verifica se em alguma parte da string tem  
//a palavra colocada dentro dos parenteses, retorna true, ou false
console.log(nome.includes("nh"));

//O "repeat" serve para repetir a string quantas
//vezes colocar dentro dos parenteses
console.log(nome.repeat(4));

//Mostra o código da palavra na posição 0
console.log(nome.charCodeAt(0));
//E o "fromCodePoint" espera o código da palavra, 
//que com o código ele mostra qual é a palavra
console.log(String.fromCodePoint(66));