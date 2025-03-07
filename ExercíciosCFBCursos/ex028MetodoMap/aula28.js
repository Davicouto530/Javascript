"use strict"

/**
 * Método Map
 */

//O Map, tem a funcionalidade de percorrer Array, coleções sem interromper. 
//Usasse o Map quando precisar trabalhar elemento por elemento de uma coleção.

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React'];

//O primeiro parâmetro "elemento" serve para pegar cada elemento do array a cada iteração.
//O segunda parâmetro "indice", serve para mostrar a posição de cada elemento do array.
cursos.map((elemento, indice) => {
    console.log(`Curso: ${elemento} - Posição do curso: ${indice}`);
});

//__________________________________________
//Outro exemplo usando o HTML

let elem = document.getElementsByTagName("div");//Pegando todas as tags "div" do HTML

elem = [...elem];//Fazendo um array das tags e tornando cada elemento individual 
// com o spread(...) para poder manipular no "map"

console.log(elem);

//Percorrendo cada elemento do array e a sua posição
elem.map((e,i) => {
    e.innerHTML = "CFB Cursos";
    //E mudando o que está escrito dentro das "div"
});

//__________________________________________
//Outro exemplo 

const el = document.getElementsByTagName("div");//Pegando todas as tags "div" do HTML
const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML);//Vai retornar o que está escrito dentro de cada "div", que está armazenada na constante "el"
console.log(val);

//__________________________________________
//Outro exemplo 

const converterInt = (e) => parseInt(e);
//Recebe um valor, e esse valor recebido é passado para a função e é convertido para inteiro

let num = ['1', '2', '3', '4', '5'].map(converterInt);
//O "map" vai percorrer todo o array e ir convertendo os número para inteiros
console.log(num);

const dobrar = (e) => e * 2;//Recebe o valor, e dobra o valor dele
let num2 = ['1', '2', '3', '4', '5'].map(dobrar);//Percorre cada elemento e multiplica por 2
console.log(num2);

