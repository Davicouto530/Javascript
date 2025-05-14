/*
 * Casos em que o ponto e vírgula são obrigatórios
 */

// Caso 1:
let i = null;
// Nesse exemplo, o "for" não tem um bloco de códigos que vai ser executado, ele vai percorrer,
// e só vai mostrar o resultado final "10", e nesse caso precisa de ponto e vírgula.
for (i = 0; i < 10; i++); 
console.log(i) // Só mostra o resultado final do for, que é "10"

// Caso 2:
// Ponto e vírgula é sempre obrigatório quando a próxima linha começar com "[ ou (", 
// então na linha decima antes de começar com um dos dois, tem que colocar ";"
let canal = "CFB Cursos";
let palavra = '';// Se não tiver o ponto e vírgula aqui, o debaixo não é executado e da erro
['J','a','v','a','s','c','r','i','p','t'].forEach((el) => {
    palavra += el; // Vai percorrer o array e formar a palavra de dentro do array
});
console.log(palavra);

// Caso 3 com "[]":
let n1 = [1,2]; // Criando dois arrays
let n2 = [3,4]; // Aqui tem que ter o ponto e vírgula para a linha debaixo ser executada
[n1,n2].map(valores => console.log(valores)); 
// Vai percorrer os dois arrays, e pegar os elemento de dentro dele e exibir no console

// Caso 4 com parenteses "()":
let j = null;
(j = 10); // Aqui tem que ter o ponto e vírgula para a linha debaixo ser executada
console.log(j);

// Caso 5 com desestruturação: 
let numeros = [10,20,30]; // Aqui tem que ter o ponto e vírgula para a linha debaixo ser executada
[n1,n2,n3] = numeros; // Ou outra forma de fazer, é só atribuir essa linha á uma variável
console.log(n1,n2,n3);

// Caso 6 com objetos:
let num = {
    num1: 1,
    num2: 2,
    num3: 3
} // Nesse caso aqui, o ponto e vírgula não é obrigatório
let {num1,num2,num3} = num; // Mas é obrigatório atribuir essa linha á uma variável