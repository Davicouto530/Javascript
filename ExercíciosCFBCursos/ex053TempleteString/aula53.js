"use strict";

/*
 * Templete String
 */

//O templete string 

const caixa = document.querySelector("#caixa");

const carros = ["Polo", "Golf GTI", "Civic G9", "Civic G10"];
let ul = `<ul>`;
carros.map((el) => {
    ul += `<li>${el}</li>`
});
ul += `</ul>`
caixa.innerHTML = ul;

const curso = "JavaScript";
const canal = "CFB Cursos";
// const frase = "Este é o curso de " + curso + " do canal " + canal; Jeito antigo de fazer
const frase = `Este é o curso de ${curso} do canal ${canal}`

// caixa.innerHTML = frase;