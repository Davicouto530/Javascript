/*
 * Cronômetro com Timestamp
 */

const timer = document.getElementById("timer");

// Pegando o timestamp e colocando na variável "tmpIni"
const tmpIni = Date.now(); 
console.log(tmpIni);

const contador = () => {
    // Vai chamar um timestamp diferente quando chamar essa função
    const tmpAtual = Date.now(); 

    // Vai fazer a conta do tempo atual menos o tempo inicial
    let contagem = tmpAtual - tmpIni; 

    // Obtendo o tempo em segundos invés de milisegundos, para não ter atraso
    let seg = Math.floor((tmpAtual - tmpIni) / 1000);
    
    console.log(seg);
}

setInterval(contador, 1000);