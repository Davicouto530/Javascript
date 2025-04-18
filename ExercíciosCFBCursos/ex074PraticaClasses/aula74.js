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
let numBola = 0;//Contagem de bolas

//Classe que vai criar as bolinhas e movimentação 
class Bola {
    constructor(arrayBolas, palco) {
        //Definindo tamanhos diferentes para a bolinha
        this.tam = Math.floor(Math.random() * 15) + 10;

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
        this.dirx = (Math.random() * 10) > 5 ? 1 : -1;
        this.diry = (Math.random() * 10) > 5 ? 1 : -1;

        this.palco = palco;
        this.arrayBolas = arrayBolas;

        //Definindo um id diferente para cada bola
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000);

        this.desenhar();
        this.controle = setInterval(this.controlar, 10);
        this.eu = document.getElementById(this.id);
        numBola++;
        num_objetos.innerHTML = numBola;
    }

    //Função para saber a posição que esta a bola no array
    minhaPos = () => {
        return this.arrayBolas.indexOf(this);
        //Retornando a posição da bola no array
    }

    //Função para remover a bola
    remover = () => {
        clearInterval(this.controle);
        bolas = bolas.filter((b) => {
            if (b.id != this.id) {
                return b;
            }
        })
        this.eu.remove();
        numBola--;
        num_objetos.innerHTML = numBola;
    }

    //Função que vai desenhar a bola
    desenhar = () => {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);//Criando a bola dinamicamente
        div.setAttribute("class", "bola");//e adicionando id, class e estilo dinamico
        div.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        this.palco.appendChild(div);
    }

    //Função para verificar se a bola encostou nas bordas
    controle_bordas = () => {
        //Se for verdadeiro, tem que mudar a direção da bola
        if (this.px + this.tam >= larguraPalco){
            //Se chegar no limite da largura do palco, manda a bolinha voltar pro sentido contrario
            this.dirx = -1;
        }else if(this.px <= 0){
            this.dirx = 1;
        }

        if (this.py + this.tam >= alturaPalco){
            //Se chegar no limite da altura do palco, manda a bolinha voltar pro sentido contrario
            this.diry = -1;
        }else if(this.py <= 0){
            this.diry = 1;
        }
    }

    //Função para controlar a bola
    controlar = () => {
        this.controle_bordas();
        this.px += this.dirx * this.velx;//Calcula a nova posição x e y
        this.py += this.diry * this.vely;
        this.eu.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);

        //Se largura e altura for maior que o palco, remove
        if ((this.px > larguraPalco) || (this.py > alturaPalco)) {
            this.remover();
        }
    }
}

//Toda vez que redimensionar a janela, executa a função
window.addEventListener("resize", (evt) => {
    //Pegando a largura e altura da janela
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

//Quando clicar no botão, cria a quantidade de bolas colocada no input
btn_add.addEventListener("click", (evt) => {
    //Pegando o valor de bolinhas que quer ser colocadas
    const qtde = txt_qtde.value;
    for (let i = 0; i < qtde; i++) {
        //Cria uma nova bola no objeto, e armazena no array 
        bolas.push(new Bola(bolas, palco));
    }
});

btn_remover.addEventListener("click", (evt) => {
    //Vai percorrer o array que as bolinhas vai ta 
    //armazenadas e remover todas as bolinhas
    bolas.map((b) => {
        //Remover a bolinha
        b.remove();
    })
});