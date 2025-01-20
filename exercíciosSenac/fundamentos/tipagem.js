/**
 * Tipagem Dinâmica - JS 
 */

// Declaração de variáveis

let nome, idade, peso, altura, vip, imc, fmc

nome = "Davi do couto"
idade = 17
peso = 56
altura = 1.71
vip = true

// A linha abaixo verifica o tipo da variável
console.log(typeof(idade))

console.clear()


// Processamento

// imc (Indíce de massa corporal) | fcm (frequência cardiaca máxima)
imc = peso / (altura * altura)
fmc = 208 - (0.7 * idade)

// Saída

console.log("Ficha do aluno")
console.log("________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FCM: ${fmc} bpm`)