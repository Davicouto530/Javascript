const tamanho = document.getElementById("tamanho");
const inputValor = document.getElementById("valor");
const btnGerarSenha = document.getElementById("gerarSenha");
const res = document.getElementById("res");

inputValor.addEventListener("click", () => {
    tamanho.innerHTML = inputValor.value;
})

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?/";

btnGerarSenha.addEventListener("click", () => {
    let valorConvertido = parseInt(inputValor.value)
    let senhaGerada = '';
    let sorteados = '';
    for(let i = 0; i < valorConvertido; i++){
        sorteados = Math.floor(Math.random()*caracteres.length);
        senhaGerada += caracteres[sorteados];
    }
    res.innerHTML = senhaGerada;
});