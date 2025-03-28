let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
const btnSomar = document.querySelector("#somar");
const btnSubtrair = document.querySelector("#subtrair");
const btnMultiplicar = document.querySelector("#multiplicar");
const btnDividir = document.querySelector("#dividir");
const resultado = document.querySelector("#resultado");

const operacoes = [
    (valor1, valor2) => {
        let res = 0;
        res = valor1 + valor2;
        return res;
    }
]

btnSomar.addEventListener("click", (evt) => {
    valor1 = parseFloat(valor1.value)
    valor2 = parseFloat(valor2.value)
    console.log(operacoes[0](valor1, valor2));

})

