"use strict"

/**
 * Método Find para array
 */

//O método "find" serve para pesquisar os elementos em um array
//ele retorna o elemento do array

//Pegando todas as tags do HTML pelo ID
const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = [10,5,8,2,9,15,20];

//Colocando os elementos do array dentro da tag "p" do HTML
p_array.innerHTML = "["+elementos_array+"]";

//Colocando um evento de clique no botão, que quando clicar vai
//pesquisar o número dentro do array pelo "find"
btnPesquisar.addEventListener("click", (evt) => {
    //Dentro do "find" cria uma função para pesquisar
    const ret = elementos_array.find((e,i) => {
        //Verificando se o elemento do array é igual o   
        //que foi digitado na caixa de pesquisa
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            //Se o número pesquisado for igual do array, escreve isso na tag "resultado"
            resultado.innerHTML = `Valor encontrado ${e} na posição ${i+1} do array`;
        }else {
            //Se o número pesquisado não for igual a nenhum do array, escreve isso na tag "resultado"
            resultado.innerHTML = `Valor não encontrado`;
        }
    });
    console.log(ret)
})

