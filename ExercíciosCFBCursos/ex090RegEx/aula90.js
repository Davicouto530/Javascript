"use strict";

/* 
 *  RegEx
 */

//Criando String de objeto, mas pode ser string normal em variável
let nome = new String("Bruno Pinho Campos");
console.log(nome);

//Pesquisa o indice da primeira letra da palavra na string, se não achar,
//retorna -1, mas pesquisa com CaseSensitive, e o "i" "/pinho/i" serve pra 
//falar que vai pesquisar mesmo sendo minúscula ou maiúscula as letras 
console.log(nome.search(/pinho/i));

//A palavra dos parentes vai ser pesquisada na string, e ele retorna o indice
//da primeira palavra que ele achar na string, se tiver outras palavras da pesquisada
//na string não vai retornar. Mas com o "g" "/o/g" vai retornar todos os "o" que tem na string
console.log(nome.match(/o/g));

//Usando as duas juntas, vai substituir todas as letras "o" com   
//o "g" da string, mesmo se for maiúscula ou minúscula com o "i"
console.log(nome.replace(/o/ig,"Teste"));


