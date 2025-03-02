"use strict"

/**
 * Operadores Bitwise (bit a bit)
 * 
 * &  -> AND bit a bit (retorna 1 se ambos os bits forem 1)
 * |  -> OR bit a bit (retorna 1 se pelo menos um dos bits for 1)
 * ^  -> XOR bit a bit (retorna 1 se os bits forem diferentes)
 * ~  -> NOT bit a bit (inverte todos os bits)
 * << -> Deslocamento à esquerda (multiplica por 2^n)
 * >> -> Deslocamento à direita (divide por 2^n)
 */

let n1 = 10; // 1010 em binário
let n2 = 11; // 1011 em binário

let res = n1 & n2; // Faz um AND bit a bit: 1010 & 1011 = 1010 (10 em decimal)

console.log(res); // Saída: 10



