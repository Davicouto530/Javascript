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
//iguais, ele retorna 0zero, se não, retorna -1
console.log(nome.localeCompare(nome2));

//O "replace" serve para substitui as letras, primeiro a letra que você quer
//que seja troca na string, depois a letra que você quer colocar no lugar
console.log(nome.replace("b", "p"));

//O "search" ele vai pesquisar na string o que foi passado nos parenteses,
//e vai retornar a posição da primeira letra que ele achar da palavra
console.log(nome.search("Pinho"));

//O "slice" serve para cortar uma palavra da string, você indica o 
//indice da onde começa, e o indice da onde termina a palavra, 
//e só vai retornar a palavra cortada
console.log(nome.slice(6,11));

//O "split" serve para cortar, e fazer um array do que foi cortado. Aqui vai cortar
//aonde tem os espaços, e vai retornar cada palavra em cada posição no array
let arr_nome = nome.split(" ");
console.log(arr_nome);

//O "substring" serve para pegar uma palavra da string, indica a posição inicial,
//e no final, tem que indicar uma posição a mais para pegar a palavra toda
let parteString1 = nome.substring(0,5);
console.log(parteString1);

//O "substr" indica a posição inicial, e a partir da posição inicial indicada
//me retorne o tanto de caracteres para frente, no caso 5 posição para frente
let parteString2 = nome.substr(6,11);
console.log(parteString2);

//Deixa tudo maiúsculo
console.log(nome.toLocaleUpperCase());

//Deixa tudo minúsculo
console.log(nome.toLocaleUpperCase());

//Quando está trabalhando com string de classes, o "valueOf" 
//retorna somente o valor, sem estar dentro de um objeto
console.log(nome.valueOf());

let num = 10;
console.log(typeof(num.toString()));
//O "toString()" converte para um tipo string