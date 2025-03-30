"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 */

class Carro { // Define uma classe chamada "Carro"
    constructor(pnome, ptipo) {
        this.nome = pnome; // Define a propriedade "nome" do carro

        // Define o tipo e a velocidade máxima do carro com base no valor de "ptipo"
        if (ptipo == 1) {
            this.tipo = "Esportivo";
            this.velmax = 300;
        } else if (ptipo == 2) {
            this.tipo = "Utilitário";
            this.velmax = 100;
        } else if (ptipo == 3) {
            this.tipo = "Passeio";
            this.velmax = 160;
        } else {
            this.tipo = "Militar";
            this.velmax = 180;
        }
    }

    // Métodos "get" retornam os valores das propriedades do objeto
    getNome() {
        return this.nome;
    }
    getTipo() {
        return this.tipo;
    }
    getVelMax() {
        return this.velmax;
    }
    getInfo() {
        return [this.nome, this.tipo, this.velmax]; // Retorna um array com todas as informações do carro
    }

    // Métodos "set" permitem alterar os valores das propriedades do objeto
    setNome(nome) {
        this.nome = nome;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setVelMax(velmax) {
        this.velmax = velmax;
    }

    // Método para exibir as informações do carro no console
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo do carro: ${this.tipo}`);
        console.log(`Velocidade máxima: ${this.velmax}`);
        console.log("--------------------------------");
    }
}

// Criando objetos da classe Carro usando "new"
let c1 = new Carro("Rapidão", 1); // Tipo 1: Esportivo (velocidade máxima 300)
let c2 = new Carro("Super luxo", 2); // Tipo 2: Utilitário (velocidade máxima 100)
let c3 = new Carro("Bombadão", 4); // Tipo 4: Militar (velocidade máxima 180)
let c4 = new Carro("Carrego tudo", 3); // Tipo 3: Passeio (velocidade máxima 160)

// Modifica o nome e a velocidade máxima do carro c1
c1.setNome("Super veloz");
c1.setVelMax(500);

// Exibe as informações do carro c1
c1.info();

// Exibe as informações do carro c2 (está comentado, então não será executado)
// c2.info();

// Exibe as informações do carro c1 como um array (está comentado, então não será executado)
// console.log(c1.getInfo());
