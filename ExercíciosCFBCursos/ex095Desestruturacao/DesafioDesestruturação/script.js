/*
 * Desafio de destruturação
 */

//Criando o objeto pessoa
const pessoa = {
    nome: "Lionel Messi",
    idade: 36,
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
}
//Acessando o elemento "endereco", que é um objeto dentro do objeto pessoa e dentro
//de "endereco", acessando o valor especifico "cidade" = endereco: {cidade}
let { nome, idade, endereco: {cidade} } = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);