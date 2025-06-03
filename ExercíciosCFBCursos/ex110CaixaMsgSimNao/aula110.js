// Importa a classe Cxmsg do arquivo cxmsg.js
import { Cxmsg } from "./cxmsg.js";

// Cria um objeto com as configurações da caixa de mensagem
const config = {
    cor: "#48f", // Define a cor da caixa (azul)
    tipo: "ok", // Tipo inicial da caixa ("ok")
    textos: ["SIM", "NÃO"], // Textos dos botões (usado se for tipo "sn")
    comando_sn: () => {} // Função que será executada quando clicar em "SIM"
}

// Função que será executada quando o usuário clicar no botão "SIM"
const fsim = () => {
    console.log("Botão SIM pressionado"); // Apenas exibe no console uma mensagem
}

//  Esse seria o jeito de instanciar, mas como os métodos são estáticos, não precisa
// const cxmsg = new Cxmsg(config);

// Seleciona os botões do HTML pelos seus IDs
const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg"); // Primeiro botão
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2"); // Segundo botão

// Adiciona um evento de clique no primeiro botão
btn_mostrarcxmsg.addEventListener("click", () => {
    // Define o tipo da caixa como "sn" (Sim/Não)
    config.tipo = "sn";

    // Associa a função que será executada se clicar no botão "SIM"
    config.comando_sn = () => { fsim() };

    // Chama o método estático mostrar da classe Cxmsg
    // Ele exibe a caixa com título "CFB Cursos" e texto "Curso de Javascript"
    Cxmsg.mostrar(config, "CFB Cursos", "Curso de Javascript");
});

// Adiciona um evento de clique no segundo botão
btn_mostrarcxmsg2.addEventListener("click", () => {
    // Define o tipo da caixa como "ok" (apenas um botão OK)
    config.tipo = "ok";

    // Exibe a caixa com título "Youtube" e texto "Canal com cursos de programação"
    Cxmsg.mostrar(config, "Youtube", "Canal com cursos de programação");
});