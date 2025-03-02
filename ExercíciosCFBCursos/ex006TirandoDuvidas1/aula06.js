"use strict"

/**
 * 
 */

let n1 = 1
let n2 = "1"

console.log(n1 === n2) //Três iguais "===" compara o valor e o tipo

//Criando um objeto com o mesmo valor para comparar
let v1 = {nome:"Bruno"}
let v2 = {nome:"Bruno"}

console.log(v1 === v2)//Mesmo sendo igual, vai da "false", porque cada um ta armazenado em uma posição diferente

//_________________________________________________________________________________________________________________

//Entrada de dados no Javascript:
//Entrada de dados somente pelo "prompt"
//Ou pelo "DOM" que vem do HTML

let nome = prompt("Digite o seu nome")

console.log(nome)

//_________________________________________________________________________________________________________________

//Identificando qual dispositivo está sendo usado:

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/Iphone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerray/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else {
    console.log("PC")
}

//_________________________________________________________________________________________________________________

//Nomenclatura e escopo de variáveis:

let nome2 = "bruno" //Variável Global

{
    let siglacurso="JS" //Variável local
    console.log(siglacurso)
}

const curso = () => {
    let curso = "Javascript"
    console.log(curso)
}

curso()

