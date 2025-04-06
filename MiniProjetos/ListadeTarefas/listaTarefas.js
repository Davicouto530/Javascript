const caixa = document.querySelector("#caixa");
const inputTarefas = document.querySelector("#inputTarefas");
const btnAddTarefa = document.querySelector("#addTarefa");

let tarefas = [];

let lista = document.createElement("ul");

btnAddTarefa.addEventListener("click", () => {

    if (inputTarefas.value == '') {
        alert("Informe um valor válido");
    } else {
        tarefas.push({ texto: inputTarefas.value, lida: false });

        console.log(tarefas);
        inputTarefas.value = '';
        renderizarTarefas();
    }
});

const renderizarTarefas = () => {
    lista.innerHTML = '';
    tarefas.map((evt, ind) => {
        let li = document.createElement("li");
        li.setAttribute("class", "lista");
        li.innerHTML += `${evt.texto} </br>`;

        if (evt.lida === true) {
            li.classList.add("marcarLista");
        }
        
        li.addEventListener("click", () => {
            evt.lida = !evt.lida;
    
            renderizarTarefas();
        });

        const btnLixeira = document.createElement("img");
        btnLixeira.setAttribute("src", "./lixeira.png");
        btnLixeira.setAttribute("class", "btn_lixeira");
        btnLixeira.addEventListener("click", (evt) => {
            evt.target.parentNode.remove();
            tarefas.splice(ind, 1);
    
            renderizarTarefas();
            console.log(tarefas);
        });
        li.appendChild(btnLixeira);
        lista.appendChild(li);
    });
    caixa.appendChild(lista);
}