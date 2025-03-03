"use strict"

/**
 * Switch Case
 */

let colocacao = 5

switch(colocacao){
    case 1:
        console.log("Primeiro lugar")
        break
    case 2:
        console.log("Segundo lugar lugar")
        break
    case 3:
        console.log("Terceiro lugar lugar")
        break
    case 4: case 5: case 6:
        console.log("Premio de participação") //Se for um desses 3 casos, vai entrar nesse bloco de códigos
        break 
    default:
        console.log("Não subiu ao podio")
        break
}