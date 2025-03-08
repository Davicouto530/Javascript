"use strict"

/**
* Método getElementByClassName
*/

//Pega todas as tags que tem a class "curso", e transformando em array com spread
const cursosTodos = [...document.getElementsByClassName("curso")];

const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];

//Vai pegar só o elemento que está na primeira posição
const cursoEspecial = document.getElementsByClassName("curso")[0];
console.log(cursoEspecial)

//Vai percorrer todos os elementos do "cursosTodos"
cursosTodos.map((el) => {
    el.classList.add("destaque");
    //O "classList" e o ".add" serve para adicionar uma 
    //nova classe nesses elementos do "cursosTodos"
});

console.log(cursosTodos);



