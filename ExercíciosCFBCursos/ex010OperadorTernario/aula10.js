"use strict"

/**
 * Operador ternário
 * 
 */

let num = 11

//0 = False
//1 = True
//Operador de negação para inverter o valor, vai fazer a conta de "num % 2", se o resto for "0", vai da "IMPAR", se der "1", vai da "PAR", porque ta invertendo no começo
let res = (!(num % 2) ? "PAR" : "IMPAR")

//Teste lógico ? se verdadeiro : se falso

console.log(res)

//Outro exemplo

let n1 = 10
let n2 = 20

//Se "n1" for maior que "n2", vai imprimir "Verdadeiro", se nao, vai imprimir "Falso"
let res2 = (n1 > n2 ? "Verdadeiro" : "Falso")
console.log(res2)

//Outro exemplo

let st = "A"

//Se "st" for igual a "A", vai imprimir "Ativo", se nao, vai imprimir "Inativo"
let res3 = (st == "A" ? "Ativo" : "Inativo")
console.log(res3)