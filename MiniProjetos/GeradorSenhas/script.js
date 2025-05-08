const divSenha = document.getElementById("divSenha");
const tamanho = document.getElementById("tamanho");
const inputValor = document.getElementById("valor");
const btnGerarSenha = document.getElementById("gerarSenha");
const pSenha = document.getElementById("pSenha");

inputValor.addEventListener("click", () => {
    tamanho.innerHTML = inputValor.value;
    //Quando clicar no input, passando o valor de caracteres pro texto
})

//Caracteres que serão sorteados para a senha
let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?/";

btnGerarSenha.addEventListener("click", () => {
    let valorConvertido = parseInt(inputValor.value);
    divSenha.innerHTML = '';//Limpando a div toda vez que gerar 
    // console.log(valorConvertido)
    let senhaGerada = '';//Variável para a senha gerada
    let sorteados = '';//Variável para guardar o indice do caractere

    //Percorrendo o input, e gerando o tanto de caracteres passado 
    for (let i = 0; i < valorConvertido; i++) {
        //Gerando um indice aleatorio entre 0 e o tamanho da variável caracterer
        sorteados = Math.floor(Math.random() * caracteres.length);
        senhaGerada += caracteres[sorteados];//Indo no indice sorteado na variável caractere
        console.log(senhaGerada);
    }

    mostrandoSenha(senhaGerada);//Chamando a função de mostrar a senha na div 

    btnCopiar(res);//Chamando a função de copiar, e passando o conteúdo do "res"

});

//Função para mostrar a senha quando clicar no botão
const mostrandoSenha = (senhaGerada) => {
    const res = document.createElement("div");
    res.setAttribute("class", "res");
    res.innerHTML = '';//Criando a div toda vez que gerar uma nova senha
    pSenha.innerHTML = "Sua senha gerada foi:";//Exibindo a msg só quando gerar
    res.textContent = senhaGerada;//Atribuindo a senha inteira na nova div

    btnCopiar(res);

    divSenha.appendChild(pSenha);//Colocando escrito na div
    divSenha.appendChild(res);//Colocando o res da senha na div 
}

const btnCopiar = (res) => {//Função para gerar o botão de copiar
    const copiar = document.createElement("img");
    copiar.setAttribute("src", "copiar.png");
    copiar.setAttribute("class", "copiar");
    copiar.addEventListener("click", (evt) => {
        const copiado = document.createElement("p");
        copiado.innerHTML = "Copiado";
        divSenha.appendChild(copiado);
        setTimeout(() => {
            copiado.innerHTML = "";
        }, 1000);
        navigator.clipboard.writeText(res.innerHTML);
    });//Criando o botão de copiar a senha toda vez que gerar uma nova senha

    divSenha.appendChild(copiar);
}