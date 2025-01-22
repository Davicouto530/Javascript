/**
 * Estudo de funções
 */

//Função simples (literal)
function hello(){
    console.log("Hello function")
}

hello()

//Função atribuida
const hello2 = function() {
    console.log("Hello function assigned")
}

console.log(typeof(hello2))
hello2()

//arrow function => (Simplicaficação da função atribuida) 
//"() =>" é igual a "function"
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

//funções com passagem de paramêtros e retorno
//função (literal)
function somarS(num1, num2) {
    return console.log(num1 + num2)
}

console.log("Soma de dois números")
somarS(5,5)

//função atribuida
const somarA = function(num1,num2){
    return console.log(num1 + num2)
}

somarA(7,2)

//Arrow function
//"() =>" significa a mesma coisa que "function", só que mais simplificado
const somarAF = (num1,num2) => {
    return (console.log(num1 + num2))
}

somarAF(7,7)

//Arrow function simplificado (retorno é implicito)
const somarAFS = (num1,num2) => console.log(num1 + num2)
somarAFS(3,9)

