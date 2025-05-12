"use strict";

/*
 * Desestruturação
 * 
 * Serve para extrair valores de arrays ou objetos e atribuí-los diretamente a variáveis,
 * de forma prática.
 */

// Criando variáveis que vão receber valores
let cor1, cor2, cor3, cor4;

// Atribuindo valores às variáveis acima por meio da desestruturação de um objeto
[{ cor1, cor2, cor3, cor4 } = { cor1: 'verde', cor2: 'amarelo', cor3: 'azul', cor4: 'branco' }];

/*
 * Desestruturação com array
 */

// Criando um array com números
let numeros = [10, 20, 30, 40];

// Atribuindo os valores do array às variáveis a, b, c e d
let [a, b, c, d] = numeros;

// Colocando só o primeiro número em uma variável, e definindo valor inicial 0 para as outras
let e, f, g;
// Atribuindo 10 à primeira variável (e) e 0 às outras (f e g), caso não sejam fornecidos
[e, f = 0, g = 0] = [10];

// Definindo valores para as variáveis
let h = 10;
let y = 20;
// Trocando os valores entre as variáveis h e y, h recebe o 
// valor de y, e y recebe o valor de h usando desestruturação
[h, y] = [y, h];

// Função que retorna um array com 4 valores
let num = () => {
    return [1, 2, 3, 4];
}

// Atribuindo os valores retornados pela função nas variáveis k, l, o e t
let [k, l, o, t] = num();
