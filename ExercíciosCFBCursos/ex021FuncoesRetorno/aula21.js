"use strict"

/**
 * Funções com retorno
 */

function canal(){
    let n1 = 10;
    let n2 = 2;
    let res = n1 * n2;

    if(res % 2 == 0){
        return "PAR";
    }else {
        return "ÍMPAR";
        //No "return", coloca o resultado final da função
        //que é o que vai retonar quando for chamada.
        //Só pode ser retornado um dos dois, não pode ser
        //retornado mais de um "return" da função.
    }

};

//Amazenando a função em uma variável
let res = canal();

//Quando for chamar a função, chama pelo nome
//da variável que a função está sendo armazenada
console.log(res);
