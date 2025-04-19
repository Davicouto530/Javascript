"use strict"; 

/* 
 *  Métodos Objetos literais
 */

const objetos = document.getElementById("objetos");

//Criando um objeto base
const computador = {
    cpu: "",
    ram: "",
    ssd: "",
    //Criando um método para exibir todas as propriedades
    info:function(){
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`SSD: ${this.ssd}`);
    }
}

computador.placaVideo="rtx1650";

//Deletando uma propriedade do objeto
delete(computador.ssd);

//Clonando o objeto computador
const c1 = Object.assign({}, computador);
c1.info();

//criando um novo objeto
const c2 = Object.create(computador);
c2.cpu = "i9";//Definindo o que vai dentro das
c2.ram = "64gb";//propriedades do objeto base
c2.ssd = "1tb";
c2.info();

//Mesclando os objetos
const o1 = {obj1: "1"}
const o2 = {obj2: "2"}
const o3 = {obj3: "3"}
const o4 = Object.assign(o1,o2,o3);
console.log(o4);