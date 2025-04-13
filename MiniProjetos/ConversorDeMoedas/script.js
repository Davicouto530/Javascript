const valor = document.getElementById("valor");
const moedaPara = document.getElementById("moedaPara");
const moedaDe = document.getElementById("moedaDe")
const btnConvert = document.getElementById("convert");
const res = document.getElementById("res");

class Moedas {
    constructor() {
        this.taxas = {
            BRL: 1,
            USD: 5.87,
            EUR: 6.66,
            GBP: 7.23,
            JPY: 0.039,
            CHF: 6.34,
            CAD: 4.32,
            AUD: 3.98,
            NZD: 3.65,
            CNY: 0.81,
            ARS: 0.027,
            MXN: 0.34,
            CLP: 0.0063,
            INR: 0.071,
            RUB: 0.063,
            ZAR: 0.31,
            SEK: 0.54,
            NOK: 0.52,
            DKK: 0.89,
            KRW: 0.0044
        };
    }

    converter(valor, moedaDe, moedaPara) {
        const taxa1 = this.taxas[moedaDe];
        const taxa2 = this.taxas[moedaPara];
        if (moedaDe == "BRL") {
            return valor / taxa2;
        } else if (moedaPara == "BRL") {
            return valor * taxa1;
        } else {
            let resConvert = valor * taxa1;
            return resConvert / taxa2;
        }
    }
}

class Simbolos {
    constructor() {
        this.simbolos = {
            BRL: "R$",   // Real
            USD: "$",    // Dólar
            EUR: "€",    // Euro
            GBP: "£",    // Libra
            JPY: "¥",    // Iene
            CHF: "CHF",  // Franco Suíço
            CAD: "$",    // Dólar Canadense
            AUD: "$",    // Dólar Australiano
            NZD: "$",    // Dólar Neozelandês
            CNY: "¥",    // Yuan Chinês
            ARS: "$",    // Peso Argentino
            MXN: "$",    // Peso Mexicano
            CLP: "$",    // Peso Chileno
            INR: "₹",    // Rupia Indiana
            RUB: "₽",    // Rublo Russo
            ZAR: "R",    // Rand Sul-Africano
            SEK: "kr",   // Coroa Sueca
            NOK: "kr",   // Coroa Norueguesa
            DKK: "kr",   // Coroa Dinamarquesa
            KRW: "₩"     // Won Sul-Coreano
        };
    }

    obterSimbolo(codigoMoeda){
        return this.simbolos[codigoMoeda]
    }
}

const mudaTextoBtn = () => {
    btnConvert.innerHTML = `Converter ${moedaDe.value} para ${moedaPara.value}`;
}

mudaTextoBtn();

moedaDe.addEventListener("change", mudaTextoBtn);
moedaPara.addEventListener("change", mudaTextoBtn);

btnConvert.addEventListener("click", () => {
    if (valor.value === '') {
        return res.innerHTML = "Insira um valor no campo"
    }

    if (moedaDe.value == moedaPara.value) {
        return res.innerHTML = "Selecione moedas diferentes";
    }

    let valorConvertido = parseFloat(valor.value);
    let conversor = new Moedas();
    let resultado = conversor.converter(valorConvertido, moedaDe.value, moedaPara.value);

    let simbolos = new Simbolos();
    let simboloDe = simbolos.obterSimbolo(moedaDe.value);  // Símbolo da moeda de origem
    let simboloPara = simbolos.obterSimbolo(moedaPara.value);  // Símbolo da moeda de destino

    console.log(resultado);

    // Exibe os símbolos das moedas junto com o valor convertido
    res.innerHTML = `${simboloDe} ${valorConvertido.toFixed(2)} = ${simboloPara} ${resultado.toFixed(2)}`;
});

//Serve para quando estiver no input, e clicar "enter"
//já fazer a conversão
valor.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnConvert.click();
});