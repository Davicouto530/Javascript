const caixa = document.querySelector("#caixa");
let inputNomes = document.querySelector("#inputNomes");
let btnAddNomes = document.querySelector("#addNomes");

let NomesSet = new Set();

let lista = document.createElement("ul");

btnAddNomes.addEventListener("click", () => {

    let li = document.createElement("li");
    li.setAttribute("class", "lista");

    if(NomesSet.has(inputNomes.value)){
        alert("Esse nome já existe");
    }else {
        NomesSet.add(inputNomes.value);
        console.log(NomesSet);
        lista.innerHTML = '';
        NomesSet.forEach((elem) => {
            li.innerHTML += `${elem} </br>`;
        });
    }
    inputNomes.value = '';

    lista.appendChild(li);
    caixa.appendChild(lista);
});

