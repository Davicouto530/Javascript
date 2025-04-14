"use strict"; 

/* 
 * Math
 */

const mat = document.getElementById("mat");

//O "random" gera números aleatórios, se colocar um  
//número do lado ele vai gerar números entre 0 e 9
// mat.innerHTML = Math.random()*10;

//Vai gerar um número aleatorio entra 0 e 9, e vai 
//arredondar para um número inteiro com o "floor"
mat.innerHTML = Math.floor(Math.random()*10);

//Vai gerar um número aleatorio, mas com o round 
//vai arredondar e pode gerar número entre 0 e 10
// Math.round(Math.random()*10)

//O "sqrt" vai retornar a raiz quadrada do numero de dentro
// Math.sqrt(81)

//O "pow" vai fazer a potenciação, passa a base e o expoente
// Math.pow(10,2)

