/*
 * Validação nativa
 */

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

// Pegando a tag do botão do HTML sem colocar dentro de 
// nenhuma variável, e colocando um evento de click
document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let msg = null; // Variável para guardar as mensagem que o formulário vai retornar

    // Verifica se o campo "f_nota" é inválido usando a validação nativa
    if (!f_nota.checkValidity()) {
        // Se o campo for inválido, obtém a mensagem de erro automática gerada pelo navegador
        msg = f_nota.validationMessage;
    } 

    f_msg.innerHTML = msg; // Colocando o que tem dentro de "msg" na tag do HTML
    // Serve para que o formulário não execute o "submit" toda vez que clicar no botão
    evt.preventDefault();
});

// Métodos de validação do DOM:
// checkValidity()
// setCustomValidity()

// Propriedades de validação do DOM
// validity
// validationMessage


// Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida usando setCustomValidity().

patternMismatch: true, se o valor de um elemento não corresponder ao padrão definido pelo atributo pattern.

rangeOverflow: true, se o valor for maior que o valor máximo definido pelo atributo max.

rangeUnderflow: true, se o valor for menor que o valor mínimo definido pelo atributo min.

stepMismatch: true, se o valor não estiver alinhado com os intervalos definidos pelo atributo step.

tooLong: true, se o valor exceder o número máximo de caracteres definido por maxlength.

tooShort: true, se o valor tiver menos caracteres do que o mínimo definido por minlength.

typeMismatch: true, se o valor não corresponder ao tipo de entrada (por exemplo, um e-mail inválido em <input type="email">).

valueMissing: true, se o campo for obrigatório (required) e estiver vazio.

valid: true, se todos os outros valores forem false, ou seja, o valor é considerado válido.
*/