"use strict";

/*
 * Coleções Map
 */

//Pegando a tag do HTML pelo ID
const caixa = document.querySelector("#caixa");

//Criando a coleção Map e colocando na variável "mapa"
let mapa = new Map();

//"set" serve para adicionar um elemento na coleção.
//Primeiro o nome da chave "curso", depois o que vai dentro "JavaScript"
mapa.set("curso","JavaScript");
mapa.set(10,"CFB Cursos");
mapa.set(1,100);
mapa.set("canal",100);

//"delete" serve para deletar da coleção, coloca a chave do que vai ser deletado
mapa.delete("canal");

console.log(mapa);

let res
//"has" serve para ver se uma chave existe dentro da coleção
if(mapa.has("curso")){
    res = `A chave existe na coleção com o valor ${mapa.get("curso")}`;
}else {
    res = "A chave NÃO está na coleção";
}

//"size" serve para informar quantas coisas tem dentro da coleção
res += `</br> O tamanho da coleção é ${mapa.size}`;

//Colocando no html a resposta
caixa.innerHTML = res;

//"get" serve para obter o que está armazenado, e você indica a chave
//"curso" do que você quer obter dentro da coleção do map, vai da "JavaScript"
console.log(mapa.get("curso"));

//"forEach" serve para percorrer a coleção "map"
mapa.forEach((el) => {
    console.log(el);
});