"use strict"

/**
* Praticando com addEventListener
*/

//Pegando todos os IDS do HTML
const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_transferir = document.querySelector("#btn_transferir");

//Pegando todas as tags que tem a class "curso" e fazendo um array
const todosCursos = [...document.querySelectorAll(".curso")];

//Percorrendo todas as tags e colocando um evento de "click" em cada uma
todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;//O ".target" verifica se a tag foi clicada
        curso.classList.toggle("selecionado");
        //O "toggle" verifica se o elemento tem a class, se
        //não tiver ele adiciona a class, se já tiver, ele remove
    });
});

//Colocando um evento de "click" no que está dentro de "btn"
btn_transferir.addEventListener("click", () => {
    //Quando clicar cria um array de todos os curso selecionados, que foram clicados
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")];//Todos os cursos com a class ".curso" que não estão selecionados com a class ".selecionado"
    
    cursosSelecionados.map((el) => {
        // Move cada elemento selecionado para dentro da div caixa2
        caixa2.appendChild(el);
    });

    cursosNaoSelecionados.map((el) => {
        // Move cada elemento não selecionado para dentro da div caixa1
        caixa1.appendChild(el);
    });
});

