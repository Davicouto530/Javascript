"use strict"

/**
 * && -> E | Para da verdadeiro, os dois precisam ser verdadeiro
 * || -> OU | Se um for verdadeiro e o outro falso, vai da verdadeiro
 * ! -> NÃO | É uma inversão, se for verdadeiro e colocar o not "!", inverte para falso
 */

let n1,n2,n3,n4

n1 = 10
n2 = 5
n3 = 15
n4 = 2

//E
if(n1 > n2 && n3 > n4){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}

//OU
if(n1 > n2 || n4 > n3){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}

//NOT
if(!(n1 > n2) && (n3 > n4)){
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}

