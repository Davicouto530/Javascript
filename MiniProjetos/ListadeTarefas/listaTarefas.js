const inputTarefas = document.querySelector("#inputTarefas");
const btnAddTarefa = document.querySelector("#addTarefa");
const lista = document.querySelector("#lista");

// Pega as tarefas salvas no localStorage (se tiver) ou começa com um array vazio
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Salva o array de tarefas no localStorage (transforma em string antes)
function saveTarefa() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Cria o botão de lixeira e adiciona o evento pra deletar a tarefa
function deleteTarefa(li, ind) {
    const btnLixeira = document.createElement("img"); // Cria a imagem
    btnLixeira.setAttribute("src", "./lixeira.png"); // Define o ícone
    btnLixeira.setAttribute("class", "btns"); // Coloca uma classe pra estilizar

    // Quando clicar na lixeira
    btnLixeira.addEventListener("click", (evt) => {
        evt.stopPropagation(); // Impede que o clique também marque a tarefa como lida
        tarefas.splice(ind, 1); // Remove a tarefa do array
        saveTarefa(); // Salva a nova lista no localStorage
        renderizarTarefas(); // Recarrega a lista na tela
        console.log(tarefas); // Só pra ver no console mesmo
    });

    li.appendChild(btnLixeira); // Coloca o botão na tarefa (li)
}

// Cria o botão de editar e adiciona o evento pra editar a tarefa
function editTarefa(li, ind) {
    const btnEdit = document.createElement("img"); // Cria a imagem
    btnEdit.setAttribute("src", "./edit.png"); // Define o ícone
    btnEdit.setAttribute("class", "btns"); // Classe pra estilizar

    // Quando clicar no botão de editar
    btnEdit.addEventListener("click", (evt) => {
        evt.stopPropagation(); // Impede que o clique marque a tarefa como lida
        const novaTarefa = prompt('Editar tarefa: ', 'Digite a tarefa'); // Abre um prompt pra editar
        if (novaTarefa !== '' && novaTarefa !== null) { // Verifica se foi digitado algo
            tarefas[ind].texto = novaTarefa; // Atualiza o texto da tarefa
            saveTarefa(); // Salva no localStorage
            renderizarTarefas(); // Atualiza a lista na tela
        }
    });

    li.appendChild(btnEdit); // Coloca o botão na tarefa (li)
}

// Função que mostra todas as tarefas na tela
function renderizarTarefas() {
    lista.innerHTML = ''; // Limpa a lista antes de renderizar tudo de novo

    tarefas.map((evt, ind) => {
        let li = document.createElement("li"); // Cria um <li> pra cada tarefa
        li.setAttribute("class", "lista"); // Adiciona uma classe pra estilizar
        li.innerHTML = `${evt.texto}`; // Coloca o texto da tarefa dentro do li

        // Se a tarefa estiver marcada como lida, aplica uma classe que muda o estilo
        if (evt.lida === true) {
            li.classList.add("marcarLista");
        }

        // Quando clicar na tarefa, marca ou desmarca como lida
        li.addEventListener("click", () => {
            evt.lida = !evt.lida; // Alterna entre lida e não lida
            saveTarefa(); // Salva a mudança
            renderizarTarefas(); // Atualiza a lista na tela
        });

        // Chama as funções que criam os botões de deletar e editar
        deleteTarefa(li, ind);
        editTarefa(li, ind);

        // Coloca essa tarefa (li) na lista (ul)
        lista.appendChild(li);
    });
}

// Quando clicar no botão de adicionar tarefa
btnAddTarefa.addEventListener("click", () => {
    if (inputTarefas.value == '') { // Verifica se digitou 
        alert("Informe um valor válido"); // Se não digitou nada, avisa
    } else {
        // Adiciona a nova tarefa no array com o texto e marca como não lida
        tarefas.push({ texto: inputTarefas.value, lida: false });
        saveTarefa(); // Salva no localStorage
        inputTarefas.value = ''; // Limpa o campo
        inputTarefas.focus(); // Foca no campo de novo
        renderizarTarefas(); // Atualiza a lista na tela
    }
});

// Assim que a página carrega, já mostra as tarefas que estão salvas
window.onload = renderizarTarefas();