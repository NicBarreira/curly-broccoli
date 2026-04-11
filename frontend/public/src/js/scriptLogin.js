document.querySelector('.btn-login').addEventListener('click', async (event) => {
    event.preventDefault();

    // 1. Captura os dados do seu HTML
    const nome = document.querySelector('input[placeholder="enter your name"]').value;
    const email = document.querySelector('#email').value; // Certifique-se que o ID no HTML é 'email'
    const generoSelecionado = document.querySelector('input[name="gender"]:checked');
    const genero = generoSelecionado ? generoSelecionado.value : "Não informado";

    if (!nome || !email) {
        alert("Preencha todos os campos para continuar!");
        return;
    }

    // 2. RESET DE MEMÓRIA: Limpa o que tinha antes (Tchau, Emilly!)
    localStorage.clear();

    // 3. Grava os novos dados no navegador (LocalStorage)
    localStorage.setItem('visitorName', nome);
    localStorage.setItem('visitorGender', genero);
    localStorage.setItem('visitorEmail', email);

    // 4. Envia para o Banco de Dados (Spring Boot)
    const dadosParaOBanco = {
        nome: nome,
        genero: genero,
        email: email
    };

    try {
        const response = await fetch('http://localhost:8080/api/visitantes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosParaOBanco)
        });

        if (response.ok) {
            console.log("Salvo no MySQL com sucesso!");
        }
    } catch (error) {
        console.error("Erro ao conectar no backend:", error);
    }

    // 5. Redireciona para o portfólio
    window.location.href = 'portifolio.html';
});