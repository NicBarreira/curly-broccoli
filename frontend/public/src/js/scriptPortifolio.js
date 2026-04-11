window.onload = function() {
    // 1. CAPTURA DOS DADOS (Tudo vem do LocalStorage agora)
    const nomeBruto = localStorage.getItem('visitorName') || 'Visitante';
    const sexo = localStorage.getItem('visitorGender') || 'none';
    
    // Capitaliza a primeira letra (nicolas -> Nicolas)
    const nome = nomeBruto.charAt(0).toUpperCase() + nomeBruto.slice(1);

    // Seleção de elementos (Check de segurança com '?' para não quebrar o código)
    const protocolText = document.getElementById('protocol-text');
    const progressFill = document.querySelector('.progress-fill');
    const heroContent = document.getElementById('hero-content');

    // 2. EXIBIÇÃO DA SAUDAÇÃO
    exibirSaudacao(nome, sexo);
    
    if (heroContent) {
        heroContent.classList.remove('hidden');
        heroContent.classList.add('visible');
    }

    // 3. ANIMAÇÃO DE BOOT (Protocolos)
    const mensagens = [
        { t: "SISTEMA RECONHECIDO: " + nome.toUpperCase(), p: "35%" },
        { t: "ESTABELECENDO CONEXÃO SEGURA...", p: "70%" },
        { t: "VIAGEM INICIADA.", p: "100%" }
    ];

    let i = 0;
    const bootInterval = setInterval(() => {
        if (i < mensagens.length) {
            if (protocolText) protocolText.innerText = mensagens[i].t;
            if (progressFill) progressFill.style.width = mensagens[i].p;
            i++;
        } else {
            clearInterval(bootInterval);
            if (progressFill) progressFill.style.boxShadow = "0 0 15px #00cec9";
        }
    }, 700);
};

function exibirSaudacao(nome, sexo) {
    const msgElemento = document.getElementById('msg-boas-vindas');
    if (!msgElemento) return;

    let saudacaoPessoal = "";
    if (sexo === 'male') {
        saudacaoPessoal = `Seja muito bem-vindo.`;
    } else if (sexo === 'female') {
        saudacaoPessoal = `Seja muito bem-vinda.`;
    } else {
        saudacaoPessoal = `É um prazer ter você na estação.`;
    }

    const agora = new Date();
    const hora = agora.getHours();
    const diaSemanaIndex = agora.getDay();
    const diaNome = agora.toLocaleDateString('pt-br', { weekday: 'long' });
    const articulador = (diaSemanaIndex === 0 || diaSemanaIndex === 6) ? "deste" : "nesta";

    let tempoDia = (hora < 12) ? "começo" : (hora < 18) ? "meio" : "final";

    msgElemento.innerHTML = `
        Olá, <span class="cyan-text">${nome}</span>! ${saudacaoPessoal}
        <br>
        <span style="font-size: 1.1rem; opacity: 0.7; font-weight: 300;">
            Que bom que está me visitando no ${tempoDia} ${articulador} ${diaNome}
        </span>
    `;
}