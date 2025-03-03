"use strict"

/**
 * If e Else
 */

let num = 89

if(num > 10){
    console.log("Número maior que 10")
    if(num > 50){
        console.log("Número maior que 50")
    }
}else if(num > 5){
    console.log("Número está entre 6 e 10")
}else {
    console.log("Número menor ou igual a 5")
}

//Outro exemplo:
let energia = 100
let clima = 'sol'

if(energia > 70 && clima == 'sol'){
    console.log("Vou a praia")
}else {
    console.log("Vou ao cinema")
}

console.log("Fim do programa!")


