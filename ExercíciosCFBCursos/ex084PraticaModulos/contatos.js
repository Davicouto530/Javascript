"use strict"; 

/* 
 *  Arquivo módulo de contatos
 */

//Importando o array "contatos" do módulo
import { contatos } from "./bancoContatos.js";

//Objeto que vai as informações
let contato = {
    //Método que vai retornar todos os contatos
    getTodosContatos:function(){
        return contatos;
    },

    //Método que vai retornar só um contato especifico
    getContato:function(ind_cont){
        return contatos[ind_cont];
    },

    //Método que vai adicionar o contato no banco de 
    //dados e no DOM, na lista de contatos no HTML
    addContato:function(novoContato, destinoDOM){
        //Pegando as informações que veio do input, e colocando no
        //objeto, pra do objeto ir pro array do módulo "bancoContatos"
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(cont)//Adicionando no array as informções

        //Criando o elemento que vai div que vai na div lista
        const div = document.createElement("div");
        div.setAttribute("class", "contato");

        //Criando o elemento "p" que vai receber o nome
        const p_nome = document.createElement("p");
        p_nome.innerHTML = novoContato.nome;

        //Criando o elemento "p" que vai receber o telefone
        const p_telefone = document.createElement("p");
        p_telefone.innerHTML = novoContato.telefone;

        //Criando o elemento "p" que vai receber o email
        const p_email = document.createElement("p");
        p_email.innerHTML = novoContato.email;
        
        //Adicionando os "p" com as informações na "div"
        div.appendChild(p_nome);
        div.appendChild(p_telefone);
        div.appendChild(p_email);

        //Adicionando a "div" na lista no HTML
        destinoDOM.appendChild(div);
    }
}

//Exportando as informções do objeto contatos 
//para o array que está no arquivo do módulo
export default contato



