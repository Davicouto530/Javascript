/**
 * Estudo do array(vetor)
 * @author Davi do couto
 */

console.log()
let alunos = []
console.log(typeof (alunos))

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane"]
console.log(typeof (alunosEM1))

// ".lenght" obtem um tamanho de um array
console.log(alunosEM1.length)

// Exibindo os dados de um array
console.log(alunosEM1)

//Exibindo um aluno do array
console.log(alunosEM1[2])

// Exibindo os dados de um array em uma tabela
console.table(alunosEM1)

//Adicionando um elemento na array
alunosEM1.push("Luiza")
console.table(alunosEM1)

//Modificar um elemento do array
alunosEM1[0] = "Victor"
console.table(alunosEM1)

//Excluir um elemento de um array
delete alunosEM1[2]
console.table(alunosEM1)

//Uso do laço "for" para percorrer um array
let notas = [3, 8, 5, 9, 2]

//Percorrendo os conteúdos de dentro do array
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}

// forEach (Simplificação do laço for para uso em array)
notas.forEach((n) => {
    console.log(n)
})

//Map (mapeamento da estrutura de dados para calcular ou conversões)
//Exemplo 1: Adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})

console.log(notas)
console.log(notasAtualizadas)

//Exemplo 2: Conversão de um sistema de notas
/*
    NA - Não atendeu (nota < 5)
    PA - Parcialmente atendido (nota entre 5 e 7)
    A - Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if(nc < 5){
        return "NA"
    }else if(nc > 7){
        return "A"
    }else {
        return "PA"
    }
})

console.log(notas)
console.log(notasConvertidas)