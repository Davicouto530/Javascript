//Arquivo do módulo

class Cursos {
    //O "static" não precisa ser instaciado para ser usado
    static cursos = ["JavaScript", "HTML", "CSS", "Arduino", "C#", "C++", "Python", "Java"];
    
    //Método para mostrar todos os cursos
    static getTodosCursos = () => {
        return this.cursos
    }

    //Método para mostrar só um curso
    static getCurso = (indiceCurso) => {
        return this.cursos[indiceCurso];
    }

    //Método para adicionar um novo curso no array
    static addCurso = (novoCurso) => {
        this.cursos.push[novoCurso];
    }

    //Método para todos os cursos
    static apagarCursos = () => {
        this.cursos = [];
    }
}

//Exportando a classe como padrão
export default Cursos




