// Classe que cria a caixa de mensagem
class Cxmsg {
    // Propriedades da classe
    static cor = "#888"; // Cor da caixa
    static destino = null; // Local onde a caixa será exibida (body)
    static divmsg = null; // Elemento principal da caixa

    // Método que recebe um objeto de configuração (apenas cor no momento)
    static config = (config) => {
        this.cor = config.cor; // Define a cor recebida
    }

    // Método que mostra a caixa de mensagem na tela
    static mostrar = (titulo, texto) => {
        this.destino = document.body; // Define que o destino é o body da página
        this.titulo = titulo; // Define o título da caixa
        this.texto = texto; // Define o texto da caixa

        // Cria a div que vai cobrir a tela (fundo escuro)
        this.divmsg = document.createElement("div");

        // Estilo da div que cobre a tela
        const estilo_divmsg =
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "position: absolute;" +
            "top: 0px;" +
            "left: 0px;" +
            "width: 100%;" +
            "height: 100vh;" +
            "background-color: rgba(0,0,0,0.7);";

        // Adiciona id e estilo na div de fundo
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo_divmsg);

        // Insere a div de fundo no topo do body
        this.destino.prepend(this.divmsg);

        // Estilo da área da caixa (onde fica título, corpo e rodapé)
        const estilo_areaCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: flex-start;" +
            "flex-direction: column;" +
            "width: 300px;";

        // Cria a div da área da caixa
        const areaCxmsg = document.createElement("div");

        // Aplica o estilo na área da caixa
        areaCxmsg.setAttribute("style", estilo_areaCxmsg);

        // Adiciona a área da caixa dentro da div de fundo
        this.divmsg.appendChild(areaCxmsg);

        // Estilo do cabeçalho (título) da caixa
        const estilo_tituloCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 5px;" +
            "border-radius: 5px 5px 0px 0px;";

        // Cria a div do cabeçalho
        const tituloCxmsg = document.createElement("div");

        // Adiciona o estilo e o texto do título
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.titulo;

        // Adiciona o cabeçalho na área da caixa
        areaCxmsg.appendChild(tituloCxmsg);

        // Estilo do corpo (texto) da caixa
        const estilo_corpoCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #eee;" +
            "color: #000;" +
            "padding: 30px 5px;";

        // Cria a div do corpo (conteúdo de texto)
        const corpoCxmsg = document.createElement("div");

        // Adiciona o estilo e o texto do corpo
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg);
        corpoCxmsg.innerHTML = this.texto;

        // Adiciona o corpo na área da caixa
        areaCxmsg.appendChild(corpoCxmsg);

        // Estilo do rodapé da caixa (onde vai o botão)
        const estilo_rodapeCxmsg =
            "display: flex;" +
            "justify-content: space-around;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #ccc;" +
            "color: #000;" +
            "padding: 5px;" +
            "border-radius: 0px 0px 5px 5px;";

        // Cria a div do rodapé
        const rodapeCxmsg = document.createElement("div");

        // Adiciona o estilo no rodapé
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg);

        // Adiciona o rodapé na área da caixa
        areaCxmsg.appendChild(rodapeCxmsg);

        // Estilo do botão "OK"
        const estilo_botaoCxmsg =
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 10px 50px;" +
            "border-radius: 5px;" +
            "cursor: pointer;" +
            "text-transform: uppercase;";

        // Cria o botão OK
        const btn_ok = document.createElement("button");

        // Adiciona o estilo e o texto do botão
        btn_ok.setAttribute("style", estilo_botaoCxmsg);
        btn_ok.innerHTML = "ok";

        // Adiciona evento de clique no botão OK para fechar a caixa
        btn_ok.addEventListener("click", (evt) => {
            this.ocultar();
        });

        // Adiciona o botão no rodapé
        rodapeCxmsg.appendChild(btn_ok);
    }

    // Método que fecha a caixa, removendo ela da tela
    static ocultar = () => {
        this.divmsg.remove();
    }
}

// Exporta a classe para ser usada em outros arquivos
export { Cxmsg };
