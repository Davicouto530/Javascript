class Animais {
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    emitirSom(){
        if(this.tipo.toUpperCase() == "GATO"){
            console.log("MIAU");
        }else if(this.tipo.toUpperCase() == "CACHORRO"){
            console.log("AU AU");
        }else {
            console.log("Som desconhecido");
        }
    }
}

const animal1 = new Animais("Huck","cachorro");
const animal2 = new Animais("Alfredo","Gato");

animal1.emitirSom();
animal2.emitirSom();