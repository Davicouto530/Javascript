"use strict"

/**
 * Relação dos elementos DOM pt1
 */

// Seleciona o elemento com ID "caixa1"
const caixa1 = document.querySelector("#caixa1");

// Seleciona todos os elementos com a classe "curso" e transforma em um array
const btn_c = [...document.querySelectorAll(".curso")];

console.log(btn_c[0].getRootNode()); // Retorna o nó raiz do elemento (geralmente "document")
console.log(btn_c[0].ownerDocument); // Retorna o documento ao qual o elemento pertence

console.log(caixa1.children[3]); // Retorna o 4º filho de "caixa1" (índice começa em 0)
console.log(caixa1.firstElementChild); // Retorna o primeiro filho de "caixa1"
console.log(caixa1.lastElementChild); // Retorna o último filho de "caixa1"
console.log(caixa1.children); // Retorna todos os filhos de "caixa1" como uma coleção HTML

