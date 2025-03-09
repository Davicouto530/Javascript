"use strict"

/**
* Método addEventListener
*/

//Pegando todas as tags que tem a class ".curso" e fazendo um array
const cursos = [...document.querySelectorAll(".curso")];

//Percorre todos os elementos do array que tem as "div"
cursos.map((e) => {
    //Pega todos os elementos, e cria um evento de click em cada um, e uma função quando clicar
    e.addEventListener("click", (evt) => {
        const el = evt.target;//O "target" mostra qual tag disparou o evento "click"
        el.classList.add('destaque');//Quando clicar na tag que tem o envento,
        //vai adiconar uma nova class "destaque" nela, substituindo a atual
    });
});

//____________________________________________________________
//Outro exemplo

let c1 = document.querySelector("#c1");

// const msg = () => {
//     alert('teste');
// };

//Pega a variável que a tag está sendo armazenada, e coloca ".addEventListener",
//dentro dos parenteses primeiro coloca o evento que aquela tag vai executar "click".
//Pode criar uma função fora que vai ser executada quando clicar no botão e chamar ela
//do lado ",função", ou pode já criar um Arrow Function dentro dos parenteses
c1.addEventListener("click", () => {
    alert("Teste");
});

