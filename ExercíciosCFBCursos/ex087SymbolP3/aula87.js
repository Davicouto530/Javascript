"use strict";

/* 
 *  Symbol
 */

// Aqui a gente está criando 3 "nomes secretos" (chamados de Symbols).
// Cada um tem uma descrição, mas cada símbolo é único e diferente, mesmo se tiver o mesmo nome.
const nome = Symbol("nome");
const numero = Symbol("numero");
const corUniforme = Symbol("cor do uniforme");

// Aqui estamos fazendo um "jogador", que é tipo um bonequinho com um nome normal.
const jogador = {
    nome: "j1" // esse é o nome que todo mundo consegue ver
}

// Agora a gente dá um número ao jogador, mas usando o nome secreto.
// É como escrever algo num caderno invisível que só quem tem o símbolo consegue ver.
jogador[numero] = 10;

// Aqui a gente também dá uma cor de uniforme usando outro nome secreto.
jogador[corUniforme] = "amarelo";

// Esse for vai mostrar só as partes visíveis do jogador.
// Como os nomes secretos são invisíveis, eles não aparecem aqui.
for (let p in jogador) {
    console.log(p); // vai mostrar só "nome"
}

console.log(jogador); 
console.log(jogador.nome); 
console.log(jogador[numero]);
console.log(jogador[corUniforme]); 

// Aqui mostramos a descrição do primeiro nome secreto
console.log(nome.description);