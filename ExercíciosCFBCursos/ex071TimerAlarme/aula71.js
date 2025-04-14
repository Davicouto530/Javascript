"use strict"; 

/* 
 * Timer Alarme
 */

const divRelogio = document.getElementById("divRelogio");
const divData = document.getElementById("divData");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const tmp_alarme = document.getElementById("tmp_alarme");
const hora_alarme = document.getElementById("hora_alarme");
const timer = document.getElementById("timer");

const som_alarme = new Audio("alarme.mp3");
som_alarme.loop = -1;

let ts_atual = null;
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando = false;

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now();
    ts_alarme = ts_atual+(tmp_alarme.value * 1000);
    alarme_ativado = true;
    const dt_alarme = new Date(ts_alarme);
    hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`; 
});

btn_parar.addEventListener("click", () => {
    alarme_ativado = false;
    alarme_tocando = false;
    hora_alarme.innerHTML = "Hora do alarme";
    tmp_alarme.value = 0;
    timer.classList.remove("alarme");
    som_alarme.pause();
    som_alarme.currentTime = 0;
});

const data = new Date();

//Serve para colocar um "0"zero na frente do numero
let diaMes = data.getDate();
diaMes = diaMes<10?"0"+diaMes:diaMes;//se for menor que "10" o dia, coloca o zero na frente
//Serve para colocar um "0"zero na frente do Mês
let Mes = data.getMonth()+1;
Mes = Mes<10?"0"+Mes:Mes;//se for menor que "10" o Mês

const dataResumida = `${diaMes} / ${Mes} / ${data.getFullYear()}`

divData.innerHTML = dataResumida;

//Função relogio
const relogio = () => {
    const data = new Date();

    //Quando hora for menor que "10", adiciona um zero na frente do número
    let hora = data.getHours();
    hora = hora<10?"0"+hora:hora;

    let minuto = data.getMinutes();
    minuto = minuto<10?"0"+minuto:minuto;

    let segundos = data.getSeconds();
    segundos = segundos<10?"0"+segundos:segundos;

    const horaFormatada = `${hora}:${minuto}:${segundos}`;

    divRelogio.innerHTML = horaFormatada;

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true;
            som_alarme.play();
            timer.classList.add("alarme");
        }
    }
}

//A cada 1 segundo, chama a função relogio, e atualiza a hora
const intervalo = setInterval(relogio,1000);