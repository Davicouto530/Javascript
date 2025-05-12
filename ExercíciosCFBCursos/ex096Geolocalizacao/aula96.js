"use strict";

/*
 * Geolocalização:
 * É um recurso que permite ao navegador obter a localização física do usuário (latitude e longitude),
 * normalmente usando GPS, Wi-Fi ou rede móvel. Muito usado em apps de mapas, clima, entregas, etc.
 */

// Pegando os elementos HTML onde vamos mostrar a longitude e latitude
const long = document.getElementById("long");
const lati = document.getElementById("lati");

// Verifica se o navegador suporta geolocalização
if(navigator.geolocation){
    // Se suportar, tenta pegar a localização atual do usuário
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
    // Se não suportar, avisa no console
    console.log("Geolocalização não foi suportada");
}

// Se conseguir pegar a localização, essa função é chamada
function mostrarLocalizacao(pos){
    // Mostra a longitude e latitude na tela
    long.innerHTML = `Longitude: ${pos.coords.longitude}`;
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`;
}

// Se der algum erro ao tentar pegar a localização, essa função é chamada
function erroLocalizacao(){
    console.log("Erro ao obter a localização");
}