/*
 * Fetch para APIs
 */

const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_pressao = document.getElementById("p_pressao");

// Função que armazena os dados obtidos da API
const obterDados = () => {
  // Define o endereço (URL) da API que será acessada, que gera número aleatórios
  const endpoint = "https://cfef0b50-44bb-43f8-869c-830f89898c0a-00-1etfegedw0eju.kirk.replit.dev/";

  // Faz uma requisição HTTP para a URL usando o método fetch
  fetch(endpoint)
    // Quando a resposta chegar, converte ela para JSON (um formato de objeto)
    .then(res => res.json())
    // Depois que os dados forem convertidos, mostra eles no console
    .then(dados => {
      console.log(dados)
      p_temp.innerHTML = "Temperatura: " + dados.temperatura // Colocando o valor na tag "p" no html
      p_nivel.innerHTML = "Nível: " + dados.nivel // Chama o objeto "nivel"
      p_pressao.innerHTML = "Pressão: " + dados.pressao
    });
}

// Colocando que a cada 3 segundos, vai chamar a função que obtém os dados da API
let intervalo = setInterval(obterDados, 3000);



