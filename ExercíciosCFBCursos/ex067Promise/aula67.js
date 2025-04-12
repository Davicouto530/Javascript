"use strict";

/* 
 * Promise
 * Serve para lidar com algo que vai acontecer no futuro, como esperar um tempo ou uma resposta.
 */

const numero = document.getElementById("numero");

// "resolve" é chamado se der certo, e "reject" se der errado
let promise = new Promise((resolve, reject) => {
    let resultado = true;
    let tempo = 3000; // Tempo que vira segundos que o setTimeout vai esperar

    // Depois de 3 segundos, ele verifica o valor de resultado
    setTimeout(() => {
        if (resultado) { // Se resultado for true
            resolve("Deu tudo certo"); // Chama resolve com a mensagem de sucesso
        } else {//se resultado for false
            reject("Deu tudo errado"); // Chama reject com a mensagem de erro
        }
    }, tempo);
});

// Se deu certo, .then() é executado
promise.then((retorno) => {
    numero.innerHTML = retorno; // Mostra a mensagem de sucesso
    numero.classList.remove("erro"); // Remove a classe "erro"
    numero.classList.add("ok"); // Adiciona a classe "ok"
});

// Se deu erro, .catch() é executado
promise.catch((retorno) => {
    numero.innerHTML = retorno; // Mostra a mensagem de erro
    numero.classList.add("erro"); // Adiciona a classe "erro"
    numero.classList.remove("ok"); // Remove a classe "ok"
});

// Mensagem inicial enquanto espera
numero.innerHTML = "Processando...";
