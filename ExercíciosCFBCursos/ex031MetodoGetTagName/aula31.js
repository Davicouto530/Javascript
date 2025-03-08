"use strict"

/**
* Método getElementByTagName
*/

let colecaoHTML = document.getElementsByTagName("div");
//Pega todos os elementos da tag "div" do HTML

colecaoHTML = [...colecaoHTML];
//Fazendo um array e um spread com os elementos "div" que estão na variável
//"colecaoHTML" para poder trabalhar com cada um individualmente

//Percorrendo cada elemento do "colecaoHTML"
colecaoHTML.map((e) => {
    e.innerHTML = 'Davi';//E mudando o que está escrito
});

console.log(colecaoHTML);
