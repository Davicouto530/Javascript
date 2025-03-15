"use strict"

/**
 * DOM createElement  
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

    caixa1.appendChild(novoElemento);//O ".appendChild" ele coloca a nova tag dentro do container "caixa1"
});





