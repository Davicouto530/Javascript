/*
 * Validação nativa com mensagem personalizada
 */

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

// Primeiro jeito de validar
document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let msg = null; // Aqui vai a mensagem personalizada que vamos mostrar pro usuário

    // Verifica se o campo de nota está vazio
    if (f_nota.validity.valueMissing) {
        msg = "Este campo é obrigatório!";// Se tiver vazio, escreve isso na variável "msg"
    } 
    // Verifica se passou do valor máximo definido no HTML (ex: max="10")
    else if (f_nota.validity.rangeOverflow) {
        msg = "Nota acima do permitido!";
    } 
    // Verifica se está abaixo do valor mínimo (ex: min="0")
    else if (f_nota.validity.rangeUnderflow) {
        msg = "Nota abaixo do permitido!";
    }

    // Aqui vai aparecer a mensagem personalizada
    f_msg.innerHTML = msg;
    // f_nota.reportValidity(); // Outra forma de mostrar a mensagem, aparece num balãozinho automático

    
    // Impede o formulário de ser enviado ao clicar no botão
    evt.preventDefault();
});


// Segundo jeito de fazer (comentado aí embaixo)
// A diferença é que agora usamos setCustomValidity() para mostrar a nossa própria mensagem no balãozinho do navegador
/*
document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let estadoValidacao = f_nota.validity; // Pegando o estado de validade do campo

    // Aqui a gente troca a mensagem padrão do navegador pela nossa
    if (estadoValidacao.valueMissing) {
        f_nota.setCustomValidity("Este campo é obrigatório!");
    } else if (estadoValidacao.rangeOverflow) {
        f_nota.setCustomValidity("Nota acima do permitido!");
    } else if (estadoValidacao.rangeUnderflow) {
        f_nota.setCustomValidity("Nota abaixo do permitido!");
    } else {
        // Se estiver tudo certo, limpa qualquer mensagem personalizada antiga
        f_nota.setCustomValidity("");
    }

    f_msg.innerHTML = f_nota.validationMessage; // Mostra a mensagem na tela

    // f_nota.reportValidity(); // Outra forma de mostrar a mensagem: aparece num balãozinho automático

    evt.preventDefault(); // Impede o envio do formulário
});
*/

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