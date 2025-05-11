"use strict";

/* 
 *  Função AccessKey 
 *  O "accessKey" serve para definir uma tecla de atalho que vai executar uma função
 *  Para executar a fução, tem que segurar a tecla "alt" e a tecla que você definir
 */

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

q1.accessKey = "b";//Definindo que quando clicar no "alt" + "b", vai executar a função do "q1"
q2.accessKey = "n";//Definindo que quando clicar no "alt" + "n", vai executar a função do "q2"

console.log(`Tecla de atalho do q1: ${q1.accessKey}`);//Exibindo quais são as teclas de atalho  
console.log(`Tecla de atalho do q2: ${q2.accessKey}`);

// Função que exibe as informações de posição e tamanho de um elemento na tela
const info = (el) => {
    let DOMRect_q = el.getBoundingClientRect(); // Pega as medidas e posição do elemento na tela
    posx.innerHTML = `posx: ${DOMRect_q.x}`; // Insere no texto a posição X do elemento
    posy.innerHTML = `posy: ${DOMRect_q.y.toFixed(0)}`; // Insere no texto a posição Y do elemento (arredondada)
    largura.innerHTML = `largura: ${DOMRect_q.width}`; // Insere no texto a largura do elemento
    altura.innerHTML = `altura: ${DOMRect_q.height}`; // Insere no texto a altura
    // do elemento
}

// Adiciona evento de clique no elemento q1
q1.addEventListener("click", () => {
    info(q1); // Mostra informações do q1 quando clicado
});

// Adiciona evento de clique no elemento q2
q2.addEventListener("click", () => {
    info(q2); // Mostra informações do q2 quando clicado
});