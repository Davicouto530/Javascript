"use strict"

/**
 * Método Filter
 */

// const filtroMaior18 = (valor) => {
//     if(valor >= 18){
//         return valor;
//     }
// };

//Criando o array que vai ser filtrado
const idades = [15, 21, 30, 17, 18, 44, 12, 50];

//Criando uma constante que vai receber o array e vai filtrar idades maior que 18
const maior = idades.filter((valor) => {//Criando uma arrow function, que pode ser passado até
    //três parâmetros, "valor", "indice" e o próprio "array."
    if(valor >= 18){
        return valor;
    }//Verificando, se "valor" que vem do array é maior que 18, se for, retorna o "valor"
});

//Filtrando idades menor que 18, recebe o array "idades" e o "valor" do array no parâmetro
const menor = idades.filter((valor) => {
    if(valor < 18){
        return valor;
    }//Se o "valor" do array for menor que 18, vai retornar o "valor"
});

console.log(idades);
console.log(maior);
console.log(menor);
