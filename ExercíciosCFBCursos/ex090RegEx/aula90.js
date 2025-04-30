"use strict";

/* 
 *  RegEx
 */

//Criando String de objeto, mas pode ser string normal em variável
let nome = new String("Brunooo Pinho Camposssss 1978");
let email = "bruno@bruno.gmail.com";
let numeros = "1, 10, 100, 1000";

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
console.log(nome.replace(/o/ig, "Teste"));

//Vai pesquisar na string todos os "o" e "h" com o "[]" e com 
//o "g", e o "i" serve para ignorar maiúsculas e minúsculas
console.log(nome.match(/[oh]/ig));

//Pesquisando palavras de "a" até "m", o limitador do até é ("-"),
//e o "|" serve como vai pesquisar "também" números de "0" até "9"
console.log(nome.match(/[a-m|0-9]/ig));

//Metacaracteres----------------------
//O "\d" serve para retornar só número dentro da string
console.log(nome.match(/\d/ig));

//O "\s" serve para retornar só os espaços em branco 
console.log(nome.match(/\s/ig));

//O "\b" você informa do lado o caracterer que você quer 
//encontrar na string que ele vai retornar se tem
console.log(nome.match(/\bP/ig));

//Quantificadores---------------------
//O "+" do lado de um caractere, vai pesquisar os "o" de cada palavra,
//mas só vai separar os "o" se for de palavras diferentes, se uma
//palavra tiver mais de um "o", vai retornar como se fosse um
console.log(nome.match(/o+/ig));

//Vai retornar todos os números entre 10
console.log(numeros.match(/10*/ig));

//O "?" serve para pesquisar o "10" de todos os números, 
//e se tiver o primeiro também que é o "1", vai retornar 
console.log(numeros.match(/10?/ig));
