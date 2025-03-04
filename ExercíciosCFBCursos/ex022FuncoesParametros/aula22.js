"use strict"

/**
 * Funções com paramêtros
 */
//Passando "v" como parametro da função
function adicionar(v){
    valor += v;
    //Somando e atribuindo a variável "valor" de fora
};

let valor = 0;
console.log(valor);//Exibindo o primeiro valor

adicionar(10);//Passando "10" para a variável de parametro da função
console.log(valor);//Exibindo depois ja ter atribuido o valor a variável

adicionar(5);//Passando "5" para a variável de parametro, que sempre
//vai somando e atribuindo a variável "valor"
console.log(valor);

//------------------------------------------

const valor_padrao = 0;//Definindo um valor que não vai ser mudado

//Passando parametros para a função, e inicializando
//ele com o valor da constante "valor_padrao"
function soma(n1 = valor_padrao, n2 = valor_padrao){
    let soma = n1 + n2;
    return soma;
};

//Armazenando a chamada da função, e passando valores 
//para os parametros da função, para fazer a soma
let res = soma(10,10);

console.log(res);