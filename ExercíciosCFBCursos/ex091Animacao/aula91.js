"use strict";

/* 
 *  Animação
 */

const carro = document.getElementById("carro");
const btn_esquerda = document.getElementById("btn_esquerda");
const btn_direita = document.getElementById("btn_direita");

//Função que prepara o carro pra se mexer na tela
const init = () => {
    //Tô falando pro carro que ele pode se mover, e tô colocando ele bem no comecinho (lado esquerdo)
    carro.style = "position:relative;left:0px";
}

btn_esquerda.addEventListener("click", () => {
    //Quando clicar no botão da esquerda, eu olho onde o carro tá, transformo isso
    //em número inteiro, e tiro 10 pra ele ir pra trás (mais pra esquerda)
    carro.style.left = parseInt(carro.style.left) - 10 + "px";
});

btn_direita.addEventListener("click", () => {
    //Quando clicar no botão da direita, eu olho onde o carro tá, transformo isso
    //em número inteiro, e somo 10 pra ele ir pra frente (mais pra direitaLLLL)
    carro.style.left = parseInt(carro.style.left) + 10 +"px";

    //Jeito 2 de fazer---------
    //Olho onde o carro tá agora, e transformo em número interio e jogo na variável "pos"
    // let pos = parseInt(carro.style.left)
    // pos += 10; //Somando 10 pra ele andar pra frente (mais pra direita)
    // carro.style = `position:relative;left:${pos}px`;//Coloco o novo lugar do carro quando clicar no botão
    // console.log(pos); 
});

//Quando a página abrir, já chama a função que coloca o carro no lugar certinho pra começar
window.onload = init;
// window.addEventListener("load", init());