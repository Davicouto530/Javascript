"use strict"

/**
 * For - In - Of
 */

const objs = document.getElementsByTagName("div")

//O for "in" retorna as posições que estão os elementos
// que vai ser armazenado na variável "o"
for(let o in objs){
    console.log(o)
}

//O for "of" retorna escrito os elementos que estão dentro
// que vai ser armazenado na variável "o"
for(let o of objs){
    console.log(o.innerHTML = "Curso")
    //Alterando o que está escrito dentro dos elemento do "objs"
}

//____________________________________________________
let num = [10,20,30,40,50]

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}