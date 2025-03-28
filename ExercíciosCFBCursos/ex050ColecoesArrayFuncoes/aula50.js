"use strict";

/*
 * Coleções Array com funções
 */

//Criando um array para armazenar valores que vai para as funções
let valores = [1,2,3,4,5];

//Criando um array que armazena funções
const op = [
    //Função de somar
    (val) => {
        let res = 0;
        for(let y of val){
            res += y;
        }
        return res;
    },
    //Função de multiplicar
    (val) => {
        let res = 1;
        for(let y of val){
            res *= y;
        }
        return res;
    },
    //Função para exibir todos os resultados
    (val) => {
        for(let y of val){
            console.log(y);
        }
    }
];

//Chamando a primeira função do array "op", que é do indice "0"
//e passando os valores que estão dentro do array "valores"
console.log(op[0](valores));