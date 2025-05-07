//Ter um botão de parar, e um de inicar, quando clicar em iniciar, o carro fica indo de uma lado 
//para o outro sem ultrapassar o limite da tela, e quando clicar no botão de parar, o carro para.

// Vamos pegar o carrinho e os botões de "parar" e "iniciar"
const carro = document.getElementById("carro");
const btn_parar = document.getElementById("btn_parar");
const btn_iniciar = document.getElementById("btn_iniciar");

// Essa função começa o carrinho na posição certinha e calcula até onde ele pode ir na tela
const init = () => {
    carro.style = "position:relative;left:0px;width:100px;height:40px"; // carrinho começa na esquerda
    tamCarro = parseInt(carro.style.width); // tamanho do carrinho
    tamMax = window.innerWidth - tamCarro; // limite da tela pro carrinho não cair pra fora
}

let anima = null;// isso aqui guarda o "timer" que faz o carrinho se mexer
let tamMax = null;// aqui vai o tamanho máximo que o carrinho pode ir
let tamCarro = null;// aqui vai o tamanho do carrinho
let direcao = 0;// isso diz pra onde o carrinho vai (1 pra direita, -1 pra esquerda, 0 parado)

// Aqui é onde o carrinho se move sozinho
const mover = () => {
    // Se o carrinho chegar no limite da direita, a gente manda ele voltar pra esquerda
    if (parseInt(carro.style.left) >= tamMax) {
        direcao = -1;
    // Se o carrinho chegar no limite da esquerda, a gente manda ele pra direita
    } else if (parseInt(carro.style.left) <= 0) {
        direcao = 1;
        console.log(direcao); // mostra no console pra gente ver pra onde ele tá indo
    }

    // Agora a gente move o carrinho de verdade, somando ou tirando 10 pixels
    carro.style.left = parseInt(carro.style.left) + (10 * direcao) + "px";

    // E depois chama a função de novo bem rapidinho, pra parecer que tá andando
    anima = setTimeout(mover, 20);
}

// Quando apertar o botão de parar, a gente cancela o movimento do carrinho
btn_parar.addEventListener("click", () => {
    clearTimeout(anima);
});

// Quando apertar o botão de iniciar, a gente começa o carrinho a se mexer
btn_iniciar.addEventListener("click", () => {
    mover(); // chama a função que começa tudo
});

// Quando a página abrir, a gente chama a função pra deixar tudo certinho
window.addEventListener("load", init());

// Se a pessoa mudar o tamanho da janela, a gente recalcula o limite da tela
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width);
});

// Agora uma parte divertida: se apertar a seta pra cima ou pra baixo no teclado...
window.addEventListener("keydown", (evt) => {
    if(evt.code === "ArrowUp"){
        // Aumenta o tamanho do carrinho
        carro.style.width = parseInt(carro.style.width) + 10 + "px";
        carro.style.height = parseInt(carro.style.height) + 10 + "px";
    }
    if(evt.code === "ArrowDown"){
        // Diminui o tamanho do carrinho
        carro.style.width = parseInt(carro.style.width) - 10 + "px";
        carro.style.height = parseInt(carro.style.height) - 10 + "px";
    }

    // Toda vez que muda o tamanho, a gente recalcula o limite da tela
    tamCarro = parseInt(carro.style.width);
    tamMax = window.innerWidth - tamCarro;
})
