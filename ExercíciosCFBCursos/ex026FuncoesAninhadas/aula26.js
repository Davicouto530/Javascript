"use strict"

/**
 * Funções Aninhadas
 */

// Função anônima com parâmetro "rest", usando Arrow Function
const soma = (...valores) => {
    
    // Função interna que recebe um array de valores e calcula a soma
    const somar = val => {
        let res = 0; // Inicializa a variável que armazenara a soma
        
        // Percorre todos os valores do array e soma cada um a variável "res"
        for(let v of val){
            res += v;
        }
        
        return res; // Retorna a soma total
    };

    return somar(valores); // Chama a função interna passando os valores e retorna o resultado
};

// Chama a função "soma" com os números 10, 5 e 15, exibindo o resultado no console
console.log(soma(10,5,15)); 

