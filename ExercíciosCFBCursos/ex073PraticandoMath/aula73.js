"use strict";

/* 
 * Praticando Math
 */

const olhos = document.getElementById("olho_e"); 

let posicaoX_mouse = 0;
let posicaoY_mouse = 0;
// Cria variáveis para armazenar a posição do mouse na tela.

window.addEventListener("mousemove", (evt) => {
    // Detecta o movimento do mouse na janela.

    posicaoX_mouse = evt.clientX;
    posicaoY_mouse = evt.clientY;
    // Atualiza as variáveis com a posição atual do mouse.

    const rotacao = Math.atan2(posicaoY_mouse, posicaoX_mouse) * 180 / Math.PI;
    // Calcula o ângulo entre o centro da tela e a posição do mouse usando trigonometria.

    olhos.style.transform = "rotate("+rotacao+"deg)";
    // Gira o "olho" para seguir a direção do mouse.
});
