//Arquivo do módulo

//Array que vai ser exportado para outro arquivo
const cursos = ["JavaScript", "HTML", "CSS", "Arduino", "C#", "C++", "Python", "Java"];

//Definindo uma exportação padrão de uma função
export default function getTodosCursos(){
    return cursos;
}

//Só pode ter um método definido como padrão
function getCurso(indice_curso){
    return cursos[indice_curso];
}
export {cursos, getCurso}




