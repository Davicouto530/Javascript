"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 * Membro Static
 */

//Criando a class "Npc"
class Npc {
    static alerta = false;
    constructor(energia){
        this.energia = energia;
    }
    info = function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`);
        console.log("----------------------------------");
    }
    static Alertar = function(){
        Npc.alerta = true;
    }
}

const npc1 = new Npc(100);
const npc2 = new Npc(120);

Npc.Alertar();

npc1.info();
npc2.info();