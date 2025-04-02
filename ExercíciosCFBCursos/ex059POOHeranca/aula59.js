"use strict";

/*
 * Programação Orientada a Objetos (POO) em JavaScript
 * Herança
 */

//Herança é quando você cria uma classe, e depois cria outra classe e 
//quer passar os elementos da primeira classe para a segunda classe

//Classe PAI
class Carro{
    //Define os elementos do objeto
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }
    //Método para ligar o carro
    ligar = function (){
        this.ligado = true;
    }
    //Método para desligar o carro
    desligar = function (){
        this.ligado = false;
    }
    //Método para mudar a cor do carro
    setCor = function(cor){
        this.cor = cor;
    }
}

//"extends" significa que a class "Miltar" vai herdar a class "Carro"
//e a class "Militar" passa a ter todos os elementos de dentro de "Carro"
class Militar extends Carro{//Classe FILHO
    constructor(nome,portas, blindagem, municao){
        super(nome,portas);//"super()" serve para indicar o que você quer pegar da classe pai
        this.blindagem = blindagem;
        this.municao = municao;//Adicionando novos elementos na classe filho
        this.setCor("Verde");//Mudando a cor do carro filho
    }
    //Método para atirar 
    atirar(){
        //Se munição for mais que zero, tira um
        if(this.municao > 0){
            this.municao--;
        }
    }
}

//Criando um objeto carro, com o nome e as portas
const c1 = new Carro("Carro normal", 4);
c1.ligar();
c1.setCor("Preto");

//Criando um objeto na classe filho, com nome, portas, blindagem e munição
const c2 = new Militar("Lutador",1,100,50);

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log(`----------------------------------`);

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
console.log(`----------------------------------`);
