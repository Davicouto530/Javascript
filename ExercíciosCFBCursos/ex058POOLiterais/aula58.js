"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 * Objetos literais
 */

//Criando o pbjeto literal
const pessoa = {
    //Nome recebe "Bruno"
    nome:"Bruno",

    //Método para retornar o que está dentro de "nome"
    getNome: function(){
        return this.nome;
    },

    //Método para mudar o que está dentro de "nome"
    setNome: function(nome){
        this.nome = nome;
    }
}

//Colocando o objeto dentro dessas duas variáveis
const p2 = pessoa;
const p3 = pessoa;

p3.nome = "Cleison";//Primeiro jeito de mudar o que ta dentro
p2["nome"] = "Cleitinho";//Segundo jeito
pessoa.setNome("Davi");//Terceiro jeito

console.log(pessoa.nome);
console.log(p2.getNome());
console.log(p3.nome)

