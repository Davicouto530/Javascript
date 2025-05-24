/*
 * Fetch lendo arquivos
 * Lê um arquivo externo, converte em JSON e exibe dados no console
 */

// Pega o elemento do HTML com id "texto" (no caso aqui não está sendo usado)
const texto = document.getElementById("texto");

// Define o arquivo que será lido
const endpoint = "texto.txt";

// Faz a requisição para buscar o arquivo
fetch(endpoint)
  // Quando o arquivo chegar, converte ele para texto
  .then(res => res.text())
  // Depois que o texto chega, executa essa função
  .then(res => {
    // Converte o texto (que está no formato JSON) para um objeto
    res = JSON.parse(res)
    
    // Mostra no console o valor da chave "canal"
    console.log(res.canal)
    
    // Mostra no console o valor da chave "curso"
    console.log(res.curso)

    // Mostra na tag do html o valor da chave "curso"
    texto.innerHTML = res.curso 
  })