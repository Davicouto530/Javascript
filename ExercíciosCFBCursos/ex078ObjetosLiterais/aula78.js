"use strict"; 

/* 
 *  Objetos literais
 */

const objetos = document.getElementById("objetos");

//Iniciando o objeto com "{}"
const computador = {
    cpu: "i9",//Criando propriedades do objeto
    ram: "16gb",
    ssd: "1tb",
    //Criando um método para exibir todas as propriedades
    info:function(){
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`SSD: ${this.ssd}`);
    }
}

//Adicionando mais propriedades no objeto
computador["monitor"]="22pol";
computador.placaVideo="rtx1650";

//Mostrando somente o valor de uma propriedade
console.log(computador["monitor"]);
console.log(computador.placaVideo);

//----------------------------------------------

//Criando um array de objetos
const computadores = [
    //Criando propriedades diferente para cada objeto
    {
        cpu: "i9",
        ram: "64gb",
        ssd: "1tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        ssd: "1tb"
    },
    {
        cpu: "i5",
        ram: "16gb",
        ssd: "1tb"
    }
]

//Percorrendo o array de objetos e exibindo  
//todas as suas propriedades
computadores.forEach((c) => {
    //Criando uma tag para cada objeto
    const div = document.createElement("div");
    //Colocando as suas respectivas informações na tag
    div.innerHTML = `${c.cpu} </br> ${c.ram} </br> ${c.ssd} </br>`;
    div.setAttribute("class","computador");
    objetos.appendChild(div);
})

// computador.info();

// //Convertendo o objeto em uma string para ser exibido
// objetos.innerHTML = JSON.stringify(computadores);
