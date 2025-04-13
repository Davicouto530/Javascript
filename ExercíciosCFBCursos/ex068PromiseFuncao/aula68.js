"use strict"; 

/* 
 * Promise dentro de Função
 * Serve para lidar com algo que vai acontecer no futuro, como esperar um tempo ou uma resposta.
 */

const numero = document.getElementById("numero");
const btn_promessa = document.getElementById("btn_promessa");

// Adiciona um evento de clique no botão
btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."; // Mostra mensagem temporária enquanto espera

    // Chama a função que retorna a Promise
    promessa()

    // Se a Promise for resolvida com sucesso, executa o .then()
    .then((retorno) => {
        numero.innerHTML = retorno; // Mostra a mensagem de sucesso
        numero.classList.remove("erro"); // Remove a classe de erro (caso exista)
        numero.classList.add("ok"); // Adiciona a classe de sucesso
    })

    // Se a Promise for rejeitada, executa o .catch()
    .catch((retorno) => {
        numero.innerHTML = retorno; // Mostra a mensagem de erro
        numero.classList.add("erro"); // Adiciona a classe de erro
        numero.classList.remove("ok"); // Remove a classe de sucesso (caso exista)
    });
});

// Função que retorna uma Promise
const promessa = () => {
    // Criação de uma nova Promise
    let p = new Promise((resolve, reject) => {
        let resultado = true; // Define o "resultado" (troque para false para simular erro)
        let tempo = 3000; // Tempo de espera (3 segundos)

        // Espera o tempo definido, depois executa a verificação
        setTimeout(() => {
            if (resultado) {
                resolve("Deu tudo certo"); // Se resultado for true, chama resolve com sucesso
            } else {
                reject("Deu tudo errado"); // Se resultado for false, chama reject com erro
            }
        }, tempo);
    });

    return p; // Retorna a Promise criada
}

// Mensagem inicial antes de qualquer clique
numero.innerHTML = "Esperando...";
