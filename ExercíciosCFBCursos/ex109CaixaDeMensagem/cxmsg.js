// Classe que vai criar a caixa de mensagem
class Cxmsg {
    // Propriedades da classe
    titulo = null; // Título da caixa
    texto = null; // Texto que vai ser exibido
    cor = null; // Cor da caixa
    destino = null; // Onde a caixa vai ser exibida na página 
    divmsg = null; // Elemento da caixa 

    // Método construtor, que pega as configurações do objeto literal
    constructor(config) {
        this.titulo = config.titulo; // Recebe o título passado no config
        this.texto = config.texto; // Recebe o texto passado no config
        this.cor = config.cor; // Recebe a cor passada no config
        this.destino = document.body; // Define que o destino é o body da página
    }

    // Método para exibir a caixa de mensagem
    mostrar = () => {
        this.divmsg = document.createElement("div");
        const estilo_divmsg =
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "position: absolute;" +
            "top: 0px;" +
            "left: 0px;" +
            "width: 100%;" +
            "height: 100vh;" +
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: flex-start;" +
            "flex-direction: column;" +
            "width: 300px;"
        const areaCxmsg = document.createElement("div");
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px"
        const tituloCxmsg = document.createElement("div");
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)
    }

    // Método para ocultar a caixa (ainda vazio)
    ocultar = () => {
        // Código para remover ou esconder a caixa será colocado aqui futuramente
    }
}
