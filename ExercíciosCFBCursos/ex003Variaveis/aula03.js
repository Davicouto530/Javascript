"use strict"

const curso="Javascript" //A "const" é uma variável, mas não pode ser mudado o valor atribuido nela
console.log(curso)

var nome = "Bruno"//Usando "var", a variévl vai está acessível em qualquer parte do código
console.log(nome)
nome = 10
console.log(nome)
//O Javascript faz a conversão de tipo automaticamente

function teste() {
    let idade = 19//Usando "let", só pode acessar a variável dentro do bloco que foi criado
    if (true) {
        console.log("Dentro do IF do teste " + idade)
    }

    console.log("Dentro do teste " + idade)
}

teste()

console.log("Fora do teste" + idade)
//Nao da para acessar a variável fora do bloco


