"use strict";

/* 
 * Abstract
 */

// A classe "abstract" não pode ser instanciada, ela só serve 
//de base para outras classes, para usar como herança.

//Classe abstract
class CarroPadrao {
    constructor() {
        //Verificando se foi criado algum objeto com a classe "CarroPadrao"
        if (this.constructor == CarroPadrao) {
            throw new TypeError("Está classe não pode ser instânciada");
            //Se foi, vai da escrito esse erro
        }

        //Colocando como regra que todas as classes que recebe a classe "CarroPadrao"
        //tem que ter o método ligar nelas
        if (this.ligar === undefined) {
            throw new TypeError("É obrigatório implementar o método ligar");
        }

        //Colocando mais um método obrigatório
        if (this.desligar === undefined) {
            throw new TypeError("É obrigatório implementar o método desligar");
        }

        this.portas = 4;
        this.rodas = 4;//Criando propiedades padrao
        this.ligado = false;
    }
}

class Carro extends CarroPadrao {
    constructor(nome, velMax) {
        super();
        this.nome = nome;
        this.velMax = velMax;
    }

    info() {
        // Exibe informações do carro no console.
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.rodas);
        console.log(this.portas);
        console.log(this.ligado);
        console.log("------------------");
    }

    //Obrigatório chamar esses métodos
    ligar() {
        this.ligado = true;
    }
    desligar() { 
        this.deligado = false; 
    }
}

const c1 = new Carro("Civic G9", 200); 

// Exibe as informações já com as propriedades da classe abstract
c1.info();
