// Objeto de configuração da caixa de mensagem
const config = {
    titulo: "Teste", // Título da caixa
    texto: "CFB Cursos", // Texto que será exibido
    cor: "#48f" // Cor da caixa
}

// Cria uma instância da classe Cxmsg usando as configurações acima
const cxmsg = new Cxmsg(config);

const btn_mostrarcxmsg = document.getElementById("btn_mostrarcxmsg");

// Cria o evento de clique no botão
btn_mostrarcxmsg.addEventListener("click", () => {
    cxmsg.mostrar(); // Quando clicar, executa o método mostrar da classe
})
