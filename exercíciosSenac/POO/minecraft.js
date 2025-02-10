/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author Davi do couto 
 */

//Classe modelo (iniciar sempre com letra maiuscula)
class Bloco {
    //Atributos
    constructor(textura, resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //Ações

    criarBloco(){
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia ${this.resistencia}`)
    }

    construir(){
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar(){       
        console.log("□ □ □ □ Recursos obtidos!")
    }

}

//Classe modelo enxada com herança de bloco
class Enxada extends Bloco{
    constructor(textura, resistencia, conquista){
        super(textura, resistencia) // Super -> classe pai
        this.conquista = conquista
    }
    //Ações
    criarEnxada(){
        console.log("_______________________________________________________________")
        console.log("-_-")
        console.log("/")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia de ${this.resistencia}`)
    }

    arar(){
        console.log("-_-_-_- Terra arada")
        if(this.conquista === true){
            console.log("* Conquista obtida!")
        }
    }

    //Polimorfismo (obrigatorio manter o nome do metodo da classe modelo (pai))
    minerar(){
        console.log("✞ Dano atribuído!")
    }
}

/*------------- MUNDO -------------*/

console.clear()

console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")

console.log("")

//Instanciando (criando) um objeto
const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("Pedra", 5)
bloco3.criarBloco()
bloco3.minerar()
console.log(typeof(bloco3))

const enxada1 = new Enxada("madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2= new Enxada("ferro", 10, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 20, false)
enxada3.criarEnxada()
enxada3.minerar()



