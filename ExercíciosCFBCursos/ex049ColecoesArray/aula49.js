"use strict";

/*
 * Coleções Array
 */

//Pegando a tag do HTML pelo ID
const caixa = document.querySelector("#caixa");

//Criando o array que vai dentro do array "cursos"
let cores = ["Azul","Verde","Vermelho",["claro","escuro","médio"]];

//Criando o Array
let cursos = ["HTML","CSS","Javascript",cores];

//Primeiro entrou em "cores", e dentro de cores o indice da cor que você quer
//mostrar, e o terceiro indice, é o array de dentro do array "cores"
console.log(cursos[3][3][2]);

cursos.push("PHP");//Adiciona um elemento no final do array
cursos.unshift("C++");//Adiciona um elemento no inico do array
cursos.pop()//Remove o último elemento do array
cursos.shift()//Remove o primeiro elemento do array

//Percorrendo o array 
cursos.map((el) => {
    // Criando uma tag "p" no html
    let p = document.createElement("p");
    p.innerHTML = el;//Atribuindo o valor do array na tag "p"
    caixa.appendChild(p);//Colocando a tag "p" dentro da tag com id "caixa"
});


