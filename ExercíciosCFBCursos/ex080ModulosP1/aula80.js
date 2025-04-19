"use strict"; 

/* 
 *  Módulos
 */

//Módulos são blocos de códigos que podem ser reutilizados nos códigos.
//Podem ser criado em arquivo separado, e ser chamado em outro arquivo.

//Importando o array "cursos" e o "carros" de outro arquivo
import { cursos } from "./cursos.js";
import { carros } from "./cursos.js";

console.log("servidor rodando");
console.log(cursos);
console.log(carros);