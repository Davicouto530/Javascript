"use strict"

/**
* Método querySelector - All
*/

//O "querySelectorAll()" vai pegar todas as "div" do HTML, e 
//pode pegar mais de uma tag de uma vez, vai pegar todos os "p" do HTML, 
//e tem que fazer o spread se quiser cada um individual
const query_divTodas = [...document.querySelectorAll("div,p")];
console.log(query_divTodas)

//Pega todas as "div" que tem class, se tiver "div" sem class, não pega
const query_divTodasClass = [...document.querySelectorAll("div[class]")];

//Pega todas as "div" que tem o "p" dentro
const query_divTodasP = [...document.querySelectorAll("div > p")];

//Se quiser pegar todas as tags que tem a mesma classe, é só colocar o ponto "."
//primeiro e o nome da classe que vai pega, e o "querySelectorAll", pega todas.
const query_cursosTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1")];

//Vai pegar todas as tags que tem a classe ".c2", e todas as tags "p" do HTML
const query_cursosC2 = [...document.querySelectorAll(".c2, p")];

console.log(query_cursosTodos);
console.log(query_cursosC2);

//O "querySelector()" ele só pega um do que você indicar no parenteses
//Pega pelo ID da tag, tem que ter o "#" para indicar que vai pegar um ID,
//e do lado coloca o nome do ID que tá na tag
const query_cursoEspecial = document.querySelector("#c1");
console.log(query_cursoEspecial);


