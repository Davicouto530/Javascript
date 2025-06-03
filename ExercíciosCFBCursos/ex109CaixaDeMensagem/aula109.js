// Importa a classe Cxmsg do arquivo cxmsg.js
import { Cxmsg } from "./cxmsg.js";

// Cria um objeto com a configuração da caixa de mensagem
const config = {
    cor: "#48f" // Define a cor da caixa (nesse caso, azul)
}

// Aplica a configuração na classe Cxmsg
Cxmsg.config(config);

// (Comentado) Esse seria o jeito de instanciar, mas como os métodos são estáticos, não precisa
// const cxmsg = new Cxmsg(config);

// Pega os botões pelo ID no HTML
const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg");
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2");

// Adiciona evento de clique no primeiro botão
btn_mostrarcxmsg.addEventListener("click", () => {
    // Quando clicar, exibe uma caixa com esse título e texto
    Cxmsg.mostrar("CFB Cursos", "Curso de Javascript");
});

// Adiciona evento de clique no segundo botão
btn_mostrarcxmsg2.addEventListener("click", () => {
    // Quando clicar, exibe uma caixa com esse título e texto
    Cxmsg.mostrar("Youtube", "Canal com cursos de programação");
});
