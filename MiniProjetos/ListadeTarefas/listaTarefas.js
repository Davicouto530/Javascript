const inputTarefas = document.querySelector("#inputTarefas");
const btnAddTarefa = document.querySelector("#addTarefa");
const lista = document.querySelector("#lista");

let tarefas = [];

//Função para exibir a lista
const renderizarTarefas = () => {
    lista.innerHTML = '';

    //Percorrendo o array
    tarefas.map((evt, ind) => {
        let li = document.createElement("li");
        li.setAttribute("class", "lista");
        li.innerHTML += `${evt.texto}`;
        //Adicionando o conteúdo do array na tag "li"

        //Se o elemento do array tiver o valor de lida igual a true
        if (evt.lida === true) {
            li.classList.add("marcarLista");//Adiciona essa classe na "li"
        }

        //Quando clicar na "li", risca e vira vermelho
        //indicando que já está feita
        li.addEventListener("click", () => {
            evt.lida = !evt.lida;//Invertendo o valor
            saveTarefa();
            renderizarTarefas();
        });

        deleteTarefa(li, ind);
        editTarefa(li, ind);
        lista.appendChild(li);
    });
}

function deleteTarefa(li, ind) {
    //Criando a img da lixeira
    const btnLixeira = document.createElement("img");
    btnLixeira.setAttribute("src", "./lixeira.png");
    btnLixeira.setAttribute("class", "btns");
    btnLixeira.addEventListener("click", (evt) => {
        //Verificando aonde foi clicado para remover
        evt.target.parentNode.remove();
        tarefas.splice(ind, 1);
        saveTarefa();

        renderizarTarefas();
        console.log(tarefas);
    });
    li.appendChild(btnLixeira);
}

function editTarefa(li, ind) {
    const btnEdit = document.createElement("img");
    btnEdit.setAttribute("src", "./edit.png");
    btnEdit.setAttribute("class", "btns");
    btnEdit.addEventListener("click", (evt) => {
        evt.stopPropagation(); // Impede o clique de subir até o <li>
        const novaTarefa = prompt('Editar tarefa: ', 'Digite a tarefa');
        console.log(novaTarefa)
        if (novaTarefa !== '') {
            tarefas[ind].texto = novaTarefa; // Atualiza o array!
            saveTarefa();
            renderizarTarefas();
        }
    });
    li.appendChild(btnEdit);
}

function saveTarefa() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

btnAddTarefa.addEventListener("click", () => {

    //Verificando se tem algo escrito no input
    if (inputTarefas.value == '') {
        alert("Informe um valor válido");//Se não tiver, exibe isso
    } else {
        //Se tiver, adiciona no array o que foi escrito no input
        //com a chave "texto", e o valor "lida"
        tarefas.push({ texto: inputTarefas.value, lida: false });
        saveTarefa();
        console.log(tarefas);
        inputTarefas.value = '';
        inputTarefas.focus();
        renderizarTarefas();//exibindo a lista depois de adicionar
    }
});