/**
 * Estudo do metodo setIntervalo (timer)
 * @author Davi do couto
 */

function piscar(){
    let ligada = false

    //A estrutura abaixo cria um intervalo a cada 1000milisegundos = 1s. A cada 1 segundo ele vai verificar o que está dentro
    setInterval(() => {
        if(ligada === false){//Se a lampada estiver ligada
            document.getElementById('lamp').src = 'img/on.jpg'
        } else {
            document.getElementById('lamp').src = 'img/off.jpg'
        }
        ligada = !ligada //Função NOT(!) inverte (true - false ... false - true)
    },1000)//Ajuste do intervalo(1000milisegundos = 1s)
}
