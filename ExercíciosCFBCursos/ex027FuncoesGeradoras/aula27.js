"use strict"

/**
 * Funções geradoras
 */

//Funções geradoras retornam um iterador e permitem pausar e retomar sua execução.

function* contador() { // Define uma função geradora chamada 'contador'. 
    let i = 0; // Inicializa a variável 'i' com 0.
    while (true) { // Loop infinito, que será controlado pelo 'yield' e pelo 'break'.
        yield i++; // 'yield' pausa a execução da função e retorna o valor atual de 'i'. O incremento ocorre após a pausa.
        if (i > 5) { // Quando 'i' ultrapassa 5
            break; // Sai do loop, encerrando a função geradora.
        }
    }
};

const itc = contador(); // Cria um iterador a partir da função geradora 'contador'.
for (let y of itc) { // Percorre os valores gerados por 'contador' automaticamente até a função terminar.
    console.log(itc.next().value); // Exibe o próximo valor gerado pelo iterador. O método 'next()' faz a função continuar do último 'yield'.
}

// __________________________________________
// Outro exemplo:

function* perguntas() { // Define uma função geradora chamada 'perguntas'.
    const nome = yield 'Qual é o seu nome?'; // 'yield' retorna a string e pausa a execução até que 'next()' seja chamado novamente.
    const esporte = yield 'Qual é o seu esporte favorito?'; // Pausa novamente e espera outro valor ser passado na próxima chamada de 'next()'.
    return `Seu nome é ${nome}, e seu esporte favorito é ${esporte}`; // Quando 'next()' é chamado após o segundo 'yield', retorna a frase final e finaliza a função.
};

const itp = perguntas(); // Cria um iterador a partir da função 'perguntas'.
console.log(itp.next().value); // Chama 'next()' pela primeira vez, executando até o primeiro 'yield'. Exibe: "Qual é o seu nome?".
console.log(itp.next('Davi').value); // Envia 'Davi' como valor para 'nome', retoma a execução e exibe a segunda pergunta.
console.log(itp.next('Futebol').value); // Envia 'Futebol' como valor para 'esporte', retoma a execução e exibe a frase final.