"use strict"; 

/* 
 * Relogio
 */

const divRelogio = document.getElementById("divRelogio");

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
}

//A cada 1 segundo, chama a função relogio, e atualiza a hora
const intervalo = setInterval(relogio,1000);




