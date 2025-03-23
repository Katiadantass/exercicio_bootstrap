$(document).ready(function () {
    // Máscaras
    $('#telefone').mask('(00) 00000-0000'); // Máscára de telefone

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            aceitoTermos: { required: true }
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira seu e-mail válido',
            telefone: 'Insira seu telefone',
            aceitoTermos: 'Você precisa aceitar os termos'
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                // Exibe o número de campos inválidos na interface, ao invés de um alert
                $('#mensagem').text(`Existem ${camposIncorretos} campo(s) pendentes(s)`).css('color, red');
            }
        },

        // Adicionando feedback visual para campos inválidos
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Insere a mensagem de erro logo após o campo
            element.addClass('is-invalid'); // Adiciona uma classe para destacar campos inválidos
        },
        success: function (label, element) {
            $(element).removeClass('is-invalid'); // Remove a classe de erro quando o campo for corrigido
        }
    });

     // Efeito de rolagem suave até o formulário
    $('button').click(function (e) {
        if ($(this).attr('type') !== 'submit') {
            e.preventDefault();
        }

        const destino = $('#cadastro');
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});