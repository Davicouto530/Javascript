/*
 * Cronômetro com Timestamp
 */

import { Cxmsg } from "../ex109CaixaDeMensagem/cxmsg.js";

// Objeto de configuração da caixa de mensagem
const config = {
    cor: "#080" // Cor da caixa
}
Cxmsg.config(config)

const timer = document.getElementById("timer");
const btn_iniciar = document.getElementById("btn_iniciar");
const btn_parar = document.getElementById("btn_parar");
const btn_zerar = document.getElementById("btn_zerar");
const btn_parcial = document.getElementById("btn_parcial");
const parciaisRegistradas = document.getElementById("parciaisRegistradas");

// Declaração de variáveis de controle
let intervalo = null; // Guarda o setInterval (serve pra parar depois)
let tmpIni = null; // Guarda o timestamp do momento que começou

console.log(tmpIni); // Só um teste no console (pode remover depois)

// Função responsável pela contagem do cronômetro
const contador = () => {
    const tmpAtual = Date.now(); // Pega o timestamp atual (em milissegundos)

    let contagem = tmpAtual - tmpIni; // Calcula quanto tempo passou (em milissegundos)

    let seg = Math.floor(contagem / 1000); // Converte pra segundos

    timer.innerHTML = converter(seg); // Atualiza o HTML com o tempo formatado

    console.log(seg); // Mostra os segundos no console (opcional)
}

// Função que converte segundos em formato de horas:minutos:segundos
const converter = (seg) => {
    const hora = Math.floor(seg / 3600); // Calcula as horas
    const resto = seg % 3600; // Pega o resto depois de tirar as horas
    const minuto = Math.floor(resto / 60); // Calcula os minutos
    const segundo = Math.floor(resto % 60); // Calcula os segundos restantes

    // Formata pra aparecer sempre com dois dígitos (ex: 05:09:03)
    const tempoFormatado = 
        `${hora < 10 ? "0" + hora : hora}:` + 
        `${minuto < 10 ? "0" + minuto : minuto}:` + 
        `${segundo < 10 ? "0" + segundo : segundo}`;

    return tempoFormatado; // Retorna o tempo formatado
}

// Evento do botão Iniciar
btn_iniciar.addEventListener("click", () => {
    tmpIni = Date.now(); // Pega o timestamp do momento que clicou
    intervalo = setInterval(contador, 1000);  // Executa a função 'contador' a cada 1 segundo
});

// Evento do botão Parcial
btn_parcial.addEventListener("click", () => {
    let parcial = `<div>${timer.innerHTML}</div>`; // Cria uma div com o tempo atual
    parciaisRegistradas.innerHTML += parcial; // Adiciona essa div na lista de parciais
});

// Evento do botão Parar
btn_parar.addEventListener("click", () => {
    clearInterval(intervalo); // Para a contagem do cronômetro
});

// Evento do botão Zerar
btn_zerar.addEventListener("click", () => {
    tmpIni = Date.now(); // Reseta o timestamp (opcional aqui)
    timer.innerHTML = "00:00:00"; // Reseta o visor do cronômetro
    clearInterval(intervalo); // Para qualquer contagem que esteja rodando
    parciaisRegistradas.innerHTML = ''; // Limpa as parciais registradas

    Cxmsg.mostrar("Cronômetro", "O cronômetro foi zerado")
});