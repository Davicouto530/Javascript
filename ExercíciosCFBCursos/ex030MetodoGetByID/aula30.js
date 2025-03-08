"use strict"

/**
* Método getElementById
*/

const dc1 = document.getElementById('c1');//Pega os elementos do HTML pelo ID
console.log(dc1);//Exibe o elemento
console.log(dc1.id);//Exibe só o ID do elemento
console.log(dc1.innerHTML);//Exibe só o que está escrito no elemento

dc1.innerHTML = "CFB Cursos";//Mudando o que está escrito dentro da "div" 

const dc2 = document.getElementById('c2');
const dc3 = document.getElementById('c3');
const dc4 = document.getElementById('c4');
const dc5 = document.getElementById('c5');
const dc6 = document.getElementById('c6');

//Não precisa do "spread", porque quando pega pelo id, já pega um de cada vez
const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6];
//Criando um array dos elementos pegos

//Os elementos de "arrayElementos", vai pra dentro de "d"
// for(let d of arrayElementos){
//     d.innerHTML = "CFB Cursos";
//     //Pegando todos os elementos do array que são as "div"
//     //e mudando o que está escrito dentro de cada uma
// };

//Quando precisar percorrer TODOS os elementos de 
//um array, o "map" é o melhor para isso
arrayElementos.map((e) => {
    e.innerHTML = "CFB Cursos";
    //Pegando todos os elementos do array que são as "div"
    //e mudando o que está escrito dentro de cada uma
});
