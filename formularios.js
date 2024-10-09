document.addEventListener('DOMContentLoaded', () => {
    const SUPABASE_URL = 'https://tfwhxekecilwmcjhsldv.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmd2h4ZWtlY2lsd21jamhzbGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4OTI2MjEsImV4cCI6MjA0MzQ2ODYyMX0.KkIbb7KgGBKRRVwwQ1n2A-TKVNs5gCeKdyr-VoC6uTA';

    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    document.getElementById('product-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const nome = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const telefone = document.getElementById('phone').value;
        const cpf = document.getElementById('cpf').value;
        const cep = document.getElementById('cep').value;
        const endereco = document.getElementById('adress').value;

        await createData(nome_completo, e_mail, data_de_nasciment, telefone, cpf, cep, endereco);
        resetForm();
    });

    async function createData(nome_completo, descricao, e_mail, data_de_nascimento, telefone, cpf, cep, endereco) {
        try {
            const { data, error } = await _supabase
                .from('Incricoes')
                .insert([{ nome_completo, descricao, e_mail, data_de_nascimento, telefone, cpf, cep, endereco }]);

            if (error) throw error;
            console.log("Dados criados:", data);
        } catch (error) {
            console.error("Erro ao criar dados:", error);
        }
    }
});
