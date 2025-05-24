/*
 * Cronômetro com Timestamp
 */

const timer = document.getElementById("timer");
const btn_iniciar = document.getElementById("btn_iniciar");
const btn_parar = document.getElementById("btn_parar");
const btn_zerar = document.getElementById("btn_zerar");

let intervalo = null;
let tmpIni = null;
console.log(tmpIni);

const contador = () => {
    const tmpAtual = Date.now(); // pega o timestamp atual

    let contagem = tmpAtual - tmpIni; // calcula quanto tempo passou em milissegundos

    let seg = Math.floor((tmpAtual - tmpIni) / 1000); // converte pra segundos (tira os milissegundos)
    timer.innerHTML = converter(seg); // atualiza o HTML com o tempo formatado
    console.log(seg); // mostra os segundos no console
}

// função que converte segundos pra horas:minutos:segundos
const converter = (seg) => {
    // divide os segundos por 3600 (1 hora tem 3600 segundos) e pega só a parte inteira (horas)
    const hora = Math.floor(seg / 3600);

    // pega o resto da divisão por 3600, que são os segundos que não formaram uma hora
    const resto = seg % 3600;

    // divide esse resto por 60 (1 minuto tem 60 segundos) e pega só a parte inteira (minutos)
    const minuto = Math.floor(resto / 60);

    // pega o resto da divisão por 60, que são os segundos que sobraram depois de tirar as horas e os minutos
    const segundo = Math.floor(resto % 60);

    // formata pra ficar no padrão 00:00:00
    const tempoFormatado = `${hora < 10 ? "0" + hora : hora}:${minuto < 10 ? "0" + minuto : minuto}:${segundo < 10 ? "0" + segundo : segundo}`;

    return tempoFormatado; // retorna o tempo formatado
}

btn_iniciar.addEventListener("click", () => {
    tmpIni = Date.now(); // pega o timestamp do momento que começou
    intervalo = setInterval(contador, 1000); // executa a função contador a cada 1 segundo
});

btn_parar.addEventListener("click", () => {
    // Quando clicar no botão de parar, para a contagem do "setInterval"
    clearInterval(intervalo);
});

btn_zerar.addEventListener("click", (evt) => {
    tmpIni = Date.now();
    timer.innerHTML = "00:00:00";
    clearInterval(intervalo);
});