let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
const btnSomar = document.querySelector("#somar");
const btnSubtrair = document.querySelector("#subtrair");
const btnMultiplicar = document.querySelector("#multiplicar");
const btnDividir = document.querySelector("#dividir");
const resultado = document.querySelector("#resultado");
const btnLimpar = document.querySelector("#limpar");

const operacoes = [
    (valor1, valor2) => {
        let res = 0;
        res = valor1 + valor2;
        return res;
    },
    (valor1, valor2) => {
        let res = 0;
        res = valor1 - valor2;
        return res;
    },
    (valor1, valor2) => {
        let res = 0;
        res = valor1 * valor2;
        return res;
    },
    (valor1, valor2) => {
        let res = 0;
        res = valor1 / valor2;
        return res;
    }
];

btnSomar.addEventListener("click", () => {
    // convtNum(valor1, valor2);
    resultado.value = operacoes[0](Number(valor1.value), Number(valor2.value));
});

btnSubtrair.addEventListener("click", () => {
    // convtNum(valor1, valor2);
    resultado.value = operacoes[1](Number(valor1.value), Number(valor2.value));
});

btnMultiplicar.addEventListener("click", () => {
    // convtNum(valor1, valor2);
    resultado.value = operacoes[2](Number(valor1.value), Number(valor2.value));
});

btnDividir.addEventListener("click", () => {
    // convtNum(valor1, valor2);
    resultado.value = operacoes[3](Number(valor1.value), Number(valor2.value));
});

btnLimpar.addEventListener("click", () => {
    resultado.value = '';
    document.querySelector("#valor1").value = '';
    document.querySelector("#valor2").value = '';
});