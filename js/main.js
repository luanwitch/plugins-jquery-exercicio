$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: { 
                required: false,
            },
            mensagem: {
                required: true,
                minlength: 10
            },
            cpf: {
                required: true,
                cpf: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
                cep: true,
            },
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "O nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            },
            veiculoDeInteresse: {
                required: "Por favor, insira o veículo de interesse"
            },
            mensagem: {
                required: "Por favor, insira uma mensagem",
                minlength: "A mensagem deve ter pelo menos 10 caracteres"
            },

            cpf: {
                required: "Por favor, digite o seu cpf",
                minlength: "A mensagem deve ter pelo menos 11 caracteres"
            },

            endereco: {
                required: "Por favor, digite o seu endereço",
                minlength: "A mensagem deve ter pelo menos 40 caracteres"
            },

            cep: {
                required: "Por favor, digite o seu cep",
                minlength: "A mensagem deve ter pelo menos 8 caracteres"
            },

        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html, body').animate({ 
            scrollTop: destino.offset().top
        }, 1000);
    });
});
