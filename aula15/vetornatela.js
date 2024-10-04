let valores = [8, 5, 2, 7]
valores.push(4)
valores.sort()

/* PRIMEIRA FORMA DE FAZER PARA MOSTRAR NA TELA 
for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

if(valores.indexOf(6) == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 5 está na posição ${valores.indexOf(5)}`)
}
