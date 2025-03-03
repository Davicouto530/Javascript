"use strict"

/**
 * For - In - Of
 */

const objs = document.getElementsByTagName("div")

//O for "in" retorna as posições que estão os elementos do "objs"
// que vai ser armazenado na variável "o"
for(let o in objs){
    console.log(o)
}

//O for "of" retorna escrito os elementos que estão dentro do "objs"
//que vai percorrer pela variável "o", e ser armazenado dentro dela
for(let o of objs){
    console.log(o.innerHTML = "Curso")
    //Alterando o que está escrito dentro dos elemento do "objs"
}

//____________________________________________________
let num = [10,20,30,40,50]

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

for(let y of num){
    console.log(y)
}

for(let y in num){
    console.log(y)
}