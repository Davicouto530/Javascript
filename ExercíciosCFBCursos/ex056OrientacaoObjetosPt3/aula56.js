"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 */

// Define uma classe chamada "Pessoa"
class Pessoa { 
    constructor(pnome, pidade) { 
        // O constructor é chamado automaticamente ao criar um novo objeto
        this.nome = pnome; // Armazena o nome da pessoa
        this.idade = pidade; // Armazena a idade da pessoa
    }

    // Métodos "get" retornam os valores das propriedades do objeto
    getNome() {
        return this.nome; // Retorna o nome da pessoa
    }
    getIdade() {
        return this.idade; // Retorna a idade da pessoa
    }
}

// Array para armazenar objetos da classe Pessoa
let pessoas = [];

// Seleciona o botão e a área onde os resultados serão exibidos
const btnAdd = document.querySelector("#btn_add");
const res = document.querySelector(".res");

// Função para atualizar a exibição das pessoas cadastradas
const addPessoa = () => {
    res.innerHTML = ''; // Limpa o conteúdo da div antes de atualizar

    // Percorre o array de pessoas e cria elementos na tela
    pessoas.map((el) => {
        const div = document.createElement("div"); // Cria uma div para cada pessoa
        div.setAttribute("class", "pessoa"); // Adiciona uma classe CSS à div
        div.innerHTML = `Nome: ${el.getNome()} </br> Idade: ${el.getIdade()}`; // Define o conteúdo da div
        res.appendChild(div); // Adiciona a div à área de resultados
    });
}

// Adiciona um evento de clique ao botão
btnAdd.addEventListener("click", (evt) => {
    // Obtém os valores digitados nos campos de nome e idade
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");

    // Cria um novo objeto Pessoa e adiciona ao array
    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);

    // Limpa os campos de entrada e coloca o foco no campo de nome
    nome.value = '';
    idade.value = '';
    nome.focus();

    // Atualiza a lista de pessoas exibidas na tela
    addPessoa();
});
