//Importando o objeto contato do módulo "contatos"
import c from './contatos.js';

const lsitaContatos = document.getElementById("listaContatos");
const btn_gravar = document.getElementById("btn_gravar");

btn_gravar.addEventListener("click", (evt) => {
    //Objeto que pega os valores digitados nos inputs
    const cont = {
        nome: document.getElementById("f_nome").value,
        telefone: document.getElementById("f_telefone").value,
        email: document.getElementById("f_email").value
    }

    //Chamando o nome dado pro módulo "c", ponto"." o 
    //método que a quer executar quando clicar no botão,
    //e passando os parametros, "novoContato" e "destinoDOM"
    c.addContato(cont, lsitaContatos);

    //Método que exibe todos os contatos
    console.log(c.getTodosContatos());
})