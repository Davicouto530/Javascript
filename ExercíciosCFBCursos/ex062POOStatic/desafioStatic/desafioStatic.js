"use strict";

/*
 * Desafio static
 */

//Criando a classe
class contaBancaria{
    static totalContas = 0;//Método estático para contas

    //Construtor que recebe o saldo
    constructor(saldo){
        this.saldo = saldo;
        contaBancaria.totalContas += 1;//E atribui mais um no "static" a cada conta criada
    }

    //Método para exibir o total de contas do "static", que  
    //está sendo atribuido mais um a cada conta criada
    static verTotalContas = function(){
        console.log(`Total de contas criadas: ${contaBancaria.totalContas}`);
    }

    //Método que exibe o saldo
    verSaldo = function(){
        console.log(`Saldo: ${this.saldo}`);
    }
}

//Criando objetos
const conta1 = new contaBancaria(1000);
const conta2 = new contaBancaria(500);
const conta3 = new contaBancaria(1500);
const conta4 = new contaBancaria(50000);

//Exibindo saldo
conta1.verSaldo();
conta2.verSaldo();
conta3.verSaldo();
conta4.verSaldo();

//Exibindo total de contas
contaBancaria.verTotalContas();
