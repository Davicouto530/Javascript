// Objeto de configuração da caixa de mensagem
const config = {
    cor: "#48f" // Cor da caixa
}

// Cria uma instância da classe Cxmsg usando as configurações acima
const cxmsg = new Cxmsg(config);

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg");
const btn_mostrarcxmsg2 = document.getElementById("btn_mostrarcxmsg2");

// Cria o evento de clique no botão
btn_mostrarcxmsg.addEventListener("click", () => {
    cxmsg.mostrar("CFB Cursos", "Curso de Javascript"); // Quando clicar, executa o método mostrar da classe
})

btn_mostrarcxmsg2.addEventListener("click", () => {
    cxmsg.mostrar("Youtube", "Canal com cursos de programação"); 
})
