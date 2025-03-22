"use strict"

/**
 * Método Every para array
 */

//O método "every" 

//Pegando todas as tags do HTML pelo ID
const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [21, 25, 19, 20, 15, 18, 22];

//Colocando os elementos do array dentro da tag "p" do HTML
p_array.innerHTML = "[" + elementos_array + "]";

//Colocando um evento de clique no botão, que quando clicar vai
//verificar se todos os números do array é igual a condição
btnVerificar.addEventListener("click", (evt) => {

    //O "every" serve para percorrer o array e ver se a 
    // condição do "return" é verdadeira ou falsa
    const ret = elementos_array.every((e, i) => {
        if(e < 18){
            resultado.innerHTML = `Array não conforme na posição ${i}`;
            //Se for menor que 18, coloca isso na tag de resultado 
            //mostrando a posição do que está menor que 18
        }
        return e >= 18;
        //Colocando a condição que todos os números do 
        //array tem que ser maior ou igual a 18
    });

    //Verificando se o every é verdadeiro ou falso
    if(ret){
        //Se for verdadeiro, coloca isso na tag de resultado
        resultado.innerHTML = "OK";
    }
    console.log(ret)
});


