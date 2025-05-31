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
        console.log(this.texto); // Por enquanto, só exibe o texto no console
    }

    // Método para ocultar a caixa (ainda vazio)
    ocultar = () => {
        // Código para remover ou esconder a caixa será colocado aqui futuramente
    }
}
