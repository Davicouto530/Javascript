"use strict"; 

/* 
 *  Caixa de dialogo
 */

const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", () => {
    alert("teste");
});

btn_confirm.addEventListener("click", () => {
    const retorno = confirm("Você está aprendendo muito?");
    if(retorno){
        console.log("Botão OK pressionado");
    }else {
        console.log("Botão CANCELAR pressionado");
    }
});

btn_prompt.addEventListener("click", () => {
    const nome = prompt("Digite o seu nome");
    console.log(nome);
    if(nome == null){
        console.log("Botão CANCELAR pressionado");
    }else {
        console.log(`Nome digitado: ${nome}`)
    }
});