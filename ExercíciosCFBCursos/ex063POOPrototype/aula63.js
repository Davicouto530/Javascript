"use strict";

/*
 * JSON (JavaScript Object Notation) é um formato usado para armazenar e 
 * Prototype
 */

//O prototype serve para adicionar um método ou uma propriedade em um objeto.

//Criando o objeto com engeria e disparos
const Nave = function(energia){
    this.energia = energia;
    this.disparos = 100;
}

const n1 = new Nave(200);

//Criando uma propriedade "vidas" dentro do "Nave"
Nave.prototype.vidas = 3;

//Criando um método dentro de "Nave"
Nave.prototype.disparar = function(){
    if(this.disparos > 0){//Se "disparos" for maior que zero
        this.disparos--;//Tira um de "disparos" quando chamar
    }
}

//Chamando o método "disparar", e tirando um de "disparos"
n1.disparar();
n1.disparar();
n1.disparar();

console.log(Nave);
console.log(n1);
console.log(n1.disparos);