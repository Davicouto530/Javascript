"use strict"; 

/*
 * Polimorfismo
 */

// Polimorfismo é quando dois métodos tem o mesmo nome mas fazem coisas diferentes.

class Carro {
    constructor(tipoCarro, estagioTubro) {
        this.turbo = new Turbo(estagioTubro); 
        // Cria um objeto Turbo com base no estágio escolhido.

        // Define o tipo de carro e sua velocidade base.
        if (tipoCarro == 1) {
            this.velMax = 120;
            this.nome = "Normal";
        } else if (tipoCarro == 2) {
            this.velMax = 160;
            this.nome = "Esportivo";
        } else if (tipoCarro == 3) {
            this.velMax = 200;
            this.nome = "Super esportivo";
        }

        this.velMax += this.turbo.potencia; 
        // Soma a potência do turbo à velocidade máxima.
    }

    info() {
        // Exibe informações do carro no console.
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log("------------------");
    }
}

class Turbo {
    constructor(estagio) {
        // Define a potência do turbo com base no estágio.
        if (estagio == 0) {
            this.potencia = 0;
        } else if (estagio == 1) {
            this.potencia = 50;
        } else if (estagio == 2) {
            this.potencia = 75;
        } else if (estagio == 3) {
            this.potencia = 100;
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTubro) {
        super(4, estagioTubro); 
        // Chama o construtor da classe Carro com tipo 4 (mesmo que não esteja definido lá).
        this.tipoInfo = 0; 
        // Define se vai usar o info padrão ou especial.
        this.velMax = 300 + this.turbo.potencia; 
        // Redefine a velocidade máxima do carro especial.
        this.nome = "Carro Especial"; 
        // Define o nome específico do carro.
    }

    info() {
        // Polimorfismo: mesmo nome de método, comportamento diferente.
        if (this.tipoInfo == 1) {
            super.info(); 
            // Usa o método info da classe pai (Carro).
        } else {
            // Exibe info personalizada do CarroEspecial.
            console.log(`Nome: ${this.nome}`);
            console.log(`Valocidade Máxima: ${this.velMax}`);
            console.log(`Turbo adicionado: ${this.turbo.potencia}`);
            console.log("------------------");
        }
    }
}

// Cria três carros com diferentes configurações:
const c1 = new Carro(1, 0); // Carro Normal sem turbo
const c2 = new Carro(1, 1); // Carro Normal com turbo estágio 1
const c3 = new CarroEspecial(3); // Carro Especial com turbo estágio 3

// Exibe as informações de cada carro:
c1.info();
c2.info();
c3.info();
