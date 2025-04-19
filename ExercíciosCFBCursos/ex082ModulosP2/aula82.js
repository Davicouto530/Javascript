"use strict"; 

/* 
 *  Módulos
 */

//Importando o array "cursos" e a função "getCurso", mas dando um nome
//para o "curso" com o "as", e do lado o nome "c"
// import { cursos as c, getCurso as gc} from "./cursos2.js";
// console.log(c);
// console.log(gc(0));//Indicando o indice do elemento que vai ser exibido

//Importando o módulo inteiro e colocando o nome dele como "moduloCursos"
import * as moduloCursos from "./cursos3.js";

//Aqui coloca nome que você deu para o modulo, coloca ponto 
//e coloca o que você quer importar do módulo 
console.log(moduloCursos.cursos);
console.log(moduloCursos.getCurso(2));
console.log(moduloCursos.default());// Chamando a função padrão

