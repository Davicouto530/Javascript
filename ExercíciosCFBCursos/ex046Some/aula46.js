"use strict"

/**
 * Método Some para array
 */

//O método some, vai retornar verdadeiro, quando pelo menos um dos 
//valores do array ser igual ao valor que estiver sendo pesquisado

//Pegando todas as tags do HTML pelo ID
const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [16, 12, 10, 17, 15, 13, 11];

//Colocando os elementos do array dentro da tag "p" do HTML
p_array.innerHTML = "[" + elementos_array + "]";

//Colocando um evento de clique no botão, que quando clicar vai verificar
//se pelo menos um dos elementos do array é de acordo com a condição
btnVerificar.addEventListener("click", (evt) => {

    //O "some" serve para verificar se pelo menos um dos elementos do
    //array é igual a condição passada, se for, vai da verdadeiro e a msg
    const ret = elementos_array.some((e, i) => {
        if (e < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i}`;
            //Se for menor que 18, coloca isso na tag de resultado 
            //mostrando a posição do que está menor que 18
        }
        return e >= 18;
        //Colocando a condição que pelo menos um do 
        //array tem que ser maior ou igual a 18
    });

    //Verificando se pelo menos um do "some" é verdadeiro ou falso
    if (ret) {
        //Se for verdadeiro, coloca isso na tag de resultado
        resultado.innerHTML = "OK";
    }
    console.log(ret)
});


