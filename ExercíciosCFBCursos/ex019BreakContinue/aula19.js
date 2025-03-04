"use strict"

/**
 * Break e Continue
 */

//O break, ele para o bloco de códigos, encerra
//O continue, ele só não executa a parte que ele foi 
//colocado, mas continua executando o bloco de códigos

//----------BREAK----------
let n = 0;
let max = 30;

//Enquanto "n" for menor que "max", vai executar
while (n < max) {
    console.log(`CFB Cursos - ${n}`);
    if (n >= 10) {
        break;//Mas SE "n" for maior igual a "10", vai entrar no bloco
        //do "if" e parar o loop com o "break"
    };
    n++;
};

//----------CONTINUE----------
let pares = 0
for (let i = 0; i < max; i++) {
    //Se "i" for diferente de "0", que vai ser IMPAR, pula e continua e loop
    if (i % 2 != 0) {
        continue;
    } else {
        //Se for igual a "0", vai imprimir isso
        console.log(`O ${i} é PAR`);
        pares++;
    }

};

console.log(`Quantidade de números PARES: ${pares}`);
console.log("Fim do programa!");



