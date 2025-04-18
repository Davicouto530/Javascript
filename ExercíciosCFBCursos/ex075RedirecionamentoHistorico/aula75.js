"use strict"; 

/* 
 * Redirecionamento E Histórico
 */

const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", (evt) => {
    //Redirecionamento de páginas---------------------

    // window.location="https://google.com.br";
    //Redireciona para a página do google

    // window.location.replace("https://google.com.br");
    //Redireciona para a página do google e remove a atual página 

    // window.location.assign("https://google.com.br");
    //Redireciona para a página do google mas não remove a atual página 

    // window.location.reload();
    //O "reload()" recarrega a página

    //Histórico de página---------------------

    // window.history.back();//Volta para a página anterior

    // window.history.forward();//Vai para a próxima página

    //window.history.go(1);//Ele redireciona para o tanto de páginas para
    //frente, então vai andar 1 página do histórico, e "-" é para tras

    console.log(window.history.length);//Ele mostra o tamanho do histórico

    window.location = url.value;
    //Vai redirecionar para a url da página escrita no input
})