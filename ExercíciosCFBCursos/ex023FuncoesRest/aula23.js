"use strict"

/**
 * Funções com parâmetros REST
 */

// Não precisa definir parâmetros fixos, porque o operador "rest" (`...`) 
// permite passar quantos valores quiser como argumento.
function soma(...valores) {  
    let tam = valores.length; // O ".length" pega o número total de valores passados como argumento
    let res = 0; // Inicializa a variável que armazenara a soma

    // Percorre todos os elementos do array "valores"
    for (let v of valores) {  
        // A cada iteração, "v" recebe um elemento do array "valores".
        // Primeiro "v" será 10, depois 5, depois 4, depois 6, e assim por diante.
        res += v; // Soma o valor atual de "v" a variável "res"
    }

    return res; // Retorna a soma total
};

console.log(soma(10, 5, 4, 6)); // Chama a função e passa valores para o parametro "rest"
