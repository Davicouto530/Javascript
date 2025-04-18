"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 *
 * O static é usado para criar propriedades e métodos que controlam
 * comportamentos gerais da classe, como um estado compartilhado entre todos
 * os objetos. No exemplo, "alerta" representa um estado global de alerta
 * que afeta todos os NPCs ao mesmo tempo.
 */

// Classe "Npc"
class Npc {
    static alerta = false; // Controla o estado de alerta de todos os NPCs

    constructor(energia){
        this.energia = energia; // Energia individual de cada NPC
    }

    //Método para exibir msg
    info = function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Alerta: ${Npc.alerta ? "Sim" : "Não"}`); // Mostra o estado de alerta global
        console.log("----------------------------------");
    }

    // Método estático que altera a propriedade "alerta"
    static Alertar = function(){
        Npc.alerta = true; // Ativa o alerta para todos os NPCs
    }
}

const npc1 = new Npc(100);
const npc2 = new Npc(120);

Npc.Alertar(); // Ativa o estado de alerta geral

npc1.info();
npc2.info();
