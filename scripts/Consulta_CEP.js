    function validarEntrada() {
            const cepInput = document.getElementById('cep');
            let cep = cepInput.value.replace(/\D/g, '');
            if (cep.length === 8) {
                consultarCEP(cep);
            } else {
                document.getElementById('adress').value = 'CEP inválido';
            }
            cepInput.value = cep;
        }

        function consultarCEP(cep) {
            const url = `https://forge.withub.ai/api/triggers/5257a02d-c19b-4969-ab81-2206de86082c/execute/670153d6233838da5cd6e092`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ CEP: cep })
            })
            .then(response => response.json())
            .then(data => {
                const endereco = data.data ? data.data.Endereco : null;
                document.getElementById('adress').value = endereco ? endereco : 'Endereço não encontrado.';
            })
            .catch(error => document.getElementById('adress').value = 'Erro: ' + error.message);
        }