"use strict";

/**
 * Método Reduce para array
 * 
 *  O método reduce percorre um array e reduz seus elementos a um único valor.
 * - Recebe uma função com: acumulador, elemento atual, índice [opcional] e array [opcional].
 */

// Pegando elementos do HTML pelo ID para manipulação depois.
const p_array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

// Definindo um array de números e três arrays vazios para armazenar valores intermediários.
const elementos_array = [1, 2, 3, 4, 5];
let ant = [];
let atu = [];
let dobro = [];

// Exibindo os elementos do array na tela dentro da tag <p> com id "array".
p_array.innerHTML = "[" + elementos_array + "]";

// Adicionando um evento ao botão para executar o código quando for clicado.
btnReduzir.addEventListener("click", (evt) => {
    // Usando o método reduce para somar os elementos do array e armazenar valores intermediários.
    resultado.innerHTML = elementos_array.reduce((anterior, atual, indice) => {
        ant.push(anterior); // Guarda o valor acumulado (anterior).
        atu.push(atual); // Guarda o valor atual do loop.
        dobro.push(atual * 2); // Guarda o dobro do valor atual.

        return atual + anterior; // Soma o valor atual ao acumulado.
    });

    // Exibindo os valores intermediários na tela após a redução.
    resultado.innerHTML += `</br> Valor anterior ${ant} </br> Valor atual ${atu} </br> Dobro ${dobro}`;
});
