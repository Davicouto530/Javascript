"use strict";

/* 
 *  Animação 
 * Carro andando até o final só com o clique
 */

const carro = document.getElementById("carro");
const btn_parar = document.getElementById("btn_parar");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_direita = document.getElementById("btn_direita");

//Função que prepara o carro pra se mexer na tela
const init = () => {
    //Tô dizendo pro carro que ele pode se mover e coloco ele lá no comecinho, bem do lado esquerdo
    carro.style = "position:relative;left:0px";
}

let anima = null; //Isso aqui é tipo um controle remoto da animação, pra parar ou mudar quando quiser

//Função que faz o carro andar de pouquinho em pouquinho
const mover = (dir) => {
    //Pega onde o carro tá, soma ou diminui 10 (depende se vai pra esquerda ou direita)
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";

    //----------Jeito 2 de fazer com o "setTimeout"----------
    // anima = setTimeout(mover, 20, dir);
}

btn_parar.addEventListener("click", () => {
    //Se apertar o botão de parar, a gente desliga o carrinho
    clearInterval(anima);

    //----------Jeito 2 de fazer com o "setTimeout"---------
    // clearTimeout(anima); //Limpa o que tava acontecendo
});

btn_esquerda.addEventListener("click", () => {
    //Primeiro desliga qualquer movimento que tava acontecendo
    clearInterval(anima);
    //Agora fala pro carro começar a andar pra esquerda (por isso o -1)
    anima = setInterval(mover, 20, -1);

    //----------Jeito 2 de fazer com o "setTimeout"---------
    // clearTimeout(anima); //Limpa o que tava acontecendo
    //mover(-1); //Passando o parametro de "mover" que é pro "dir", e "-1" anda para esquerda
});

btn_direita.addEventListener("click", () => {
    //Desliga qualquer movimento que tava rolando
    clearInterval(anima);
    //Faz o carro andar pra direita (por isso o 1)
    anima = setInterval(mover, 20, 1);

    //----------Jeito 2 de fazer com o "setTimeout"---------
    // clearTimeout(anima); //Limpa o que tava acontecendo
    //mover(1); //Passando o parametro de "mover" que é pro "dir", e "1" anda para direita
});

//Quando a página abrir, já coloca o carro no lugar certinho pra começar a brincadeira
window.onload = init;
// window.addEventListener("load", init());