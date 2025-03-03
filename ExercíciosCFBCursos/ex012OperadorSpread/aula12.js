"use strict"

/**
 * Operador Spread
 */

//Exemplo de como usar o spread usando o HTML

const objs1 = document.getElementsByTagName("div")  
// Seleciona todas as <div> da página e retorna um HTMLCollection (parece um array, mas não é).

const objs2 = [...document.getElementsByTagName("div")]  
// O spread (`...`) separa os elementos de objs1 e os coloca dentro de um array real.
// Agora objs2 pode usar métodos como forEach, map, etc.

objs2.forEach(element => {
    element.innerHTML = 'Curso'
})
// Como objs2 agora é um array, podemos percorrer cada <div> e modificar o conteúdo.

objs2. // Aqui podemos acessar funções de array que objs1 (HTMLCollection) não tem.

console.log(objs1)  
// Exibe o HTMLCollection original (não pode usar métodos de array).

console.log(objs2)  
// Exibe o array real criado com spread (pode usar métodos de array).

//________________________________________________________________

//Exemplo de como usar o spread
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}  
// Função que recebe 3 valores e retorna a soma deles.

let valores = [1, 5, 4]  
// Array com 3 números.

console.log(soma(...valores))  
// O spread (`...valores`) separa os elementos do array e os passa como argumentos individuais.
// É o mesmo que chamar soma(1, 5, 4).
// Sem spread, precisaríamos passar os valores um por um.

