

class Cursos {
    static cursos = ["javascript", "html", "css", "Arduino", "Raspberry", "c++", "phyton"]

    static getTodosCursos =()=> {
        return this.cursos
    }

   static getCursos = (i_curso)=> {
        return this.cursos[i_curso]
    }

    static addCurso=(novocurso)=> {
        this.cursos.push(novocurso)
    }

    static apagarCursos=()=> {
        this.cursos
    }

}


export default Cursos
