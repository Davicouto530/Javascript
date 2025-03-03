"use strict"

/**
 * Soma -> +
 * Subtração -> -
 * Multiplicação -> *
 * Divisão -> /
 * Resto da divisão -> %
 * Incremento -> ++
 * Decremento -> -- 
 * Incremento atribuindo -> +=
 * Decremento atribuindo -> -=
 */

let num1=0,num2=0,res=0

num1 = 2
num2 = 15

num1++//Incrementando mais 1 na variável "num1" 
console.log(num1)

num2--//Decrementando 1 na variável "num2" 
console.log(num2)

res = (num1 + num2) * 2//Ordem de precedencia, o () indica qual vai ser feito primeiro

console.log(res)

console.log(num2 / num1)//Divisão
console.log(num2 % num1)//Resto da divisão

console.log(num1)
num1 += 5 //Atribuindo e somando na variável "num1"
console.log(num1)

console.log(num2)
num1 *= 5 //Atribuindo e multiplicando na variável "num2", pode fazer com todos os sinais de matemática
console.log(num2)


