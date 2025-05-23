/*
 * Gráficos com CHARTJS
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
// let intervalo = setInterval(obterDados, 3000);

// ---------- Método POST ----------

// Cria um objeto com os dados que serão enviados
let dados = {
  nome: "Bruno",
  canal: "CFBCursos",
  curso: "Javascript"
}

// Configurações da requisição, define o método como POST e transforma os dados em JSON
let cabecalho = {
  method: "POST",
  body: JSON.stringify(dados) // Converte o objeto para uma string JSON
}

// Função que envia os dados para o servidor
const gravarDados = () => {
  // URL do servidor (endpoint) que vai receber os dados
  const endpoint = "https://cfef0b50-44bb-43f8-869c-830f89898c0a-00-1etfegedw0eju.kirk.replit.dev/"

  // Faz a requisição usando fetch, enviando o cabeçalho com os dados
  fetch(endpoint, cabecalho)
    // Quando a resposta chegar, converte ela para JSON
    .then(res => res.json())
    // Depois, mostra o retorno no console
    .then(ret => {
      console.log(ret)
    })
}
