// Classe que cria a caixa de mensagem
class Cxmsg {
    // Propriedades estáticas da classe (valem para qualquer chamada dela)
    static cor = "#888"; // Cor padrão da caixa
    static destino = null; // Local onde a caixa será adicionada (body)
    static divmsg = null; // Div principal da caixa (container que cobre a tela)
    static tipo = null; // Tipo da caixa ("ok" ou "sn")
    static comando_sn = null; // Função que será executada se clicar em "Sim"
    static textos = []; // Textos dos botões (ex: ["Sim", "Não"])

    // Método que exibe a caixa de mensagem na tela
    static mostrar = (config, titulo, texto) => {
        this.cor = config.cor; // Define a cor da caixa
        this.tipo = config.tipo; // Define o tipo da caixa
        this.textos = config.textos; // Define os textos dos botões
        this.comando_sn = () => { config.comando_sn() }; // Define o comando que será executado se clicar em "Sim"
        this.destino = document.body; // Define o destino como o body
        this.titulo = titulo; // Define o título da caixa
        this.texto = texto; // Define o texto da caixa

        // Cria a div de fundo escuro que cobre toda a tela
        this.divmsg = document.createElement("div");

        // Cria a string de estilos para a div de fundo
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

        // Define o ID e os estilos da div de fundo
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo_divmsg);

        // Adiciona a div de fundo no topo do body
        this.destino.prepend(this.divmsg);

        // Cria a área da caixa (área que contém o título, texto e rodapé)
        const estilo_areaCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: flex-start;" +
            "flex-direction: column;" +
            "width: 300px;";

        const areaCxmsg = document.createElement("div"); // Cria a div da área da caixa
        areaCxmsg.setAttribute("style", estilo_areaCxmsg); // Aplica os estilos
        this.divmsg.appendChild(areaCxmsg); // Adiciona na div de fundo

        // Cria o cabeçalho (título) da caixa
        const estilo_tituloCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 5px;" +
            "border-radius: 5px 5px 0px 0px;";

        const tituloCxmsg = document.createElement("div"); // Cria a div do cabeçalho
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg); // Define os estilos
        tituloCxmsg.innerHTML = this.titulo; // Define o texto do título
        areaCxmsg.appendChild(tituloCxmsg); // Adiciona no container da caixa

        // Cria o corpo da caixa (conteúdo de texto)
        const estilo_corpoCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #eee;" +
            "color: #000;" +
            "padding: 30px 5px;";

        const corpoCxmsg = document.createElement("div"); // Cria a div do corpo
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg); // Aplica os estilos
        corpoCxmsg.innerHTML = this.texto; // Insere o texto
        areaCxmsg.appendChild(corpoCxmsg); // Adiciona no container da caixa

        // Cria o rodapé da caixa (onde vão os botões)
        const estilo_rodapeCxmsg =
            "display: flex;" +
            "justify-content: space-around;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #ccc;" +
            "color: #000;" +
            "padding: 5px;" +
            "border-radius: 0px 0px 5px 5px;";

        const rodapeCxmsg = document.createElement("div"); // Cria a div do rodapé
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg); // Aplica os estilos
        areaCxmsg.appendChild(rodapeCxmsg); // Adiciona no container da caixa

        // Cria os estilos que serão aplicados aos botões
        const estilo_botaoCxmsg =
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 10px 50px;" +
            "border-radius: 5px;" +
            "cursor: pointer;" +
            "text-transform: uppercase;";

        // Verifica se o tipo é "ok"
        if (this.tipo == "ok") {
            const btn_ok = document.createElement("button"); // Cria o botão OK
            btn_ok.setAttribute("style", estilo_botaoCxmsg); // Aplica os estilos
            btn_ok.innerHTML = "ok"; // Define o texto do botão

            // Adiciona o evento de clique no botão OK
            btn_ok.addEventListener("click", (evt) => {
                this.ocultar(); // Ao clicar, fecha a caixa
            });

            rodapeCxmsg.appendChild(btn_ok); // Adiciona o botão no rodapé

        // Se o tipo for "sn" (sim/não)
        } else if (this.tipo == "sn") {
            const btn_sim = document.createElement("button"); // Cria o botão SIM
            btn_sim.setAttribute("style", estilo_botaoCxmsg); // Aplica os estilos
            btn_sim.innerHTML = this.textos[0]; // Define o texto do botão (ex: "Sim")

            // Evento de clique no botão SIM
            btn_sim.addEventListener("click", (evt) => {
                this.comando_sn(); // Executa o comando configurado
                this.ocultar(); // Fecha a caixa
            });

            rodapeCxmsg.appendChild(btn_sim); // Adiciona o botão SIM no rodapé

            const btn_nao = document.createElement("button"); // Cria o botão NÃO
            btn_nao.setAttribute("style", estilo_botaoCxmsg); // Aplica os estilos
            btn_nao.innerHTML = this.textos[1]; // Define o texto do botão (ex: "Não")

            // Evento de clique no botão NÃO
            btn_nao.addEventListener("click", (evt) => {
                this.ocultar(); // Apenas fecha a caixa
            });

            rodapeCxmsg.appendChild(btn_nao); // Adiciona o botão NÃO no rodapé
        }
    }

    // Método que fecha a caixa de mensagem
    static ocultar = () => {
        this.divmsg.remove(); // Remove a div principal da tela
    }
}

// Exporta a classe para ser utilizada em outros arquivos JavaScript
export { Cxmsg };
