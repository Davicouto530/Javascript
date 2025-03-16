"use strict"

/**
 * DOM removeElement 
 */

//Pegando o container pelo ID
const caixa1 = document.querySelector("#caixa1");

//Array de todos os cursos, no HTML não tem mais nenhum curso
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"];

//Criando dinamicamente as tags dos cursos que estão no Array com o "createElement"
//e pegando o "indice" de cada elemento para criar cada ID diferente
cursos.map((el, ind) => {
    //O ".createElement" serve para criar uma nova tag no HTML
    const novoElemento = document.createElement("div");

    //Colocando o indice de cada elemento como ID
    novoElemento.setAttribute("id", "c"+ind);//Colocando um ID nessa div, primeiro o atributo, depois o nome

    novoElemento.setAttribute("class", "curso c1");//Definindo uma class para cada nova tag

    novoElemento.innerHTML = el;//Escrevendo os cursos que estão dentro do Array nas novas "divs"

    const btn_lixeira = document.createElement("img");//Criando uma tag "img" 
    btn_lixeira.setAttribute("src", "./lixeira.png");//Colocando a imagem dentro da nova tag "img"
    btn_lixeira.setAttribute("class", "btn_lixeira");//Colocando uma class na nova tag "img"

    //Colocando um evento de click, que quando clicar na img de lixeira, vai remover a tag div
    btn_lixeira.addEventListener("click", (evt) => {
        caixa1.removeChild(evt.target.parentNode);
        //O ".removeChild" serve para remover uma tag do HTML. Indicando que vai remover do container 
        //".caixa1", e o "evt.target.parentNode" vê qual foi clicado, qual for clicado, vai ser removido.
    });
    
    novoElemento.appendChild(btn_lixeira);//Adicionando a nova tag "img" dentro das div de curso
 
    caixa1.appendChild(novoElemento);//O ".appendChild" ele coloca a nova tag dentro do container "caixa1"
});





