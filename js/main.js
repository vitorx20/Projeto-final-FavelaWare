$(document).ready(function () {
    // Máscaras dos inputs
    $('#phone').mask('(00) 00000-0000', {
      placeholder: '(xx) xxxxx-xxxx',
    });
    $('#cpf').mask('000.000.000-00', {
      reverse: true,
      placeholder: '000.000.000-00',
    });
    $('#cep').mask('00000-000', {
      placeholder: '00000-000',
    });

    // Validação dos campos
    $('form').validate({
      rules: {
        name: { required: true },
        email: { required: true, email: true },
        age: { required: true },
        phone: { required: true },
        cpf: { required: true },
        cep: { required: true },
        address: { required: true },
      },
      messages: {
        name: 'Por favor, digite o seu nome',
        age: 'Por favor, digite sua idade',
        phone: 'Por favor, digite seu telefone',
        email: 'Por favor, digite seu email',
        cpf: 'Por favor digite o seu CPF',
        cep: 'Por favor digite o seu CEP',
        address: 'Por favor, digite seu endereço',
      },
      submitHandler: function (form) {
        // Aqui você pode adicionar um loader ou uma mensagem de sucesso
        form.submit();
      },
      invalidHandler: function (event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          var message = 'Por favor, verifique os campos destacados em vermelho.';
          alert(message);
        }
      }
    });
  });