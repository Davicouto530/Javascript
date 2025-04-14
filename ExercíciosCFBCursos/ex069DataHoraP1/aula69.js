"use strict"; 

/* 
 * Data Hora
 */

const divData = document.getElementById("divData");
const data = new Date();

//Serve para colocar um "0"zero na frente do dia
let diaMes = data.getDate();
diaMes = diaMes<10?"0"+diaMes:diaMes;//se for menor que "10" o dia

//Serve para colocar um "0"zero na frente do Mês
let Mes = data.getMonth()+1;
Mes = Mes<10?"0"+Mes:Mes;//se for menor que "10" o Mês

const dataResumida = `${diaMes} / ${Mes} / ${data.getFullYear()}`

divData.innerHTML = dataResumida;

// getDate() = Dia do mês
// getDay() = Dia da semana (número)
// getFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMillisegconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somenta a data

