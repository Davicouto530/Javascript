/**
 * Carrossel de imagens
 * @author Davi do couto
 */

let indice = 0 //0,1,2 (3 imagem)

// Serve para capturar a tag html identificada(id)
const imgs = document.getElementById('imagens')

//Capturar dois elementos html
const imagem = document.querySelectorAll('#imagens img')

function carrossel(){
    indice++ //Somar 1 a variável "indice"
    console.log(indice)//Apoio a lógica
    if(indice >= imagem.length){//Conta quantas imagens tem dentro
        indice = 0
    }
        //A linha abaixo modifica o css de imgs
        //Style modifica o CSS
        //transform(deslocamento do eixo x)
        //Indice zero: posição inicial | 1: deslocar 512px a esquerda | 2: deslocar 1024px esquerda
        //OBS: 512px (sincronizar com o tamanho das imagens (CSS))
        imgs.style.transform = `translateX(${-indice * 512}px)`
    
}

//A linha abaixo executa a função carrossel a cada 2 segundos
setInterval(carrossel, 2000)