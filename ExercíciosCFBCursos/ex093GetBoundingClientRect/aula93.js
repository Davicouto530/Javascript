"use strict";

/* 
 *  Função GetBoundingClientRect 
 * getBoundingClientRect() retorna um objeto com a posição (x, y)
 * e o tamanho (largura e altura) de um elemento na tela, em pixels.
 */

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

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