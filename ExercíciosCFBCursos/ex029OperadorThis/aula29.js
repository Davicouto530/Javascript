"use strict"

/**
* Operador This
*/

// 'this' refere-se ao objeto que será criado pela função construtora.
function aluno(nome, nota) {  
    this.nome = nome; // 'this.nome' cria uma propriedade chamada 'nome' no objeto.
    this.nota = nota; // 'this.nota' cria uma propriedade chamada 'nota' no objeto.

    this.dados_arrow = function() { // Método que exibe os dados do aluno após 2 segundos.
        setTimeout(() => {  
            // Como usamos uma arrow function, 'this' continua se referindo ao objeto aluno.
            console.log(this.nome); // Exibe o nome armazenado no objeto.
            console.log(this.nota); // Exibe a nota armazenada no objeto.
        }, 2000);
    }
}

const al1 = new aluno("Bruno", 10); // Cria um objeto 'al1' com nome "Bruno" e nota 10.
al1.dados_arrow(); // Chama 'dados_arrow', que mostrará "Bruno" e "10" após 2 segundos.