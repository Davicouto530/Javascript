"use strict"; 

/* 
 *  Módulos com classe
 */

//Importando a classe como padrão
import Cursos from "./cursos4.js";

//Chamando o método de adicionar um curso no array
Cursos.addCurso("Typescript");

//Chamando o método de apagar todos os cursos do array
Cursos.apagarCursos();

console.log(Cursos.getTodosCursos());



