"use strict";

/* 
 *  Praticando Symbol
 */

//Criando a classe jogador
class Jogador{
    //Passando o nome do jogador
    constructor(nome){
        this.nome = nome;
        this.id = Symbol();
        //Gerando um id único para cada jogador
    }
}

//Array que armazena os jogadores criados, pode ter jogador com o mesmo nome, porque o Symbol gera id unicos para cada
let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1")];

//Pegando o primeiro jogador e colocando em "s1"
// let s1 = jogadores[0].id;

//Percorrendo o array e filtrando os jogadores
// jogadores = jogadores.filter((j) => {
//     return j.id != s1; 
//     //Vai retornar todos os jogadores que são diferentes do "s1"
//     //então não vai retornar o jogador "s1", que é o primeiro
// });

// // Percorrendo o array e filtrando os jogadores
// jogadores = jogadores.filter((j) => {
//     return j.nome != "j1"; 
//     //Vai retornar todos os jogadores que são diferentes do nome "j1"
//     //então não vai retornar os jogadores com o nome "j1"
// });

let s = [];//Array que armazena o simbolo dos jogadores 

// Percorrendo o array e filtrando os jogadores
let s_jogadores = jogadores.filter((j) => {
    return j.nome == "j1"; 
    //Vai retornar todos os jogadores que tem o nome "j1", então
    //não vai retornar os jogadores com o nome diferente "j1"
});

//Percorrendo a variável "s_jogadores" e armazenando no array "s"
s = s_jogadores.map((j) => {
    return j.id;//e retornando o id dos jogadores filtrados
});

let removeJogadores = jogadores.filter((j) => {
    let encontrado = false;//Iniciando a variável com false

    // Vamos percorrer todos os IDs que queremos remover (armazenados em "s")
    for(let simb of s){
        // Se o ID do jogador atual for igual a algum dos IDs da lista "s"
        if(j.id === simb){
            // Marcamos como encontrado (ou seja, esse jogador deve ser removido)
            encontrado = true;
            // Já achamos o ID na lista, então não precisamos continuar o loop
            break;
        }
    }

    // Se encontrado for true, ou seja, o jogador está na lista "s", então retornamos false (ele será removido)
    // Se encontrado for false, ou seja, ele NÃO está na lista "s", então retornamos true (ele será mantido)
    return !encontrado;
});

console.log(removeJogadores);

console.log(jogadores)
console.log(s_jogadores);
console.log(s);