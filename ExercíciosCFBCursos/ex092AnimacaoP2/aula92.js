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
    carro.style = "position:relative;left:0px;width:100px";//E adicionando um tamanho para ele "width"

    //Variável que pega a largura máxima da janela, e subtrai com o tamaho do carro
    tamMax = window.innerWidth - parseInt(carro.style.width);
}

let anima = null; //Isso aqui é tipo um controle remoto da animação, pra parar ou mudar quando quiser
let tamMax = null;//Variável que está dentro da função "init", que pega a largura da tela

//Função que faz o carro andar de pouquinho em pouquinho
const mover = (dir) => {
    //Verificando quando o carro se move
    if (dir > 0) {
        // se "dir" for maior que 0zero, ta se movendo para a direita
        if (parseInt(carro.style.left) <= tamMax) {
            //verifica se carro é menor ou igual a "tamMax", se for, realiza o debaixo
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
            //Pega onde o carro tá, soma ou diminui 10 (depende se vai pra esquerda ou direita)
        }else {
            clearInterval(anima);
        }
    } else if (dir < 0) {
        // se "dir" for menor que 0zero, ta se movendo para a esquerda
        if (parseInt(carro.style.left) >= tamMax) {
            //verifica se carro é maior ou igual a "tamMax", se for, realiza o debaixo
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
            //Pega onde o carro tá, soma ou diminui 10 (depende se vai pra esquerda ou direita)
        }else {
            clearInterval(anima);
        }//Quando chegar no final, limpa o setInterval
    }
    console.log(tamMax);

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
window.addEventListener("load", init());
window.addEventListener("resize", () => {
    //Sempre que a tela for redimensionada, faz a função
    tamMax = window.innerWidth - parseInt(carro.style.width);
});

// window.onload = init; //Segundo jeito de executar a função quando abrir a página