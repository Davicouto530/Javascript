const caracteres = document.getElementById("caracteres");
const inputValor = document.getElementById("valor");
const btnGerarSenha = document.getElementById("gerarSenha");
const res = document.getElementById("res");

let valorConvertido = inputValor.value;

caracteres.innerHTML = valorConvertido;

btnGerarSenha.addEventListener("click", () => {
    let senhaGerada = Math.floor(Math.random()*valorConvertido)+1;
    res.innerHTML = senhaGerada;
})