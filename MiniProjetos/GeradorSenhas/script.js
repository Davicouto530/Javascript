const divSenha = document.getElementById("divSenha");
const tamanho = document.getElementById("tamanho");
const inputValor = document.getElementById("valor");
const btnGerarSenha = document.getElementById("gerarSenha");
const pSenha = document.getElementById("pSenha");


inputValor.addEventListener("click", () => {
    tamanho.innerHTML = inputValor.value;
})

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?/";

btnGerarSenha.addEventListener("click", () => {
    let valorConvertido = parseInt(inputValor.value);
    divSenha.innerHTML = '';
    // console.log(valorConvertido)
    let senhaGerada = '';
    let sorteados = '';
    for (let i = 0; i < valorConvertido; i++) {
        sorteados = Math.floor(Math.random() * caracteres.length);
        // console.log(sorteados)
        senhaGerada += caracteres[sorteados];
        console.log(senhaGerada)
    }

    const res = document.createElement("div");
    res.setAttribute("class", "res");
    res.innerHTML = '';
    pSenha.innerHTML = "Sua senha gerada foi:";
    res.textContent = senhaGerada;

    const copiar = document.createElement("img");
    copiar.setAttribute("src", "copiar.png");
    copiar.setAttribute("class", "copiar");
    copiar.addEventListener("click", (evt) => {
        navigator.clipboard.writeText(res.innerHTML);
    });
    divSenha.appendChild(copiar);
    divSenha.appendChild(pSenha);
    divSenha.appendChild(res);
});