const pessoa = { 
    nome: "",
    idade: "",

    getNome: function() {
        return this.nome;
    },
    getIdade: function() {
        return this.idade;
    },
    setNome: function(nome) {
        this.nome = nome;
    },
    setIdade: function(idade) {
        this.idade = idade;
    }
};

// Array para armazenar as pessoas criadas
let pessoas = [];

// Seleciona o botão e a área onde os resultados serão exibidos
const btnAdd = document.querySelector("#btn_add");
const res = document.querySelector(".res");

// Função para atualizar a exibição das pessoas cadastradas
const addPessoa = () => {
    res.innerHTML = ''; // Limpa o conteúdo antes de exibir

    pessoas.map((el) => {
        const div = document.createElement("div"); // Cria uma div para cada pessoa
        div.setAttribute("class", "pessoa"); // Adiciona classe CSS
        div.innerHTML = `Nome: ${el.getNome()} <br> Idade: ${el.getIdade()}`; // Exibe os dados corretamente
        res.appendChild(div); // Adiciona na tela
    });
};

// Adiciona um evento de clique ao botão
btnAdd.addEventListener("click", () => {
    // Obtém os valores digitados nos campos de nome e idade
    const nome = document.querySelector("#f_nome").value;
    const idade = document.querySelector("#f_idade").value;

    if (nome === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Cria um novo objeto baseado no modelo `pessoa`
    let novaPessoa = Object.create(pessoa);
    novaPessoa.setNome(nome);
    novaPessoa.setIdade(idade);

    // Adiciona ao array de pessoas
    pessoas.push(novaPessoa);

    // Limpa os campos de entrada e foca no nome
    document.querySelector("#f_nome").value = '';
    document.querySelector("#f_idade").value = '';
    document.querySelector("#f_nome").focus();

    // Atualiza a lista exibida
    addPessoa();
});
