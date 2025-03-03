"use strict"

/**
 * While
 */

let n = 10

//Enquanto a condição de dentro for verdadeira, vai executar
while(n > 0){
    console.log(n)
    n--
}

let num = 5 //Número que vai ser fatorado
let fat = 1 //Variável acumuladora.

//Enquanto "num" for mais ou igual a "1"
while(num >= 1){
    fat *= num //Vai multiplicar e atribuir
    num-- //decrementando até chegar no "1"
}
console.log(fat)


