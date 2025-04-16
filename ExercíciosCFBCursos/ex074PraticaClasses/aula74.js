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