/*
 * Fetch para APIs
 */

// Define o endereço (URL) da API que será acessada
const endpoint = "https://cfef0b50-44bb-43f8-869c-830f89898c0a-00-1etfegedw0eju.kirk.replit.dev/";

// Faz uma requisição HTTP para a URL usando o método fetch
fetch(endpoint)
  // Quando a resposta chegar, converte ela para JSON (um formato de objeto)
  .then(res => res.json())
  // Depois que os dados forem convertidos, mostra eles no console
  .then(dados => {
    console.log(dados);
  });


