"use strict";

/* 
 * Praticando Classe
 */

const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtde = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

//Pegando a altura e largura da tela para quando diminuir
//a tela automaticamente diminuir as bolinhas 
let larguraPalco = palco.offsetWidth;
let alturaPalco = palco.offsetHeight;
let bolas = [];//Array para armazenar as bolas
let numBola = 0;

//Classe que vai criar as bolinhas e movimentação 
class Bola {
    constructor(arrayBolas, palco) {
        //Definindo tamanhos diferentes para a bolinha
        this.tam = Math.floor(Math.random() * 10) + 10;

        //Definindo cores diferentes para cada bolinha com "rgb"
        this.r = Math.floor(Math.random() * 255);
        this.g = Math.floor(Math.random() * 255);
        this.b = Math.floor(Math.random() * 255);

        //Definindo lugares diferentes aonde as bolinhas pode nascer
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam));

        //Definindo velocidades diferentes para cada bola
        this.velx = Math.floor(Math.random() * 2) + 0.5;
        this.vely = Math.floor(Math.random() * 2) + 0.5;

        //Definindo direções diferentes para cada bola
        this.dirx = (Math.random() * 10) > 5 ? 1 : 1;
        this.diry = (Math.random() * 10) > 5 ? 1 : 1;

        this.palco = palco;
        this.arrayBolas = arrayBolas;

        //Definindo um id diferente para cada bola
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000);

        this.desenhar();
        this.controle = setInterval(this.controlar,10);
        this.eu = document.getElementById(this.id);
    }

    //Função para saber a posição que esta a bola no array
    minhaPos = () => {

    }

    //Função para remover a bola
    remover = () => {

    }

    //Função que vai desenhar a bola
    desenhar = () => {

    }

    //Função para controlar a bola
    controlar = () => {

    }
}

//Toda vez que redimensionar a janela, executa a função
window.addEventListener("resize", (evt) => {
    //Pegando a largura e altura da janela
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

btn_add.addEventListener("click", (evt) => {
    //Pegando o valor de bolinhas que quer ser colocadas
    const qtde = txt_qtde.value;
    for (let i = 0; i < qtde; i++) {
        //Instanciar novas bolinhas
    }
});

btn_remover.addEventListener("click", (evt) => {
    //Vai percorrer o array que as bolinhas vai ta 
    //armazenadas e remover todas as bolinhas
    bolas.map((bol) => {
        //Remover a bolinha
    })
});