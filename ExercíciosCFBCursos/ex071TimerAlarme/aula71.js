"use strict";

/* 
 * Timer Alarme
 */

// Pegando elementos do HTML
const divRelogio = document.getElementById("divRelogio");
const divData = document.getElementById("divData");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const tmp_alarme = document.getElementById("tmp_alarme");
const hora_alarme = document.getElementById("hora_alarme");
const timer = document.getElementById("timer");

// Criando o som do alarme
const som_alarme = new Audio("alarme.mp3");
som_alarme.loop = -1; // Faz o som tocar em loop

// Variáveis de controle
let ts_atual = null;         // Timestamp atual
let ts_alarme = null;        // Timestamp do alarme
let alarme_ativado = false;  // Se o alarme está ativado
let alarme_tocando = false;  // Se o alarme está tocando

// Quando clicar em "Ativar"
btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now(); // Hora atual em milissegundos
    ts_alarme = ts_atual + (tmp_alarme.value * 1000); // Tempo futuro (atual + tempo do input)
    alarme_ativado = true;

    // Mostra na tela o horário em que o alarme vai tocar
    const dt_alarme = new Date(ts_alarme);
    hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`; 
});

// Quando clicar em "Parar"
btn_parar.addEventListener("click", () => {
    alarme_ativado = false;
    alarme_tocando = false;
    hora_alarme.innerHTML = "Hora do alarme"; // Reseta o texto
    tmp_alarme.value = 0;                     // Zera o input
    timer.classList.remove("alarme");        // Remove classe de destaque
    som_alarme.pause();                      // Para o som
    som_alarme.currentTime = 0;              // Volta para o início do áudio
});

// Mostrando a data atual no formato DD/MM/AAAA
const data = new Date();

let diaMes = data.getDate(); // Dia
diaMes = diaMes < 10 ? "0" + diaMes : diaMes;

let Mes = data.getMonth() + 1; // Mês (começa em 0)
Mes = Mes < 10 ? "0" + Mes : Mes;

const dataResumida = `${diaMes} / ${Mes} / ${data.getFullYear()}`;
divData.innerHTML = dataResumida;

// Função que mostra a hora atual e ativa o alarme quando chega a hora
const relogio = () => {
    const data = new Date();

    // Formata hora, minuto e segundo com dois dígitos
    let hora = data.getHours();
    hora = hora < 10 ? "0" + hora : hora;

    let minuto = data.getMinutes();
    minuto = minuto < 10 ? "0" + minuto : minuto;

    let segundos = data.getSeconds();
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horaFormatada = `${hora}:${minuto}:${segundos}`;
    divRelogio.innerHTML = horaFormatada;

    // Verifica se chegou a hora do alarme
    if (alarme_ativado && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true;
            som_alarme.play(); // Toca o som
            timer.classList.add("alarme"); // Adiciona destaque visual
        }
    }
}

// Atualiza o relógio a cada 1 segundo
const intervalo = setInterval(relogio, 1000);
