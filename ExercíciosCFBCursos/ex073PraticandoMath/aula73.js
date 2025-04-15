"use strict"; 

/* 
 * Praticando Math
 */

const olhos = document.getElementById("olho_e");

let posicaoX_mouse = 0;
let posicaoY_mouse = 0;

window.addEventListener("mousemove", (evt) => {
    posicaoX_mouse = evt.clientX;
    posicaoY_mouse = evt.clientY;

    const rotacao = Math.atan2(posicaoY_mouse, posicaoX_mouse) * 180 / Math.PI;

    olhos.style.transform = "rotate("+rotacao+"deg)"
});
