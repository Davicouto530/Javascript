"use strict";

/*
 * Coleções Set
 */

//A coleção Set não permite entrada duplicadas de valores.
//Por tanto, não terá elementos iguais na coleção set.

const caixa = document.querySelector("#caixa");

//Criando o "Set" e já adicionando elementos dentro do set
let musicas = new Set(["musica1", "musica boa", "musica10"]);

//Adicionando elementos por fora
musicas.add("musica muito legal");
musicas.add("musica1");
musicas.add("musica1");//Ele não permite elementos duplicados
musicas.add("musica10");

//Deleta dentro da coleção set
musicas.delete("musica1");

console.log(musicas);

//Percorrendo os elementos de dentro da coleção set
//e mostrando dentro da caixa no HTML
musicas.forEach((ele) => {
    caixa.innerHTML += `${ele} </br>`
});

for(let m of musicas){
    console.log(m)
}

