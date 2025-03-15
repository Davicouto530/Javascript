"use strict"

/**
 * Relação dos elementos DOM pt2
 */

// Seleciona o elemento com ID "caixa1"
const caixa1 = document.querySelector("#caixa1");

// Seleciona todos os elementos com a classe "curso" e transforma em um array
const btn_c = [...document.querySelectorAll(".curso")];

console.log(caixa1.hasChildNodes()); // Verifica se "caixa1" tem filhos (retorna true ou false)
console.log(btn_c[0].hasChildNodes()); // Verifica se o primeiro item de "btn_c" tem filhos
console.log(btn_c[0].childNodes); // Retorna todos os nós filhos do primeiro item de "btn_c"

console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos"); 
// Verifica se o primeiro item de "btn_c" tem elementos filhos e exibe uma mensagem correspondente

console.log(caixa1.children[1].innerHTML = "TESTE"); 
// Altera o conteúdo do segundo filho de "caixa1" para "TESTE"

const c1_2 = document.querySelector("#c1_2"); // Seleciona o elemento com ID "c1_2"
console.log(c1_2.parentNode.parentNode.children[4]); 
// Navega até o avô de "c1_2" e seleciona seu quinto filho


