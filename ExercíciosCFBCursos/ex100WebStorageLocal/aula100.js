/*
 * Web Storage, LocalStorage
 * Serve para guardar os valores dentro do navegador, quando sair vai continuar lá
 */

const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", () => {

})

// ------------ LocalStorage ------------
// Quando fechar o navegador os dados não serão apagados, e os valores sempre strings
let num = 10;
let curso = "Javascript"
// Coloca o nome da chave, que vai ser "numero", e o valor da chave, que ta vindo da variável "num"
localStorage.setItem("numero",num); // "setItem" é o método para armazenar o valor na chave
localStorage.setItem("numero",33); // Mudando o valor da chave "numero"
localStorage.setItem("nome", "Bruno");
localStorage.setItem("canal", "CFB Cursos");
localStorage.setItem("curso", curso);
alert(localStorage.length); // Mostra o tamanho do "localStorage"
// alert(localStorage.getItem("numero")); // "getItem" é o método para obter o valor da chave
// alert(localStorage.getItem("nome"));
// alert(localStorage.getItem("canal"));
// alert(localStorage.getItem("curso"));
// alert(localStorage.getItem(localStorage.key(0))); // No "key" você passa o indice da chave que você quer
localStorage.clear(); // Limpa todas as chaves e seus valores criados

// ------------ SessionStorage ------------
// Quando fechar o navegador os dados serão apagados
sessionStorage.setItem("nome", "Bruno");
sessionStorage.setItem("canal", "CFB Cursos");
sessionStorage.setItem("curso", curso);
