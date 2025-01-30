/**
 * Estudo do metodo setIntervalo (timer)
 * @author Davi do couto
 */

let recive

let broken = false

function piscar(recive) {
    let ligada = false

    //A estrutura abaixo cria um intervalo a cada 1000milisegundos = 1s. A cada 1 segundo ele vai verificar o que está dentro
    setInterval(() => {
        if (ligada === false) {//Se a lampada estiver ligada
            document.getElementById('lamp').src = 'img/on.jpg'
        } else {
            document.getElementById('lamp').src = 'img/off.jpg'
        }
        ligada = !ligada //Função NOT(!) inverte (true - false ... false - true)
    }, 1000)//Ajuste do intervalo(1000milisegundos = 1s)
}

function ligar(clickLigada) {
    clickLigada = false

    if(broken !== true){
        if (clickLigada === false) {
            document.getElementById('lamp').src = 'img/on.jpg'
        } else {
            document.getElementById('lamp').src = 'img/off.jpg'
        }
    }
}

function desligar(clickDesligada, recive) {
    clickDesligada = true

    if (!broken) {
        if (clickDesligada === true || recive === true) {
            document.getElementById('lamp').src = 'img/off.jpg'
        } else {
            document.getElementById('lamp').src = 'img/on.jpg'
        }
    }

}

function quebrar(recive, broken) {
    //lógica para quebrar a lâmpada
    if (recive === 4) {
        //A linha abaixo cria um objeto usando a classe Audio
        let som = new Audio()
        console.log(typeof (som))
        som.src = "sound/glassbreaking.wav"
        som.play()

        //Manipulação do DOM
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }
}

