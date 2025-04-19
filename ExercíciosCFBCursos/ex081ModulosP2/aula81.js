"use strict"; 

/* 
 *  Módulos
 */

//Módulos são blocos de códigos que podem ser reutilizados nos códigos.
//Podem ser criado em arquivo separado, e ser chamado em outro arquivo.

//Importando a função "getTodosCursos" de outro arquivo. A função 
//está fora das chaves{} porque é uma exportação padrao com "default"
import getTodosCursos from "./cursos2.js";

//Importando o array "cursos" e a função "getCurso" de outro arquivo
import { cursos, getCurso } from "./cursos2.js";

console.log(cursos);
console.log(getTodosCursos());

console.log(getCurso(0));
//Indicando o indice do elemento que vai ser exibido