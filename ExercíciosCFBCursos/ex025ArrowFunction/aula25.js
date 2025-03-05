"use strict"

/**
 * Arrow function
 */

//É um jeito simplificado de declarar uma função
//Dentro dos "()" coloca os parâmteros, e a "=>"
//Indica que os parâmteros vai para a função no "{}"
//E tem que ser colocada dentro de uma variável, igual função anônima
const soma = (v1, v2) => {return v1 + v2};
console.log(soma(10,5));

//Se for passar só com um parâmetro, a função
//não precisa de "return" e nem de "{}"
const nome = (n) => n;
console.log(nome("Davi"));

