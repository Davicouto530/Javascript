"use strict"

/**
 * For
 */

//Até "i" ser menor que "10", vai incrementar e executar
for(let i = 0; i < 10; i++){
    console.log(i)
}//Vai executar até a condição ser falsa

//Vai executar até ser menor que 20
for(let x = 0; x < 20; x++){
    if(x % 2 == 0){
        //Vai fazer a conta, e se for igual a 0, vai mostrar falando que é PAR
        console.log(`${x} é PAR`)
    }else {
        //Se nao, vai mostrar falando que é ÍMPAR
        console.log(`${x} é ÍMPAR`)
    }
}