// Site Quiz JavaScript Code

function mostrarSenha() {
    const senhaInput = document.getElementById("p3");
    const btn = document.getElementById("toggleSenhaBtn");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        btn.textContent = "Ocultar";
    } else {
        senhaInput.type = "password";
        btn.textContent = "Mostrar";
    }
}

function corrigirQuiz() {
    let pontuacao = 0;
    let respostasErradas = [];

    // Pergunta 1
    const p1 = document.querySelector('input[name="p1"]:checked');
    if (p1 && p1.value === "HTML") {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 1");
    }

    // Pergunta 2
    const p2 = document.getElementById("p2").value.trim().toLowerCase();
    if (p2 === "domínio" || p2 === "dominio") {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 2");
    }

    // Pergunta 3
    const p3 = document.getElementById("p3").value;
    const senhaForte = p3.length >= 8 && /[A-Z]/.test(p3) && /[0-9]/.test(p3) && /[^a-zA-Z0-9]/.test(p3);
    if (senhaForte) {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 3");
    }

    // Pergunta 4
    const p4 = document.getElementById("p4").value;
    if (p4 === "1991") {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 4");
    }

    // Pergunta 5
    const p5Selecionadas = [...document.querySelectorAll('input[name="p5"]:checked')].map(e => e.value);
    const corretas = ["Java", "JavaScript"];
    const incorretas = ["HTML", "CSS"];
    const acertouP5 = corretas.every(c => p5Selecionadas.includes(c)) && incorretas.every(i => !p5Selecionadas.includes(i));
    if (acertouP5) {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 5");
    }

    // Pergunta 6
    const p6 = document.getElementById("p6").value;
    if (p6 && p6.endsWith(".html")) {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 6");
    }

    // Pergunta 7
    const p7 = document.getElementById("p7").value;
    if (p7 === "type") {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 7");
    }

    // Pergunta 8
    const p8 = document.getElementById("p8").value.trim().toLowerCase();
    if (p8 === "javascript") {
        pontuacao++;
    } else {
        respostasErradas.push("Pergunta 8");
    }

    // Exibir resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h3>Sua pontuação: ${pontuacao}/8</h3>`;

    if (respostasErradas.length > 0) {
        resultado.innerHTML += "<p>Você errou as seguintes perguntas:</p><ul>" +
            respostasErradas.map(p => `<li>${p}</li>`).join('') +
            "</ul>";
    } else {
        resultado.innerHTML += "<p>Parabéns! Você acertou tudo!</p>";
    }
}

function enviarFeedback(event) {
    event.preventDefault();
    alert("FEEDBACK ENVIADO");
}