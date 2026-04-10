window.onload = function() {
    // 1. CAPTURA E FORMATAÇÃO DOS DADOS
    const nomeBruto = localStorage.getItem('visitorName') || 'Visitante';
    const sexo = localStorage.getItem('visitorGender');

    // Capitaliza a primeira letra do nome (Ex: nicolas -> Nicolas)
    const nome = nomeBruto.charAt(0).toUpperCase() + nomeBruto.slice(1);

    const protocolText = document.getElementById('protocol-text');
    const progressFill = document.querySelector('.progress-fill');
    const heroContent = document.getElementById('hero-content');
    const bootContainer = document.querySelector('.protocol-status');

    // 2. EXIBIÇÃO IMEDIATA (O nome aparece no milissegundo que carrega)
    exibirSaudacao(nome, sexo);
    
    if (heroContent) {
        heroContent.classList.remove('hidden');
        heroContent.classList.add('visible');
    }

    // 3. SEQUÊNCIA DE PROTOCOLOS (O "Juice" visual)
    const mensagens = [
        { t: "SISTEMA RECONHECIDO: " + nome.toUpperCase(), p: "35%" },
        { t: "ESTABELECENDO CONEXÃO SEGURA...", p: "70%" },
        { t: "VIAGEM INICIADA.", p: "100%" }
    ];

    let i = 0;
    const bootInterval = setInterval(() => {
        if (i < mensagens.length) {
            protocolText.innerText = mensagens[i].t;
            progressFill.style.width = mensagens[i].p;
            i++;
        } else {
            // Para o motor aqui: Mantém a barra em 100% com um brilho extra
            clearInterval(bootInterval);
            progressFill.style.boxShadow = "0 0 15px #00cec9";
        }
    }, 700);
};

function exibirSaudacao(nome, sexo) {
    const msgElemento = document.getElementById('msg-boas-vindas');
    if (!msgElemento) return;

    // A. Lógica de Gênero (Evitando o "bem-vinde")
    let saudacaoPessoal = "";
    if (sexo === 'male') {
        saudacaoPessoal = `Seja muito bem-vindo.`;
    } else if (sexo === 'female') {
        saudacaoPessoal = `Seja muito bem-vinda.`;
    } else {
        saudacaoPessoal = `É um prazer ter você na estação.`;
    }

    // B. Lógica Temporal e Gramatical
    const agora = new Date();
    const hora = agora.getHours();
    const diaSemanaIndex = agora.getDay(); // 0 = Domingo, 6 = Sábado
    const diaNome = agora.toLocaleDateString('pt-br', { weekday: 'long' });

    // Ajuste "nesta" para segunda-sexta e "deste" para sábado-domingo
    const articulador = (diaSemanaIndex === 0 || diaSemanaIndex === 6) ? "deste" : "nesta";

    let tempoDia = "";
    if (hora < 12) {
        tempoDia = "começo";
    } else if (hora >= 12 && hora < 18) {
        tempoDia = "meio";
    } else {
        tempoDia = "final";
    }

    // C. Injeção do conteúdo final
    msgElemento.innerHTML = `
        Olá, <span class="cyan-text">${nome}</span>! ${saudacaoPessoal}
        <br>
        <span style="font-size: 1.1rem; opacity: 0.7; font-weight: 300;">
            Que bom que está me visitando no ${tempoDia} ${articulador} ${diaNome}
        </span>
    `;
}