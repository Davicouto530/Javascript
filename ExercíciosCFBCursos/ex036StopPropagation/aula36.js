"use strict"

/**
* Evento stopPropagation
*/

//Pegando as tags pelo ID e colocando nas constantes
const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")];

//Todos os elementos que estão dentro da tag com o ID "caixa1"
//também vão receber o evento de "click"
caixa1.addEventListener("click", (event) => {
    console.log(event.target);
    //Quando clicar em algum dos elementos, o ".target"
    //vai mostrar qual foi clicado
    console.log("Clicou");
});

//Vai percorrer todos os cursos e colocar o ".stopPropagation()" para

//não pegar o evento que está sendo colocado na div de container
cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation();
        //O ".stopPropagation()" serve para parar um evento, no container
        //que ta agrupando as div que tem o evento de click, nas tags "cursos"
        //se clicar não vai disparar nenhum evento
    });
});


