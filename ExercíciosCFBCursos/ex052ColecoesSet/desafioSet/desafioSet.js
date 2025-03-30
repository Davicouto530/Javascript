// Pegando tags HTML pelo ID
const caixa = document.querySelector("#caixa");
let inputNomes = document.querySelector("#inputNomes");
let btnAddNomes = document.querySelector("#addNomes");

// Cria um conjunto (Set) para armazenar os nomes sem repetição
let NomesSet = new Set();

// Cria uma lista desordenada (ul) para exibir os nomes
let lista = document.createElement("ul");

// Adiciona um evento de clique ao botão
btnAddNomes.addEventListener("click", () => {
    
    // Cria um item de lista (li)
    let li = document.createElement("li");
    li.setAttribute("class", "lista"); // Define uma classe para o li

    // Verifica se o nome já existe no conjunto
    if (NomesSet.has(inputNomes.value)) {
        alert("Esse nome já existe"); // Exibe um alerta caso o nome já tenha sido adicionado
    } else {
        // Adiciona o novo nome ao conjunto
        NomesSet.add(inputNomes.value);
        console.log(NomesSet); // Exibe o conjunto atualizado no console

        // Limpa a lista antes de recriá-la
        lista.innerHTML = '';

        // Percorre o conjunto e adiciona os nomes ao item de lista
        NomesSet.forEach((elem) => {
            li.innerHTML += `${elem} </br>`; // Adiciona cada nome com uma quebra de linha
        });
    }

    // Limpa o campo de input após a inserção
    inputNomes.value = '';

    // Adiciona o item de lista atualizado à lista
    lista.appendChild(li);

    // Adiciona a lista dentro da div 'caixa'
    caixa.appendChild(lista);
});
