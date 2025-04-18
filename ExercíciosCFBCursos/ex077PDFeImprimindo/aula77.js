"use strict"; 

/* 
 *  PDF e Imprimindo
 */

const btn_imp = document.getElementById("btn_imp");

//Quando clicar no botão de imprimir, vai criar uma nova janela
//para imprimir, com os conteúdos e estilos passados ai dentro
btn_imp.addEventListener("click", () => {
    //Pegou o conteúdo de dentro da id "tabela"
    const conteudo = document.getElementById("tabela").innerHTML;
    
    //Fazendo o estilo da tabela pelo JS com CSS
    let estilo = "<style>";
    estilo += "table {width: 100%; font: 25px Calibri;}";
    estilo += "table, th, td {border: 2px solid #888; border-collapse: collapse;";
    estilo += "padding: 4px 8px;text-align: center;}";
    estilo += "</style>";

    //Só definiu uma largura e uma altura para a nova janela
    const win = window.open('', '', 'height=700,width=700');

    //Escrevendo os conteúdos da nova página, com as tags de cabeçalho
    win.document.write('<html><head>');
    win.document.write('<title>CFB Cursos</title>');
    win.document.write(estilo);//Colocando o estilo da página criado pelo JS
    win.document.write('</head><body>');
    win.document.write(conteudo);//Colocando o conteúdo da nova página
    win.document.write('</body></html>');

    win.print();//Vai imprimir com essa formatação da nova janela
});