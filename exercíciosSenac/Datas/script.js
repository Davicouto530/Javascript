/**
 * Ano automático
 * @author Davi do couto
 */

//Inserindo o ano na tag <span> do HTML
let ano = document.getElementById('copyrightYear')

//A linha abaixo obtem o ano atual 
let anoAtual = new Date().getFullYear()

//A linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual