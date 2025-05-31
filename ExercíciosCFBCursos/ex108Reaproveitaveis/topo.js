/*
 * Header Reaproveitável
 */

// Pegando o elemento <body> do documento
const body = document.body;

// Criando uma string com as regras CSS para estilizar o topo
const estiloTopo =
    "display: flex;" + // Usa flexbox
    "justify-content: space-between;" + // Espaça os itens nas extremidades
    "align-items: center;" + // Alinha verticalmente ao centro
    "background-color: #eee; "; // Cor de fundo cinza claro

// Criando a div que será o topo (header)
const topo = document.createElement("div");
topo.setAttribute("id", "topo"); // Define id="topo"
topo.setAttribute("style", estiloTopo); // Aplica o estilo criado acima

// Insere o topo no início do body
body.prepend(topo);

// Estilo para a logo (imagem)
const estiloImgLogo = "width: 200px;"; // Define largura fixa de 200px para a imagem

// Criando o conteúdo da logo com uma div e uma imagem
const logo =
    "<div id='logo' class='logo'>" + // Abre a div da logo
    "<img src='logoCfbCursos.jpg' title='CFBCursos' style='" + estiloImgLogo + "'/>" +
    "</div>"; // Fecha a div

// Insere a logo dentro da div topo
topo.innerHTML += logo;

// Criando o conteúdo da área de login com matrícula e nome
const login =
    "<div id='login' class='login'>" + // Abre a div do login
    "<p id='matricula'>Matrícula: <span></span></p>" + // Parágrafo para matrícula
    "<p id='nome'>Nome: <span></span></p>" + // Parágrafo para nome
    "</div>"; // Fecha a div

// Insere a área de login dentro da div topo
topo.innerHTML += login;
