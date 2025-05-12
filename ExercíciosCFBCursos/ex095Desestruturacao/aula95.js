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

// Criando um array com números
let num2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// Temos mais números que variáveis: as três primeiras variáveis recebem os três primeiros valores
// O operador rest (...) pega os valores restantes e coloca todos no array 'd2'
let [a2, b2, c2, ...d2] = num2;

// Criando um objeto já com valores definidos
let obj = { nome: "Bruno", canal: "CFBCursos", curso: "Javascript" };
// Fazendo desestruturação de objeto: extrai apenas as propriedades 'nome' e 'canal'
let { nome, canal } = obj;

// Função que retorna um array com três cores
const cores = () => {
    return ["laranja", "rosa", "roxo", "branco"];
}
// Desestruturação parcial com array: pula o segundo valor usando a vírgula vazia
let [a3, b3, , c3] = cores();  // 'a3' = "laranja", 'b3' = "rosa", pula o terceiro, 'c3' = "branco"

// Criando uma string
let texto = "Curso de Javascript"; 
// Divide a string por espaço, transformando em array ["Curso", "de", "Javascript"]
// O operador spread (...) espalha cada palavra para dentro do array 'tex'
let [...tex] = texto.split(" ");