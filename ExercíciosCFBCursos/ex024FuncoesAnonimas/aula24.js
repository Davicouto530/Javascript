"use strict"

/**
 * Funções anônimas
 */

//Função anonima, é quando uma função é armazenada dentro 
//de uma variável, e não precisa dar um nome para ela
let func = function(n1,n2){ 
    return n1 + n2;
};
//Quando for chamar a função, tem que chamar pelo 
//nome da variável que a função está armazenada
console.log(func(4,5));

// Cria uma função anônima usando o construtor "Function"
// "Function" deve ser escrito com "F" maiúsculo.
// Os parâmetros e o corpo da função devem ser passados como strings e dentro dos parênteses.
let f = new Function("v1", "v2", "return v1 + v2"); 

console.log(f(5, 2)); // Chama a função passando 5 e 2 como argumentos e imprime o resultado (7)