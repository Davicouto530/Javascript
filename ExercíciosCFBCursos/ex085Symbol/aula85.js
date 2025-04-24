"use strict";

/* 
 *  Função Symbol
 * A função Symbol é usada para criar identificadores únicos. 
 * Mesmo que dois símbolos tenham a mesma descrição, eles são diferentes entre si.
 * Symbols são úteis para criar propriedades privadas ou evitar conflitos em objetos.
 */

// Cria dois símbolos únicos e diferentes
const s1 = Symbol()
const s2 = Symbol()

// Cria dois símbolos que compartilham a mesma chave "Davi" na *Symbol registry*
// São iguais porque usam Symbol.for (registro global)
const s3 = Symbol.for("Davi")
const s4 = Symbol.for("Davi")

// Compara s1 e s2 – retorna false porque são símbolos únicos
console.log(s1 === s2)

// Compara s3 e s4 – retorna true porque foram criados com a mesma chave usando Symbol.for
console.log(s3 === s4)

// Obtém a chave associada ao símbolo s3 no registro global
console.log(Symbol.keyFor(s3))
